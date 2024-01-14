"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var s = n("77078"),
  u = n("433487"),
  i = n("707916"),
  a = n("782340"),
  o = n("905491");

function r(e) {
  let {
    isActive: t,
    isUserLurking: n,
    rsvped: r,
    onContextMenu: d,
    onRsvpClick: c,
    onGoToGuildClick: f,
    isDetailsView: E = !1,
    isMember: h,
    onJoinGuildClick: C,
    guildName: v,
    onInviteClick: N,
    canInvite: g,
    isChannelPublic: S
  } = e;
  return (0, l.jsxs)("div", {
    className: o.container,
    children: [null != d ? (0, l.jsx)(s.Tooltip, {
      text: a.default.Messages.MORE,
      position: "top",
      "aria-label": a.default.Messages.EDIT,
      children: e => (0, l.jsx)(s.Clickable, {
        ...e,
        onClick: d,
        className: o.iconButton,
        children: (0, l.jsx)(u.default, {
          width: 20,
          height: 20,
          className: o.icon
        })
      })
    }) : null, h && (0, l.jsx)(i.GuildEventShareButton, {
      onInviteClick: N,
      canInvite: g,
      isChannelPublic: S
    }), n && !t && (0, l.jsx)(i.GuildEventLurkerInterestedButton, {
      isUserRsvped: r,
      isUserLurking: n
    }), h && !n && !t && null != c && (0, l.jsx)(i.GuildEventInterestedButton, {
      isUserRsvped: r,
      isUserLurking: n,
      onRsvpClick: c
    }), h && !n && (!E || t) ? (0, l.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: f,
      color: s.Button.Colors.GREEN,
      children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
    }) : null, h ? null : (0, l.jsx)(s.Button, {
      className: o.button,
      innerClassName: o.innerButton,
      size: s.Button.Sizes.SMALL,
      onClick: C,
      color: s.Button.Colors.GREEN,
      children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
        guildName: v
      })
    })]
  })
}