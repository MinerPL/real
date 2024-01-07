            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("385976"),
                s = n("153043");
            let a = [];

            function u(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getGuildEmoji(e), [e]);
                return i.useMemo(() => null == t ? a : t.filter(t => (0, s.isRoleSubscriptionEmoji)(t, e)), [t, e])
            }