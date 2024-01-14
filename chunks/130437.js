"use strict";
s.r(t), s.d(t, {
  Cell: function() {
    return p
  },
  CurrencyAmountCell: function() {
    return U
  },
  SubscribersCell: function() {
    return y
  },
  default: function() {
    return H
  }
}), s("424973"), s("222007");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("866227"),
  u = s.n(d),
  c = s("446674"),
  E = s("77078"),
  _ = s("717559"),
  T = s("158352"),
  I = s("578706"),
  S = s("381546"),
  N = s("68238"),
  g = s("781896"),
  f = s("772280"),
  A = s("153160"),
  L = s("648825"),
  m = s("434014"),
  C = s("488499"),
  O = s("860598"),
  h = s("445940"),
  R = s("49111"),
  D = s("397056"),
  M = s("782340"),
  G = s("301352");
(n = a || (a = {})).DROPDOWN = "dropdown", n.PERIOD = "period", n.SUBSCRIBERS = "subscribers", n.AMOUNT = "amount", n.STATUS = "status";
let x = (e, t, s, a) => {
    let n = null != a ? u(a).add(15, "days").toISOString() : void 0,
      i = (0, m.formatNextPaymentDate)(n, "MMM D");
    switch (e) {
      case D.PaymentPayoutGroupStatuses.OPEN:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != i ? M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: i
          }) : M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING, (0, l.jsx)(O.default, {
            className: G.statusScheduledIcon
          })]
        });
      case D.PaymentPayoutGroupStatuses.CANCELED:
        return (0, l.jsxs)(l.Fragment, {
          children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(S.default, {
            className: G.statusErrorIcon
          })]
        });
      case D.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED:
        if ((null == s ? void 0 : s.includes(D.PaymentPayoutGroupDeferralReasons.PAYOUT_SEIZED)) === !0) return (0, l.jsxs)(l.Fragment, {
          children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_CANCELLED, (0, l.jsx)(S.default, {
            className: G.statusErrorIcon
          })]
        });
        return (0, l.jsxs)(l.Fragment, {
          children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_DEFERRED, (0, l.jsx)(h.default, {
            className: G.statusDeferredIcon
          })]
        })
    }
    switch (t) {
      case D.PayoutStatuses.MANUAL:
      case D.PayoutStatuses.OPEN:
      case D.PayoutStatuses.PENDING:
      case D.PayoutStatuses.PROCESSING:
      case D.PayoutStatuses.SUBMITTED:
      case D.PayoutStatuses.PENDING_FUNDS:
      case D.PayoutStatuses.CANCELED:
      case D.PayoutStatuses.ERROR:
        return (0, l.jsxs)(l.Fragment, {
          children: [null != i ? M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PENDING_OR_SCHEDULED_WITH_DATE.format({
            payoutDate: i
          }) : M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_SCHEDULED, (0, l.jsx)(O.default, {
            className: G.statusScheduledIcon
          })]
        });
      case D.PayoutStatuses.PAID:
        return (0, l.jsxs)(l.Fragment, {
          children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS_PAID, (0, l.jsx)(I.default, {
            className: G.statusPaidIcon
          })]
        });
      case D.PayoutStatuses.DEFERRED:
      case D.PayoutStatuses.DEFERRED_INTERNAL:
      case D.PayoutStatuses.REJECTED:
      case D.PayoutStatuses.RISK_REVIEW:
        return (0, l.jsxs)(l.Fragment, {
          children: [C.default.getStatusErrorText(t), (0, l.jsx)(S.default, {
            className: G.statusErrorIcon
          })]
        })
    }
    return null
  },
  p = e => {
    let {
      children: t,
      className: s
    } = e;
    return (0, l.jsx)("div", {
      className: o(G.cell, s),
      children: t
    })
  },
  U = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)("div", {
      className: G.cell,
      children: (0, A.formatPrice)(null != t ? t : 0, R.CurrencyCodes.USD)
    })
  },
  v = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)(p, {
      className: G.statusCell,
      children: null != t ? t : "-"
    })
  },
  j = e => {
    let {
      children: t
    } = e;
    return (0, l.jsx)(p, {
      className: G.periodCell,
      children: u(t).utc().format("MMMM YYYY")
    })
  },
  P = e => {
    var t;
    let {
      listingId: s
    } = e, a = (0, c.useStateFromStores)([L.default], () => L.default.getSubscriptionListing(s)), n = null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "[".concat(M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIER_DELETED, "]");
    return (0, l.jsx)(p, {
      children: n
    })
  },
  y = e => {
    let {
      children: t
    } = e;
    return (0, l.jsxs)(p, {
      className: G.subscribersCell,
      children: [null != t ? t : "-", " ", (0, l.jsx)(g.default, {
        className: G.subscribersIcon,
        "aria-hidden": !0
      })]
    })
  },
  b = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT_DISCLAIMER,
      children: e => (0, l.jsx)(N.default, {
        className: G.amountDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_AMOUNT, " ", e]
    })
  },
  B = () => {
    let e = (0, l.jsx)(E.Tooltip, {
      text: M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_NEXT_PAYMENT_DISCLAIMER,
      children: e => (0, l.jsx)(N.default, {
        className: G.statusDisclaimer,
        ...e
      })
    });
    return (0, l.jsxs)(l.Fragment, {
      children: [M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_STATUS, " ", e]
    })
  },
  F = [{
    key: "dropdown",
    cellClassName: G.toggleExpandColumn,
    renderHeader: () => null,
    render(e, t) {
      let {
        expandedRows: s,
        onToggleExpandRow: a
      } = t, n = s.has(e.key);
      return (0, l.jsx)(E.Clickable, {
        className: o(G.cell, G.toggleExpandCell),
        onClick: () => a(e.key),
        children: (0, l.jsx)(f.default, {
          className: o(G.caretIcon, {
            [G.caretDownIcon]: n
          })
        })
      })
    }
  }, {
    key: "period",
    cellClassName: G.periodColumn,
    renderHeader: () => M.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PERIOD,
    render(e, t) {
      let {
        expandedRows: s
      } = t, a = [(0, l.jsx)(j, {
        children: e.periodStartingAt
      }, e.key)], n = s.has(e.key);
      if (n)
        for (let t in e.ppgs) a.push((0, l.jsx)(P, {
          listingId: t
        }, t));
      return a
    }
  }, {
    key: "amount",
    cellClassName: o(G.amountColumn, G.cellAlignRight),
    renderHeader: () => (0, l.jsx)(b, {}),
    render(e, t) {
      let {
        expandedRows: s
      } = t, a = [(0, l.jsx)(U, {
        children: e.amount
      }, e.key)], n = s.has(e.key);
      if (n)
        for (let t in e.ppgs) {
          let s = e.ppgs[t];
          a.push((0, l.jsx)(U, {
            children: null == s ? void 0 : s.amount
          }, t))
        }
      return a
    }
  }, {
    key: "status",
    cellClassName: o(G.statusColumn, G.cellAlignRight),
    renderHeader: () => (0, l.jsx)(B, {}),
    render(e) {
      let {
        ppgStatus: t,
        payoutStatus: s,
        ppgDeferralReasons: a,
        periodEndDate: n
      } = (0, _.getStatusForPeriod)(e);
      return (0, l.jsx)(v, {
        children: x(t, s, a, n)
      })
    }
  }];
var H = e => {
  let {
    payoutsByPeriod: t
  } = e, [s, a] = i.useState(new Set);
  return (0, l.jsx)("div", {
    className: G.tableContainer,
    children: (0, l.jsx)(T.default, {
      columns: F,
      data: t,
      className: G.table,
      rowClassName: G.row,
      headerClassName: G.header,
      cellProps: {
        onToggleExpandRow: e => {
          a(t => {
            let s = new Set(t);
            return s.has(e) ? s.delete(e) : s.add(e), s
          })
        },
        expandedRows: s
      }
    })
  })
}