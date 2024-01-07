            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var i = s("37983");
            s("884691");
            var r = s("907002"),
                a = s("65597"),
                l = s("77078"),
                o = s("206230"),
                n = s("476263"),
                d = s("617917"),
                u = s("49111"),
                c = s("825697"),
                E = function(e) {
                    let {
                        closeLayer: t,
                        guild: s,
                        isVisible: E
                    } = e, _ = (0, a.default)([o.default], () => o.default.useReducedMotion), T = (0, r.useSpring)({
                        transform: E ? "translateY(-100%)" : "translateY(0%)",
                        opacity: E ? 1 : 0,
                        config: {
                            tension: 120,
                            friction: 12
                        },
                        immediate: _
                    });
                    return (0, i.jsx)(r.animated.div, {
                        className: c.wrapper,
                        style: T,
                        children: (0, i.jsxs)("div", {
                            className: c.innerWrapper,
                            children: [(0, i.jsxs)("div", {
                                className: c.guildInfo,
                                children: [(0, i.jsx)(n.default, {
                                    className: c.guildIcon,
                                    guild: s,
                                    size: n.default.Sizes.LARGER
                                }), (0, i.jsx)(l.Heading, {
                                    className: c.guildName,
                                    variant: "text-lg/bold",
                                    children: s.name
                                })]
                            }), (0, i.jsx)(d.default, {
                                className: c.ctaButton,
                                guild: s,
                                analyticsLocation: {
                                    page: u.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                    section: u.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                                    object: u.AnalyticsObjects.BUTTON_CTA,
                                    objectType: u.AnalyticsObjectTypes.BUY
                                },
                                closeLayer: t,
                                pauseAnimation: !E,
                                size: l.Button.Sizes.LARGE
                            })]
                        })
                    })
                }