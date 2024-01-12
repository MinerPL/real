            "use strict";
            n.r(t), n.d(t, {
                getRelativeTimestamp: function() {
                    return u
                },
                isRemoteAcked: function() {
                    return l
                },
                incomingFriendRequestLocalItem: function() {
                    return f
                },
                isMentionItem: function() {
                    return _
                },
                inNotificationCenterEnabled: function() {
                    return c
                }
            });
            var s = n("249654"),
                i = n("845579"),
                r = n("913796"),
                a = n("360191"),
                o = n("581091"),
                d = n("782340");
            let u = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, o.default)({
                        since: e,
                        getFormatter: t ? o.getAbbreviatedFormatter : o.getFullFormatter
                    })
                },
                l = (e, t) => e.acked || t !== i.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && s.default.compare(t, e.id) >= 0;

            function f(e, t) {
                var n;
                let i = s.default.fromTimestamp(new Date(t).getTime());
                return {
                    acked: !1,
                    forceUnacked: !0,
                    other_user: e,
                    kind: "notification-center-item",
                    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(i),
                    deeplink: "https://discord.com/users/".concat(e.id),
                    type: a.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
                    id: i,
                    body: d.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                        username: "**".concat(null !== (n = e.globalName) && void 0 !== n ? n : e.username, "**")
                    })
                }
            }
            let _ = e => e.type === a.NotificationCenterItems.RECENT_MENTION || e.type === a.NotificationCenterItems.REPLY_MENTION;

            function c() {
                return (0, r.inDesktopNotificationCenterExperiment)()
            }