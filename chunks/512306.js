"use strict";
n.r(t), n.d(t, {
  BurstReactionSize: function() {
    return a
  },
  default: function() {
    return A
  }
});
var l, a, r = n("37983"),
  i = n("884691"),
  o = n("414456"),
  s = n.n(o),
  u = n("245749"),
  c = n.n(u),
  d = n("913144"),
  f = n("15935"),
  R = n("569512"),
  m = n("941723"),
  E = n("256346");
(l = a || (a = {}))[l.NORMAL = 16] = "NORMAL", l[l.LARGE = 32] = "LARGE";
let h = async e => {
  var t;
  let {
    effect: n
  } = e, l = await (0, R.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), a = await (0, m.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, l, n.color);
  return a.assets[0].p = n.url, a
};

function A(e) {
  let {
    className: t,
    effect: n,
    onComplete: l,
    emojiSize: a = 16
  } = e, o = i.useRef(null), u = a * m.ANIMATION_TO_EMOJI_RATIO, R = (u + a) / 2;
  return i.useEffect(() => {
    let e;
    if (null != n) return !async function() {
      if (null != o.current) {
        let t = await h({
          effect: n
        });
        (e = c.loadAnimation({
          container: o.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t
        })).addEventListener("complete", () => {
          null == l || l(), e.destroy()
        }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === f.BurstReactionEffectSource.HOVER && d.default.dispatch({
          type: "BURST_REACTION_ANIMATION_ADD",
          channelId: n.channelId,
          messageId: n.messageId,
          emoji: n.emoji,
          animation: e
        })
      }
    }(), () => {
      null != e && e.destroy()
    }
  }, [l, n, a]), (0, r.jsx)("div", {
    className: E.effectsWrapper,
    children: (0, r.jsx)("div", {
      className: s(E.effect, t),
      style: {
        transform: "translateY(".concat(R, "px)"),
        height: u,
        width: u
      },
      ref: o
    })
  })
}