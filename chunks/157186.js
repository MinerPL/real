            "use strict";
            n.r(t), n.d(t, {
                shouldShowMembershipVerificationGate: function() {
                    return u
                },
                useShowMemberVerificationGate: function() {
                    return o
                }
            }), n("222007");
            var i = n("446674"),
                a = n("26989"),
                l = n("305961"),
                s = n("88093"),
                r = n("697218");

            function u(e) {
                let [t, n, i, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, s.default, r.default, a.default];
                if (null == e) return !1;
                let o = t.getGuild(e),
                    {
                        notClaimed: d
                    } = n.getCheck(e),
                    c = i.getCurrentUser(),
                    _ = !1;
                if (null != c) {
                    var E, f;
                    _ = null !== (f = null === (E = u.getMember(e, c.id)) || void 0 === E ? void 0 : E.isPending) && void 0 !== f && f
                }
                let h = _ || d;
                return h && !!(null == o ? void 0 : o.hasVerificationGate())
            }

            function o(e) {
                return (0, i.useStateFromStores)([l.default, s.default, r.default, a.default], () => null != e && u(e, [l.default, s.default, r.default, a.default]), [e])
            }