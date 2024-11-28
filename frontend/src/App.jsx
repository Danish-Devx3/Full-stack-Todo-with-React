import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
    .then(async (res)=>{
      const json = await res.json();
      await setTodos(json)
    })
    
  }, [])
  

  console.log(todos)

  return (
    <>
    <CreateTodo/>
    <Todos todos={todos} />
    </>
  )
}

export default App