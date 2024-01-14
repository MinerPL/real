"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var n, l, a = s("37983"),
  i = s("884691"),
  r = s("416037"),
  o = s.n(r),
  c = s("701800"),
  u = s("141631"),
  d = s("146230"),
  p = s("843455"),
  h = s("836101");
let N = p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
(n = class extends i.PureComponent {
  render() {
    let e = c.default.isActiveCreator(this.context.router),
      {
        isOpen: t,
        dropdownLinks: s,
        TrackClick: n,
        avoidRouter: l,
        id: i,
        "aria-label": r
      } = this.props,
      o = s.map((t, s) => t.divider ? (0, a.jsx)("hr", {
        className: h.divider
      }, "divider-".concat(s)) : t.external ? (0, a.jsx)("li", {
        className: h.moreListItemInactive,
        children: (0, a.jsx)(n, {
          className: h.moreListLink,
          eventName: N,
          data: {
            linkClicked: t.linkClicked
          },
          href: t.route,
          rel: "me",
          children: (0, a.jsx)("span", {
            className: h.moreListLinkCopy,
            children: t.title
          })
        })
      }, t.route) : (0, a.jsx)("li", {
        className: (0, u.getClass)(h, "moreListItem", e(t.route) ? "Active" : "Inactive"),
        children: (0, a.jsx)(d.default, {
          avoidRouter: l,
          className: h.moreListLink,
          to: t.route,
          from: p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
          role: "menuitem",
          children: (0, a.jsx)(n, {
            tag: "span",
            className: h.moreListLinkCopy,
            eventName: N,
            data: {
              linkClicked: t.linkClicked
            },
            children: t.title
          })
        })
      }, t.route));
    return (0, a.jsx)("ul", {
      id: i,
      className: (0, u.getClass)(h, "moreList", t ? "Open" : "Closed"),
      "aria-label": r,
      children: o
    })
  }
}).contextTypes = {
  router: o.object.isRequired
}, l = n