"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("446674"),
  r = n("913144"),
  s = n("49111");
let a = {},
  o = null;
class l extends i.default.Store {
  get applicationStatistics() {
    return a
  }
  get lastFetched() {
    return o
  }
  getGameDuration(e) {
    let t = a[e];
    return null != t ? t.total_duration : 0
  }
  getLastPlayedDateTime(e) {
    let t = a[e];
    return null != t ? new Date(t.last_played_at).getTime() : null
  }
  hasApplicationStatistic(e) {
    return null != a[e]
  }
  getCurrentUserStatisticsForApplication(e) {
    return a[e]
  }
  getQuickSwitcherScoreForApplication(e) {
    let t = a[e],
      n = 0;
    if (null != t) {
      let e = Date.now(),
        i = new Date(t.last_played_at).getTime(),
        r = Math.floor((e - i) / 864e5),
        s = Math.floor(1e3 * t.total_duration / 36e5);
      0 === r ? n += 50 : r >= 1 && r < 2 ? n += 40 : r >= 2 && r < 4 ? n += 30 : r >= 4 && r < 7 ? n += 20 : r >= 7 && (n += 10), 0 === s ? n += 0 : s >= 1 && s < 12 ? n += 10 : s >= 12 && s < 168 ? n += 20 : s >= 168 && s < 720 ? n += 40 : s >= 720 && (n += 50)
    }
    return n
  }
}
l.displayName = "LibraryApplicationStatisticsStore";
var u = new l(r.default, {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function(e) {
    let {
      statistics: t
    } = e;
    t.forEach(e => {
      a[e.application_id] = e
    }), o = Date.now()
  },
  ACTIVITY_UPDATE_START: function(e) {
    let {
      duration: t,
      applicationId: n,
      distributor: i
    } = e, r = a[n], o = new Date().toISOString(), l = 0, u = 0;
    if (null != r) {
      var c;
      l = r.total_duration, u = null !== (c = r.total_discord_sku_duration) && void 0 !== c ? c : 0
    }
    l += t, i === s.Distributors.DISCORD && (u += t), a[n] = {
      application_id: n,
      total_duration: l,
      last_played_at: o,
      total_discord_sku_duration: u
    }
  },
  LOGOUT: function() {
    a = {}, o = null
  }
})