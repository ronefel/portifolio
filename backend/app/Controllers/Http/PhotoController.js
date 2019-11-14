'use strict'

const ImageLib = use('App/Libs/ImageLib')

const Model = use('App/Models/Photo')

class PhotoController {
  async index () {
    const models = await Model.all()
    return models
  }

  async store ({ request }) {
    const file = request.file('file', {
      types: ['image'],
      size: '8mb'
    })
    const newNameFile = await ImageLib.processAndStorageImage(file.tmpPath)
    const data = request.only(['gallery_id'])
    data.name = newNameFile
    const model = await Model.create(data)
    return model
  }

  async show ({ params, response }) {
    response.header('Content-type', 'image/jpeg')
    return await ImageLib.readImage(params.name)
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
