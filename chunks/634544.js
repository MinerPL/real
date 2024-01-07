            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("118503"),
                o = s("427459"),
                d = s("782340"),
                u = s("884737"),
                c = e => {
                    let t, s, n, {
                            guildFeature: c,
                            guild: E,
                            className: _,
                            hideTooltip: T = !1,
                            tooltipPosition: I = "left",
                            onClick: S
                        } = e,
                        N = E.hasFeature(c),
                        g = (0, o.minimumRequiredTierForGuildFeature)(c);
                    return (N ? (null != g && (n = d.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.default, {
                            className: u.unlockedIcon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: u.description,
                            children: d.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != g && (n = d.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.default, {
                            className: u.icon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: u.description,
                            children: null != g && (0, o.getShortenedTierName)(g)
                        })]
                    })), s = T || null == n ? (0, a.jsx)("div", {
                        className: l(u.availabilityIndicator, _),
                        children: t
                    }) : (0, a.jsx)(i.Tooltip, {
                        position: I,
                        text: n,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            className: l(u.availabilityIndicator, _),
                            children: t
                        })
                    }), null == S || N) ? s : (0, a.jsx)(i.Clickable, {
                        onClick: S,
                        className: u.clickable,
                        children: s
                    })
                }