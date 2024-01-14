"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, n = s("37983"),
  l = s("884691"),
  i = s("414456"),
  r = s.n(i),
  o = s("944832"),
  d = s("49111"),
  u = s("29577");
a = class extends l.Component {
  render() {
    let {
      className: e,
      videoID: t,
      videoClassName: s
    } = this.props;
    return (0, n.jsx)(o.default, {
      aspectRatio: 16 / 9,
      className: r(e, u.videoWrapper),
      children: (0, n.jsx)("iframe", {
        className: r(s, u.video),
        src: "https://www.youtube.com/embed/".concat(t, "?rel=0&showinfo=0&controls=1&origin=https://").concat(d.PRIMARY_DOMAIN),
        allowFullScreen: !0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}