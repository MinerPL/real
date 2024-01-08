            "use strict";
            n.r(t), n.d(t, {
                getLastUsedVideoBackgroundOption: function() {
                    return s
                }
            }), n("884691"), n("446674");
            var i = n("374363");
            n("697218");
            var a = n("719923"),
                l = n("239448");

            function s(e) {
                var t;
                let n = i.default.settings;
                return function(e, t) {
                    let n = (0, l.getVideoBackgroundOptionFromProto)(e, t.id);
                    return (0, l.isCustomBackgroundOption)(n) && !a.default.canUseCustomBackgrounds(t) ? null : "number" != typeof n || (0, l.isDefaultBackgroundOption)(n) ? n : null
                }(null === (t = n.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, e)
            }