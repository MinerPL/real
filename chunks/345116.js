            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("931138"),
                u = n("476263"),
                c = n("206453"),
                d = n("811151"),
                f = n("427459"),
                p = n("804308");
            class E extends l.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: p.tierPill,
                        children: [(0, i.jsx)(o.default, {
                            className: p.tierPillStar,
                            children: (0, i.jsx)(c.default, {
                                tier: e,
                                className: p.tierPillGem
                            })
                        }), (0, f.getTierName)(e)]
                    })
                }
            }
            let _ = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let r = Math.max(n.premiumSubscriberCount + t, 0),
                    l = (0, f.getGuildTierFromAppliedBoostCount)(r, n.id),
                    s = l - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === s ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.default, {
                        className: s > 0 ? p.levelUpIcon : p.levelDownIcon
                    }), (0, i.jsx)(E, {
                        tier: l
                    })]
                })
            };
            r = class extends l.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(p.subscription, t),
                        children: [(0, i.jsx)(u.default, {
                            guild: e,
                            size: u.default.Sizes.LARGE
                        }), (0, i.jsxs)("div", {
                            className: p.subscriptionInfo,
                            children: [(0, i.jsx)("div", {
                                className: p.guildName,
                                children: e.name
                            }), (0, i.jsxs)("div", {
                                className: p.tierInfo,
                                children: [(0, i.jsx)(E, {
                                    tier: e.premiumTier
                                }), (0, i.jsx)(_, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }