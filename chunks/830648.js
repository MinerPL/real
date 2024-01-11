            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("65597"),
                u = s("77078"),
                o = s("206230"),
                d = s("812204"),
                c = s("685665"),
                _ = s("516322"),
                E = s("441413"),
                I = s("238956"),
                f = s("837899"),
                T = s("425190"),
                S = s("599110"),
                R = s("331358"),
                p = s("49111"),
                A = s("782340"),
                m = s("305224");
            let N = e => {
                    let {
                        isShowingAll: t,
                        onClick: s
                    } = e;
                    return (0, a.jsxs)(u.Clickable, {
                        onClick: s,
                        className: m.customButton,
                        children: [t ? A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(T.default, {
                            className: m.arrow
                        }) : (0, a.jsx)(f.default, {
                            className: m.arrow
                        })]
                    })
                },
                g = e => {
                    let {
                        title: t,
                        description: s,
                        className: n,
                        imageSource: r,
                        imageClassName: i,
                        titleBadge: o,
                        isNew: I = !1,
                        isEarlyAccess: f = !1
                    } = e, {
                        AnalyticsLocationProvider: T,
                        analyticsLocations: S
                    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
                    return (0, a.jsx)(T, {
                        children: (0, a.jsxs)("div", {
                            className: l(m.perkCard, n),
                            children: [I ? (0, a.jsx)(E.default, {
                                className: m.perkCardNewBadge,
                                shouldInheritBackgroundColor: !0,
                                shouldInheritTextColor: !0
                            }) : null, f ? (0, a.jsx)(_.default, {
                                className: m.perkCardEarlyAccessBadge
                            }) : null, (0, a.jsx)("img", {
                                src: r,
                                alt: "",
                                className: l(i, m.perksCardArt)
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsxs)(u.Heading, {
                                    variant: "heading-lg/extrabold",
                                    className: m.perkCardHeading,
                                    children: [t, " ", o]
                                }), (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: m.perkCardDescription,
                                    children: "function" == typeof s ? s(S) : s
                                })]
                            })]
                        })
                    })
                };
            var P = e => {
                let {
                    className: t,
                    isSubscriberNitroHome: s = !1
                } = e, [r, d] = n.useState(!1), _ = (0, R.usePerkCards)({
                    styles: m
                }), E = (0, i.default)([o.default], () => o.default.useReducedMotion), {
                    analyticsLocations: f
                } = (0, c.default)(), T = (0, I.useIsRemixANitroPerk)(), P = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, T ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
                return (0, a.jsxs)("div", {
                    className: l(m.perksContainer, t, {
                        [m.partiallyHidden]: s && !r,
                        [m.subscriberNitroHome]: s,
                        [m.reducedMotion]: E
                    }),
                    children: [(0, a.jsx)(u.Heading, {
                        variant: "heading-xxl/extrabold",
                        className: m.perksTitle,
                        children: s ? A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE
                    }), (0, a.jsx)("div", {
                        className: l(m.perkCardContainer, {
                            [m.perkCardContainerExpanded]: r
                        }),
                        children: P.map(e => null != e && (0, a.jsx)(g, {
                            ...e
                        }, e.title))
                    }), s && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: l({
                                [m.sizeGizmo]: !r,
                                [m.sizeGizmoExpanded]: r
                            }),
                            children: (0, a.jsx)(N, {
                                onClick: () => {
                                    S.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: f,
                                        was_expanded: r
                                    }), d(!r)
                                },
                                isShowingAll: r
                            })
                        }), (0, a.jsx)("div", {
                            className: l(m.cover, {
                                [m.hidden]: r
                            })
                        })]
                    })]
                })
            }