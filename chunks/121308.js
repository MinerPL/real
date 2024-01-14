"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("90625"),
  l = n("389498");

function i(e) {
  let {
    appliedTags: t,
    setAppliedTags: n
  } = e, i = null != n ? e => {
    t.has(e) && (t.delete(e), n(new Set(t)))
  } : void 0;
  return (0, s.jsx)("div", {
    className: l.tags,
    children: Array.from(t).map(e => (0, s.jsx)(a.default, {
      tag: e,
      onRemove: i,
      size: null == i ? a.default.Sizes.SMALL : a.default.Sizes.MEDIUM
    }, e.id))
  })
}