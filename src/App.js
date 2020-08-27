import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodoS] = useState([""]);
  const [input, setInput] = useState("");
  console.log("hi", input);

  const addTodo = (event) => {
    event.preventDefault();
    setTodoS([...todos, input]);
    setInput();
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form>
        <input
          placeholder="write todo"
          className="input-app"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          disabled={!input}
          className="btn"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </button>
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
