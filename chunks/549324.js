e("781738");
var n = e("600506"),
  o = e("235677"),
  i = e("952133"),
  u = e("521532"),
  a = /^\[object .+?Constructor\]$/,
  c = Object.prototype,
  s = Function.prototype.toString,
  f = c.hasOwnProperty,
  p = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
t.exports = function(t) {
  return !(!i(t) || o(t)) && (n(t) ? p : a).test(u(t))
}