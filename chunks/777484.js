"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("118810");

function a(e, t) {
  let n = e.offsetTop,
    a = e.offsetParent;
  for (; null != a;) {
    var l;
    if (a === t || !(0, s.isElement)(a, HTMLElement)) break;
    n += null !== (l = a.offsetTop) && void 0 !== l ? l : 0, a = a.offsetParent
  }
  return n
}