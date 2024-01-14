"use strict";
r.r(t), r.d(t, {
  toggle: function() {
    return i
  },
  clearAll: function() {
    return l
  }
});
var a = r("913144"),
  n = r("916523");

function i(e, t) {
  let r = "boolean" == typeof t ? t : !n.default.get(e);
  a.default.dispatch({
    type: "DEV_TOOLS_DESIGN_TOGGLE_WEB_SET",
    toggle: e,
    value: r
  })
}

function l() {
  for (let e in n.default.all()) i(e, !1)
}