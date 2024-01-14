"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("781738"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("363484"),
  u = n("402904"),
  d = n("145131"),
  c = n("841283"),
  f = n("782340"),
  h = n("398990");
let p = {
    position: "bottom",
    autoInvert: !1
  },
  m = e => {
    let {
      region: t,
      className: n = h.regionSelectName
    } = e, l = t.name.replace(/ \(VIP\)$/, "");
    return (0, a.jsx)("div", {
      className: n,
      children: l
    })
  };
class E extends l.PureComponent {
  render() {
    let {
      region: e,
      selected: t
    } = this.props;
    return (0, a.jsxs)(d.default, {
      align: d.default.Align.CENTER,
      className: i({
        selected: t
      }),
      children: [(0, a.jsx)(m, {
        region: e,
        className: h.regionSelectName
      }), t ? (0, a.jsx)("i", {
        className: h.check
      }) : null]
    })
  }
}
class C extends l.PureComponent {
  componentDidMount() {
    null == this.props.regions && o.default.fetchRegions(null)
  }
  render() {
    let {
      regions: e
    } = this.props;
    if (null == e) return null;
    let t = this.getSelectedRegion(),
      n = {
        label: t.name,
        value: t
      },
      l = e.filter(e => !e.deprecated && !e.hidden).map(e => ({
        label: e.name,
        value: e,
        key: e.id
      }));
    return (0, a.jsx)(c.default, {
      label: f.default.Messages.REGION,
      options: l,
      value: n,
      onChange: this.handleChangeVoiceRegion,
      renderOption: this.renderOption,
      popoutProps: p,
      popoutClassName: h.regionSelectPopout
    })
  }
  constructor(...e) {
    super(...e), this.renderOption = (e, t) => (0, a.jsx)(E, {
      region: e.value,
      selected: t
    }, e.value.id), this.getSelectedRegion = () => {
      var e;
      let {
        regions: t,
        call: n
      } = this.props;
      return n.regionUpdated && null != t && null != n.region ? null !== (e = t.find(e => {
        let {
          id: t
        } = e;
        return t === n.region
      })) && void 0 !== e ? e : {
        name: n.region,
        id: n.region
      } : {
        id: "automatic",
        name: f.default.Messages.AUTOMATIC_REGION,
        vip: !1,
        deprecated: !1,
        hidden: !1
      }
    }, this.handleChangeVoiceRegion = e => {
      let {
        value: t
      } = e, {
        channelId: n
      } = this.props.call;
      o.default.changeCallRegion(n, t.id)
    }
  }
}
var g = r.default.connectStores([u.default], () => ({
  regions: u.default.getRegions(null)
}))(C)