            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return S
                },
                useSuggestedUnusedPrices: function() {
                    return m
                },
                announceCreateTemplateChannels: function() {
                    return L
                },
                announceDeleteTemplateChannels: function() {
                    return A
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return C
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return v
                },
                isEligibleForNewBadge: function() {
                    return g
                }
            }), n("424973"), n("222007"), n("462568");
            var i = n("642852"),
                l = n.n(i),
                r = n("65597"),
                s = n("913144"),
                a = n("437140"),
                u = n("42203"),
                o = n("808388"),
                d = n("648825"),
                c = n("971150"),
                f = n("65722"),
                E = n("736880"),
                _ = n("49111"),
                p = n("724210");
            l.shim();
            let h = {};

            function S(e) {
                let t = (0, r.default)([u.default], () => u.default.getChannel(e)),
                    n = (0, r.default)([E.default], () => E.default.getChannel(e));
                return null != t ? t : n
            }

            function m(e, t, n) {
                let i = (0, r.default)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
                    l = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, c.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let a = i.filter(e => !e.soft_deleted && !e.archived),
                    u = a.map(e => e.subscription_plans[0].price),
                    o = [];
                void 0 !== l && l.forEach(e => {
                    let t = s[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && o.push(n)
                });
                let f = new Set(o.concat(u));
                if (!f.has(n)) return null;
                let E = t.indexOf(n);
                if (-1 === E) return null;
                let _ = [];
                for (let e = E + 1; e < t.length && (!f.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
                return _
            }

            function M(e) {
                let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = c.useEditStateStore.getState().listings,
                    i = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let l = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == l || l.forEach(e => {
                        null != E.default.getChannel(e.ref_id) && i.add(e.ref_id)
                    })
                });
                let l = [];
                for (let t of i) {
                    let n = E.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        l.push(t)
                    }
                }
                return l
            }

            function L(e) {
                let t = M(e);
                h[e] = t, t.forEach(e => {
                    let t = e.set("flags", p.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function A(e) {
                var t;
                let n = null !== (t = h[e]) && void 0 !== t ? t : M(e);
                n.forEach(e => {
                    s.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function C(e, t) {
                let n = [],
                    i = [];
                if (t.forEach(t => {
                        let l = E.default.getChannel(t.ref_id);
                        null != l && (n.push(a.default.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), i.push(l))
                    }), 0 === n.length) return;
                let l = await Promise.allSettled(n);
                l.forEach((n, l) => {
                    let r = i[l].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            i = c.useEditStateStore.getState().editStateIdsForGroup[e],
                            l = c.useEditStateStore.getState().listings;
                        null != i && i.forEach(e => {
                            var n;
                            let i = null === (n = l[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == i || i.forEach(e => {
                                e.ref_id === r && (e.ref_id = t.id)
                            })
                        })
                    } else if (null != t) {
                        let e = t.findIndex(e => e.ref_id === r); - 1 !== e && (null == t || t.splice(e, 1))
                    }
                })
            }

            function v(e, t) {
                var n, i;
                let l = c.useEditStateStore.getState().listings[e],
                    r = null == l ? void 0 : l.usedTemplate;
                if (null == r) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let s = E.default.getTemplateWithCategory(t, r);
                if (null == s) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let a = s.listings[0];
                if ((null == l ? void 0 : l.name) !== a.name || (null == l ? void 0 : l.description) !== a.description || (null == l ? void 0 : l.priceTier) !== a.price_tier || (null == l ? void 0 : l.image) !== a.image || (null == l ? void 0 : l.roleColor) !== a.role_color || (null == l ? void 0 : null === (n = l.channelBenefits) || void 0 === n ? void 0 : n.length) !== a.channels.length || (null == l ? void 0 : null === (i = l.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== a.additional_perks.length) return {
                    templateCategory: s.category,
                    hasChangeFromTemplate: !0
                };
                for (let e = 0; e < a.channels.length; e++) {
                    let t = l.channelBenefits[e],
                        n = a.channels[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: s.category,
                        hasChangeFromTemplate: !0
                    }
                }
                for (let e = 0; e < a.additional_perks.length; e++) {
                    let t = l.intangibleBenefits[e],
                        n = a.additional_perks[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: s.category,
                        hasChangeFromTemplate: !0
                    }
                }
                return {
                    templateCategory: s.category,
                    hasChangeFromTemplate: !1
                }
            }

            function g(e) {
                return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, o.isUserEligibleForTierTemplates)() && (0, o.isGuildEligibleForTierTemplates)(e.id)
            }