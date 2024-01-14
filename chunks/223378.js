"use strict";
n.r(t), n.d(t, {
  useThrottleDurationForChannel: function() {
    return p
  },
  useStageChannelParticipantsListThrottled: function() {
    return m
  }
}), n("424973"), n("222007");
var a, l, s = n("884691"),
  i = n("917351"),
  r = n("446674"),
  o = n("560103"),
  u = n("191145"),
  d = n("334572"),
  c = n("488464"),
  f = n("567469"),
  h = n("998716");

function p(e) {
  let t = (0, f.useStageParticipantsCount)(e, h.StageChannelParticipantNamedIndex.AUDIENCE),
    [n, a] = s.useState(!1);
  return s.useEffect(() => {
    t > 100 ? a(!0) : t < 75 && a(!1)
  }, [t]), n ? 5e3 : 0
}

function m(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = function(e, t, n) {
      let a = (0, r.useStateFromStores)([c.default], () => [e, c.default.getParticipantsVersion(e)], [e], d.isVersionEqual),
        l = (0, r.useStateFromStores)([u.default], () => u.default.getSelectedParticipantId(e), [e]);
      return s.useMemo(() => {
        let s = [],
          r = [],
          o = -1,
          u = [];
        if (n) {
          let t = c.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER);
          for (let e of t)
            if (e.type === h.StageChannelParticipantTypes.STREAM) e.id !== l && u.push(e), o++;
            else break
        }
        let d = (e, t, n) => {
            let a = n ? e.filter((e, t) => e.id !== l && t > o) : e,
              u = (0, i.chunk)(a, t);
            r.push(u), s.push(u.length)
          },
          f = null != l ? c.default.getParticipant(e, l) : null;
        return (null == f ? void 0 : f.speaker) ? d([f], 1, !1) : d([], 1, !1), [h.StageChannelParticipantNamedIndex.SPEAKER, h.StageChannelParticipantNamedIndex.AUDIENCE].forEach(e => {
          d(c.default.getMutableParticipants(a[0], e), t[e], e === h.StageChannelParticipantNamedIndex.SPEAKER)
        }), d(u, 1, !1), [s, r]
      }, [a, t, l, n, e])
    }(e, t, a),
    [f, p] = l,
    [m, E] = (0, o.useThrottledState)(l, n, [t[h.StageChannelParticipantNamedIndex.AUDIENCE]]),
    C = [f[a ? 3 : 0], f[1], m[2]],
    g = [p[a ? 3 : 0], p[1], E[2]];
  return [C, g]
}(l = a || (a = {}))[l.SELECTED = 0] = "SELECTED", l[l.SPEAKER = 1] = "SPEAKER", l[l.AUDIENCE = 2] = "AUDIENCE", l[l.MEDIA = 3] = "MEDIA"