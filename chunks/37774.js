            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("263024"),
                i = n("300322"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useIsThreadModerator)(e),
                    n = e.isLockedThread();
                if (t) return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? r.default.Messages.UNLOCK_FORUM_POST : r.default.Messages.UNLOCK_THREAD,
                    action: () => s.default.unlockThread(e)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? r.default.Messages.LOCK_FORUM_POST : r.default.Messages.LOCK_THREAD,
                    action: () => s.default.lockThread(e)
                })
            }