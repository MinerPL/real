"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("222007");
var l = a("884691"),
  n = a("887446"),
  s = a("713810"),
  i = a("185014"),
  d = a("2804"),
  r = a("515631");

function u(e, t) {
  let [a, u] = l.useState(!1), o = l.useCallback((a, l) => {
    a.stopPropagation(), u(!0), (0, s.trackFeedItemInteracted)({
      feed_item_type: (0, d.getFeedItemTypeFromId)(t),
      feed_item_id: t,
      load_id: i.default.getLoadId(e),
      action_type: r.FeedItemInteractionType.EXPANDED_ITEM,
      guild_id: e,
      channel_id: l.channel_id,
      message_id: l.id,
      home_session_id: n.default.getHomeSessionId(e)
    })
  }, [e, t]);
  return [a, o]
}