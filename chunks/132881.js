"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  s = n("109264"),
  i = n("180968"),
  r = n("136281"),
  o = n("789150"),
  u = n("782340"),
  d = n("63893");

function c(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: c
  } = e, {
    messageHistoryState: f
  } = (0, i.useServerActivityForUser)(t, n), {
    messageCount: h
  } = f, p = new Intl.NumberFormat(u.default.getLocale()).format(h);
  return (0, a.jsx)(l.FormItem, {
    title: u.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE,
    titleClassName: d.infoTitle,
    children: (0, a.jsx)(r.UserModInfoItemContainer, {
      children: (0, a.jsx)(r.UserModInfoItem, {
        icon: (0, a.jsx)(s.default, {
          width: r.USER_MOD_ICON_SIZE_PX,
          height: r.USER_MOD_ICON_SIZE_PX
        }),
        name: (0, a.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          children: u.default.Messages.MESSAGES
        }),
        description: h === i.HAS_NO_COUNT ? (0, a.jsx)(l.Spinner, {
          type: l.SpinnerTypes.SPINNING_CIRCLE,
          className: d.loadingSpinner
        }) : (0, a.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: p
        }),
        onNavigate: h > 0 ? () => null == c ? void 0 : c(o.ModViewPanel.MESSAGE_HISTORY) : void 0
      })
    })
  })
}