"use strict";
r.r(t), r.d(t, {
  toggle: function() {
    return i
  }
});
var a = r("913144"),
  n = r("676574");

function i(e, t) {
  let r = "boolean" == typeof t ? t : !n.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DEV_SETTING_SET",
    toggle: e,
    value: r
  })
}