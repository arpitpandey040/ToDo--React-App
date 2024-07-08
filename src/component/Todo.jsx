import React, { useState } from "react";
import "./todo.css";
import deleteIcon from '../asset/deleteIcon.svg';
import EditIcon from '../asset/editIcon.svg'
const Todo = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (editIndex !== null) {
      const updatedList = list.map((item, index) =>
        index === editIndex ? data : item
      );
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, data]);
    }
    setData("");
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };
  const handleEdit = (index) => {
    setData(list[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div className="box">
        <h1>Get Things Done</h1>
        <br />

        <input
          className="todo-input"
          type="text"
          placeholder="Enter Your Task"
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
          value={data}
        ></input>
        <button onClick={handleAddTask}>
          {editIndex !== null ? "Update" : "Add task"}
        </button>

        <div className="listName"></div>

        {list.length !== 0 &&
          list.map((item, index) => (
            <div className="listItems" key={index}>
               <span className="listText">{item}</span>

              
              <img src={EditIcon} className="listImg"  onClick={() => handleEdit(index)} ></img>
              <img src={deleteIcon} className="listImg"onClick={() => handleDelete(index)} />
            </div>
          ))}

        <br />
        <button style={{ width: "90%" }} onClick={() => setList([])}>
          Clear tasks
        </button>
      </div>
    </>
  );
};

export default Todo;
