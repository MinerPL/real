            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("429928"),
                a = n("36539"),
                s = n("502651"),
                i = n("671071"),
                r = n("322631"),
                o = n("947297");

            function u(e) {
                return (0, a.default)(e) ? o.XBOX_APPLICATION_ID_PREFIX + e.name : (0, l.default)(e) && null != e.party && null != e.party.id ? i.SpotifyApplication.id : (0, s.default)(e) && null != e.url ? r.TWITCH_APPLICATION_ID_PREFIX + e.url : null != e.application_id ? e.application_id : null
            }