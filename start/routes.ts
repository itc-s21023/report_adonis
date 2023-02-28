/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/sample', 'ReportsController.index')
Route.get('/student', 'StudentsController.index')
Route.get('/absences', 'AbsencesController.index')
  .as('absences.index.show')
Route.get('/absences/add', 'AbsencesController.add')
Route.post('/absences/add', 'AbsencesController.add_posted')
Route.get('/cerfiticate', 'CerfiticateApplicationsController.index')
  .as('cerfiticate.index,show')
Route.get('/cerfiticate/add', 'CerfiticateApplicationsController.add')
Route.post('/cerfiticate/add', 'CerfiticateApplicationsController.add_posted')
