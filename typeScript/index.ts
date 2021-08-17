// Importacao de bibliotecas
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile, unlink } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Definicao de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
// decodificação da url com ternário:
    const urlparse = url.parse(request.url ? request.url : '', true);

    var resposta;

    // Receber informacoes do usuario
    const params = parse(urlparse.search ? urlparse.search : '');

    // Criar um usuario - Atualizar o usuario
    if(urlparse.pathname == '/criar-atualizar-usuario'){

        // salvar/atualizar informacoes
        writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
            if (err) throw err;
            console.log('Saved!');
      
            resposta = 'Usuario criado/atualizado com sucesso';
            
            response.statusCode = 200; 
            response.setHeader('Content-Type', 'text/plain');
            response.end(resposta);
          });
    }      

            // Selecionar usuario
            else if(urlparse.pathname == '/selecionar-usuario') {
            readFile('users/' + params.id + '.txt', function (err: any, data) {
            resposta = data;
            console.log("Found")
            
            response.statusCode = 200; 
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
            });
        }

            // Remover usuario
            else if(urlparse.pathname == '/remover-usuario') {
                unlink('users/' + params.id + '.txt', function (err) {
                console.log('File deleted!');

                resposta = err ? "Usuario nao encontrado" : "Usuario removido.";

                response.statusCode = 200; 
                response.setHeader('Content-Type', 'text/plain');
                response.end(resposta);
            });
  
  }


    // response.end("Hello World");
    // Implementar o código aqui.
});

// Execução
server.listen( port, () => {
    console.log(`Server running on port ${port}`);
});

// http://localhost:5000/criar-atualizar-usuario?id=32&nome=amauri