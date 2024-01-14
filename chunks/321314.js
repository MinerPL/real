"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("419830"),
  r = n("305961"),
  o = n("861654");

function u(e) {
  let {
    channel: t
  } = e, n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), u = (0, i.getChannelIconComponent)(t, n);
  return null == u ? null : (0, l.jsxs)("div", {
    className: o.popoutHeader,
    children: [(0, l.jsx)(u, {
      className: o.channelIcon
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      className: o.channelName,
      children: t.name
    })]
  })
}