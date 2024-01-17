"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("446674"),
  a = n("913144"),
  s = n("718517"),
  i = n("299039"),
  r = n("271938"),
  o = n("27618");
let u = 180 * s.default.Millis.DAY,
  d = !1;
class c extends l.default.Store {
  initialize() {
    this.waitFor(o.default, r.default)
  }
  isEligible() {
    return d
  }
}
c.displayName = "PremiumPromoStore";
var f = new c(a.default, {
  CONNECTION_OPEN: function() {
    let e = d;
    return e !== (d = o.default.getFriendIDs().length >= 10 && i.default.extractTimestamp(r.default.getId()) < Date.now() - u)
  }
})