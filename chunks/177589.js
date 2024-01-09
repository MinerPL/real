            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("429928"),
                s = n("36539"),
                r = n("502651"),
                l = n("671071"),
                a = n("322631"),
                u = n("947297");

            function o(e) {
                return (0, s.default)(e) ? u.XBOX_APPLICATION_ID_PREFIX + e.name : (0, i.default)(e) && null != e.party && null != e.party.id ? l.SpotifyApplication.id : (0, r.default)(e) && null != e.url ? a.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
            }