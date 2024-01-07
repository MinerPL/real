            "use strict";
            s.r(t), s.d(t, {
                useIsMassMentionsDefaultDisabledExperiment: function() {
                    return r
                },
                useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
                    return d
                }
            });
            var n = s("446674"),
                a = s("862205"),
                l = s("957255"),
                i = s("49111");
            let o = (0, a.createExperiment)({
                kind: "guild",
                id: "2022-11_default_disable_mass_mention",
                label: "Disable mass mentions for communities by default",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function r(e) {
                return o.useExperiment({
                    guildId: e,
                    location: "dd4beb_1"
                }, {
                    autoTrackExposure: !0
                })
            }

            function d(e) {
                var t;
                let s = (0, n.useStateFromStores)([l.default], () => l.default.can(i.Permissions.MANAGE_GUILD, e)),
                    {
                        enabled: a
                    } = o.useExperiment({
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                        location: "dd4beb_3"
                    }, {
                        autoTrackExposure: !0
                    });
                if (null == e) return !1;
                let r = e.hasFeature(i.GuildFeatures.COMMUNITY);
                return s && r && a
            }