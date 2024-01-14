"use strict";
n.r(t), n.d(t, {
  _transformMetadataToCamelCase: function() {
    return function e(t) {
      if (null == t) return t;
      let n = Object.keys(t),
        u = n.reduce((n, u) => {
          let r = (0, o.camelCase)(u);
          return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n
        }, {});
      return u
    }
  },
  _transformMetadataToSnakeCase: function() {
    return function e(t) {
      if (null == t) return t;
      let n = Object.keys(t),
        u = n.reduce((n, u) => {
          let r = (0, o.snakeCase)(u);
          return "object" != typeof t[u] || Array.isArray(t[u]) ? n[r] = t[u] : n[r] = e(t[u]), n[r] = t[u], n
        }, {});
      return u
    }
  }
}), n("808653");
var o = n("917351")