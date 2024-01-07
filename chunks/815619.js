            "use strict";
            a.r(t), a.d(t, {
                useHomeHeader: function() {
                    return A
                },
                default: function() {
                    return D
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("446674"),
                r = a("669491"),
                u = a("77078"),
                o = a("841098"),
                c = a("380710"),
                f = a("592407"),
                m = a("242757"),
                h = a("957255"),
                E = a("40469"),
                g = a("476263"),
                I = a("181114"),
                _ = a("118503"),
                x = a("818643"),
                v = a("315102"),
                S = a("49111"),
                C = a("782340"),
                N = a("53354"),
                p = a("141555"),
                T = a("520609");
            let A = e => {
                let t = n.useMemo(() => null == e ? null : v.default.getGuildHomeHeaderURL({
                    id: e.id,
                    homeHeader: e.homeHeader
                }), [e]);
                return {
                    homeHeaderImage: t,
                    isHomeHeaderImageSet: null != t,
                    homeHeaderScroll: null != t ? 200 : 0
                }
            };

            function j(e) {
                let {
                    guild: t
                } = e, a = () => {
                    f.default.open(t.id, S.GuildSettingsSections.ONBOARDING, void 0, S.GuildSettingsSubsections.SERVER_GUIDE)
                }, n = t.hasFeature(S.GuildFeatures.BANNER);
                return n ? (0, l.jsxs)(u.Button, {
                    className: N.editButton,
                    innerClassName: N.editButtonInner,
                    type: "button",
                    size: u.Button.Sizes.MEDIUM,
                    color: u.Button.Colors.BRAND,
                    onClick: a,
                    children: [(0, l.jsx)(x.default, {
                        height: 16,
                        width: 16,
                        color: r.default.unsafe_rawColors.WHITE_500.css
                    }), C.default.Messages.EDIT_IMAGE]
                }) : (0, l.jsxs)(I.default, {
                    color: u.Button.Colors.GREEN,
                    className: N.editButton,
                    innerClassName: N.editButtonInner,
                    onClick: a,
                    children: [(0, l.jsx)(_.default, {
                        height: 16,
                        width: 16,
                        className: N.premiumUpsellBadge
                    }), C.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
                })
            }
            let M = n.memo(function(e) {
                let {
                    guild: t,
                    titleClassName: n
                } = e, {
                    homeHeaderImage: s,
                    isHomeHeaderImageSet: r
                } = A(t), f = (0, c.useGuildOnboardingSettingsAvailable)(t.id), I = (0, d.useStateFromStores)([h.default], () => (0, m.canViewInviteModal)(h.default, t)), _ = (0, o.default)();
                return (0, l.jsxs)("div", {
                    className: N.header,
                    children: [(0, l.jsxs)("div", {
                        className: N.headerArtWrapper,
                        children: [(0, l.jsx)("div", {
                            className: i(N.headerArt, {
                                [N.headerArtPlaceholder]: !r
                            }),
                            style: {
                                backgroundImage: "url(".concat(r ? s : "dark" === _ ? p : T, ")")
                            }
                        }), f && (0, l.jsx)(j, {
                            guild: t
                        })]
                    }), (0, l.jsx)("div", {
                        className: N.titleWrapper,
                        children: (0, l.jsxs)("div", {
                            className: n,
                            children: [(0, l.jsx)(g.default, {
                                className: N.headerIcon,
                                guild: t,
                                size: g.default.Sizes.XLARGE,
                                active: !0
                            }), (0, l.jsx)(u.HeadingLevel, {
                                children: (0, l.jsxs)("div", {
                                    className: N.headerName,
                                    children: [(0, l.jsx)(u.Heading, {
                                        className: N.headerName,
                                        variant: "heading-xxl/bold",
                                        children: t.name
                                    }), (0, l.jsx)(E.default, {
                                        size: 24,
                                        guild: t,
                                        tooltipPosition: "bottom",
                                        tooltipColor: u.Tooltip.Colors.PRIMARY,
                                        className: N.guildBadge
                                    }), I && (0, l.jsx)(u.Button, {
                                        className: N.inviteButton,
                                        size: u.Button.Sizes.MEDIUM,
                                        color: u.Button.Colors.PRIMARY,
                                        onClick: () => (0, u.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await a.el("310688").then(a.bind(a, "310688"));
                                            return a => (0, l.jsx)(e, {
                                                ...a,
                                                guild: t,
                                                source: S.InstantInviteSources.GUILD_HOME
                                            })
                                        }),
                                        children: C.default.Messages.INSTANT_INVITE
                                    })]
                                })
                            })]
                        })
                    })]
                })
            });
            var D = M