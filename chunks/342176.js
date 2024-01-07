            "use strict";
            n.r(t), n.d(t, {
                getRelativeTimestamp: function() {
                    return o
                },
                isRemoteAcked: function() {
                    return d
                },
                incomingFriendRequestLocalItem: function() {
                    return c
                },
                isMentionItem: function() {
                    return _
                },
                inNotificationCenterEnabled: function() {
                    return E
                }
            });
            var i = n("249654"),
                a = n("845579"),
                l = n("913796"),
                s = n("360191"),
                r = n("581091"),
                u = n("782340");
            let o = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return (0, r.default)({
                        since: e,
                        getFormatter: t ? r.getAbbreviatedFormatter : r.getFullFormatter
                    })
                },
                d = (e, t) => e.acked || t !== a.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET && i.default.compare(t, e.id) >= 0;

            function c(e, t) {
                var n;
                let a = i.default.fromTimestamp(new Date(t).getTime());
                return {
                    acked: !1,
                    forceUnacked: !0,
                    other_user: e,
                    kind: "notification-center-item",
                    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(a),
                    deeplink: "https://discord.com/users/".concat(e.id),
                    type: s.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
                    id: a,
                    body: u.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                        username: "**".concat(null !== (n = e.globalName) && void 0 !== n ? n : e.username, "**")
                    })
                }
            }
            let _ = e => e.type === s.NotificationCenterItems.RECENT_MENTION || e.type === s.NotificationCenterItems.REPLY_MENTION;

            function E() {
                return (0, l.inDesktopNotificationCenterExperiment)()
            }