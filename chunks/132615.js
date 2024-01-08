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
                o = n("782340"),
                u = n("760472"),
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
                        className: u.emptyWrapper,
                        children: [(0, a.jsx)("img", {
                            className: u.emptyImage,
                            alt: "",
                            src: n("704176")
                        }), (0, a.jsx)(s.Heading, {
                            className: u.emptyTitle,
                            variant: "heading-xl/semibold",
                            children: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_TITLE.format({
                                guildName: t.name
                            })
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: u.emptySubtitle,
                            children: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_SUBTITLE
                        }), null != d ? (0, a.jsx)(i.WelcomeMessageCTA, {
                            className: u.emptyCTA,
                            iconUrl: n("233135"),
                            header: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_ADD_SERVER,
                            completed: !1,
                            onClick: d
                        }) : null, (0, a.jsx)(i.WelcomeMessageCTA, {
                            className: u.emptyCTA,
                            iconUrl: n("243826"),
                            header: o.default.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_INVITE,
                            completed: !1,
                            onClick: c
                        })]
                    })
                }