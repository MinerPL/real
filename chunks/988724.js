            "use strict";
            s.r(t), s.d(t, {
                fetchTopReadChannels: function() {
                    return i
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("49111");

            function i(e) {
                return a.default.get({
                    url: l.Endpoints.GUILD_TOP_READ_CHANNELS(e),
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: s
                    } = t;
                    n.default.dispatch({
                        type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
                        guildId: e,
                        topChannelIds: s
                    })
                })
            }