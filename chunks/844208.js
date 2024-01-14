"use strict";
n.r(t), n.d(t, {
  participantMemberInfo: function() {
    return s
  }
});
var a = n("158998"),
  l = n("782340");

function s(e) {
  var t, n, s;
  if ((0, a.isNewUser)(e.user)) return l.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
  let i = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
  if (null == i) return l.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER;
  if (null != e.member && e.member.roles.length > 0) return null !== (s = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : l.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES;
  let r = new Date().getTime() - Date.parse(i);
  return r < 864e5 ? l.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER : l.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER
}