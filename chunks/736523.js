"use strict";
s.r(t), s.d(t, {
  default: function() {
    return G
  }
}), s("808653"), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("917351"),
  i = s("77078"),
  r = s("272030"),
  o = s("740822"),
  d = s("298878"),
  u = s("663745"),
  c = s("454686"),
  E = s("353575"),
  _ = s("296839"),
  T = s("151866"),
  I = s("183866"),
  S = s("316841"),
  N = s("788112"),
  g = s("143460"),
  f = s("782340"),
  A = s("69754");

function L(e) {
  let {
    rule: t,
    triggerType: s
  } = e, l = n.useMemo(() => null == t ? (0, _.getAvailableActionTypes)(s).map(e => (0, a.jsx)(S.default, {
    actionType: e,
    triggerType: s
  }, e)) : (0, _.getAvailableActionTypes)(s).reduce((e, n) => {
    var l;
    let i = t.actions.find(e => {
      let {
        type: t
      } = e;
      return n === t
    });
    return null == i ? e : (e.push((0, a.jsx)(S.default, {
      actionType: n,
      action: i,
      triggerType: null !== (l = null == t ? void 0 : t.triggerType) && void 0 !== l ? l : s
    }, n)), e)
  }, []), [t, s]);
  return 0 === l.length ? null : (0, a.jsx)("div", {
    className: A.actionRuleListContainer,
    children: l
  })
}
let m = (e, t) => () => t({
    ...e,
    enabled: !e.enabled
  }),
  C = e => {
    e.stopPropagation(), e.preventDefault()
  },
  O = e => {
    let {
      className: t,
      children: s,
      ...n
    } = e;
    return (0, a.jsx)(i.Clickable, {
      className: t,
      onClick: C,
      onMouseDown: C,
      onMouseUp: C,
      ...n,
      children: s
    })
  };

function h(e) {
  var t;
  let {
    rule: s,
    onChangeRule: n,
    onContextMenu: l
  } = e, r = m(s, n), o = e => {
    C(e), l(e)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.ruleTextContainer,
      children: (0, a.jsx)(N.default, {
        rule: s,
        onChangeRule: n
      })
    }), (0, a.jsxs)(O, {
      className: A.actionContainer,
      children: [(0, a.jsx)(i.Switch, {
        className: A.toggle,
        onChange: r,
        checked: null !== (t = null == s ? void 0 : s.enabled) && void 0 !== t && t
      }), (0, a.jsx)(i.Tooltip, {
        text: f.default.Messages.MORE,
        position: "top",
        "aria-label": f.default.Messages.MORE_OPTIONS,
        children: e => (0, a.jsx)(i.Clickable, {
          ...e,
          onClick: o,
          className: A.menuIconButton,
          children: (0, a.jsx)(u.default, {
            width: 24,
            height: 24,
            className: A.menuIcon
          })
        })
      })]
    })]
  })
}

function R(e) {
  return (0, _.checkTriggerTypeForFlag)(e, _.AutomodTriggerConfigFlags.ALPHA) ? (0, a.jsx)(o.default, {
    className: A.alphaBetaTag
  }) : (0, _.checkTriggerTypeForFlag)(e, _.AutomodTriggerConfigFlags.BETA) ? (0, a.jsx)(d.default, {
    className: A.alphaBetaTag
  }) : null
}

