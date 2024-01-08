            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("629109"),
                s = n("990766"),
                r = n("271938"),
                i = n("374014");

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) return;
                let {
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                } = e, d = (0, i.encodeStreamKey)({
                    streamType: n,
                    guildId: l,
                    channelId: u,
                    ownerId: o
                });
                o === r.default.getId() && a.default.setGoLiveSource(null), s.stopStream(d, t)
            }