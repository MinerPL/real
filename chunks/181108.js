"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  r = n("516555");
let l = [n("315147")],
  s = ["#FFFFFF"],
  u = 1e3 / 60,
  o = {
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

function c(e) {
  let {
    className: t,
    firing: n = !0,
    wind: c = 2
  } = e, [d, p] = a.useState(null), [m, f] = a.useState(null), S = (0, r.useConfettiCannon)(m, d), h = a.useMemo(() => new r.Environment({
    wind: c
  }), [c]), P = a.useCallback(() => {
    let e = null == m ? void 0 : m.getCanvas();
    if (null == e) return;
    let t = e.getBoundingClientRect();
    S.createConfetti({
      ...o,
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
  }, [S, m]);
  return a.useEffect(() => {
    let e = n ? setInterval(P, u) : null;
    return () => clearInterval(e)
  }, [n, P]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.ConfettiCanvas, {
      ref: f,
      className: t,
      environment: h
    }), (0, i.jsx)(r.SpriteCanvas, {
      ref: p,
      colors: s,
      sprites: l,
      spriteWidth: 6,
      spriteHeight: 6
    })]
  })
}