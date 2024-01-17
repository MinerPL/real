"use strict";
n.r(t), n.d(t, {
  QuickSelectPopout: function() {
    return _
  },
  default: function() {
    return h
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("974667"),
  a = n("77078"),
  u = n("145131"),
  c = n("476765"),
  d = n("79808");
class f extends i.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: i
    } = this.props;
    return (0, l.jsxs)(u.default, {
      className: s(d.quickSelect, i),
      align: u.default.Align.CENTER,
      children: [(0, l.jsx)("div", {
        className: d.quickSelectLabel,
        children: e
      }), (0, l.jsxs)(u.default, {
        align: u.default.Align.CENTER,
        className: d.quickSelectClick,
        children: [(0, l.jsx)("div", {
          className: d.quickSelectValue,
          children: null != n ? n(t) : t.label
        }), (0, l.jsx)("div", {
          className: d.quickSelectArrow
        })]
      })]
    })
  }
}
class E extends i.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, l.jsx)(o.ListNavigatorItem, {
      id: n.key,
      children: i => (0, l.jsx)(a.Clickable, {
        focusProps: {
          enabled: !1
        },
        className: s(d.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick,
        ...i,
        role: "option",
        children: t(n, e)
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    }
  }
}

function _(e) {
  let {
    options: t,
    value: n,
    scroller: i,
    renderOption: r,
    onChange: u,
    className: f
  } = e, _ = s(d.quickSelectPopout, f, {
    [d.quickSelectPopoutScroll]: i
  }), h = t.map(e => {
    let t = null != n && e.value === n.value,
      i = t ? void 0 : u;
    return (0, l.jsx)(E, {
      className: d.quickSelectPopoutOption,
      renderOption: r,
      option: e,
      onChange: i,
      selected: t
    }, e.key || e.value)
  }), p = (0, c.useUID)(), S = (0, o.default)({
    id: p,
    isEnabled: !0,
    wrap: !0,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), {
    ref: M,
    ...T
  } = S.containerProps;
  return (0, a.useFocusLock)(M), (0, l.jsx)(o.ListNavigatorProvider, {
    navigator: S,
    children: (0, l.jsx)("div", {
      ref: M,
      className: _,
      ...T,
      role: "listbox",
      children: i ? (0, l.jsx)(a.Scroller, {
        className: d.quickSelectScroller,
        children: h
      }) : h
    })
  })
}
var h = f