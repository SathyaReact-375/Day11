import React, { useState } from 'react'

function Miniproject3() {
    const[Val,Setval]=useState(false)
    const[On,Seton]=useState() 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((info)=>Seton(info))
  return (
    <div>
        <h1>Miniproject3</h1>
        <button onClick={()=>{
            Setval(pre=>!pre)
        }  
            }>toggle</button>
            {Val?(<ul>
                {On.map((vl)=>(
                    <li>{vl.name}</li>
                ))}
            </ul>):""}
    </div>
  )
}

export default Miniproject3