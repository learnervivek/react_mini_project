// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import AddTodo from './components/AddTodo'; // Import AddTodo component
import Todo from './components/Todos';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <> <center>
     <h1>Learn About redux Toolkit</h1>
     <AddTodo/>
     <Todo/>
     </center>
    </>
  )
}

export default App
