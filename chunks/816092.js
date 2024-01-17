"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("446674"),
  s = n("913144"),
  l = n("42203");
let a = {},
  r = a;

function d() {
  Object.keys(r).forEach(e => {
    null == l.default.getChannel(e) && delete r[e]
  })
}
class h extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(l.default), r = null != e ? e : a
  }
  getState() {
    return r
  }
  getCollapsed() {
    return r
  }
  isCollapsed(e) {
    return r[e] || !1
  }
}
h.displayName = "CollapsedVoiceChannelStore", h.persistKey = "collapsedChannels";
var u = new h(s.default, {
  CONNECTION_OPEN: d,
  OVERLAY_INITIALIZE: d,
  CHANNEL_COLLAPSE: function(e) {
    let {
      channelId: t
    } = e;
    r[t] ? delete r[t] : r[t] = !0, r = {
      ...r
    }
  }
})