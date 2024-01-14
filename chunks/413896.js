"use strict";
l.r(t), l.d(t, {
  default: function() {
    return D
  }
}), l("222007");
var s = l("37983"),
  n = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("907002"),
  o = l("446674"),
  d = l("77078"),
  u = l("851387"),
  c = l("528502"),
  m = l("731898"),
  f = l("206230"),
  g = l("895026"),
  h = l("38654"),
  x = l("393414"),
  p = l("305961"),
  N = l("313609"),
  E = l("315102"),
  I = l("284679"),
  v = l("103603"),
  O = l("921031"),
  j = l("863636"),
  R = l("471706"),
  b = l("798796"),
  C = l("686692"),
  S = l("547840"),
  T = l("49111"),
  _ = l("782340"),
  M = l("240805");
async function B(e) {
  let t = await new Promise((t, l) => {
    let s = new Image;
    s.crossOrigin = "Anonymous", s.onerror = e => {
      l(e), s.onerror = s.onload = null, s = null
    }, s.onload = () => {
      t((0, v.getPalette)(s, 2, 10)), s.onerror = s.onload = null, s = null
    }, s.src = e
  });
  return null == t ? void 0 : t.map(e => {
    let [t, l, s] = e;
    return (0, I.rgbToHex)(t, l, s)
  })
}

function D(e) {
  let {
    guildId: t
  } = e, l = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
    ref: a,
    width: v,
    height: D
  } = (0, m.default)(), [A, k] = n.useState(), P = (0, o.useStateFromStoresArray)([j.default], () => j.default.getOnboardingPromptsForOnboarding(t)), L = (0, o.useStateFromStores)([j.default], () => j.default.getEnabled(t)), y = n.useCallback((e, l, s) => {
    O.default.selectOption(t, e, l, s)
  }, [t]), G = n.useCallback(() => {
    O.default.completeOnboarding(t, P)
  }, [t, P]), F = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(t)), U = n.useMemo(() => null == F ? null : E.default.getGuildSplashURL({
    id: F.id,
    splash: F.splash
  }), [F]), w = (0, o.useStateFromStores)([R.default], () => R.default.getCurrentOnboardingStep(t)), [q, H] = n.useState(null != U ? null : "cover");
  null != U && null == A && B(U).then(e => {
    k(e[0])
  });
  let z = n.useCallback(e => {
      H(w), O.default.setUserOnboardingStep(t, e)
    }, [t, w]),
    V = (0, o.useStateFromStores)([h.default], () => h.default.isFullServerPreview(t)),
    Q = (0, o.useStateFromStores)([R.default], () => R.default.getOnboardingStatus(t)),
    Y = null != P && P.length > 0,
    K = n.useCallback(() => {
      (0, R.isOnboarding)(Q) && L && Y ? z(0) : G()
    }, [Q, L, Y, z, G]);
  n.useEffect(() => {
    if (!R.default.shouldShowOnboarding(t)) return u.default.escapeToDefaultChannel(t);
    (0, g.fetchMemberCounts)(t)
  }, [t]);
  let W = (0, i.useTransition)(w, {
      config: i.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      },
      immediate: l || "cover" !== q && null !== q
    }),
    X = R.default.shouldShowOnboarding(t),
    J = null == F;
  if (n.useEffect(() => {
      if (!X || J) {
        let e = setTimeout(() => {
          (0, x.transitionTo)(T.Routes.CHANNEL(t))
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [X, J, t]), !R.default.shouldShowOnboarding(t) || null == F) return null;
  let Z = () => {
    switch (w) {
      case "cover":
        return (0, s.jsx)(b.default, {
          guild: F,
          onboardingStatus: R.GuildOnboardingStatus.READY,
          onStart: K,
          disableTracking: V
        });
      case "rules":
        return (0, s.jsx)(S.default, {
          setCurrentStep: z,
          previousPromptIndex: P.length - 1,
          guild: F,
          prompts: P,
          completeOnboarding: G,
          disableTracking: V
        });
      case null:
        return null;
      default:
        return (0, s.jsx)(C.default, {
          guild: F,
          prompts: P,
          step: w,
          selectOption: y,
          completeOnboarding: G,
          setCurrentStep: z,
          disableTracking: V
        })
    }
  };
  return (0, s.jsxs)("div", {
    className: M.main,
    ref: a,
    children: [null != U ? (0, s.jsx)(N.default, {
      className: r(M.artwork),
      src: U,
      width: v,
      height: D,
      imageClassName: M.cover
    }) : (0, s.jsx)(c.default, {
      className: M.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), null != A && (0, s.jsx)("div", {
      className: M.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, I.hexOpacityToRgba)(A, .16), " 0%, ").concat((0, I.hexOpacityToRgba)(A, 1), " 100%)")
      }
    }), (0, s.jsx)("div", {
      className: M.gradient
    }), W((e, t, l) => {
      let {
        key: n
      } = l;
      return (0, s.jsx)(i.animated.div, {
        style: e,
        children: Z()
      }, n)
    }), "cover" === w && (0, s.jsx)("div", {
      className: M.bottomCenterContent,
      children: (0, s.jsx)(d.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: _.default.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
          privacyLink: T.MarketingURLs.PRIVACY
        })
      })
    })]
  })
}