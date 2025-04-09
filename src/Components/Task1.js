import React from 'react'
import '../style.css';
function Task1() {
  return (
    <div>
    <h2>Task1</h2>
    <p><strong>useState</strong>: A React hook used to add state to functional components. It lets you create and manage state variables, enabling your component to "remember" values between renders.</p>
    <p><strong>useEffect</strong>: A React hook for handling side effects in functional components. It's used for things like data fetching, subscriptions, and directly interacting with the DOM, allowing you to execute code after rendering.</p>
    <p><strong>Key Difference</strong>: While <code>useState</code> is focused on managing state, <code>useEffect</code> is about handling side effects caused by changes in state or props.</p>
</div>

  )
}

export default Task1