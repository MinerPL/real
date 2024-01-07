            "use strict";
            n.r(t), n.d(t, {
                trackReportRaidViewed: function() {
                    return S
                },
                setGuildRaidAlerts: function() {
                    return c
                },
                setGuildIncidentActions: function() {
                    return I
                },
                handleResolveRaid: function() {
                    return A
                },
                handleReportRaid: function() {
                    return E
                }
            }), n("222007");
            var a = n("866227"),
                l = n.n(a),
                r = n("872717"),
                s = n("716241"),
                i = n("592407"),
                d = n("305961"),
                u = n("599110"),
                o = n("610174"),
                _ = n("49111");

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && u.default.track(_.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, s.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function c(e, t) {
                let n = new Set(e.features);
                n.has(_.GuildFeatures.COMMUNITY) ? t ? n.delete(_.GuildFeatures.RAID_ALERTS_DISABLED) : n.add(_.GuildFeatures.RAID_ALERTS_DISABLED) : t ? n.add(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : n.delete(_.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
                    features: n
                }, {
                    throwErr: !0
                })
            }
            async function I(e, t, n, a) {
                let s = l().add(a, "hours").toISOString(),
                    i = await r.default.put({
                        url: _.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? s : null,
                            dms_disabled_until: n ? s : null
                        }
                    });
                return i
            }
            async function A(e, t, n) {
                let {
                    showAlertMode: a
                } = (0, o.getGuildAlertModeEnabled)(e), l = d.default.getGuild(e), s = null == l ? void 0 : l.getSafetyAlertsChannelId();
                if (!a || null == s) return null;
                let i = await r.default.post({
                    url: _.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: n
                    }
                });
                return i
            }
            async function E(e) {
                let {
                    showAlertMode: t
                } = (0, o.getGuildAlertModeEnabled)(e), n = d.default.getGuild(e), a = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!t || null == a) return null;
                let l = await r.default.post({
                    url: _.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return l
            }