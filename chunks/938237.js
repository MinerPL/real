"use strict";
n.r(t), n.d(t, {
  markAnalyticsFeedItemSeen: function() {
    return i
  },
  markAnalyticsFeedItemUnseen: function() {
    return r
  },
  flushAnalyticsFeedItems: function() {
    return l
  }
});
var s = n("913144");

function i(e, t, n) {
  s.default.dispatch({
    type: "ANALYTICS_FEED_ITEM_SEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function r(e, t, n) {
  s.default.dispatch({
    type: "ANALYTICS_FEED_ITEM_UNSEEN",
    id: e,
    feedItemId: t,
    timestampMillis: n
  })
}

function l(e, t) {
  s.default.dispatch({
    type: "ANALYTICS_FEED_FLUSH",
    id: e,
    force: t
  })
}