const http = require('http');

const port = 8081;

http.createServer((request,response) =>{
    response.writeHead(200,{"Content-Type": "text/html"})
    response.write("<h1>Hello World this is from server</h1>")
    response.end()
})

.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
