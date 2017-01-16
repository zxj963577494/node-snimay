const models = require('../models')
const SelectorModel = models.Selector


exports.getAll = function (options, callback) {
  SelectorModel.find(options, callback)
}


exports.getSelectors = function (options, callback) {
  SelectorModel.find(options, 'id title values alias', { sort: '-sort' }, callback)
}


exports.getByCid = function (cid, options, callback) {
  SelectorModel.find(Object.assign({ cid: cid }, options), 'id title values alias', { sort: '-sort' }, callback)
}

exports.getByCid_Admin = function (cid, options, callback) {
  SelectorModel.find(Object.assign({ cid: cid }, options), '_id title values sort alias isVisible', { sort: '-sort' }, callback)
}

exports.getById_Admin = function (_id, callback) {
  SelectorModel.findOne({ _id: _id }, '_id title values sort alias isVisible', { 'values.sort': '-sort' }, callback)
}

exports.update = function (params, callback) {
  SelectorModel.findOne({ _id: params._id }, function (err, selector) {
    if (err || !selector) {
      return callback(err)
    }
    selector.title = params.title
    selector.alias = params.alias
    selector.sort = params.sort
    selector.isVisible = params.isVisible
    selector.lastModifyTime = new Date()
    selector.save(callback)
  })
}

exports.updateValues = function (_id, value, callback) {
  SelectorModel.findOne({ _id: _id }, function (err, selector) {
    if (err || !selector) {
      return callback(err)
    }
    selector.values.push(value)
    selector.lastModifyTime = new Date()
    selector.save(callback)
  })
}

exports.updateValueModel = function (params, callback) {
  SelectorModel.findOne({ _id: params._id }, function (err, selector) {
    if (err || !selector) {
      return callback(err)
    }
    selector.values.forEach((x) => {
      if (x.id === params._sid) {
        x.title = params.title
        x.alias = params.alias
        x.sort = params.sort
        x.isVisible = params.isVisible
      }
    })
    selector.lastModifyTime = new Date()
    selector.save(callback)
  })
}

exports.create = function (params, callback) {
  var selector = new SelectorModel()
  selector.cid = params.cid
  selector.title = params.title
  selector.alias = params.alias
  selector.isVisible = params.isVisible
  selector.sort = params.sort
  selector.values = params.values

  selector.save(callback)
}

exports.removeKey = function (_id, callback) {
  SelectorModel.remove({
    _id: _id
  }, callback)
}

exports.removeValue = function (_id, _sid, callback) {
  SelectorModel.findOne({ _id: _id }, function (err, selector) {
    if (err || !selector) {
      return callback(err)
    }
    selector.values.id(_sid).remove()
    selector.lastModifyTime = new Date()
    selector.save(callback)
  })
}
