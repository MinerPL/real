            "use strict";
            s.r(t), s.d(t, {
                useSortedMemberApplications: function() {
                    return u
                }
            }), s("222007");
            var a = s("884691"),
                l = s("446674"),
                i = s("90490"),
                n = s("567054");

            function u(e) {
                let {
                    guildId: t,
                    applicationStatus: s,
                    sortOrder: u
                } = e, r = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]), o = a.useMemo(() => u === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...r].reverse() : r, [u, r]);
                return {
                    guildJoinRequests: o
                }
            }