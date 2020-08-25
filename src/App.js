import React, { useState } from "react";
import "./App.css";

function App() {


  const [todos, setTodoS] = useState([
    "Take dogs for walk",
    "Make cake for me",
    "Make a Todo-app",
  ]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
      event.preventDefault();
    setTodoS([...todos, input]);
    setInput();
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>


        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>

     <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
