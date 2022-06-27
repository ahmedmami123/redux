import React from 'react'
import {useDispatch} from "react-redux"
import { DoneTask, RemoveTask } from '../redux/todoslice/Todoslice';
import EditTask from './EditTask';
function TodoItem({todo}) {
    const dispatch=useDispatch();
  return (
    <div className='item'>
<h4>{todo.title}</h4>
<p>{todo.description}</p>
<span onClick={()=>dispatch(DoneTask({id:todo.id}))}>{todo.isDone?"Done":"Not Done"}</span>
<div className='btn'>
    
    <EditTask id={todo.id}/>
    <button onClick={()=>dispatch(RemoveTask({id:todo.id}))}>Delete</button>
</div>
    </div>
  )
}

export default TodoItem