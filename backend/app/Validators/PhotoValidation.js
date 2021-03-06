
class PhotoValidation {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      gallery_id: 'required|exists:galleries,id',
      file: 'file|file_ext:png,jpg,jpeg|file_size:10mb|file_types:image'
    }
  }

  // get messages() {
  //   return Antl.list('validation')
  // }
}

module.exports = PhotoValidation
