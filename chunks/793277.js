            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("450911"),
                l = n("42203"),
                s = n("724210");

            function i(e) {
                if (e !== s.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return null;
                let t = l.default.getChannel(e);
                return null == t ? null : a.default.ensurePrivateChannel(t.recipients)
            }