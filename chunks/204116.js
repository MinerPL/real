            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144");
            n("21121");
            var s = n("138217"),
                i = n("299039"),
                r = n("360191");
            let o = {
                tab: null,
                localItemAcks: {},
                hasNewMentions: !1,
                isDataStale: !1,
                isRefreshing: !1
            };
            class u extends l.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(s.default), null != e) {
                        var t;
                        (o = e).localItemAcks = function(e) {
                            let t = {};
                            for (let [n, l] of Object.entries(e)) Date.now() - l < 7776e6 && (t[n] = l);
                            return t
                        }(null !== (t = o.localItemAcks) && void 0 !== t ? t : {}), o.isDataStale = !0
                    }
                }
                getState() {
                    return o
                }
                getTab() {
                    var e;
                    return null !== (e = o.tab) && void 0 !== e ? e : r.NotificationCenterTabs.ForYou
                }
                isLocalItemAcked(e) {
                    return null != e.local_id && (null != o.localItemAcks[e.local_id] || i.default.age(e.id) > 7776e6)
                }
                hasNewMentions() {
                    return o.hasNewMentions
                }
                isDataStale() {
                    return o.isDataStale
                }
                isRefreshing() {
                    return o.isRefreshing
                }
                shouldReload() {
                    return o.hasNewMentions || o.isDataStale || o.isRefreshing
                }
            }
            u.displayName = "NotificationCenterStore", u.persistKey = "NotificationCenterStore";

            function d() {
                o.hasNewMentions = !1, o.isDataStale = !1, o.isRefreshing = !1
            }
            var c = new u(a.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e
                },
                NOTIFICATION_CENTER_SET_TAB: function(e) {
                    o = {
                        ...o,
                        tab: e.tab
                    }
                },
                NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
                    let {
                        localIds: t
                    } = e;
                    t.forEach(e => {
                        o = {
                            ...o,
                            localItemAcks: {
                                ...o.localItemAcks,
                                [e]: Date.now()
                            }
                        }
                    })
                },
                NOTIFICATION_CENTER_REFRESH: function() {
                    o.isRefreshing = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: d,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: d
            })