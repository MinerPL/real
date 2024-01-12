            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return s
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("748820"),
                o = n("669491");
            let s = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(s.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(s.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(s.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(s.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(s.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: o.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                E = () => (0, r.jsxs)("linearGradient", {
                    id: s.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: o.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                _ = i.memo(function() {
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), f(), E()]
                    })
                }, () => !0);
            var p = _