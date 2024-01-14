"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  r = l("77078"),
  i = l("145131"),
  u = l("45122");

function o(e) {
  let {
    source: t,
    selectedSource: l
  } = e, {
    id: a,
    name: o,
    url: d
  } = t, c = (null == l ? void 0 : l.id) === a;
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(i.default, {
      direction: i.default.Direction.VERTICAL,
      justify: i.default.Justify.CENTER,
      align: i.default.Align.CENTER,
      children: [(0, n.jsx)(i.default, {
        justify: i.default.Justify.CENTER,
        align: i.default.Align.CENTER,
        children: (0, n.jsx)("div", {
          style: {
            backgroundImage: "url(".concat(d, ")")
          },
          className: s(u.sourceThumbnail, {
            [u.selected]: c
          })
        })
      }), (0, n.jsx)(r.Text, {
        className: s(u.sourceName, {
          [u.selected]: c
        }),
        variant: "text-sm/normal",
        children: o
      })]
    })
  })
}