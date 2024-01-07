            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                i = a("379607"),
                d = a("290581"),
                r = a("664336"),
                u = a("782340"),
                o = function(e) {
                    let {
                        guildId: t
                    } = e, [a, o] = n.useState(!1), c = n.useCallback(() => {
                        o(e => !e)
                    }, []);
                    return (0, l.jsx)(s.Popout, {
                        shouldShow: a,
                        animation: s.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        ignoreModalClicks: !0,
                        onRequestClose: () => o(!1),
                        renderPopout: function(e) {
                            return (0, l.jsx)(i.default, {
                                guildId: t,
                                ...e
                            })
                        },
                        children: (e, t) => {
                            let {
                                isShown: a
                            } = t;
                            return (0, l.jsx)(r.Icon, {
                                ...e,
                                onClick: c,
                                tooltip: a ? null : u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                                icon: d.default,
                                "aria-label": u.default.Messages.GUILD_FEED_FEATURED_ITEMS,
                                selected: a
                            })
                        }
                    })
                }