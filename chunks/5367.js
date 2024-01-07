            "use strict";
            i.r(t), i.d(t, {
                useCurrentUserGuildBadgeStatus: function() {
                    return u
                }
            });
            var n = i("446674"),
                l = i("26989"),
                s = i("697218"),
                a = i("591023"),
                r = i("520141"),
                o = i("982527");

            function u(e) {
                let t = (0, r.useIsMemberVerificationManualApproval)(null != e ? e : ""),
                    i = (0, n.useStateFromStores)([o.default, s.default, l.default], () => {
                        let t = o.default.getRequest(e),
                            i = s.default.getCurrentUser();
                        if (null == i || null == t || t.userId !== i.id) return;
                        let n = l.default.getMember(e, t.userId),
                            r = null != n && !n.isPending;
                        if (!r || (0, a.isActionedAndNotAcked)(t)) return t.applicationStatus
                    }, [e]);
                return t ? i : void 0
            }