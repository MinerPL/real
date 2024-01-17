"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("161778"),
  l = n("941886"),
  r = n("973199"),
  o = n("782340"),
  u = n("772473"),
  d = n("855143"),
  c = n("934516");

function f(e) {
  let {
    section: t
  } = e, n = (0, s.useStateFromStores)([i.default], () => i.default.theme);
  return (0, a.jsxs)(l.default, {
    theme: n,
    className: u.emptyStateContainer,
    children: [(0, a.jsx)(l.default.Image, {
      width: 415,
      height: 200,
      lightSrc: c,
      darkSrc: d
    }), (0, a.jsx)(l.default.Text, {
      note: t === r.MessageRequestSections.SPAM ? o.default.Messages.MESSAGE_REQUESTS_SPAM_EMPTY_STATE_BODY : o.default.Messages.MESSAGE_REQUESTS_EMPTY_STATE_BODY
    })]
  })
}