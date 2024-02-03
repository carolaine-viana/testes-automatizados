
1. Verificar se ha instalacao do nodeJS, necessario - rode o comando: node -v no seu terminal, se nao aparecer a versao do node, instalar via: https://nodejs.org/en/download/current
2. Instalar o npm ou yarn: npm install ou yarn install
3. Apos instalar o node, importar/clonar/baixar a pasta do projeto
4. Apos baixar a pasta do projeto, instalar os componentes necessarios para o projeto rodar. Acessar via terminal/IDE a pasta do projeto e apos isso rodar os comandos abaixo:  npm install ou yarn install
5. Utiliza o comando: npx cypress open para abrir o cypress e rodar os testes.
   
![Capture3222](https://github.com/carolaine-viana/testes-automatizados/assets/65136543/3056f998-6fdf-4ae6-965e-84b349977fa9)


Explicacao das pastas:
support > locators: arquivo onde esta localizado todos os seletores necessarios, dessa forma quando houver mudanca de localizacao, sera alterado o caminho em um local apenas.
support > coommands: arquivo onde contem funcoes que se repetem varias vezes, portanto foi criado um comando para chamar quando necessario.
