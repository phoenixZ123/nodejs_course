const http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url == "/restaurants/") {
    res.write("restaurants return");
    res.end();
  }
});

server.listen(3000);

console.log("listen on port 3000");
