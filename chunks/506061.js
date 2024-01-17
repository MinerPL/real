"use strict";
l.r(e), l.d(e, {
  FetchState: function() {
    return a
  },
  default: function() {
    return T
  }
}), l("222007");
var a, i, n = l("446674"),
  I = l("913144"),
  c = l("718517");
(i = a || (a = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
let u = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function o(t) {
  let {
    applicationId: e,
    guildId: l
  } = t;
  null == u.applicationIdToGuildIds[e] && (u.applicationIdToGuildIds[e] = new Set), u.applicationIdToGuildIds[e].add(l), u.applicationIdToGuildIds[e] = new Set(u.applicationIdToGuildIds[e])
}
class d extends n.default.PersistedStore {
  initialize(t) {
    if (null != t)
      for (let e in u.lastFetchTimeMs = t.lastFetchTimeMs, u.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, u.fetchState = t.fetchState, t.applicationIdToGuildIds) u.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
  }
  getState() {
    return u
  }
  getGuildIdsForApplication(t) {
    if (null != t) return u.applicationIdToGuildIds[t]
  }
  getLastFetchTimeMs() {
    return u.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return u.nextFetchRetryTimeMs
  }
  getFetchState() {
    return u.fetchState
  }
}
d.displayName = "MyGuildApplicationsStore", d.persistKey = "MyGuildApplicationsStore";
var T = new d(I.default, {
  LOGOUT: function() {
    u.applicationIdToGuildIds = {}, u.lastFetchTimeMs = null, u.nextFetchRetryTimeMs = null, u.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    u.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
    let {
      guildIdToApplicationIds: e
    } = t;
    for (let t in u.fetchState = 2, u.lastFetchTimeMs = Date.now(), u.applicationIdToGuildIds = {}, u.nextFetchRetryTimeMs = null, e)
      for (let l of e[t]) o({
        applicationId: l,
        guildId: t
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
    let {
      retryAfterSeconds: e
    } = t;
    if (u.fetchState = 3, null != e) {
      let t = e * c.default.Millis.SECOND;
      u.nextFetchRetryTimeMs = Date.now() + t
    }
  },
  INTEGRATION_CREATE: function(t) {
    let {
      application: e,
      guildId: l
    } = t;
    null != e && o({
      applicationId: e.id,
      guildId: l
    })
  },
  INTEGRATION_DELETE: function(t) {
    let {
      applicationId: e,
      guildId: l
    } = t;
    null != e && ! function(t) {
      let {
        applicationId: e,
        guildId: l
      } = t;
      null != u.applicationIdToGuildIds[e] && (u.applicationIdToGuildIds[e].delete(l), u.applicationIdToGuildIds[e] = new Set(u.applicationIdToGuildIds[e]))
    }({
      applicationId: e,
      guildId: l
    })
  }
})