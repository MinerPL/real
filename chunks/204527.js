"use strict";
var r = n("868681"),
  i = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  },
  o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  },
  a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  u = {};

function s(t) {
  return r.isMemo(t) ? a : u[t.$$typeof] || i
}
u[r.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, u[r.Memo] = a;
var c = Object.defineProperty,
  l = Object.getOwnPropertyNames,
  f = Object.getOwnPropertySymbols,
  h = Object.getOwnPropertyDescriptor,
  p = Object.getPrototypeOf,
  d = Object.prototype;
t.exports = function t(e, n, r) {
  if ("string" != typeof n) {
    if (d) {
      var i = p(n);
      i && i !== d && t(e, i, r)
    }
    var a = l(n);
    f && (a = a.concat(f(n)));
    for (var u = s(e), v = s(n), y = 0; y < a.length; ++y) {
      var m = a[y];
      if (!o[m] && !(r && r[m]) && !(v && v[m]) && !(u && u[m])) {
        var g = h(n, m);
        try {
          c(e, m, g)
        } catch (t) {}
      }
    }
  }
  return e
}