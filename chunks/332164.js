"use strict";
n.r(t), n.d(t, {
  useUserIsInLargeGuilds: function() {
    return i
  }
});
var a = n("65597"),
  s = n("525065");

function i() {
  let e = (0, a.default)([s.default], () => {
    let e = Object.values(s.default.getMemberCounts());
    return e.some(e => e >= 200)
  });
  return e
}