
<h4 align="center"> 
	 Status: Em desenvolvimento...
</h4>
<p align="center">
  <h4 align="center"><a href="https://foodexpl0rer.netlify.app">foodexpl0rer.netlify.app</a></h4>
</p>

<p align="center">
  <img width="800" src="./src/assets/responsivo.png">
</p>

## 💻 Sobre:

A aplicação desenvolvida é um cardápio digital para um restaurante conhecido como foodExplorer, onde é necessário se autenticar para entrar na aplicação através da tela de login. 

O Food Explorer tem duas personas: o administrador e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, podendo criar, visualizar e apagar um prato a qualquer momento. 

O usuário visualiza todos os pratos cadastrados e, quando clicar em um prato, é redirecionado para uma nova tela com informações mais detalhadas sobre ele.

Tanto o admin quanto o usuário podem buscar os pratos por nome e/ou ingredientes;

Neste desafio foram abordados os seguintes temas:

- [ReactJs](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com)
- [Nodemon](https://nodemon.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org/)
- [BCryptjs](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [Multer](https://www.npmjs.com/package/multer)
- [CORS](https://www.npmjs.com/package/cors)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router Dom](https://react-icons.github.io/react-icons/)
---

## Funcionalidades

- [x] Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc.
- [x] Um arquivo README.md com as especificações sobre como executar o projeto em um ambiente dev.
- [x] Os usuários deverão se autenticar para entrar na aplicação através da tela de login, você pode aplicar o que aprendeu nas aulas de autenticação JWT. A autenticação deve ser validada com senha.
- [x] O admin irá fazer upload de imagens para cadastrar os pratos.
- [x] Para finalizar, faça o deploy da sua aplicação.
- [x] Dê nomes significativos para as suas funções e variáveis: trabalhe um pouco com os conceitos do Clean Code.
- [x] Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.
- [x] Possibilidade de fazer uma busca pelo nome do prato, pelos ingredientes ou por prato favorito
- [x] É essencial que a sua interface consuma a sua própria API.
- [x] Interessante deixar a aplicação responsiva: utilize o conceito de Mobile First que foi aprendido em aula.
- [x] Fica a seu critério onde aplicar animações, transições e transformações.
- [x] Atende ao modelo proposto no Figma e contém elementos indicativos de ação e estado.

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/GkqG5AUJe3ppcUEHfvOX6z/food-explorer?node-id=0%3A1">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>



## 🚀 Como executar o projeto.

Este projeto é divido em duas partes:
1. Backend (API) 
2. Frontend 

💡O Backend deve estar rodando em sua máquina para que o frontend seja reenderizado.
)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### 🚧 Executando o BackEnd (servidor)

```bash
# Faça download do repositório
$ https://github.com/Gabrielingnau/FoodBackEnd

# Abra seu VS CODE e em seguida abra a pasta do Backend para abrir o projeto
$ cd bac-end Restaurante

# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```


### 💻 Executando o FrontEnd

```bash

# Faça download do repositório
$ https://github.com/Gabrielingnau/FoodExplorer

# Abra seu VS CODE e em seguida abra a pasta do Frontend para abrir o projeto
$ cd React-Restaurante

# Instale as dependências com:
$ npm install

# Rode a aplicação em modo de desenvolvimento:
$ npm run dev

# O servidor inciará na porta:3333 - acesse <   http://127.0.0.1:5173/ >

# Login do admin
$ email: admin@gmail.com
$ password: 253647

```
---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Node.js
- React.js

---

## Deploy do projeto.
foodexpl0rer.netlify.app

___

Este BackEnd foi hospedado diretamente no Render.
Já o Frontend foi hospedado diretamente no Netlify.

___
Obs.: Por estar hospedado em um serviço gratuito, o BackEnd "hiberna" após 15 minutos sem utilização.
<br>
Se você está tentando acessar o site e o BackEnd não responde, apenas aguarde, pois ele estará "inicializando" os serviços.
<br>
Esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.

---
