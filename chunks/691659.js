"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var n = s("65597"),
  l = s("77078"),
  i = s("218567"),
  r = s("207353"),
  o = s("898411"),
  d = s("887229"),
  u = s("313584"),
  c = s("657960"),
  E = s("657650"),
  _ = s("441901"),
  T = s("900938"),
  I = s("442379"),
  S = s("559821"),
  N = s("762051"),
  g = s("782340");

function f(e) {
  let {
    listingId: t
  } = e, s = (0, I.useGuildProductListingById)(t);
  return null == s ? null : (0, a.jsx)(r.Cell, {
    children: s.name
  })
}

function A(e) {
  var t, s, r;
  let {
    guildId: I
  } = e, A = (0, S.default)(I), L = (0, i.useCreatorMonetizationSettingsDisabled)(), m = (0, n.default)([T.default], () => T.default.getGuild());
  return A.loading || null == m ? (0, a.jsx)(l.Spinner, {}) : null == A.application ? (0, a.jsx)(c.default, {
    guild: m,
    hideDisableSection: !0
  }) : (0, a.jsxs)(u.default, {
    children: [(0, a.jsx)(d.default, {
      revenue: A.metrics.revenue,
      revenueTrend: A.metrics.revenuePctChange,
      summaryMetricLabel: g.default.Messages.GUILD_PRODUCT_PURCHASES_TITLE,
      summaryMetricValue: null !== (s = A.metrics.paymentsCount) && void 0 !== s ? s : "-",
      summaryMetricTrend: null !== (r = A.metrics.paymentsCountChange) && void 0 !== r ? r : 0,
      summaryMetricTrendIsPercent: !1,
      children: (0, a.jsx)(N.default, {
        guildId: I,
        earningsData: A
      })
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      children: (0, a.jsx)(o.default, {
        ListingIdLabel: f,
        payoutsByPeriod: A.payoutsByPeriod,
        team: null === (t = A.application) || void 0 === t ? void 0 : t.team
      })
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: L,
      children: (0, a.jsx)(E.default, {
        guildId: I,
        application: A.application
      })
    }), (0, a.jsx)(l.FormSection, {
      title: g.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      children: (0, a.jsx)(_.default, {
        guildId: I,
        allPeriods: A.payoutsByPeriod
      })
    })]
  })
}