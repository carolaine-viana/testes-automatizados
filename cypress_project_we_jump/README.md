# Tutorial: Como rodar os testes
Verificar se ha instalacao do nodeJS, necessario - rode o comando: node -v no seu terminal, se nao aparecer a versao do node, instalar via: https://nodejs.org/en/download/current
Instalar o npm ou yarn: npm install ou yarn install
Apos instalar o node, importar/clonar/baixar a pasta do projeto
Apos baixar a pasta do projeto, instalar os componentes necessarios para o projeto rodar. Acessar via terminal/IDE a pasta do projeto e apos isso rodar os comandos abaixo: npm install ou yarn install
Utiliza o comando: npx cypress open para abrir o cypress e rodar os testes.
Capture3222

# Explicação dos arquivos/pastas:
* support > locators: arquivo onde esta localizado todos os seletores necessarios, dessa forma quando houver mudanca de localizacao, sera alterado o caminho em um local apenas.
* support > coommands: arquivo onde contem funcoes que se repetem varias vezes, portanto foi criado um comando para chamar quando necessario.

# Cenarios de teste:
> Cenarios de testes: realizar cadastro

* Quando: acesso a URL: https://magento2-demo.magebit.com/customer/account/login
* E clico no botao criar uma conta
* E que preencho o campo nome
* E que preencho o campo sobrenome
* E que preencho o campo email
* E que preencho o campo senha
* E clico no botao: Criar uma conta
* Entao deve levar a pagina: minha conta.

> Cenarios de testes: realizar Login

* Quando: acesso a URL https://magento2-demo.magebit.com/customer/account/login
* E preencho o campo email
* E preencho o campo senha
* E clico no botao: Sign In
* Entao deve levar a pagina: minha conta.

> Cenarios de testes: Adicionar produto ao carrinho

* Dado que eu esteja na pagina de produtos
* Quando que eu seleciono um produto
* E clico no botao: Add to Cart
* Entao o produto deve ir para o meu carrinho

> Cenario: Finalização de compra

* Dado que eu esteja com um produto ao carrinho
* Quando acesso a pagina: Shipping Address
* E preencho o campo nome
* E preencho o campo sobrenome
* E preencho o campo rua
* E preencho o campo pais
* E preencho o campo ZIPCODE
* E preencho campo telefone
* E clico na opcao de Shipping Methods
* Entao eu confirmo minha compra com o botao Place Order
