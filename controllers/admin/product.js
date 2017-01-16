const eventproxy = require('eventproxy')
const CategoryProxy = require('../../proxy').Category
const ProductProxy = require('../../proxy').Product
const SelectorProxy = require('../../proxy').Selector
const _ = require('lodash')

exports.getList = function (req, res, next) {
  let cid = req.params.cid || 1
  const ep = new eventproxy()
  ep.all('list', function (list) {
    res.render('admin/product_list', {
      cid: cid,
      title: parseInt(cid) === 1 ? '产品体验' : parseInt(cid) === 2 ? '定制家具' : '配套家具',
      list: list,
      layout: 'admin'
    })
  })
  ProductProxy.getProducts_Admin({
    cid: cid
  }, ep.done('list'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getAdd = function (req, res, next) {
  const ep = new eventproxy()
  let cid = req.params.cid || 1
  ep.all('category', 'selector', function (category, selector) {
    res.render('admin/product_add', {
      cid: cid,
      category: category.filter((x) => {
        return x.id === parseInt(cid)
      }),
      title: (parseInt(cid) === 1 ? '产品体验' : parseInt(cid) === 2 ? '定制家具' : '配套家具'),
      selector: selector,
      layout: 'admin'
    })
  })
  CategoryProxy.get('_id id title alias isVisible sort', {}, ep.done('category'))
  SelectorProxy.getByCid_Admin(cid, {}, ep.done('selector'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postAdd = function (req, res, next) {
  const categorys = req.body.categorys
  const categoryRef = categorys.split(',')[0]
  const cid = categorys.split(',')[1]
  const title = req.body.title
  const isIndex = req.body.isIndex
  const isVisible = req.body.isVisible
  const code = req.body.code
  const part = req.body.part
  const skPic = req.body.skPic
  const sliderPics = req.body.sliderPics.split(',')
  const content = req.body.content
  const search = _.uniq(req.body.search ? req.body.search.split(',') : '')
  const where = _.uniq(req.body.where ? req.body.where.concat(['all']) : new Array().concat(['all']))
  const tag = _.uniq(req.body.tag ? req.body.tag.split(',') : '')
  const description = req.body.description
  const price = req.body.price
  const params = {
    cid, categoryRef, title, content, price, description, sliderPics, skPic, code, part, isVisible, isIndex, tag, where, search
  }
  const ep = new eventproxy()
  ep.all('product', function (product) {
    req.flash('info', {
      message: '添加成功'
    })
    res.redirect('/admin/product_list')
  })

  ProductProxy.create(params, ep.done('product'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getEdit = function (req, res, next) {
  const _id = req.params._id
  const cid = req.params.cid || 1
  const ep = new eventproxy()
  ep.all('model', 'category', 'selector', function (model, category, selector) {
    res.render('admin/product_edit', {
      cid: cid,
      category: category.filter((x) => {
        return x.id === parseInt(cid)
      }),
      model: model,
      selector: selector,
      title: (parseInt(cid) === 1 ? '产品体验' : parseInt(cid) === 2 ? '定制家具' : '配套家具'),
      layout: 'admin'
    })
  })
  CategoryProxy.get('_id id title alias isVisible sort', {}, ep.done('category'))
  ProductProxy.getById_Admin(_id, ep.done('model'))
  SelectorProxy.getByCid_Admin(cid, {}, ep.done('selector'))
  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.postEdit = function (req, res, next) {
  const _id = req.body._id
  const categorys = req.body.categorys
  const categoryRef = categorys.split(',')[0]
  const cid = categorys.split(',')[1]
  const title = req.body.title
  const isIndex = req.body.isIndex
  const isVisible = req.body.isVisible
  const code = req.body.code
  const part = req.body.part
  const skPic = req.body.skPic
  const sliderPics = req.body.sliderPics.split(',')
  const content = req.body.content
  const search = _.uniq(req.body.search ? req.body.search.split(',') : '')
  const where = _.uniq(req.body.where ? req.body.where.concat(['all']) : new Array().concat(['all']))
  const tag = _.uniq(req.body.tag ? req.body.tag.split(',') : '')
  const description = req.body.description
  const price = req.body.price
  const params = {
    _id, cid, categoryRef, title, content, price, description, sliderPics, skPic, code, part, isVisible, isIndex, tag, where, search
  }
  const ep = new eventproxy()
  ep.all('model', function (model) {
    req.flash('info', {
      message: '编辑成功'
    })
    res.redirect('/admin/product_list/' + cid)
  })

  ProductProxy.update(params, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getRemove = function (req, res, next) {
  const _id = req.params._id
  ProductProxy.remove(_id, function (model) {
    req.flash('info', {
      message: '删除成功'
    })
    res.redirect('back')
  })
}
