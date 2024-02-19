import React from "react";

function TodoContainer() {
  return (
    <div className="container">
      <div className="todo">
        <p>Go to gym</p>
        <div className="actions">
          <input type="checkbox" />
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
