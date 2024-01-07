            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                l = n("812204"),
                s = n("685665"),
                o = n("642906"),
                u = n("85336"),
                c = n("273619"),
                d = n("674158"),
                _ = n("427459"),
                E = n("617917"),
                f = n("49111"),
                p = n("782340"),
                I = n("315706"),
                m = n("926622");
            let h = "premium-guild-subscription-upsell-modal-header";

            function v(e) {
                let {
                    title: t,
                    subtitle: n,
                    image: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: I.header,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        id: h,
                        color: "header-primary",
                        className: m.marginBottom8,
                        children: t
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: I.subtitleText,
                        children: n
                    }), i]
                })
            }
            let A = e => {
                    let {
                        onClose: t,
                        perks: n,
                        perkIntro: i = p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: l
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: I.wrapper,
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: () => {
                                t()
                            }
                        }), (0, r.jsx)(T, {
                            headerProps: l,
                            perkIntro: i
                        }), (0, r.jsx)("div", {
                            className: I.perks,
                            children: n.map((e, t) => {
                                let {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: l
                                } = e;
                                return (0, r.jsx)(d.default, {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: l
                                }, t)
                            })
                        })]
                    })
                },
                T = e => {
                    let {
                        headerProps: t,
                        perkIntro: l
                    } = e;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [null != t ? (0, r.jsx)(v, {
                            ...t
                        }) : (0, r.jsx)("img", {
                            className: I.heroImage,
                            src: n("243704"),
                            alt: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: I.heading,
                            children: l
                        })]
                    })
                },
                S = e => {
                    let {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: i,
                        analyticsSourceLocation: l
                    } = e, s = {
                        section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: f.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != n ? (0, _.boostedGuildTierToAnalyticsObjectType)(n) : null
                    };
                    return (0, r.jsxs)(a.ModalFooter, {
                        className: I.footer,
                        children: [(0, r.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            onClick: () => {
                                i()
                            },
                            children: p.default.Messages.CLOSE
                        }), (0, r.jsx)(E.default, {
                            analyticsLocation: s,
                            analyticsSourceLocation: l,
                            guild: t,
                            targetBoostedGuildTier: n,
                            onClose: () => {
                                i()
                            }
                        })]
                    })
                };

            function g(e) {
                let {
                    analyticsSourceLocation: t,
                    guild: n,
                    targetBoostedGuildTier: i,
                    perks: d,
                    perkIntro: _,
                    headerProps: E,
                    onClose: f,
                    ...p
                } = e, {
                    AnalyticsLocationProvider: I
                } = (0, s.default)(l.default.ACTIVITY_DIRECTORY);
                return (0, r.jsx)(I, {
                    children: (0, r.jsx)(o.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, r.jsx)(a.ModalRoot, {
                            ...p,
                            "aria-labelledby": h,
                            children: (0, r.jsx)(c.default, {
                                hideBreadcrumbs: !0,
                                body: (0, r.jsx)(A, {
                                    onClose: f,
                                    perks: d,
                                    perkIntro: _,
                                    headerProps: E
                                }),
                                footer: (0, r.jsx)(S, {
                                    guild: n,
                                    targetBoostedGuildTier: i,
                                    onClose: f,
                                    analyticsSourceLocation: t
                                }),
                                steps: [u.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: u.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
                })
            }