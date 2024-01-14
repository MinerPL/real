"use strict";
var r = n("714919"),
  a = n("288302"),
  o = n("581887"),
  i = n("756579"),
  l = n("984447"),
  u = n("849478");
r({
  target: "Array",
  proto: !0
}, {
  flat: function() {
    var e = arguments.length ? arguments[0] : void 0,
      t = o(this),
      n = i(t),
      r = u(t, 0);
    return r.length = a(r, t, t, n, 0, void 0 === e ? 1 : l(e)), r
  }
})