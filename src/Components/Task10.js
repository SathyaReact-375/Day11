import React, { useState } from 'react'
import "../style.css"
function Task10() {
    const[para,setPara]=useState(false)

    function toggle()
    {
        setPara(pre=>!pre)
    }
  return (
    <div>
     <h1>Task10</h1>
    {para?(<p>display para</p>):""}
    <button onClick={()=>
      toggle()  
    }>toggle</button>
    </div>
  )
}

export default Task10