const eventproxy = require('eventproxy')
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
    sort: 99,
    isVisible: 1,
    title: '全部',
    alias: 'all'
  })
  const params = {
    title, alias, cid, isVisible, sort, values
  }
  const ep = new eventproxy()
  ep.all('key', function (key) {
    req.flash('info', {message: '添加成功'})
    res.redirect('/admin/selector_key_list/' + cid)
  })

  SelectorProxy.create(params, ep.done('key'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getKeyEdit = function (req, res, next) {
  const _id = req.params._id
  const cid = req.params.cid

  const ep = new eventproxy()
  ep.all('key', function (key) {
    res.render('admin/selector_key_edit', {
      cid: cid,
      model: key,
      layout: 'admin'
    })
  })

  SelectorProxy.getById_Admin(_id, ep.done('key'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
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
  const ep = new eventproxy()
  ep.all('selector', function (selector) {
    req.flash('info', {message: '修改成功'})
    res.redirect('/admin/selector_key_list/' + cid)
  })

  SelectorProxy.update(params, ep.done('selector'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getKeyList = function (req, res, next) {
  let cid = req.params.cid || 1
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/selector_key_list', {
      cid: cid,
      list: list,
      layout: 'admin'
    })
  })
  SelectorProxy.getByCid_Admin(cid, {}, ep.done('list'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getKeyRemove = function (req, res, next) {
  const _id = req.params._id
  SelectorProxy.removeKey(_id, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('back')
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
    sort: sort,
    isVisible: isVisible,
    title: title,
    alias: alias
  }
  const ep = new eventproxy()
  ep.all('key', function (key) {
    req.flash('info', {message: '添加成功'})
    res.redirect('/admin/selector_value_list/' + _id)
  })

  SelectorProxy.updateValues(_id, value, ep.done('key'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getValueEdit = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid

  const ep = new eventproxy()
  ep.all('model', function (model) {
    var m = model.values.filter((x) => {
      return x._id.toString() === _sid
    })
    res.render('admin/selector_value_edit', {
      _id: _id,
      model: m,
      layout: 'admin'
    })
  })

  SelectorProxy.getById_Admin(_id, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
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
  const ep = new eventproxy()
  ep.all('selector', function (selector) {
    req.flash('info', {message: '修改成功'})
    res.redirect('/admin/selector_value_list/' + _id)
  })

  SelectorProxy.updateValueModel(params, ep.done('selector'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getValueList = function (req, res, next) {
  const _id = req.params._id

  const ep = new eventproxy()
  ep.all('model', function (model) {
    res.render('admin/selector_value_list', {
      model: model,
      layout: 'admin'
    })
  })

  SelectorProxy.getById_Admin(_id, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getValueRemove = function (req, res, next) {
  const _id = req.params._id
  const _sid = req.params._sid
  SelectorProxy.removeValue(_id, _sid, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('back')
  })
}
