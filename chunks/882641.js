"use strict";
n.r(t), n.d(t, {
  EMOJI_BUTTON_SPRING_CONFIG: function() {
    return _
  },
  default: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("414456"),
  i = n.n(l),
  a = n("907002"),
  u = n("77078"),
  o = n("913144"),
  c = n("474293"),
  d = n("958706"),
  f = n("782340"),
  m = n("505436");
let _ = {
  tension: 800,
  friction: 24
};
var E = function(e) {
  var t;
  let {
    tabIndex: n,
    className: l,
    renderButtonContents: E,
    active: I,
    onClick: p,
    "aria-controls": N,
    focusProps: S
  } = e, [P, T] = r.useState(!1), [C, A] = r.useState(50), h = P || I, O = (0, c.getClass)(m, "emojiButton", h ? "Hovered" : "Normal");
  let R = (t = C, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    g = r.useCallback(() => {
      if (!h) T(!0), A(Math.floor(77 * Math.random())), o.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
      })
    }, [h, T, A]),
    v = r.useCallback(() => {
      T(!1)
    }, [T]),
    M = r.useCallback(() => {
      o.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
      })
    }, []);
  return (0, s.jsx)(u.Button, {
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    tabIndex: n,
    className: i(O, l),
    onMouseEnter: g,
    onMouseOver: g,
    onMouseLeave: v,
    onFocus: M,
    onClick: p,
    "aria-label": f.default.Messages.SELECT_EMOJI,
    "aria-controls": N,
    "aria-expanded": I,
    "aria-haspopup": "dialog",
    focusProps: S,
    children: null != E ? E() : (0, s.jsx)(a.Spring, {
      config: _,
      to: {
        value: h ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, s.jsxs)(a.animated.div, {
          className: m.spriteContainer,
          style: {
            ...R,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, s.jsx)("div", {
            className: i(m.sprite, m.spriteColored, h ? m.active : m.inactive)
          }), (0, s.jsx)("div", {
            className: i(m.sprite, m.spriteGreyscale, h ? m.inactive : m.active)
          })]
        })
      }
    })
  })
}