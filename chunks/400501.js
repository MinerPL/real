"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("18054"),
  u = n("300322"),
  r = n("782340");

function s(e) {
  let t = (0, u.useCanManageThread)(e),
    n = (0, u.useIsActiveChannelOrUnarchivableThread)(e),
    s = (0, u.useIsNonModInLockedThread)(e);
  return !t || !n || s || __OVERLAY__ ? null : (0, a.jsx)(l.MenuItem, {
    id: "edit-thread",
    label: e.isForumPost() ? r.default.Messages.EDIT_FORUM_POST : r.default.Messages.EDIT_THREAD,
    action: () => {
      (0, l.closeAllModals)(), i.default.open(e.id)
    }
  })
}