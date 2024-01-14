"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("552700"),
  i = n("894233"),
  r = l.memo(function(e) {
    let {
      channel: t,
      participants: n,
      maxTiles: l
    } = e;
    if (0 === n.length) return null;
    let r = [];
    for (let e = 0; e < l; e++)
      if (e < n.length) {
        let l = n[e];
        r.push((0, a.jsx)(s.default, {
          channel: t,
          participant: l
        }, l.id))
      } else r.push((0, a.jsx)(s.AudienceEmptyTile, {}, e));
    return (0, a.jsx)("div", {
      className: i.participants,
      children: r
    })
  })