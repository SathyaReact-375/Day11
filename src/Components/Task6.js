import React, { useEffect, useState } from 'react'

function Task6() {
    const[datas,setdatas]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{setdatas(data)
            data.forEach((user) => console.log(user.name));
        })
    },[])
    console.log(datas);
    
  return (
    <div>
        <h1>Task6</h1>
        <p>see the console</p>
    </div>
  )
}

export default Task6