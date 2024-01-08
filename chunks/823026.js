            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("424973");
            var i = n("37983"),
                l = n("884691"),
                a = n("446674"),
                r = n("77078"),
                s = n("713841"),
                o = n("79112"),
                u = n("988721"),
                d = n("592407"),
                c = n("305961"),
                f = n("957255"),
                h = n("49111"),
                E = n("782340");

            function _(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: _,
                    context: p
                } = e, I = c.default.getGuild(n), C = (0, a.useStateFromStores)([f.default], () => null != I ? f.default.can(h.Permissions.MANAGE_GUILD, I) : null), T = (0, u.useContextIndexState)(_, !0, !0), S = (0, u.useUserIndexState)(!0, !0), {
                    isUserApp: N,
                    isGuildApp: v
                } = l.useMemo(() => {
                    var e, n, i, l;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let a = Object.values(null !== (i = null === (e = T.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                        r = Object.values(null !== (l = null === (n = S.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
                    return {
                        isGuildApp: a.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [T, S, null == t ? void 0 : t.id]), g = l.useCallback(() => {
                    (null == I ? void 0 : I.id) != null && (d.default.open(I.id, h.GuildSettingsSections.INTEGRATIONS), s.default.setSection(h.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == I ? void 0 : I.id]), m = l.useCallback(() => {
                    o.default.open(h.UserSettingsSections.AUTHORIZED_APPS)
                }, []), A = p === h.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !C || A || !v && !N) return null;
                let M = [];
                return v && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: E.default.Messages.MANAGE_INTEGRATION,
                    action: g
                }, "manage-integration")), N && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: E.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: m
                }, "manage-authorized-app")), M
            }