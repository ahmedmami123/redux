import React, { useState } from 'react'
import {EditTask1} from "../redux/todoslice/Todoslice"
import {useDispatch} from "react-redux"

function EditTask({id}) {
    const dispatch=useDispatch();
    const [edited, setEdited] = useState(
        {
            title:"",
            description:"",
        }
    )
    const [show, SetShow] = useState(false);

  return (
    
           <div >
             <button className="btn3" onClick={() => SetShow(!show)}>Edite</button>
             {show ? (
           <div className='edit'>    <input type="text" placeholder='enter task title' onChange={(e)=>{setEdited({...edited,title: e.target.value})}}/>
           <input type="text" placeholder='enter task description'onChange={(e)=>{setEdited({...edited,description: e.target.value})}}/>
           <button onClick={()=>{
            SetShow(!show);
            dispatch(EditTask1({id:id,edited}))
           }}>
           Edit Task</button>
           </div>
          ) : null}
            
            </div>
    
  )
}

export default EditTask