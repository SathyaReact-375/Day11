import React, { useEffect, useState } from 'react'
import "../style.css"
function Miniproject1() {
    const[counter,Setcounter]=useState(0)
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            Setcounter(pre=>pre+1)
            console.log(`${counter}`);
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[counter])
  return (
    <div>
        <h1>Miniproject1</h1>
        see the console
    </div>

  )
}

export default Miniproject1