            "use strict";
            s.r(t), s.d(t, {
                useSubmittedGuildJoinRequestTotal: function() {
                    return l
                }
            });
            var a = s("446674"),
                n = s("90490");

            function l(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([n.default], () => n.default.getSubmittedGuildJoinRequestTotal(t), [t]);
                return s
            }