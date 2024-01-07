            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("446674"),
                l = n("305961"),
                r = n("837008");

            function s(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                    s = (0, r.useSubscriptionListing)(t);
                return null == n || null == s ? null : n.roles[s.role_id]
            }