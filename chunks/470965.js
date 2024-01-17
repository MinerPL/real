"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("65597"),
  i = n("862337"),
  r = n("77078"),
  o = n("954732"),
  u = n("362189"),
  d = n("697218"),
  c = n("782340"),
  f = n("400004");

function h(e) {
  let {
    inboxIconRef: t,
    recentsPopoutShown: n
  } = e, [h, E] = l.useState(!1), m = (0, s.default)([o.default], () => o.default.getLastUnseenInvite()), p = (0, s.default)([d.default], () => null != m ? d.default.getUser(m.inviter_id) : null);
  return (l.useEffect(() => {
    n && E(!1)
  }, [n]), l.useEffect(() => {
    if (null == m) {
      E(!1);
      return
    }(0, u.updateInviteStatus)(m), E(!0);
    let e = new i.Timeout;
    return e.start(5e3, () => {
      E(!1)
    }), () => {
      e.stop()
    }
  }, [m]), h && null != m && null != p) ? (0, a.jsxs)(r.TooltipLayer, {
    tooltipClassName: f.tooltip,
    tooltipContentClassName: f.tooltipContent,
    targetElementRef: t,
    position: "bottom",
    color: r.TooltipColors.BLACK,
    children: [(0, a.jsxs)("div", {
      className: f.iconContainer,
      children: [(0, a.jsx)("img", {
        className: f.inviteImage,
        src: m.application_asset,
        alt: "Game Invite"
      }), (0, a.jsx)("div", {
        className: f.offsetAvatarContainer,
        children: (0, a.jsx)(r.Avatar, {
          "aria-label": "Inviter",
          className: f.inviterImage,
          src: p.getAvatarURL(null, 24),
          size: r.AvatarSizes.SIZE_24
        })
      })]
    }), (0, a.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, a.jsx)(r.Text, {
        className: f.title,
        variant: "text-xs/semibold",
        children: c.default.Messages.GAME_INVITES_INVITE_FROM.format({
          username: p.username
        })
      }), (0, a.jsx)(r.Text, {
        className: f.subtitle,
        variant: "text-xxs/medium",
        children: m.application_name
      })]
    })]
  }) : null
}