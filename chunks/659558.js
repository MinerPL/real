            "use strict";
            n.r(t), n.d(t, {
                getLastUsedVideoBackgroundOption: function() {
                    return a
                }
            }), n("884691"), n("446674");
            var s = n("374363");
            n("697218");
            var i = n("719923"),
                r = n("239448");

            function a(e) {
                var t;
                let n = s.default.settings;
                return function(e, t) {
                    let n = (0, r.getVideoBackgroundOptionFromProto)(e, t.id);
                    return (0, r.isCustomBackgroundOption)(n) && !i.default.canUseCustomBackgrounds(t) ? null : "number" != typeof n || (0, r.isDefaultBackgroundOption)(n) ? n : null
                }(null === (t = n.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, e)
            }