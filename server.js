const http = require("http");

const port = 8081;
const toDolist = ["node is working", "playing with code"];
http
  .createServer((request, response) => {
    const { method, url } = request;
    if (url === "/todos"){
    if (method === "GET"){
        response.writeHead(200);
        response.write(toDolist.toString())
    
    }else if(method === "POST"){
        let body = '';
        request.on('error',()=>{
        console.error('error')
        }).on('data',(chunk)=>{
         body += chunk;
        }).on("end",()=>{
            body = JSON.parse(body);
            console.log(body);
        })
    }
    {
        response.writeHead(200);
    }

}else{
    response.writeHead(501);
}
    response.end();
  })

  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
