"use strict";
n.r(t);
var i = n("868493");
n("133337");
let r = {
    moveFriendRequests: !1,
    removeNotificationTab: !1,
    showNewPanels: !1
  },
  s = [{
    id: 0,
    label: "Control",
    config: {
      ...r,
      showNewPanels: !0
    }
  }, {
    id: 1,
    label: "Move friend requests out of notification tab.",
    config: {
      ...r,
      showNewPanels: !0,
      moveFriendRequests: !0
    }
  }, {
    id: 2,
    label: "Remove notification tab and move friend requests out of notification tab.",
    config: {
      ...r,
      showNewPanels: !0,
      moveFriendRequests: !0,
      removeNotificationTab: !0
    }
  }];
(0, i.default)({
  kind: "user",
  id: "2023-12_mobile_redesign_notif_tab",
  label: "Mobile Redesign - Notification Tab",
  defaultConfig: r,
  treatments: s
})