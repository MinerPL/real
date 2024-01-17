"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007"), n("860677");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("731898"),
  c = n("206230"),
  f = n("449918"),
  h = n("271938"),
  C = n("191542"),
  p = n("451166"),
  m = n("28007"),
  g = n("880731"),
  E = n("943551"),
  S = n("119035"),
  A = n("65626"),
  _ = n("782340"),
  T = n("930752");
let M = a.memo(function(e) {
    let {
      channelId: t,
      width: n
    } = e, l = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), i = (0, o.useStateFromStores)([E.default], () => E.default.getMostRecentMessageCombo(t), [t]), [d, f] = a.useState(!1);
    a.useEffect(() => {
      if (null == i ? void 0 : i.displayed) return;
      f(!1), setImmediate(() => {
        let e = null != i ? (0, S.getComboScore)(i.combo) : 0;
        f(e > 0)
      });
      let e = setTimeout(() => {
        f(!1), null != i && (0, m.clearMessageCombo)(i)
      }, 2e3);
      return () => clearTimeout(e)
    }, [i]);
    let h = (0, r.useSpring)({
      opacity: d ? 1 : 0,
      translateY: d ? "0" : null != i ? "100%" : "200%",
      pointerEvents: "none",
      width: n,
      config: l ? r.config.stiff : r.config.slow
    });
    return (0, s.jsx)(s.Fragment, {
      children: null != i && (0, s.jsx)(r.animated.div, {
        className: T.messageComboScore,
        style: h,
        children: (0, s.jsx)(u.Text, {
          className: T.comboScore,
          variant: "text-sm/bold",
          children: (0, S.getComboScore)(i.combo)
        })
      })
    })
  }),
  I = a.memo(function(e) {
    let {
      value: t,
      multiplier: n
    } = e, {
      color: l,
      square: r,
      flair: o
    } = a.useMemo(() => (0, S.getComboStyles)(n), [n]), d = (0, f.getColor)(l);
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.Text, {
        className: T.comboValue,
        variant: "text-sm/bold",
        children: t
      }), (0, s.jsxs)("div", {
        className: T.comboNameplate,
        style: {
          color: d
        },
        children: [(0, s.jsx)(u.Text, {
          className: T.comboMultiplier,
          style: {
            color: d
          },
          variant: "text-sm/bold",
          children: _.default.Messages.POGGERMODE_COMBO.format({
            multiplier: n
          })
        }), r && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: i(T.comboSquare, T.left),
            style: {
              backgroundColor: d
            }
          }), (0, s.jsx)("div", {
            className: i(T.comboSquare, T.right),
            style: {
              backgroundColor: d
            }
          })]
        }), o && (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("div", {
            className: i(T.confettiIcon, T.left),
            children: (0, s.jsx)(p.default, {
              width: 24,
              height: 24
            })
          }), (0, s.jsx)("div", {
            className: i(T.confettiIcon, T.right),
            children: (0, s.jsx)(p.default, {
              width: 24,
              height: 24
            })
          })]
        }), 1 === n && (0, s.jsx)(u.Text, {
          className: T.tip,
          variant: "text-sm/bold",
          children: _.default.Messages.POGGERMODE_COMBO_TIP
        })]
      })]
    })
  });
var N = a.memo(function(e) {
  let {
    channelId: t
  } = e, n = (0, o.useStateFromStores)([h.default], () => h.default.getId()), l = (0, o.useStateFromStores)([C.default], () => C.default.isTyping(t, n), [t, n]), i = (0, o.useStateFromStores)([g.default], () => g.default.isEnabled()), u = (0, o.useStateFromStores)([E.default], () => E.default.isComboing(n, t), [t, n]), {
    ref: f,
    width: p = 0
  } = (0, d.default)(), m = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [S, _] = a.useState(!1), N = (0, A.default)(t), v = i && u && l;
  a.useEffect(() => {
    v && _(!0);
    let e = setTimeout(() => _(v), 1e3);
    return () => clearTimeout(e)
  }, [v]);
  let L = (0, r.useSpring)({
      opacity: S ? 1 : 0,
      transform: S ? "translateY(0)" : "translateY(100%)",
      pointerEvents: "none",
      config: r.config.stiff,
      immediate: m
    }),
    x = a.useMemo(() => null != N ? N : {
      value: 0,
      multiplier: 1
    }, [N]),
    R = a.useRef(x);
  a.useEffect(() => {
    (x.multiplier > 1 || x.value > 0) && (R.current = x)
  }, [x]);
  let {
    multiplier: y,
    value: D
  } = a.useMemo(() => ({
    value: v ? x.value : R.current.value,
    multiplier: v ? x.multiplier : R.current.multiplier
  }), [v, x, R]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(M, {
      channelId: t,
      width: p
    }), (0, s.jsx)(r.animated.div, {
      ref: f,
      className: T.combo,
      style: L,
      children: (0, s.jsx)(I, {
        value: D,
        multiplier: y
      })
    })]
  })
})