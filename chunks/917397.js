            "use strict";
            n.r(t), n.d(t, {
                UserRulesAgreementLevel: function() {
                    return a
                },
                useUserRulesAgreementLevel: function() {
                    return m
                },
                useUserAccountVerified: function() {
                    return E
                },
                useUserAccountAgeDate: function() {
                    return C
                },
                useGuildMemberJoinedAtDate: function() {
                    return g
                }
            }), n("702976"), n("222007");
            var a, l, s = n("884691"),
                i = n("866227"),
                r = n.n(i),
                o = n("65597"),
                u = n("26989"),
                d = n("305961"),
                c = n("697218"),
                f = n("568734"),
                h = n("299039");
            n("178406"), n("645266");
            var p = n("657944");

            function m(e, t) {
                var n, a;
                let l = (0, o.default)([c.default], () => c.default.getUser(e), [e]),
                    s = (0, o.default)([u.default], () => u.default.getMember(t, e), [t, e]),
                    i = (0, o.default)([d.default], () => d.default.getGuild(t), [t]),
                    r = null == i ? void 0 : i.hasVerificationGate();
                return r ? null == l || null == s || null == i ? 1 : (0, f.hasFlag)(null !== (n = s.flags) && void 0 !== n ? n : 0, p.GuildMemberFlags.BYPASSES_VERIFICATION) || (0, f.hasFlag)(null !== (a = s.flags) && void 0 !== a ? a : 0, p.GuildMemberFlags.COMPLETED_ONBOARDING) ? 2 : 1 : 0
            }

            function E(e) {
                let t = (0, o.default)([c.default], () => c.default.getUser(e), [e]);
                if (null == t) return !1;
                let n = (null == t ? void 0 : t.isPhoneVerified()) || (null == t ? void 0 : t.isStaff());
                return t.verified || n
            }

            function C(e) {
                return s.useMemo(() => {
                    let t = h.default.extractTimestamp(e);
                    return r(new Date(t)).format("MMM DD, YYYY")
                }, [e])
            }

            function g(e, t) {
                let n = (0, o.default)([u.default], () => u.default.getMember(t, e), [t, e]),
                    a = null == n ? void 0 : n.joinedAt;
                return s.useMemo(() => null == a ? "" : r(new Date(a)).format("MMM DD, YYYY"), [a])
            }(l = a || (a = {}))[l.NO_GATE = 0] = "NO_GATE", l[l.NO_AGREEMENT = 1] = "NO_AGREEMENT", l[l.AGREED = 2] = "AGREED"