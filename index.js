var http = require('http');
var url = require("url");
const port = 3000;

//Server
var server = http.createServer(function(req, res) {

  const {query} = url.parse(req.url, true);

  if (req.url == '/') {
    res.end('Hello World, Welcome to Wejapa Internships.');
  }  
  else if (query.name && req.method==="POST") {
    res.end(`Hello ${query.name}, Welcome to WeJapa Internships`);
  }
  else{
    res.end('Oops! You are making a wrong Request');
  }
  
});
server.listen(port, () => {
    console.log(`Server running at port:${port}/`);
});