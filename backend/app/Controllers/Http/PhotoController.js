'use strict'

const ImageLib = use('App/Libs/ImageLib')

const Model = use('App/Models/Photo')
const Gallery = use('App/Models/Gallery')

class PhotoController {
  async index () {
    const models = await Model.all()
    return models
  }

  async store ({ request, response }) {
    
    const data = request.only(['gallery_id'])

    // Se não achar o id da galeria informada retorna um erro
    await Gallery.findOrFail(data.gallery_id)

    const file = request.file('file', {
      types: ['image'],
      size: '8mb'
    })

    const jimpImage = await ImageLib.processImage(file.tmpPath)
    if (!jimpImage) {
      return response.status(500).json({"error": {'code': 500, 'message': 'Error to process image.'}})
    }

    const name = (new Date()).getTime() + '.jpg'
    const nameImageStored = await ImageLib.storeImage(jimpImage, name)
    if (!nameImageStored) {
      return response.status(500).json({"error": {'code': 500, 'message': 'Error to store image on server.'}})
    }

    data.name = nameImageStored

    try {
      return await Model.create(data)
    } catch (error) {
      await ImageLib.destroyImage(nameImageStored)

      return response.status(500).json({"error": {'code': 500, 'message': 'Error to insert image information on the database. The image has not been saved.'}})
    }

  }

  async show ({ params, response }) {
    const image = await ImageLib.readImage(params.name)
    if (image) {
      response.header('Content-type', 'image/jpeg')
      return image
    }
    return response.status(404).json({"error": {'code': 404, 'message': 'Image not found.'}})
  }

  async destroy ({ params, request, response }) {
    const model = await Model.findOrFail(params.id)
    await model.delete()
  }
}

module.exports = PhotoController
