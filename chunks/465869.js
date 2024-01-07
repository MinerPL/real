            "use strict";
            n.r(t), n.d(t, {
                useShouldHideGuildPurchaseEntryPoints: function() {
                    return _
                },
                useShouldRestrictUpdatingCreatorMonetizationSettings: function() {
                    return E
                },
                useIsMonetizationReapplicationDisabled: function() {
                    return f
                }
            });
            var i = n("884691"),
                a = n("446674"),
                l = n("763898"),
                s = n("371358"),
                r = n("648825"),
                u = n("305961"),
                o = n("736271"),
                d = n("49111");
            let c = e => {
                    let t = (0, l.default)();
                    i.useEffect(() => {
                        if (null != e && !!e.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) r.default.getMonetizationRestrictionsFetchState(e.id) === r.FetchState.NOT_FETCHED && s.fetchMonetizationRestrictions(e.id, {
                            signal: t
                        })
                    }, [e, t]);
                    let n = null == e ? void 0 : e.id,
                        u = (0, a.useStateFromStoresArray)([r.default], () => {
                            var e;
                            return null !== (e = r.default.getMonetizationRestrictions(null != n ? n : "")) && void 0 !== e ? e : []
                        }),
                        o = (0, a.useStateFromStores)([r.default], () => r.default.getMonetizationRestrictionsFetchState(null != n ? n : "") === r.FetchState.FETCHING);
                    return {
                        restrictions: u,
                        restrictionsLoading: o
                    }
                },
                _ = e => {
                    var t;
                    let n = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            restrictions: i,
                            restrictionsLoading: l
                        } = c(n),
                        s = (null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                        r = !s || (l ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, o.isRestrictedFromShowingGuildPurchaseEntryPoints)(i));
                    return {
                        shouldHideGuildPurchaseEntryPoints: r,
                        restrictionsLoading: l
                    }
                },
                E = e => {
                    var t;
                    let n = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            restrictions: i,
                            restrictionsLoading: l
                        } = c(n),
                        s = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_DISABLED),
                        r = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING),
                        _ = s || r || (l ? null === (t = null == n ? void 0 : n.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || void 0 === t || t : (0, o.isRestrictedFromUpdatingCreatorMonetizationSettings)(i));
                    return {
                        shouldRestrictUpdatingCreatorMonetizationSettings: _,
                        restrictionsLoading: l
                    }
                },
                f = e => {
                    let t = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            restrictions: n,
                            restrictionsLoading: i
                        } = c(t),
                        l = (0, o.isRestrictedFromMonetizationReapplication)(n);
                    return {
                        isMonetizationReapplicationDisabled: l,
                        restrictionsLoading: i
                    }
                }