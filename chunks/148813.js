            "use strict";
            let n, a, i;
            l.r(e), l.d(e, {
                default: function() {
                    return A
                }
            }), l("222007");
            var s = l("446674"),
                o = l("913144"),
                u = l("959254"),
                c = l("686470"),
                r = l("568307"),
                d = l("964889"),
                p = l("773336"),
                f = l("149190"),
                C = l("49111");
            class h extends s.default.Store {
                initialize() {
                    p.isPlatformEmbedded && f.init(), n = {}, a = new Set, i = []
                }
                getState(t, e) {
                    let l = (0, d.getComboId)(t, e);
                    return n[l]
                }
                isSyncing(t, e) {
                    let l = (0, d.getComboId)(t, e);
                    return a.has(l)
                }
            }
            h.displayName = "CloudSyncStore";
            var A = new h(o.default, {
                GAME_CLOUD_SYNC_START: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, n = (0, d.getComboId)(e, l);
                    a.add(n)
                },
                GAME_CLOUD_SYNC_UPDATE: function(t) {
                    let {
                        state: e
                    } = t;
                    for (let t of Object.keys(e)) n[t] = e[t]
                },
                GAME_CLOUD_SYNC_COMPLETE: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, i = (0, d.getComboId)(e, l);
                    return a.delete(i), n[i] = {
                        type: C.CloudSyncStateTypes.DONE,
                        timestamp: Date.now()
                    }, !0
                },
                GAME_CLOUD_SYNC_CONFLICT: function(t) {
                    let {
                        applicationId: e,
                        branchId: l,
                        next: i,
                        remote: s
                    } = t, o = (0, d.getComboId)(e, l);
                    n[o] = {
                        type: C.CloudSyncStateTypes.CONFLICT,
                        next: i,
                        remote: s
                    }, a.delete(o)
                },
                GAME_CLOUD_SYNC_ERROR: function(t) {
                    let {
                        applicationId: e,
                        branchId: l
                    } = t, i = (0, d.getComboId)(e, l);
                    n[i] = {
                        type: C.CloudSyncStateTypes.ERROR
                    }, a.delete(i)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let t = r.default.getRunningDiscordApplicationIds(),
                        e = i.filter(e => !t.includes(e));
                    for (let t of e) {
                        let e = c.default.getActiveLibraryApplication(t);
                        null != e && o.default.wait(() => {
                            try {
                                u.sync(e.id, e.branchId)
                            } catch (t) {}
                        })
                    }
                    return i = t, !1
                }
            })