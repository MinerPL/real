"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("808653");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("917351"),
  o = n.n(r),
  u = n("907002"),
  d = n("446674"),
  c = n("77078"),
  f = n("206230"),
  E = n("471671"),
  _ = n("491605"),
  h = n("433487"),
  C = n("284679"),
  I = n("448881"),
  T = n("879364"),
  S = n("2973"),
  p = n("588025"),
  m = n("227231"),
  A = n("555226"),
  g = n("228399"),
  N = n("45198"),
  R = n("166604"),
  O = n("782340"),
  L = n("874275");
let v = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  },
  M = [0, .5, 1],
  P = {
    "layers[1].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[2].shapes[0].it[1].c.k": [1, .466666668653, .972549021244],
    "layers[3].shapes[0].it[1].c.k": [1, .466666668653, .972549021244]
  };

function D(e, t, n) {
  for (let a in t) {
    let s = t[a],
      i = o.get(e, a);
    if (null == i) continue;
    let l = i.map((e, t) => s[t] === e ? n[t] : e);
    o.set(e, a, l)
  }
}
let y = new Map;
async function x(e, t) {
  let a = y.get(e);
  if (null != a) return a;
  let s = (await n.el("723469").then(n.t.bind(n, "723469", 19))).default;
  return D(s, v, t), y.set(e, s), s
}
let b = new Map;
async function U(e, t) {
  let a = b.get(e);
  if (null != a) return a;
  let s = (await n.el("479580").then(n.t.bind(n, "479580", 19))).default;
  return D(s, P, t), b.set(e, s), s
}

function G(e) {
  return e + .5 * (255 - e)
}

