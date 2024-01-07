            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("77078"),
                o = n("118503"),
                u = n("427459"),
                s = n("782340"),
                d = n("884737"),
                c = e => {
                    let t, n, r, {
                            guildFeature: c,
                            guild: f,
                            className: E,
                            hideTooltip: _ = !1,
                            tooltipPosition: p = "left",
                            onClick: h
                        } = e,
                        T = f.hasFeature(c),
                        S = (0, u.minimumRequiredTierForGuildFeature)(c);
                    return (T ? (null != S && (r = s.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.default, {
                            className: d.unlockedIcon
                        }), (0, i.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: s.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })) : (null != S && (r = s.default.Messages.CLICK_TO_LEARN_MORE), t = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.default, {
                            className: d.icon
                        }), (0, i.jsx)(a.Heading, {
                            variant: "eyebrow",
                            className: d.description,
                            children: null != S && (0, u.getShortenedTierName)(S)
                        })]
                    })), n = _ || null == r ? (0, i.jsx)("div", {
                        className: l(d.availabilityIndicator, E),
                        children: t
                    }) : (0, i.jsx)(a.Tooltip, {
                        position: p,
                        text: r,
                        children: e => (0, i.jsx)("div", {
                            ...e,
                            className: l(d.availabilityIndicator, E),
                            children: t
                        })
                    }), null == h || T) ? n : (0, i.jsx)(a.Clickable, {
                        onClick: h,
                        className: d.clickable,
                        children: n
                    })
                }