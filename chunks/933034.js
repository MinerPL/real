            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("568307");

            function r(e) {
                let t, n;
                if (null == e) return {};
                let r = e.sourcePid;
                if (null != r) {
                    let e = i.default.getGameForPID(r);
                    t = null == e ? void 0 : e.name, n = null == e ? void 0 : e.id
                }
                return {
                    soundshare_session: e.soundshareSession,
                    share_game_name: t,
                    share_game_id: n
                }
            }