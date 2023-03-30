namespace QA_RestSharp;

using Newtonsoft.Json.Linq;
using RestSharp;

public class Tests
{
    public RestClient client;
    public RestRequest endpoint;
    public RestResponse resp;
    public string nome, status;
    public JArray foto;
    public string id;


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

    public void Post()
    {
        endpoint.Method = Method.Post;
        endpoint.RequestFormat = DataFormat.Json;
    }

    public void Delete()
    {
        endpoint.Method = Method.Delete;
        endpoint.RequestFormat = DataFormat.Json;

        resp = client.Execute(endpoint);
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

       if(resp.IsSuccessful)
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
            Assert.AreEqual(code, status);
            Assert.AreEqual(desc, "Not Found");
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
          ""status"": ""Em adocao""
        }";
        return body;
    }

    public dynamic Busca_Valor(dynamic chave)
    {
        dynamic obj = JProperty.Parse(resp.Content);
        var valor = obj[chave];
        return valor;
    }

    public void Header(string chave, string valor)
    {
        endpoint.AddHeader(chave, valor);
    }


    //[Test]
    public void Consulta(string nome, JArray foto, string status)
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/12345");
        Get();
        StatusCode(200);
        ReturnText();

        var nome_consulta = Busca_Valor("name");
        Assert.AreEqual(nome, nome_consulta);

        var foto_consulta = Busca_Valor("photoUrls");
        Assert.AreEqual(foto, foto_consulta);

        var status_consulta = Busca_Valor("status");
        Assert.AreEqual(status, status_consulta);

    }

    [Test]
    public void DeleteConsulta()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet/12345");
        Header("api_key", "special-key");
        Delete();
        StatusCode(200);
        ReturnText();
    }


    [Test]
    public void Cadastra()
    {
        Client("https://petstore.swagger.io");
        Endpoint("/v2/pet");
        Post();
        Body_json(_json());
        StatusCode(200);
        ReturnText();

        nome = Busca_Valor("name");
        Console.WriteLine(nome);

        foto = Busca_Valor("photoUrls");
        Console.WriteLine(foto);

        status = Busca_Valor("status");
        Console.WriteLine(status);

        id = Busca_Valor("id");
        Console.WriteLine(id);
    }

    [Test]
    public void Valida_cadastro()
    {
        Cadastra();
        Consulta(nome, foto, status);
    }

}
