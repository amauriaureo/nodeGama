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
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
