"use strict";
n.r(t), n.d(t, {
  isCurrentUserTeen: function() {
    return i
  }
});
var s = n("697218");
let i = () => {
  var e;
  return (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
}