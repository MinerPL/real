"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  l = n("913144"),
  u = n("789563");

function a() {
  return !0
}
class r extends i.default.Store {
  initialize() {
    this.waitFor(u.default)
  }
  getExperimentAssignment(e, t) {
    return u.default.getGuildExperimentDescriptor(t, e)
  }
}
r.displayName = "GuildExperimentStore";
var d = new r(l.default, {
  LOGOUT: a,
  LOGIN_SUCCESS: a,
  CONNECTION_OPEN: a,
  EXPERIMENTS_FETCH_SUCCESS: a,
  OVERLAY_INITIALIZE: a,
  CACHE_LOADED: a,
  EXPERIMENTS_FETCH_FAILURE: a,
  EXPERIMENT_REGISTER_LEGACY: a,
  EXPERIMENT_OVERRIDE_BUCKET: a
})