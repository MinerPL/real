            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("305961"),
                i = n("957255"),
                l = n("772051");
            n("343885");
            var r = n("49111");

            function o(e, t) {
                var n;
                let o = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    u = (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.ADMINISTRATOR, o)),
                    d = null == o ? void 0 : o.hasFeature(r.GuildFeatures.CLYDE_DISABLED),
                    c = l.default.useExperiment({
                        guildId: null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : "",
                        location: t
                    }).experimentState;
                return c === l.ClydeExperimentState.DefaultOn && !d || c === l.ClydeExperimentState.ComingSoon && u
            }