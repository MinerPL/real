"use strict";
n.r(t), n.d(t, {
  getListboxOptionProps: function() {
    return c
  },
  default: function() {
    return E
  }
}), n("70102");
var l = n("37983"),
  a = n("884691"),
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
class f extends a.PureComponent {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: a,
      onSelectQuery: s,
      onHighlightQuery: d,
      hideQuery: f
    } = this.props;
    if (e || f) return null;
    let E = -1 === a;
    return (0, l.jsxs)(r.Clickable, {
      className: i(u.queryContainer, {
        [u.focused]: E
      }),
      ...c(n, -1, E),
      onMouseEnter: d,
      onClick: s,
      children: [(0, l.jsx)("div", {
        className: u.queryText,
        children: o.default.Messages.SEARCH_FOR_VALUE.format({
          value: t
        })
      }), (0, l.jsx)("div", {
        className: u.queryShortcut,
        "aria-hidden": !0,
        children: (0, l.jsx)(r.KeyCombo, {
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
      renderInitialState: l,
      renderResult: a,
      renderCustomResults: s
    } = this.props;
    if (e) return l();
    if (0 === t) return n();
    if (null != a) return Array.from({
      length: t
    }).map((e, t) => a(t));
    if (null != s) return s();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      width: a
    } = this.props, s = "" === e.trim();
    return (0, l.jsxs)("div", {
      className: u.container,
      style: {
        width: a
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
var E = f