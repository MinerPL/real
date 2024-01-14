"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("516555");
let i = [n("315147")],
  r = ["#FFFFFF"],
  o = 1e3 / 60,
  u = {
    velocity: {
      type: "static-random",
      minValue: {
        x: 0,
        y: 1
      },
      maxValue: {
        x: 3,
        y: 3
      }
    },
    rotation: {
      type: "linear-random",
      minValue: {
        x: 0,
        y: 0,
        z: 0
      },
      maxValue: {
        x: 0,
        y: 0,
        z: 360
      },
      minAddValue: {
        x: 0,
        y: 0,
        z: -5
      },
      maxAddValue: {
        x: 0,
        y: 0,
        z: 5
      }
    },
    size: {
      type: "static-random",
      minValue: 2,
      maxValue: 6
    },
    dragCoefficient: {
      type: "static",
      value: {
        x: .05,
        y: .05
      }
    },
    opacity: {
      type: "static",
      value: .3
    }
  };

function d(e) {
  let {
    className: t,
    firing: n = !0,
    wind: d = 2
  } = e, [c, f] = s.useState(null), [m, E] = s.useState(null), _ = (0, l.useConfettiCannon)(m, c), h = s.useMemo(() => new l.Environment({
    wind: d
  }), [d]), p = s.useCallback(() => {
    let e = null == m ? void 0 : m.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    _.createConfetti({
      ...u,
      position: {
        type: "static-random",
        minValue: {
          x: -t.width / 2,
          y: -6
        },
        maxValue: {
          x: t.width,
          y: -6
        }
      }
    })
  }, [_, m]);
  return s.useEffect(() => {
    let e = n ? setInterval(p, o) : null;
    return () => clearInterval(e)
  }, [n, p]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.ConfettiCanvas, {
      ref: E,
      className: t,
      environment: h
    }), (0, a.jsx)(l.SpriteCanvas, {
      ref: f,
      colors: r,
      sprites: i,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}