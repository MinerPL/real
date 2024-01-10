            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return p
                },
                useSuggestedUnusedPrices: function() {
                    return h
                },
                announceCreateTemplateChannels: function() {
                    return T
                },
                announceDeleteTemplateChannels: function() {
                    return m
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return C
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return M
                },
                isEligibleForNewBadge: function() {
                    return g
                }
            }), n("424973"), n("222007"), n("462568");
            var l = n("65597"),
                i = n("913144"),
                r = n("437140"),
                s = n("42203"),
                a = n("808388"),
                o = n("648825"),
                u = n("971150"),
                d = n("65722"),
                c = n("736880"),
                f = n("49111"),
                E = n("724210");
            let _ = {};

            function p(e) {
                let t = (0, l.default)([s.default], () => s.default.getChannel(e)),
                    n = (0, l.default)([c.default], () => c.default.getChannel(e));
                return null != t ? t : n
            }

            function h(e, t, n) {
                let i = (0, l.default)([o.default], () => o.default.getSubscriptionListingsForGuild(e)),
                    r = (0, u.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, u.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let a = i.filter(e => !e.soft_deleted && !e.archived),
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
                let t = u.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = u.useEditStateStore.getState().listings,
                    l = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == i || i.forEach(e => {
                        null != c.default.getChannel(e.ref_id) && l.add(e.ref_id)
                    })
                });
                let i = [];
                for (let t of l) {
                    let n = c.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        i.push(t)
                    }
                }
                return i
            }

            function T(e) {
                let t = S(e);
                _[e] = t, t.forEach(e => {
                    let t = e.set("flags", E.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    i.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function m(e) {
                var t;
                let n = null !== (t = _[e]) && void 0 !== t ? t : S(e);
                n.forEach(e => {
                    i.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function C(e, t) {
                let n = [],
                    l = [];
                if (t.forEach(t => {
                        let i = c.default.getChannel(t.ref_id);
                        null != i && (n.push(r.default.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), l.push(i))
                    }), 0 === n.length) return;
                let i = await Promise.allSettled(n);
                i.forEach((n, i) => {
                    let r = l[i].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            l = u.useEditStateStore.getState().editStateIdsForGroup[e],
                            i = u.useEditStateStore.getState().listings;
                        null != l && l.forEach(e => {
                            var n;
                            let l = null === (n = i[e]) || void 0 === n ? void 0 : n.channelBenefits;
                            null == l || l.forEach(e => {
                                e.ref_id === r && (e.ref_id = t.id)
                            })
                        })
                    } else if (null != t) {
                        let e = t.findIndex(e => e.ref_id === r); - 1 !== e && (null == t || t.splice(e, 1))
                    }
                })
            }

            function M(e, t) {
                var n, l;
                let i = u.useEditStateStore.getState().listings[e],
                    r = null == i ? void 0 : i.usedTemplate;
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
                if ((null == i ? void 0 : i.name) !== a.name || (null == i ? void 0 : i.description) !== a.description || (null == i ? void 0 : i.priceTier) !== a.price_tier || (null == i ? void 0 : i.image) !== a.image || (null == i ? void 0 : i.roleColor) !== a.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== a.channels.length || (null == i ? void 0 : null === (l = i.intangibleBenefits) || void 0 === l ? void 0 : l.length) !== a.additional_perks.length) return {
                    templateCategory: s.category,
                    hasChangeFromTemplate: !0
                };
                for (let e = 0; e < a.channels.length; e++) {
                    let t = i.channelBenefits[e],
                        n = a.channels[e];
                    if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
                        templateCategory: s.category,
                        hasChangeFromTemplate: !0
                    }
                }
                for (let e = 0; e < a.additional_perks.length; e++) {
                    let t = i.intangibleBenefits[e],
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
                return (0, d.canManageGuildRoleSubscriptions)(e) && e.hasFeature(f.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, a.isUserEligibleForTierTemplates)() && (0, a.isGuildEligibleForTierTemplates)(e.id)
            }