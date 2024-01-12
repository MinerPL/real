            "use strict";
            n.r(t), n.d(t, {
                useShouldHideGuildPurchaseEntryPoints: function() {
                    return _
                },
                useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
                    return c
                },
                useIsMonetizationReapplicationDisabled: function() {
                    return g
                }
            });
            var s = n("884691"),
                i = n("446674"),
                r = n("763898"),
                a = n("371358"),
                o = n("648825"),
                d = n("305961"),
                u = n("736271"),
                l = n("49111");
            let f = e => {
                    let t = (0, r.default)();
                    s.useEffect(() => {
                        if (null != e && !!e.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) o.default.getMonetizationRestrictionsFetchState(e.id) === o.FetchState.NOT_FETCHED && a.fetchMonetizationRestrictions(e.id, {
                            signal: t
                        })
                    }, [e, t]);
                    let n = null == e ? void 0 : e.id,
                        d = (0, i.useStateFromStoresArray)([o.default], () => {
                            var e;
                            return null !== (e = o.default.getMonetizationRestrictions(null != n ? n : "")) && void 0 !== e ? e : []
                        }),
                        u = (0, i.useStateFromStores)([o.default], () => o.default.getMonetizationRestrictionsFetchState(null != n ? n : "") === o.FetchState.FETCHING);
                    return {
                        restrictions: d,
                        restrictionsLoading: u
                    }
                },
                _ = e => {
                    var t;
                    let n = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
                        {
                            restrictions: s,
                            restrictionsLoading: r
                        } = f(n),
                        a = (null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                        o = !a || (r ? null === (t = null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromShowingGuildPurchaseEntryPoints)(s));
                    return {
                        shouldHideGuildPurchaseEntryPoints: o,
                        restrictionsLoading: r
                    }
                },
                c = e => {
                    var t;
                    let n = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
                        {
                            restrictions: s,
                            restrictionsLoading: r
                        } = f(n),
                        a = null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_DISABLED),
                        o = null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING),
                        _ = a || o || (r ? null === (t = null == n ? void 0 : n.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, u.isRestrictedFromUpdatingCreatorMonetizationSettings)(s));
                    return {
                        shouldRestrictUpdatingCreatorMonetizationSettings: _,
                        restrictionsLoading: r
                    }
                },
                g = e => {
                    let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
                        {
                            restrictions: n,
                            restrictionsLoading: s
                        } = f(t),
                        r = (0, u.isRestrictedFromMonetizationReapplication)(n);
                    return {
                        isMonetizationReapplicationDisabled: r,
                        restrictionsLoading: s
                    }
                }