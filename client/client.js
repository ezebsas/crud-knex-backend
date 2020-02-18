const API_URL = 'http://localhost:3000/api/v1/todo';

$(() => {
  $.get(API_URL)
    .then(todos => {
      const $todos = $('#todos');
      todos.forEach(todo => {
        $todos.append(`<h2>${todo.title}</h2>`)
      })
    })
});
