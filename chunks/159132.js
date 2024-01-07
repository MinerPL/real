            "use strict";
            i.r(t), i.d(t, {
                getMemberSupplementalByGuildId: function() {
                    return s
                },
                syncMemberSupplemental: function() {
                    return u
                }
            });
            var r = i("835257");
            let n = {};

            function s(e) {
                return null == n[e] && (n[e] = {}), n[e]
            }

            function u(e, t) {
                if (0 === t.length) return !1;
                let i = s(e);
                return t.forEach(e => {
                    var t, n, s, u, a, l, h, o;
                    let d = i[e.userId],
                        m = null !== (n = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == d ? void 0 : d.joinSourceType) && void 0 !== n ? n : null;
                    (null == m || m === r.JoinSourceType.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.JoinSourceType.INVITE), i[e.userId] = {
                        userId: e.userId,
                        sourceInviteCode: null !== (u = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == d ? void 0 : d.sourceInviteCode) && void 0 !== u ? u : null,
                        joinSourceType: m,
                        inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == d ? void 0 : d.inviterId) && void 0 !== l ? l : null,
                        integrationType: null !== (o = null !== (h = e.integrationType) && void 0 !== h ? h : null == d ? void 0 : d.integrationType) && void 0 !== o ? o : null
                    }
                }), !0
            }