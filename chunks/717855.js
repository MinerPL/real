var e = n("285162"),
  o = Object.create,
  c = function() {
    function t() {}
    return function(r) {
      if (!e(r)) return {};
      if (o) return o(r);
      t.prototype = r;
      var n = new t;
      return t.prototype = void 0, n
    }
  }();
t.exports = c