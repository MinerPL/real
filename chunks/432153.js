            "use strict";
            n.r(t), n.d(t, {
                useChannelWithTemplateFallback: function() {
                    return S
                },
                useSuggestedUnusedPrices: function() {
                    return T
                },
                announceCreateTemplateChannels: function() {
                    return C
                },
                announceDeleteTemplateChannels: function() {
                    return M
                },
                createChannelsFromTemplateTierBenefits: function() {
                    return g
                },
                getTemplateTierCreationAnalyticsContext: function() {
                    return v
                },
                isEligibleForNewBadge: function() {
                    return I
                }
            }), n("424973"), n("222007"), n("462568");
            var l = n("642852"),
                i = n.n(l),
                r = n("65597"),
                s = n("913144"),
                a = n("437140"),
                o = n("42203"),
                u = n("808388"),
                d = n("648825"),
                c = n("971150"),
                f = n("65722"),
                E = n("736880"),
                _ = n("49111"),
                p = n("724210");
            i.shim();
            let h = {};

            function S(e) {
                let t = (0, r.default)([o.default], () => o.default.getChannel(e)),
                    n = (0, r.default)([E.default], () => E.default.getChannel(e));
                return null != t ? t : n
            }

            function T(e, t, n) {
                let l = (0, r.default)([d.default], () => d.default.getSubscriptionListingsForGuild(e)),
                    i = (0, c.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, c.useEditStateStore)(e => e.listings);
                if (void 0 === n || void 0 === t) return null;
                let a = l.filter(e => !e.soft_deleted && !e.archived),
                    o = a.map(e => e.subscription_plans[0].price),
                    u = [];
                void 0 !== i && i.forEach(e => {
                    let t = s[e],
                        n = null == t ? void 0 : t.priceTier;
                    null != n && u.push(n)
                });
                let f = new Set(u.concat(o));
                if (!f.has(n)) return null;
                let E = t.indexOf(n);
                if (-1 === E) return null;
                let _ = [];
                for (let e = E + 1; e < t.length && (!f.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
                return _
            }

            function m(e) {
                let t = c.useEditStateStore.getState().editStateIdsForGroup[e],
                    n = c.useEditStateStore.getState().listings,
                    l = new Set;
                null != t && t.forEach(e => {
                    var t;
                    let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
                    null == i || i.forEach(e => {
                        null != E.default.getChannel(e.ref_id) && l.add(e.ref_id)
                    })
                });
                let i = [];
                for (let t of l) {
                    let n = E.default.getChannel(t);
                    if (null != n) {
                        let t = n.set("guild_id", e);
                        i.push(t)
                    }
                }
                return i
            }

            function C(e) {
                let t = m(e);
                h[e] = t, t.forEach(e => {
                    let t = e.set("flags", p.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
                    s.default.dispatch({
                        type: "CHANNEL_CREATE",
                        channel: t
                    })
                })
            }

            function M(e) {
                var t;
                let n = null !== (t = h[e]) && void 0 !== t ? t : m(e);
                n.forEach(e => {
                    s.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: e
                    })
                })
            }
            async function g(e, t) {
                let n = [],
                    l = [];
                if (t.forEach(t => {
                        let i = E.default.getChannel(t.ref_id);
                        null != i && (n.push(a.default.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), l.push(i))
                    }), 0 === n.length) return;
                let i = await Promise.allSettled(n);
                i.forEach((n, i) => {
                    let r = l[i].id;
                    if ("fulfilled" === n.status) {
                        let t = n.value.body,
                            l = c.useEditStateStore.getState().editStateIdsForGroup[e],
                            i = c.useEditStateStore.getState().listings;
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

            function v(e, t) {
                var n, l;
                let i = c.useEditStateStore.getState().listings[e],
                    r = null == i ? void 0 : i.usedTemplate;
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

            function I(e) {
                return (0, f.canManageGuildRoleSubscriptions)(e) && e.hasFeature(_.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.isUserEligibleForTierTemplates)() && (0, u.isGuildEligibleForTierTemplates)(e.id)
            }