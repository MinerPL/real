            "use strict";
            n.r(t), n.d(t, {
                useName: function() {
                    return k
                },
                usePriceTier: function() {
                    return x
                },
                useDescription: function() {
                    return j
                },
                useImage: function() {
                    return y
                },
                useRoleIcon: function() {
                    return O
                },
                useRole: function() {
                    return F
                },
                useRoleColor: function() {
                    return D
                },
                useChannelAccessFormat: function() {
                    return b
                },
                useChannelBenefits: function() {
                    return B
                },
                useIntangibleBenefits: function() {
                    return H
                },
                useTierEmojiIds: function() {
                    return W
                },
                useTrialInterval: function() {
                    return Y
                },
                useTrialLimit: function() {
                    return V
                },
                useHasChanges: function() {
                    return z
                },
                useHasChangesForEditStateIds: function() {
                    return Z
                },
                useSubscriptionPlan: function() {
                    return q
                },
                clearEditState: function() {
                    return K
                },
                useCreateOrUpdateListingFromEditState: function() {
                    return Q
                },
                useEditStateIds: function() {
                    return $
                }
            }), n("222007");
            var i = n("884691"),
                l = n("627445"),
                r = n.n(l),
                s = n("917351"),
                a = n("748820"),
                u = n("509043"),
                o = n("446674"),
                d = n("150021"),
                c = n("851387"),
                f = n("385976"),
                E = n("271560"),
                _ = n("577357"),
                p = n("371358"),
                h = n("837008"),
                S = n("648825"),
                m = n("866595"),
                M = n("432153"),
                L = n("549590"),
                A = n("59767"),
                C = n("679027"),
                v = n("971150"),
                g = n("677795"),
                T = n("49111"),
                I = n("646718");

            function N(e, t, n) {
                let l = (0, v.useEditStateStore)(e => e.setListing),
                    r = i.useCallback(i => {
                        l(e, e => {
                            var l;
                            let r = null !== (l = null == e ? void 0 : e[t]) && void 0 !== l ? l : n,
                                s = "function" == typeof i ? i(r) : i;
                            return Object.assign({}, e, {
                                [t]: s
                            })
                        })
                    }, [l, e, t, n]),
                    s = (0, v.useEditStateStore)(n => {
                        var i;
                        return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t]
                    }),
                    a = void 0 !== s ? s : n;
                return [a, r]
            }

            function R(e, t) {
                let n = (0, o.useStateFromStores)([S.default], () => S.default.getSubscriptionListing(e));
                return i.useMemo(() => t(n), [n])
            }

            function k(e) {
                let t = R(e, e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
                });
                return N(e, "name", t)
            }

            function x(e) {
                let t = R(e, e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
                });
                return N(e, "priceTier", t)
            }

            function j(e) {
                let t = R(e, e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
                });
                return N(e, "description", t)
            }

            function y(e, t) {
                let n = R(e, e => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, E.getAssetURL)(e.application_id, e.image_asset, t)
                });
                return N(e, "image", n)
            }

            function O(e, t) {
                let n = (0, L.default)(t, e),
                    l = i.useMemo(() => {
                        var e, t;
                        return {
                            icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
                            unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
                        }
                    }, [n]);
                return N(e, "roleIcon", l)
            }

            function F(e, t) {
                let n = (0, L.default)(t, e),
                    l = (0, v.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
                    }),
                    r = (0, v.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
                    });
                return i.useMemo(() => {
                    let e = {
                        ...null != n ? n : C.DEFAULT_PREVIEW_ROLE
                    };
                    if (void 0 !== r) {
                        var t, i;
                        e.icon = null !== (t = r.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (i = r.unicodeEmoji) && void 0 !== i ? i : ""
                    }
                    return void 0 !== l && (e.color = l, e.colorString = (0, u.int2hex)(l)), e
                }, [n, r, l])
            }

            function D(e, t) {
                let n = (0, L.default)(t, e),
                    l = i.useMemo(() => {
                        var e;
                        return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : T.DEFAULT_ROLE_COLOR
                    }, [n]);
                return N(e, "roleColor", l)
            }

            function b(e, t) {
                let n = (0, L.default)(t, e),
                    l = i.useMemo(() => null == n ? v.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, m.isAllChannelsRole)(n) ? v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : v.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [n]);
                return N(e, "channelAccessFormat", l)
            }
            let U = [];

            function B(e) {
                let t = R(e, e => null == e ? U : e.role_benefits.benefits.filter(_.isChannelBenefit));
                return N(e, "channelBenefits", t)
            }
            let G = [];

            function H(e) {
                let t = R(e, e => null == e ? G : e.role_benefits.benefits.filter(_.isIntangibleBenefit));
                return N(e, "intangibleBenefits", t)
            }
            let w = new Set;

            function P(e, t) {
                if (0 === e.length) return w;
                let n = e.filter(e => e.roles.includes(t));
                return new Set(n.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }

            function W(e, t) {
                let n = (0, L.default)(t, e),
                    l = (0, o.useStateFromStoresArray)([f.default], () => f.default.getGuildEmoji(t), [t]),
                    r = i.useMemo(() => null == n ? w : P(l, n.id), [l, n]);
                return N(e, "tierEmojiIds", r)
            }

            function Y(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e),
                    {
                        selectedOption: i
                    } = (0, A.default)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
                return N(e, "trialInterval", null != i ? i : null)
            }

            function V(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e);
                return N(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
            }

            function z(e) {
                return (0, v.useEditStateStore)(t => void 0 !== t.listings[e])
            }

            function Z(e) {
                return (0, v.useEditStateStore)(t => {
                    for (let n of e)
                        if (void 0 !== t.listings[n]) return !0;
                    return !1
                })
            }

            function q(e) {
                let t = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
                    [n] = N(e, "priceTier", void 0),
                    l = i.useMemo(() => {
                        var e, i, l, r, s;
                        return {
                            price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                            currency: null !== (i = null == t ? void 0 : t.currency) && void 0 !== i ? i : T.CurrencyCodes.USD,
                            interval: null !== (l = null == t ? void 0 : t.interval) && void 0 !== l ? l : I.SubscriptionIntervalTypes.MONTH,
                            interval_count: null !== (r = null == t ? void 0 : t.interval_count) && void 0 !== r ? r : 1,
                            id: null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : ""
                        }
                    }, [t, n]);
                return [l]
            }

            function K(e) {
                var t;
                t = e, v.useEditStateStore.setState(e => ({
                    listings: {
                        ...e.listings,
                        [t]: e.listings.nonexistantEditStateId
                    }
                }))
            }
            async function J(e) {
                let {
                    guildId: t,
                    editStateId: n
                } = e, i = S.default.getSubscriptionListing(n);
                r(null != i, "listing doesnt exist");
                let l = i.role_id,
                    a = i.id,
                    u = v.useEditStateStore.getState().listings[n];
                r(null != u, "edit state does not exist");
                let {
                    roleColor: o,
                    roleIcon: E,
                    trialLimit: _,
                    trialInterval: h,
                    tierEmojiIds: m
                } = u;
                (void 0 !== o || void 0 !== E) && await c.default.updateRole(t, l, {
                    color: o,
                    icon: null == E ? void 0 : E.icon,
                    unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
                });
                let M = S.default.getSubscriptionTrial(a);
                if ((null != _ || null != h || null != M && null == h) && await p.updateSubscriptionTrial(t, a, {
                        trial: h,
                        max_num_active_trial_users: _
                    }), void 0 !== m) {
                    let e = f.default.getGuildEmoji(t),
                        n = P(e, l),
                        i = (0, s.difference)([...m], [...n]),
                        r = (0, s.difference)([...n], [...m]),
                        a = i.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null != e) return (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: [...e.roles, l]
                            })
                        }),
                        u = r.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null == e) return;
                            let n = e.roles.filter(e => e !== l);
                            return n.length > 0 ? (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: n
                            }) : (0, d.deleteEmoji)(t, e.id)
                        });
                    await Promise.all([...a, ...u])
                }
            }
            async function X(e) {
                let {
                    guildId: t,
                    editStateId: n,
                    groupListingId: i,
                    onBeforeDispatchNewListing: l
                } = e, s = v.useEditStateStore.getState().listings[n];
                r(null != s, "edit state does not exist");
                let {
                    name: a,
                    description: u,
                    channelBenefits: o,
                    intangibleBenefits: d,
                    priceTier: c,
                    image: f,
                    channelAccessFormat: E
                } = s;
                r(null != a, "no name provided"), r(null != u, "no description provided"), r(null != c, "no priceTier provided"), r(null != f, "no image provided");
                let _ = E === v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
                    h = i;
                if (null == h) {
                    let e = await p.createSubscriptionGroupListing(t, {});
                    h = e.id
                }
                null != o && o.length > 0 && await (0, M.createChannelsFromTemplateTierBenefits)(t, o);
                let S = [...null != o ? o : [], ...null != d ? d : []],
                    m = (0, M.getTemplateTierCreationAnalyticsContext)(n, t);
                return p.createSubscriptionListing({
                    guildId: t,
                    groupListingId: h,
                    data: {
                        can_access_all_channels: _,
                        image: f,
                        name: a,
                        description: u,
                        benefits: S,
                        priceTier: c
                    },
                    analyticsContext: m,
                    onBeforeDispatchNewListing: l
                })
            }

            function Q() {
                let [e, t] = i.useState(!1), [n, l] = i.useState(), a = i.useCallback(async e => {
                    let {
                        guildId: n,
                        editStateId: i,
                        groupListingId: a,
                        onBeforeDispatchNewListing: u,
                        onAfterDispatchNewListing: o
                    } = e, d = i, c = S.default.getSubscriptionListing(d);
                    try {
                        if (t(!0), l(void 0), null != c) r(null != a, "groupListingId is null"), await

                        function(e) {
                            var t;
                            let {
                                guildId: n,
                                editStateId: i,
                                groupListingId: l
                            } = e, a = S.default.getSubscriptionListing(i);
                            r(null != a, "listing doesnt exist");
                            let u = v.useEditStateStore.getState().listings[i];
                            r(null != u, "edit state does not exist");
                            let {
                                name: o,
                                description: d,
                                channelBenefits: c,
                                intangibleBenefits: f,
                                priceTier: E,
                                image: h,
                                channelAccessFormat: m
                            } = u, M = {};
                            if (o !== a.name && (M.name = o), d !== a.description && (M.description = d), E !== (null === (t = a.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (M.priceTier = E), null != h && (M.image = h), null != m && (M.can_access_all_channels = m === v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != c || null != f) {
                                let e = a.role_benefits.benefits.filter(_.isChannelBenefit),
                                    t = a.role_benefits.benefits.filter(_.isIntangibleBenefit),
                                    n = [...null != c ? c : e, ...null != f ? f : t];
                                M.benefits = n
                            }
                            return (0, s.isEmpty)(M) ? a : p.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: l,
                                listingId: i,
                                data: M
                            })
                        }({
                            guildId: n,
                            editStateId: d,
                            groupListingId: a
                        });
                        else {
                            var f, E;
                            let e = await X({
                                guildId: n,
                                editStateId: d,
                                groupListingId: a,
                                onBeforeDispatchNewListing: u
                            });
                            d = e.id, f = i, E = d, v.useEditStateStore.setState(e => ({
                                listings: {
                                    ...e.listings,
                                    [E]: e.listings[f],
                                    [f]: void 0
                                }
                            })), null == o || o(e)
                        }
                        return await J({
                            guildId: n,
                            editStateId: d
                        }), K(d), !0
                    } catch (e) {
                        if (!("getAnyErrorMessage" in e)) throw e;
                        l(e)
                    } finally {
                        t(!1)
                    }
                }, []);
                return {
                    loading: e,
                    error: n,
                    handleCreateOrUpdateFromEditState: a
                }
            }

            function $(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        includeSoftDeleted: !1
                    },
                    l = (0, h.useSubscriptionListingsForGroup)(e, n),
                    r = (0, v.useEditStateStore)(e => e.editStateIdsForGroup[t]),
                    s = (0, v.useEditStateStore)(e => e.setEditStateIdsForGroup),
                    u = (0, v.useEditStateStore)(e => e.setListing),
                    o = i.useMemo(() => [...l.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), ...null != r ? r : []], [r, l]),
                    d = i.useCallback(() => {
                        let e = (0, a.v4)();
                        s(t, t => [...null != t ? t : [], e])
                    }, [t, s]),
                    c = i.useCallback(e => {
                        let n = (0, a.v4)();
                        return s(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
                            u(n, () => ({
                                name: t.name,
                                description: t.description,
                                priceTier: t.price_tier,
                                image: t.image,
                                intangibleBenefits: t.additional_perks,
                                channelBenefits: t.channels.map(e => ({
                                    ref_id: e.id,
                                    ref_type: g.GuildRoleSubscriptionBenefitTypes.CHANNEL,
                                    description: e.description,
                                    name: e.name,
                                    emoji_name: e.emoji_name
                                })),
                                roleIcon: {
                                    unicodeEmoji: void 0,
                                    icon: t.image
                                },
                                roleColor: t.role_color,
                                usedTemplate: e.category
                            }))
                        }), n
                    }, [t, s, u]),
                    f = i.useCallback(e => {
                        s(t, t => (null != t ? t : []).filter(t => t !== e))
                    }, [t, s]);
                return {
                    editStateIds: o,
                    addNewEditStateId: d,
                    addNewEditStateFromTemplate: c,
                    removeEditStateId: f
                }
            }