            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("713726"),
                i = n("194051");

            function r() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcastsToValidateChannels());
                (0, l.useEffect)(() => {
                    e.length > 0 && (0, s.maybeFetchBroadcastChannels)()
                }, [e])
            }