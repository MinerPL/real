"use strict";
u.r(t), u.d(t, {
  default: function() {
    return l
  }
});
var n = u("37983");
u("884691");
var a = u("446674"),
  s = u("77078"),
  d = u("267363"),
  r = u("660478"),
  c = u("133335"),
  i = u("782340");

function l(e) {
  let t = (0, a.useStateFromStores)([r.default], () => r.default.hasUnread(e, c.ReadStateTypes.GUILD_EVENT), [e]);
  return (0, n.jsx)(s.MenuItem, {
    id: "mark-events-read",
    label: i.default.Messages.MARK_AS_READ,
    action: function() {
      (0, d.ackGuildFeature)(e, c.ReadStateTypes.GUILD_EVENT)
    },
    disabled: !t
  })
}