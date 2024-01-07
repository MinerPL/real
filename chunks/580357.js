            "use strict";
            C.r(l), C.d(l, {
                default: function() {
                    return x
                }
            }), C("222007");
            var t, L, s = C("37983"),
                a = C("884691"),
                r = C("414456"),
                d = C.n(r),
                i = C("77078"),
                n = C("449008"),
                u = C("931138"),
                c = C("928564"),
                f = C("888978"),
                o = C("390864"),
                h = C("486952"),
                E = C("49111"),
                R = C("782340"),
                p = C("465835");
            (L = t || (t = {}))[L.PARTNERED = 0] = "PARTNERED", L[L.STAFF = 1] = "STAFF", L[L.VERIFIED = 2] = "VERIFIED", L[L.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", L[L.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", L[L.HUB = 5] = "HUB", L[L.NONE = 6] = "NONE";
            class v extends a.PureComponent {
                renderBadge(e, l, C) {
                    let {
                        className: t,
                        badgeStrokeColor: L,
                        tooltipColor: a = i.Tooltip.Colors.BRAND,
                        tooltipPosition: r,
                        size: c = 16,
                        badgeColor: f,
                        iconClassName: o,
                        flowerStarClassName: h
                    } = this.props, E = function(e) {
                        switch (e) {
                            case 2:
                                return R.default.Messages.GUILD_VERIFIED;
                            case 0:
                                return R.default.Messages.GUILD_PARTNERED;
                            case 3:
                                return R.default.Messages.GUILD_VERIFIED_AND_PARTNERED;
                            case 4:
                                return R.default.Messages.HUB_VERIFIED_DISCORD_HUB;
                            case 5:
                                return R.default.Messages.HUB_DISCORD_HUB;
                            case 1:
                                return R.default.Messages.INTERNAL_EMPLOYEE_ONLY;
                            case 6:
                                return null;
                            default:
                                (0, n.assertNever)(e)
                        }
                    }(e);
                    return (0, s.jsx)(i.Tooltip, {
                        color: a,
                        position: r,
                        text: E,
                        children: a => 5 === e || 4 === e ? (0, s.jsx)("div", {
                            ...a,
                            className: d(C, t),
                            style: {
                                width: c,
                                height: c
                            },
                            children: (0, s.jsx)(l, {
                                className: d(p.icon, o)
                            })
                        }) : (0, s.jsx)(u.default, {
                            ...a,
                            className: d(C, t),
                            flowerStarClassName: h,
                            color: f,
                            stroke: L,
                            size: c,
                            children: (0, s.jsx)(l, {
                                className: d(p.icon, o)
                            })
                        })
                    })
                }
                render() {
                    let {
                        guild: e
                    } = this.props, l = new Set(e.features);
                    return l.has(E.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, o.default, p.staff) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.HUB) ? this.renderBadge(4, c.default, p.verifiedHub) : l.has(E.GuildFeatures.HUB) ? this.renderBadge(5, c.default, p.hub) : l.has(E.GuildFeatures.VERIFIED) && l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(3, h.default, p.verified) : l.has(E.GuildFeatures.VERIFIED) ? this.renderBadge(2, h.default, p.verified) : l.has(E.GuildFeatures.PARTNERED) ? this.renderBadge(0, f.default, p.partnered) : null
                }
            }
            var x = v