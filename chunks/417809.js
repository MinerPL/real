"use strict";
s.r(t), s.d(t, {
  formatExpiration: function() {
    return n
  }
}), s("781738"), s("424973");
let a = /[^0-9/]/g;

function n(e) {
  let t = e.replace(a, "").split("/"),
    s = t[0],
    n = t[1],
    l = [];
  return parseInt(s, 10) > 12 && (s = s.substring(0, 1)), l.push(s), (parseInt(s, 10) > 1 || 2 === s.length || null != n && "" !== n) && l.push("/"), null != n && "" !== n && parseInt(n, 10) > 99 && (n = (n + "").substring(0, 2)), l.push(n), l.join("")
}