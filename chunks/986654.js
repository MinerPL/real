            "use strict";
            s.r(t), s.d(t, {
                ADD_MEMBER_QUERY_LIMIT: function() {
                    return S
                },
                MAX_PREFETCH_MEMBER_COUNT: function() {
                    return N
                },
                useGuildMembers: function() {
                    return g
                },
                useGuildRoleMembers: function() {
                    return f
                },
                useQueryGuildMembers: function() {
                    return A
                },
                filterFullMembersByQuery: function() {
                    return L
                },
                getSectionAnalyticsName: function() {
                    return m
                },
                filterRole: function() {
                    return C
                }
            }), s("808653"), s("424973"), s("222007");
            var a = s("884691"),
                n = s("448105"),
                l = s.n(n),
                i = s("446674"),
                r = s("26989"),
                o = s("697218"),
                d = s("599110"),
                u = s("449008"),
                c = s("651879"),
                E = s("158998"),
                _ = s("895026"),
                T = s("53948"),
                I = s("49111");
            let S = 50,
                N = 1e3;

            function g(e, t) {
                let s = (0, i.useStateFromStoresArray)([r.default], () => {
                        let s = r.default.getMembers(e);
                        return null == t ? s : s.filter(t)
                    }, [e, t]),
                    n = (0, i.useStateFromStoresObject)([o.default], () => s.reduce((e, t) => {
                        let s = o.default.getUser(t.userId);
                        return null == s ? e : (e[t.userId] = s, e)
                    }, {}), [s]);
                return a.useMemo(() => {
                    let t = [];
                    for (let l of s) {
                        var a;
                        let s = n[l.userId];
                        null != s && t.push({
                            name: null !== (a = l.nick) && void 0 !== a ? a : E.default.getName(s),
                            userTag: E.default.getUserTag(s),
                            id: l.userId,
                            avatarSource: s.getAvatarSource(e),
                            avatarURL: s.getAvatarURL(e, 80),
                            bot: s.bot,
                            verifiedBot: s.isVerifiedBot(),
                            roles: l.roles,
                            key: l.userId,
                            user: s
                        })
                    }
                    return t
                }, [s, n, e])
            }

            function f(e, t, s) {
                a.useEffect(() => {
                    (0, _.requestMembersForRole)(e, t).catch(s)
                }, [e, t]);
                let n = a.useCallback(e => e.roles.includes(t), [t]);
                return g(e, n)
            }

            function A(e, t) {
                let s = a.useRef(!1);
                a.useEffect(() => {
                    c.default.requestMembers(e, t, 200), "" !== t && !s.current && (d.default.track(I.AnalyticEvents.SEARCH_STARTED, {
                        search_type: "Role Members"
                    }), s.current = !0)
                }, [e, t])
            }

            function L(e, t) {
                let s = e.trim().toLowerCase();
                return t.id === s || l(s, t.name.toLowerCase()) || l(s, t.userTag.toLowerCase())
            }

            function m(e) {
                switch (e) {
                    case T.GuildSettingsRoleEditSections.MEMBERS:
                        return "Members";
                    case T.GuildSettingsRoleEditSections.PERMISSIONS:
                        return "Permissions";
                    case T.GuildSettingsRoleEditSections.DISPLAY:
                        return "Role Settings";
                    case T.GuildSettingsRoleEditSections.VERIFICATIONS:
                        return "Connections";
                    default:
                        (0, u.assertNever)(e)
                }
            }

            function C(e, t) {
                return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
            }