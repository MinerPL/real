"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("884691"),
  l = n("446674"),
  s = n("775433"),
  i = n("10514"),
  r = n("521012"),
  o = n("648825"),
  u = n("136185"),
  d = n("49111");

function c(e) {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.getSubscriptions()),
    n = a.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t))
        if (n.type === d.SubscriptionTypes.GUILD) {
          let t = (0, u.getRoleSubscriptionPlanId)(n);
          e[t] = n
        } return e
    }, [t]),
    {
      activeSubscription: c,
      activeSubscriptionListing: f
    } = (0, l.useStateFromStoresObject)([o.default], () => {
      var t;
      let a, l = null,
        s = null != e ? o.default.getSubscriptionGroupListing(e) : null,
        i = null !== (t = null == s ? void 0 : s.subscription_listings_ids) && void 0 !== t ? t : [];
      for (let e of i) {
        let t = o.default.getSubscriptionListing(e),
          s = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == s) continue;
        let i = n[s];
        if (null != i) {
          l = i, a = t;
          break
        }
      }
      return {
        activeSubscription: l,
        activeSubscriptionListing: a
      }
    }),
    h = null == f ? void 0 : f.subscription_plans[0],
    p = null == h ? void 0 : h.id,
    m = null == h ? void 0 : h.sku_id,
    E = (0, l.useStateFromStores)([i.default], () => null != p ? i.default.get(p) : null),
    C = null == f ? void 0 : f.soft_deleted;
  return a.useEffect(() => {
    null == E && null != m && !i.default.isFetchingForSKU(m) && (0, s.fetchSubscriptionPlansForSKU)(m, void 0, void 0, C)
  }, [E, m, C]), {
    activeSubscription: c,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: E
  }
}