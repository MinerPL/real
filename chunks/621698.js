"use strict";
n.r(t), n.d(t, {
  MessageReactionsGroupWrapper: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("509043"),
  o = n("430568"),
  u = n("811425"),
  d = n("102873"),
  c = n("738107"),
  f = n("875978"),
  E = n("350134"),
  _ = n("550244"),
  T = n("314934");
let I = l.memo(function(e) {
    let t, n, {
        useChatFontScaling: l,
        hideEmoji: a,
        emoji: u,
        className: I,
        count: m,
        me: N,
        me_burst: p,
        burst_count: S,
        burst_colors: A,
        readOnly: C,
        isLurking: h,
        isGuest: g,
        isPendingMember: M,
        type: O
      } = e,
      R = O === f.ReactionTypes.BURST,
      L = (0, E.isMeReaction)(N, p, O),
      v = (0, d.useEmojiColorPalette)(R && null != A ? A : []),
      P = l ? T : _,
      D = R ? S : m,
      x = (0, c.getMinCounterWidth)(D, E.REACTION_MIN_WIDTH_DIGITS),
      y = {};
    if (R && null != v) {
      var U;
      let {
        accentColor: e,
        backgroundColor: s,
        opacity: l
      } = v, a = null !== (U = (0, r.hex2rgb)(null != s ? s : "", l)) && void 0 !== U ? U : "";
      L && (y.borderColor = s), y.background = a, t = e, n = e
    }
    let j = {
      minWidth: x,
      color: t,
      borderColor: n
    };
    return (0, s.jsxs)("div", {
      className: i(P.reaction, P.reactionInner, I, {
        [P.reactionMe]: L,
        [P.reactionReadOnly]: C && !h && !M && !g
      }),
      style: y,
      children: [(0, s.jsx)(o.default, {
        className: i({
          [P.hideEmoji]: a
        }),
        emojiId: u.id,
        emojiName: u.name,
        size: "reaction",
        animated: R && u.animated
      }), (0, s.jsx)("div", {
        className: P.reactionCount,
        style: j,
        children: D
      })]
    })
  }),
  m = l.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...a
    } = e, [i, r] = l.useState(!1), [o, d] = l.useTransition(), c = l.useCallback(e => {
      e && !i && !o && d(() => {
        r(!0)
      })
    }, [i, o]), _ = (0, u.useIsVisible)(c), T = (!i || o) && !t, m = T ? I : E.Reaction;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        ref: _
      }), n.map(e => {
        var t, n;
        return (0, s.jsx)(m, {
          ...a,
          ...e
        }, (t = e, "".concat(t.type === f.ReactionTypes.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })