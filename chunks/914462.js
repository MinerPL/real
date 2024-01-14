"use strict";
var r = n("714919"),
  a = n("574756"),
  o = n("418689"),
  i = n("389316"),
  l = n("51494").CONSTRUCTOR,
  u = n("651780"),
  s = a("Promise"),
  c = o && !l;
r({
  target: "Promise",
  stat: !0,
  forced: o || l
}, {
  resolve: function(e) {
    return u(c && this === s ? i : this, e)
  }
})