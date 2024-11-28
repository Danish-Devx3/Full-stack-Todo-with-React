const express = require('express')
const cors = require('cors')
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./db');

const app = express();
app.use(cors());

app.use(express.json())
app.post('/todo', (req, res)=>{
    const createPayload = req.body;
    // const parsedPayload = createTodo.safeParse(createPayload);
    // if(!parsedPayload.success){
    //     res.status(411).json({
    //         msg: 'You send wrong input'
    //     })
    //     return;
    // }
    todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: 'todo created'
    })
})

app.get('/todos', function(req, res){
    todo.find({}).then(function(response){
        res.json(response)
    })
})

app.put('/completed', async function(req, res){
    const updatePayload = req.body;
    // const parsedPayload = updateTodo.safeParse(updatePayload)
    // if(!parsedPayload.success){
    //     if(!parsedPayload.success){
    //         res.status(411).json({
    //             msg: 'You send wrong input'
    //         })
    //         return;
    //     }
    // }
    await todo.updateOne({_id:req.body.id},{completed: true})
    res.json({
        msg: 'Todo marked as completed'
    })
})

app.listen(3000);