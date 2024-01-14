"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  u = n.n(s),
  o = n("77078"),
  i = n("430568"),
  r = n("798609"),
  d = n("602428"),
  c = n("307311"),
  m = n("192112"),
  p = n("782340"),
  f = n("709965");

function E(e) {
  let {
    emoji: t,
    label: n,
    description: a,
    isDisabled: s,
    isOffset: o
  } = e, r = u(f.labelContainer, {
    [f.disabled]: s,
    [f.offset]: null == t && o
  });
  return (0, l.jsxs)("div", {
    className: f.option,
    children: [null != t ? (0, l.jsx)(i.default, {
      className: f.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, l.jsxs)("div", {
      className: r,
      children: [(0, l.jsx)("strong", {
        className: f.label,
        children: n
      }), null != a ? (0, l.jsx)("span", {
        className: f.description,
        children: a
      }) : null]
    })]
  })
}

function C(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsxs)("div", {
      className: u(f.value, f.singleValue),
      children: [null != t ? (0, l.jsx)(i.default, {
        className: f.emoji,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, l.jsx)("span", {
        className: f.singleValueLabel,
        children: n
      })]
    })
  })
}

function S(e) {
  let {
    options: t
  } = e;
  return (0, l.jsx)("div", {
    className: f.option,
    children: (0, l.jsx)("div", {
      className: f.value,
      children: t.map((e, t) => (0, l.jsxs)("div", {
        className: f.optionTag,
        children: [null != e.emoji ? (0, l.jsx)(i.default, {
          className: f.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, l.jsx)("span", {
          className: f.tag,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function T(e) {
  let {
    type: t,
    options: n,
    indices: s,
    placeholder: u,
    maxValues: i,
    minValues: T,
    disabled: N
  } = e, v = a.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), {
    state: h,
    executeStateUpdate: _,
    visualState: I,
    isDisabled: g,
    error: O
  } = (0, c.useComponentState)(e, {
    type: t,
    values: v
  }), x = i > 1, L = I === m.ActionComponentState.LOADING, [y, j] = a.useState(!1), [A, M] = a.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [R, b] = a.useState(A), U = a.useMemo(() => n.some(e => null != e.emoji), [n]);
  a.useEffect(() => {
    if ((null == h ? void 0 : h.type) === r.ComponentType.STRING_SELECT) {
      let e = new Set(h.values);
      M(e), b(e)
    } else {
      let e = new Set(v);
      M(e), b(e)
    }
  }, [s, v, h]);
  let P = a.useCallback(() => {
    R !== A && _({
      type: r.ComponentType.STRING_SELECT,
      values: Array.from(A)
    }) && b(A)
  }, [A, R, b, _]);
  a.useEffect(() => {
    if (!y) !(A.size === R.size && Array.from(R).every(e => A.has(e))) && P()
  }, [y, A, R, P]);
  let G = o.singleSelect;
  x ? G = o.multiSelect : 0 === T && (G = o.toggleSelect);
  let w = (0, o.useVariableSelect)({
    value: A,
    onChange: e => M(e),
    onSelectInteraction: G
  });
  return (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.container,
      children: [(0, l.jsx)(o.Select, {
        isDisabled: N || g,
        className: f.select,
        options: n.map(e => ({
          ...e,
          disabled: x && !A.has(e.value) && A.size === i
        })),
        placeholder: null != u ? u : p.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
        onClose: () => j(!1),
        onOpen: () => j(!0),
        maxVisibleItems: 5,
        closeOnSelect: !x,
        optionClassName: f.selectOption,
        renderOptionLabel: e => (0, l.jsx)(E, {
          ...e,
          isDisabled: x && !A.has(e.value) && A.size === i,
          isOffset: U
        }),
        renderOptionValue: e => x ? (0, l.jsx)(S, {
          options: e
        }) : (0, l.jsx)(C, {
          ...e[0]
        }),
        ...w
      }), L ? (0, l.jsx)("div", {
        className: f.loading,
        children: (0, l.jsx)(o.Dots, {
          dotRadius: 3.5,
          themed: !0
        })
      }) : null]
    }), null != O ? (0, l.jsx)(d.InteractionStatusMessage, {
      ...(0, d.getFailedContent)(O),
      className: f.error
    }) : null]
  })
}