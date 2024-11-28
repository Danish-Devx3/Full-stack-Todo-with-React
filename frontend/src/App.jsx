import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState(0)
  const [result, setresult] = useState(0)
  // useEffect(() => {
  //   fetch('http://localhost:3000/todos')
  //   .then(async (res)=>{
  //     const json = await res.json();
  //     await setTodos(json)
  //   })
    
  // }, [])
  
  function calculate(){
    let sum = 0
    for(let i=1;i<=value;i++){
      sum = sum+i
      setresult(sum)
      // console.log(sum)
    }
  }

 
  return (
    <>
    <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="number" />
    <h2>sum of {result}</h2>
    <button onClick={()=>calculate()}>click</button>
    {/* <CreateTodo/>
    <Todos todos={todos} /> */}
    </>
  )
}

export default App
