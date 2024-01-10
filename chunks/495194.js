            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                u = n("305961"),
                a = n("957255"),
                i = n("800762"),
                d = n("404008"),
                r = n("843455");

            function s(e) {
                return (0, l.useStateFromStores)([a.default], () => null == e || !a.default.can(r.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, l.useStateFromStores)([i.default, u.default], () => (0, d.isChannelFull)(e, i.default, u.default))
            }