"use strict";
r.r(t), r.d(t, {
  astToString: function() {
    return l
  },
  flattenAst: function() {
    return function e(t) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Array.isArray(t)) {
        let n = t.length,
          l = [];
        for (let i = 0; i < n; i++) ! function(e, t) {
          if (Array.isArray(t)) {
            let {
              length: r
            } = t;
            for (let n = 0; n < r; n++) e.push(t[n]);
            return
          }
          e.push(t)
        }(l, e(t[i], r));
        return l
      }
      return (null != t.content && (t.content = e(t.content, t)), null != r && t.type === r.type) ? t.content : t
    }
  },
  constrainAst: function() {
    return function e(t) {
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        limit: 200
      };
      if (Array.isArray(t)) {
        let l = t.length;
        for (let i = 0; i < l; i++) {
          let l = e(t[i], r);
          if (l === n) {
            t.length = i;
            break
          }
          t[i] = l
        }
      } else if ("text" !== t.type) {
        if (r.limit -= 1, r.limit <= 0) return n;
        Array.isArray(t.content) && (t.content = e(t.content, r))
      }
      return t
    }
  }
}), r("424973");
let n = {};

function l(e) {
  return (function e(t) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(t) ? t.forEach(t => e(t, r)) : "string" == typeof t.content ? r.push(t.content) : null != t.content && e(t.content, r), r
  })(e).join("")
}