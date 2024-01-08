            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("424973");
            var u = l("37983"),
                n = l("884691"),
                i = l("446674"),
                d = l("77078"),
                a = l("713841"),
                s = l("79112"),
                o = l("988721"),
                r = l("592407"),
                c = l("305961"),
                f = l("957255"),
                p = l("49111"),
                v = l("782340");

            function A(e) {
                let {
                    user: t,
                    guildId: l,
                    channel: A,
                    context: M
                } = e, E = c.default.getGuild(l), I = (0, i.useStateFromStores)([f.default], () => null != E ? f.default.can(p.Permissions.MANAGE_GUILD, E) : null), N = (0, o.useContextIndexState)(A, !0, !0), S = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: U,
                    isGuildApp: _
                } = n.useMemo(() => {
                    var e, l, u, n;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let i = Object.values(null !== (u = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== u ? u : {}),
                        d = Object.values(null !== (n = null === (l = S.result) || void 0 === l ? void 0 : l.sections) && void 0 !== n ? n : {});
                    return {
                        isGuildApp: i.some(e => {
                            var l;
                            return (null === (l = e.descriptor.application) || void 0 === l ? void 0 : l.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: d.some(e => {
                            var l;
                            return (null === (l = e.descriptor.application) || void 0 === l ? void 0 : l.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [N, S, null == t ? void 0 : t.id]), G = n.useCallback(() => {
                    (null == E ? void 0 : E.id) != null && (r.default.open(E.id, p.GuildSettingsSections.INTEGRATIONS), a.default.setSection(p.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == E ? void 0 : E.id]), g = n.useCallback(() => {
                    s.default.open(p.UserSettingsSections.AUTHORIZED_APPS)
                }, []), h = M === p.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !I || h || !_ && !U) return null;
                let j = [];
                return _ && j.push((0, u.jsx)(d.MenuItem, {
                    id: "manage-integration",
                    label: v.default.Messages.MANAGE_INTEGRATION,
                    action: G
                }, "manage-integration")), U && j.push((0, u.jsx)(d.MenuItem, {
                    id: "manage-authorized-app",
                    label: v.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), j
            }