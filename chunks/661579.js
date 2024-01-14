"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("153160"),
  s = n("782340");

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!e.available) return s.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE;
  if (e.premium && !n) return s.default.Messages.APPLICATION_STORE_FREE_WITH_PREMIUM;
  let l = e.getPrice(null, t);
  if (null != l) return l.amount > 0 ? (0, a.formatPrice)(l.amount, l.currency) : s.default.Messages.APPLICATION_STORE_FREE;
  return s.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE
}