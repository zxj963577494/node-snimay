const models = require('../models')
const CategoryModel = models.Category

exports.get = function (select, options, callback) {
  return CategoryModel.find(options, select, { sort: ['-sort'] }).exec()
}

exports.getBy_Id = function (_id) {
  return CategoryModel.find({ _id: _id }, '_id title alias isVisible sort', { sort: ['-sort'] }).exec()
}

exports.update = function (params) {
  return CategoryModel.findOne({ _id: params._id }).then(function (category) {
    category.title = params.title
    category.sort = params.sort
    category.isVisible = params.isVisible
    category.lastModifyTime = new Date()
    return category.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.create = function (params) {
  const category = new CategoryModel()
  category.title = params.title
  category.alias = params.alias
  category.isVisible = params.isVisible
  category.sort = params.sort

  return category.save()
}

exports.remove = function (_id) {
  return CategoryModel.remove({
    _id: _id
  })
}
