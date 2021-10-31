import React, { useState } from "react";

function App() {
  const [textVlaue, newTextVlaue] = useState("");
  const [todoItems, setItems] = useState([]);

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, textVlaue];
    });
    newTextVlaue("");
  }

  function changedText(input) {
    const newVlaue = input.target.value;
    console.log(newVlaue);
    newTextVlaue(newVlaue);
  }
  function taskDone(task) {
    const id = task.target.id;
    var index = todoItems.indexOf(id);
    if (index > -1) {
      todoItems.splice(index, 1);
    }

    setItems([...todoItems]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changedText} value={textVlaue} type="text" />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((todosItems) => {
            return (
              <li>
                {todosItems}
                <button id={todosItems} onClick={taskDone}>
                  Done
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
