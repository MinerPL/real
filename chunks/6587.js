            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                useFlattenedChannelIdListWithThreads: function() {
                    return A
                }
            }), n("424973");
            var i = n("884691"),
                o = n("446674"),
                l = n("123561"),
                a = n("829072"),
                d = n("233069"),
                u = n("870691"),
                s = n("952451"),
                E = n("49111"),
                r = n("695838");

            function _(e, t, n) {
                let i = e === r.FAVORITES_RAW_GUILD_ID || e === E.FAVORITES ? (0, a.computeFavoritesState)() : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
                return c(i, t, n)
            }

            function A(e, t, n, l, a) {
                let d = (0, o.useStateFromStores)([s.default], () => s.default.getGuildChangeSentinel(e)),
                    E = (0, o.useStateFromStores)([u.default], () => u.default.version);
                return (0, i.useMemo)(() => c(t, l, a).map(e => e.id), [t, n, d, E])
            }

            function c(e, t, n) {
                let i = [];
                return e.forEachShownChannel(e => {
                    ((0, d.isGuildSelectableChannelType)(e.type) || t && (0, d.isGuildVocalChannelType)(e.type)) && i.push(e)
                }, n), i
            }