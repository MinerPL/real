"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("297446"),
  i = n("602580"),
  r = l.memo(function(e) {
    let {
      channel: t,
      participants: n,
      tileWidth: l,
      selectedParticipant: r
    } = e;
    return (0, a.jsx)("div", {
      className: i.rowContainer,
      children: n.map(e => e.id === (null == r ? void 0 : r.id) ? null : (0, a.jsx)(s.default, {
        channel: t,
        participant: e,
        width: l
      }, e.id))
    })
  })