            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return y
                }
            }), n("222007");
            var i, r, s = n("627445"),
                a = n.n(s),
                o = n("446674"),
                l = n("407846"),
                u = n("913144"),
                c = n("139170");

            function d(e) {
                return "guild:".concat(e)
            }

            function f(e) {
                return "subscription_listing:".concat(e)
            }

            function E(e) {
                return "application:".concat(e)
            }

            function h(e) {
                return "plan:".concat(e)
            }(r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let p = new l.default(e => [d(e.guild_id), ...e.subscription_listings_ids.map(f)], e => e.id),
                _ = new l.default(e => [E(e.application_id), h(e.subscription_plans[0].id)], e => e.id),
                S = {},
                m = new Set,
                T = {},
                g = {},
                I = {},
                C = {},
                v = new Map;

            function A(e) {
                return p.values(d(e))
            }

            function R(e) {
                var t;
                for (let n of (p.set(e.id, e), v.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) N(n)
            }

            function N(e) {
                _.set(e.id, e)
            }
            let O = [];
            class D extends o.default.Store {
                getSubscriptionGroupListingsForGuildFetchState(e) {
                    var t;
                    return null !== (t = S[e]) && void 0 !== t ? t : 0
                }
                getDidFetchListingForSubscriptionPlanId(e) {
                    return m.has(e)
                }
                getSubscriptionGroupListing(e) {
                    return p.get(e)
                }
                getSubscriptionGroupListingsForGuild(e) {
                    return A(e)
                }
                getSubscriptionGroupListingForSubscriptionListing(e) {
                    let t = p.values(f(e));
                    return a(t.length <= 1, "Found multiple group listings for listing"), t[0]
                }
                getSubscriptionListing(e) {
                    return _.get(e)
                }
                getSubscriptionListingsForGuild(e) {
                    var t;
                    let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
                    return null != n ? _.values(E(n)) : O
                }
                getSubscriptionListingForPlan(e) {
                    let t = _.values(h(e));
                    return a(t.length <= 1, "Found multiple listings for plan"), t[0]
                }
                getSubscriptionSettings(e) {
                    return T[e]
                }
                getSubscriptionTrial(e) {
                    return g[e]
                }
                getMonetizationRestrictions(e) {
                    return I[e]
                }
                getMonetizationRestrictionsFetchState(e) {
                    var t;
                    return null !== (t = C[e]) && void 0 !== t ? t : 0
                }
                getApplicationIdForGuild(e) {
                    return v.get(e)
                }
            }
            D.displayName = "GuildRoleSubscriptionsStore";
            var y = new D(u.default, {
                CONNECTION_OPEN: function() {
                    p.clear(), _.clear(), S = {}, m.clear(), T = {}, g = {}, I = {}, C = {}, v.clear()
                },
                GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
                    let {
                        settings: t
                    } = e;
                    T[t.guild_id] = t
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    for (let e of (S[t] = 1, A(t)))
                        for (let t of (p.delete(e.id), e.subscription_listings_ids)) _.delete(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        groupListings: n,
                        settings: i,
                        subscriptionTrials: r
                    } = e;
                    for (let e of (S[t] = 2, n)) R(e);
                    for (let e of (T[t] = i, r)) g[e.id] = e
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    S[t] = 2
                },
                GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
                    let {
                        listing: t
                    } = e;
                    R(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
                    let {
                        groupListingId: t
                    } = e;
                    p.delete(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
                    let {
                        planId: t
                    } = e;
                    m.add(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
                    let {
                        groupListing: t
                    } = e;
                    R(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
                    let {
                        listing: t,
                        groupListing: n
                    } = e;
                    N(t), R(n)
                },
                GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
                    let {
                        listing: t
                    } = e;
                    N(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
                    let {
                        listingId: t
                    } = e;
                    return _.delete(t)
                },
                GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
                    let {
                        subscriptionTrial: t
                    } = e;
                    g[t.id] = t
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    C[t] = 1
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        restrictions: n
                    } = e;
                    I[t] = n, C[t] = 2
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
                    let {
                        guildId: t
                    } = e;
                    C[t] = 2, I[t] = c.DefaultCreatorMonetizationRestrictions
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
                    let {
                        guildId: t
                    } = e;
                    C[t] = 0
                }
            })