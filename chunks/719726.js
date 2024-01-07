            "use strict";
            n.r(t), n.d(t, {
                createGuildRoleSubscriptionGroupListing: function() {
                    return r
                },
                createGuildRoleSubscriptionListing: function() {
                    return u
                },
                updateGuildRoleSubscriptionListing: function() {
                    return o
                },
                getGuildRoleSubscriptionGroupListingsForGuild: function() {
                    return d
                },
                getGuildRoleSubscriptionsSettings: function() {
                    return c
                },
                updateGuildRoleSubscriptionsSettings: function() {
                    return _
                },
                getPriceTiers: function() {
                    return E
                },
                getGuildRoleSubscriptionGroupListing: function() {
                    return f
                },
                getGuildRoleSubscriptionGroupForSubscriptionPlan: function() {
                    return h
                },
                deleteGuildRoleSubscriptionListing: function() {
                    return p
                },
                archiveGuildRoleSubscriptionListing: function() {
                    return T
                },
                getGuildRoleSubscriptionTrials: function() {
                    return C
                },
                updateGuildRoleSubscriptionsTrial: function() {
                    return m
                },
                getGuildRoleSubscriptionTrialEligibility: function() {
                    return S
                },
                getGuildMonetizationRestrictions: function() {
                    return I
                },
                fetchHighlightedCreatorGuildDetails: function() {
                    return g
                }
            });
            var i = n("872717"),
                a = n("448993"),
                l = n("49111"),
                s = n("843455");
            let r = async (e, t) => {
                try {
                    let n = await i.default.post({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                        body: t
                    });
                    return n.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, u = async (e, t, n) => {
                let {
                    priceTier: s,
                    ...r
                } = n;
                try {
                    let n = await i.default.post({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
                        body: {
                            ...r,
                            price_tier: s
                        }
                    });
                    return n.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, o = async (e, t, n, s) => {
                let {
                    priceTier: r,
                    ...u
                } = s;
                try {
                    let a = await i.default.patch({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
                        body: {
                            ...u,
                            price_tier: r
                        }
                    });
                    return a.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, d = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        includeSoftDeleted: !1
                    },
                    n = {
                        include_soft_deleted: t.includeSoftDeleted,
                        country_code: t.countryCode
                    };
                try {
                    let t = await i.default.get({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
                        query: n
                    });
                    return t.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, c = async e => {
                let t = await i.default.get({
                    url: l.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e)
                });
                return t.body
            }, _ = async (e, t) => {
                try {
                    let n = await i.default.patch({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
                        body: t
                    });
                    return n.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, E = async e => {
                try {
                    let t = await i.default.get({
                        url: l.Endpoints.PRICE_TIERS,
                        query: {
                            price_tier_type: s.PriceTierTypes.GUILD_ROLE_SUBSCRIPTIONS,
                            guild_id: e
                        }
                    });
                    return t.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, f = async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let a = await i.default.get({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
                        query: {
                            include_draft_listings: n.includeDraftListings,
                            include_archived_listings: n.includeArchivedListings
                        }
                    });
                    return a.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, h = async e => {
                try {
                    let t = await i.default.get({
                        url: l.Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e)
                    });
                    return t.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, p = async (e, t, n) => {
                try {
                    await i.default.delete({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n)
                    })
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, T = async (e, t, n) => {
                try {
                    let a = await i.default.post({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n)
                    });
                    return a.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, C = async e => {
                try {
                    let t = await i.default.get({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(e)
                    });
                    return t.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, m = async (e, t, n) => {
                try {
                    let a = await i.default.patch({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
                        body: n
                    });
                    return a.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, S = async (e, t, n) => {
                try {
                    let a = await i.default.get({
                        url: l.Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n)
                    });
                    return a.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, I = async function(e) {
                let {
                    signal: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    let n = await i.default.get({
                        url: l.Endpoints.CREATOR_MONETIZATION_RESTRICTIONS(e),
                        signal: t
                    });
                    return n.body
                } catch (e) {
                    throw new a.APIError(e)
                }
            }, g = async e => {
                try {
                    var t;
                    let n = await i.default.get({
                        url: l.Endpoints.GUILD_DISCOVERY_SLUG(e)
                    });
                    return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text)
                } catch (e) {
                    throw new a.APIError(e)
                }
            }