            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("77078"),
                l = n("850068"),
                a = n("598981"),
                o = n("650509"),
                u = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function p(e) {
                let {
                    listing: t
                } = e, n = (0, u.isApplicationGuildSubscription)(t.sku_flags), i = (0, u.isApplicationUserSubscription)(t.sku_flags);
                return i || n ? (0, r.jsxs)("div", {
                    className: f.cta,
                    children: [(0, r.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, r.jsx)(s.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function _(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: u,
                    applicationPrimarySkuId: d,
                    analyticsLocation: _,
                    onComplete: m,
                    forcesTransitionToGuild: E
                } = e, {
                    listingsLoaded: I
                } = (0, o.useFetchListingsForApplication)(u, d), {
                    entitlementsLoaded: h
                } = (0, o.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: C
                } = (0, o.useActiveSubscriptionListingForApplication)(u, n), S = (0, a.default)();
                i.useEffect(() => {
                    S && l.fetchSubscriptions()
                }, [S]);
                let g = null == C ? void 0 : C.id,
                    T = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return I && (null == n || h) ? null == g || null == T || 0 === T.length ? null : (0, r.jsx)("div", {
                    className: f.container,
                    children: T.map(e => (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(p, {
                            listing: e
                        }, e.id), (0, r.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: g,
                            analyticsLocation: _,
                            onComplete: m,
                            forcesTransitionToGuild: E
                        }, e.id)]
                    }, e.id))
                }) : (0, r.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, r.jsx)(s.Spinner, {})
                })
            }