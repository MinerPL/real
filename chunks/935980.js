"use strict";
n.r(t), n.d(t, {
  useSingleSelectState: function() {
    return v
  },
  useMultiSelectState: function() {
    return A
  },
  useVariableSelect: function() {
    return R
  },
  multiSelect: function() {
    return N
  },
  toggleSelect: function() {
    return O
  },
  singleSelect: function() {
    return D
  },
  Select: function() {
    return L
  },
  SingleSelect: function() {
    return M
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("974667"),
  l = n("227645"),
  u = n("311720"),
  c = n("442761"),
  d = n("446662"),
  f = n("77078"),
  E = n("731898"),
  h = n("811425"),
  p = n("31695"),
  _ = n("837899"),
  S = n("425190"),
  m = n("578706"),
  T = n("945330"),
  g = n("178814"),
  I = n("782340"),
  C = n("257260");

function v(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => n(e),
    isSelected: e => e === t,
    clear: () => n(null),
    serialize: i
  }
}

function A(e) {
  let {
    value: t,
    onChange: n,
    serialize: i = e => String(e)
  } = e;
  return {
    select: e => {
      let i = new Set(t);
      i.has(e) ? i.delete(e) : i.add(e), n(i)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: i
  }
}

function R(e) {
  let {
    value: t,
    onChange: n,
    onSelectInteraction: i,
    serialize: r = e => String(e)
  } = e;
  return {
    select: e => {
      let {
        newValues: r,
        updated: s
      } = i(e, t);
      s && n(r)
    },
    isSelected: e => {
      var n;
      return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
    },
    clear: () => n(new Set),
    serialize: r
  }
}

function N(e, t) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), {
    newValues: n,
    updated: !0
  }
}

function O(e, t) {
  return t.has(e) ? {
    newValues: new Set,
    updated: !0
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function D(e, t) {
  return t.has(e) ? {
    newValues: t,
    updated: !1
  } : {
    newValues: new Set([e]),
    updated: !0
  }
}

function y(e) {
  return null == e ? void 0 : e.label
}

function P(e) {
  return e.map(e => y(e)).join(", ")
}

function L(e) {
  let {
    options: t,
    placeholder: n = I.default.Messages.SELECT,
    className: s,
    isDisabled: o = !1,
    maxVisibleItems: u = 7,
    autoFocus: d = !1,
    popoutWidth: p,
    clearable: m = !1,
    look: v = g.SelectLooks.FILLED,
    onClose: A,
    onOpen: R,
    renderOptionLabel: N = y,
    renderOptionValue: O = P,
    popoutClassName: D,
    popoutPosition: L = "bottom",
    popoutLayerContext: M,
    optionClassName: U,
    closeOnSelect: G,
    select: w,
    isSelected: k,
    serialize: x,
    clear: F,
    hideIcon: V = !1,
    "aria-label": B,
    "aria-labelledby": H
  } = e, [j, Y] = r.useState(!1), {
    ref: W,
    width: K,
    height: z
  } = (0, E.default)(), q = r.useCallback(e => {
    j !== e && !o && (Y(e), e ? null == R || R() : null == A || A())
  }, [o, A, R, j]), X = r.useCallback(e => {
    j && !e && q(!1)
  }, [q, j]), Q = (0, h.useIsVisible)(X), Z = r.useCallback(e => {
    if (w(e), G) {
      var t;
      null === (t = W.current) || void 0 === t || t.focus()
    }
  }, [w, G]), J = r.useCallback(e => {
    e.stopPropagation(), null == F || F()
  }, [F]), $ = t.filter(e => k(e.value));
  r.useLayoutEffect(() => {
    if (d) {
      var e;
      null === (e = W.current) || void 0 === e || e.focus()
    }
  }, [d]);
  let ee = (0, f.useRedesignIconContext)().enabled;
  return (0, i.jsx)(c.Popout, {
    spacing: 0,
    animation: c.Popout.Animation.NONE,
    shouldShow: j,
    onRequestOpen: () => {
      q(!0)
    },
    onRequestClose: () => {
      q(!1)
    },
    renderPopout: e => {
      let {
        closePopout: n,
        position: r,
        updatePosition: s
      } = e;
      return (0, i.jsx)(b, {
        className: D,
        closeOnSelect: G,
        maxVisibleItems: u,
        width: null != p ? p : K,
        isSelected: k,
        closePopout: n,
        buttonHeight: null != z ? z : 0,
        onSelect: Z,
        options: t,
        serialize: x,
        renderOptionLabel: N,
        optionClassName: U,
        updatePosition: s,
        popoutPosition: r
      })
    },
    position: L,
    layerContext: M,
    children: (e, t) => {
      let {
        onClick: r,
        onKeyDown: u,
        ...c
      } = e, {
        isShown: d,
        position: f
      } = t, E = d ? S.default : _.default, h = ee ? 18 : 24;
      return (0, i.jsxs)(l.Clickable, {
        role: "button",
        "aria-disabled": o,
        innerRef: e => {
          W.current = e, Q.current = e
        },
        onClick: o ? void 0 : e => {
          r(e), q(!j)
        },
        onKeyDown: e => {
          "ArrowDown" === e.key ? q(!0) : "Escape" === e.key && (e.stopPropagation(), q(!1)), u(e)
        },
        ...c,
        className: a(C.select, s, {
          [C.open]: d,
          [C.disabled]: o,
          [C.selectPositionTop]: "top" === f,
          [C.lookFilled]: v === g.SelectLooks.FILLED
        }),
        "aria-haspopup": "listbox",
        "aria-expanded": d,
        "aria-label": B,
        "aria-labelledby": H,
        children: [$.length > 0 ? (0, i.jsx)("span", {
          className: C.value,
          children: O($)
        }) : (0, i.jsx)("span", {
          className: C.placeholder,
          children: n
        }), (0, i.jsxs)("div", {
          className: C.icons,
          children: [m ? (0, i.jsx)(l.Clickable, {
            role: "button",
            "aria-disabled": o,
            onClick: J,
            "aria-label": I.default.Messages.CLEAR,
            children: (0, i.jsx)(T.default, {
              width: 16,
              height: 16,
              className: C.clear
            })
          }) : null, V ? null : (0, i.jsx)(E, {
            width: h,
            height: h
          })]
        })]
      })
    }
  })
}

function b(e) {
  let {
    className: t,
    onSelect: n,
    closePopout: s,
    closeOnSelect: l = !0,
    isSelected: c,
    options: f,
    width: E,
    maxVisibleItems: h,
    renderOptionLabel: _,
    serialize: S,
    optionClassName: m,
    buttonHeight: T,
    updatePosition: g,
    popoutPosition: I
  } = e, [v, A] = r.useState(0), R = r.useRef(null), N = r.useId(), O = (0, o.default)({
    id: N,
    async scrollToEnd() {},
    async scrollToStart() {},
    isEnabled: !0,
    wrap: !0
  }), D = r.useRef(null);
  (0, u.useFocusLock)(D), r.useLayoutEffect(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.focus()
  }, []), r.useEffect(() => {
    T > 0 && g()
  }, [T, g]), (0, p.default)(g), r.useLayoutEffect(() => {
    var e, t;
    let n = null === (t = R.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
    null != n && A(n)
  }, [h]), r.useEffect(() => {
    g()
  }, [g, v]);
  let y = r.useCallback(e => {
      n(e), l && s()
    }, [s, n, l]),
    P = f.map((e, t) => {
      var n;
      return (0, i.jsx)(Option, {
        isSelected: c(e.value),
        value: e.value,
        label: _(e),
        onSelect: y,
        className: m,
        isDisabled: e.disabled,
        serialize: S
      }, null !== (n = e.key) && void 0 !== n ? n : t)
    }),
    L = f.length <= h ? d.AdvancedScrollerNone : d.AdvancedScrollerThin;
  return (0, i.jsx)(o.ListNavigatorProvider, {
    navigator: O,
    children: (0, i.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: n,
          ...r
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(L, {
            className: a(C.popout, t, {
              [C.popoutPositionTop]: "top" === I
            }),
            style: {
              width: E,
              maxHeight: v
            },
            ref: e => {
              var t;
              let i = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
              n.current = i, D.current = i
            },
            ...r,
            role: "listbox",
            children: P
          }), (0, i.jsx)("div", {
            "aria-hidden": !0,
            ref: R,
            className: C.measurement,
            children: P.slice(0, h)
          })]
        })
      }
    })
  })
}

function Option(e) {
  let {
    className: t,
    value: n,
    label: r,
    onSelect: s,
    isSelected: u,
    isDisabled: c,
    serialize: d
  } = e, f = (0, o.useListItem)(d(n));
  return (0, i.jsxs)(l.Clickable, {
    focusProps: {
      enabled: !1
    },
    className: a(C.option, t),
    onClick: () => !c && s(n),
    ...f,
    "aria-selected": u,
    "aria-disabled": c,
    role: "option",
    children: [r, u && (0, i.jsx)(m.default, {
      backgroundColor: "white",
      className: C.selectedIcon,
      width: 20,
      height: 20
    })]
  })
}

function M(e) {
  let {
    value: t,
    onChange: n,
    ...r
  } = e, s = v({
    value: t,
    onChange: n
  });
  return (0, i.jsx)(L, {
    ...r,
    ...s
  })
}