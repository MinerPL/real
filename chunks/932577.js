"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("446674"),
  r = s("77078"),
  i = s("465527"),
  d = s("552712"),
  o = s("782340");
class u extends a.Component {
  componentDidMount() {
    let {
      applicationId: e,
      skus: t,
      selectedSkuId: s,
      onChange: n
    } = this.props;
    null == t || 0 === t.length ? (0, i.fetchSKUsForApplication)(e, !1) : 1 === t.length && null == s && n(t[0].id)
  }
  componentDidUpdate() {
    let {
      skus: e,
      selectedSkuId: t,
      onChange: s
    } = this.props;
    null != e && 1 === e.length && null == t && s(e[0].id)
  }
  render() {
    let {
      skus: e,
      selectedSkuId: t,
      className: s
    } = this.props, a = null != e && 0 === e.length;
    return (0, n.jsx)(r.SingleSelect, {
      options: null != e ? e.map(e => ({
        label: e.name,
        value: e.id
      })) : [],
      placeholder: a ? o.default.Messages.CREATE_STORE_CHANNEL_NO_SKUS : o.default.Messages.CREATE_STORE_CHANNEL_SELECT_SKU,
      value: t,
      onChange: this.handleChange,
      className: s,
      isDisabled: a
    })
  }
  constructor(...e) {
    super(...e), this.handleChange = e => {
      this.props.onChange(e)
    }
  }
}
var h = l.default.connectStores([d.default], e => {
  let {
    applicationId: t
  } = e;
  return {
    skus: d.default.getForApplication(t)
  }
})(u)