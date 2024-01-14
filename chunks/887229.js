"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("940958"),
  i = s("153160"),
  r = s("970500"),
  o = s("276253"),
  d = s("49111"),
  u = s("782340"),
  c = s("476462");

function E(e) {
  let {
    children: t,
    revenue: s,
    revenueTrend: E,
    summaryMetricLabel: _,
    summaryMetricValue: T,
    summaryMetricTrend: I,
    summaryMetricTrendIsPercent: S
  } = e;
  return (0, a.jsx)(n.FormSection, {
    title: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
    children: (0, a.jsxs)("div", {
      className: c.paymentInfoGroup,
      children: [(0, a.jsxs)(o.MetricsContainer, {
        children: [(0, a.jsx)(r.default, {
          label: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, i.formatPrice)(null != s ? s : 0, d.CurrencyCodes.USD),
          additionalContent: (0, a.jsx)(l.MetricTrend, {
            value: E,
            isPercent: !0
          })
        }), (0, a.jsx)(r.default, {
          label: _,
          value: T,
          additionalContent: (0, a.jsx)(l.MetricTrend, {
            value: I,
            isPercent: S
          })
        })]
      }), t]
    })
  })
}