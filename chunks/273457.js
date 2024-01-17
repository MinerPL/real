"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007"), n("506083");
var a = n("37983"),
  s = n("884691"),
  i = n("446674"),
  l = n("970728"),
  r = n("393414"),
  o = n("305961"),
  u = n("337543"),
  d = n("554054"),
  c = n("831588"),
  f = n("927475"),
  E = n("49111"),
  _ = n("289382"),
  h = n("694907"),
  C = e => {
    let {
      guildId: t,
      inviteCode: n
    } = e, [C, I] = s.useState(_.WaveStates.INITIAL), [T, S] = s.useState(null != n);
    s.useEffect(() => {
      null != n && l.default.resolveInvite(n, "Hub").finally(() => S(!1))
    }, [n]);
    let m = (0, i.useStateFromStores)([u.default], () => null != n ? u.default.getInvite(n) : null),
      p = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(t));
    s.useEffect(() => {
      null != p && (0, r.transitionTo)(E.Routes.CHANNEL(t))
    }, [p, t]);
    let A = s.useCallback(e => {
        I(t => Math.max(t, e))
      }, []),
      g = (0, c.getArtForPath)();
    return (0, a.jsx)("div", {
      className: h.page,
      children: (0, a.jsxs)(d.default, {
        embedded: !0,
        splash: g,
        waveState: C,
        showLogo: !1,
        updateWaveState: A,
        children: [(0, a.jsx)("div", {
          className: h.dragRegion
        }), (0, a.jsx)("div", {
          className: h.contentWrapper,
          children: !T && (0, a.jsx)(f.HubEmailConnectionModalView, {
            invite: m
          })
        })]
      })
    })
  }