            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestRelativeTimestampText: function() {
                    return o
                }
            }), n("866227");
            var a = n("249654"),
                s = n("446674"),
                i = n("487269"),
                l = n("660478"),
                r = n("389495");

            function o(e) {
                let t = (0, r.useMessageRequestPreview)(e),
                    n = (0, s.useStateFromStores)([l.default], () => l.default.lastMessageId(e.id)),
                    o = function(e) {
                        let {
                            lastMessageId: t,
                            message: n,
                            loaded: s
                        } = e;
                        return s && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null
                    }({
                        lastMessageId: n,
                        ...t
                    });
                return null == o ? "" : (0, i.getTimestampString)(o)
            }