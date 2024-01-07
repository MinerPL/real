            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("376556"),
                a = n("49111"),
                l = n("450484");

            function s(e) {
                return null != e && e.type === a.ActivityTypes.LISTENING && e.name === i.default.get(a.PlatformTypes.SPOTIFY).name && null != e.party && null != e.party.id && (0, l.isSpotifyParty)(e.party.id)
            }