'use strict'

const fs = use('fs')
const Helpers = use('Helpers')
const readFile = Helpers.promisify(fs.readFile)
const Jimp = use('jimp')

const path = Helpers.appRoot('photos');

class ImageLib {

  async storeImage(file) {
    await file.move(path, {
      name: 'custom-name.jpg',
      overwrite: true
    })
  }
  
  static async processAndStorageImage(file) {
    const name = (new Date()).getTime() + '.jpg'
    const image = await Jimp.read(file);
    await image.resize(1080, Jimp.AUTO);
    await image.quality(90);
    await image.writeAsync(path+'/'+name);
    return name
  }

  static async readImage(name) {
    return await readFile(path+'/'+name)
  }

}

module.exports = ImageLib
