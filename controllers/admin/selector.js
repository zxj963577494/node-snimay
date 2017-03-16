const mongoose = require('mongoose')
const SelectorProxy = require('../../proxy').Selector

exports.getKeyAdd = function (req, res, next) {
  res.render('admin/selector_key_add', {
    layout: 'admin'
  })
}

exports.postKeyAdd = function (req, res, next) {
  const cid = req.params.cid
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const values = new Array({
    _id: mongoose.Types.ObjectId(),
    sort: 99,
    isVisible: 1,
    title: '全部',
    alias: 'all'
  })
  const params = {
    title, alias, cid, isVisible, sort, values
  }

  SelectorProxy.create(params).then(function (model) {
    req.flash('info', {message: '添加成功'})
    res.redirect('/admin/selector_key_list/' + cid)
  }).catch(function (err) {
    return next(err)
  })
}

exports.getKeyEdit = function (req, res, next) {
  const _id = req.params._id
  const cid = req.params.cid
  SelectorProxy.getById_Admin(_id).then(function (model) {
    res.render('admin/selector_key_edit', {
      cid: cid,
      model: model,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.postKeyEdit = function (req, res, next) {
  const _id = req.body._id
  const cid = req.body.cid
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const params = {
    _id, title, alias, sort, isVisible
  }
  SelectorProxy.update(params).then(function (model) {
    req.flash('info', {message: '修改成功'})
    res.redirect('/admin/selector_key_list/' + cid)
  }).catch(function (err) {
    return next(err)
  })
}

exports.getKeyList = function (req, res, next) {
  let cid = req.params.cid || 1
  SelectorProxy.getByCid_Admin(cid, {}).then(function (list) {
    res.render('admin/selector_key_list', {
      cid: cid,
      list: list,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getKeyRemove = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.removeKey(_id).then(function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('back')
  }).catch(function (err) {
    return next(err)
  })
}

exports.getValueAdd = function (req, res, next) {
  const _id = req.params._id
  res.render('admin/selector_value_add', {
    _id: _id,
    layout: 'admin'
  })
}

exports.postValueAdd = function (req, res, next) {
  const _id = req.body._id
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const value = {
    _id: mongoose.Types.ObjectId(),
    sort: sort,
    isVisible: isVisible,
    title: title,
    alias: alias
  }
  SelectorProxy.updateValues(_id, value).then(function (model) {
    req.flash('info', {message: '添加成功'})
    res.redirect('/admin/selector_value_list/' + _id)
  }).catch(function (err) {
    return next(err)
  })
}

exports.getValueEdit = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid

  SelectorProxy.getById_Admin(_id).then(function (model) {
    var m = model.values.filter((x) => {
      return x._id.toString() === _sid
    })
    res.render('admin/selector_value_edit', {
      _id: _id,
      _sid: _sid,
      model: m,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.postValueEdit = function (req, res, next) {
  const _id = req.body._id
  const _sid = req.body._sid
  const title = req.body.title
  const alias = req.body.alias
  const sort = req.body.sort
  const isVisible = req.body.isVisible
  const params = {
    _id, _sid, title, alias, sort, isVisible
  }
  SelectorProxy.updateValueModel(params).then(function () {
    req.flash('info', {message: '修改成功'})
    res.redirect('/admin/selector_value_list/' + _id)
  }).catch(function (err) {
    return next(err)
  })
}

exports.getValueList = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.getById_Admin(_id).then(function (model) {
    res.render('admin/selector_value_list', {
      model: model,
      layout: 'admin'
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getValueRemove = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid
  SelectorProxy.removeValue(_id, _sid).then(function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('back')
  }).catch(function (err) {
    return next(err)
  })
}
