"use strict";
r("808653"), r("424973");
var n = r("117811"),
  i = r("768232"),
  o = r("359236"),
  a = r("568355"),
  u = r("531018"),
  s = r("707736"),
  c = r("646601"),
  l = r("597643"),
  f = c.List,
  p = c.Repeat,
  h = s("draft_tree_data_support"),
  d = h ? i : n;
t.exports = {
  processHTML: function(t, e) {
    return o(t, u, e)
  },
  processText: function(t, e, r) {
    return t.reduce(function(t, n, i) {
      n = l(n);
      var o = a(),
        u = {
          key: o,
          type: r,
          text: n,
          characterList: f(p(e, n.length))
        };
      if (h && 0 !== i) {
        var s = i - 1;
        u = function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
              return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))), n.forEach(function(e) {
              (function(t, e, r) {
                e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : t[e] = r
              })(t, e, r[e])
            })
          }
          return t
        }({}, u, {
          prevSibling: (t[s] = t[s].merge({
            nextSibling: o
          })).getKey()
        })
      }
      return t.push(new d(u)), t
    }, [])
  }
}