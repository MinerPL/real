"use strict";
r.r(t), r.d(t, {
  IconTypes: function() {
    return a
  },
  IconSizes: function() {
    return d
  },
  default: function() {
    return h
  }
}), r("781738");
var a, n, i = r("37983"),
  l = r("884691"),
  o = r("414456"),
  s = r.n(o),
  c = r("30003");
(n = a || (a = {})).UNKNOWN = "unknown", n.VISA = "visa", n.DISCOVER = "discover", n.MASTERCARD = "mastercard", n.AMEX = "amex", n.PAYPAL = "paypal", n.PAYMENT_REQUEST = "paymentRequest", n.G_PAY = "gPay", n.DINERS = "diners", n.JCB = "jcb", n.UNIONPAY = "unionpay", n.SOFORT = "sofort", n.PRZELEWY24 = "przelewy24", n.GIROPAY = "giropay", n.PAYSAFECARD = "paysafecard", n.GCASH = "gcash", n.GRABPAY = "grabpay", n.MOMO_WALLET = "momo_wallet", n.VENMO = "venmo", n.KAKAOPAY = "kakaopay", n.GOPAY_WALLET = "gopay_wallet", n.BANCONTACT = "bancontact", n.EPS = "eps", n.IDEAL = "ideal", n.CASH_APP = "cash_app";
let d = {
  SMALL: c.cardIconSmall,
  MEDIUM: c.cardIconMedium,
  LARGE: c.cardIconLarge,
  XLARGE: c.cardIconXLarge
};
class u extends l.PureComponent {
  static getType(e) {
    if (null == e) return "unknown";
    let t = e.replace(/[^a-z0-9_]/gi, "").toUpperCase();
    return a[t] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: t,
      className: r,
      size: a
    } = this.props;
    return (0, i.jsx)("div", {
      className: s(a, c[t], r, {
        [c.flipped]: e
      }),
      children: t
    })
  }
}
u.Types = a, u.Sizes = d, u.defaultProps = {
  size: d.SMALL,
  flipped: !1
};
var h = u