const express = require('express');
const validTodo = require('../lib/validations').validTodo;
const validId = require('../lib/validations').validId;
const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(todos => {
      res.json(todos);
    })
});

router.post('/', (req,res) => {
  if(validTodo(req.body)){
    //insert into de DB
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date: new Date()
    };

    queries
      .create(todo)
      .then(ids => {
        res.json({
          id: ids[0]
        });
      });

  }else {

    // respond with an error
    res.status(500);
    res.json({
      message: 'Invalid todo'
    });
  }
})

module.exports = router;
