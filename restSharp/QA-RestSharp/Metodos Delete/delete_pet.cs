namespace QA_RestSharp;

using System;
using System.Net.NetworkInformation;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using RestSharp;

public class Tests_Delete
{
    public RestClient client;
    public RestRequest endpoint;
    public RestResponse resp;


    public RestClient Client(string uri)
    {
        client = new RestClient(uri);
        return client;
    }

    public RestRequest Endpoint(string rota)
    {
        endpoint = new RestRequest(rota);
        return endpoint;
    }

    public void Delete()
    {
        endpoint.Method = Method.Delete;
        endpoint.RequestFormat = DataFormat.Json;
    }

    public void Get()
    {
        endpoint.Method = Method.Get;
        endpoint.RequestFormat = DataFormat.Json;
    }

    public void ReturnText()
    {
        JObject obs = JObject.Parse(resp.Content);
        Console.WriteLine(obs);
    }

    public RestResponse StatusCode(int code)
    {
        resp = client.Execute(endpoint);

        if (resp.IsSuccessful)
        {
            var status = (int)resp.StatusCode;
            Assert.AreEqual(code, status);
        }
        else
        {
            var status = (int)resp.StatusCode;
            var desc = resp.StatusDescription;
            var content = resp.Content;
        }
        return resp;
    }


    public dynamic SearchValue(dynamic chave)
    {
        dynamic obj = JProperty.Parse(resp.Content);
        var value = obj[chave];
        return value;
    }

    public void Header(string chave, string value)
    {
        endpoint.AddHeader(chave, value);
    }


    [Test]
    public void DeletePet()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/12345");
        Header("api_key", "special-key");
        Delete();
        StatusCode(200);
        ReturnText();

        var obj_id = (String)SearchValue("message"); //aq ele devolve um obj {"message": 12345}

        var expect_id = "12345";

        Assert.That(expect_id, Is.EqualTo(obj_id));
    }

    [Test]
    public void CheckDeleteId()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/1111");
        Header("api_key", "special-key");
        Get();
        StatusCode(405);
        ReturnText();

        string msg = SearchValue("message");
        Assert.That(msg, Is.EqualTo("Pet not found"));
    }
}
