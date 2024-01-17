"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("255397"),
  o = n("191145"),
  d = n("800762"),
  r = n("49111"),
  s = n("782340");

function c(e, t) {
  let n = (0, i.useStateFromStores)([o.default], () => e === o.default.getSelectedParticipantId(t), [t, e]),
    c = (0, i.useStateFromStores)([o.default, d.default], () => {
      let n = d.default.isInChannel(t, e) && d.default.hasVideo(t),
        l = o.default.getLayout(t),
        i = l === r.ChannelLayouts.MINIMUM || l === r.ChannelLayouts.NORMAL;
      return !n || i
    }, [t, e]);
  return c ? null : (0, l.jsx)(a.MenuItem, {
    id: "focus-video",
    label: n ? s.default.Messages.UNFOCUS_PARTICIPANT : s.default.Messages.FOCUS_PARTICIPANT,
    action: () => u.default.selectParticipant(t, n ? null : e)
  })
}