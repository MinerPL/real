            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("837008"),
                l = n("167109"),
                r = n("176687"),
                o = n("847426"),
                u = n("430780"),
                d = n("904698"),
                c = n("900076"),
                E = n("108314"),
                f = n("337239"),
                _ = n("49111"),
                h = n("782340"),
                C = n("773461"),
                I = e => {
                    var t, n;
                    let {
                        guild: I
                    } = e, T = (0, i.useGroupListingsForGuild)(I.id)[0];
                    (0, o.default)({
                        guildId: I.id,
                        groupListingId: null == T ? void 0 : T.id,
                        location: _.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
                        relevantSubscriptionListingIds: null == T ? void 0 : T.subscription_listings_ids
                    });
                    let {
                        activeSubscription: S
                    } = (0, r.default)(null == T ? void 0 : T.id), N = (0, i.useSubscriptionsSettings)(I.id), A = null == N ? void 0 : N.description, {
                        editStateIds: m
                    } = l.useEditStateIds(null !== (t = null == T ? void 0 : T.id) && void 0 !== t ? t : null, I.id);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(f.default, {
                            title: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
                                serverName: I.toString()
                            }),
                            description: null != A ? A : null,
                            coverImageAsset: null !== (n = null == N ? void 0 : N.cover_image_asset) && void 0 !== n ? n : null,
                            guild: I,
                            children: [null != T ? (0, a.jsx)(u.default, {
                                className: C.pendingPlanChangeNotice,
                                groupListingId: T.id,
                                subscription: S
                            }) : null, (0, a.jsx)(d.default, {
                                subscription: S
                            })]
                        }), (0, a.jsx)(s.HeadingLevel, {
                            children: (0, a.jsx)(c.default, {
                                guildId: I.id,
                                children: m.map(e => {
                                    var t;
                                    return (0, a.jsx)(E.default, {
                                        guildId: I.id,
                                        groupListingId: null !== (t = null == T ? void 0 : T.id) && void 0 !== t ? t : "",
                                        listingId: e,
                                        analyticsLocation: _.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
                                    }, e)
                                })
                            })
                        })]
                    })
                }