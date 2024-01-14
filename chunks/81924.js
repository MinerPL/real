"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  }
}), i("222007");
var a = i("37983"),
  l = i("884691"),
  n = i("446674"),
  o = i("913144"),
  s = i("206230"),
  r = i("166257"),
  u = i("845579"),
  d = i("15935"),
  c = i("103475"),
  p = i("512306"),
  h = i("941723"),
  f = i("981937"),
  T = i("205591"),
  m = l.memo(function(e) {
    let {
      channelId: t,
      messageId: i,
      emoji: m,
      useChatFontScaling: E,
      color: g,
      count: _
    } = e, R = (0, n.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, m)), I = E ? T : f, C = l.useMemo(() => (0, h.buildEffect)(m, g, t, {
      key: R,
      messageId: i
    }), [g, R, m, t, i]), [O, v] = l.useState(!1), A = (0, n.useStateFromStores)([s.default], () => s.default.useReducedMotion), N = u.AnimateEmoji.useSetting(), S = l.useCallback(() => {
      o.default.dispatch({
        type: "BURST_REACTION_EFFECT_CLEAR",
        channelId: t,
        messageId: i,
        emoji: m
      })
    }, [m, t, i]);
    return (l.useEffect(() => {
      let e = () => {
        if (O) return;
        let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(m.name)),
          a = e % 10;
        (a += _ > 4 ? 4 : _ - 1) > 7 && (v(!0), (0, r.playBurstReaction)({
          channelId: t,
          messageId: i,
          emoji: m,
          key: d.BurstReactionEffectSource.RANDOM
        }))
      };
      if (O || A && !N || !N) return;
      e();
      let a = setInterval(e, 5e3);
      return () => {
        clearInterval(a)
      }
    }, [N, t, _, m, m.name, O, i, A]), null == R) ? null : (0, a.jsx)(p.default, {
      className: I.effect,
      effect: C,
      onComplete: S
    })
  })