namespace QA_RestSharp;

using System;
using System.Net.NetworkInformation;
using System.Runtime.InteropServices.JavaScript;
using System.Security.Principal;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using RestSharp;

public class Tests_Post
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

    public void Post()
    {
        endpoint.Method = Method.Post;
        endpoint.RequestFormat = DataFormat.Json;
    }


    public void Body_json(string _body)
    {
        endpoint.AddParameter("application/json",
            _body,
            ParameterType.RequestBody);
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

            Console.WriteLine($"{status} - {desc}");
            Console.Write(content);
        }
        return resp;
    }

    public void ReturnText()
    {
        JObject obs = JObject.Parse(resp.Content);
        Console.WriteLine(obs);
    }

    public string _json()
    {
        var body = @"{
          ""id"": 12345,
          ""category"": {
            ""id"": 0,
            ""name"": ""string""
          },
          ""name"": ""doggie"",
          ""photoUrls"": [
            ""string""
          ],
          ""status"": ""available""
        }";
        return body;
    }

    public string _json_error()
    {
        var body = @"{
          ""id"": 12345,
          ""category"": {
            ""id"": 0,
            ""name"": 123
          }
          ""status"": ""123""
        }";
        return body;
    }

    public dynamic search_value(dynamic chave)
    {
        dynamic obj = JProperty.Parse(resp.Content);
        var value = obj[chave];

        return value;
    }

    [Test]
    public void Register()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet");
        Post();
        Body_json(_json());
        StatusCode(200);
        ReturnText();

        var status = (int)resp.StatusCode;
        Assert.That(status, Is.EqualTo(200));
    }

    [Test]
    public void CheckExistenceOfRegister()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet");
        Post();
        Body_json(_json());
        StatusCode(200);
        ReturnText();

        var actual = (int)search_value("id");

        var expect = 12345;

        Assert.That(actual, Is.EqualTo(expect));
    }

    [Test]
    public void CheckBodyRequest()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet");
        Post();
        Body_json(_json_error());
        StatusCode(400);
        ReturnText();

        var desc = resp.StatusDescription;
        Assert.That(desc, Is.EqualTo("Bad Request"));
    }
}
