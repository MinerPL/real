"use strict";
n.r(t), n.d(t, {
  useExpandableTextContainer: function() {
    return o
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("284427");

function o() {
  let [e, t] = l.useState(!1);
  return {
    isTruncated: e,
    ExpandableTextContainer: l.memo(function(e) {
      let {
        showAll: n = !1,
        className: l,
        children: a,
        lineClamp: o = 2
      } = e;
      return (0, s.jsx)("div", {
        ref: e => {
          if (null != e) {
            let n = e.scrollHeight - e.clientHeight > 1;
            t(n)
          }
        },
        className: i(r.lineClamp, l),
        style: n ? void 0 : {
          lineClamp: o,
          WebkitLineClamp: o
        },
        children: a
      })
    })
  }
}