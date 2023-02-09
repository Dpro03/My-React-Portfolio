# Portfolio-React-App

Welcome to my portfolio!  This is home to my profile, resume, contact info and many of my projects built with lots of love and effort on my part.  Please help yourself and peruse at your leisure.  This portfolio was built using React and is styled using Tailwind CSS.


## Table of Contents- [Portfolio-React-App](#portfolio-react-app)
- [Portfolio-React-App](#portfolio-react-app)
  - [Table of Contents- Portfolio-React-App](#table-of-contents--portfolio-react-app)
  - [Features](#features)
  - [Setup and Installation](#setup-and-installation)
  - [Deployment](#deployment)
  - [Repository](#repository)
  - [Deployed Application](#deployed-application)
  - [Author](#author)


## Features

My portfolio includes projects I built using many programming languages, technologies, libraries and frameworks.  They include HTML, CSS, JavaScript as well as node.js, express.js, J-Query, React, Tailwind CSS, Sass, handlebars and databases such as MongoDB and MySQL.  These projects were created while I learned web-development during my Full-Stack Web-Development Bootcamp through the University of Connecticut.  The portfolio also includes an 'about-me' section, some of my skills I've learned and also links to my LinkedIn profile, my email, my Github repositories, my resume and my email address.  These links show up in different menus which will appear differently if your are on a phone versus a computer.


## Setup and Installation

This portfolio requres the installation of node.js, which can be found at this [website.](https://node.js.org)  It also requires node package manager (npm), which is a software manager and installer which installs modules needed to run node projects, and also manages certain dependencies utilized in these types of projects.  A packson.json file needs to be created to run any node project, and can be created by running   `npm init`   on the command line of the terminal.

This React application was created by entering these at the command prompt:

`npx create-react-app portfolio-react-app`

`npm install`

`npm start` (This runs the app at http://localhost:3000 so the user can view it in a browser window.)

`npm install react-icons --save` (This allows the user to use the popular icons that can be included in react apps.)

`npm install -D tailwindcss`  
`npx tailwindcss init`         (Tailwind CSS was used for styling this portfolio.)

`npm run build`  (This builds the app and correctly bundles it for production and optimizes the build for the best performance.)


## Deployment

In order to deploy this application, we need to follow a few steps.

In order to install this app to GitHub pages, we must make sure our `package json` file has a "homepage" field that specifies the URL where the app will be hosted on GitHub pages.

`"homepage":  https://dpro03.github.io/My-React-Portfolio/`

Next, install the gh-pages package as a dev dependency:

`npm install --save-dev gh-pages`


Then, add the following script to your package.json file:

`"scripts": {`  
`...`  
`"predeploy": "npm run build",`   
`"deploy": "gh-pages -d build"`  
`},`
   


Finally, run the following command to deploy your app to GitHub Pages:

`npm run deploy`
 
 After a few moments, the app should be live and accessible at the URL specified in the "homepage" field.

## Repository

The code for this application can be found [here.](https://github.com/Dpro03/My-React-Portfolio.git)

## Deployed Application

This project can be found at this [address.](https://dpro03.github.io/My-React-Portfolio/)

## Author

This README and the application was completed exclusively by me, David Proto.  

Click [HERE](https://github.com/Dpro03) to vist my GitHub page!

You may email me [HERE](mailto:dpro03@gmail.com) if you have any questions.





