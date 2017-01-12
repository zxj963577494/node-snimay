const bcrypt = require('bcryptjs')

function bhash (str, callback) {
  bcrypt.hash(str, 10, callback)
};

function bcompare (str, hash, callback) {
  bcrypt.compare(str, hash, callback)
};

module.exports = {
  bhash,
  bcompare
}
