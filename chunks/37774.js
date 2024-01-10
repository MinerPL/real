            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("263024"),
                u = n("300322"),
                r = n("782340");

            function s(e) {
                let t = (0, u.useIsThreadModerator)(e),
                    n = e.isLockedThread();
                if (t) return n ? (0, a.jsx)(l.MenuItem, {
                    id: "unlock-thread",
                    label: e.isForumPost() ? r.default.Messages.UNLOCK_FORUM_POST : r.default.Messages.UNLOCK_THREAD,
                    action: () => i.default.unlockThread(e)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "lock-thread",
                    label: e.isForumPost() ? r.default.Messages.LOCK_FORUM_POST : r.default.Messages.LOCK_THREAD,
                    action: () => i.default.lockThread(e)
                })
            }