const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const todos = [];

app.get('/', (req, res) => {
    res.render('todos', { todos });
});

app.post('/add', (req, res) => {
    const newTodo = req.body.newTodo;
    todos.push(newTodo);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});