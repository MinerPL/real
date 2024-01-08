            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("617258"),
                r = n("65597"),
                o = n("77078"),
                u = n("580357"),
                d = n("822825"),
                c = n("49111"),
                E = n("782340"),
                f = n("116658");
            let _ = [18, 18, 16, 16, 14, 12, 10];
            var h = e => {
                let {
                    guildId: t
                } = e, n = (0, r.default)([d.default], () => d.default.getGuild(t));
                if (void 0 === n) return null;
                let s = n.hasFeature(c.GuildFeatures.VERIFIED) || n.hasFeature(c.GuildFeatures.PARTNERED),
                    h = n.toString(),
                    C = n.getIconURL(40, !0),
                    I = null,
                    T = _[_.length - 1];
                if (null == n.icon && null != h) {
                    var S;
                    T = null !== (S = _[(I = (0, l.getAcronym)(h)).length - 1]) && void 0 !== S ? S : _[_.length - 1]
                }
                return (0, a.jsxs)("div", {
                    className: f.container,
                    children: [(0, a.jsxs)("div", {
                        style: {
                            fontSize: T
                        },
                        children: [null != I ? (0, a.jsx)("div", {
                            className: i(f.childWrapper, f.acronym),
                            "aria-hidden": !0,
                            children: I
                        }) : null, null != C ? (0, a.jsx)(o.Avatar, {
                            src: n.getIconURL(40, !0),
                            size: o.AvatarSizes.SIZE_40,
                            "aria-hidden": !0
                        }) : null]
                    }), (0, a.jsxs)("div", {
                        className: f.descriptors,
                        children: [(0, a.jsxs)("div", {
                            className: f.header,
                            children: [s ? (0, a.jsx)(u.default, {
                                guild: n,
                                tooltipPosition: "bottom",
                                tooltipColor: o.Tooltip.Colors.PRIMARY,
                                className: f.guildBadge
                            }) : null, (0, a.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                children: n.toString()
                            })]
                        }), void 0 !== n.approximateMemberCount ? (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: E.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
                                members: n.approximateMemberCount
                            })
                        }) : null]
                    })]
                })
            }