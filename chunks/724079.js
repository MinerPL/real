"use strict";
n("424973");
var i = n("590484");

function o() {
  var e = {},
    t = 0,
    n = 0,
    i = 0;
  return {
    add: function(o, r) {
      !r && (r = o, o = 0), o > n ? n = o : o < i && (i = o), !e[o] && (e[o] = []), e[o].push(r), t++
    },
    process: function() {
      for (var t = i; t <= n; t++) {
        for (var o = e[t], r = 0; r < o.length; r++)(0, o[r])()
      }
    },
    size: function() {
      return t
    }
  }
}
e.exports = function(e) {
  var t, n = (e = e || {}).reporter,
    r = i.getOption(e, "async", !0),
    a = i.getOption(e, "auto", !0);
  a && !r && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), r = !0);
  var s = o(),
    l = !1;

  function c() {
    for (l = !0; s.size();) {
      var e = s;
      s = o(), e.process()
    }
    l = !1
  }

  function d() {
    t = u(c)
  }

  function u(e) {
    return setTimeout(e, 0)
  }
  return {
    add: function(e, n) {
      !l && a && r && 0 === s.size() && function() {
        t = u(c)
      }(), s.add(e, n)
    },
    force: function(e) {
      !l && (void 0 === e && (e = r), t && (function(e) {
        clearTimeout(e)
      }(t), t = null), e ? function() {
        t = u(c)
      }() : c())
    }
  }
}