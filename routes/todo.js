const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* This router is mounted at /todo */
router.get('/', (req, res) => {
  knex('todo')
    .select()
    .then(todos => {
      res.render('all', { todos: todos });
    });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', (req, res) => {
  if(validTodo(req.body)){
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date: new Date()
    };
    //insert into the database
    knex('todo')
      .insert(todo, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/todo/${id}`);
      })
  }else{
    //respond with an error
    res.status(500);
    res.render('error', {
      message: 'Invali todo'
    });
  }
});

function validTodo(todo) {
  return typeof todo.title == 'string' &&
          todo.title.trim() != '' &&
          typeof todo.priority != 'undefined' &&
          !isNaN(todo.priority);
}


module.exports = router;
