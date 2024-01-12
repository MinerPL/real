            "use strict";
            let s;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                r = n("913144"),
                a = n("546463"),
                o = n("568307");
            class d extends i.default.Store {
                getGameForPID(e) {
                    var t;
                    if (__OVERLAY__ || null == e) return null;
                    let n = null === (t = o.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                    return a.default.getGameByName(n)
                }
                getGame() {
                    return __OVERLAY__ ? s : null
                }
            }
            d.displayName = "OverlayRunningGameStore";
            var u = new d(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    s = e.currentGame
                }
            })