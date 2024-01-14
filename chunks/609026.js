"use strict";
n.r(t), n.d(t, {
  MenuSearchControl: function() {
    return h
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("227645"),
  l = n("718776"),
  u = n("242670"),
  c = n("945330"),
  d = n("229915"),
  f = n("782340"),
  E = n("571271");
let h = r.forwardRef(function(e, t) {
  var n, s, h;
  let {
    query: p,
    onChange: _,
    loading: S = !1,
    disabled: m = !1,
    placeholder: T = f.default.Messages.SEARCH,
    "aria-label": g
  } = e, I = r.useRef(null), C = r.useRef(null);
  r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = C.current) || void 0 === e ? void 0 : e.focus()
    },
    blur: () => {
      var e;
      return null === (e = C.current) || void 0 === e ? void 0 : e.blur()
    },
    activate: () => !1
  }), []);
  let v = (n = p, s = S, h = _, s ? (0, i.jsx)("div", {
    className: E.iconContainer,
    children: (0, i.jsx)(u.Spinner, {
      type: u.Spinner.Type.SPINNING_CIRCLE,
      className: a(E.icon)
    })
  }) : n.length > 0 ? (0, i.jsx)(o.Clickable, {
    "aria-label": f.default.Messages.SEARCH_CLEAR,
    className: a(E.iconContainer, E.iconClickable),
    onClick: e => {
      e.stopPropagation(), h("")
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    focusProps: {
      offset: {
        top: -3,
        right: -3,
        bottom: -3,
        left: -3
      }
    },
    children: (0, i.jsx)(c.default, {
      width: 18,
      height: 18,
      className: E.icon,
      "aria-label": f.default.Messages.CLOSE
    })
  }) : (0, i.jsx)("div", {
    className: E.iconContainer,
    children: (0, i.jsx)(d.default, {
      width: 18,
      height: 18,
      className: E.icon,
      "aria-label": f.default.Messages.SEARCH
    })
  }));
  return (0, i.jsx)(l.FocusRing, {
    focusTarget: C,
    ringTarget: I,
    offset: {
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    },
    children: (0, i.jsxs)("div", {
      className: E.container,
      ref: I,
      children: [(0, i.jsx)("input", {
        role: "searchbox",
        "aria-busy": S,
        ref: C,
        className: E.input,
        value: p,
        onChange: e => _(e.currentTarget.value),
        "aria-label": g,
        placeholder: T,
        disabled: m
      }), v]
    })
  })
})