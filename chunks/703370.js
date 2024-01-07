            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("913144"),
                s = n("546463"),
                r = n("568307");
            class u extends a.default.Store {
                getGameForPID(e) {
                    var t;
                    if (__OVERLAY__ || null == e) return null;
                    let n = null === (t = r.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                    return s.default.getGameByName(n)
                }
                getGame() {
                    return __OVERLAY__ ? i : null
                }
            }
            u.displayName = "OverlayRunningGameStore";
            var o = new u(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    i = e.currentGame
                }
            })