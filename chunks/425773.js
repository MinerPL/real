"use strict";
n.r(t), n.d(t, {
  getListboxOptionProps: function() {
    return c
  },
  default: function() {
    return h
  }
}), n("70102");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("782340"),
  u = n("544635");

function d(e) {
  e.stopPropagation(), e.preventDefault()
}

function c(e, t, n) {
  return {
    id: "".concat(e, "-").concat(t),
    role: "option",
    tabIndex: -1,
    "aria-selected": n
  }
}
class f extends l.PureComponent {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: l,
      onSelectQuery: s,
      onHighlightQuery: d,
      hideQuery: f
    } = this.props;
    if (e || f) return null;
    let h = -1 === l;
    return (0, a.jsxs)(r.Clickable, {
      className: i(u.queryContainer, {
        [u.focused]: h
      }),
      ...c(n, -1, h),
      onMouseEnter: d,
      onClick: s,
      children: [(0, a.jsx)("div", {
        className: u.queryText,
        children: o.default.Messages.SEARCH_FOR_VALUE.format({
          value: t
        })
      }), (0, a.jsx)("div", {
        className: u.queryShortcut,
        "aria-hidden": !0,
        children: (0, a.jsx)(r.KeyCombo, {
          shortcut: "return",
          dim: !0,
          className: u.keyCombo
        })
      })]
    })
  }
  renderResults(e) {
    let {
      numResults: t,
      renderNoResults: n,
      renderInitialState: a,
      renderResult: l,
      renderCustomResults: s
    } = this.props;
    if (e) return a();
    if (0 === t) return n();
    if (null != l) return Array.from({
      length: t
    }).map((e, t) => l(t));
    if (null != s) return s();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      width: l
    } = this.props, s = "" === e.trim();
    return (0, a.jsxs)("div", {
      className: u.container,
      style: {
        width: l
      },
      onMouseDown: d,
      role: "listbox",
      id: n,
      tabIndex: -1,
      "aria-activedescendant": "".concat(n, "-").concat(t),
      children: [this.renderQuery(s), this.renderResults(s)]
    })
  }
}
f.defaultProps = {
  renderInitialState: () => null,
  hideQuery: !1,
  width: 320
};
var h = f