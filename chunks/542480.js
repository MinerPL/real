            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("77078"),
                l = s("895530"),
                i = s("437825"),
                u = s("36694"),
                o = s("530311"),
                d = s("824326"),
                c = s("833458"),
                _ = s("155207"),
                E = s("781896"),
                I = s("430025"),
                f = s("137783"),
                T = s("439937"),
                S = s("31225"),
                R = s("49111"),
                p = s("782340"),
                A = s("786832");
            let m = [{
                    feature: R.SKUFeatureTypes.SINGLE_PLAYER,
                    getText: () => p.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
                    IconComponent: E.default
                }, {
                    feature: R.SKUFeatureTypes.LOCAL_MULTIPLAYER,
                    getText: () => p.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
                    IconComponent: _.default
                }, {
                    feature: R.SKUFeatureTypes.ONLINE_MULTIPLAYER,
                    getText: () => p.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
                    IconComponent: _.default
                }, {
                    feature: R.SKUFeatureTypes.PVP,
                    getText: () => p.default.Messages.APPLICATION_STORE_PVP,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
                    IconComponent: c.default
                }, {
                    feature: R.SKUFeatureTypes.LOCAL_COOP,
                    getText: () => p.default.Messages.APPLICATION_STORE_LOCAL_COOP,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
                    IconComponent: _.default
                }, {
                    feature: R.SKUFeatureTypes.ONLINE_COOP,
                    getText: () => p.default.Messages.APPLICATION_STORE_ONLINE_COOP,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
                    IconComponent: _.default
                }, {
                    feature: R.SKUFeatureTypes.CROSS_PLATFORM,
                    getText: () => p.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
                    IconComponent: S.default
                }, {
                    feature: R.SKUFeatureTypes.RICH_PRESENCE,
                    getText: () => p.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
                    IconComponent: f.default
                }, {
                    feature: R.SKUFeatureTypes.DISCORD_GAME_INVITES,
                    getText: () => p.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
                    IconComponent: I.default
                }, {
                    feature: R.SKUFeatureTypes.SPECTATOR_MODE,
                    getText: () => p.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
                    IconComponent: i.default
                }, {
                    feature: R.SKUFeatureTypes.CONTROLLER_SUPPORT,
                    getText: () => p.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
                    IconComponent: d.default
                }, {
                    feature: R.SKUFeatureTypes.CLOUD_SAVES,
                    getText: () => p.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
                    IconComponent: o.default
                }, {
                    feature: R.SKUFeatureTypes.SECURE_NETWORKING,
                    getText: () => p.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
                    getTooltip: () => p.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
                    IconComponent: T.default
                }],
                N = e => {
                    let {
                        IconComponent: t,
                        text: s,
                        tooltip: n
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: A.row,
                        children: [(0, a.jsx)(r.Tooltip, {
                            text: n,
                            children: e => (0, a.jsx)(t, {
                                className: A.featureIcon,
                                ...e
                            })
                        }), (0, a.jsx)("span", {
                            className: A.featureText,
                            children: s
                        }), (0, a.jsx)(u.default, {
                            className: A.checkmarkIcon
                        })]
                    })
                };
            class g extends n.PureComponent {
                render() {
                    let {
                        sku: e
                    } = this.props, t = m.filter(t => {
                        let {
                            feature: s
                        } = t;
                        return e.features.has(s)
                    }).map(e => {
                        let {
                            feature: t,
                            IconComponent: s,
                            getText: n,
                            getTooltip: r
                        } = e;
                        return (0, a.jsx)(N, {
                            IconComponent: s,
                            text: n(),
                            tooltip: r()
                        }, t)
                    });
                    return 0 === t.length ? null : (0, a.jsxs)("div", {
                        className: A.features,
                        children: [(0, a.jsx)(l.default, {
                            children: p.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
                        }), t]
                    })
                }
            }
            var P = g