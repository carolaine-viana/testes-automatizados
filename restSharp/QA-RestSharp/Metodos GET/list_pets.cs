namespace QA_RestSharp;

using System;
using System.Net.NetworkInformation;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using RestSharp;

public class Tests_GET
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
        var valor = obj[chave];
        return valor;
    }

    public void Header(string chave, string valor)
    {
        endpoint.AddHeader(chave, valor);
    }


    [Test]
    public void Consult()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/12345");
        Get();
        StatusCode(200);
        ReturnText();
    }

    [Test]
    public void FindPetById()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/12345");
        Header("api_key", "special-key");
        Get();
        StatusCode(200);
        ReturnText();

        var obj_name = (String)SearchValue("name");
        var expect_name = "doggie";

        var obj_id = (String)SearchValue("id");
        var expect_id = "12345";

        Assert.That(expect_name, Is.EqualTo(obj_name));
        Assert.That(expect_id, Is.EqualTo(obj_id));
    }

    [Test]
    public void CheckIdExistence()
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
