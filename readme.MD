
<p align="center">
  <h4 align="center"><a href="https://foodexpl0rer.netlify.app">foodexpl0rer.netlify.app</a></h4>
</p>

<p align="center">
  <img width="800" src="./src/assets/responsivo.png">
</p>

## 💻 About:

The application developed is a digital menu for a restaurant known as foodExplorer, where it is necessary to authenticate to enter the application through the login screen.

Food Explorer has two personas: the administrator and the user;

The admin is the person in charge of the restaurant, so they can create, view, and delete a dish at any time. 

The user sees all the registered dishes and, when they click on a dish, they are redirected to a new screen with more detailed information about it.

Both the admin and the user can search for dishes by name.

In this application, the following topics were addressed:

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

## Features

- [x] A structured project, with a good organization of folders, division of components on the front-end, etc.
- [x] A README.md file with the specifications on how to run the project in a dev environment.
- [x] Users will need to authenticate to enter the application through the login screen.
- [x] The admin will upload images to register the dishes.
- [x] Meaningful names for functions and variables: Working a bit with Clean Code concepts.
- [x] The admin, restaurant, and user data will be stored in a database.
- [x] Possibility to search for the name of the dish.
- [x] Its interface consumes my own API.
- [x] The app is responsive: using the concept of Mobile First.
- [x] Meets the model proposed in Figma and contains elements indicative of action and state.

---

## 🎨 Layout

The layout of the application is available in Figma:

<a href="https://www.figma.com/file/GkqG5AUJe3ppcUEHfvOX6z/food-explorer?node-id=0%3A1">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>



## 🚀 How to run the project.

This project is divided into two parts:
1. Backend (API) 
2. Frontend 

💡The Backend must be running on your machine in order for the frontend to be re-addressed.

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Node.js] (https://nodejs.org/en/). 
Also, it's good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/)


### 🚧 Running the BackEnd (server)

```bash
# Download from the repository
$https://github.com/mewerton/FoodExplorer_BackEnd

# Open your VS CODE and then open the Backend folder to open the project
$ cd FoodExplorer_BackEnd

# In the BackEnd insert a port and a secret in the empty .env file
  AUTH_SECRET=
  PORT=

# Install the necessary dependencies
$ npm install

# Now start the BackEnd server
$ npm run dev

# The server will start at port:3000 - go to <http://localhost:3000>
```


### 💻 Running the FrontEnd

```bash

# Download from the repository
$https://github.com/mewerton/FoodExplorer_FrontEnd

# Open your VS CODE and then open the Frontend folder to open the project
$FoodExplorer_FrontEnd

# Install dependencies with:
$ npm install

# Run the application in development mode:
$ npm run dev

# The server will start at port:3000 - go to < http://127.0.0.1:5173/ >

# Admin Login
$ email: admin@gmail.com
$ password: 253647

```
---

## 🛠 Technologies

This project was developed with the following technologies:

- HTML
- CSS
- JavaScript
- Node.js
- React.js

---

## Deploy the project.
https://listmovies333.netlify.app/

___

This BackEnd was hosted directly in Render.
The Frontend, on the other hand, was hosted directly on Netlify.

___
Note: Because it is hosted on a free service, the BackEnd "hibernates" after 15 minutes of non-use.
<br>
If you're trying to access the site and the BackEnd is unresponsive, just wait as it will be "initializing" the services.
<br>
This step may take up to 1 minute, depending on the load on the Render servers.

---
