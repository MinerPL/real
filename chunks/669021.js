"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("424973"), s("222007"), s("808653");
var l = s("37983"),
  a = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("206230"),
  u = s("117362"),
  c = s("655518"),
  h = s("49111"),
  E = s("782340"),
  f = s("532568");
class m extends a.Component {
  getSelectedSection(e) {
    let {
      selectedSection: t
    } = this.state;
    if (null != t) return t;
    for (let t = 0; t < e.length; t++)
      if (e[t].length > 0) return t;
    return 0
  }
  componentDidMount() {
    this.focus()
  }
  render() {
    let {
      position: e
    } = this.props, t = this.getRows(), s = [];
    if (this.isEmpty()) s.push(1);
    else
      for (let e of t) s.push(e.length);
    return (0, l.jsxs)(o.Dialog, {
      className: i(f.container, function(e) {
        if ("bottom" === e) return f.positionBottom;
        return f.positionTop
      }(e)),
      "aria-label": this.props["aria-label"],
      children: [(0, l.jsx)("div", {
        className: f.autocompleteShadow
      }), (0, l.jsx)("div", {
        className: f.autocompleteArrowWrapper,
        children: (0, l.jsx)("div", {
          className: f.autocompleteArrow
        })
      }), (0, l.jsxs)("header", {
        className: f.header,
        children: [(0, l.jsx)("div", {
          className: f.autocompleteHeaderBackground
        }), (0, l.jsx)("div", {
          className: f.headerText,
          children: this.props.label
        }), (0, l.jsx)("input", {
          type: "text",
          className: f.input,
          placeholder: this.props.placeholder,
          ref: this.inputRef,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })]
      }), (0, l.jsx)("section", {
        className: f.sectionTag,
        children: (0, l.jsx)(o.List, {
          className: f.autocompleteScroller,
          fade: !0,
          sections: s,
          sectionHeight: this.getSectionHeight,
          rowHeight: 40,
          renderRow: this.renderRow,
          renderSection: this.renderSection
        })
      })]
    })
  }
  focus() {
    null != this.inputRef.current && this.inputRef.current.focus()
  }
  constructor(...e) {
    super(...e), this.inputRef = a.createRef(), this.state = {
      query: null,
      selectedSection: null,
      selectedRow: 0
    }, this.memoizedGetRows = (0, u.cachedFunction)((e, t, s) => {
      let l = RegExp("^".concat(c.default.escape(null != e ? e.trim() : "")), "i"),
        a = e => l.test(e);
      return s.map((e, s) => t(a, s))
    }), this.getRows = () => {
      let {
        onFilterResults: e,
        sections: t
      } = this.props, {
        query: s
      } = this.state;
      return this.memoizedGetRows(s, e, t)
    }, this.handleChange = e => {
      var t, s;
      let l = e.target.value;
      null === (t = (s = this.props).onQueryChange) || void 0 === t || t.call(s, l), this.setState({
        query: l,
        selectedSection: null,
        selectedRow: 0
      })
    }, this.handleMouseEnter = (e, t) => {
      this.setState({
        selectedSection: e,
        selectedRow: t
      })
    }, this.handleClick = (e, t) => {
      let s = this.getRows();
      this.props.onSelect(s[e][t], e), this.props.onClose()
    }, this.handleKeyDown = e => {
      let {
        keyboardModeEnabled: t
      } = this.props, {
        selectedRow: s
      } = this.state, l = this.getRows(), a = this.getSelectedSection(l);
      switch (e.keyCode) {
        case h.KeyboardKeys.TAB:
          if (t) break;
        case h.KeyboardKeys.ARROW_DOWN:
          e.preventDefault(), this.props.sections.length > a && ++s >= l[a].length && (++a >= this.props.sections.length && (a = 0), s = 0), this.setState({
            selectedSection: a,
            selectedRow: s
          });
          break;
        case h.KeyboardKeys.ARROW_UP:
          e.preventDefault(), --s < 0 && (--a < 0 && (a = this.props.sections.length - 1), s = l[a].length - 1), this.setState({
            selectedSection: a,
            selectedRow: s
          });
          break;
        case h.KeyboardKeys.ENTER:
          e.preventDefault(), this.props.sections.length > a && l[a].length > s && (this.props.onSelect(l[a][s], a), this.props.onClose());
          break;
        case h.KeyboardKeys.ESCAPE:
          e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
      }
    }, this.isEmpty = () => 0 === this.getRows().reduce((e, t) => e + t.length, 0), this.getSectionHeight = e => {
      let t = this.props.sections[e];
      return this.isEmpty() || null == t ? 0 : 44
    }, this.renderSection = e => {
      let {
        section: t
      } = e, s = this.props.sections[t];
      return this.isEmpty() || null == s ? null : (0, l.jsx)("div", {
        className: f.section,
        children: s
      }, t)
    }, this.renderRow = e => {
      var t;
      let {
        section: s,
        row: a
      } = e, {
        selectedRow: n
      } = this.state;
      if (this.isEmpty()) return (0, l.jsxs)("div", {
        className: f.empty,
        children: [(0, l.jsx)("p", {
          className: f.noResultsHeader,
          children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
        }), (0, l.jsx)("p", {
          children: E.default.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
        })]
      }, "empty");
      let r = this.getRows(),
        d = this.getSelectedSection(r),
        u = null === (t = r[s]) || void 0 === t ? void 0 : t[a];
      return (0, l.jsx)(o.Clickable, {
        onClick: this.handleClick.bind(this, s, a),
        onMouseEnter: this.handleMouseEnter.bind(this, s, a),
        className: i(f.row, {
          [f.selected]: d === s && n === a
        }),
        children: (0, l.jsx)("div", {
          className: f.rowInner,
          children: this.props.onRenderResult(u, s)
        })
      }, "".concat(s, "-").concat(a))
    }
  }
}
m.defaultProps = {
  sections: [null]
};
var g = r.default.connectStores([d.default], () => ({
  keyboardModeEnabled: d.default.keyboardModeEnabled
}))(m)