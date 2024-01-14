"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var s = n("42203"),
  i = n("455079");
let r = new Set,
  a = new Set,
  o = !1;

function d(e) {
  return e.isSpam
}

function u(e) {
  let t = !1;
  if (e.isSpam && !r.has(e.id)) r.add(e.id), t = !0;
  if (!e.isSpam && r.has(e.id)) r.delete(e.id), t = !0;
  if (!e.isSpam && a.has(e.id)) a.delete(e.id), t = !0;
  return t
}

function l() {
  r.clear(), a.clear(), Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
    u(e)
  }), o = !0
}

function f(e) {
  let {
    channelId: t
  } = e;
  a.add(t)
}

function _(e) {
  let {
    channel: t
  } = e;
  return u(t)
}

function c(e) {
  let {
    channels: t
  } = e;
  for (let e of t) u(e)
}

function g(e) {
  let {
    channel: t
  } = e, n = !1;
  return r.has(t.id) && (r.delete(t.id), n = !0), n
}
class m extends i.default {
  takeSnapshot() {
    return {
      version: m.LATEST_SNAPSHOT_VERSION,
      data: Array.from(r)
    }
  }
  getSpamChannelIds() {
    return r
  }
  getSpamChannelsCount() {
    return r.size
  }
  isSpam(e) {
    return r.has(e)
  }
  isAcceptedOptimistic(e) {
    return a.has(e)
  }
  isReady() {
    return o
  }
  constructor() {
    super(), this.loadCache = () => {
      let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
      null != e && (r = new Set(e))
    }, this.registerActionHandlers({
      CONNECTION_OPEN: l,
      CONNECTION_OPEN_SUPPLEMENTAL: l,
      CACHE_LOADED_LAZY: this.loadCache,
      CHANNEL_CREATE: _,
      CHANNEL_UPDATES: c,
      CHANNEL_DELETE: g,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
    }), this.waitFor(s.default)
  }
}
m.displayName = "SpamMessageRequestStore", m.LATEST_SNAPSHOT_VERSION = 1;
var h = new m