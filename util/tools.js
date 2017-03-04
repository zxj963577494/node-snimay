const bcrypt = require('bcryptjs')

function bhash (str) {
  return new Promise(function (resolve, reject) {
    resolve(bcrypt.hash(str, 10))
  })
}

function bcompare (str, hash) {
  return new Promise(function (resolve, reject) {
    resolve(bcrypt.compare(str, hash))
  })
}

module.exports = {
  bhash,
  bcompare
}
