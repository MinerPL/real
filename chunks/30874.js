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
                var t;
                let n = (0, u.useCanManageThread)(e),
                    s = (0, u.useCanUnarchiveThread)(e),
                    d = e.isArchivedThread();
                if (d ? s : n) return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? (0, a.jsx)(l.MenuItem, {
                    id: "unarchive-thread",
                    label: e.isForumPost() ? r.default.Messages.UNARCHIVE_FORUM_POST : r.default.Messages.UNARCHIVE_THREAD,
                    action: () => i.default.unarchiveThread(e, !1)
                }) : (0, a.jsx)(l.MenuItem, {
                    id: "archive-thread",
                    label: e.isForumPost() ? r.default.Messages.ARCHIVE_FORUM_POST : r.default.Messages.ARCHIVE_THREAD,
                    action: () => i.default.archiveThread(e, !1)
                })
            }