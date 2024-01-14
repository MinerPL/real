"use strict";
t.r(s), t.d(s, {
  QRCodeOverlaySizes: function() {
    return o
  },
  QRCodeWithOverlay: function() {
    return C
  },
  default: function() {
    return _
  }
});
var r, o, a = t("37983"),
  l = t("884691"),
  n = t("82697"),
  i = t("56701");
(r = o || (o = {})).SIZE_40 = "SIZE_40", r.SIZE_60 = "SIZE_60";
let d = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  c = t("527826");
class u extends l.PureComponent {
  render() {
    let {
      className: e,
      text: s,
      ...t
    } = this.props;
    return (0, a.jsx)("div", {
      style: {
        padding: 8,
        borderRadius: 4,
        width: t.size,
        height: t.size,
        backgroundColor: t.bgColor
      },
      className: e,
      children: (0, a.jsx)(n.default, {
        value: s,
        level: "M",
        ...t
      })
    })
  }
}
u.defaultProps = {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
};
class C extends l.PureComponent {
  render() {
    let {
      overlaySize: e
    } = this.props, s = d[null != e ? e : "SIZE_40"];
    return (0, a.jsxs)("div", {
      className: i.qrCodeContainer,
      children: [(0, a.jsx)(u, {
        ...this.props
      }), (0, a.jsx)("div", {
        className: i.qrCodeOverlay,
        children: (0, a.jsx)("img", {
          className: i[s],
          src: c,
          alt: ""
        })
      })]
    })
  }
}
C.defaultProps = {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
};
var _ = u