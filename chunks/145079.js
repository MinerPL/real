            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                i = n("446674"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function p(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let C = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: i,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: p,
                    botClass: C,
                    showStreamerModeTooltip: m
                } = e;
                return (0, l.jsxs)("div", {
                    className: r(h.info, d),
                    children: [(0, l.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: m,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: r(h.username, c),
                            style: null != p ? {
                                color: p
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: r(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, l.jsx)(o.default, {
                        type: a,
                        className: r(h.infoSpacing, C),
                        verified: i
                    })]
                })
            };
            var m = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: r,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), v = m || t || n.isNonUserBot(), g = n.toString(), S = c.default.getName(n), E = r ? g : null != a ? a : S, I = n.isPomelo() || f;
                if (I || E !== g) {
                    let e = E === g && I && r ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : E,
                        t = s && e !== "@".concat(g) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(C, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: p(n),
                        showStreamerModeTooltip: m && e !== S,
                        ...h
                    })
                }
                return (0, l.jsx)(d.default, {
                    name: E,
                    botType: p(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: v || E !== g ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }