"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("884691"),
  l = n("714617"),
  s = n.n(l),
  r = n("995008"),
  o = n.n(r),
  i = n("759843"),
  u = n("913144"),
  d = n("42203"),
  c = n("18494"),
  C = n("162771"),
  f = n("599110"),
  T = n("716241"),
  h = n("939011");
let _ = (0, i.trackMaker)({
  analyticEventConfigs: f.AnalyticEventConfigs,
  dispatcher: u.default,
  TRACK_ACTION_NAME: "TRACK"
});

function p(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      disableTrack: !1,
      trackOnInitialLoad: !1
    },
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = a.useRef(),
    r = a.useRef();
  a.useEffect(() => {
    let a = !s(l.current, e);
    a && (l.current = e);
    let u = !s(r.current, n);
    if (u && (r.current = n), !a && !u) return;
    let p = {
      ...e,
      sequenceId: o("impression_")
    };
    return ! function(e) {
      var t, n;
      let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          name: l,
          type: s,
          properties: r
        } = e;
      if (e.type === i.ImpressionTypes.MODAL && null == e.name && (0, h.getImpressionStack)().some(e => {
          var t;
          return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
        })) return;
      (0, h.setCurrentImpression)(e);
      let o = null !== (t = null == r ? void 0 : r.guild_id) && void 0 !== t ? t : C.default.getGuildId(),
        u = null !== (n = null == r ? void 0 : r.channel_id) && void 0 !== n ? n : c.default.getChannelId(o),
        p = (0, f.expandEventProperties)({
          impression_type: s,
          location: (0, h.getLocation)(),
          ...(0, T.collectGuildAnalyticsMetadata)(o),
          ...(0, T.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
          ...r
        });
      if (a) {
        (0, h.setDebugTrackedData)(null, null);
        return
      }
      null != l && null != s && ((0, f.debugLogEvent)(l, p), _(l, p)), (0, h.setDebugTrackedData)(l, p)
    }(p, t.disableTrack), () => {
      null != p && (0, h.cleanupImpression)(p)
    }
  }, t.trackOnInitialLoad ? [] : void 0)
}