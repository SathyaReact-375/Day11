import React, { useEffect, useState } from 'react'
import '../style.css';
function Task7() {
    const[State,Setstate]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>Setstate(data))
    })
  return (
    <div>
        <h1>Task7</h1>
        <ul>
        {State.map((user)=>(
            <li>{user.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default Task7