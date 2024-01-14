"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("271938"),
  i = n("174622"),
  r = n("883029"),
  o = n("782340");

function u(e) {
  var t, n;
  let {
    author: u,
    inviteError: d
  } = e, c = (0, s.useStateFromStores)([l.default], () => l.default.getId()), f = c === u.id, m = f ? o.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, E = (0, r.getDescriptiveInviteError)(null == d ? void 0 : d.code);
  return (0, a.jsxs)(i.default, {
    children: [(0, a.jsx)(i.default.Header, {
      text: m
    }), (0, a.jsxs)(i.default.Body, {
      children: [(0, a.jsx)(i.default.Icon, {
        expired: !0
      }), (0, a.jsx)(i.default.Info, {
        expired: !0,
        title: null !== (t = null == E ? void 0 : E.title) && void 0 !== t ? t : o.default.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == E ? void 0 : E.description) && void 0 !== n ? n : null == d ? void 0 : d.message
      })]
    })]
  })
}