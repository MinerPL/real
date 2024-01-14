"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
});
var n = {},
  o = t.render = function(e, t, r, n) {
    if ("undefined" == typeof document && !n) return null;
    var o = n ? new n : document.createElement("canvas");
    o.width = 2 * r, o.height = 2 * r;
    var a = o.getContext("2d");
    return a ? (a.fillStyle = e, a.fillRect(0, 0, o.width, o.height), a.fillStyle = t, a.fillRect(0, 0, r, r), a.translate(r, r), a.fillRect(0, 0, r, r), o.toDataURL()) : null
  };
t.get = function(e, t, r, a) {
  var i = e + "-" + t + "-" + r + (a ? "-server" : "");
  if (n[i]) return n[i];
  var u = o(e, t, r, a);
  return n[i] = u, u
}