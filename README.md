# Javier Morales Portfolio
!["Javier Morales Portfolio Project Screenshot"](/src/assets/jmorales-portfolio.png)

## Description
Welcome to my personal portfolio, a dynamic reflection of my software development journey. Starting from scratch, armed only with a deep-rooted passion for technology and an insatiable thirst for knowledge, I built this space using ReactJS. It is not just a sample of my work, but a canvas for continuous learning and a testament to the power of perseverance. As I evolve as a developer, so will this portfolio, capturing the essence of my growth and the limitless possibilities that lie ahead.

## Table of Content
  * [Description](#description)
  * [Technologies](#technologies)
  * [Installation](#installation)
  * [License](#license)
  * [Resources](#resources)
  * [Deployment](#deployment)

## Technologies
* React: A JavaScript library for building user interfaces, ensuring a responsive and interactive experience.
* Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
* Bootstrap: A styling framework for developing with HTML, CSS, and JS, ensuring a mobile-first and responsive design.
* React Router Dom: A collection of navigational components that compose declaratively with your application, enabling dynamic routing in a web app.
* EmailJS: Allows sending emails directly from the client-side without needing a server-side code.
* Dotenv: A zero-dependency module that loads environment variables from a .env file into process.env, managing sensitive credentials.
* ESLint: A static code analysis tool for identifying problematic patterns found in JavaScript code, ensuring code quality.

## Installation
If you would like to try in your local machine or use the code for reference first,
* git clone <add repo's url here>
* cd to the repo
* Install dependencies.
* Create a .env file for global variables. You should create an account with emailjs and after you have the account id, template id and public Key, you can set the globar vars.
```
VITE_REACT_APP_SERVICE_ID="your_emailjs_service_id"
VITE_REACT_APP_FORM_ID="your_emailjs_template_id"
VITE_REACT_APP_USER_ID="your_emailjs_user_id" (public key)
```
* Import the globar var using meta instead of process:
* "import.meta.env.(add here your global var)
* ex: import.meta.env.VITE_REACT_APP_SERVICE_ID;
***
For more information about it:
* https://vitejs.dev/guide/env-and-mode.html
* Then run 'npm run start' or 'npm run dev'

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Resources
* https://vitejs.dev/guide/env-and-mode.html
* https://vitejs.dev/guide/
* https://react.dev/reference/react
* https://reactrouter.com/en/main


## Deployment
* https://jmorales.netlify.app/


