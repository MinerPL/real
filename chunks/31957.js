"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  i = n("913144"),
  l = n("271938"),
  r = n("42203"),
  o = n("101125"),
  u = n("49111");
let d = "IncomingCallStore",
  c = {
    width: 232,
    height: 315
  },
  f = new Set,
  E = [],
  _ = new Map,
  h = new Set,
  C = 0,
  I = 0,
  T = !1;

function S(e) {
  if (null == e || null == _.get(e)) return !1;
  _.delete(e), (h = new Set(h)).delete(e)
}

function m(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(l.default.getId());
  if (!h.has(t) && a) {
    let e = r.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * h.size;
    _.set(t, {
      channel: e,
      x: C + n,
      y: I + n
    }), (h = new Set(h)).add(t)
  } else {
    if (!h.has(t) || a) return !1;
    S(t)
  }
}! function() {
  let e = s.default.get(d);
  if (null != e) C = +e.x, I = +e.y;
  else {
    let e = n("471671").default.windowSize();
    C = e.width / 2 - c.width / 2, I = e.height / 2 - c.height / 2
  }
}();

function p() {
  T = o.default.getStatus() === u.StatusTypes.DND
}
class A extends a.default.Store {
  initialize() {
    this.waitFor(r.default, o.default), this.syncWith([o.default], p)
  }
  getIncomingCalls() {
    return T ? E : Array.from(_.values())
  }
  getIncomingCallChannelIds() {
    return T ? f : h
  }
  getFirstIncomingCallId() {
    return T ? null : h.values().next().value
  }
  hasIncomingCalls() {
    return !T && h.size > 0
  }
}
A.displayName = "IncomingCallStore";
var g = new A(i.default, {
  CALL_CREATE: m,
  CALL_UPDATE: m,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return S(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return S(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return C = t, I = n, s.default.set(d, {
      x: C,
      y: I
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return S(t.id)
  }
})