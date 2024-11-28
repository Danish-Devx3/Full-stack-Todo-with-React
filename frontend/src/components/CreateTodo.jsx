import React, { useState } from 'react'

const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
  return (
    <div>
        <input id='Desc' type="text" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}/> <br />
        <input id='desc' type="text" placeholder='Description' onChange={(e)=>{setDesc(e.target.value)}}/> <br />
        <button onClick={()=>{
            fetch('http://plocalhost:3000/todo',{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: desc
                }),
                headers:{
                   "content-type":"application/json"
                }
            }).then(async (res)=>{
                const json = await res.json();
                alert('Todo added')
            })
        }}>Add atodo</button>
    </div>
  )
}

export default CreateTodo
