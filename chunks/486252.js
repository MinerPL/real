"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  r = n("77078"),
  i = n("145131"),
  o = n("124969"),
  u = n("662617"),
  d = n("926622");

function c(e) {
  let {
    value: t,
    onChange: n,
    subText: a,
    muted: c,
    marginTopStyle: f
  } = e;
  return (0, s.jsx)(i.default, {
    className: null != f ? f : d.marginTop20,
    align: i.default.Align.CENTER,
    children: (0, s.jsx)(r.Checkbox, {
      value: t,
      type: r.Checkbox.Types.INVERTED,
      onChange: (e, t) => n(t),
      className: u.checkbox,
      children: (0, s.jsx)(o.SubText, {
        className: l({
          [u.subText]: !c
        }),
        children: a
      })
    })
  })
}