function j(e) {
  let {
    expansionFactor: t,
    isExpanded: n,
    isExpansionAnimationComplete: s,
    quest: i
  } = e;
  return (0, a.jsx)(u.animated.div, {
    "aria-hidden": n && s,
    className: l(L.content, L.contentCollapsed),
    style: {
      opacity: t.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: (0, a.jsxs)("div", {
      className: L.brandingWrapper,
      children: [(0, a.jsx)(A.default, {
        className: L.partnerBranding,
        quest: i
      }), (0, a.jsx)(c.Heading, {
        color: "always-white",
        variant: "heading-sm/medium",
        className: L.questName,
        children: i.config.messages.questName
      })]
    })
  })
}

function w(e) {
  let {
    expansionFactor: t,
    isExpanded: n,
    isExpansionAnimationComplete: i,
    quest: r
  } = e, o = (0, d.useStateFromStores)([S.default], () => S.default.isEnrolling(r.id), [r]), f = s.useCallback(() => {}, []), E = s.useCallback(() => {
    (0, I.enrollInQuest)(r.id)
  }, [r]);
  return (0, a.jsxs)(u.animated.div, {
    "aria-hidden": !n && i,
    className: l(L.content, L.contentExpanded),
    style: {
      opacity: t.to({
        range: [0, 1],
        output: [0, 1]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: L.questContent,
      children: [(0, a.jsxs)("div", {
        className: L.utils,
        children: [(0, a.jsx)(N.default, {}), (0, a.jsx)(c.Clickable, {
          className: L.submenuWrapper,
          onClick: f,
          children: (0, a.jsx)(h.default, {
            className: L.submenuIcon
          })
        })]
      }), (0, a.jsxs)("div", {
        className: L.details,
        children: [(0, a.jsx)(g.default, {
          className: L.rewardTile,
          quest: r
        }), (0, a.jsx)(c.Heading, {
          className: L.title,
          color: "always-white",
          variant: "heading-md/medium",
          children: r.config.messages.questName
        }), (0, a.jsx)(c.Text, {
          className: L.description,
          color: "always-white",
          variant: "text-sm/normal",
          children: O.default.Messages.QUESTS_ACCEPT_TO_WIN.format({
            questReward: r.config.messages.rewardName
          })
        })]
      }), (0, a.jsx)("div", {
        className: L.ctaWrapper,
        children: (0, a.jsx)(c.Button, {
          className: L.cta,
          color: c.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: E,
          size: c.Button.Sizes.NONE,
          submitting: o,
          children: O.default.Messages.QUESTS_ACCEPT_QUEST
        })
      })]
    }), (0, a.jsx)("div", {
      className: L.heroAnimationWrapper,
      style: {
        color: r.config.colors.primary
      },
      children: (0, a.jsx)("img", {
        src: (0, m.getQuestBarHeroAssetUrl)(r.id),
        className: L.heroAnimation,
        alt: ""
      })
    })]
  })
}
var k = function() {
  let e = (0, T.useIsEligibleForQuests)(R.QuestExperimentLocations.ACTIVITY_PANEL),
    t = (0, d.useStateFromStores)([f.default], () => f.default.useReducedMotion),
    n = (0, d.useStateFromStores)([S.default], () => (0, m.getQuestForTargetedContent)(S.default.quests, p.QuestContent.QUEST_BAR)),
    i = (0, d.useStateFromStores)([E.default], () => E.default.isFocused()),
    r = s.useRef(-1),
    o = s.useRef(!1),
    [c, h] = s.useState(!1),
    [I, A] = s.useState(!1),
    [g, N] = s.useState(!0),
    O = s.useRef(!1),
    v = s.useMemo(() => {
      if (null == n) return null;
      let e = (0, C.hexToRgb)(n.config.colors.primary);
      return [G(e.r) / 255, G(e.g) / 255, G(e.b) / 255]
    }, [n]),
    P = s.useMemo(() => {
      if (null == n) return null;
      let e = (0, C.hexToRgb)(n.config.colors.primary),
        t = {
          r: e.r / 255,
          g: e.g / 255,
          b: e.b / 255
        };
      return M.reduce((e, n) => [...e, n, t.r, t.g, t.b], [])
    }, [n]),
    {
      expansionFactor: D
    } = (0, u.useSpring)({
      from: {
        expansionFactor: 0
      },
      to: {
        expansionFactor: I ? 1 : 0
      },
      config: {
        tension: 300,
        friction: 30,
        clamp: !0
      },
      immediate: t,
      onRest: () => {
        N(!0)
      },
      onStart: () => {
        N(!1)
      }
    }),
    y = s.useCallback(() => {
      window.clearTimeout(r.current), o.current = !0, O.current = !0, A(!0), h(!1)
    }, []),
    b = s.useCallback(() => {
      o.current = !1, r.current = window.setTimeout(() => {
        !o.current && A(!1)
      }, 200)
    }, []),
    k = s.useCallback(() => {
      O.current = !0
    }, []);
  return (s.useEffect(() => {
    if (O.current) return;
    let e = window.setTimeout(() => {
      h(E.default.isFocused())
    }, 500);
    return () => {
      window.clearTimeout(e)
    }
  }, []), e && null != n) ? (0, a.jsxs)("div", {
    className: L.wrapper,
    style: {
      color: n.config.colors.secondary
    },
    children: [(0, a.jsxs)(u.animated.div, {
      onMouseOut: b,
      onMouseOver: y,
      onFocus: y,
      onBlur: b,
      className: l(L.contentWrapper, {
        [L.contentWrapperExpanded]: I
      }),
      style: {
        height: D.to({
          range: [0, 1],
          output: [40, 240]
        })
      },
      children: [(0, a.jsx)(j, {
        expansionFactor: D,
        isExpanded: I,
        isExpansionAnimationComplete: g,
        quest: n
      }), (0, a.jsx)(w, {
        expansionFactor: D,
        isExpanded: I,
        isExpansionAnimationComplete: g,
        quest: n
      })]
    }), null != P && (!I || I && !g) && (0, a.jsx)("div", {
      className: L.lottieAnimationBackgroundWrapper,
      children: (0, a.jsx)(_.default, {
        importData: () => x(n.id, P),
        shouldAnimate: !t && i,
        className: l(L.lottieAnimation, L.lottieAnimationBackground),
        loop: !0
      })
    }), null != v && (0, a.jsx)(_.default, {
      importData: () => U(n.id, v),
      shouldAnimate: c,
      className: l(L.lottieAnimation, L.lottieAnimationForeground, {
        [L.lottieAnimationForegroundHidden]: !c
      }),
      loop: !1,
      onComplete: k,
      autoplay: c
    }), null == P && (0, a.jsx)("div", {
      className: L.backgroundFallback
    })]
  }) : null
}