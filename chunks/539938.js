"use strict";
n.r(t), n.d(t, {
  handleDoubleClick: function() {
    return C
  },
  default: function() {
    return x
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("394846"),
  r = n("446674"),
  o = n("812204"),
  u = n("685665"),
  d = n("76813"),
  c = n("311197"),
  f = n("92790"),
  h = n("697218"),
  E = n("664336"),
  m = n("773336"),
  p = n("50885"),
  S = n("836056"),
  g = n("922953"),
  N = n("879035"),
  _ = n("49111"),
  T = n("724210"),
  I = n("122693");
async function C() {
  if ((0, m.isMac)() && m.isPlatformEmbedded) {
    var e, t, n;
    let a = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === a ? p.default.minimize() : "Maximize" === a && p.default.maximize()
  }
}

function A(e) {
  let {
    children: t,
    className: n,
    channelId: l,
    guildId: s,
    innerClassname: o,
    transparent: u = !1,
    toolbar: m,
    mobileToolbar: p,
    "aria-label": _,
    "aria-labelledby": T,
    scrollable: A,
    role: M,
    hideSearch: v,
    showDivider: x
  } = e, R = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), L = (null == R ? void 0 : R.isStaff()) || (null == R ? void 0 : R.isStaffPersonal()) || !1;
  return (0, a.jsx)(E.default, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == m) return null;
      let e = null != l && !v;
      return i.isMobile ? p : (0, a.jsxs)(a.Fragment, {
        children: [m, e ? (0, a.jsx)(f.default, {
          className: I.search
        }, null != s ? s : l) : null, x && (0, a.jsx)(E.default.Divider, {}), (0, a.jsx)(N.default, {}), (0, a.jsx)(d.default, {
          canShowReminder: !0
        }), (0, a.jsx)(c.default, {}), L ? (0, a.jsx)(g.default, {}) : (0, a.jsx)(S.default, {})]
      })
    }(),
    transparent: u,
    onDoubleClick: C,
    "aria-label": _,
    "aria-labelledby": T,
    role: M,
    scrollable: A,
    children: t
  })
}

function M(e) {
  let {
    children: t,
    className: n,
    "aria-label": l,
    "aria-labelledby": s,
    role: i
  } = e;
  return (0, a.jsx)(E.default, {
    className: n,
    onDoubleClick: C,
    "aria-label": l,
    "aria-labelledby": s,
    role: i,
    children: t
  })
}

function v(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    AnalyticsLocationProvider: l
  } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
    [I.forumOrHome]: null != n.channelType && _.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === T.StaticChannelRoute.GUILD_HOME
  });
  return (0, a.jsx)(l, {
    children: t ? (0, a.jsx)(A, {
      ...n,
      className: i
    }) : (0, a.jsx)(M, {
      ...n,
      className: i
    })
  })
}
v.Title = E.default.Title, v.Icon = E.default.Icon, v.Divider = E.default.Divider, v.Caret = E.default.Caret;
var x = v