            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionsSettings: function() {
                    return c
                },
                updateSubscriptionsSettings: function() {
                    return _
                },
                fetchAllSubscriptionListingsDataForGuild: function() {
                    return E
                },
                createSubscriptionGroupListing: function() {
                    return f
                },
                fetchSubscriptionListingForPlan: function() {
                    return h
                },
                deleteSubscriptionListing: function() {
                    return p
                },
                archiveSubscriptionListing: function() {
                    return T
                },
                updateSubscriptionTrial: function() {
                    return C
                },
                createSubscriptionListing: function() {
                    return S
                },
                updateSubscriptionListing: function() {
                    return I
                },
                fetchMonetizationRestrictions: function() {
                    return g
                }
            }), n("222007");
            var i = n("398183"),
                a = n("913144"),
                l = n("850068"),
                s = n("775433"),
                r = n("716241"),
                u = n("599110"),
                o = n("719726"),
                d = n("49111");
            async function c(e) {
                let t = await o.getGuildRoleSubscriptionsSettings(e);
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                    settings: t
                })
            }
            async function _(e, t) {
                let n = await o.updateGuildRoleSubscriptionsSettings(e, t);
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS",
                    settings: n
                })
            }
            async function E(e) {
                let {
                    includeSoftDeleted: t = !0,
                    countryCode: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS",
                    guildId: e
                });
                try {
                    let [i, s, r] = await Promise.all([o.getGuildRoleSubscriptionGroupListingsForGuild(e, {
                        includeSoftDeleted: t,
                        countryCode: n
                    }), o.getGuildRoleSubscriptionsSettings(e), o.getGuildRoleSubscriptionTrials(e), (0, l.fetchSubscriptions)()]);
                    a.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
                        guildId: e,
                        groupListings: i,
                        settings: s,
                        subscriptionTrials: r
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
                        guildId: e
                    })
                }
            }
            async function f(e, t) {
                let n = await o.createGuildRoleSubscriptionGroupListing(e, t);
                return a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                    listing: n
                }), n
            }
            async function h(e) {
                var t;
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
                    planId: e
                });
                let n = await o.getGuildRoleSubscriptionGroupForSubscriptionPlan(e);
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
                    groupListing: n
                });
                let i = null !== (t = n.subscription_listings) && void 0 !== t ? t : [];
                for (let t of i) t.subscription_plans[0].id === e && await s.fetchSubscriptionPlansForSKU(t.id, void 0, void 0, !0)
            }
            async function p(e, t, n) {
                await o.deleteGuildRoleSubscriptionListing(e, t, n), a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING",
                    listingId: n
                })
            }
            async function T(e, t, n) {
                let i = await o.archiveGuildRoleSubscriptionListing(e, t, n);
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: i
                })
            }
            async function C(e, t, n) {
                let i = await o.updateGuildRoleSubscriptionsTrial(e, t, n);
                a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL",
                    subscriptionTrial: i
                })
            }
            async function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = await o.getGuildRoleSubscriptionGroupListing(e, t, n);
                return a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING",
                    listing: i
                }), i
            }
            async function S(e) {
                let {
                    guildId: t,
                    groupListingId: n,
                    data: i,
                    analyticsContext: l,
                    onBeforeDispatchNewListing: s
                } = e, c = await o.createGuildRoleSubscriptionListing(t, n, i);
                return u.default.track(d.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_CREATED, {
                    role_subscription_listing_id: c.id,
                    role_subscription_group_listing_id: n,
                    template_name: l.templateCategory,
                    has_change_from_template: l.hasChangeFromTemplate,
                    ...(0, r.collectGuildAnalyticsMetadata)(t)
                }), await m(t, n, {
                    includeArchivedListings: !0
                }), null == s || s(c), a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: c
                }), c
            }
            async function I(e) {
                let {
                    guildId: t,
                    listingId: n,
                    groupListingId: i,
                    data: l
                } = e, s = await o.updateGuildRoleSubscriptionListing(t, i, n, l);
                return a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING",
                    listing: s
                }), await m(t, i, {
                    includeArchivedListings: !0
                }), s
            }
            async function g(e) {
                let {
                    signal: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1;
                for (let l = 0; l < 3; l++) try {
                    if (null == t ? void 0 : t.aborted) {
                        a.default.dispatch({
                            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED",
                            guildId: e
                        });
                        return
                    }
                    a.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS",
                        guildId: e
                    });
                    let {
                        restrictions: i
                    } = await o.getGuildMonetizationRestrictions(e, {
                        signal: t
                    });
                    a.default.dispatch({
                        type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
                        guildId: e,
                        restrictions: null != i ? i : []
                    }), n = !0;
                    break
                } catch (e) {
                    await (0, i.sleep)((l + 1) * 1e3)
                }!n && a.default.dispatch({
                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE",
                    guildId: e
                })
            }