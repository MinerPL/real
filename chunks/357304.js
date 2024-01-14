"use strict";
n.r(t), n.d(t, {
  renderAvatarCursorOutline: function() {
    return l
  },
  renderAvatarCursor: function() {
    return s
  }
});
var a = n("242260");

function l(e, t, n, a, l) {
  e.save(), e.beginPath(), e.fillStyle = a, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI), e.fill(), e.restore()
}

function s(e, t, n, l) {
  e.save();
  let s = a.default.getAvatarImage(l);
  if (null == s) return;
  let i = 20 * window.devicePixelRatio;
  e.beginPath(), e.arc(t, n, i / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(s, t - i / 2, n - i / 2, i, i), e.restore()
}