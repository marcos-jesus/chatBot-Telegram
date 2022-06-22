require('dotenv').config();
const express = require('express');

const app = express();

app.get('/api/v1/messages', (request, response) => {
  const message_welcome = 'Bem vindo, digite sua linguagem de programação:';
  response.json(message_welcome);
})

app.get('/api/v1/javascript', (request, response) => {
  const documentation = {
    mdn: process.env.DOCUMENTATION_JAVASCRIPT_MDN,
    w3school: process.env.DOCUMENTATION_JAVASCRIPT_W3SCHOOL
  }
  response.json(documentation);
});

app.get('/api/v1/csharp', (request, response) => {
  const documentation = {
    ms: process.env.DOCUMENTATION_CSHARP_,
    ms_guide: process.env.DOCUMENTATION_CSHARP_GUIDE
  }

  response.json(documentation);
});

app.get('/api/v1/java', (request, response) => {
  const documentation = {
    java: process.env.DOCUMENTATION_JAVA
  }

  response.json(documentation);
});

app.get('/api/v1/php', (request, response) => {
  const documentation = {
    php: process.env.DOCUMENTATION_PHP
  }

  response.json(documentation);
});

app.get('/api/v1/ruby', (request, response) => {
  const documentation = {
    ruby: process.env.DOCUMENTATION_RUBY
  }

  response.json(documentation);
});

app.get('/api/v1/c', (request, response) => {
  const documentation = {
    c: process.env.DOCUMENTATION_C
  }

  response.json(documentation);
});

app.get('/api/v1/cpp', (request, response) => {
  const documentation = {
    cpp: process.env.DOCUMENTATION_CPP
  }

  response.json(documentation);
});

app.get('/api/v1/go', (request, response) => {
  const documentation = {
    go: process.env.DOCUMENTATION_GO
  }

  response.json(documentation);
});

app.listen(3000, () => {
  console.log('Running in port 3000');
});