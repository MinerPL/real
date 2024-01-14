"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("963662"),
  i = n("592407"),
  l = n("702411"),
  r = n("49111"),
  o = n("782340"),
  u = n("885634");

function d(e) {
  let {
    guild: t
  } = e, n = () => l.default.dismissNotice(t.id);
  return (0, a.jsx)(s.default, {
    guild: t,
    onDismissed: n,
    cta: o.default.Messages.CHECK_IT_OUT,
    message: o.default.Messages.COMMANDS_SCOPE_MIGRATION_ADMIN_NOTICE.format(),
    type: r.ChannelNoticeTypes.COMMANDS_MIGRATION,
    image: u,
    onClick: () => {
      n(), i.default.open(t.id, r.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}