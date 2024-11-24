const express = require('express')
const {createTodo, updateTodo} = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express,express.json())
app.post('/todo', async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'You send wrong input'
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: 'todo created'
    })
})

app.get('/todos', function(){
    todo.find({}).then(function(response){
        res.json(response)
    })
})

app.put('/completed', function(){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        if(!parsedPayload.success){
            res.status(411).json({
                msg: 'You send wrong input'
            })
            return;
        }
    }
    todo.update({_id:req.body.id},{completed: true})
    res.json({
        msg: 'Todo marked as completed'
    })
})