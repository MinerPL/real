"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var s = a("446674"),
  l = a("697218");

function i() {
  let e = (0, s.useStateFromStores)([l.default], () => {
    var e;
    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
  });
  return e
}