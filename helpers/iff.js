 const iff = function (a, operator, b, opts) {
   let bool = false
   switch (operator) {
     case 'eq':
       bool = a === b
       break
     case 'ne':
       bool = a !== b
       break
     case 'gt':
       bool = a > b
       break
     case 'lt':
       bool = a < b
       break
     case 'lte':
       bool = a <= b
       break
     case 'gte':
       bool = a >= b
       break
     case 'and':
       bool = a && b
       break
     case 'or':
       bool = a || b
       break
     default:
       throw new Error('Unknown operator ' + operator)
   }
   if (bool) {
     return opts.fn(this)
   } else {
     return opts.inverse(this)
   }
 }
 module.exports = iff
