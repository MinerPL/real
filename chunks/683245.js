"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983"),
  r = n("884691"),
  s = n("446674"),
  l = n("990766"),
  i = n("374014"),
  u = n("42203"),
  o = n("607391"),
  d = n("782340");
let c = n("729861");

function f(e) {
  let {
    stream: t,
    width: n,
    noArt: f = !1,
    selected: h = !1
  } = e, p = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(t.channelId));
  return r.useEffect(() => {
    (null == p ? void 0 : p.isGuildStageVoice()) && (0, l.closeStream)((0, i.encodeStreamKey)(t), !1)
  }, []), (0, a.jsx)(o.default, {
    artURL: c,
    noArt: f,
    selected: h,
    size: (0, o.getSizeForWidth)(n),
    header: d.default.Messages.STREAM_ENDED,
    onCTAClick: () => (0, l.closeStream)((0, i.encodeStreamKey)(t)),
    callToAction: d.default.Messages.CLOSE_STREAM
  })
}