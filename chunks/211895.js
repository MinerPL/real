"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("913144"),
  i = n("54239"),
  r = n("49111");

function a() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      openWithoutBackstack: !1
    };
  s.default.dispatch({
    type: "USER_SETTINGS_MODAL_OPEN",
    section: e,
    subsection: t,
    ...n
  }), (0, i.pushLayer)(r.Layers.USER_SETTINGS)
}