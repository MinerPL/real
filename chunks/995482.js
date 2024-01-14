"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007"), s("860677");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("77078"),
  o = s("594203"),
  d = s("219555"),
  u = s("673122"),
  c = s("955198"),
  E = s("163600");

function _(e) {
  let {
    resizableNode: t,
    onResize: s,
    onResizeEnd: n
  } = e, l = (0, o.default)({
    minDimension: u.CHIPLET_TEXT_AREA_MIN_HEIGHT,
    resizableDomNodeRef: t,
    onElementResize: s,
    onElementResizeEnd: n,
    orientation: o.ResizeOrientation.VERTICAL_BOTTOM,
    throttleDuration: 16
  });
  return (0, a.jsx)("div", {
    onMouseDown: l,
    className: E.resizeHandle
  })
}
let T = n.forwardRef(function(e, t) {
  let {
    children: s,
    onFocus: l,
    onBlur: i,
    onClick: o
  } = e, d = n.useRef(null), [c, T] = n.useState(u.CHIPLET_TEXT_AREA_MIN_HEIGHT);
  return (0, a.jsxs)(r.Clickable, {
    className: E.textArea,
    onFocus: l,
    onBlur: i,
    onClick: o,
    innerRef: d,
    ignoreKeyPress: !0,
    style: {
      minHeight: c
    },
    children: [(0, a.jsx)(r.AdvancedScroller, {
      className: E.innerScroller,
      style: {
        minHeight: c - 2
      },
      ref: t,
      children: s
    }), (0, a.jsx)(_, {
      resizableNode: d,
      onResize: T,
      onResizeEnd: e => {
        T(e), null == l || l()
      }
    })]
  })
});

function I(e) {
  var t;
  let {
    initialValue: s,
    onChangeTags: l,
    onChangeNewTagValue: o,
    tagErrors: u = {},
    placeholder: _,
    className: I,
    maxTags: S
  } = e, N = n.useRef(null), g = n.useRef(null), f = n.useRef(null), A = (0, c.useChipletState)(s), {
    handlePasteEvent: L,
    handleInputChange: m,
    handleKeyDown: C,
    handleContainerKeyUp: O,
    handleRemoveTag: h,
    handleTagChangeEvent: R,
    handleSelectTag: D,
    handleUnselectTag: M,
    handleResetTagSelections: G,
    handleInputBlurEvent: x
  } = (0, c.useChipletStateHandlers)(A, {
    scrollerRef: f,
    mainInputRef: N,
    mainContainerRef: g
  }), {
    state: {
      value: p,
      tags: U,
      selections: v,
      isSelecting: j
    }
  } = A, [P, y] = n.useState(!1), b = n.useCallback(() => {
    var e;
    y(!1), G(), null === (e = N.current) || void 0 === e || e.focus({
      preventScroll: !0
    })
  }, [G]);
  n.useEffect(() => {
    !P && l(U)
  }, [l, U, P]), n.useEffect(() => {
    !P && o(p)
  }, [o, p, P]);
  let B = n.useCallback(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && b(), y(!1)
    }, [b]),
    F = n.useCallback(e => t => {
      if (t) {
        var s;
        let t = v.includes(U[e]);
        null === (s = N.current) || void 0 === s || s.focus(), t ? M(e) : (D(e), setImmediate(() => {
          var e;
          null === (e = N.current) || void 0 === e || e.blur(), setTimeout(() => {
            var e;
            return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
          }, 16)
        }))
      } else M(e, !0), y(!0)
    }, [D, M, v, U]);
  return (0, a.jsxs)("div", {
    className: i(E.mainContainer, I),
    ref: g,
    tabIndex: 0,
    onKeyUp: O,
    children: [(0, a.jsxs)(T, {
      ref: f,
      onClick: b,
      children: [U.map((e, t) => (0, a.jsx)(d.default, {
        value: e,
        onChange: R(t),
        onBlur: B,
        onFocus: F(t),
        onRemove: () => h(t),
        isSelected: v.includes(e),
        isSelecting: j,
        error: u[e],
        forceShowErrorTooltip: !P && t === U.length - 1
      }, t)), (0, a.jsx)("input", {
        className: i(E.mainTextInput, {
          [E.isEditingOtherNodes]: P
        }),
        ref: N,
        onChange: m,
        onKeyDownCapture: C,
        onPaste: L,
        onBlur: x,
        placeholder: 0 === U.length ? _ : void 0,
        value: p
      })]
    }), null != S && (0, a.jsxs)(r.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: E.maxTags,
      children: [null !== (t = null == U ? void 0 : U.length) && void 0 !== t ? t : 0, "/", S]
    })]
  })
}