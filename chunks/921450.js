"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("65597"),
  a = n("191225"),
  l = n("420444"),
  i = n("42203"),
  r = n("321933"),
  o = n("272505");
let u = "no_text_activity",
  d = {
    [u]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES],
    [o.ActivityPanelModes.ACTION_BAR]: [r.ChatOverlays.NEW_MESSAGES],
    [o.ActivityPanelModes.PANEL]: [],
    [o.ActivityPanelModes.PIP]: [r.ChatOverlays.NEW_MESSAGES, r.ChatOverlays.OPT_IN_CHANNEL, r.ChatOverlays.SUMMARIES]
  };

function c() {
  let e = (0, s.default)([a.default], () => a.default.getCurrentEmbeddedActivity()),
    t = (0, s.default)([a.default], () => a.default.getActivityPanelMode());
  return void 0 === e || (0, l.default)(null == e ? void 0 : e.channelId, i.default) ? d[u] : d[t]
}