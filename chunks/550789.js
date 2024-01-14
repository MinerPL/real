"use strict";
var r = n("714919"),
  a = n("359882"),
  o = n("358685"),
  i = n("591014"),
  l = n("723786"),
  u = n("673472"),
  s = a("".indexOf);
r({
  target: "String",
  proto: !0,
  forced: !u("includes")
}, {
  includes: function(e) {
    return !!~s(l(i(this)), l(o(e)), arguments.length > 1 ? arguments[1] : void 0)
  }
})