            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var a = s("208302"),
                n = s.n(a),
                l = s("446674"),
                i = s("913144");
            let r = ["pct_retained", "new_members", "visitors", "communicators"],
                o = {},
                d = {},
                u = null;

            function c(e) {
                let {
                    guildId: t,
                    stats: s
                } = e;
                u = null;
                let a = {},
                    l = {},
                    i = s[0],
                    d = s[1];
                null != i && r.forEach(e => {
                    if (null != i[e]) {
                        let t = n(e);
                        null != d && 0 !== d[e] && (a["".concat(t, "Change")] = (i[e] - d[e]) * 100 / d[e]), l[t] = i[e]
                    }
                }), o[t] = {
                    ...l,
                    ...a,
                    ...o[t]
                }
            }

            function E(e) {
                let {
                    error: t
                } = e;
                u = t.code
            }
            class _ extends l.default.Store {
                getOverviewAnalytics(e) {
                    return o[e]
                }
                getMemberInsights(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t ? t : {}
                }
                shouldFetchMemberInsights(e) {
                    var t;
                    let s = null === (t = d[e]) || void 0 === t ? void 0 : t.fetchedAt;
                    return null == s || Date.now() - s > 432e5
                }
                getError() {
                    return u
                }
            }
            _.displayName = "GuildSettingsAnalyticsStore";
            var T = new _(i.default, {
                GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: c,
                GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: c,
                GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: c,
                GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: E,
                GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: E,
                GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: E,
                GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        ...s
                    } = e;
                    d[t] = {
                        ...s,
                        fetchedAt: Date.now()
                    }
                }
            })