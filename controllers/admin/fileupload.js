const config = require('config-lite')
const Promise = require('bluebird')
const qn = require('qn')
const fs = Promise.promisifyAll(require('fs'))

exports.upload = function (req, res, next) {
  let files = []
  if (req.file) {
    const client = qn.create({
      accessKey: config.qiniu.ACCESS_KEY,
      secretKey: config.qiniu.SECRET_KEY,
      bucket: config.qiniu.BUCKET,
      origin: config.qiniu.UPLOAD_ORIGIN
    })
    client.uploadFile(req.file.path, { key: '/product/' + req.file.path }, (err, qiniu) => {
      if (err) {
        return next(err)
      }
      // 删除服务器文件
      fs.statAsync(req.file.path).then((stat) => {
        if (stat) {
          fs.unlinkAsync(req.file.path).then(function () {
            files.push({
              deleteType: 'DELETE',
              deleteUrl: config.qiniu.BROWSE_ORIGIN + qiniu.key,
              name: qiniu['x:filename'],
              size: qiniu['x:size'],
              type: req.file.mimetype,
              url: config.qiniu.BROWSE_ORIGIN + qiniu.key
            })
            let result = {
              files: files
            }
            res.json(result)
          })
        } else {
          files.push({
            error: '警告，删除服务器图片失败',
            deleteType: 'DELETE',
            deleteUrl: config.qiniu.BROWSE_ORIGIN + qiniu.key,
            name: qiniu['x:filename'],
            size: qiniu['x:size'],
            type: req.file.mimetype,
            url: config.qiniu.BROWSE_ORIGIN + qiniu.key
          })
          let result = {
            files: files
          }
          res.json(result)
        }
      }).catch(function (err) {
        files.push({
          error: '上传失败'
        })
        let result = {
          files: files
        }
        res.json(result)
      })
    })
  }
}
