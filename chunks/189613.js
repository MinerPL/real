"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("881410");
var s, a = n("37983"),
  l = n("884691"),
  r = n("414456"),
  i = n.n(r),
  o = n("448105"),
  u = n.n(o),
  d = n("917351"),
  c = n.n(d),
  f = n("592861"),
  E = n("77078"),
  h = n("988415"),
  _ = n("145131"),
  m = n("782340"),
  g = n("803853"),
  p = n("212029");
s = class extends l.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = f.default.flatMap((e, t) => {
      let {
        alpha2: n,
        phoneCountryCodes: s,
        name: l
      } = e, r = (0, h.getI18NCountryName)(n);
      return s.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: l,
        translatedName: r,
        countryData: {
          name: l,
          alpha2: n,
          code: e
        },
        children: (0, a.jsxs)(_.default, {
          className: g.countryItem,
          justify: _.default.Justify.CENTER,
          align: _.default.Align.CENTER,
          children: [(0, a.jsx)(_.default.Child, {
            className: g.countryName,
            children: r
          }), (0, a.jsx)(_.default.Child, {
            className: g.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), n = c(t).filter(t => 0 === e.length || u(e.toLowerCase(), t.name.toLowerCase()) || u(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, l.createElement)(E.PopoutList.Item, {
      ...e,
      key: e.key,
      onClick: () => this.onClick(e.countryData)
    })).value();
    return 0 === n.length ? (0, a.jsx)(E.PopoutList.Empty, {
      children: m.default.Messages.NONE
    }) : (0, a.jsx)(E.ScrollerAuto, {
      className: g.phoneFieldScroller,
      children: n
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, a.jsxs)(E.PopoutList, {
      className: i(g.phoneFieldPopout, p.elevationBorderLow, e),
      children: [(0, a.jsx)(E.PopoutList.SearchBar, {
        query: this.state.query,
        placeholder: m.default.Messages.SEARCH_COUNTRY,
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, a.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), this.onChangeQuery = e => {
      this.setState({
        query: e
      })
    }, this.onClearQuery = () => {
      this.setState({
        query: ""
      })
    }, this.onClick = e => {
      var t, n;
      null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
    }, this.state = {
      query: ""
    }
  }
}