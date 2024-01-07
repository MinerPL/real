            "use strict";
            a.r(t), a.d(t, {
                fetchActiveChannels: function() {
                    return d
                }
            });
            var l = a("872717"),
                n = a("913144"),
                s = a("599417"),
                i = a("49111");
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                n.default.dispatch({
                    type: "ACTIVE_CHANNELS_FETCH_START",
                    guildId: e
                });
                try {
                    var a, d;
                    let s = await l.default.get({
                            url: i.Endpoints.ACTIVE_CHANNELS(e),
                            query: {
                                channel_limit: t
                            }
                        }),
                        r = null !== (d = null === (a = s.body) || void 0 === a ? void 0 : a.channels) && void 0 !== d ? d : [];
                    return n.default.dispatch({
                        type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                        guildId: e,
                        channels: r
                    }), s
                } catch (t) {
                    throw n.default.dispatch({
                        type: "ACTIVE_CHANNELS_FETCH_FAILURE",
                        guildId: e,
                        error: new s.default(t)
                    }), t
                }
            }