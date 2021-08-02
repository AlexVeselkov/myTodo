import React, { useState } from "react";
import InputTodo from "./InputTodo";
import MapTodo from "./MapTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <InputTodo todos={todos} setTodos={setTodos} />
      <MapTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
//Саня я тут был

//Олег, я тут!

//Мастер хотфикс