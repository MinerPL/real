"use strict";
n.r(t), n.d(t, {
  handleDoubleClick: function() {
    return A
  },
  default: function() {
    return O
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("394846"),
  r = n("446674"),
  o = n("812204"),
  u = n("685665"),
  d = n("76813"),
  c = n("311197"),
  f = n("92790"),
  E = n("697218"),
  h = n("664336"),
  _ = n("773336"),
  S = n("50885"),
  T = n("836056"),
  p = n("922953"),
  N = n("879035"),
  I = n("49111"),
  m = n("724210"),
  g = n("122693");
async function A() {
  if ((0, _.isMac)() && _.isPlatformEmbedded) {
    var e, t, n;
    let l = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
    "Minimize" === l ? S.default.minimize() : "Maximize" === l && S.default.maximize()
  }
}

function C(e) {
  let {
    children: t,
    className: n,
    channelId: a,
    guildId: s,
    innerClassname: o,
    transparent: u = !1,
    toolbar: _,
    mobileToolbar: S,
    "aria-label": I,
    "aria-labelledby": m,
    scrollable: C,
    role: R,
    hideSearch: M,
    showDivider: O
  } = e, L = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), v = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1;
  return (0, l.jsx)(h.default, {
    className: n,
    innerClassName: o,
    toolbar: function() {
      if (null == _) return null;
      let e = null != a && !M;
      return i.isMobile ? S : (0, l.jsxs)(l.Fragment, {
        children: [_, e ? (0, l.jsx)(f.default, {
          className: g.search
        }, null != s ? s : a) : null, O && (0, l.jsx)(h.default.Divider, {}), (0, l.jsx)(N.default, {}), (0, l.jsx)(d.default, {
          canShowReminder: !0
        }), (0, l.jsx)(c.default, {}), v ? (0, l.jsx)(p.default, {}) : (0, l.jsx)(T.default, {})]
      })
    }(),
    transparent: u,
    onDoubleClick: A,
    "aria-label": I,
    "aria-labelledby": m,
    role: R,
    scrollable: C,
    children: t
  })
}

function R(e) {
  let {
    children: t,
    className: n,
    "aria-label": a,
    "aria-labelledby": s,
    role: i
  } = e;
  return (0, l.jsx)(h.default, {
    className: n,
    onDoubleClick: A,
    "aria-label": a,
    "aria-labelledby": s,
    role: i,
    children: t
  })
}

function M(e) {
  let {
    isAuthenticated: t = !0,
    ...n
  } = e, {
    AnalyticsLocationProvider: a
  } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
    [g.forumOrHome]: null != n.channelType && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === m.StaticChannelRoute.GUILD_HOME
  });
  return (0, l.jsx)(a, {
    children: t ? (0, l.jsx)(C, {
      ...n,
      className: i
    }) : (0, l.jsx)(R, {
      ...n,
      className: i
    })
  })
}
M.Title = h.default.Title, M.Icon = h.default.Icon, M.Divider = h.default.Divider, M.Caret = h.default.Caret;
var O = M