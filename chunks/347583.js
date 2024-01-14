"use strict";
var r = n("714919"),
  a = n("522552"),
  o = n("979095"),
  i = n("453084").f,
  l = n("597018");
r({
  target: "Object",
  stat: !0,
  forced: !l || a(function() {
    i(1)
  }),
  sham: !l
}, {
  getOwnPropertyDescriptor: function(e, t) {
    return i(o(e), t)
  }
})