            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("101125"),
                s = n("194051");

            function i() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getBroadcast()),
                    t = (0, l.useStateFromStores)([s.default], () => s.default.getBroadcasts());
                return null != e ? [e].concat(t) : t
            }