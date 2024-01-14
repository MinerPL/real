"use strict";
n.r(t), n.d(t, {
  EMOJI_BUTTON_SPRING_CONFIG: function() {
    return f
  },
  default: function() {
    return v
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  i = n("414456"),
  a = n.n(i),
  l = n("907002"),
  o = n("77078"),
  c = n("913144"),
  u = n("474293"),
  d = n("958706"),
  p = n("782340"),
  h = n("505436");
let f = {
  tension: 800,
  friction: 24
};
var v = function(e) {
  var t;
  let {
    tabIndex: n,
    className: i,
    renderButtonContents: v,
    active: g,
    onClick: m,
    "aria-controls": x,
    focusProps: D
  } = e, [O, b] = s.useState(!1), [j, E] = s.useState(50), L = O || g, N = (0, u.getClass)(h, "emojiButton", L ? "Hovered" : "Normal");
  let T = (t = j, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    I = s.useCallback(() => {
      if (!L) b(!0), E(Math.floor(77 * Math.random())), c.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
      })
    }, [L, b, E]),
    R = s.useCallback(() => {
      b(!1)
    }, [b]),
    A = s.useCallback(() => {
      c.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
      })
    }, []);
  return (0, r.jsx)(o.Button, {
    look: o.Button.Looks.BLANK,
    size: o.Button.Sizes.NONE,
    tabIndex: n,
    className: a(N, i),
    onMouseEnter: I,
    onMouseOver: I,
    onMouseLeave: R,
    onFocus: A,
    onClick: m,
    "aria-label": p.default.Messages.SELECT_EMOJI,
    "aria-controls": x,
    "aria-expanded": g,
    "aria-haspopup": "dialog",
    focusProps: D,
    children: null != v ? v() : (0, r.jsx)(l.Spring, {
      config: f,
      to: {
        value: L ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, r.jsxs)(l.animated.div, {
          className: h.spriteContainer,
          style: {
            ...T,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, r.jsx)("div", {
            className: a(h.sprite, h.spriteColored, L ? h.active : h.inactive)
          }), (0, r.jsx)("div", {
            className: a(h.sprite, h.spriteGreyscale, L ? h.inactive : h.active)
          })]
        })
      }
    })
  })
}