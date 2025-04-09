import React, { useEffect, useState } from 'react'
import '../style.css';
function Task2() {
    const[State,Setstate]=useState(0);
    const[In,setIn]=useState("");
    useEffect(()=>{
        console.log(`updated count:${State}`);
        console.log("Component Mounted");
        
    },[State])

    console.log(In);

  return (
    <>
    <div>
        <h1>Task2</h1>
        <p>Count:{State}</p>
        <button onClick={()=>Setstate(State+1)}>add</button>
    </div>
    <div>
    <h1>Task3</h1>
    <input value={In} onChange={(e)=>setIn(e.target.value)}></input>
    </div>
    
    </>
  )
}

export default Task2