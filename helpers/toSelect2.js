const toSelect2 = function (a) {
  let str = '['
  a.forEach((x) => {
    if (x !== 'all') {
      str += str.length > 2 ? (',"' + x + '"') : '"' + x + '"'
    }
  })
  return str + ']'
}
module.exports = toSelect2
