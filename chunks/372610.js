            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("884691"),
                l = n("550766"),
                s = n("126939"),
                i = n("702173");
            let r = e => null != e && "" !== e;

            function u(e, t) {
                let n = (0, s.useIsActivitiesEnabledForCurrentPlatform)(),
                    u = (0, i.default)(t),
                    o = r(e) || u;
                a.useEffect(() => {
                    o && n && (0, l.fetchShelf)({
                        guildId: e
                    })
                }, [e, n, o]);
                let d = o && n;
                return d
            }