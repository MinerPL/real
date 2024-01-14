"use strict";
e.r(n), e.d(n, {
  getNativeContextMenuChannelAnalytics: function() {
    return u
  }
});
var r = e("18494"),
  i = e("724210");

function u() {
  var t;
  let n = null !== (t = r.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
  return null != n && (0, i.isStaticChannelRoute)(n) ? {
    channel_static_route: n
  } : {
    channel_id: n
  }
}