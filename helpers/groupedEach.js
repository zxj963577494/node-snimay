const groupedEach = function (every, context, options) {
  let out = ''
  let subcontext = []
  if (context && context.length > 0) {
    for (let i = 0; i < context.length; i++) {
      if (i > 0 && i % every === 0) {
        out += options.fn(subcontext)
        subcontext = []
      }
      subcontext.push(context[i])
    }
    out += options.fn(subcontext)
  }
  return out
}
module.exports = groupedEach
