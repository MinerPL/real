e.exports = function(e) {
  return function(t, r, n) {
    for (var o = -1, a = Object(t), i = n(t), u = i.length; u--;) {
      var l = i[e ? u : ++o];
      if (!1 === r(a[l], l, a)) break
    }
    return t
  }
}