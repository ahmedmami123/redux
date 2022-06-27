import React, { useState } from "react";
import TodoItem from "./TodoItem";
import {useSelector}from "react-redux"
import AddTodo from "./AddTodo";
function TodoList() {
     const Todos=useSelector(state=>state.todo.todolist);
     const [search, setSearch] = useState("")
  return (
    <div className="todolist">
      <div className="List">
        <div className="h2">
          <h2>Todo list to react redux toolkit</h2>
        </div>
        <div className="h2">
          <select name="pets" id="pet-select">
            <option value="">--choose an category--</option>
            <option value="dog">**********</option>
            <option value="cat">**********</option>
          </select>
          <input type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)}></input>
          <div className="icon1">
            <box-icon name="category" type="solid" color="#ffffff"></box-icon>
          </div>
          <div className="icon2">
            <box-icon name="search-alt-2" color="#ffffff"></box-icon>
          </div>
        </div>
        <div className="listeItem">
        {Todos.filter((el)=>el.title.includes(search)).map((el)=> (<TodoItem todo={el}/>))}
        </div>
      </div>
      <div className="add">
        <AddTodo/>
      </div>
    </div>
  );
}

export default TodoList;
