"use strict";
n.r(e), n.d(e, {
  createStackParser: function() {
    return i
  },
  getFunctionName: function() {
    return o
  },
  stackParserFromStackParserOptions: function() {
    return a
  }
}), n("781738"), n("424973"), n("222007");
let r = /\(error: (.*)\)/;

function i() {
  for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  let i = e.sort((t, e) => t[0] - e[0]).map(t => t[1]);
  return function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = [],
      a = t.split("\n");
    for (let t = e; t < a.length; t++) {
      let e = a[t];
      if (e.length > 1024) continue;
      let s = r.test(e) ? e.replace(r, "$1") : e;
      if (!s.match(/\S*Error: /)) {
        for (let t of i) {
          let e = t(s);
          if (e) {
            n.push(e);
            break
          }
        }
        if (n.length >= 50) break
      }
    }
    return function(t) {
      if (!t.length) return [];
      let e = t.slice(0, 50),
        n = e[e.length - 1].function;
      n && /sentryWrapped/.test(n) && e.pop(), e.reverse();
      let r = e[e.length - 1].function;
      return r && /captureMessage|captureException/.test(r) && e.pop(), e.map(t => ({
        ...t,
        filename: t.filename || e[e.length - 1].filename,
        function: t.function || "?"
      }))
    }(n)
  }
}

function a(t) {
  return Array.isArray(t) ? i(...t) : t
}
let s = "<anonymous>";

function o(t) {
  try {
    if (!t || "function" != typeof t) return s;
    return t.name || s
  } catch (t) {
    return s
  }
}