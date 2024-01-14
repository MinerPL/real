"use strict";
i.r(t), i.d(t, {
  maybeFetchTopEmojisByGuild: function() {
    return s
  }
});
var n = i("697218"),
  r = i("385976"),
  a = i("26430"),
  o = i("305781");

function s(e) {
  if (null == e) return;
  let t = n.default.getCurrentUser();
  if (null == t) return;
  let i = r.default.getTopEmojisMetadata(e);
  if (null != i) {
    let {
      topEmojisTTL: e
    } = i;
    if (null == e || Date.now() < e) return
  }!a.default.getIsFetching(e) && (0, o.fetchTopEmojis)(e)
}