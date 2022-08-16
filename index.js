const http = require("http");

const server = http.createServer((request, response) => {
  response.write(request.url);
  response.end();
});

server.listen(4000, () => console.log("Ouvindo na porta 4000"));