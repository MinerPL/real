            "use strict";
            let s, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("917351"),
                a = n.n(r),
                o = n("446674"),
                d = n("913144"),
                u = n("49111");
            let l = f();

            function f() {
                return {
                    recentCustomStatuses: [],
                    currentDefaultStatus: null
                }
            }
            class _ extends o.default.PersistedStore {
                initialize(e) {
                    l = {
                        ...f(),
                        ...null != e ? e : {}
                    }
                }
                getState() {
                    return l
                }
                getCurrentHangStatus() {
                    return s
                }
                getCustomHangStatus() {
                    return i
                }
                getRecentCustomStatuses() {
                    return l.recentCustomStatuses
                }
                getCurrentDefaultStatus() {
                    return l.currentDefaultStatus
                }
                getHangStatusActivity() {
                    return null == s ? null : {
                        type: u.ActivityTypes.HANG_STATUS,
                        name: "Hang Status",
                        state: s,
                        details: null == i ? void 0 : i.status,
                        emoji: null == i ? void 0 : i.emoji
                    }
                }
            }
            _.displayName = "HangStatusStore", _.persistKey = "HangStatusStore";
            var c = new _(d.default, {
                LOGOUT: function() {
                    l = f()
                },
                UPDATE_HANG_STATUS: function(e) {
                    let {
                        status: t,
                        saveAsDefault: n
                    } = e;
                    s = t, i = null, n && (l.currentDefaultStatus = {
                        status: t,
                        customHangStatus: i,
                        expiresAt: Date.now() + 288e5
                    })
                },
                UPDATE_HANG_STATUS_CUSTOM: function(e) {
                    let {
                        status: t,
                        emoji: n,
                        saveAsDefault: r
                    } = e;
                    s = u.HangStatusTypes.CUSTOM, i = {
                        status: t,
                        emoji: n
                    };
                    let o = [...l.recentCustomStatuses],
                        d = o.findIndex(e => e.status === t && a.isEqual(e.emoji, n)); - 1 !== d ? o.splice(d, 1) : 7 === o.length && o.splice(6, 1), l.recentCustomStatuses = [i, ...o], r && (l.currentDefaultStatus = {
                        status: s,
                        customHangStatus: i,
                        expiresAt: Date.now() + 288e5
                    })
                },
                CLEAR_HANG_STATUS: function(e) {
                    let {
                        saveAsDefault: t
                    } = e;
                    s = null, i = null, t && (l.currentDefaultStatus = {
                        status: null,
                        customHangStatus: null,
                        expiresAt: Date.now() + 288e5
                    })
                }
            })