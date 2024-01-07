            "use strict";
            n.r(e), n.d(e, {
                getLastUsedVideoBackgroundOption: function() {
                    return o
                }
            }), n("884691"), n("446674");
            var i = n("374363");
            n("697218");
            var u = n("719923"),
                r = n("239448");

            function o(t) {
                var e;
                let n = i.default.settings;
                return function(t, e) {
                    let n = (0, r.getVideoBackgroundOptionFromProto)(t, e.id);
                    return (0, r.isCustomBackgroundOption)(n) && !u.default.canUseCustomBackgrounds(e) ? null : "number" != typeof n || (0, r.isDefaultBackgroundOption)(n) ? n : null
                }(null === (e = n.voiceAndVideo) || void 0 === e ? void 0 : e.videoBackgroundFilterDesktop, t)
            }