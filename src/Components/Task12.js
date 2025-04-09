import React, { useEffect, useState } from 'react'
import "../style.css"
function Task12() {
        const[user,SetUser]=useState([])
      function Fetch() {
        fetch("https://jsonplaceholder.typicode.com/users")
             .then((res)=>res.json())
             .then((info)=>SetUser(info))
             console.log("data fetched");
             console.log("Loading..."); 
                 
      }
        useEffect(()=>{
          const button = document.getElementById("myButton");
          button.addEventListener("click",Fetch)
          const intervalId = setInterval(() => {
            console.log("Loaded");  
            console.log(`${user.map((val) => val.name)}`);
          }, 3000);
          
          return () => {
            button.removeEventListener("click", Fetch);
            clearInterval(intervalId);
          };        
        },[user])
  return (
    <div>
        <h1>Task12</h1>
        <button id="myButton">Fetch button</button>
        <h1>Task13</h1>
        <p>Click the 12th task fetch button</p>
    </div>
  )
}

export default Task12