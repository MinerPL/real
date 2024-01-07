            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("913144");
            let l = !1;
            class s extends i.default.Store {
                isProtocolRegistered() {
                    return l
                }
            }
            s.displayName = "SpotifyProtocolStore";
            var r = new s(a.default, {
                SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
                    let {
                        isRegistered: t
                    } = e;
                    l = t
                }
            })