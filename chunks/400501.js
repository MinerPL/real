            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("18054"),
                i = n("300322"),
                r = n("782340");

            function u(e) {
                let t = (0, i.useCanManageThread)(e),
                    n = (0, i.useIsActiveChannelOrUnarchivableThread)(e),
                    u = (0, i.useIsNonModInLockedThread)(e);
                return !t || !n || u || __OVERLAY__ ? null : (0, a.jsx)(l.MenuItem, {
                    id: "edit-thread",
                    label: e.isForumPost() ? r.default.Messages.EDIT_FORUM_POST : r.default.Messages.EDIT_THREAD,
                    action: () => {
                        (0, l.closeAllModals)(), s.default.open(e.id)
                    }
                })
            }