// Import the 'http' module
const http = require("http");

// Define the port number
const port = 8081;

// Initialize the to-do list
const toDolist = ["node is working", "playing with code"];

// Create an HTTP server using the http.createServer() method
// This method takes a callback function as a parameter, which is called when a request is received
http
  .createServer((request, response) => {
    // Destructure the 'method' and 'url' properties from the 'request' object
    const { method, url } = request;

    // Check if the URL is '/todos'
    if (url === "/todos") {
      // Check if the HTTP method is 'GET'
      if (method === "GET") {
        // Set the HTTP status code to 200 (OK)
        response.writeHead(200);

        // Write the to-do list to the response body
        response.write(toDolist.toString());
      }
      // Check if the HTTP method is 'POST'
      else if (method === "POST") {
        // Initialize an empty string to store the request body
        let body = "";

        // Listen for 'error' events on the request object
        request
          .on("error", () => {
            console.error("error");
          })

          // Listen for 'data' events on the request object
          .on("data", (chunk) => {
            body += chunk;
          })

          // Listen for 'end' events on the request object
          .on("end", () => {
            // Parse the request body as JSON
            body = JSON.parse(body);

            // Add the new to-do item to the list
            let newToDo = toDolist;
            newToDo.push(body.item);

            // Log the updated to-do list to the console
            console.log(newToDo);
          });
      }
      // Set the HTTP status code to 200 (OK)
      {
        response.writeHead(200);
      }
    }
    // Check if the HTTP method is 'DELETE'
    else if (method === "DELETE") {
      // Initialize an empty string to store the request body
      let body = "";

      // Listen for 'error' events on the request object
      request
        .on("error", () => {
          console.log("error");
        })

        // Listen for 'data' events on the request object
        .on("data", (chunk) => {
          body += chunk;
        })

        // Listen for 'end' events on the request object
        .on("end", () => {
          // Parse the request body as JSON
          body = JSON.parse(body);

          // Remove the to-do item from the list
          let newToDo = toDolist;
          newToDo = newToDo.filter((item) => item !== body.item);

          // Log the updated to-do list to the console
          console.log(newToDo);
        });
    }
    // Set the HTTP status code to 501 (Not Implemented)
    {
      response.writeHead(501);
    }

    // End the response, indicating that the response is complete
    response.end();
  })

  // Start the server by calling the listen() method on the server object
  // This method takes a port number as a parameter
  .listen(port, () => {
    // Log a message to the console indicating that the server is running
    console.log(`Server is running on port ${port}`);
  });
