"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  o = l("448105"),
  r = l.n(o),
  i = l("669491"),
  s = l("77078"),
  u = l("430568"),
  d = l("414943"),
  c = l("945330"),
  m = l("956089"),
  f = l("782340"),
  h = l("191134");

function v(e) {
  return null != e && (null != e.id || null != e.name)
}
let g = {
  ...d.DEFAULT_SELECT_STYLES,
  control: (e, t) => {
    let {
      isDisabled: l,
      menuIsOpen: a
    } = t;
    return {
      ...e,
      backgroundColor: "var(--input-background)",
      borderColor: "var(--input-background)",
      opacity: l ? .6 : 1,
      boxShadow: void 0,
      borderRadius: a ? "8px 8px 0 0" : "8px",
      minHeight: 40,
      transition: "border 0.15s ease",
      cursor: l ? "not-allowed" : void 0,
      pointerEvents: l ? "none" : void 0,
      "&:hover": {
        borderColor: "var(--input-background)"
      }
    }
  },
  valueContainer: e => ({
    ...e,
    padding: "8px",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    cursor: "text"
  }),
  indicatorsContainer: e => ({
    ...e,
    alignItems: "flex-start",
    paddingTop: 4
  }),
  option: (e, t) => {
    let {
      isSelected: l,
      isFocused: a
    } = t;
    return {
      ...e,
      ...l ? {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      } : a ? {
        backgroundColor: "var(--background-modifier-hover)",
        color: "var(--interactive-hover)"
      } : {
        backgroundColor: "transparent",
        color: "var(--interactive-normal)"
      },
      cursor: "pointer",
      display: "flex",
      padding: 12,
      alignItems: "center",
      minHeight: 40,
      "&:active": {
        backgroundColor: "var(--background-modifier-selected)",
        color: "var(--interactive-active)"
      },
      "&:hover [data-hover=true]": {
        opacity: 1
      }
    }
  }
};

function x(e) {
  let {
    options: t,
    value: l,
    onChange: o,
    canBeNew: x,
    memberCounts: p
  } = e, C = e => {
    e.preventDefault(), e.stopPropagation()
  }, N = n.useCallback(e => {
    var n, r, i, d;
    return (0, a.jsxs)("div", {
      className: h.selectValuePill,
      onMouseDown: C,
      children: [v(e.emoji) && (0, a.jsx)(u.default, {
        emojiId: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
        emojiName: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
        animated: null !== (d = null === (i = e.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== d && d
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e.title
      }), (0, a.jsx)(s.Clickable, {
        className: h.selectValuePillClose,
        onClick: () => {
          o(t.filter(t => l.includes(t.id) && t.id !== e.id))
        },
        children: (0, a.jsx)(c.default, {
          className: h.selectValuePillCloseIcon
        })
      })]
    })
  }, [o, t, l]), j = n.useCallback(e => {
    var t, l, n, o;
    let r = null == p || null == e.roleIds ? 0 : Math.max(...e.roleIds.map(e => p[e])),
      d = null != p && r > 0;
    return (0, a.jsxs)("div", {
      className: h.selectOption,
      children: [(0, a.jsxs)("div", {
        className: h.selectOptionTitle,
        children: [v(e.emoji) && (0, a.jsx)(u.default, {
          emojiId: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
          emojiName: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
          animated: null !== (o = null === (n = e.emoji) || void 0 === n ? void 0 : n.animated) && void 0 !== o && o
        }), (0, a.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: e.title
        })]
      }), x && e.isUnseen && (0, a.jsx)(m.TextBadge, {
        color: i.default.unsafe_rawColors.BRAND_260.css,
        text: f.default.Messages.NEW,
        className: h.optionNewBadge
      }), d && (0, a.jsx)("div", {
        className: h.selectOptionMemberCount,
        "data-hover": !0,
        children: (0, a.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: f.default.Messages.ONBOARDING_OPTION_ROLE_COUNTS.format({
            memberCount: r
          })
        })
      })]
    })
  }, [x, p]), _ = n.useCallback((e, t) => {
    let {
      data: l
    } = e;
    return 0 === t.length || r(t.toLowerCase(), l.title.toLowerCase())
  }, []);
  return (0, a.jsx)(d.default, {
    styleOverrides: g,
    clearable: !1,
    isMulti: !0,
    options: t,
    onChange: o,
    value: l,
    closeMenuOnSelect: !1,
    multiValueRenderer: N,
    optionRenderer: j,
    filterOption: _
  })
}