"use strict";
n.r(t), n.d(t, {
  renderSystemTag: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("25116"),
  s = n("730541"),
  r = n("79798"),
  l = n("741566");

function o(e) {
  let t, {
    message: n,
    channel: o,
    user: u,
    compact: c,
    isRepliedMessage: d,
    hideIcon: m = !1,
    children: f
  } = e;
  return ((null == n ? void 0 : n.isSystemDM()) ? t = r.default.Types.SYSTEM_DM : null != n && (0, i.default)(n) ? t = (0, s.isPublicSystemMessage)(n) ? r.default.Types.OFFICIAL : r.default.Types.SERVER : (null == u ? void 0 : u.bot) ? t = r.default.Types.BOT : null != o && o.isForumPost() && o.ownerId === (null == u ? void 0 : u.id) && !d && (t = r.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(r.default, {
    className: c ? l.botTagCompact : l.botTagCozy,
    type: t,
    verified: null == u ? void 0 : u.isVerifiedBot(),
    hideIcon: m,
    useRemSizes: !0,
    children: f
  })
}