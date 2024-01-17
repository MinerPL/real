"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("866227"),
  l = n.n(s),
  a = n("446674"),
  i = n("913144"),
  r = n("388290"),
  o = n("697218"),
  u = n("719923");
let d = !1;
class c extends a.default.Store {
  shouldShowReactivateNotice() {
    let e = o.default.getCurrentUser();
    return !(0, u.isPremium)(e) && d
  }
}
c.displayName = "SubscriptionRemindersStore";
var f = new c(i.default, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (null != t) {
      var n;
      let e = r.default.createFromServer(t),
        s = (0, u.getPremiumPlanItem)(e);
      if (null == s || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
      let a = l(e.metadata.ended_at);
      l().isBetween(a.clone().add(4, "days"), a.clone().add(11, "days")) && (d = !0)
    }
  }
})