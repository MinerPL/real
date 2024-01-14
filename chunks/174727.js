"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("775560"),
  r = n("888400"),
  l = n("149638");

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
    n = arguments.length > 2 ? arguments[2] : void 0,
    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = (0, r.diffAsUnits)(Date.now(), e),
    o = (0, i.useForceUpdate)();
  return (0, l.default)(() => {
    let e = 0 === a.days && 0 === a.hours && 0 === a.minutes && 0 === a.seconds;
    !e && !s && (o(), null == n || n())
  }, s ? null : t), a
}