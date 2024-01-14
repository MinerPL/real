"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  r = n.n(l),
  i = n("446674"),
  o = n("77078"),
  u = n("299285"),
  d = n("210721"),
  c = n("65324"),
  f = n("697218"),
  E = n("10514"),
  h = n("552712"),
  _ = n("953109"),
  m = n("124969"),
  g = n("380186"),
  p = n("49111"),
  A = n("646718"),
  T = n("782340"),
  R = n("451862"),
  I = n("173791"),
  N = n("926622"),
  S = i.default.connectStores([h.default, u.default, E.default, f.default], e => {
    let {
      giftCode: t
    } = e, n = h.default.get(t.skuId), {
      subscriptionPlanId: s
    } = t, a = null != s ? (0, g.getOrFetchSubscriptionPlan)(s) : null;
    return {
      sku: n,
      subscriptionPlan: a,
      application: u.default.getApplication(n.applicationId),
      gifter: f.default.getUser(t.userId)
    }
  })(e => {
    let {
      error: t,
      giftCode: n,
      gifter: l,
      sku: i,
      application: u,
      subscriptionPlan: f
    } = e, E = null == l ? T.default.Messages.GIFT_CODE_AUTH_GIFTED : T.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
      username: l.username
    }), h = i.name;
    return null != f && (h = (f.interval === A.SubscriptionIntervalTypes.MONTH ? T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
      skuName: i.name,
      intervalCount: f.intervalCount
    })), (0, s.jsxs)(a.Fragment, {
      children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
        defaultAnimationState: d.AnimationState.LOOP,
        giftStyle: n.giftStyle,
        className: R.seasonalIcon
      }) : (0, s.jsx)(m.Avatar, {
        src: null != l ? l.getAvatarURL(void 0, 100) : null,
        size: o.AvatarSizes.DEPRECATED_SIZE_100,
        className: N.marginBottom20
      }), null != t ? (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(m.SubTitle, {
          children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
        }), (0, s.jsx)(m.Title, {
          children: t
        })]
      }) : (0, s.jsxs)(a.Fragment, {
        children: [(0, s.jsx)(m.SubTitle, {
          children: E
        }), (0, s.jsxs)(m.Title, {
          className: r(N.marginTop8, I.flexCenter),
          children: [i.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(_.default, {
            size: _.default.Sizes.MEDIUM,
            className: R.applicationIcon,
            game: u,
            skuId: i.id
          }), h]
        })]
      })]
    })
  })