            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("841363"),
                i = n("822516"),
                r = n("745049"),
                u = n("782340");

            function o(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: n
                        } = e, l = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let n = (0, i.getScheduleFromEventData)(e),
                            {
                                entityType: l
                            } = e;
                        if (null == n || (null == n ? void 0 : n.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: o
                        } = n;
                        return l === r.GuildScheduledEventEntityTypes.EXTERNAL && null == o ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != o && null != s && o.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != o && o.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, n = null == t || "" === t.trim();
                        return n ? "Topic must be specified." : void 0
                    }(e)
                }
            }