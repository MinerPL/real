            "use strict";
            n.r(t), n.d(t, {
                maybeFetchGuildDiscoveryCategories: function() {
                    return o
                },
                fetchMetadataForGuild: function() {
                    return u
                },
                fetchSlugForGuild: function() {
                    return c
                },
                updateGuildPrimaryCategory: function() {
                    return d
                },
                updateGuildKeywords: function() {
                    return f
                },
                updateGuildEmojiDiscoverabilityEnabled: function() {
                    return p
                },
                updateGuildDiscoveryMetadataIsPublished: function() {
                    return _
                },
                updateGuildDiscoveryMetadataAbout: function() {
                    return m
                },
                updateGuildDiscoveryMetadataReasonsToJoin: function() {
                    return E
                },
                updateGuildDiscoveryMetadataSocialLinks: function() {
                    return I
                },
                saveGuildMetadata: function() {
                    return h
                },
                addGuildCategory: function() {
                    return C
                },
                deleteGuildCategory: function() {
                    return S
                }
            });
            var r = n("872717"),
                i = n("913144"),
                s = n("915639"),
                l = n("868246"),
                a = n("49111");
            async function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = s.default.locale;
                if (t === l.default.getFetchedLocale()) return;
                let n = await r.default.get({
                    url: a.Endpoints.GUILD_DISCOVERY_CATEGORIES,
                    query: {
                        locale: t,
                        primary_only: e
                    },
                    oldFormErrors: !0
                });
                i.default.dispatch({
                    type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
                    categories: n.body,
                    locale: t
                })
            }
            async function u(e) {
                try {
                    let t = await r.default.get({
                            url: a.Endpoints.GUILD_DISCOVERY_METADATA(e),
                            oldFormErrors: !0
                        }),
                        {
                            primary_category_id: n,
                            category_ids: s,
                            keywords: l,
                            emoji_discoverability_enabled: o,
                            partner_actioned_timestamp: u,
                            partner_application_timestamp: c,
                            is_published: d,
                            reasons_to_join: f,
                            social_links: p,
                            about: _
                        } = t.body,
                        m = {
                            primaryCategoryId: n,
                            secondaryCategoryIds: s,
                            keywords: l,
                            emojiDiscoverabilityEnabled: o,
                            partnerActionedTimestamp: u,
                            partnerApplicationTimestamp: c,
                            isPublished: d,
                            reasonsToJoin: f,
                            socialLinks: p,
                            about: _
                        };
                    return i.default.dispatch({
                        type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
                        guildId: e,
                        metadata: m
                    }), m
                } catch (e) {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
                    })
                }
            }
            async function c(e) {
                try {
                    let t = await r.default.get({
                            url: a.Endpoints.GUILD_DISCOVERY_SLUG(e)
                        }),
                        n = t.body.slug;
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
                        slug: n
                    })
                } catch {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
                        guildId: e
                    })
                }
            }

            function d(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    primaryCategoryId: t
                })
            }

            function f(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    keywords: t
                })
            }

            function p(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    emojiDiscoverabilityEnabled: t
                })
            }

            function _(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    isPublished: t
                })
            }

            function m(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    about: t
                })
            }

            function E(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    reasonsToJoin: t
                })
            }

            function I(e, t) {
                i.default.dispatch({
                    type: "GUILD_UPDATE_DISCOVERY_METADATA",
                    guildId: e,
                    socialLinks: t
                })
            }
            async function h(e) {
                let {
                    guildId: t,
                    primaryCategoryId: n,
                    keywords: s,
                    emojiDiscoverabilityEnabled: l,
                    partnerActionedTimestamp: o,
                    partnerApplicationTimestamp: u,
                    isPublished: c,
                    reasonsToJoin: d,
                    socialLinks: f,
                    about: p
                } = e;
                try {
                    let e = await r.default.patch({
                            url: a.Endpoints.GUILD_DISCOVERY_METADATA(t),
                            body: {
                                primary_category_id: n,
                                emoji_discoverability_enabled: l,
                                partner_actioned_timestamp: o,
                                partner_application_timestamp: u,
                                keywords: s,
                                is_published: c,
                                reasons_to_join: d,
                                social_links: f,
                                about: p
                            },
                            oldFormErrors: !0
                        }),
                        {
                            primary_category_id: _,
                            category_ids: m,
                            keywords: E,
                            emoji_discoverability_enabled: I,
                            partner_actioned_timestamp: h,
                            partner_application_timestamp: C,
                            is_published: S,
                            reasons_to_join: g,
                            social_links: T,
                            about: N
                        } = e.body;
                    i.default.dispatch({
                        type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
                        guildId: t,
                        metadata: {
                            primaryCategoryId: _,
                            secondaryCategoryIds: m,
                            keywords: E,
                            emojiDiscoverabilityEnabled: I,
                            partnerActionedTimestamp: h,
                            partnerApplicationTimestamp: C,
                            isPublished: S,
                            reasonsToJoin: g,
                            socialLinks: T,
                            about: N
                        }
                    })
                } catch (e) {
                    throw i.default.dispatch({
                        type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                        guildId: t,
                        errors: e.body
                    }), e
                }
            }

            function C(e, t) {
                r.default.put({
                    url: a.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
                    oldFormErrors: !0
                }).then(() => {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_CATEGORY_ADD",
                        guildId: e,
                        categoryId: t
                    })
                }).catch(t => {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                        guildId: e,
                        errors: t.body
                    })
                })
            }

            function S(e, t) {
                r.default.delete({
                    url: a.Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
                    oldFormErrors: !0
                }).then(() => {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_CATEGORY_DELETE",
                        guildId: e,
                        categoryId: t
                    })
                }).catch(t => {
                    i.default.dispatch({
                        type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
                        guildId: e,
                        errors: t.body
                    })
                })
            }