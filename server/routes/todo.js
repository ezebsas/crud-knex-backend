const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const validTodo = require('../../lib/validations').validTodo;

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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  respondAndRenderTodo(id, res, 'single');

});

router.get('/:id/edit', (req,res) => {
  const id = req.params.id;
  respondAndRenderTodo(id, res, 'edit');
});

router.post('/', (req, res) => {
  validateTodoRenderError(req, res, (todo) => {
    todo.date = new Date();
    knex('todo')
      .insert(todo, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/todo/${id}`);
      });
  });
});

router.put('/:id', (req, res) => {
  validateTodoRenderError(req, res, (todo) => {
    const id = req.params.id;
    knex('todo')
      .where('id', id)
      .update(todo, 'id')
      .then(() => {
        res.redirect(`/todo/${id}`);
      });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  if(validId(id)) {
    knex('todo')
      .where('id', id)
      .del()
      .then(() => {
        res.redirect('/todo');
      });
  } else {
    res.status( 500);
    res.render('error', {
      message:  'Invalid id'
    });
  }
});


function respondAndRenderTodo(id, res, viewName) {
  if(validId(id)) {
    knex('todo')
      .select()
      .where('id', id)
      .first()
      .then(todo => {
        res.render(viewName, todo);
      });
  } else {
    res.status( 500);
    res.render('error', {
      message:  'Invalid id'
    });
  }
}

function validId(id) {
  return !isNaN(id);
}

function validateTodoRenderError(req, res, callback) {
  if(validTodo(req.body)) {
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority
    };

    callback(todo);
  } else {
    res.status( 500);
    res.render('error', {
      message:  'Invalid todo'
    });
  }
}

module.exports = router;
