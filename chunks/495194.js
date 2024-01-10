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
                a = n("305961"),
                u = n("957255"),
                r = n("800762"),
                i = n("404008"),
                d = n("843455");

            function s(e) {
                return (0, l.useStateFromStores)([u.default], () => null == e || !u.default.can(d.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, l.useStateFromStores)([r.default, a.default], () => (0, i.isChannelFull)(e, r.default, a.default))
            }