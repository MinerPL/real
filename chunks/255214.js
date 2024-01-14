"use strict";
i.r(t), i.d(t, {
  getEmojiHotrail: function() {
    return a
  },
  default: function() {
    return o
  }
});
var n = i("884691"),
  r = i("115279");

function a(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: i,
    rowSize: n = r.EMOJI_ROW_SIZE
  } = e, a = t.slice(0, n - i.length);
  return {
    visibleTopEmojis: a,
    visibleNewlyAddedEmojis: i,
    allEmojis: a.concat(i)
  }
}

function o(e) {
  return n.useMemo(() => a(e), [e])
}