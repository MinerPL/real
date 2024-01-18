"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("77078"),
  i = n("619335"),
  r = n("680986"),
  o = n("430475"),
  u = n("121308"),
  d = n("660074"),
  c = n("172554"),
  f = n("782340"),
  h = n("851341");

function C(e) {
  var t;
  let {
    channel: n
  } = e, C = (0, r.useAppliedTags)(n), {
    firstMessage: p
  } = (0, a.useStateFromStoresObject)([o.default], () => o.default.getMessage(n.id)), m = new Set((0, r.useVisibleAppliedForumTags)(n, C)), E = null !== (t = (0, i.default)(n)) && void 0 !== t ? t : d.default;
  return (0, s.jsxs)(c.default, {
    channelId: n.id,
    className: h.container,
    children: [(0, s.jsx)("div", {
      className: h.iconWrapper,
      children: (0, s.jsx)(E, {
        className: h.icon,
        strokeWidth: 1.75
      })
    }), (0, s.jsx)(c.EmptyMessageHeader, {
      className: h.header,
      children: n.name
    }), null == p && (0, s.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: f.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
    }), (0, s.jsx)(u.default, {
      appliedTags: m
    })]
  })
}