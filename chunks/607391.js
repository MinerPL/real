"use strict";
n.r(t), n.d(t, {
  getSizeForWidth: function() {
    return o
  },
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("77078"),
  i = n("145131"),
  u = n("929422");

function o(e) {
  return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
}

function d(e) {
  let {
    onCTAClick: t,
    callToAction: n,
    header: r,
    description: o,
    size: d,
    className: c,
    artURL: f,
    noArt: h = !1,
    selected: p = !1
  } = e;
  return (0, a.jsxs)(i.default, {
    className: c,
    justify: i.default.Justify.CENTER,
    align: i.default.Align.CENTER,
    direction: i.default.Direction.VERTICAL,
    style: {
      padding: 4
    },
    children: [!h && null != f && (0, a.jsx)("div", {
      className: s(u.art, u[d]),
      style: {
        backgroundImage: "url(".concat(f, ")")
      }
    }), null != r ? (0, a.jsx)(l.Text, {
      color: "none",
      variant: "text-md/semibold",
      className: u.header,
      children: r
    }) : null, null != o ? (0, a.jsx)(l.Text, {
      color: "none",
      className: u.description,
      variant: "text-sm/medium",
      children: o
    }) : null, p || null == n ? null : (0, a.jsx)(l.Button, {
      className: u.outerButton,
      size: l.Button.Sizes.NONE,
      color: l.Button.Colors.WHITE,
      look: l.Button.Looks.BLANK,
      innerClassName: u.button,
      onClick: e => {
        e.stopPropagation(), null == t || t(e)
      },
      children: n
    })]
  })
}