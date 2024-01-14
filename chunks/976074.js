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
  i = n("374014"),
  l = n("582415"),
  u = n("271938"),
  o = n("824563"),
  d = n("205817"),
  c = n("782340");

function f(e, t, f) {
  var E;
  let h = (0, r.useStateFromStores)([o.default], () => (0, l.getStreamerApplication)(e, o.default), [e]),
    p = (0, r.useStateFromStores)([u.default], () => u.default.getId()),
    S = null != e ? (0, i.encodeStreamKey)(e) : d.default.getActiveStreamKey(),
    _ = null !== (E = d.default.getVideoStats(S)) && void 0 !== E ? E : {},
    C = {
      media_session_id: d.default.getMediaSessionId(S),
      rtc_connection_id: d.default.getRtcConnectionId(S),
      stream_region: d.default.getRegion(S),
      max_viewers: d.default.getMaxViewers(S),
      ..._
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
          streamApplication: h,
          isStreamer: p === (null == e ? void 0 : e.ownerId),
          analyticsData: C,
          ...n
        })
      })
    }
  })
}