// acesse: nodejs.org
//no menu principal(cabeçalho, navbar) a quarta opção é docs. Acesse DOCS
//no menu lateral esquerdo, penúltima opção. Acesse "Guides"
// Irá carregar a página Guides e logo abixo de Guides estará escrito General
//depois...
// Acesse "Getting Started Guide" logo abaixo de "General"
// Copie e cole:

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! Im Amauri');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// acesse a pasta onde o arquivo está através do terminal e lance o comando:
// node app.js
// the file will run

//digite isso no seu navegador:
// http://localhost:3000/
// Vc terá um Hello World na sua tela!
// para parar o comando no terminal => Ctrl + C