import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState(0)
  const [result, setresult] = useState(0)
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   fetch('http://localhost:3000/todos')
  //   .then(async (res)=>{
  //     const json = await res.json();
  //     await setTodos(json)
  //   })
    
  // }, [])
  

  
  let sum = useMemo(()=>{

    let res = 0
    for(let i=1; i<=value; i++){
      res= res+i
      
      console.log(res)
    }
    return res
  },[value])
  

 
  return (
    <>
    <input onChange={(e)=>{setValue(e.target.value)}} type="number" />
    <h2>sum of {sum}</h2>
    <Btn setCount={setCount} count={count}/>
    {/* <CreateTodo/>
    <Todos todos={todos} /> */}
    </>
  )
}

function Btn({setCount, count}){

  return <button onClick={()=>setCount(e=>e+1)}>couter {count}</button>
}
export default App
