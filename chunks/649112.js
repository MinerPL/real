"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("352674"),
  i = n("271938"),
  r = n("18494"),
  o = n("174622"),
  u = n("659500"),
  d = n("158998"),
  c = n("49111"),
  f = n("782340"),
  E = n("18978");

function _(e) {
  let t, n, _, {
      author: T,
      banned: I
    } = e,
    m = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
    N = (0, l.useStateFromStores)([r.default], () => r.default.getChannelId()),
    p = d.default.useName(T),
    S = m === T.id;
  return S ? (t = f.default.Messages.INVITE_BUTTON_INVALID_OWNER, _ = f.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (_ = f.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, I ? t = f.default.Messages.INSTANT_INVITE_BANNED_INFO : null != p ? (t = f.default.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
    username: p
  }), n = (0, s.jsx)(o.default.Button, {
    onClick: function() {
      let {
        id: e
      } = T, t = "@".concat(d.default.getUserTag(T, {
        decoration: "never"
      }));
      u.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != N && a.default.startTyping(N)
    },
    children: f.default.Messages.MENTION
  })) : t = f.default.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, s.jsxs)(o.default, {
    children: [(0, s.jsx)(o.default.Header, {
      text: _
    }), (0, s.jsxs)(o.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: E.headerLine,
        children: [(0, s.jsx)(o.default.Icon, {
          expired: !0
        }), (0, s.jsx)(o.default.Info, {
          expired: !0,
          title: f.default.Messages.INVITE_BUTTON_INVALID,
          children: t
        })]
      }), n]
    })]
  })
}