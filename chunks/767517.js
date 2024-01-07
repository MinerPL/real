            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("872717"),
                n = s("913144"),
                l = s("619443"),
                i = s("239380"),
                r = s("305961"),
                u = s("49111"),
                d = {
                    acceptGuildTemplate: (e, t, s) => (n.default.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT",
                        code: e
                    }), new Promise((d, o) => {
                        a.default.post({
                            url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(e),
                            body: {
                                name: t,
                                icon: s
                            },
                            oldFormErrors: !0
                        }).then(t => {
                            let s = t.body;
                            n.default.dispatch({
                                type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                                code: e,
                                guild: s
                            }), l.default.isConnected() ? r.default.addConditionalChangeListener(() => {
                                if (null != r.default.getGuild(s.id)) return (0, i.transitionToGuild)(s.id), d(s), !1
                            }) : ((0, i.transitionToGuild)(s.id), d(s))
                        }, t => {
                            n.default.dispatch({
                                type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                                code: e
                            }), o(t.body)
                        })
                    }))
                }