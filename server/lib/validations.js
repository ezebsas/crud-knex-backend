function validTodo(todo) {
  return typeof todo.title == 'string' &&
          todo.title.trim() != '' &&
          typeof todo.priority != 'undefined' &&
          !isNaN(todo.priority);
}

function validId(id) {
  return !isNaN(id);
}

module.exports = {
  validTodo,
  validId
};
