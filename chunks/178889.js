"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("129953"),
  i = n("305961"),
  r = n("304198"),
  o = n("49111"),
  u = n("782340"),
  d = n("985140");

function c(e) {
  let t, {
      compact: c,
      isOwner: f,
      channel: E
    } = e,
    _ = () => {
      let e = i.default.getGuild(E.getGuildId());
      null != e && ((0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("310688").then(n.bind(n, "310688"));
        return n => (0, s.jsx)(t, {
          ...n,
          guild: e,
          channel: E,
          source: o.InstantInviteSources.INVITE_SYSTEM_MESSAGE
        })
      }), (0, a.trackGuildInviteNotificationAction)())
    },
    T = (e, t) => (0, s.jsx)(l.Anchor, {
      className: d.inviteLink,
      onClick: _,
      children: e
    }, t);
  return t = c ? (0, s.jsx)("div", {
    className: d.inviteContent,
    children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
      inviteHook: T
    }) : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
      inviteHook: T
    })
  }) : (0, s.jsxs)("div", {
    className: d.content,
    children: [(0, s.jsx)("div", {
      className: d.inviteHeader,
      children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS
    }), (0, s.jsx)("div", {
      className: d.inviteContent,
      children: f ? u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
    }), (0, s.jsx)(l.Button, {
      onClick: _,
      size: l.Button.Sizes.SMALL,
      className: d.inviteButton,
      children: u.default.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
    })]
  }), (0, s.jsx)(r.default, {
    className: c ? d.compact : d.inviteContent,
    iconNode: c ? null : (0, s.jsx)("img", {
      alt: "",
      src: n("190368"),
      width: 40,
      height: 40
    }),
    iconContainerClassName: d.iconContainer,
    compact: c,
    children: t
  })
}