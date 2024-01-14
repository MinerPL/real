"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("748820"),
  i = n("446674"),
  r = n("913144"),
  o = n("206230"),
  u = n("716241"),
  d = n("170152"),
  c = n("391591"),
  f = n("397485"),
  h = n("738258"),
  p = n("49111"),
  m = n("182797");

function E(e) {
  let {
    channelId: t,
    guildId: n,
    userId: E,
    containerDimensions: C
  } = e, g = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), [S, _] = l.useState([]), I = S.length < 50;
  l.useEffect(() => {
    function e(e) {
      var a;
      let {
        channelId: l,
        userId: i,
        emoji: r,
        animationType: o,
        animationId: h
      } = e;
      if (null != E && E !== i || d.default.getEnabled() && (0, c.default)(null !== (a = null == r ? void 0 : r.name) && void 0 !== a ? a : "")) return;
      let m = null != r && null != o && null != h;
      if (l === t && !g && I && m) {
        let e = (0, f.getEffectUrl)(r),
          a = null != r.id && !r.animated,
          l = {
            id: (0, s.v4)(),
            animationType: o,
            animationId: h,
            shouldResize: a,
            url: e,
            userId: i
          };
        _(e => [...e, l]), u.default.trackWithMetadata(p.AnalyticEvents.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return r.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      r.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, E, g, I]);
  let T = l.useCallback(e => {
    _(t => {
      let n = [...t],
        a = n.findIndex(t => t.id === e);
      return n.splice(a, 1), n
    })
  }, []);
  return g ? null : (0, a.jsx)("div", {
    className: m.effectsWrapper,
    style: {
      width: C.width
    },
    children: (0, a.jsx)("div", {
      className: m.effects,
      children: S.map(e => (0, a.jsx)(h.default, {
        containerDimensions: C,
        effect: e,
        onComplete: T
      }, e.id))
    })
  })
}