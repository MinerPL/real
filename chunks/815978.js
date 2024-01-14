"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("957825"),
  i = n("547772"),
  r = n("211248"),
  o = n("660279"),
  u = n("49111"),
  d = n("782340");

function c(e) {
  let {
    channel: t
  } = e;
  return (0, l.jsx)(a.Popout, {
    align: "right",
    animation: a.Popout.Animation.NONE,
    position: "bottom",
    renderPopout: e => t.isThread() ? (0, l.jsx)(i.default, {
      ...e,
      channel: t,
      navId: "recents-thread-notifications",
      label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
    }) : (0, l.jsx)(s.default, {
      ...e,
      channel: t,
      navId: "recents-notifications",
      label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
      location: {
        section: u.AnalyticsSections.INBOX
      },
      includeGuildMute: !0
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, l.jsx)(r.default, {
        tooltip: d.default.Messages.NOTIFICATION_SETTINGS,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, l.jsx)(o.default, {
          width: 16,
          height: 16
        }),
        onClick: t
      })
    }
  })
}