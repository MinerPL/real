            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return p
                },
                useSuggestedUnusedPrices: function() {
                    return h
                },
                announceCreateTemplateChannels: function() {
                    return m
                },
                announceDeleteTemplateChannels: function() {
                    return M
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return L
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return A
                },
                isEligibleForNewBadge: function() {
                    return C
                }
            }), n("424973"), n("222007"), n("462568");
            var i = n("65597"),
                l = n("913144"),
                r = n("437140"),
                s = n("42203"),
                a = n("808388"),
                u = n("648825"),
                o = n("971150"),
                d = n("65722"),
                c = n("736880"),
                f = n("49111"),
                E = n("724210");
            let _ = {};

            function p(e) {
                let t = (0, i.default)([s.default], () => s.default.getChannel(e)),
                    n = (0, i.default)([c.default], () => c.default.getChannel(e));
                return null != t ? t : n
            }

            function h(e, t, n) {
                let l = (0, i.default)([u.default], () => u.default.getSubscriptionListingsForGuild(e)),
                    r = (0, o.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, o.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let a = l.filter(e => !e.soft_deleted && !e.archived),
                    d = a.map(e => e.subscription_plans[0].price),
                    c = [];
                void 0 !== r && r.forEach(e => {
                    let t = s[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && c.push(n)
                });
                let f = new Set(c.concat(d));
                if (!f.has(n)) return null;
                let E = t.indexOf(n);
                if (-1 === E) return null;
                let _ = [];
                for (let e = E + 1; e < t.length && (!f.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
                return _
            }

            function S(e) {
                let t = o.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = o.useEditStateStore.getState().listings,
                    i = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let l = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == l || l.forEach(e => {
                        null != c.default.getChannel(e.ref_id) && i.add(e.ref_id)
                    })
                });
                let l = [];
                for (let t of i) {
                    let n = c.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        l.push(t)
                    }
                }
                return l
            }

            function m(e) {
                let t = S(e);
                _[e] = t, t.forEach(e => {
                    let t = e.set("flags", E.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    l.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function M(e) {
                var t;
                let n = null !== (t = _[e]) && void 0 !== t ? t : S(e);
                n.forEach(e => {
                    l.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function L(e, t) {
                let n = [],
                    i = [];
                if (t.forEach(t => {
                        let l = c.default.getChannel(t.ref_id);
                        null != l && (n.push(r.default.createRoleSubscriptionTemplateChannel(e, l.name, l.type, l.topic)), i.push(l))
                    }), 0 === n.length) return;
                let l = await Promise.allSettled(n);
                l.forEach((n, l) => {
                    let r = i[l].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            i = o.useEditStateStore.getState().editStateIdsForGroup[e],
                            l = o.useEditStateStore.getState().listings;
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

            function A(e, t) {
                var n, i;
                let l = o.useEditStateStore.getState().listings[e],
                    r = null == l ? void 0 : l.usedTemplate;
                if (null == r) return {
                    templateCategory: null,
                    hasChangeFromTemplate: null
                };
                let s = c.default.getTemplateWithCategory(t, r);
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

            function C(e) {
                return (0, d.canManageGuildRoleSubscriptions)(e) && e.hasFeature(f.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
            }