"use strict";
i.r(t), i.d(t, {
  default: function() {
    return E
  }
}), i("222007");
var a = i("37983"),
  l = i("884691"),
  n = i("516555"),
  o = i("907002"),
  s = i("458960"),
  r = i("430568"),
  u = i("526887"),
  d = i("140708"),
  c = i("983782"),
  p = i("315102"),
  h = i("402671"),
  f = i("172858"),
  T = i("612683");
let m = [];

function E(e) {
  let {
    messageId: t,
    emoji: i,
    startPosition: E,
    targetPosition: g
  } = e, [_, R] = l.useState(0), [I, C] = l.useState(0), [O, v] = l.useState(null), {
    confettiCanvas: A
  } = l.useContext(u.ConfettiCannonContext), N = (0, n.useConfettiCannon)(A, O), S = l.useMemo(() => {
    let e = null == i.id ? h.default.getURL(i.name) : p.default.getEmojiURL({
      id: i.id,
      animated: !1,
      size: 22
    });
    return [{
      src: e,
      colorize: !1
    }]
  }, [i.name, i.id]), P = g.x - g.width / 2 * .5, L = g.y - g.height / 2 * .5, y = (0, o.useSpring)({
    from: {
      y: E.y
    },
    to: {
      y: L
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.exp)
    },
    onChange: e => {
      let {
        y: t
      } = e;
      C(t)
    }
  }), j = (0, o.useSpring)({
    from: {
      x: E.x,
      scale: 1,
      opacity: 1
    },
    to: {
      x: P,
      scale: .5,
      opacity: .4
    },
    config: {
      duration: 450,
      easing: s.default.Easing.in(s.default.Easing.ease)
    },
    onRest: () => {
      (0, d.clearReactionPickerAnimation)(t, i.name, i.id)
    },
    onChange: e => {
      let {
        x: t
      } = e;
      R(t)
    }
  });
  return l.useEffect(() => {
    _ > 0 && I > 0 && N.createConfetti({
      ...f.COMMON_CONFETTI_BASE_CONFIG,
      position: {
        type: "static",
        value: {
          x: _,
          y: I
        }
      }
    })
  }, [N, _, I]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.SpriteCanvas, {
      ref: v,
      sprites: S,
      colors: m,
      spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE
    }), (0, a.jsx)(c.default, {
      children: (0, a.jsx)(o.animated.div, {
        style: {
          ...y
        },
        className: T.emojiContainer,
        children: (0, a.jsx)(o.animated.div, {
          style: {
            ...j,
            opacity: j.opacity
          },
          children: (0, a.jsx)(r.default, {
            className: T.emoji,
            emojiId: i.id,
            emojiName: i.name,
            animated: i.animated,
            size: "jumbo"
          })
        })
      })
    })]
  })
}