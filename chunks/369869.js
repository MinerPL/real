            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("997289"),
                o = n("697218"),
                c = n("476263"),
                d = n("216422"),
                f = n("719923"),
                T = n("485422"),
                E = n("777003"),
                A = n("49111"),
                _ = n("782340"),
                m = n("125234"),
                S = n("814076");

            function C(e) {
                let {
                    guildName: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: m.guildMemberProfileTooltip,
                    children: [(0, a.jsx)(d.default, {
                        className: m.guildMemberProfileTooltipNitroWheel
                    }), _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                        guildName: t
                    })]
                })
            }

            function N(e) {
                let {
                    guild: t,
                    bio: l,
                    hidePersonalInformation: d,
                    isUsingGuildBio: N,
                    lastSection: g = !1,
                    animateOnHover: p = !1,
                    isHovering: v = !1,
                    lineClamp: I
                } = e, {
                    location: M
                } = (0, u.useAnalyticsContext)(), h = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()), O = f.default.canUsePremiumGuildMemberProfile(h);
                return d || null == l || "" === l ? null : (0, a.jsxs)(E.default, {
                    lastSection: g,
                    children: [(0, a.jsxs)(r.Heading, {
                        variant: "eyebrow",
                        className: S.title,
                        children: [_.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, a.jsx)(r.Tooltip, {
                            color: r.Tooltip.Colors.CUSTOM,
                            tooltipClassName: m.aboutMeGuildIconTooltip,
                            "aria-label": _.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                                guildName: t.name
                            }),
                            text: (0, a.jsx)(C, {
                                guildName: t.name
                            }),
                            children: e => (0, a.jsx)(c.default, {
                                ...e,
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t(), null != h && !O && (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("414242").then(n.bind(n, "414242"));
                                        return t => (0, a.jsx)(e, {
                                            ...t,
                                            source: {
                                                ...M,
                                                object: A.AnalyticsObjects.GUILD_ICON
                                            }
                                        })
                                    })
                                },
                                guild: t,
                                size: c.default.Sizes.SMOL,
                                className: s(m.aboutMeGuildIcon, {
                                    [m.nonPremiumHoverState]: !O
                                })
                            })
                        })]
                    }), (0, a.jsx)(T.default, {
                        userBio: l,
                        animateOnHover: p,
                        isHovering: v,
                        lineClamp: I
                    })]
                })
            }