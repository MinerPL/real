            "use strict";
            s.r(t), s.d(t, {
                trackReportRaidViewed: function() {
                    return E
                },
                setGuildRaidAlerts: function() {
                    return _
                },
                setGuildIncidentActions: function() {
                    return T
                },
                handleResolveRaid: function() {
                    return I
                },
                handleReportRaid: function() {
                    return S
                }
            }), s("222007");
            var a = s("866227"),
                n = s.n(a),
                l = s("872717"),
                i = s("716241"),
                r = s("592407"),
                o = s("305961"),
                d = s("599110"),
                u = s("610174"),
                c = s("49111");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                0 !== t.length && d.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    guild_id: e,
                    raid_types: t
                })
            }
            async function _(e, t) {
                let s = new Set(e.features);
                s.has(c.GuildFeatures.COMMUNITY) ? t ? s.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : s.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? s.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : s.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await r.default.saveGuild(e.id, {
                    features: s
                }, {
                    throwErr: !0
                })
            }
            async function T(e, t, s, a) {
                let i = n().add(a, "hours").toISOString(),
                    r = await l.default.put({
                        url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
                        body: {
                            invites_disabled_until: t ? i : null,
                            dms_disabled_until: s ? i : null
                        }
                    });
                return r
            }
            async function I(e, t, s) {
                let {
                    showAlertMode: a
                } = (0, u.getGuildAlertModeEnabled)(e), n = o.default.getGuild(e), i = null == n ? void 0 : n.getSafetyAlertsChannelId();
                if (!a || null == i) return null;
                let r = await l.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
                    body: {
                        alert_message_id: t,
                        reason: s
                    }
                });
                return r
            }
            async function S(e) {
                let {
                    showAlertMode: t
                } = (0, u.getGuildAlertModeEnabled)(e), s = o.default.getGuild(e), a = null == s ? void 0 : s.getSafetyAlertsChannelId();
                if (!t || null == a) return null;
                let n = await l.default.post({
                    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
                });
                return n
            }