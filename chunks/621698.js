"use strict";
n.r(t), n.d(t, {
  MessageReactionsGroupWrapper: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("509043"),
  o = n("430568"),
  u = n("811425"),
  d = n("102873"),
  c = n("738107"),
  f = n("875978"),
  m = n("350134"),
  E = n("550244"),
  _ = n("314934");
let h = s.memo(function(e) {
    let t, n, {
        useChatFontScaling: s,
        hideEmoji: l,
        emoji: u,
        className: h,
        count: p,
        me: I,
        me_burst: T,
        burst_count: g,
        burst_colors: C,
        readOnly: S,
        isLurking: A,
        isGuest: N,
        isPendingMember: M,
        type: v
      } = e,
      x = v === f.ReactionTypes.BURST,
      O = (0, m.isMeReaction)(I, T, v),
      L = (0, d.useEmojiColorPalette)(x && null != C ? C : []),
      R = s ? _ : E,
      y = x ? g : p,
      P = (0, c.getMinCounterWidth)(y, m.REACTION_MIN_WIDTH_DIGITS),
      D = {};
    if (x && null != L) {
      var j;
      let {
        accentColor: e,
        backgroundColor: a,
        opacity: s
      } = L, l = null !== (j = (0, r.hex2rgb)(null != a ? a : "", s)) && void 0 !== j ? j : "";
      O && (D.borderColor = a), D.background = l, t = e, n = e
    }
    let U = {
      minWidth: P,
      color: t,
      borderColor: n
    };
    return (0, a.jsxs)("div", {
      className: i(R.reaction, R.reactionInner, h, {
        [R.reactionMe]: O,
        [R.reactionReadOnly]: S && !A && !M && !N
      }),
      style: D,
      children: [(0, a.jsx)(o.default, {
        className: i({
          [R.hideEmoji]: l
        }),
        emojiId: u.id,
        emojiName: u.name,
        size: "reaction",
        animated: x && u.animated
      }), (0, a.jsx)("div", {
        className: R.reactionCount,
        style: U,
        children: y
      })]
    })
  }),
  p = s.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...l
    } = e, [i, r] = s.useState(!1), [o, d] = s.useTransition(), c = s.useCallback(e => {
      e && !i && !o && d(() => {
        r(!0)
      })
    }, [i, o]), E = (0, u.useIsVisible)(c), _ = (!i || o) && !t, p = _ ? h : m.Reaction;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        ref: E
      }), n.map(e => {
        var t, n;
        return (0, a.jsx)(p, {
          ...l,
          ...e
        }, (t = e, "".concat(t.type === f.ReactionTypes.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })