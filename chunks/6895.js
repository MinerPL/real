            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                s = n("305961"),
                i = n("957255"),
                l = n("690563"),
                r = n("49111");

            function o(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e)),
                    n = (0, l.useGuildEligibleForMediaChannels)(t),
                    o = i.default.can(r.Permissions.MANAGE_CHANNELS, t);
                return n && o
            }