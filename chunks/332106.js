"use strict";
var e = n("714919"),
  o = n("162208"),
  i = n("522552"),
  u = n("730242"),
  s = n("581887");
e({
  target: "Object",
  stat: !0,
  forced: !o || i(function() {
    u.f(1)
  })
}, {
  getOwnPropertySymbols: function(t) {
    var r = u.f;
    return r ? r(s(t)) : []
  }
})