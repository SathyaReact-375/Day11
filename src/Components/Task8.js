import React, { useState } from 'react'
import '../style.css';
function Task8() {
    const[Store,setStore]=useState([])
    console.log(Store);
    
  return (
    <div>
        <h1>Task8</h1>
        <button onClick={()=>{
             fetch("https://jsonplaceholder.typicode.com/users")
             .then((res)=>res.json())
             .then((data)=>{setStore(data)
                console.log("datas stored");
             })  
               
        }}>click</button>
    </div>
  )
}

export default Task8