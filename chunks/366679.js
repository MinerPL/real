            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let s = n("353927").DEFAULT_VOICE_BITRATE;
            class a extends i.default.Store {
                get bitrate() {
                    return s
                }
            }
            a.displayName = "BitRateStore";
            var o = new a(r.default, {
                SET_CHANNEL_BITRATE: function(e) {
                    s = e.bitrate
                }
            })