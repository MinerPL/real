"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  s = n("430568"),
  o = n("20606"),
  a = n("629126"),
  u = n("915675"),
  c = n("6914");

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: f
  } = e, E = (0, a.default)(n, i), _ = null != E || null != d;
  return _ ? (0, l.jsx)(s.default, {
    emojiId: null == E ? void 0 : E.id,
    emojiName: null != d ? d : null == E ? void 0 : E.name,
    animated: null !== (t = null == E ? void 0 : E.animated) && void 0 !== t && t,
    className: r(c.emojiIcon, f)
  }) : (0, l.jsx)(u.default, {
    className: r(c.emojiIcon, f),
    color: o.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}