import React, { useEffect, useState } from 'react'
import '../style.css';
function Task4() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`Update ${count}`
    },[count])
    useEffect(()=>{
        console.log("Component Mounted"); 
    },[])
  return (
    <div>
        <h1>Task4</h1>
        <p>See the console Components will Mounted message appear</p>
        <h1>Task5</h1>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default Task4