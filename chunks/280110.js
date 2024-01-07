            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var l = a("884691"),
                n = a("599110"),
                s = a("887446"),
                i = a("49111");

            function d(e) {
                l.useEffect(() => {
                    let t = s.default.getHomeSessionId(e);
                    return () => {
                        n.default.track(i.AnalyticEvents.HOME_EXITED, {
                            guild_id: e,
                            home_session_id: t
                        })
                    }
                }, [e])
            }