function D(e) {
  let {
    rule: t,
    isDefaultRule: s,
    onContextMenu: r
  } = e, o = (0, I.getRuleInfo)(t.triggerType, t), {
    isLoading: d,
    saveRule: _
  } = (0, T.useAutomodEditingRuleActions)(), {
    updateRule: S
  } = (0, E.useAutomodRulesList)(t.guildId), [N, g] = n.useState(t.enabled), m = (0, l.throttle)(async (e, s) => {
    if (s.preventDefault(), s.stopPropagation(), !d) {
      let e = {
        ...t,
        enabled: !N
      };
      g(!N);
      let s = await _(e, []);
      if (null != s) S(s), g(s.enabled)
    }
  }, 300), h = e => {
    C(e), r(e)
  };
  if (null == o) return null;
  let {
    headerText: D,
    headerSubtext: M,
    descriptionText: G,
    icon: x
  } = o, p = !(0, c.isBackendPersistedRule)(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.ruleIconContainer,
      children: (0, a.jsx)(x, {
        width: 24,
        height: 24,
        className: A.ruleIcon
      })
    }), (0, a.jsxs)("div", {
      className: A.ruleTextContainer,
      children: [(0, a.jsxs)(i.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        className: A.ruleTextHeaderContainer,
        children: [(0, a.jsxs)("div", {
          className: A.ruleTextHeader,
          children: [D, R(t.triggerType)]
        }), (0, a.jsx)(i.Text, {
          className: A.ruleSubtextHeader,
          variant: "text-sm/normal",
          children: M
        })]
      }), p && (0, a.jsx)(i.Text, {
        className: A.ruleTextDescription,
        variant: "text-sm/normal",
        children: G
      }), (0, a.jsx)(L, {
        rule: t,
        triggerType: t.triggerType
      })]
    }), (0, a.jsxs)(O, {
      className: A.actionContainer,
      children: [(0, a.jsx)(i.Switch, {
        className: A.toggle,
        onChange: m,
        checked: null != N && N
      }), !s && (0, a.jsx)(i.Tooltip, {
        text: f.default.Messages.MORE,
        position: "top",
        "aria-label": f.default.Messages.MORE_OPTIONS,
        children: e => (0, a.jsx)(i.Clickable, {
          ...e,
          onClick: h,
          className: A.menuIconButton,
          children: (0, a.jsx)(u.default, {
            width: 24,
            height: 24,
            className: A.menuIcon
          })
        })
      })]
    })]
  })
}

function M(e) {
  let {
    triggerType: t,
    onSetupRule: s
  } = e, l = n.useMemo(() => (0, I.getRuleInfo)(t), [t]);
  if (null == l) return null;
  let {
    headerText: r,
    descriptionText: o,
    icon: d
  } = l;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.ruleIconContainer,
      children: (0, a.jsx)(d, {
        width: 24,
        height: 24,
        className: A.ruleIcon
      })
    }), (0, a.jsxs)("div", {
      className: A.ruleTextContainer,
      children: [(0, a.jsx)(i.Heading, {
        className: A.ruleTextHeader,
        variant: "text-md/semibold",
        color: "header-primary",
        children: (0, a.jsxs)("div", {
          className: A.ruleTextHeader,
          children: [r, R(t)]
        })
      }), (0, a.jsx)(i.Text, {
        className: A.ruleTextDescription,
        variant: "text-sm/normal",
        children: o
      }), (0, a.jsx)(L, {
        triggerType: t
      })]
    }), (0, a.jsx)(O, {
      className: A.actionContainer,
      children: (0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        onClick: s,
        children: t === g.AutomodTriggerType.KEYWORD ? f.default.Messages.CREATE : f.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function G(e) {
  let {
    rule: t,
    triggerType: n,
    isEditMode: l,
    isDefaultRule: o,
    forceSetup: d,
    onSetupRule: u,
    onChangeRule: c
  } = e, E = e => {
    null != t && (e.preventDefault(), e.stopPropagation(), (0, r.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await s.el("730153").then(s.bind(s, "730153"));
      return s => (0, a.jsx)(e, {
        rule: t,
        ...s
      })
    }))
  }, _ = (0, a.jsx)(M, {
    triggerType: n,
    onSetupRule: u
  });
  return null != t && !d && (_ = l ? (0, a.jsx)(h, {
    rule: t,
    onChangeRule: c,
    onContextMenu: E
  }) : (0, a.jsx)(D, {
    rule: t,
    isDefaultRule: o,
    onContextMenu: E
  })), (0, a.jsx)(i.Clickable, {
    className: A.mainContainer,
    onContextMenu: E,
    children: _
  })
}