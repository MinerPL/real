            "use strict";
            n.r(t), n.d(t, {
                fetchGuildAffinities: function() {
                    return l
                }
            });
            var a = n("872717"),
                s = n("913144"),
                i = n("49111");
            let l = () => a.default.get({
                url: i.Endpoints.GUILD_AFFINITIES,
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        guild_affinities: t
                    }
                } = e;
                s.default.dispatch({
                    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
                    guildAffinities: t
                })
            }, () => {
                s.default.dispatch({
                    type: "LOAD_GUILD_AFFINITIES_FAILURE"
                })
            })