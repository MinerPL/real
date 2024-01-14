"use strict";
l.r(e), l.d(e, {
  FetchState: function() {
    return a
  },
  default: function() {
    return d
  }
}), l("222007");
var a, i, n = l("446674"),
  I = l("913144");
(i = a || (a = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i[i.ERROR = 3] = "ERROR";
let c = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function u(t) {
  let {
    applicationId: e,
    guildId: l
  } = t;
  null == c.applicationIdToGuildIds[e] && (c.applicationIdToGuildIds[e] = new Set), c.applicationIdToGuildIds[e].add(l), c.applicationIdToGuildIds[e] = new Set(c.applicationIdToGuildIds[e])
}
class o extends n.default.PersistedStore {
  initialize(t) {
    if (null != t)
      for (let e in c.lastFetchTimeMs = t.lastFetchTimeMs, c.nextFetchRetryTimeMs = t.nextFetchRetryTimeMs, c.fetchState = t.fetchState, t.applicationIdToGuildIds) c.applicationIdToGuildIds[e] = new Set(t.applicationIdToGuildIds[e])
  }
  getState() {
    return c
  }
  getGuildIdsForApplication(t) {
    if (null != t) return c.applicationIdToGuildIds[t]
  }
  getLastFetchTimeMs() {
    return c.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return c.nextFetchRetryTimeMs
  }
  getFetchState() {
    return c.fetchState
  }
}
o.displayName = "MyGuildApplicationsStore", o.persistKey = "MyGuildApplicationsStore";
var d = new o(I.default, {
  LOGOUT: function() {
    c.applicationIdToGuildIds = {}, c.lastFetchTimeMs = null, c.nextFetchRetryTimeMs = null, c.fetchState = 0
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
    c.fetchState = 1
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(t) {
    let {
      guildIdToApplicationIds: e
    } = t;
    for (let t in c.fetchState = 2, c.lastFetchTimeMs = Date.now(), c.applicationIdToGuildIds = {}, c.nextFetchRetryTimeMs = null, e)
      for (let l of e[t]) u({
        applicationId: l,
        guildId: t
      })
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(t) {
    let {
      retryAfterSeconds: e
    } = t;
    c.fetchState = 3, null != e && (c.nextFetchRetryTimeMs = Date.now() + 1e3 * e)
  },
  INTEGRATION_CREATE: function(t) {
    let {
      application: e,
      guildId: l
    } = t;
    null != e && u({
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
      null != c.applicationIdToGuildIds[e] && (c.applicationIdToGuildIds[e].delete(l), c.applicationIdToGuildIds[e] = new Set(c.applicationIdToGuildIds[e]))
    }({
      applicationId: e,
      guildId: l
    })
  }
})