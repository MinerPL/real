"use strict";
s.r(e), s.d(e, {
  default: function() {
    return o
  }
}), s("222007");
var i = s("37983"),
  l = s("884691"),
  a = s("516555"),
  n = s("526887"),
  r = s("172858"),
  o = function(t) {
    let {
      confettiTarget: e,
      colors: s,
      emojiURL: o
    } = t, [u, d] = l.useState(null), {
      confettiCanvas: c
    } = l.useContext(n.ConfettiCannonContext), f = (0, a.useConfettiCannon)(c, u), p = l.useMemo(() => [{
      src: o,
      colorize: !1
    }], [o]);
    return l.useEffect(() => {
      let t = [, , , , ].fill(0);
      return null != e && (t = t.map((t, s) => setTimeout(() => {
        var t;
        f.createMultipleConfetti((t = e.getBoundingClientRect(), {
          ...r.COMMON_CONFETTI_BASE_CONFIG,
          position: {
            type: "static-random",
            minValue: {
              x: t.left + 100,
              y: t.top + 75
            },
            maxValue: {
              x: t.left + 350,
              y: t.top + 150
            }
          },
          velocity: {
            type: "static-random",
            minValue: {
              x: -40,
              y: -40
            },
            maxValue: {
              x: 40,
              y: -70
            }
          },
          size: {
            type: "static-random",
            minValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            maxValue: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
          },
          dragCoefficient: {
            type: "static",
            value: .001
          }
        }), 50)
      }, 60 * s))), () => {
        for (let e of t) clearTimeout(e)
      }
    }, [f, e]), (0, i.jsx)(a.SpriteCanvas, {
      ref: d,
      sprites: null != p ? p : r.COMMON_CONFETTI_SPRITES,
      colors: null != s ? s : r.COMMON_CONFETTI_COLORS,
      spriteWidth: r.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: r.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })
  }