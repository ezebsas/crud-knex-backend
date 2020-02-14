var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* This router is mounted at /todo */
router.get('/', (req, res) => {
  knex('todo')
    .select()
    .then(todos => {
      res.render('all', { todos: todos });
    });
});
module.exports = router;
