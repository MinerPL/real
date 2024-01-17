"use strict";
n.r(t), n.d(t, {
  openGiftCodeAcceptModal: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("697218"),
  i = n("521012"),
  r = n("659500"),
  o = n("719923"),
  u = n("676379"),
  d = n("646718"),
  c = n("49111");

function f(e) {
  let {
    processedCode: t,
    channelContext: f,
    customGiftMessage: E,
    giftInfo: _
  } = e, T = !1, I = null, m = a.default.getCurrentUser(), N = (0, o.isPremiumAtLeast)(null == m ? void 0 : m.premiumType, d.PremiumTypes.TIER_0);
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("669146").then(n.bind(n, "669146"));
    return n => {
      var l, a;
      return (0, s.jsx)(e, {
        code: t,
        channelContext: f,
        customGiftMessage: E,
        emojiName: null == _ ? void 0 : null === (l = _.emoji) || void 0 === l ? void 0 : l.name,
        soundId: null == _ ? void 0 : null === (a = _.sound) || void 0 === a ? void 0 : a.id,
        onComplete: (e, t) => {
          I = e, t && (T = t, e.isSubscription && null == i.default.getPremiumSubscription(!1) && (0, u.setCanPlayWowMoment)(!0))
        },
        ...n
      })
    }
  }, {
    onCloseCallback: () => {
      var e;
      T && null != I && !N && I.isSubscription && (null == I ? void 0 : null === (e = I.subscriptionPlan) || void 0 === e ? void 0 : e.premiumSubscriptionType) === d.PremiumTypes.TIER_2 && r.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED)
    }
  })
}