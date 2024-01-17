"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("153160"),
  l = n("782340");

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e.available) return l.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
  if (e.premium && !n) return l.default.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
  let a = e.getPrice(null, t);
  if (null != a) return a.amount > 0 ? (0, s.formatPrice)(a.amount, a.currency) : l.default.Messages.APPLICATION_STORE_FREE;
  return l.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE
}