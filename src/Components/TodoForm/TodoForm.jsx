import { useState } from "react";

function TodoForm ({ onSubmit }) {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
  
    onSubmit(newItem)

    setNewItem("") 
    }
  

  return (
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            name="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
  );
}

export default TodoForm;
