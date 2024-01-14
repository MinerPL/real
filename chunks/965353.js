"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("77078"),
  o = n("945330"),
  u = n("745049"),
  d = n("782340"),
  c = n("475267");

function f(e) {
  let {
    onClose: t,
    selectedTab: n,
    onTabSelected: r,
    userCount: f,
    hasBanner: h,
    isHub: E = !1
  } = e, C = l.useRef(null);
  l.useEffect(() => {
    var e, t, n;
    return null === (n = C.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
  }, []);
  let p = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
      userCount: f
    }),
    v = [(0, i.jsx)(a.TabBar.Item, {
      className: c.tabBarItem,
      id: u.EventDetailSections.EVENT_INFO,
      children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
    }, "event-details")];
  return !E && v.push((0, i.jsx)(a.TabBar.Item, {
    className: c.tabBarItem,
    id: u.EventDetailSections.RSVP_LIST,
    children: p
  }, "is-hub")), (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(a.Clickable, {
      ref: C,
      onClick: t,
      className: c.closeButton,
      "aria-label": d.default.Messages.CLOSE,
      children: (0, i.jsx)(o.default, {
        className: s(c.closeIcon, h && c.closeIconBanner)
      })
    }), (0, i.jsx)(a.TabBar, {
      className: c.tabBar,
      "aria-label": d.default.Messages.OPTIONS,
      selectedItem: n,
      type: "top",
      onItemSelect: r,
      children: v
    })]
  })
}