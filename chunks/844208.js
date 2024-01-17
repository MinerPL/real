"use strict";
n.r(t), n.d(t, {
  participantMemberInfo: function() {
    return r
  }
});
var a = n("718517"),
  l = n("158998"),
  s = n("782340");
let i = 1 * a.default.Millis.DAY;

function r(e) {
  var t, n, a;
  if ((0, l.isNewUser)(e.user)) return s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
  let r = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
  if (null == r) return s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER;
  if (null != e.member && e.member.roles.length > 0) return null !== (a = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES;
  let o = new Date().getTime() - Date.parse(r);
  return o < i ? s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER : s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER
}