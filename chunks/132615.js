            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("952999"),
                r = n("49111"),
                u = n("782340"),
                o = n("760472"),
                d = e => {
                    let {
                        guild: t,
                        onAddGuild: d
                    } = e, c = l.useCallback(() => {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("310688").then(n.bind(n, "310688"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                guild: t,
                                source: r.InstantInviteSources.HUB_DIRECTORY,
                                analyticsLocation: {
                                    section: r.AnalyticsSections.HUB_WELCOME_CTA
                                }
                            })
                        })
                    }, [t]);
                    return (0, a.jsxs)("div", {
                        className: o.emptyWrapper,
                        children: [(0, a.jsx)("img", {
                            className: o.emptyImage,
                            alt: "",
                            src: n("704176")
                        }), (0, a.jsx)(s.Heading, {
                            className: o.emptyTitle,
                            variant: "heading-xl/semibold",
                            children: u.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_TITLE.format({
                                guildName: t.name
                            })
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: o.emptySubtitle,
                            children: u.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_SUBTITLE
                        }), null != d ? (0, a.jsx)(i.WelcomeMessageCTA, {
                            className: o.emptyCTA,
                            iconUrl: n("233135"),
                            header: u.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_ADD_SERVER,
                            completed: !1,
                            onClick: d
                        }) : null, (0, a.jsx)(i.WelcomeMessageCTA, {
                            className: o.emptyCTA,
                            iconUrl: n("243826"),
                            header: u.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_INVITE,
                            completed: !1,
                            onClick: c
                        })]
                    })
                }