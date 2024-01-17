"use strict";
s.r(t), s.d(t, {
  MessageStyles: function() {
    return n
  },
  default: function() {
    return E
  }
});
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("446674"),
  u = s("913144"),
  o = s("465527"),
  d = s("622839"),
  c = s("782340");
(a = n || (n = {})).SHORT = "SHORT", a.LONG = "LONG";
class _ extends i.PureComponent {
  getText(e, t) {
    if (429 === e.status) switch (t) {
      case "SHORT":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT;
      case "LONG":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR
    }
    switch (t) {
      case "SHORT":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR_SHORT;
      case "LONG":
        return c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR
    }
  }
  componentWillUnmount() {
    null != this.props.purchaseError && u.default.wait(() => o.clearPurchaseError())
  }
  render() {
    let {
      className: e,
      purchaseError: t,
      messageStyle: s
    } = this.props;
    return null == t ? null : (0, l.jsx)("div", {
      className: e,
      children: this.getText(t, s)
    })
  }
}
_.defaultProps = {
  messageStyle: "LONG"
};
var E = r.default.connectStores([d.default], () => ({
  purchaseError: d.default.error
}))(_)