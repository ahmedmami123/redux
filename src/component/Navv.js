import React from 'react'
import 'boxicons'
function Navv() {
  return (
    <div className='nav'>
        <h1>Todo<span>List</span></h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='profile'>
        <box-icon style={{marginTop:"-35px"}} name='bell' type='solid' color='#ffffff' ></box-icon>
        <img src='logo.png'/>
        <div className='text'>
            <h4 className='h3'>Ahmed Mami</h4>

        </div>
        <box-icon style={{marginTop:"-35px"}} name='chevron-down' color='#ffffff' ></box-icon>
        </div>
    </div>
  )
}

export default Navv