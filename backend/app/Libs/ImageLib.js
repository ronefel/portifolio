'use strict'

const fs = use('fs')
const Helpers = use('Helpers')
const readFile = Helpers.promisify(fs.readFile)
const deleteFile = Helpers.promisify(fs.unlink)
const Jimp = use('jimp')

const path = Helpers.appRoot('photos')

class ImageLib {
  
  static async processImage(file) {

    const optimizeAndResize = async (img) => {
      await img.resize(1080, Jimp.AUTO)
      await img.quality(90)
      return img
    }

    const image = await Jimp.read(file).then((img) => {
      return optimizeAndResize(img)
    }).catch(() => {
      return false
    })
    return image
  }

  static async storeImage(jimpImage, name) {
    const image = await jimpImage.writeAsync(path+'/'+name).then((img) => {
      return img
    }).catch(() => {
      return false
    })
    if (image) {
      return name
    }
    return false
  }

  static async readImage(name) {
    return await readFile(path+'/'+name).then((image) => {
      return image
    }).catch(() => {
      return false
    })
  }

  static async destroyImage(name) {
    return await deleteFile(path+'/'+name).then(() => {
      return true
    }).catch(() => {
      return false
    })
  }
}

module.exports = ImageLib
