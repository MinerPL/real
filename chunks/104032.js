"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("866227"),
  a = n.n(l),
  s = n("446674"),
  i = n("913144"),
  r = n("388290"),
  o = n("697218"),
  u = n("719923");
let d = !1;
class c extends s.default.Store {
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
        l = (0, u.getPremiumPlanItem)(e);
      if (null == l || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
      let s = a(e.metadata.ended_at);
      a().isBetween(s.clone().add(4, "days"), s.clone().add(11, "days")) && (d = !0)
    }
  }
})