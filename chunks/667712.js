"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  o = l("414456"),
  r = l.n(o),
  i = l("907002"),
  s = l("65597"),
  u = l("669491"),
  d = l("819855"),
  c = l("77078"),
  m = l("430568"),
  f = l("841098"),
  h = l("385976"),
  v = l("795228"),
  g = l("695284"),
  x = l("956089"),
  p = l("782340"),
  C = l("489319");

function N(e) {
  let {
    guildId: t,
    option: l,
    selected: o,
    onSelect: N,
    hideMemberCount: j,
    canBeNew: _
  } = e, O = (0, d.isThemeDark)((0, f.default)()), [T, M] = n.useState(!1), A = T && !j, I = n.useRef(null), {
    reducedMotion: E
  } = n.useContext(c.AccessibilityPreferencesContext), b = (0, s.default)([h.default], () => {
    var e, t, a, n;
    return (null === (e = l.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (n = null === (t = h.default.getCustomEmojiById(null === (a = l.emoji) || void 0 === a ? void 0 : a.id)) || void 0 === t ? void 0 : t.animated) && void 0 !== n && n
  }), S = (0, v.default)(t, 1e3), D = null == S || null == l.roleIds ? 0 : Math.max(...l.roleIds.map(e => S[e])), L = _ && !o && l.isUnseen, k = (0, i.useSpring)({
    transform: o || E.enabled ? "scale(1)" : "scale(0.7)",
    opacity: o ? 1 : 0,
    config: {
      duration: 150
    }
  }), y = (0, c.useToken)(u.default.colors.BACKGROUND_MODIFIER_ACCENT), R = (0, c.useToken)(u.default.unsafe_rawColors.BRAND_500), w = (0, i.useSpring)({
    from: {
      color: R.spring()
    },
    color: y.spring({
      opacity: O ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), B = (0, i.useTransition)(A, {
    from: {
      transform: E.enabled ? "translateX(0)" : "translateX(8px)",
      opacity: 0
    },
    enter: {
      transform: "translateX(0)",
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 400,
    config: {
      duration: 150
    }
  }), [P, U] = n.useState(!1);
  n.useEffect(() => {
    if (A) return I.current = setTimeout(() => {
      M(!1), I.current = null
    }, 3e3), () => {
      null != I.current && clearTimeout(I.current)
    }
  }, [A]);
  let H = r(C.optionButtonWrapper, {
      [C.selected]: o,
      [C.pressed]: P
    }),
    G = L ? {
      borderColor: w.color
    } : {};
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(i.animated.div, {
      style: G,
      className: H,
      children: (0, a.jsxs)(c.Clickable, {
        className: r(C.optionButton),
        onClick: () => {
          M(!o), N(!o)
        },
        onMouseDown: () => U(!0),
        onMouseUp: () => U(!1),
        children: [null != l.emoji && (null != l.emoji.id || null != l.emoji.name) ? (0, a.jsx)(m.default, {
          animated: l.emoji.animated || b,
          className: C.buttonEmoji,
          emojiId: l.emoji.id,
          emojiName: l.emoji.name
        }) : null, (0, a.jsxs)("div", {
          className: C.buttonText,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: l.title
          }), l.description.length > 0 ? (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: l.description
          }) : null]
        }), (0, a.jsx)(i.animated.div, {
          className: C.checkIcon,
          style: k,
          children: (0, a.jsx)(g.default, {
            width: 10,
            height: 10,
            color: u.default.unsafe_rawColors.WHITE_500.css
          })
        }), B((e, t) => D > 0 && t && (0, a.jsx)(i.animated.div, {
          className: C.memberCount,
          style: e,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: p.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
              memberCount: D
            })
          })
        })), L && (0, a.jsx)(x.TextBadge, {
          color: u.default.unsafe_rawColors.BRAND_260.css,
          text: p.default.Messages.NEW,
          className: C.newBadge
        })]
      })
    })
  })
}