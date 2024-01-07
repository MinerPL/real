            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var l = s("884691"),
                n = s("446674"),
                a = s("429224"),
                o = s("935692");

            function i(e) {
                let [t, s] = l.useState(!1), i = (0, n.useStateFromStores)([o.default], () => o.default.getFollowerStatsForChannel(e), [e]);
                return l.useEffect(() => {
                    let l = null == i || Date.now() - i.lastFetched > 36e5;
                    l && !t ? (s(!0), a.default.fetchChannelFollowerStats(e)) : null != i && t && s(!1)
                }, [e, i, t]), [i, t]
            }