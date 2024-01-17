"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("446674"),
  l = n("913144");
n("21121");
var s = n("138217"),
  i = n("718517"),
  r = n("299039"),
  o = n("360191");
let u = 90 * i.default.Millis.DAY,
  d = {
    tab: null,
    localItemAcks: {},
    hasNewMentions: !1,
    isDataStale: !1,
    isRefreshing: !1
  };
class c extends a.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(s.default), null != e) {
      var t;
      (d = e).localItemAcks = function(e) {
        let t = {};
        for (let [n, a] of Object.entries(e)) Date.now() - a < u && (t[n] = a);
        return t
      }(null !== (t = d.localItemAcks) && void 0 !== t ? t : {}), d.isDataStale = !0
    }
  }
  getState() {
    return d
  }
  getTab() {
    var e;
    return null !== (e = d.tab) && void 0 !== e ? e : o.NotificationCenterTabs.ForYou
  }
  isLocalItemAcked(e) {
    return null != e.local_id && (null != d.localItemAcks[e.local_id] || r.default.age(e.id) > u)
  }
  hasNewMentions() {
    return d.hasNewMentions
  }
  isDataStale() {
    return d.isDataStale
  }
  isRefreshing() {
    return d.isRefreshing
  }
  shouldReload() {
    return d.hasNewMentions || d.isDataStale || d.isRefreshing
  }
}
c.displayName = "NotificationCenterStore", c.persistKey = "NotificationCenterStore";

function f() {
  d.hasNewMentions = !1, d.isDataStale = !1, d.isRefreshing = !1
}
var h = new c(l.default, {
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e
  },
  NOTIFICATION_CENTER_SET_TAB: function(e) {
    d = {
      ...d,
      tab: e.tab
    }
  },
  NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
    let {
      localIds: t
    } = e;
    t.forEach(e => {
      d = {
        ...d,
        localItemAcks: {
          ...d.localItemAcks,
          [e]: Date.now()
        }
      }
    })
  },
  NOTIFICATION_CENTER_REFRESH: function() {
    d.isRefreshing = !0
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: f,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: f
})