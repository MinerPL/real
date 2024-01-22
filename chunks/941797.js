"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("907002"),
  r = s("891722"),
  i = s("704426"),
  u = s("77078"),
  o = s("558566"),
  d = s("821265");
let c = [-100, 0, 100, 200, 300],
  _ = u.tokens.colors.INTERACTIVE_NORMAL;
var E = e => {
  let {
    cards: t,
    className: s
  } = e, [E, I] = n.useState([0, 1, 2, 3, 4]), [f, T] = (0, l.useSprings)(t.length, (e, t) => ({
    ...t,
    x: c[e]
  }));
  return n.useEffect(() => {
    T(e => {
      let t = E.indexOf(e),
        s = -1 === t ? 300 : c[t],
        a = t <= 0 || t === c.length - 1;
      return {
        x: s - 100,
        opacity: a ? 0 : 1
      }
    })
  }, [T, E]), (0, a.jsx)("div", {
    className: s,
    children: (0, a.jsxs)("div", {
      className: d.cardContainer,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          I(e => [(e[0] - 1 + t.length) % t.length, e[0], e[1], e[2], e[3]])
        },
        className: d.leftArrow,
        children: (0, a.jsx)(r.ArrowSmallLeftIcon, {
          className: d.arrowIcon,
          width: 30,
          color: _
        })
      }), (0, a.jsx)("div", {
        className: d.cardInnerContainer,
        children: f.map((e, s) => {
          let {
            x: n,
            opacity: r
          } = e;
          return (0, a.jsx)(l.animated.div, {
            className: d.card,
            style: {
              opacity: r,
              transform: null == n ? void 0 : n.to(e => "translate3d(".concat(e, "%,0,0)"))
            },
            children: (0, a.jsx)(o.default, {
              ...t[s]
            }, "".concat(t[s].name, "_").concat(s, "_perks_card"))
          }, "".concat(t[s].name, "_").concat(s, "_animated_div"))
        })
      }), (0, a.jsx)(u.Clickable, {
        onClick: () => {
          I(e => [e[1], e[2], e[3], (e[3] + 1) % t.length, (e[3] + 2) % t.length])
        },
        className: d.rightArrow,
        children: (0, a.jsx)(i.ArrowSmallRightIcon, {
          className: d.arrowIcon,
          width: 30,
          color: _
        })
      }), (0, a.jsx)("div", {
        className: d.cardProgressBar,
        children: t.map((e, t) => (0, a.jsx)("div", {
          className: t === E[0] ? d.selectedDot : d.dot
        }, "progress_bar_dot_".concat(t)))
      })]
    })
  })
}