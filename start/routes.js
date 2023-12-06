'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/post', 'PostController.index').as('post.index')
Route.get('/post/create', 'PostController.create').as('post.create')
Route.post('/post/store', 'PostController.store').as('post.store')
Route.get('/post/edit/:id', 'PostController.edit').as('post.edit')
Route.post('/post/update/:id', 'PostController.update').as('post.update')
Route.get('/post/remove/:id', 'PostController.remove').as('post.remove')
Route.post('/post/delete/:id', 'PostController.delete').as('post.delete')
