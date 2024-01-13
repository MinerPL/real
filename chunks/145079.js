            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                a = n("102985"),
                o = n("79798"),
                c = n("754474"),
                d = n("158998"),
                f = n("782340"),
                I = n("892802");

            function _(e) {
                if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return c.BotTypes.AI;
                if (e.bot) return c.BotTypes.BOT;
                return null
            }
            let E = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: s,
                    discriminatorClass: a,
                    className: c,
                    usernameClass: d,
                    color: _,
                    botClass: E,
                    showStreamerModeTooltip: S
                } = e;
                return (0, r.jsxs)("div", {
                    className: l(I.info, c),
                    children: [(0, r.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: S,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: l(I.username, d),
                            style: null != _ ? {
                                color: _
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: l(I.infoSpacing, a),
                        children: n
                    }) : void 0, null != i && (0, r.jsx)(o.default, {
                        type: i,
                        className: l(I.infoSpacing, E),
                        verified: s
                    })]
                })
            };
            var S = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: l,
                    showAccountIdentifier: u,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...I
                } = e, S = (0, s.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), T = S || t || n.isNonUserBot(), N = n.toString(), p = d.default.getName(n), m = l ? N : null != i ? i : p, C = n.isPomelo() || f;
                if (C || m !== N) {
                    let e = m === N && C && l ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : m,
                        t = u && e !== "@".concat(N) ? d.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(E, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: _(n),
                        showStreamerModeTooltip: S && e !== p,
                        ...I
                    })
                }
                return (0, r.jsx)(c.default, {
                    name: m,
                    botType: _(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: T || m !== N ? null : null != o ? o : n.discriminator,
                    ...I
                })
            }