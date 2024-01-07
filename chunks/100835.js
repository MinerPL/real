            "use strict";
            n.r(t), n.d(t, {
                InvitesDisabledExperiment: function() {
                    return s
                },
                useInvitesDisabledPermission: function() {
                    return o
                },
                useInvitesDisabledExperiment: function() {
                    return c
                },
                setInvitesDisabled: function() {
                    return f
                },
                useShouldShowInvitesDisabledNotif: function() {
                    return _
                }
            }), n("222007");
            var i = n("446674"),
                l = n("862205"),
                u = n("54346"),
                a = n("957255"),
                r = n("592407"),
                d = n("49111");
            let s = (0, l.createExperiment)({
                kind: "guild",
                id: "2022-07_invites_disabled",
                label: "Report Raids",
                defaultConfig: {
                    enableInvitesDisabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Reporting Of Raids",
                    config: {
                        enableInvitesDisabled: !0
                    }
                }]
            });

            function o(e) {
                return (0, i.useStateFromStores)([a.default], () => null != e && a.default.can(d.Permissions.MANAGE_GUILD, e), [e])
            }

            function c(e) {
                return s.useExperiment({
                    guildId: e.id,
                    location: "108f83_1"
                }, {
                    autoTrackExposure: !1
                })
            }
            async function f(e, t) {
                if (e.hasFeature(d.GuildFeatures.INVITES_DISABLED) === t) return;
                let n = new Set(e.features);
                t ? n.add(d.GuildFeatures.INVITES_DISABLED) : n.delete(d.GuildFeatures.INVITES_DISABLED), await r.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }

            function _(e) {
                var t;
                let n = o(e),
                    l = (0, i.useStateFromStores)([u.default], () => null != e ? u.default.getGuildIncident(e.id) : null),
                    a = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, d.GuildFeatures.INVITES_DISABLED)) || (null == l ? void 0 : l.invitesDisabledUntil) != null && new Date(l.invitesDisabledUntil) > new Date;
                return n && a
            }