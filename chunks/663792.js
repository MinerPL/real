"use strict";
var r = n("714919"),
  a = n("359882"),
  o = n("234779"),
  i = a([].reverse),
  l = [1, 2];
r({
  target: "Array",
  proto: !0,
  forced: String(l) === String(l.reverse())
}, {
  reverse: function() {
    return o(this) && (this.length = this.length), i(this)
  }
})