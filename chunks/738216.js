            "use strict";
            s.r(t), s.d(t, {
                fetchEngagementOverview: function() {
                    return o
                },
                fetchGrowthActivationOverview: function() {
                    return d
                },
                fetchGrowthActivationRetention: function() {
                    return u
                },
                fetchMemberInsights: function() {
                    return c
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("49111");
            let i = 36288e5;

            function r(e, t) {
                let s = new Date,
                    n = new Date(s.getTime() - (s.getDay() + 1) * 864e5 - i);
                return a.default.get({
                    url: t(e),
                    query: {
                        start: n.toISOString(),
                        end: s.toISOString(),
                        interval: 2
                    },
                    oldFormErrors: !0
                })
            }

            function o(e) {
                return r(e, l.Endpoints.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(t => {
                    let {
                        body: s
                    } = t;
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
                        guildId: e,
                        stats: s.slice(0, 2)
                    })
                }, e => {
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE",
                        error: e.body
                    })
                })
            }

            function d(e) {
                return r(e, l.Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(t => {
                    let {
                        body: s
                    } = t;
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
                        guildId: e,
                        stats: s.slice(0, 2)
                    })
                }, e => {
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE",
                        error: e.body
                    })
                })
            }

            function u(e) {
                return r(e, l.Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(t => {
                    let {
                        body: s
                    } = t, a = s.filter(e => e.hasOwnProperty("pct_retained")).map(e => {
                        let {
                            interval_start_timestamp: t,
                            pct_retained: s,
                            ...a
                        } = e;
                        return {
                            interval_start_timestamp: t,
                            pct_retained: s
                        }
                    });
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
                        guildId: e,
                        stats: a.slice(0, 2)
                    })
                }, e => {
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE",
                        error: e.body
                    })
                })
            }

            function c(e) {
                return a.default.get({
                    url: l.Endpoints.GUILD_ANALYTICS_MEMBER_INSIGHTS(e)
                }).then(t => {
                    n.default.dispatch({
                        type: "GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS",
                        guildId: e,
                        hasAccessRate: t.body.has_access_rate,
                        accessRate: t.body.access_rate
                    })
                }, () => {})
            }