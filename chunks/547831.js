            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var l = s("884691"),
                a = s("446674"),
                i = s("305961"),
                n = s("256941");
            let r = [];

            function o(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    s = (0, a.useStateFromStores)([n.default], () => n.default.getSubscriptionRoles(e));
                return l.useMemo(() => (null == t ? void 0 : t.roles) == null ? r : Object.values(t.roles).filter(e => s.has(e.id)), [null == t ? void 0 : t.roles, s])
            }