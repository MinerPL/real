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
  i = s("157552"),
  d = s("677114"),
  o = s("782340");
class u extends a.Component {
  componentDidMount() {
    let {
      applicationId: e,
      branches: t,
      onHasBranchesChange: s
    } = this.props;
    (0, i.fetchBranchesForApplication)(e), null == s || s(t.length > 0)
  }
  componentDidUpdate(e) {
    let {
      onHasBranchesChange: t,
      branches: s
    } = this.props, n = s.length > 0;
    null != t && n !== e.branches.length > 0 && t(n)
  }
  render() {
    let {
      branches: e,
      selectedBranchId: t,
      applicationId: s,
      includeMaster: a,
      hide: l,
      className: i
    } = this.props;
    if (0 === e.length || l) return null;
    let d = a ? e : e.filter(e => e.id !== s);
    return (0, n.jsx)(r.SingleSelect, {
      options: d.map(e => ({
        label: e.getName(s),
        value: e.id
      })),
      placeholder: o.default.Messages.CREATE_STORE_CHANNEL_SELECT_BRANCH,
      value: t,
      onChange: this.handleChange,
      className: i
    })
  }
  constructor(...e) {
    super(...e), this.handleChange = e => {
      this.props.onChange(e)
    }
  }
}
u.defaultProps = {
  includeMaster: !1
};
var h = l.default.connectStores([d.default], e => {
  let {
    applicationId: t
  } = e;
  return {
    branches: d.default.getBranches(t)
  }
})(u)