"use strict";
r.r(e), r.d(e, {
  getRedirectPath: function() {
    return u
  },
  default: function() {
    return c
  }
});
var n = r("37983");
r("884691");
var o = r("803182"),
  a = r("447669"),
  i = r("49111"),
  l = r("492397");

function u() {
  let t = location.pathname + location.search,
    e = l.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, a.getLoginPath)(t, !1);
  return e
}
var c = function() {
  return (0, n.jsx)(o.Redirect, {
    to: u()
  })
}