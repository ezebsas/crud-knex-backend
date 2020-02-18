
$(() => {
  $.get(API_URL)
    .then(todos => {
      const $todos = $('.todos');
      todos.forEach(todo => {
        $todos.append(`<a class="list-group-item" href="">${todo.title}</a>`)
      })
    })
});
