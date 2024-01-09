            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("305961"),
                l = n("957255"),
                s = n("800762"),
                u = n("404008"),
                d = n("843455");

            function r(e) {
                return (0, i.useStateFromStores)([l.default], () => null == e || !l.default.can(d.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, i.useStateFromStores)([s.default, a.default], () => (0, u.isChannelFull)(e, s.default, a.default))
            }