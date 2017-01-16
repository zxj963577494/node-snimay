const models = require('../models')
const CategoryModel = models.Category

exports.get = function (select, options, callback) {
  CategoryModel.find(options, select, { sort: ['-sort'] }, callback)
}

exports.getBy_Id = function (_id, callback) {
  CategoryModel.find({ _id: _id }, '_id title alias isVisible sort', { sort: '-sort' }, callback)
}

exports.update = function (params, callback) {
  CategoryModel.findOne({ _id: params._id }, function (err, category) {
    if (err || !category) {
      return callback(err)
    }
    category.title = params.title
    category.sort = params.sort
    category.isVisible = params.isVisible
    category.lastModifyTime = new Date()
    category.save(callback)
  })
}

exports.create = function (params, callback) {
  const category = new CategoryModel()
  category.title = params.title
  category.alias = params.alias
  category.isVisible = params.isVisible
  category.sort = params.sort

  category.save(callback)
}
