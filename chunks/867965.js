            "use strict";
            n.r(t), n.d(t, {
                trackForumChannelSeenBatch: function() {
                    return g
                },
                trackForumSearched: function() {
                    return m
                },
                trackForumSearchCleared: function() {
                    return A
                },
                trackForumTagFilterClicked: function() {
                    return T
                },
                trackForumCreateNewPostClick: function() {
                    return p
                },
                trackForumCreateNewPostKeybindUsed: function() {
                    return S
                },
                maybeTrackForumNewPostDraftCreated: function() {
                    return M
                },
                trackForumNewPostCleared: function() {
                    return v
                },
                trackForumPostCreated: function() {
                    return C
                },
                trackForumScrolled: function() {
                    return N
                },
                trackForumMorePostsLoaded: function() {
                    return O
                },
                trackForumPostClicked: function() {
                    return R
                },
                trackForumSortOrderUpdated: function() {
                    return I
                },
                trackForumLayoutUpdated: function() {
                    return D
                },
                trackForumPostLinkCopied: function() {
                    return b
                },
                trackForumOnboardingClicked: function() {
                    return y
                },
                trackForumUpsellModalClicked: function() {
                    return L
                },
                trackForumAddMediaToOriginalPostClicked: function() {
                    return F
                },
                trackForumHelperCardClicked: function() {
                    return P
                },
                trackForumChannelMediaUploaderClicked: function() {
                    return U
                },
                trackForumEnableAutomodClicked: function() {
                    return H
                },
                trackForumPreviewPostClicked: function() {
                    return w
                },
                trackForumPostSidebarViewed: function() {
                    return G
                },
                trackForumUpsellModalViewed: function() {
                    return k
                },
                trackForumCreateNewPostStarted: function() {
                    return V
                }
            });
            var i = n("482402"),
                a = n("716241"),
                l = n("701916"),
                s = n("42203"),
                r = n("474643"),
                u = n("599110"),
                o = n("773336"),
                d = n("349778"),
                c = n("430475"),
                _ = n("994810"),
                f = n("688169"),
                h = n("318321"),
                E = n("49111");

            function g(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sessionId: i,
                    postIds: l,
                    additionalTimes: s
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n,
                        sessionId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    post_ids: l,
                    additional_seen_time_millis: s
                })
            }

            function m(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numSearchResults: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_search_results: i
                })
            }

            function A(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function T(e) {
                let {
                    guildId: t,
                    channelId: n,
                    tagId: i,
                    filterTagIds: l,
                    added: s,
                    location: r
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    tag_id: i,
                    filter_tag_ids: l,
                    added: s,
                    location: r
                })
            }

            function p(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function S(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function M(e) {
                var t, n, i, l;
                let {
                    guildId: u,
                    channelId: o
                } = e, d = s.default.getChannel(o);
                if (null == d) return;
                let c = r.default.getThreadSettings(o),
                    _ = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
                    f = r.default.getDraft(o, r.DraftType.FirstThreadMessage),
                    g = null == f || 0 === f.length || (null == f ? void 0 : f.trim()) === _,
                    m = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                    A = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (l = c.name) || void 0 === l ? void 0 : null === (i = l.trim()) || void 0 === i ? void 0 : i.length) === 0;
                (!g || !m || !A) && a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: o
                    }),
                    guild_id: u,
                    channel_id: o,
                    applied_tag_ids: (0, h.getForumPostDraftAppliedTagIds)(o),
                    num_attachments: (0, h.getForumPostDraftNumAttachments)(o)
                })
            }

            function v(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function C(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i
                } = e;

                function l() {
                    a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                        ...(0, h.collectForumPostAnalyticsMetadata)({
                            channelId: i
                        }),
                        guild_id: t,
                        channel_id: n
                    })
                }
                let s = c.default.isLoading(i);
                s ? c.default.addConditionalChangeListener(() => {
                    let e = c.default.isLoading(i);
                    return !!e || (l(), !1)
                }) : l()
            }

            function N(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n
                })
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    numArchivedThreads: i,
                    hasMoreThreads: l,
                    filterTagIds: r,
                    sortOrder: o
                } = e;
                u.default.track(E.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(t),
                    ...(0, a.collectChannelAnalyticsMetadata)(s.default.getChannel(n)),
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    num_archived_threads: i,
                    num_active_threads: (0, h.getNumActiveThreads)(t, n),
                    has_more_threads: l,
                    filter_tag_ids: r,
                    sort_order: o
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channelId: n,
                    postId: i,
                    location: l
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
                    ...(0, h.collectForumPostAnalyticsMetadata)({
                        channelId: i
                    }),
                    guild_id: t,
                    channel_id: n,
                    is_search_result: null != _.default.getSearchResults(n),
                    location: l
                })
            }

            function I(e) {
                let {
                    guildId: t,
                    channelId: n,
                    sortOrder: i
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    sort_type: (0, h.convertSortOrderToReadableString)(i),
                    sort_order: i,
                    forum_channel_sort_order: i
                })
            }

            function D(e) {
                let {
                    guildId: t,
                    channelId: n,
                    forumLayout: l
                } = e, s = (0, d.isForumActivityExperimentEnabled)(t) && l === i.ForumLayout.LIST ? f.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : l;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
                    ...(0, h.collectForumAnalyticsMetadata)({
                        channelId: n
                    }),
                    guild_id: t,
                    channel_id: n,
                    forum_channel_layout: s
                })
            }

            function b(e) {
                let {
                    postId: t,
                    location: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_POST_LINK_COPIED, {
                    forum_post_id: t,
                    location: n
                })
            }

            function y(e) {
                let {
                    onboardingCTA: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
                    onboarding_cta_type: t
                })
            }

            function L(e) {
                let {
                    forumDemoId: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
                    forum_demo_id: t
                })
            }

            function F(e) {
                let {
                    added: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
                    added: t
                })
            }

            function P(e) {
                let {
                    readGuideCta: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
                    read_guide_cta: t
                })
            }

            function U(e) {
                let {
                    isMobile: t
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
                    is_mobile: t
                })
            }

            function H() {
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
            }

            function w() {
                a.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
            }

            function G(e) {
                a.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_OPENED, {
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guild_id),
                    ...(0, a.collectChannelAnalyticsMetadata)(e),
                    ...(0, l.collectThreadMetadata)(e, !0),
                    ...(0, a.getChannelOpenedMetadata)(e.id),
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    parent_channel_type: e.parentChannelThreadType,
                    channel_view: "Split View",
                    platform: (0, o.getPlatform)()
                })
            }

            function k() {
                a.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
                    type: "Forum Channel Upsell Modal",
                    location: {
                        section: E.AnalyticsSections.CHANNEL_WELCOME_CTA
                    }
                })
            }

            function V(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                a.default.trackWithMetadata(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    ...(0, l.collectThreadMetadata)(s.default.getChannel(n)),
                    channel_id: n,
                    guild_id: t
                })
            }