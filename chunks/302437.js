"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var n = i("974667"),
  l = i("446674"),
  s = i("206230");

function a() {
  return Promise.resolve()
}

function r(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function o(e, t) {
  let i = (0, l.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled);
  return (0, n.default)({
    id: e,
    isEnabled: i,
    orientation: t,
    setFocus: r,
    scrollToStart: a,
    scrollToEnd: a
  })
}