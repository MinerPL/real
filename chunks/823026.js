            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
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
                _ = n("49111"),
                I = n("782340");

            function T(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: T,
                    context: f
                } = e, S = c.default.getGuild(n), N = (0, l.useStateFromStores)([E.default], () => null != S ? E.default.can(_.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(T, !0, !0), h = (0, o.useUserIndexState)(!0, !0), {
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
                    (null == S ? void 0 : S.id) != null && (d.default.open(S.id, _.GuildSettingsSections.INTEGRATIONS), s.default.setSection(_.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]), g = a.useCallback(() => {
                    u.default.open(_.UserSettingsSections.AUTHORIZED_APPS)
                }, []), G = f === _.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !N || G || !m && !A) return null;
                let O = [];
                return m && O.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: I.default.Messages.MANAGE_INTEGRATION,
                    action: C
                }, "manage-integration")), A && O.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: I.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), O
            }