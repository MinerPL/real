            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("446674"),
                i = n("913144");
            let r = !1;
            class a extends s.default.Store {
                isProtocolRegistered() {
                    return r
                }
            }
            a.displayName = "SpotifyProtocolStore";
            var o = new a(i.default, {
                SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
                    let {
                        isRegistered: t
                    } = e;
                    r = t
                }
            })