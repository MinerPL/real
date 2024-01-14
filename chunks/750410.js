"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("426094");
var r = n("66417"),
  a = n("568980"),
  o = n("183696"),
  i = n("292362");

function l() {
  if ("undefined" != typeof Reflect && r) l = a(r).call(r);
  else l = function(e, t, n) {
    var r = (0, i.default)(e, t);
    if (r) {
      var a = o(r, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value
    }
  };
  return l.apply(this, arguments)
}