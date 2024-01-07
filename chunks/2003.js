            "use strict";
            n.r(t), n.d(t, {
                voiceCategoryExpand: function() {
                    return a
                },
                voiceCategoryCollapse: function() {
                    return s
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "VOICE_CATEGORY_EXPAND",
                    guildId: e,
                    expand: !0
                })
            }

            function s(e) {
                l.default.dispatch({
                    type: "VOICE_CATEGORY_COLLAPSE",
                    guildId: e,
                    expand: !1
                })
            }