"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("884691"),
  a = n("48174");
let i = [];

function o(e, t) {
  let n = (0, r.useRef)(),
    o = (0, r.useRef)(i);
  return o.current === i ? (n.current = e(), o.current = t) : !(0, a.default)(t, o.current) && (n.current = e(), o.current = t), n.current
}