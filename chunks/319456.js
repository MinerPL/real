t.exports = function(t) {
  return function(r, n, e) {
    for (var o = -1, i = Object(r), u = e(r), a = u.length; a--;) {
      var c = u[t ? a : ++o];
      if (!1 === n(i[c], c, i)) break
    }
    return r
  }
}