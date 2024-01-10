            "use strict";
            n.r(t), n.d(t, {
                useName: function() {
                    return x
                },
                usePriceTier: function() {
                    return j
                },
                useDescription: function() {
                    return y
                },
                useImage: function() {
                    return O
                },
                useRoleIcon: function() {
                    return k
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
                    return U
                },
                useIntangibleBenefits: function() {
                    return w
                },
                useTierEmojiIds: function() {
                    return Y
                },
                useTrialInterval: function() {
                    return W
                },
                useTrialLimit: function() {
                    return V
                },
                useHasChanges: function() {
                    return z
                },
                useHasChangesForEditStateIds: function() {
                    return J
                },
                useSubscriptionPlan: function() {
                    return Z
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
            var l = n("884691"),
                i = n("627445"),
                r = n.n(i),
                s = n("917351"),
                a = n("748820"),
                o = n("509043"),
                u = n("446674"),
                d = n("150021"),
                c = n("851387"),
                f = n("385976"),
                E = n("271560"),
                _ = n("577357"),
                p = n("371358"),
                h = n("837008"),
                S = n("648825"),
                T = n("866595"),
                m = n("432153"),
                C = n("549590"),
                M = n("59767"),
                g = n("679027"),
                v = n("971150"),
                I = n("677795"),
                A = n("49111"),
                L = n("646718");

            function N(e, t, n) {
                let i = (0, v.useEditStateStore)(e => e.setListing),
                    r = l.useCallback(l => {
                        i(e, e => {
                            var i;
                            let r = null !== (i = null == e ? void 0 : e[t]) && void 0 !== i ? i : n,
                                s = "function" == typeof l ? l(r) : l;
                            return Object.assign({}, e, {
                                [t]: s
                            })
                        })
                    }, [i, e, t, n]),
                    s = (0, v.useEditStateStore)(n => {
                        var l;
                        return null === (l = n.listings[e]) || void 0 === l ? void 0 : l[t]
                    }),
                    a = void 0 !== s ? s : n;
                return [a, r]
            }

            function R(e, t) {
                let n = (0, u.useStateFromStores)([S.default], () => S.default.getSubscriptionListing(e));
                return l.useMemo(() => t(n), [n])
            }

            function x(e) {
                let t = R(e, e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : ""
                });
                return N(e, "name", t)
            }

            function j(e) {
                let t = R(e, e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price
                });
                return N(e, "priceTier", t)
            }

            function y(e) {
                let t = R(e, e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : ""
                });
                return N(e, "description", t)
            }

            function O(e, t) {
                let n = R(e, e => {
                    if ((null == e ? void 0 : e.image_asset) != null) return (0, E.getAssetURL)(e.application_id, e.image_asset, t)
                });
                return N(e, "image", n)
            }

            function k(e, t) {
                let n = (0, C.default)(t, e),
                    i = l.useMemo(() => {
                        var e, t;
                        return {
                            icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
                            unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
                        }
                    }, [n]);
                return N(e, "roleIcon", i)
            }

            function F(e, t) {
                let n = (0, C.default)(t, e),
                    i = (0, v.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor
                    }),
                    r = (0, v.useEditStateStore)(t => {
                        var n;
                        return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon
                    });
                return l.useMemo(() => {
                    let e = {
                        ...null != n ? n : g.DEFAULT_PREVIEW_ROLE
                    };
                    if (void 0 !== r) {
                        var t, l;
                        e.icon = null !== (t = r.icon) && void 0 !== t ? t : "", e.unicodeEmoji = null !== (l = r.unicodeEmoji) && void 0 !== l ? l : ""
                    }
                    return void 0 !== i && (e.color = i, e.colorString = (0, o.int2hex)(i)), e
                }, [n, r, i])
            }

            function D(e, t) {
                let n = (0, C.default)(t, e),
                    i = l.useMemo(() => {
                        var e;
                        return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : A.DEFAULT_ROLE_COLOR
                    }, [n]);
                return N(e, "roleColor", i)
            }

            function b(e, t) {
                let n = (0, C.default)(t, e),
                    i = l.useMemo(() => null == n ? v.AllChannelAccessOptions.SOME_CHANNELS_ACCESS : (0, T.isAllChannelsRole)(n) ? v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS : v.AllChannelAccessOptions.SOME_CHANNELS_ACCESS, [n]);
                return N(e, "channelAccessFormat", i)
            }
            let B = [];

            function U(e) {
                let t = R(e, e => null == e ? B : e.role_benefits.benefits.filter(_.isChannelBenefit));
                return N(e, "channelBenefits", t)
            }
            let G = [];

            function w(e) {
                let t = R(e, e => null == e ? G : e.role_benefits.benefits.filter(_.isIntangibleBenefit));
                return N(e, "intangibleBenefits", t)
            }
            let H = new Set;

            function P(e, t) {
                if (0 === e.length) return H;
                let n = e.filter(e => e.roles.includes(t));
                return new Set(n.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }))
            }

            function Y(e, t) {
                let n = (0, C.default)(t, e),
                    i = (0, u.useStateFromStoresArray)([f.default], () => f.default.getGuildEmoji(t), [t]),
                    r = l.useMemo(() => null == n ? H : P(i, n.id), [i, n]);
                return N(e, "tierEmojiIds", r)
            }

            function W(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e),
                    {
                        selectedOption: l
                    } = (0, M.default)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
                return N(e, "trialInterval", null != l ? l : null)
            }

            function V(e) {
                var t;
                let n = (0, h.useSubscriptionTrial)(e);
                return N(e, "trialLimit", null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null)
            }

            function z(e) {
                return (0, v.useEditStateStore)(t => void 0 !== t.listings[e])
            }

            function J(e) {
                return (0, v.useEditStateStore)(t => {
                    for (let n of e)
                        if (void 0 !== t.listings[n]) return !0;
                    return !1
                })
            }

            function Z(e) {
                let t = R(e, e => null == e ? void 0 : e.subscription_plans[0]),
                    [n] = N(e, "priceTier", void 0),
                    i = l.useMemo(() => {
                        var e, l, i, r, s;
                        return {
                            price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                            currency: null !== (l = null == t ? void 0 : t.currency) && void 0 !== l ? l : A.CurrencyCodes.USD,
                            interval: null !== (i = null == t ? void 0 : t.interval) && void 0 !== i ? i : L.SubscriptionIntervalTypes.MONTH,
                            interval_count: null !== (r = null == t ? void 0 : t.interval_count) && void 0 !== r ? r : 1,
                            id: null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : ""
                        }
                    }, [t, n]);
                return [i]
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
            async function q(e) {
                let {
                    guildId: t,
                    editStateId: n
                } = e, l = S.default.getSubscriptionListing(n);
                r(null != l, "listing doesnt exist");
                let i = l.role_id,
                    a = l.id,
                    o = v.useEditStateStore.getState().listings[n];
                r(null != o, "edit state does not exist");
                let {
                    roleColor: u,
                    roleIcon: E,
                    trialLimit: _,
                    trialInterval: h,
                    tierEmojiIds: T
                } = o;
                (void 0 !== u || void 0 !== E) && await c.default.updateRole(t, i, {
                    color: u,
                    icon: null == E ? void 0 : E.icon,
                    unicodeEmoji: null == E ? void 0 : E.unicodeEmoji
                });
                let m = S.default.getSubscriptionTrial(a);
                if ((null != _ || null != h || null != m && null == h) && await p.updateSubscriptionTrial(t, a, {
                        trial: h,
                        max_num_active_trial_users: _
                    }), void 0 !== T) {
                    let e = f.default.getGuildEmoji(t),
                        n = P(e, i),
                        l = (0, s.difference)([...T], [...n]),
                        r = (0, s.difference)([...n], [...T]),
                        a = l.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null != e) return (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: [...e.roles, i]
                            })
                        }),
                        o = r.map(e => f.default.getCustomEmojiById(e)).map(e => {
                            if (null == e) return;
                            let n = e.roles.filter(e => e !== i);
                            return n.length > 0 ? (0, d.updateEmoji)({
                                guildId: t,
                                emojiId: e.id,
                                roles: n
                            }) : (0, d.deleteEmoji)(t, e.id)
                        });
                    await Promise.all([...a, ...o])
                }
            }
            async function X(e) {
                let {
                    guildId: t,
                    editStateId: n,
                    groupListingId: l,
                    onBeforeDispatchNewListing: i
                } = e, s = v.useEditStateStore.getState().listings[n];
                r(null != s, "edit state does not exist");
                let {
                    name: a,
                    description: o,
                    channelBenefits: u,
                    intangibleBenefits: d,
                    priceTier: c,
                    image: f,
                    channelAccessFormat: E
                } = s;
                r(null != a, "no name provided"), r(null != o, "no description provided"), r(null != c, "no priceTier provided"), r(null != f, "no image provided");
                let _ = E === v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS,
                    h = l;
                if (null == h) {
                    let e = await p.createSubscriptionGroupListing(t, {});
                    h = e.id
                }
                null != u && u.length > 0 && await (0, m.createChannelsFromTemplateTierBenefits)(t, u);
                let S = [...null != u ? u : [], ...null != d ? d : []],
                    T = (0, m.getTemplateTierCreationAnalyticsContext)(n, t);
                return p.createSubscriptionListing({
                    guildId: t,
                    groupListingId: h,
                    data: {
                        can_access_all_channels: _,
                        image: f,
                        name: a,
                        description: o,
                        benefits: S,
                        priceTier: c
                    },
                    analyticsContext: T,
                    onBeforeDispatchNewListing: i
                })
            }

            function Q() {
                let [e, t] = l.useState(!1), [n, i] = l.useState(), a = l.useCallback(async e => {
                    let {
                        guildId: n,
                        editStateId: l,
                        groupListingId: a,
                        onBeforeDispatchNewListing: o,
                        onAfterDispatchNewListing: u
                    } = e, d = l, c = S.default.getSubscriptionListing(d);
                    try {
                        if (t(!0), i(void 0), null != c) r(null != a, "groupListingId is null"), await

                        function(e) {
                            var t;
                            let {
                                guildId: n,
                                editStateId: l,
                                groupListingId: i
                            } = e, a = S.default.getSubscriptionListing(l);
                            r(null != a, "listing doesnt exist");
                            let o = v.useEditStateStore.getState().listings[l];
                            r(null != o, "edit state does not exist");
                            let {
                                name: u,
                                description: d,
                                channelBenefits: c,
                                intangibleBenefits: f,
                                priceTier: E,
                                image: h,
                                channelAccessFormat: T
                            } = o, m = {};
                            if (u !== a.name && (m.name = u), d !== a.description && (m.description = d), E !== (null === (t = a.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (m.priceTier = E), null != h && (m.image = h), null != T && (m.can_access_all_channels = T === v.AllChannelAccessOptions.ALL_CHANNELS_ACCESS), null != c || null != f) {
                                let e = a.role_benefits.benefits.filter(_.isChannelBenefit),
                                    t = a.role_benefits.benefits.filter(_.isIntangibleBenefit),
                                    n = [...null != c ? c : e, ...null != f ? f : t];
                                m.benefits = n
                            }
                            return (0, s.isEmpty)(m) ? a : p.updateSubscriptionListing({
                                guildId: n,
                                groupListingId: i,
                                listingId: l,
                                data: m
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
                                onBeforeDispatchNewListing: o
                            });
                            d = e.id, f = l, E = d, v.useEditStateStore.setState(e => ({
                                listings: {
                                    ...e.listings,
                                    [E]: e.listings[f],
                                    [f]: void 0
                                }
                            })), null == u || u(e)
                        }
                        return await q({
                            guildId: n,
                            editStateId: d
                        }), K(d), !0
                    } catch (e) {
                        if (!("getAnyErrorMessage" in e)) throw e;
                        i(e)
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
                    i = (0, h.useSubscriptionListingsForGroup)(e, n),
                    r = (0, v.useEditStateStore)(e => e.editStateIdsForGroup[t]),
                    s = (0, v.useEditStateStore)(e => e.setEditStateIdsForGroup),
                    o = (0, v.useEditStateStore)(e => e.setListing),
                    u = l.useMemo(() => [...i.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }), ...null != r ? r : []], [r, i]),
                    d = l.useCallback(() => {
                        let e = (0, a.v4)();
                        s(t, t => [...null != t ? t : [], e])
                    }, [t, s]),
                    c = l.useCallback(e => {
                        let n = (0, a.v4)();
                        return s(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
                            o(n, () => ({
                                name: t.name,
                                description: t.description,
                                priceTier: t.price_tier,
                                image: t.image,
                                intangibleBenefits: t.additional_perks,
                                channelBenefits: t.channels.map(e => ({
                                    ref_id: e.id,
                                    ref_type: I.GuildRoleSubscriptionBenefitTypes.CHANNEL,
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
                    }, [t, s, o]),
                    f = l.useCallback(e => {
                        s(t, t => (null != t ? t : []).filter(t => t !== e))
                    }, [t, s]);
                return {
                    editStateIds: u,
                    addNewEditStateId: d,
                    addNewEditStateFromTemplate: c,
                    removeEditStateId: f
                }
            }