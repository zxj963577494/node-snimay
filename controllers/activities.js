const ActivityProxy = require('../proxy').Activity

exports.get = function (req, res, next) {
  // 获取当前页
  let currentPage = parseInt(req.query.page, 10) || 1
  currentPage = currentPage > 0 ? currentPage : 1

  // 构建产品查询条件
  const options = Object.assign(
    {
      'createTime': {
        '$lt': new Date()
      }
    },
    { isVisible: 1 })

  const pageSize = 12

  const getByPagePromise = ActivityProxy.getByPage('id pic title endTime description', currentPage, pageSize, options)

  const getCountPromise = ActivityProxy.getCount(options)

  Promise.all([getByPagePromise, getCountPromise]).then(function ([activities, totalCount]) {
    res.render('activities', {
      activities: activities,
      currentPage: currentPage,
      totalPages: Math.ceil(totalCount / pageSize),
      pageSize: pageSize
    })
  }).catch(function (err) {
    return next(err)
  })
}

exports.getById = function (req, res, next) {
  const id = req.params.id

  ActivityProxy.getById(id).then(function (model) {
    res.render('activity', {
      model
    })
  }).catch(function (err) {
    return next(err)
  })
}
