"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("271938"),
  i = n("174622"),
  r = n("883029"),
  o = n("782340");

function u(e) {
  var t, n;
  let {
    author: u,
    inviteError: d
  } = e, c = (0, l.useStateFromStores)([a.default], () => a.default.getId()), f = c === u.id, E = f ? o.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : o.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, _ = (0, r.getDescriptiveInviteError)(null == d ? void 0 : d.code);
  return (0, s.jsxs)(i.default, {
    children: [(0, s.jsx)(i.default.Header, {
      text: E
    }), (0, s.jsxs)(i.default.Body, {
      children: [(0, s.jsx)(i.default.Icon, {
        expired: !0
      }), (0, s.jsx)(i.default.Info, {
        expired: !0,
        title: null !== (t = null == _ ? void 0 : _.title) && void 0 !== t ? t : o.default.Messages.INVITE_BUTTON_INVALID,
        children: null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : null == d ? void 0 : d.message
      })]
    })]
  })
}