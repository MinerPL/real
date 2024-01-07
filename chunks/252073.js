            "use strict";
            s.r(t), s.d(t, {
                fetchLogs: function() {
                    return d
                },
                fetchNextLogPage: function() {
                    return u
                },
                filterByAction: function() {
                    return c
                },
                filterByUserId: function() {
                    return E
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("287103"),
                i = s("49111");

            function r() {
                return l.default.isLoading || l.default.isLoadingNextPage
            }

            function o(e, t) {
                let s = function(e) {
                    let {
                        before: t,
                        userId: s,
                        action: a
                    } = e;
                    s = s || l.default.userIdFilter, a = a || l.default.actionFilter;
                    let n = {
                        limit: i.AUDIT_LOG_PAGE_LIMIT
                    };
                    return null != t && (n.before = t), null != s && (n.user_id = s), null != a && (n.action_type = a), n
                }(t);
                return a.default.get({
                    url: i.Endpoints.GUILD_AUDIT_LOG(e),
                    query: s,
                    oldFormErrors: !0
                })
            }

            function d(e, t, s) {
                if (!r() && null != e) return n.default.dispatch({
                    type: "AUDIT_LOG_FETCH_START"
                }), o(e, {
                    userId: t,
                    action: s
                }).then(e => {
                    let {
                        audit_log_entries: t,
                        integrations: s,
                        users: a,
                        webhooks: l,
                        guild_scheduled_events: i,
                        auto_moderation_rules: r,
                        threads: o,
                        application_commands: d
                    } = e.body;
                    n.default.dispatch({
                        type: "AUDIT_LOG_FETCH_SUCCESS",
                        logs: t,
                        integrations: s,
                        users: a,
                        webhooks: l,
                        guildScheduledEvents: i,
                        automodRules: r,
                        threads: o,
                        applicationCommands: d
                    })
                }, () => n.default.dispatch({
                    type: "AUDIT_LOG_FETCH_FAIL"
                }))
            }

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!l.default.hasOlderLogs || r() || null == e) return;
                let s = l.default.logs,
                    a = s[s.length - 1],
                    i = null;
                return null != a && (i = a.id), n.default.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_START",
                    before: i,
                    isGroupedFetch: t
                }), o(e, {
                    before: i
                }).then(e => {
                    let {
                        audit_log_entries: t,
                        integrations: s,
                        users: a,
                        webhooks: l,
                        guild_scheduled_events: i,
                        auto_moderation_rules: r,
                        threads: o,
                        application_commands: d
                    } = e.body;
                    n.default.dispatch({
                        type: "AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS",
                        logs: t,
                        integrations: s,
                        users: a,
                        webhooks: l,
                        guildScheduledEvents: i,
                        automodRules: r,
                        threads: o,
                        applicationCommands: d
                    })
                }, () => n.default.dispatch({
                    type: "AUDIT_LOG_FETCH_NEXT_PAGE_FAIL"
                }))
            }

            function c(e, t) {
                if (!r() && null != t) return n.default.dispatch({
                    type: "AUDIT_LOG_FILTER_BY_ACTION",
                    action: e
                }), d(t, null, e)
            }

            function E(e, t) {
                if (!r() && null != t) return n.default.dispatch({
                    type: "AUDIT_LOG_FILTER_BY_USER",
                    userId: e
                }), d(t, e)
            }