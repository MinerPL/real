            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("884691"),
                n = a("398604"),
                s = a("534222"),
                i = a("599110"),
                d = a("887446"),
                r = a("49111");

            function u(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = (0, s.default)(e);
                l.useEffect(() => {
                    t && i.default.track(r.AnalyticEvents.HOME_EVENTS_LOADED, {
                        guild_id: e,
                        active_events_shown: a.some(e => (0, n.isGuildScheduledEventActive)(e)) ? 1 : 0,
                        upcoming_events_shown: a.some(e => !(0, n.isGuildScheduledEventActive)(e)) ? 1 : 0,
                        home_session_id: d.default.getHomeSessionId(e)
                    })
                }, [e, t])
            }