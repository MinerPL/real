            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("385976"),
                s = n("153043");
            let a = [];

            function o(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.getGuildEmoji(e), [e]);
                return l.useMemo(() => null == t ? a : t.filter(t => (0, s.isRoleSubscriptionEmoji)(t, e)), [t, e])
            }