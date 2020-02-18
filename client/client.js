const API_URL = 'http://localhost:3000/api/v1/todo';

$(() => {
  $.get(API_URL)
    .then(todos => {
      const $todos = $('.todos');
      todos.forEach(todo => {
        $todos.append(`<a class="list-group-item" href="">${todo.title}</a>`)
      })
    })
});
