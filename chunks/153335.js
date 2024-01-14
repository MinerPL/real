"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("627445"),
  a = n.n(l),
  s = n("446674"),
  u = n("913144"),
  o = n("775433"),
  d = n("685665"),
  c = n("598981"),
  f = n("846286"),
  p = n("697218"),
  h = n("10514"),
  S = n("650509"),
  m = n("90592"),
  _ = n("333955"),
  I = n("599733"),
  E = n("49111"),
  C = n("782340"),
  T = e => {
    var t;
    let n, {
        listing: l,
        guildId: T,
        groupListingId: g,
        analyticsLocation: A,
        showBenefitsFirst: N,
        onComplete: v,
        forcesTransitionToGuild: b
      } = e,
      L = null == l ? void 0 : l.subscription_plans[0],
      P = null == l ? void 0 : l.application_id,
      O = null == L ? void 0 : L.id,
      F = (null == l ? void 0 : l.published) === !0,
      x = null == L ? void 0 : L.sku_id,
      R = (0, s.useStateFromStores)([h.default], () => null != O ? h.default.get(O) : null),
      y = (0, S.useApplication)(P),
      k = (0, S.useSubscriptionListingsForGroup)(g, {
        includeSoftDeleted: !0
      }),
      G = k.map(e => e.subscription_plans[0].id),
      {
        analyticsLocations: H
      } = (0, d.default)(),
      {
        activeSubscription: M,
        activeEntitlement: w
      } = (0, S.useActiveSubscriptionListingForApplication)(P, T),
      D = (0, S.useEligibleApplicationSubscriptionGuilds)(P, T),
      U = (0, c.default)(),
      j = null != l && (0, m.isApplicationUserSubscription)(l.sku_flags),
      B = null != w && w.userId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
      V = null == w || B,
      K = null == w || G.length > 1,
      W = null != T || D.length > 0,
      z = j && B,
      Z = null != R && null != y && V && K && (W || j) && !z;
    V ? W ? z && null != R && (n = C.default.Messages.APPLICATION_USER_SUBSCRIPTION_ALREADY_SUBSCRIBED.format({
      tierName: R.name
    })) : n = C.default.Messages.APPLICATION_SUBSCRIPTION_NO_GUILD_AVAILABLE : n = C.default.Messages.APPLICATION_SUBSCRIPTIONS_CANNOT_MANAGE_SUBSCRIPTION, r.useEffect(() => {
      F && null != x && U && u.default.wait(() => {
        (0, o.fetchSubscriptionPlansForSKU)(x)
      })
    }, [F, x, U]);
    let Q = r.useCallback(() => {
      a(null != l, "No subscription listing"), a(null != y, "No application"), a(null != L, "No subscription plan"), a(F, "Cannot purchase this unpublished plan");
      let e = () => {
        (0, f.openApplicationSubscriptionPaymentModal)({
          activeSubscription: M,
          analyticsSubscriptionType: E.SubscriptionTypes.APPLICATION,
          analyticsLocations: H,
          analyticsLocation: A,
          renderHeader: (e, t, n) => (0, i.jsx)(_.PurchaseHeader, {
            step: n,
            onClose: () => t(!1)
          }),
          initialPlanId: L.id,
          skuId: L.sku_id,
          guildId: T,
          eligibleApplicationSubscriptionGuilds: D,
          planGroup: G,
          listing: l,
          application: y,
          showBenefitsFirst: N,
          onComplete: v,
          forcesTransitionToGuild: b
        })
      };
      !W && j ? (0, I.confirmNoSharedServerSubscribeWarningModal)({
        application: y,
        onConfirm: e,
        onCancel: () => {}
      }) : e()
    }, [F, l, L, G, y, T, W, j, H, A, M, N, D, v, b]);
    return {
      openModal: Q,
      canOpenModal: Z,
      cannotOpenReason: n
    }
  }