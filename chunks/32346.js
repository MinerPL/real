            "use strict";
            let l, u;
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("917351"),
                a = n.n(i),
                s = n("446674"),
                r = n("913144"),
                c = n("49111");
            let d = o();

            function o() {
                return {
                    recentCustomStatuses: [],
                    currentDefaultStatus: null
                }
            }
            class f extends s.default.PersistedStore {
                initialize(t) {
                    d = {
                        ...o(),
                        ...null != t ? t : {}
                    }
                }
                getState() {
                    return d
                }
                getCurrentHangStatus() {
                    return l
                }
                getCustomHangStatus() {
                    return u
                }
                getRecentCustomStatuses() {
                    return d.recentCustomStatuses
                }
                getCurrentDefaultStatus() {
                    return d.currentDefaultStatus
                }
                getHangStatusActivity() {
                    return null == l ? null : {
                        type: c.ActivityTypes.HANG_STATUS,
                        name: "Hang Status",
                        state: l,
                        details: null == u ? void 0 : u.status,
                        emoji: null == u ? void 0 : u.emoji
                    }
                }
            }
            f.displayName = "HangStatusStore", f.persistKey = "HangStatusStore";
            var _ = new f(r.default, {
                LOGOUT: function() {
                    d = o()
                },
                UPDATE_HANG_STATUS: function(t) {
                    let {
                        status: e,
                        saveAsDefault: n
                    } = t;
                    l = e, u = null, n && (d.currentDefaultStatus = {
                        status: e,
                        customHangStatus: u,
                        expiresAt: Date.now() + 288e5
                    })
                },
                UPDATE_HANG_STATUS_CUSTOM: function(t) {
                    let {
                        status: e,
                        emoji: n,
                        saveAsDefault: i
                    } = t;
                    l = c.HangStatusTypes.CUSTOM, u = {
                        status: e,
                        emoji: n
                    };
                    let s = [...d.recentCustomStatuses],
                        r = s.findIndex(t => t.status === e && a.isEqual(t.emoji, n)); - 1 !== r ? s.splice(r, 1) : 7 === s.length && s.splice(6, 1), d.recentCustomStatuses = [u, ...s], i && (d.currentDefaultStatus = {
                        status: l,
                        customHangStatus: u,
                        expiresAt: Date.now() + 288e5
                    })
                },
                CLEAR_HANG_STATUS: function(t) {
                    let {
                        saveAsDefault: e
                    } = t;
                    l = null, u = null, e && (d.currentDefaultStatus = {
                        status: null,
                        customHangStatus: null,
                        expiresAt: Date.now() + 288e5
                    })
                }
            })