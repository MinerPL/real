            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("42203"),
                o = n("305961"),
                u = n("837008"),
                d = n("291444"),
                c = n("847426"),
                f = n("900076"),
                h = n("108314"),
                p = n("49111"),
                m = n("782340"),
                E = n("528392");

            function C(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e, C = (0, d.useSubscriptionListingsForChannel)({
                    guildId: t,
                    channelId: n
                }), g = (0, u.useGroupListingsForGuild)(t), S = (0, u.useSubscriptionsSettings)(t), _ = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), I = null == _ ? void 0 : _.name, T = (0, s.useStateFromStores)([r.default], () => r.default.getChannel(n)), v = l.useMemo(() => {
                    let e = {};
                    for (let t of g)
                        for (let n of t.subscription_listings_ids) e[n] = t.id;
                    return e
                }, [g]);
                return ((0, c.default)({
                    guildId: t,
                    location: p.AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                    relevantSubscriptionListingIds: C.map(e => e.id)
                }), null == _) ? (0, a.jsx)("div", {
                    className: E.spinnerContainer,
                    children: (0, a.jsx)(i.Spinner, {
                        className: E.spinner
                    })
                }) : (0, a.jsxs)(i.ScrollerAuto, {
                    className: E.pageContainer,
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        className: E.joinCtaTitle,
                        children: m.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_UPSELL_PAGE_CTA.format({
                            serverName: I,
                            channelName: null == T ? void 0 : T.name
                        })
                    }), (0, a.jsx)(i.Text, {
                        className: E.joinCtaSubtitle,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: null == S ? void 0 : S.description
                    }), (0, a.jsx)(f.default, {
                        guildId: t,
                        children: C.filter(e => null != v[e.id]).map(e => (0, a.jsx)(h.default, {
                            guildId: t,
                            listingId: e.id,
                            groupListingId: v[e.id],
                            analyticsLocation: p.AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL
                        }, e.id))
                    })]
                })
            }