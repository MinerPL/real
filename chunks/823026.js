            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("424973");
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                r = n("77078"),
                s = n("713841"),
                u = n("79112"),
                o = n("988721"),
                d = n("592407"),
                c = n("305961"),
                E = n("957255"),
                f = n("49111"),
                _ = n("782340");

            function I(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: I,
                    context: T
                } = e, S = c.default.getGuild(n), N = (0, l.useStateFromStores)([E.default], () => null != S ? E.default.can(f.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(I, !0, !0), h = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: A,
                    isGuildApp: m
                } = a.useMemo(() => {
                    var e, n, i, a;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let l = Object.values(null !== (i = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                        r = Object.values(null !== (a = null === (n = h.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
                    return {
                        isGuildApp: l.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [p, h, null == t ? void 0 : t.id]), C = a.useCallback(() => {
                    (null == S ? void 0 : S.id) != null && (d.default.open(S.id, f.GuildSettingsSections.INTEGRATIONS), s.default.setSection(f.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]), g = a.useCallback(() => {
                    u.default.open(f.UserSettingsSections.AUTHORIZED_APPS)
                }, []), O = T === f.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !N || O || !m && !A) return null;
                let M = [];
                return m && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: _.default.Messages.MANAGE_INTEGRATION,
                    action: C
                }, "manage-integration")), A && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: _.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), M
            }