"use strict";
n.r(t), n.d(t, {
  useMessageRequestItem: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var l = n("446674"),
  a = n("77078"),
  r = n("16108"),
  s = n("697218"),
  o = n("782340");

function u(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser());
  return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
    children: [!e.isMessageRequest && (0, i.jsx)(a.MenuItem, {
      id: "mark-as-message-request",
      label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
      action: () => (0, r.markAsMessageRequest)(e.id)
    }), (0, i.jsx)(a.MenuItem, {
      id: "clear-message-request",
      label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
      action: () => (0, r.clearMessageRequestState)(e.id)
    })]
  })
}