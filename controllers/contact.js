const config = require('config-lite')

exports.get = function (req, res, next) {
  const map = Object.assign({
    ak: config.baiduMap.ak,
    point: config.baiduMap.point,
    mapText: config.baiduMap.mapText,
    mapMouseoverTxt: config.baiduMap.mapMouseoverTxt
  })
  res.render('contact', {
    map
  })
}
