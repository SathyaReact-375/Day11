import React, { useEffect, useState } from 'react'
import "../style.css"
function Task11() {
    const[name,SetName]=useState([])
    const[query,Setquery]=useState("")

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then((data) => {
                SetName(data);
                data.map((user)=> console.log(user.name))
                })       
        },[])
        const arrval=name.map((user)=>user.name.toLowerCase());
        const myout=arrval.filter((o)=>o.includes(query.toLowerCase()))
        
  return (
    <div>
        <h1>Task11</h1>
        <input value={query} onChange={(e)=>Setquery(e.target.value)}></input>
        <ul>
            {myout.map((vl)=>(
                <li>{vl}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Task11