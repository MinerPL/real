"use strict";
r.r(e), r.d(e, {
  makeAuthenticated: function() {
    return u
  }
});
var n = r("37983");
r("884691");
var o = r("271938"),
  a = r("831588"),
  i = r("209535"),
  l = r("49111");

function u(t, e) {
  var r, u;
  let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function s(r) {
    if (!(0, a.isAuthenticated)() && o.default.getLoginStatus() !== l.LoginStates.LOGGING_IN && o.default.allowLogoutRedirect()) return null != e ? (0, n.jsx)(e, {
      renderRedirect: (0, n.jsx)(i.default, {})
    }) : (0, n.jsx)(i.default, {});
    return (0, n.jsx)(t, {
      ...c.passProps ? r : null
    })
  }
  return s.displayName = "Authenticated(".concat(null !== (u = null !== (r = t.displayName) && void 0 !== r ? r : t.name) && void 0 !== u ? u : "<Unknown>", ")"), s
}