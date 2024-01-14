"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var o = n("37983");
n("884691");
var s = n("871988"),
  i = n("782340");

function r(e) {
  let {
    onContinue: t,
    onClose: n
  } = e;
  return (0, o.jsx)(s.TwoWayLinkError, {
    title: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
    body: i.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
    onClose: n,
    onContinue: t
  })
}