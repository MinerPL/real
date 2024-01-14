"use strict";
n.r(t), n.d(t, {
  useGuildHasLiveChannelNotice: function() {
    return u
  }
});
var a = n("446674"),
  s = n("834052"),
  i = n("170183"),
  l = n("42203"),
  r = n("824650"),
  o = n("534222");

function u(e) {
  var t;
  let n = (0, i.default)(e),
    u = l.default.getChannel(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
    d = (0, a.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(null == u ? void 0 : u.id), [u]),
    c = (0, o.useGuildActiveEvent)(e),
    {
      isStageNoticeHidden: E,
      isEventNoticeHidden: f
    } = (0, a.useStateFromStoresObject)([r.default], () => ({
      isStageNoticeHidden: r.default.isLiveChannelNoticeHidden({
        stageId: null == d ? void 0 : d.id
      }),
      isEventNoticeHidden: r.default.isLiveChannelNoticeHidden({
        eventId: null == c ? void 0 : c.id
      })
    }), [d, c]);
  if (null != c) return null != d ? !E : !f;
  return null != d && !E
}