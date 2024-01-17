"use strict";
n.r(t), n.d(t, {
  getGameName: function() {
    return p
  },
  startBroadcastForStream: function() {
    return E
  },
  stopBroadcast: function() {
    return C
  },
  fetchBroadcasterBuckets: function() {
    return S
  },
  maybeFetchBroadcastChannels: function() {
    return g
  }
});
var a = n("872717"),
  r = n("913144"),
  s = n("374014"),
  l = n("766274"),
  i = n("271938"),
  u = n("42203"),
  o = n("546463"),
  d = n("568307"),
  c = n("9759"),
  f = n("194051"),
  h = n("49111");

function p(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
  return null != n ? n.trim() : null
}

function E(e, t) {
  if (null == t) return;
  let {
    canBroadcast: n
  } = c.default.getCurrentConfig({
    location: "start_broadcast_for_stream"
  }, {
    autoTrackExposure: !1
  });
  if (!n) return;
  let a = (0, s.decodeStreamKey)(e),
    {
      ownerId: l,
      channelId: f
    } = a;
  if (null == l || null == f) return;
  let h = i.default.getId();
  if (l !== h) return;
  let E = i.default.getSessionId();
  if (null == E) return;
  let C = u.default.getChannel(f),
    m = null != C && C.isBroadcastChannel();
  if (null == C || l !== C.ownerId || !m) return;
  let S = function(e) {
    var t;
    let n = d.default.getGameForPID(e),
      a = p(n),
      r = o.default.getGameByName(a);
    return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "0"
  }(t);
  null != S && ! function(e) {
    let t = i.default.getId(),
      n = i.default.getSessionId();
    null != t && null != n && r.default.dispatch({
      type: "BROADCAST_START",
      broadcast: e
    })
  }({
    sessionId: E,
    userId: h,
    applicationId: S,
    channelId: C.id,
    streamKey: e
  })
}

function C() {
  r.default.dispatch({
    type: "BROADCAST_STOP"
  })
}

function m(e) {
  let t = {};
  e.forEach(e => {
    t[e] = -1
  }), r.default.dispatch({
    type: "BROADCASTER_BUCKETS_RECEIVED",
    data: t
  })
}
async function S() {
  let e = f.default.getUserIdsToValidate();
  try {
    let t = await a.default.get({
      url: h.Endpoints.USER_BROADCASTS,
      query: {
        user_ids: e
      }
    });
    if (t.ok && null != t.body) {
      let n = {};
      e.forEach(e => {
        var a;
        n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
      }), r.default.dispatch({
        type: "BROADCASTER_BUCKETS_RECEIVED",
        data: n
      })
    } else m(e)
  } catch (t) {
    m(e)
  }
}
async function g() {
  let e = f.default.getBroadcastsToValidateChannels(),
    t = e.filter(e => null == e.viewers).map(e => e.channelId);
  if (0 !== t.length) try {
    let e = await a.default.get({
      url: h.Endpoints.BROADCAST_CHANNELS,
      query: {
        channel_ids: t
      }
    });
    if (e.ok && null != e.body) {
      let t = e.body,
        n = {};
      t.forEach(e => {
        var t;
        let a = f.default.getBroadcastByChannel(e.id).userId,
          r = null !== (t = e.recipients) && void 0 !== t ? t : [];
        n[a] = r.map(e => new l.default(e)).filter(e => e.id !== a)
      }), r.default.dispatch({
        type: "BROADCAST_VIEWERS_UPDATE",
        viewers: n
      })
    }
  } catch (e) {}
}