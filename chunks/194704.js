            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return o
                }
            });
            var r = n("801340"),
                i = n("913144"),
                s = n("872173"),
                l = n("599110"),
                a = n("49111");
            async function o(e, t) {
                await (0, s.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = r.Timestamp.fromDate(new Date), !0), s.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), l.default.track(a.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }