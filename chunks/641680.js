"use strict";
n.r(t), n.d(t, {
  getFilteredStickers: function() {
    return r
  }
}), n("424973");
var l = n("866353"),
  i = n("386543");
let r = (e, t, n) => {
  if ("" === e) return null;
  let r = [],
    o = [];
  return (0, i.searchAllStickers)(e).forEach(e => {
    let i = (0, l.getStickerSendability)(e, t, n);
    i === l.StickerSendability.SENDABLE ? r.push(e) : i === l.StickerSendability.SENDABLE_WITH_PREMIUM && o.push(e)
  }), {
    sendable: r,
    sendableWithPremium: o
  }
}