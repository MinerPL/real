"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var o = n("871988"),
  r = n("782340");

function i(e) {
  let {
    onContinue: t,
    onClose: n
  } = e;
  return (0, s.jsx)(o.TwoWayLinkError, {
    title: r.default.Messages.CONNECT_XBOX_ERROR_TITLE,
    body: r.default.Messages.CONNECT_XBOX_ERROR_BODY,
    onClose: n,
    onContinue: t
  })
}