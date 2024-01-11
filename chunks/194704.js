            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return r
                }
            });
            var i = n("801340"),
                a = n("913144"),
                l = n("872173"),
                s = n("599110"),
                o = n("49111");
            async function r(e, t) {
                await (0, l.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = i.Timestamp.fromDate(new Date), !0), l.UserSettingsDelay.INFREQUENT_USER_ACTION), a.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), s.default.track(o.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }