"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  l = r("316693"),
  o = r("446674"),
  s = r("77078"),
  c = r("679653"),
  d = r("42203"),
  u = r("305961"),
  h = r("957255"),
  p = r("18494"),
  f = r("162771"),
  m = r("36694"),
  g = r("945330"),
  y = r("465305"),
  b = r("606762"),
  x = r("96896"),
  k = r("694735");

function v(e) {
  let {
    title: t,
    can: r
  } = e, n = r ? m.default : g.default, l = (0, a.jsx)("div", {
    className: i(x.iconOuter, r ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(n, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [l, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function C() {
  let e = (0, o.useStateFromStores)([p.default], () => p.default.getChannelId()),
    t = (0, o.useStateFromStores)([f.default], () => f.default.getGuildId()),
    r = (0, o.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    n = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(t)),
    m = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(r)),
    g = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(n)),
    C = (0, c.default)(r, !0),
    S = null != r ? (0, b.getChannelPermissionSpecMap)(r, !1, !0) : null,
    j = null != n ? y.default.getGuildPermissionSpecMap(n) : null,
    T = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = l.default.has(m, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    }),
    w = Object.values(null != j ? j : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = l.default.has(g, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    });
  return (0, a.jsx)("div", {
    className: i(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != C ? "Permissions in ".concat(C) : "No channel selected"
        }), T]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != n ? "Permissions in ".concat(n.name) : "No guild selected"
        }), w]
      })]
    })
  })
}