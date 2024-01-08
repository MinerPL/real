            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                l = n("990766"),
                s = n("373469"),
                i = n("271938");

            function r(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    r = (0, a.useStateFromStores)([s.default], () => {
                        let t = s.default.getCurrentUserActiveStream();
                        return null != t && t.channelId === e
                    }, [e]),
                    o = (0, a.useStateFromStores)([s.default], () => s.default.isSelfStreamHidden(e), [e]);
                return [(null == t || t === n) && r, o, t => {
                    (0, l.toggleSelfStreamHidden)(e, t)
                }]
            }