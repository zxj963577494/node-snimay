const setChecked = function (value, currentValue) {
  if (value === currentValue) {
    return 'checked'
  } else {
    return ''
  }
}
module.exports = setChecked
