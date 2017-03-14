const models = require('../models')
const SelectorModel = models.Selector


exports.getAll = function (options) {
  return SelectorModel.find(options).exec()
}


exports.getSelectors = function (options) {
  return SelectorModel.find(options, 'id title values alias', { sort: ['-sort'] }).exec()
}


exports.getByCid = function (cid, options) {
  return SelectorModel.find(Object.assign({ cid: cid }, options), 'id title values alias', { sort: ['-sort'] }).exec()
}

exports.getByCid_Admin = function (cid, options) {
  return SelectorModel.find(Object.assign({ cid: cid }, options), '_id title values sort alias isVisible', { sort: ['-sort'] }).exec()
}

exports.getById_Admin = function (_id) {
  return SelectorModel.findOne({ _id: _id }, '', { 'values.sort': ['-sort'] }).exec()
}

exports.API_GetHeadById = function (_id) {
  return SelectorModel.findOne({ _id: _id }, '', { 'values.sort': ['-sort'] }).exec()
}

exports.API_GetHeadByCid = function (cid, options) {
  return SelectorModel.find(Object.assign({ cid: cid }, options), '', { sort: ['-sort'] }).exec()
}

exports.update = function (params) {
  return SelectorModel.findOne({ _id: params._id }).then(function (selector) {
    selector.title = params.title
    selector.alias = params.alias
    selector.sort = params.sort
    selector.isVisible = params.isVisible
    selector.lastModifyTime = new Date()
    return selector.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.updateValues = function (_id, value) {
  return SelectorModel.findOne({ _id: _id }).then(function (selector) {
    selector.values.push(value)
    selector.lastModifyTime = new Date()
    return selector.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.updateValueModel = function (params) {
  return SelectorModel.findOne({ _id: params._id }).then(function (selector) {
    selector.values.forEach((x) => {
      if (x.id === params._sid) {
        x.title = params.title
        x.alias = params.alias
        x.sort = params.sort
        x.isVisible = params.isVisible
      }
    })
    selector.lastModifyTime = new Date()
    return selector.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}

exports.create = function (params) {
  var selector = new SelectorModel()
  selector.cid = params.cid
  selector.title = params.title
  selector.alias = params.alias
  selector.isVisible = params.isVisible
  selector.sort = params.sort
  selector.values = params.values

  return selector.save()
}

exports.removeKey = function (_id) {
  return SelectorModel.remove({
    _id: _id
  })
}

exports.removeValue = function (_id, _sid) {
  return SelectorModel.findOne({ _id: _id }).then(function (selector) {
    selector.values.id(_sid).remove()
    selector.lastModifyTime = new Date()
    return selector.save()
  }).catch(function (err) {
    Promise.reject(err)
  })
}
