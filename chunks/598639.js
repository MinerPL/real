            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("962199"),
                a = n("305961");

            function d(e, t) {
                return (0, l.useStateFromStoresObject)([a.default, u.default], () => {
                    let n = a.default.getGuild(e),
                        l = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: l,
                        guild: n
                    }
                }, [e, t])
            }