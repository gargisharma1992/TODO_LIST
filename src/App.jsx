import React from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <main>
      <h1>To do list</h1>
      <InputContainer />
      <TodoContainer />
    </main>
  );
}

export default App;
