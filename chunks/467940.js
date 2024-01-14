"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  u = n("884691"),
  l = n("446674"),
  o = n("77078"),
  r = n("272030"),
  a = n("838446"),
  s = n("158534"),
  d = n("997289"),
  c = n("812204"),
  E = n("685665"),
  f = n("861370"),
  _ = n("230947"),
  T = n("130037"),
  S = n("26989"),
  I = n("800762"),
  N = n("300925"),
  A = n("489836"),
  p = n("421602"),
  g = n("459870"),
  U = n("325882"),
  C = n("625187"),
  D = n("806179"),
  m = n("97508"),
  R = n("49111"),
  O = n("782340"),
  h = (0, s.default)((0, a.default)(function(e) {
    var t;
    let {
      user: n,
      guildId: a,
      channelId: s,
      context: R,
      onSelect: h,
      moderationAlertId: v,
      analyticsLocation: P,
      analyticsLocations: y,
      onCloseContextMenu: M
    } = e, {
      analyticsLocations: G
    } = (0, E.default)(c.default.CONTEXT_MENU), L = (0, d.useAnalyticsContext)(), b = null !== (t = null == y ? void 0 : y[0]) && void 0 !== t ? t : G[0], w = (0, T.useTrackModerationAction)(a, {
      location: b,
      targetUserId: n.id
    }), F = (0, l.useStateFromStores)([I.default], () => {
      var e;
      return null !== (e = I.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
    }, [a, n.id]), k = u.useCallback(() => {
      w(T.ModerationActionType.COPY_ID)
    }, [w]), B = (0, l.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), x = (0, D.default)(n.id, a), V = (0, p.default)(n.id, R), Y = (0, _.default)({
      guildId: a,
      userId: n.id,
      analyticsLocation: null != P ? P : L.location,
      analyticsLocations: [b],
      context: R
    }), H = (0, A.default)(n, b), j = (0, N.default)(n, a, null != s ? s : F, b), K = (0, U.default)(s, v), W = (0, C.default)(n, a), Z = (0, m.default)(n.id, a, !1, b), q = (0, f.default)({
      id: n.id,
      label: O.default.Messages.COPY_ID_USER,
      onSuccess: k
    }), z = (0, g.default)(n, a), X = !!(null == n ? void 0 : n.isNonUserBot());
    return (0, i.jsxs)(o.Menu, {
      navId: "user-context",
      onClose: () => {
        (0, r.closeContextMenu)(), null == M || M()
      },
      "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: h,
      children: [!X && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(o.MenuGroup, {
          children: [x, V]
        }), (0, i.jsxs)(o.MenuGroup, {
          children: [Y, H]
        }), B && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.MenuGroup, {
            children: j
          }), (0, i.jsxs)(o.MenuGroup, {
            children: [Z, z]
          })]
        }), null != v ? K : null, null != W ? (0, i.jsx)(o.MenuGroup, {
          children: W
        }) : null]
      }), (0, i.jsx)(o.MenuGroup, {
        children: q
      })]
    })
  }, {
    object: R.AnalyticsObjects.CONTEXT_MENU
  }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])