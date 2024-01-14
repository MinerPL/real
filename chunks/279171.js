"use strict";
a.r(t), a.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return I
  },
  default: function() {
    return C
  }
});
var n = a("37983");
a("884691");
var l = a("414456"),
  s = a.n(l),
  r = a("627445"),
  i = a.n(r),
  o = a("423487"),
  u = a("701909"),
  d = a("35188"),
  c = a("391533"),
  _ = a("296253"),
  E = a("49111"),
  f = a("782340"),
  m = a("712109");

function I() {
  let e = (0, _.default)(),
    {
      enabled: t
    } = d.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: a
    } = c.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && a)
}
var C = e => {
  var t, a;
  let {
    fromBoostCancelModal: l,
    className: r
  } = e, d = (0, _.default)(), c = I();
  if (!c) return null;
  return i(null != d, "Subscription billing country should not be null"), (0, n.jsxs)("div", {
    className: s(m.noticeRoot, r),
    children: [(0, n.jsx)("div", {
      className: m.iconContainer,
      children: (0, n.jsx)(o.default, {
        className: m.infoIcon
      })
    }), (0, n.jsx)("div", {
      className: m.text,
      children: (t = d, a = l, "PL" === t ? a ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? a ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : a ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: u.default.getArticleURL(E.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}