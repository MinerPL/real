"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("866227"),
  l = n.n(i),
  r = n("850068"),
  o = n("812204"),
  u = n("685665"),
  d = n("837008"),
  c = n("755574"),
  f = n("782340");
let E = e => {
  let [t, n] = s.useState(!1), [a, i] = s.useState(null), l = async t => {
    n(!0), i(null);
    try {
      await (0, r.deleteRenewalMutation)(t, e)
    } catch (e) {
      i(e)
    } finally {
      n(!1)
    }
  };
  return {
    resetRenewalMutation: l,
    submitting: t,
    error: a
  }
};

function _(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: i
  } = e, {
    analyticsLocations: r
  } = (0, u.default)(o.default.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: _,
    submitting: h,
    error: C
  } = E(r), I = (0, d.useSubscriptionListingsForGroup)(t, {
    includeSoftDeleted: !0
  }), {
    currentListing: T,
    nextListing: S
  } = s.useMemo(() => {
    if ((null == n ? void 0 : n.renewalMutations) == null) return {
      currentListing: void 0,
      nextListing: void 0
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId,
      a = I.find(t => t.subscription_plans[0].id === e),
      s = I.find(e => e.subscription_plans[0].id === t);
    return {
      currentListing: a,
      nextListing: s
    }
  }, [n, I]);
  if (null == n || null == T || null == S) return null;
  let m = l(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, a.jsx)(c.default, {
    message: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_DESCRIPTION.format({
      currentListing: T.name,
      nextListing: S.name,
      changeDate: m
    }),
    error: null == C ? void 0 : C.message,
    onClick: () => _(n),
    submitting: h,
    ctaMessage: f.default.Messages.GUILD_ROLE_CANCEL_SUBSCRIPTION_DELETE_MUTATION_CTA,
    className: i
  })
}