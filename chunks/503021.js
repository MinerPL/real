            "use strict";
            a.r(t), a.d(t, {
                fetchGuildForPopout: function() {
                    return i
                }
            });
            var l = a("872717"),
                n = a("913144"),
                s = a("49111");
            async function i(e) {
                n.default.dispatch({
                    type: "GUILD_POPOUT_FETCH_START",
                    guildId: e
                });
                try {
                    let t = await l.default.get({
                        url: s.Endpoints.GUILD_PREVIEW(e),
                        oldFormErrors: !0
                    });
                    n.default.dispatch({
                        type: "GUILD_POPOUT_FETCH_SUCCESS",
                        guildId: e,
                        guild: t.body
                    })
                } catch (t) {
                    n.default.dispatch({
                        type: "GUILD_POPOUT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }