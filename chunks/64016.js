            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("755624"),
                r = n("263024"),
                o = n("782340");

            function u(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.hasJoined(e.id));
                return n ? (0, l.jsx)(s.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? o.default.Messages.LEAVE_FORUM_POST : o.default.Messages.LEAVE_THREAD,
                    action: () => r.default.leaveThread(e, t)
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? o.default.Messages.JOIN_FORUM_POST : o.default.Messages.JOIN_THREAD,
                    action: () => r.default.joinThread(e, t)
                })
            }