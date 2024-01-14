"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("158195");

function i(e) {
  let {
    guildId: t,
    productId: n,
    attachmentId: i,
    ...r
  } = e, {
    isLoading: o,
    downloadAttachment: u
  } = (0, l.default)(t, n);
  return (0, a.jsx)(s.Button, {
    ...r,
    submitting: o,
    onClick: function() {
      u(i)
    }
  })
}