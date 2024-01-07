            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("427459"),
                d = s("912702"),
                u = s("49111"),
                c = s("769772");
            class S extends n.Component {
                renderIcon(e) {
                    return e === u.BoostedGuildTiers.NONE ? (0, a.jsx)(d.default, {
                        tier: u.BoostedGuildTiers.TIER_1,
                        className: c.gemWithoutLabel
                    }) : (0, a.jsx)(d.default, {
                        tier: e,
                        className: c.gemWithLabel
                    })
                }
                render() {
                    let {
                        className: e,
                        guildId: t,
                        subscriberCount: s
                    } = this.props, n = (0, o.getGuildTierFromAppliedBoostCount)(s, t), l = (0, o.getNextGuildTierFromAppliedBoostCount)(s, t), d = null != l ? (0, o.getAppliedGuildBoostsRequired)(t)[l] : null, u = null != d && d > 0 ? s / d * 100 : 100;
                    return (0, a.jsx)(r.ProgressCircle, {
                        background: c.progressBackground,
                        percent: u,
                        strokeSize: r.ProgressCircle.StrokeSizes.SMALL,
                        className: i(c.gemIndicatorProgressCircle, e),
                        children: (0, a.jsxs)("div", {
                            className: c.gemIndicatorContainer,
                            children: [this.renderIcon(n), (0, a.jsx)("div", {
                                className: c.tierLabel,
                                children: (0, o.getTierName)(n)
                            })]
                        })
                    })
                }
            }
            var E = S