            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983"),
                r = n("884691"),
                i = n("77078"),
                l = n("850068"),
                a = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function h(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), r = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return r || n ? (0, s.jsxs)("div", {
                    className: f.cta,
                    children: [(0, s.jsx)(i.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, s.jsx)(i.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function p(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: p,
                    onComplete: I,
                    forcesTransitionToGuild: v
                } = e, {
                    listingsLoaded: C
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: E
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: T
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), m = (0, a.default)();
                r.useEffect(() => {
                    m && l.fetchSubscriptions()
                }, [m]);
                let _ = null == T ? void 0 : T.id,
                    S = null == T ? void 0 : null === (t = T.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return C && (null == n || E) ? null == _ || null == S || 0 === S.length ? null : (0, s.jsx)("div", {
                    className: f.container,
                    children: S.map(e => (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(h, {
                            listing: e
                        }, e.id), (0, s.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: _,
                            analyticsLocation: p,
                            onComplete: I,
                            forcesTransitionToGuild: v
                        }, e.id)]
                    }, e.id))
                }) : (0, s.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, s.jsx)(i.Spinner, {})
                })
            }