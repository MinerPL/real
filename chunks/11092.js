"use strict";
n.r(e), n.d(e, {
  getChildMapping: function() {
    return r
  },
  getInitialChildMapping: function() {
    return s
  },
  getNextChildMapping: function() {
    return o
  }
}), n("424973");
var i = n("884691");

function r(t, e) {
  var n = Object.create(null);
  return t && i.Children.map(t, function(t) {
    return t
  }).forEach(function(t) {
    var r;
    n[t.key] = (r = t, e && (0, i.isValidElement)(r) ? e(r) : r)
  }), n
}

function a(t, e, n) {
  return null != n[e] ? n[e] : t.props[e]
}

function s(t, e) {
  return r(t.children, function(n) {
    return (0, i.cloneElement)(n, {
      onExited: e.bind(null, n),
      in: !0,
      appear: a(n, "appear", t),
      enter: a(n, "enter", t),
      exit: a(n, "exit", t)
    })
  })
}

function o(t, e, n) {
  var s = r(t.children),
    o = function(t, e) {
      function n(n) {
        return n in e ? e[n] : t[n]
      }
      t = t || {}, e = e || {};
      var i, r = Object.create(null),
        a = [];
      for (var s in t) s in e ? a.length && (r[s] = a, a = []) : a.push(s);
      var o = {};
      for (var u in e) {
        if (r[u])
          for (i = 0; i < r[u].length; i++) {
            var l = r[u][i];
            o[r[u][i]] = n(l)
          }
        o[u] = n(u)
      }
      for (i = 0; i < a.length; i++) o[a[i]] = n(a[i]);
      return o
    }(e, s);
  return Object.keys(o).forEach(function(r) {
    var u = o[r];
    if ((0, i.isValidElement)(u)) {
      var l = r in e,
        c = r in s,
        d = e[r],
        p = (0, i.isValidElement)(d) && !d.props.in;
      c && (!l || p) ? o[r] = (0, i.cloneElement)(u, {
        onExited: n.bind(null, u),
        in: !0,
        exit: a(u, "exit", t),
        enter: a(u, "enter", t)
      }) : c || !l || p ? c && l && (0, i.isValidElement)(d) && (o[r] = (0, i.cloneElement)(u, {
        onExited: n.bind(null, u),
        in: d.props.in,
        exit: a(u, "exit", t),
        enter: a(u, "enter", t)
      })) : o[r] = (0, i.cloneElement)(u, {
        in: !1
      })
    }
  }), o
}