"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var l = s("37983");
s("884691");
var a = s("414456"),
  n = s.n(a),
  i = s("669491"),
  r = s("77078"),
  o = s("145131"),
  d = s("420506"),
  u = e => {
    let {
      className: t,
      icon: s,
      noticeText: a,
      buttonText: u,
      onClick: c,
      canSync: h
    } = e;
    return (0, l.jsx)(r.Card, {
      className: n(t, d.card),
      children: (0, l.jsxs)(o.default, {
        justify: o.default.Justify.BETWEEN,
        align: o.default.Align.CENTER,
        children: [(0, l.jsx)(s, {
          width: 20,
          height: 20,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }), (0, l.jsx)("div", {
          className: d.label,
          children: (0, l.jsx)(r.Text, {
            variant: "text-md/normal",
            children: a
          })
        }), h && (0, l.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          color: r.Button.Colors.PRIMARY,
          onClick: c,
          children: u
        })]
      })
    })
  }