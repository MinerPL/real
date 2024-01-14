"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("446674"),
  a = n("913144"),
  r = n("197881"),
  s = n("492397");
let i = new Set,
  u = {};
class o extends l.default.PersistedStore {
  initialize(e) {
    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
  }
  hasHotspot(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !t && u[e];
    return !(s.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (n || !i.has(e))
  }
  hasHiddenHotspot(e) {
    return i.has(e)
  }
  getHotspotOverride(e) {
    return u[e]
  }
  getState() {
    return {
      hiddenHotspots: i,
      hotspotOverrides: u
    }
  }
}
o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
  hiddenHotspots: null != e ? e : [],
  hotspotOverrides: {}
})];
var c = new o(a.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      hiddenHotspots: t
    } = e;
    i = new Set(t)
  },
  HOTSPOT_HIDE: function(e) {
    let {
      location: t
    } = e;
    if (i.has(t)) return !1;
    i.add(t)
  },
  HOTSPOT_OVERRIDE_SET: function(e) {
    let {
      location: t,
      enabled: n
    } = e;
    u[t] = n
  },
  HOTSPOT_OVERRIDE_CLEAR: function(e) {
    let {
      location: t
    } = e;
    if (null == u[t]) return !1;
    delete u[t]
  }
})