import React, { useEffect, useState } from 'react'
import '../style.css';
function Task9() {
    const[Timer,setTimer]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer(pre=>pre+1)
            console.log("Timer:",Timer);
                        
        },1000)
        return()=>{
            clearInterval(interval)
        }
    },[Timer])
  return (
    <div>
        <h1>Task9</h1>
        <p>{Timer}</p>
    </div>
  )
}

export default Task9