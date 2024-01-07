            "use strict";
            let a;
            n.r(t), n.d(t, {
                showReportModalForDiscoverableGuild: function() {
                    return m
                },
                showReportModalForGuildDirectoryEntry: function() {
                    return f
                },
                showReportModalForMessage: function() {
                    return _
                },
                showReportModalForStageChannel: function() {
                    return E
                },
                showReportModalForGuildScheduledEvent: function() {
                    return h
                },
                showReportModalForFirstDM: function() {
                    return v
                },
                submitHamReportForFirstDM: function() {
                    return x
                },
                showReportModalForUser: function() {
                    return R
                },
                showUnauthenticatedReportModalForUser: function() {
                    return g
                },
                showUnauthenticatedReportModalForMessage: function() {
                    return N
                }
            });
            var l = n("716241"),
                r = n("834052"),
                s = n("719926"),
                i = n("766274"),
                d = n("522874"),
                u = n("143618"),
                o = n("965153"),
                c = n("49111");

            function m(e, t) {
                p(u.ReportNames.GUILD_DISCOVERY, {
                    guild_id: e.id
                }), a({
                    name: u.ReportNames.GUILD_DISCOVERY,
                    record: e
                }, {}, t)
            }

            function f(e, t) {
                p(u.ReportNames.GUILD_DIRECTORY_ENTRY, {
                    channel_id: e.channelId,
                    guild_id: e.guildId
                }), a({
                    name: u.ReportNames.GUILD_DIRECTORY_ENTRY,
                    record: e
                }, {}, t)
            }

            function _(e, t) {
                p(u.ReportNames.MESSAGE, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                let n = (0, d.shouldShowFraudMenuVariant)();
                a({
                    name: u.ReportNames.MESSAGE,
                    record: e
                }, {
                    variant: n ? "4" : void 0
                }, t)
            }

            function E(e, t) {
                let n = r.default.getStageInstanceByChannel(e.id);
                null != n && (p(u.ReportNames.STAGE_CHANNEL, {
                    stage_instance_id: n.id,
                    channel_id: n.channel_id,
                    guild_id: n.guild_id
                }), a({
                    name: u.ReportNames.STAGE_CHANNEL,
                    record: n
                }, {}, t))
            }

            function h(e, t) {
                var n;
                p(u.ReportNames.GUILD_SCHEDULED_EVENT, {
                    guild_scheduled_event_id: e.id,
                    guild_id: e.guild_id,
                    channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
                }), a({
                    name: u.ReportNames.GUILD_SCHEDULED_EVENT,
                    record: e
                }, {}, t)
            }

            function v(e, t) {
                p(u.ReportNames.FIRST_DM, {
                    message_id: e.id,
                    channel_id: e.channel_id
                }), a({
                    name: u.ReportNames.FIRST_DM,
                    record: e
                }, {}, t, void 0, !1)
            }
            async function x(e, t) {
                try {
                    await (0, o.submitHeadlessReport)({
                        name: u.ReportNames.FIRST_DM,
                        record: e
                    }, {
                        variant: "_first_dm_ham_v1"
                    }), null == t || t()
                } catch {}
            }

            function R(e, t, n) {
                p(u.ReportNames.USER, {
                    reported_user_id: e.id
                }), a({
                    name: u.ReportNames.USER,
                    record: e,
                    contextualGuildId: t
                }, {}, n, void 0, !1)
            }

            function g(e, t) {
                let n = new i.default({});
                p(u.UnauthenticatedReportNames.USER, {
                    reported_user_id: n.id
                }), a({
                    name: u.UnauthenticatedReportNames.USER,
                    record: n
                }, {}, t, void 0, !1, !1, e)
            }

            function N(e, t) {
                let n = new s.default({});
                p(u.UnauthenticatedReportNames.MESSAGE, {
                    message_id: void 0,
                    channel_id: void 0
                }), a({
                    name: u.UnauthenticatedReportNames.MESSAGE,
                    record: n
                }, {}, t, void 0, !1, !1, e)
            }

            function p(e, t) {
                l.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
                    report_type: e,
                    ...t
                })
            }
            a = n("878102").default