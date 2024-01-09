            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("77078"),
                r = n("850068"),
                a = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function h(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), i = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return i || n ? (0, s.jsxs)("div", {
                    className: f.cta,
                    children: [(0, s.jsx)(l.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, s.jsx)(l.Heading, {
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
                    listingsLoaded: E
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: C
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: _
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, a.default)();
                i.useEffect(() => {
                    T && r.fetchSubscriptions()
                }, [T]);
                let m = null == _ ? void 0 : _.id,
                    S = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return E && (null == n || C) ? null == m || null == S || 0 === S.length ? null : (0, s.jsx)("div", {
                    className: f.container,
                    children: S.map(e => (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(h, {
                            listing: e
                        }, e.id), (0, s.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: m,
                            analyticsLocation: p,
                            onComplete: I,
                            forcesTransitionToGuild: v
                        }, e.id)]
                    }, e.id))
                }) : (0, s.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, s.jsx)(l.Spinner, {})
                })
            }