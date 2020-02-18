const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries
    .getAll()
    .then(todos => {
      res.json(todos);
    })
});

module.exports = router;
