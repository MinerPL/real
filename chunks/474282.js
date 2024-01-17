"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("881410"), n("424973");
var a = n("37983");
n("884691");
var l = n("917351"),
  s = n.n(l),
  i = n("898260"),
  r = n("660407"),
  o = n("970268"),
  u = n("782340"),
  d = n("962087");

function c(e, t, n) {
  let {
    markChannelRead: l,
    markGuildRead: c,
    deleteChannel: f,
    toggle: h,
    getNumUnreadChannels: E
  } = t, m = null;
  return s.flatMap(e, e => {
    let t = e.sortOrder !== m;
    m = e.sortOrder;
    let s = [];
    return t && (e.hasLoadedAnything && e.sortOrder === o.SortOrder.ReallyOldChannel ? s.push((0, a.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.SortOrder.NoNotifications && s.push((0, a.jsx)(i.default, {
      className: d.divider,
      contentClassName: d.dividerContent,
      children: u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
    }, "disabled-divider"))), s.push((0, a.jsx)(r.default, {
      channel: e,
      markChannelRead: l,
      markGuildRead: c,
      toggle: h,
      deleteChannel: f,
      onJump: n,
      getNumUnreadChannels: E
    }, e.channelId)), s
  })
}