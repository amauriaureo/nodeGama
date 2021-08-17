// Incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 4000;

// Implementação da regra de negocio
const server = http.createServer((req, res) => {

  var resposta;
  const urlparse = url.parse(req.url, true)
  // receber informacoes do usuario
  const params = queryString.parse(urlparse.search);

  // Criar um usuario - Atualizar o usuario
  if(urlparse.pathname == '/criar-atualizar-usuario'){

    
    // salvar/atualizar informacoes
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved!');

      resposta = 'Usuario criado/atualizado com sucesso';
      
      res.statusCode = 200; 
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

  }
  // Selecionar usuario
  else if(urlparse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data;
      console.log("Found")
      
      res.statusCode = 200; 
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

  // Remover usuario
  else if(urlparse.pathname == '/remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted!');

      resposta = err ? "Usuario nao encontrado" : "Usuario removido.";

      res.statusCode = 200; 
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  
  }

});

//EXECUÇÃO
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:4000/criar-atualizar-usuario?nome=Amauri&idade=88&estudante-de=tecnologia&id=1
// localhost:4000/selecionar-usuario?id=1
// localhost:4000/remover-usuario?id=1
