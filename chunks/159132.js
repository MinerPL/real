"use strict";
i.r(t), i.d(t, {
  getMemberSupplementalByGuildId: function() {
    return s
  },
  syncMemberSupplemental: function() {
    return a
  }
});
var r = i("835257");
let n = {};

function s(e) {
  return null == n[e] && (n[e] = {}), n[e]
}

function a(e, t) {
  if (0 === t.length) return !1;
  let i = s(e);
  return t.forEach(e => {
    var t, n, s, a, u, l, h, d;
    let o = i[e.userId],
      m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == o ? void 0 : o.joinSourceType) && void 0 !== n ? n : null;
    (null == m || m === r.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.JoinSourceType.INVITE), i[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null !== (a = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == o ? void 0 : o.sourceInviteCode) && void 0 !== a ? a : null,
      joinSourceType: m,
      inviterId: null !== (l = null !== (u = e.inviterId) && void 0 !== u ? u : null == o ? void 0 : o.inviterId) && void 0 !== l ? l : null,
      integrationType: null !== (d = null !== (h = e.integrationType) && void 0 !== h ? h : null == o ? void 0 : o.integrationType) && void 0 !== d ? d : null
    }
  }), !0
}