"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("374014"),
  l = n("223913"),
  s = n("49111"),
  i = n("782340");

function r(e, t, n, r) {
  return null == t || t.state === s.ApplicationStreamStates.ENDED || (0, a.encodeStreamKey)(t) !== (0, a.encodeStreamKey)(e) ? (0, l.getStreamCTAString)(r) : t.ownerId === n ? i.default.Messages.WATCH_STREAM_STREAMING : i.default.Messages.WATCH_STREAM_WATCHING
}