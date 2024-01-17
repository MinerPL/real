"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("242149"),
  l = n("104589"),
  r = n("963662"),
  o = n("49111"),
  u = n("994428"),
  d = n("782340"),
  c = n("398586"),
  f = e => {
    let t = i.QUICKSWITCHER_SHOW.binds[0].split("+").map(e => null != s.PRETTY_KEYS[e] ? (0, s.PRETTY_KEYS)[e]() : e).join(" + ").toUpperCase();
    return (0, a.jsx)(r.default, {
      guild: e.guild,
      onDismissed: () => e.markAsDismissed(u.ContentDismissActionType.UNKNOWN),
      onClick: () => (0, l.show)("CHANNEL_NOTICE"),
      message: d.default.Messages.QUICKSWITCHER_NOTICE,
      cta: t,
      trackingSource: o.ChannelNoticeCtaSources.QUICK_SWITCHER_NOTICE,
      type: o.ChannelNoticeTypes.QUICKSWITCHER,
      image: c,
      imageMarginX: 50
    })
  }