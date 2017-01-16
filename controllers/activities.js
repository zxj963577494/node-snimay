const eventproxy = require('eventproxy')
const ActivityProxy = require('../proxy').Activity

exports.get = function (req, res, next) {
  // 获取当前页
  let currentPage = parseInt(req.query.page, 10) || 1
  currentPage = currentPage > 0 ? currentPage : 1

  // 构建产品查询条件
  const options = Object.assign(
    { 'createTime': {
      '$lt': new Date()
    } },
    { isVisible: 1 })

  const pageSize = 12

  const ep = new eventproxy()

  ep.all('activities', 'totalCount', function (activities, totalCount) {
    res.render('activities', {
      activities: activities,
      currentPage: currentPage,
      totalPages: Math.ceil(totalCount / pageSize),
      pageSize: pageSize
    })
  })

  ActivityProxy.getByPage('id pic title endTime description', currentPage, pageSize, options, ep.done('activities'))

  ActivityProxy.getCount(options, ep.done('totalCount'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}

exports.getById = function (req, res, next) {
  const id = req.params.id

  const ep = new eventproxy()

  ep.all('model', function (model) {
    res.render('activity', {
      model
    })
  })

  ActivityProxy.getById(id, ep.done('model'))

  ep.fail(function (err) {
    if (err) {
      return next(err)
    }
  })
}
