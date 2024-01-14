"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("808388"),
  u = n("782340"),
  d = n("635845");

function c(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i(d.container, {
      [d.containerHide]: n
    }),
    children: [(0, a.jsx)("div", {
      className: d.notice,
      children: (0, a.jsx)(r.Text, {
        className: d.label,
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      })
    }), (0, a.jsx)("div", {
      className: d.noticeArrow
    })]
  })
}

function f(e) {
  let [t, n] = l.useState(), [s, i] = l.useState(), [r, d] = l.useState(!1), [f, h] = l.useState(!1), {
    enabled: p
  } = (0, o.useRoleSubscriptionMaxTiersExperiment)(e);
  l.useEffect(() => {
    p && null != t && null != s ? d(t < s) : d(!1)
  }, [p, t, s]);
  let m = l.useMemo(() => r ? (0, a.jsx)(c, {
    text: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_LISTINGS_SCROLLABLE_NOTICE,
    hasScrolled: f
  }) : null, [r, f]);
  return {
    horizontalScrollNotice: m,
    handleScroll: () => h(!0),
    handleSetScrollerRef: e => {
      var t;
      return i(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
  }
}