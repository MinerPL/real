"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("835706"),
  i = s("191814"),
  r = s("781896"),
  o = s("153160"),
  d = s("257869"),
  u = s("837008"),
  c = s("757715"),
  E = s("619389"),
  _ = s("44737"),
  T = s("53264"),
  I = s("130437"),
  S = s("940958"),
  N = s("657650"),
  g = s("441901"),
  f = s("49111"),
  A = s("782340"),
  L = s("794819");

function m(e) {
  let {
    payoutsByPeriod: t,
    team: s
  } = e, l = (0, c.useRoleSubscriptionSettingsDisabled)(), r = l ? null : A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: null != s ? f.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s.id) : null
  });
  return 0 === t.length ? (0, a.jsxs)(n.FormText, {
    type: n.FormText.Types.DESCRIPTION,
    children: [A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", r]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      children: [A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", r]
    }), (0, a.jsx)(i.default, {
      size: 16
    }), (0, a.jsx)(I.default, {
      payoutsByPeriod: t
    })]
  })
}

function C(e) {
  let {
    guildId: t,
    totalPayoutsForPeriod: s
  } = e, n = (0, u.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  });
  return null == s && 0 === n.length ? null : (0, a.jsx)(T.default, {
    totalPayoutsForPeriod: s,
    guildId: t,
    className: L.currentMonthEarningsTable
  })
}
let O = e => {
  var t, s;
  let {
    guildId: d,
    application: u
  } = e, {
    loading: T,
    team: I,
    currentPeriod: O,
    allPeriods: h,
    metrics: R
  } = (0, E.default)(d, u), D = (0, _.useRoleSubscriptionInsightsAccess)(d), M = (0, c.useRoleSubscriptionSettingsDisabled)();
  return T ? (0, a.jsx)(n.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [D && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.default, {
        children: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({
          insightsURL: f.MarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(d)
        })
      }), (0, a.jsx)(i.default, {
        size: 32
      })]
    }), (0, a.jsxs)(n.FormSection, {
      title: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
      className: L.formSection,
      children: [(0, a.jsx)(i.default, {
        size: 8
      }), (0, a.jsxs)("div", {
        className: L.metricsContainer,
        children: [(0, a.jsx)(S.default, {
          label: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, o.formatPrice)(null !== (t = R.revenue) && void 0 !== t ? t : 0, f.CurrencyCodes.USD),
          additionalContent: (0, a.jsx)(S.MetricTrend, {
            value: R.revenuePctChange,
            isPercent: !0
          })
        }), (0, a.jsx)(S.default, {
          label: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
          value: (0, a.jsxs)(a.Fragment, {
            children: [null !== (s = R.subscribers) && void 0 !== s ? s : "-", " ", (0, a.jsx)(r.default, {
              className: L.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, a.jsx)(S.MetricTrend, {
            value: R.subscriberChange
          })
        })]
      }), (0, a.jsx)(C, {
        guildId: d,
        totalPayoutsForPeriod: O
      })]
    }), (0, a.jsx)(n.FormSection, {
      title: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      className: L.formSection,
      children: (0, a.jsx)(m, {
        payoutsByPeriod: h,
        team: I
      })
    }), (0, a.jsx)(n.FormSection, {
      title: A.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: M,
      className: L.formSection,
      children: (0, a.jsx)(N.default, {
        guildId: d,
        application: u
      })
    }), (0, a.jsx)(n.FormSection, {
      title: A.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: L.formSection,
      children: (0, a.jsx)(g.default, {
        guildId: d,
        allPeriods: h
      })
    })]
  })
};

function h(e) {
  return (0, a.jsx)(d.GroupListingsFetchContextProvider, {
    guildId: e.guildId,
    children: (0, a.jsx)(O, {
      ...e
    })
  })
}