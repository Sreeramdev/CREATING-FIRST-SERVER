const express = require("express");

const app = express();

app.use(express.json());

const port = 8081;

const toDoList = ["node Byte has ex", "Angelina jolie"];

app.get("/todos", (req, res) => {
  res.status(200).send(toDoList);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/todos", (req, res) => {
  let newToDo = toDoList;
  newToDo.push(req.body.item);
  res.status(200).send({ message: "item added" });
});

app.delete("/todos", (req, res) => {
  const itemToDelete = req.body.item;
  toDoList.find((element, index) => {
    if (element === itemToDelete) {
      toDoList.splice(index, 1);
    }
  });
  res.status(200).send({ message: "item deleted succesfully" });
});
