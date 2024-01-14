"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var i = l("37983");
l("884691");
var a = l("77078"),
  n = l("599994"),
  s = l("967473"),
  r = l("49111"),
  c = l("782340"),
  o = l("92118");

function d(e) {
  let {
    applications: t,
    className: l,
    listingClassName: s,
    title: d,
    showViewAll: p,
    onViewOne: m,
    onViewAll: _
  } = e;
  return (0, i.jsxs)("div", {
    className: l,
    children: [null != d ? (0, i.jsxs)("div", {
      className: o.header,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: d
      }), p ? (0, i.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.LINK,
        onClick: _,
        children: c.default.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
      }) : null]
    }) : null, (0, i.jsx)("ul", {
      className: o.list,
      children: t.map(e => (0, i.jsx)(n.default, {
        href: r.Routes.APPLICATION_DIRECTORY_PROFILE(e.id),
        children: (0, i.jsx)(u, {
          className: s,
          application: e,
          onClick: t => {
            let {
              mutualGuilds: l
            } = t;
            return m({
              application: e,
              mutualGuilds: l
            })
          }
        })
      }, e.id))
    })]
  })
}

function u(e) {
  return (0, i.jsx)(s.default, {
    ...e
  })
}