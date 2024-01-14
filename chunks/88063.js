"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("907002"),
  i = s("733724"),
  r = s("446674"),
  o = s("77078"),
  d = s("206230"),
  u = s("351825"),
  c = s("454686"),
  E = s("296839"),
  _ = s("151866"),
  T = s("842357"),
  I = s("782340"),
  S = s("975456");

function N(e) {
  let {
    guildId: t,
    triggerType: s
  } = e, N = n.useMemo(() => () => (0, c.createDefaultRule)(t, s), [t, s]), [g] = n.useState(N), [f, A] = n.useState(!1), {
    editingRule: L,
    createNewEditingRule: m
  } = (0, _.useAutomodEditingRuleState)(), {
    getDefaultRuleName: C
  } = E.triggerConfigs[s], O = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), h = !(0, c.isBackendPersistedRule)(L) && (null == L ? void 0 : L.triggerType) === s, [R, D] = n.useState(h ? L : g), M = (0, l.useSpring)({
    opacity: h ? 0 : 1,
    pointerEvents: h ? "none" : "all",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: O
  }), G = (0, l.useSpring)({
    opacity: h ? 1 : 0,
    pointerEvents: h ? "all" : "none",
    config: {
      ...l.config.stiff,
      clamp: !0
    },
    immediate: O,
    onStart: () => {
      D(h ? L : g)
    },
    onRest: () => {
      D(h ? L : g), A(h)
    }
  });
  return null == L || h ? (0, a.jsxs)("div", {
    className: S.mainRuleContainer,
    style: {
      height: h ? "auto" : "60px"
    },
    children: [(0, a.jsx)(l.animated.div, {
      className: S.animatedRuleCardContainer,
      style: G,
      children: (0, a.jsx)(T.default, {
        rule: R,
        persistEdit: f
      })
    }), (0, a.jsx)(l.animated.div, {
      className: S.animatedNewRuleContainer,
      style: M,
      children: (0, a.jsxs)(o.Clickable, {
        className: S.addAnotherRuleCardContainer,
        onClick: () => {
          m(t, s)
        },
        children: [(0, a.jsx)(u.default, {
          width: 20,
          height: 20,
          color: i.default.BLUE_345,
          className: S.plusIcon
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          color: "text-link",
          children: I.default.Messages.GUILD_AUTOMOD_ADD_ADDITIONAL_RULE.format({
            ruleName: C()
          })
        })]
      })
    })]
  }) : null
}