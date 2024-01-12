            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("866227"),
                a = l.n(n),
                s = l("841363"),
                r = l("822516"),
                i = l("745049"),
                u = l("782340");

            function d(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: l
                        } = e, n = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == n || "" === n.trim()) && null == l ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let l = (0, r.getScheduleFromEventData)(e),
                            {
                                entityType: n
                            } = e;
                        if (null == l || (null == l ? void 0 : l.startDate) == null) return u.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: d
                        } = l;
                        return n === i.GuildScheduledEventEntityTypes.EXTERNAL && null == d ? u.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_START_DATE : null != d && null != s && d.isBefore(s) ? u.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != d && d.isBefore(a()) ? u.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, l = null == t || "" === t.trim();
                        return l ? "Topic must be specified." : void 0
                    }(e)
                }
            }