            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            }), l("222007");
            var n = l("446674"),
                a = l("913144");
            let r = new Set,
                i = {};

            function u(e) {
                let {
                    applicationId: t
                } = e;
                r.add(t)
            }

            function o(e) {
                let {
                    applicationId: t
                } = e;
                r.delete(t)
            }
            class s extends n.default.Store {
                get launchingGames() {
                    return r
                }
                get launchableGames() {
                    return i
                }
                isLaunchable(e) {
                    return null != i[e] ? i[e] : (i[e] = !1, a.default.dispatch({
                        type: "CHECK_LAUNCHABLE_GAME",
                        gameId: e
                    }), !1)
                }
            }
            s.displayName = "LaunchableGameStore";
            var c = new s(a.default, {
                GAME_LAUNCHABLE_UPDATE: function(e) {
                    let {
                        gameId: t,
                        isLaunchable: l
                    } = e;
                    i[t] = l
                },
                GAME_CLOUD_SYNC_START: u,
                GAME_LAUNCH_START: u,
                GAME_LAUNCH_SUCCESS: o,
                GAME_LAUNCH_FAIL: o,
                GAME_CLOUD_SYNC_CONFLICT: o,
                GAME_CLOUD_SYNC_ERROR: o,
                GAME_CLOUD_SYNC_COMPLETE: o
            })