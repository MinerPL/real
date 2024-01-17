"use strict";
n.r(t), n.d(t, {
  PARTICIPANTS_HEIGHT: function() {
    return h
  },
  useVisibleParticipants: function() {
    return C
  },
  default: function() {
    return g
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n("246846"),
  r = n("271938"),
  o = n("718517"),
  u = n("449008"),
  d = n("679243"),
  c = n("99795"),
  f = n("987162");
let h = 112,
  p = 16 / 9 * h + 8,
  m = 10 * o.default.Millis.SECOND;

function E(e) {
  var t;
  let n = r.default.getId();
  return e.type === c.ParticipantTypes.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
}

function C(e, t) {
  let [n, a] = l.useState(Date.now());
  l.useEffect(() => {
    let e = setTimeout(() => {
      a(Date.now())
    }, m);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let r = l.useRef({}),
    {
      visibleParticipants: o,
      participantTileWidth: d
    } = l.useMemo(() => {
      let n = Date.now(),
        a = (0, s.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case c.ParticipantTypes.ACTIVITY:
              return "\x00".concat(e.sortKey);
            case c.ParticipantTypes.HIDDEN_STREAM:
            case c.ParticipantTypes.STREAM:
              return "\x01".concat((0, i.default)(e.userNick, e.user));
            case c.ParticipantTypes.USER:
              var n;
              let a = "\x05";
              return e.speaking ? a = "\x02" : t - e.lastSpoke < m ? a = "\x03" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (a = "\x04"), "".concat(a).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, i.default)(e.userNick, e.user))
          }
        })(e, n)),
        [l, o] = (0, s.partition)(a, c.isStreamParticipant),
        d = o.findIndex(E),
        f = null; - 1 !== d && (f = o[d], o.splice(d, 1));
      let h = null != f ? e - p - 8 : e,
        C = Math.max(0, Math.min(Math.floor((h - 8) / 132), 12, t.length)),
        g = Math.min((h - 8) / C - 8, p),
        S = Math.max(0, C - l.length),
        _ = l.slice(0, C),
        I = o.slice(0, S),
        T = Array(S);
      if (S > 0) {
        let e = [];
        for (let t of I) {
          let n = r.current[t.id];
          null != n && n < S ? T[n] = t : e.push(t)
        }
        for (let t = 0; t < T.length; t++) {
          if (null != T[t]) continue;
          let n = e.shift();
          if (null == n) break;
          T[t] = n
        }
      }
      let v = T.filter(u.isNotNullish),
        x = (0, s.keyBy)((0, s.range)(v.length), e => v[e].id);
      r.current = x;
      let N = [..._, ...v];
      return null != f && N.push(f), {
        visibleParticipants: N,
        participantTileWidth: g
      }
    }, [e, t, n]);
  return {
    visibleParticipants: o,
    participantTileWidth: d
  }
}

function g(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: l,
    onDoubleClick: s,
    onContextMenu: i,
    onClick: r,
    channel: o,
    inCall: u,
    popoutWindow: c,
    paused: h = !1
  } = e, m = null != c;
  return (0, a.jsx)("div", {
    className: f.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = E(e);
      return (0, a.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : void 0,
        children: (0, a.jsx)(d.default, {
          participant: e,
          selected: l === e.id,
          channel: o,
          className: f.tile,
          fit: d.CallTileFit.COVER,
          onClick: r,
          onDoubleClick: s,
          onContextMenu: i,
          width: t ? p : n,
          inCall: u,
          paused: h,
          inPopout: m
        })
      }, e.id)
    })
  })
}