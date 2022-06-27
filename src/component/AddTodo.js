import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { AddTask } from '../redux/todoslice/Todoslice';
function AddTodo() {
    const dispatch=useDispatch();
    
    const [task, setTask] = useState(
        {
          id:Math.random(),
            title:"",
            description:"",
            isDone:false,
        } 
    )
  return (
    <div className='addtodo'>
        <div className='clander'>
            <p className='t1'>Calendar</p>
            <p className='t2'>28 juin</p>
            <div className='div1'>
                <div className='div2'>
                    <p className='p1'>9:00<span>a.m</span></p>
                    <p className='p2'>Marketing</p>
                </div>
                <div className='div2'>
                    <p className='p1'>9:30<span>a.m</span></p>
                    <p className='p2'>Full stack</p>
                </div>
                <div className='div2'>
                    <p className='p1'>10:00<span>a.m</span></p>
                    <p className='p2'>Node js</p>
                </div>
            </div>
            <div className='divAdd'>
                <input type="text" placeholder='enter task title' onChange={(e)=>{setTask({...task,title: e.target.value})}}/>
                <input type="text" placeholder='enter task description'onChange={(e)=>{setTask({...task,description: e.target.value})}}/>
                <button onClick={()=>dispatch(AddTask(task))}>Add new task</button>
            </div>
        </div>
    </div>
  )
}

export default AddTodo