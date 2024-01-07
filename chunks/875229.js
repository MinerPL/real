            "use strict";
            n.r(t), n.d(t, {
                canReviewGuildMemberApplications: function() {
                    return _
                },
                useCanReviewGuildMemberApplications: function() {
                    return E
                }
            });
            var i = n("884691"),
                a = n("446674"),
                l = n("305961"),
                s = n("957255"),
                r = n("50926"),
                u = n("526253"),
                o = n("520141"),
                d = n("567054"),
                c = n("49111");

            function _(e) {
                let t = l.default.getGuild(e);
                return null != t && (0, o.isMemberVerificationManualApproval)(e) && s.default.can(c.Permissions.KICK_MEMBERS, t)
            }

            function E(e) {
                let t = (0, o.useIsMemberVerificationManualApproval)(e),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getGuild(e)),
                    _ = null != n && t && s.default.can(c.Permissions.KICK_MEMBERS, n) && n.hasVerificationGate(),
                    E = (0, a.useStateFromStores)([u.default], () => u.default.get(e), [e]);
                i.useEffect(() => {
                    _ && r.default.fetchVerificationForm(e)
                }, [_, e]);
                let f = i.useMemo(() => {
                    var e;
                    return (null !== (e = null == E ? void 0 : E.formFields) && void 0 !== e ? e : []).some(e => !(0, d.isTermsFormField)(e))
                }, [null == E ? void 0 : E.formFields]);
                return _ && f
            }