# Crear aplicacion Full Stack: CRUD todo

La aplicación usa:
* postgres para la base de datos
* knex.js para las migraciones, relleno y consultas de base de datos
* express.js para las rutas y visualizacion
* Bootstrap para la presentación

## Check List Full Stack
* [x] Generar app express
* [x] Crear base de datos
* [x] Rellenar tablas con datos de ejemplo
* [x] Listar todos los registros con GET /todo
* [x] Agregar Bootstrap
* [x] Mostrar formulario new con /todo/new
* [x] Crear un registro con POST /todo
* [x] Mostrar un registro con GET /todo/:id
* [x] Mostrar un formulario de edicion con GET /todo/:id/edit
* [x] Actualizar un registro con PUT /todo:id
* [x] Eliminar un registro con DELETE /todo/:id
* [x] Redirigir al crear / actualizar / eliminar

# Refactorizar un archivo router express

* [x] Actualizar validaciones
* [x] Mover metodos comunes a carpeta lib
* [x] Mover consultas knex a carpeta db
* [x] Crear funciones reutilizables para mandar respuestas de error


# Construir una app Full Stack desacoplada: CRUD todo

Usaremos:
* Server:
  * postgres for our database
  * knex.js for our database migrations, seeds and queries.
  * express.js for our JSON routes
* Client:
  * jQuery for DOM/AJAX
  * boostrap for our UI


## Full Stack Check List
* [x] Agregar carpeta api y crear/montar router
* [x] Listar todos los registros con GET /api/v1/todo
* [x] Agregar Bootstrap
* [x] Mostrar form nuevo en new.html
* [x] Crear un registro con POST /api/v1/todo
* [x] Mostrar un registro con GET /api/v1/todo/:id
* [x] Mostrar un form editar en edit.html?id=42
* [ ] Actualizar un registro con PUT /api/v1/todo/:id
* [ ] Eliminar un registro con DELETE /api/v1/todo/:id
* [ ] Redirigir al crear / actualizar / eliminar
