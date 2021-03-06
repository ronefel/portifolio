const Route = use('Route')
Route.post('authenticate', 'AuthController.authenticate')
Route.resource('users', 'UserController').apiOnly()
Route.resource('galleries', 'GalleryController').apiOnly()

Route.resource('photos', 'PhotoController')
  .apiOnly()
  .except(['show', 'update'])
  .validator(new Map([
    [['photos.store'], ['PhotoValidation']]
  ]))
Route.get('/images/:name', 'PhotoController.show')

// rota protegida exemplo
Route.get('/app', 'AppController.index').middleware(['auth'])

// grupo de rotas protegidas
Route.group(() => {
  Route.get('/app', 'AppController.index')
}).middleware(['auth'])
