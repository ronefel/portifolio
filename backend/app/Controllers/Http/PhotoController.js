'use strict'

const fs = use('fs')
const Helpers = use('Helpers')
const readFile = Helpers.promisify(fs.readFile)

const Model = use('App/Models/Photo')

class PhotoController {
  async index () {
    const models = await Model.all()
    return models
  }

  async store ({ request }) {
    const files = request.file('files', {
      types: ['image'],
      size: '5mb'
    })
    console.log(files)
    await files.moveAll(Helpers.appRoot('photos'))
    const data = request.only(['name', 'gallery_id'])
    const model = await Model.create(data)
    return model
  }

  async show ({ params, response }) {
    response.header('Content-type', 'image/jpeg')
    return await readFile(Helpers.appRoot('\photos\\'+params.name))
  }

  async update ({ params, request }) {
    const data = request.only(['name'])
    const model = await Model.findOrFail(params.id)
    model.merge(data)
    await model.save()
    return model
  }

  async destroy ({ params, request, response }) {
    const model = await Model.findOrFail(params.id)
    await model.delete()
  }
}

module.exports = PhotoController
