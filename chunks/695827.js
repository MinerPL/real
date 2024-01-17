"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("79112"),
  a = n("216422"),
  i = n("489622"),
  r = n("909469"),
  o = n("959905"),
  u = n("485138"),
  d = n("49111"),
  c = n("994428"),
  f = n("782340"),
  E = n("185401"),
  _ = e => {
    let {
      notice: t,
      noticeType: n,
      dismissCurrentNotice: _
    } = e, T = (null == t ? void 0 : t.metadata.premiumSubscription) != null, I = (0, o.useLocalizedPromoQuery)();
    if ((0, u.useTrackLocalizedPricingPromoImpression)(d.AnalyticsSections.NOTIFICATION_BAR, null == I ? void 0 : I.countryCode), null == I) return null;
    let m = I.countryCode,
      N = I.currency,
      p = I.paymentSourceTypes.length > 0;
    return (0, s.jsxs)(i.default, {
      color: T ? i.NoticeColors.BRAND : i.NoticeColors.PREMIUM_TIER_2,
      children: [(0, s.jsx)(i.NoticeCloseButton, {
        onClick: () => _(c.ContentDismissActionType.UNKNOWN),
        noticeType: n
      }), !T && (0, s.jsx)(a.default, {
        className: E.premiumIcon
      }), (0, r.getLocalizedPricingNotice)(m, N, p, T), (0, s.jsx)(i.PrimaryCTANoticeButton, {
        onClick: () => {
          _(c.ContentDismissActionType.UNKNOWN), l.default.open(d.UserSettingsSections.PREMIUM)
        },
        noticeType: n,
        children: f.default.Messages.LEARN_MORE
      })]
    })
  }