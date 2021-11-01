import React, { useState } from "react";
import "./app.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function deleteItem(ele) {
    var index = items.indexOf(ele.target.id);
    if (index > -1) {
      items.splice(index, 1);
    }
    setItems(items);
    // console.log(ele.target.parentNode.remove());\
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const toDoList = items.map((todoItem, i) => (
    <li key={i.toString}>
      # {i + 1} {todoItem}
      <botton id={todoItem} value={todoItem} onClick={deleteItem}>
        Done
      </botton>
    </li>
  ));
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{toDoList}</ul>
      </div>
    </div>
  );
}

export default App;
