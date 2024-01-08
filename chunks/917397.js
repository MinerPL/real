            "use strict";
            n.r(t), n.d(t, {
                useUserPhoneVerification: function() {
                    return C
                },
                UserRulesAgreementLevel: function() {
                    return a
                },
                useUserRulesAgreementLevel: function() {
                    return S
                },
                useUserEmailVerification: function() {
                    return g
                },
                useUserAccountAgeDate: function() {
                    return _
                },
                useGuildMemberJoinedAtDate: function() {
                    return I
                },
                useGuildMemberInviteLinkCode: function() {
                    return T
                }
            }), n("702976"), n("222007");
            var a, l, s = n("884691"),
                i = n("866227"),
                r = n.n(i),
                u = n("65597"),
                o = n("26989"),
                d = n("305961"),
                c = n("697218"),
                f = n("568734"),
                h = n("299039"),
                p = n("178406"),
                m = n("645266"),
                E = n("657944");

            function C(e) {
                let t = (0, u.default)([c.default], () => c.default.getUser(e), [e]);
                return null != t && t.isPhoneVerified()
            }

            function S(e, t) {
                var n, a;
                let l = (0, u.default)([c.default], () => c.default.getUser(e), [e]),
                    s = (0, u.default)([o.default], () => o.default.getMember(t, e), [t, e]),
                    i = (0, u.default)([d.default], () => d.default.getGuild(t), [t]),
                    r = null == i ? void 0 : i.hasVerificationGate();
                return r ? null == l || null == s || null == i ? 1 : (0, f.hasFlag)(null !== (n = s.flags) && void 0 !== n ? n : 0, E.GuildMemberFlags.BYPASSES_VERIFICATION) || (0, f.hasFlag)(null !== (a = s.flags) && void 0 !== a ? a : 0, E.GuildMemberFlags.COMPLETED_ONBOARDING) ? 2 : 1 : 0
            }

            function g(e) {
                let t = (0, u.default)([c.default], () => c.default.getUser(e), [e]);
                if (null == t) return !1;
                let n = (null == t ? void 0 : t.isPhoneVerified()) || (null == t ? void 0 : t.isStaff());
                return t.verified || n
            }

            function _(e) {
                return s.useMemo(() => {
                    let t = h.default.extractTimestamp(e);
                    return r(new Date(t)).format("MMM DD, YYYY")
                }, [e])
            }

            function I(e, t) {
                let n = (0, u.default)([o.default], () => o.default.getMember(t, e), [t, e]),
                    a = null == n ? void 0 : n.joinedAt;
                return s.useMemo(() => null == a ? "" : r(new Date(a)).format("MMM DD, YYYY"), [a])
            }

            function T(e, t) {
                var n;
                let [a, l] = s.useState(null), i = s.useRef(null), r = (0, u.default)([p.default], () => p.default.getEnhancedMember(t, e), [t, e]), o = null !== (n = null == r ? void 0 : r.sourceInviteCode) && void 0 !== n ? n : null;
                return s.useEffect(() => {
                    if (null != o && l(o), null != i.current) return () => {
                        i.current = null
                    };
                    i.current = (0, m.getMemberSupplemental)(t, [e]).then(e => {
                        if (e.length > 0) {
                            var t, n;
                            l(null !== (n = null === (t = e[0]) || void 0 === t ? void 0 : t.sourceInviteCode) && void 0 !== n ? n : null)
                        }
                    })
                }, [e, t, o]), null != a ? a : null
            }(l = a || (a = {}))[l.NO_GATE = 0] = "NO_GATE", l[l.NO_AGREEMENT = 1] = "NO_AGREEMENT", l[l.AGREED = 2] = "AGREED"