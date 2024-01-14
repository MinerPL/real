"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("567062"),
  u = s("50926"),
  c = s("526253"),
  E = s("567054"),
  _ = s("859130"),
  T = s("613786"),
  I = s("462579"),
  S = s("641892"),
  N = s("690343"),
  g = s("782340"),
  f = s("642622"),
  A = s("628652");

function L(e) {
  let {
    guild: t,
    isExpanded: l,
    emptyFormFields: i,
    hasTermsField: r
  } = e, d = t.hasVerificationGate(), [c, E] = n.useState(d), _ = e => {
    e.preventDefault(), e.stopPropagation()
  }, T = async e => {
    try {
      E(e), await u.default.enableVerificationForm(t.id, e)
    } catch {
      E(c)
    }
  }, L = e => {
    e && i ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await s.el("77078").then(s.bind(s, "77078"));
      return s => (0, a.jsx)(t, {
        ...s,
        header: g.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: g.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: g.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => T(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: g.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : T(e)
  }, m = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("93184").then(s.bind(s, "93184"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: f.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: f.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: g.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (l || i && !c) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: g.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !l && (0, a.jsx)("div", {
        className: A.pillRow,
        children: r && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: f.valuePill,
          children: [(0, a.jsx)(S.default, {
            width: 16,
            height: 16
          }), g.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: A.previewAndEnable,
      children: l || c || !i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: _,
          onMouseUp: _,
          onClick: e => {
            _(e), m()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: A.tooltip,
            text: g.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(I.default, {
              height: 24,
              width: 24,
              className: A.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(N.default, {
          checked: c,
          onChange: () => L(!c)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: g.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function m(e) {
  var t;
  let {
    guild: s
  } = e, [l, o] = n.useState(!1), [I, S] = n.useState(!1), N = n.useRef(!1), g = n.useCallback(() => {
    N.current = !0
  }, []), m = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: s.id
  }), C = (0, r.useStateFromStores)([c.default], () => c.default.get(s.id)), O = null !== (t = null == C ? void 0 : C.formFields) && void 0 !== t ? t : [];
  return n.useEffect(() => {
    u.default.fetchVerificationForm(s.id).then(() => {
      S(!0)
    })
  }, [s.id]), (0, a.jsx)(d.default, {
    renderHeader: (0, a.jsx)(L, {
      guild: s,
      isExpanded: l,
      emptyFormFields: (null == O ? void 0 : O.length) == null || (null == O ? void 0 : O.length) === 0,
      hasTermsField: null == O ? void 0 : O.some(e => e.field_type === E.VerificationFormFieldTypes.TERMS)
    }),
    isExpanded: l,
    onExpand: () => o(!l),
    children: (0, a.jsx)("div", {
      className: i(f.itemBodyContainer, A.rulesScreeningItems),
      children: I && (0, a.jsx)(T.default, {
        guild: s,
        submittedGuildJoinRequestsCount: m,
        formFields: O,
        onFormFieldUpdate: g,
        hideVerificationLevelField: !0
      })
    })
  })
}