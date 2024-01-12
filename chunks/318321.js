            "use strict";
            n.r(t), n.d(t, {
                getForumChannelSessionId: function() {
                    return p
                },
                convertSortOrderToReadableString: function() {
                    return S
                },
                getForumPostDraftNumAttachments: function() {
                    return M
                },
                getForumPostDraftAppliedTagIds: function() {
                    return v
                },
                getNumActiveThreads: function() {
                    return N
                },
                collectForumAnalyticsMetadata: function() {
                    return O
                },
                collectForumPostAnalyticsMetadata: function() {
                    return R
                }
            }), n("70102"), n("222007"), n("808653");
            var i = n("335710"),
                a = n("249654"),
                l = n("689275"),
                s = n("755624"),
                r = n("800843"),
                u = n("610730"),
                d = n("42203"),
                o = n("474643"),
                c = n("957255"),
                _ = n("585722"),
                f = n("430475"),
                h = n("446480"),
                E = n("589641"),
                g = n("369814"),
                m = n("49111"),
                A = n("724210"),
                T = n("648564");

            function p(e) {
                return g.default.getForumChannelSessionId(e)
            }

            function S(e) {
                switch (e) {
                    case i.ThreadSortOrder.CREATION_DATE:
                        return T.ThreadSortOrderReadableForAnalytics.CREATION_DATE;
                    case i.ThreadSortOrder.LATEST_ACTIVITY:
                        return T.ThreadSortOrderReadableForAnalytics.LATEST_ACTIVITY;
                    default:
                        throw Error("Unexpected sort order ".concat(e))
                }
            }

            function M(e) {
                return _.default.getUploads(e, o.DraftType.FirstThreadMessage).length
            }

            function v(e) {
                var t, n;
                let i = d.default.getChannel(e);
                if (null == i) return [];
                let a = d.default.getChannel(i.parent_id),
                    l = null == a ? void 0 : a.availableTags;
                if (null == a || null == l) return [];
                let s = null !== (n = null === (t = o.default.getThreadSettings(e)) || void 0 === t ? void 0 : t.appliedTags) && void 0 !== n ? n : new Set,
                    r = new Set(l.map(e => e.id));
                return Array.from(s).filter(e => r.has(e))
            }

            function N(e, t) {
                return Object.keys(l.default.getThreadsForParent(e, t)).length
            }

            function C(e) {
                let {
                    loaded: t,
                    firstMessage: n
                } = f.default.getMessage(e);
                return t ? n : null
            }

            function O(e) {
                var t, n, i, a;
                let {
                    channelId: l,
                    sessionId: s
                } = e, r = d.default.getChannel(l);
                return null != r && r.isForumLikeChannel() ? {
                    forum_channel_has_guidelines: null != r.topic && r.topic.trim().length > 0,
                    forum_channel_default_emoji_reaction_id: null === (t = r.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId,
                    forum_channel_default_emoji_reaction_name: null === (n = r.defaultReactionEmoji) || void 0 === n ? void 0 : n.emojiName,
                    forum_channel_available_tag_ids: null !== (a = null === (i = r.availableTags) || void 0 === i ? void 0 : i.map(e => e.id)) && void 0 !== a ? a : [],
                    forum_channel_tag_required: r.hasFlag(A.ChannelFlags.REQUIRE_TAG),
                    forum_channel_can_create_post: c.default.can(m.Permissions.SEND_MESSAGES, r),
                    forum_channel_filter_tag_ids: h.default.getFilterTagIdsAnalytics(),
                    forum_channel_sort_order: h.default.getSortOrderAnalytics(r.id),
                    forum_channel_session_id: null != s ? s : p(r.id),
                    forum_channel_layout: h.default.getLayoutAnalytics(r.id),
                    forum_channel_default_sort_order: r.defaultSortOrder,
                    forum_channel_default_layout: r.defaultForumLayout
                } : null
            }

            function R(e) {
                var t, n, i, l, o, c, _;
                let {
                    channelId: f,
                    sessionId: h
                } = e, g = d.default.getChannel(f);
                if (null == g || !g.isForumPost()) return null;
                let m = d.default.getChannel(g.parent_id);
                return null != m && m.isForumLikeChannel() ? {
                    ...O({
                        channelId: m.id,
                        sessionId: h
                    }),
                    thread_approximate_member_count: r.default.getMemberCount(f),
                    thread_approximate_message_count: u.default.getCount(f),
                    thread_archived: (null === (t = g.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0,
                    thread_locked: null !== (c = null === (n = g.threadMetadata) || void 0 === n ? void 0 : n.locked) && void 0 !== c && c,
                    thread_auto_archive_duration_minutes: null !== (_ = null === (i = g.threadMetadata) || void 0 === i ? void 0 : i.autoArchiveDuration) && void 0 !== _ ? _ : 0,
                    thread_approximate_creation_date: a.default.extractTimestamp(f),
                    forum_post_id: g.id,
                    forum_post_first_message_id: g.id,
                    forum_post_num_reactions: function(e) {
                        let t = C(e);
                        return null == t ? 0 : t.reactions.reduce((e, t) => e + t.count, 0)
                    }(g.id),
                    forum_post_num_unique_reactions: function(e) {
                        let t = C(e);
                        return null == t ? 0 : t.reactions.length
                    }(g.id),
                    forum_post_applied_tag_ids: function(e) {
                        var t, n;
                        let i = d.default.getChannel(e);
                        if (null == i) return [];
                        let a = d.default.getChannel(i.parent_id),
                            l = null == a ? void 0 : a.availableTags;
                        if (null == a || null == l) return [];
                        let s = new Set(l.map(e => e.id));
                        return null !== (n = null === (t = i.appliedTags) || void 0 === t ? void 0 : t.filter(e => s.has(e))) && void 0 !== n ? n : []
                    }(g.id),
                    forum_post_is_pinned: g.hasFlag(A.ChannelFlags.PINNED),
                    forum_post_is_new: null === (l = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === l ? void 0 : l.isNew,
                    forum_post_is_unread: null === (o = E.default.getReadStateSnapshotAnalytics(g.id)) || void 0 === o ? void 0 : o.hasUnreads,
                    forum_post_is_following: s.default.hasJoined(g.id),
                    forum_post_attachment_mimetypes: function(e) {
                        let t = C(e);
                        return null == t ? [] : t.attachments.map(e => {
                            var t;
                            return null !== (t = e.content_type) && void 0 !== t ? t : "unknown"
                        })
                    }(g.id)
                } : null
            }