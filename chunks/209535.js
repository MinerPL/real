"use strict";
n.r(t), n.d(t, {
  getRedirectPath: function() {
    return o
  },
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("803182"),
  i = n("447669"),
  l = n("49111"),
  r = n("492397");

function o() {
  let e = location.pathname + location.search,
    t = r.CONFERENCE_MODE_ENABLED ? l.Routes.REGISTER : (0, i.getLoginPath)(e, !1);
  return t
}
var u = function() {
  return (0, a.jsx)(s.Redirect, {
    to: o()
  })
}