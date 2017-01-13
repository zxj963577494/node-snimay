function pageLink (params) {
  var link = ''
  for (var x of params) {
    for (var k of Object.keys(x)) {
      link += `&${k}=${x[k]}`
    }
  }
  return link
}

function addLink (path, keys, params) {
  for (var y of keys) {
    for (const z of y.values) {
      var link = ''
      if (params.length > 0) {
        for (var x of params) {
          for (var k of Object.keys(x)) {
            if (y.alias === k) {
              if (link) {
                link += `&${y.alias}=${z.alias}`
              } else {
                link += `?${y.alias}=${z.alias}`
              }
            } else {
              if (x[k]) {
                if (link) {
                  link += `&${k}=${x[k]}`
                } else {
                  link += `?${k}=${x[k]}`
                }
              }
            }
          }
        }
      } else {
        link += `?${y.alias}=${z.alias}`
      }
      var zlink = {
        'link': path + link
      }
      Object.assign(z, zlink)
    }
  }
}

function addActive (keys, params) {
  for (let y of keys) {
    for (let x of params) {
      for (let k of Object.keys(x)) {
        if (y.alias === k) {
          for (let z of y.values) {
            let active
            if (z.alias === x[k]) {
              active = {
                isActive: 1
              }
            } else {
              active = {
                isActive: 0
              }
            };
            Object.assign(z, active)
          }
        }
      }
    }
  }
}

module.exports = {
  pageLink,
  addLink,
  addActive
}
