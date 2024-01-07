            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("884691"),
                n = a("730290"),
                s = a("90915");

            function i() {
                let e = (0, s.useLocation)(),
                    {
                        highlight_channel_id: t,
                        highlight_message_id: a
                    } = (0, n.parse)(e.search);
                return l.useMemo(() => null != a && null != t ? {
                    messageId: a,
                    channelId: t
                } : null, [t, a])
            }