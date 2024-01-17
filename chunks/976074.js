"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("77078"),
  l = n("374014"),
  i = n("582415"),
  u = n("271938"),
  o = n("824563"),
  d = n("205817"),
  c = n("782340");

function f(e, t, f) {
  var h;
  let p = (0, r.useStateFromStores)([o.default], () => (0, i.getStreamerApplication)(e, o.default), [e]),
    E = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
    C = null != e ? (0, l.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
    m = null !== (h = d.default.getVideoStats(C)) && void 0 !== h ? h : {},
    S = {
      media_session_id: d.default.getMediaSessionId(C),
      rtc_connection_id: d.default.getRtcConnectionId(C),
      stream_region: d.default.getRegion(C),
      max_viewers: d.default.getMaxViewers(C),
      ...m
    };
  return null == e ? null : (0, a.jsx)(s.MenuItem, {
    id: "report-stream-problem",
    label: c.default.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
    action: () => {
      null == f || f(), null != e && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("485857").then(n.bind(n, "485857"));
        return n => (0, a.jsx)(t, {
          stream: e,
          streamApplication: p,
          isStreamer: E === (null == e ? void 0 : e.ownerId),
          analyticsData: S,
          ...n
        })
      })
    }
  })
}