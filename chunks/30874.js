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
                var t;
                let n = (0, i.useCanManageThread)(e),
                    o = (0, i.useCanUnarchiveThread)(e),
                    u = e.isArchivedThread();
                if (u ? o : n) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, a.jsx)(l.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? r.default.Messages.UNARCHIVE_FORUM_POST : r.default.Messages.UNARCHIVE_THREAD,
                    action: () => s.default.unarchiveThread(e, !1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? r.default.Messages.ARCHIVE_FORUM_POST : r.default.Messages.ARCHIVE_THREAD,
                    action: () => s.default.archiveThread(e, !1)
                })
            }