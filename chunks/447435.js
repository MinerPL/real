            "use strict";
            n.r(t), n.d(t, {
                resolveDefaultSetting: function() {
                    return O
                },
                getExplicitContentSettingOrDefault: function() {
                    return R
                },
                getShouldObscureForSetting: function() {
                    return y
                },
                shouldRedactExplicitContent: function() {
                    return v
                },
                updateExplicitContentSetting: function() {
                    return M
                },
                ObscuredMediaTypes: function() {
                    return i
                },
                isMediaObscured: function() {
                    return L
                },
                getObscuredMediaForMessage: function() {
                    return D
                },
                isPendingScan: function() {
                    return U
                },
                TrackMediaRedactionActionType: function() {
                    return a
                },
                trackMediaRedactionAction: function() {
                    return P
                },
                TimeoutCancelSource: function() {
                    return l
                },
                trackScanTiming: function() {
                    return b
                },
                trackScanningTimedOut: function() {
                    return G
                },
                trackExplicitMediaRedactableMessagedLoaded: function() {
                    return k
                },
                trackExplicitMediaScanComplete: function() {
                    return F
                },
                handleExplicitMediaScanTimeoutForMessage: function() {
                    return w
                }
            }), n("702976");
            var i, a, l, s, r, u, o = n("432710"),
                d = n("151426"),
                c = n("676574"),
                _ = n("155084"),
                E = n("684337"),
                f = n("845579"),
                h = n("42203"),
                p = n("27618"),
                T = n("697218"),
                C = n("599110"),
                m = n("568734"),
                S = n("983850"),
                I = n("457971"),
                g = n("49111"),
                A = n("568456");
            n("782340");
            let N = () => {
                    let e = T.default.getCurrentUser();
                    return (null == e ? void 0 : e.nsfwAllowed) === !1 ? d.ExplicitContentRedaction.BLUR : d.ExplicitContentRedaction.SHOW
                },
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) return N();
                    let n = f.ExplicitContentFilter.getSetting();
                    return t ? n === A.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? d.ExplicitContentRedaction.BLOCK : N() : n === A.ExplicitContentFilterTypes.NON_FRIENDS || n === A.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS ? d.ExplicitContentRedaction.BLOCK : N()
                },
                R = () => {
                    let e = f.ExplicitContentSettings.getSetting();
                    return {
                        explicitContentGuilds: e.explicitContentGuilds === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O() : e.explicitContentGuilds,
                        explicitContentNonFriendDm: e.explicitContentNonFriendDm === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0) : e.explicitContentNonFriendDm,
                        explicitContentFriendDm: e.explicitContentFriendDm === d.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION ? O(!0, !0) : e.explicitContentFriendDm
                    }
                };

            function y(e) {
                return e === d.ExplicitContentRedaction.BLUR || e === d.ExplicitContentRedaction.BLOCK
            }

            function v(e) {
                var t;
                if (!(0, I.isEligibleForExplicitMediaRedaction)()) return !1;
                let n = T.default.getCurrentUser();
                if (null == n || (null === (t = e.author) || void 0 === t ? void 0 : t.id) === n.id) return !1;
                let {
                    explicitContentGuilds: i,
                    explicitContentFriendDm: a,
                    explicitContentNonFriendDm: l
                } = R(), s = h.default.getChannel(e.channel_id);
                if (null == s) return !1;
                if (s.isDM() || s.isGroupDM()) return null != e.author && p.default.getFriendIDs().includes(e.author.id) ? y(a) : y(l);
                return y(i)
            }
            let M = e => {
                let t = R();
                f.ExplicitContentSettings.updateSetting({
                    ...t,
                    ...e
                })
            };

            function L(e, t) {
                var n, i;
                if (!t) return !1;
                if (c.default.get("obscure_blur_effect_enabled")) return !0;
                switch (e.type) {
                    case 1:
                        return (0, m.hasFlag)(null !== (n = e.media.flags) && void 0 !== n ? n : 0, g.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA);
                    case 0:
                        return (0, m.hasFlag)(null !== (i = e.media.flags) && void 0 !== i ? i : 0, g.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA);
                    default:
                        return !1
                }
            }

            function D(e) {
                let t = v(e);
                return t ? {
                    obscuredAttachments: e.attachments.filter(e => L({
                        type: 0,
                        media: e
                    }, !0)),
                    obscuredEmbeds: e.embeds.filter(e => L({
                        type: 1,
                        media: e
                    }, !0))
                } : {
                    obscuredAttachments: [],
                    obscuredEmbeds: []
                }
            }

            function U(e) {
                return !c.default.get("explicit_media_redaction_ignore_pending_scan") && null == e
            }

            function P(e) {
                let {
                    action: t,
                    channelId: n,
                    messageId: i
                } = e;
                if (null == n || null == i) return;
                let a = h.default.getChannel(n);
                C.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_ACTION, {
                    action: t,
                    guild_id: null == a ? void 0 : a.guild_id,
                    channel_id: n,
                    message_id: i,
                    user_is_underage: (0, E.isCurrentUserTeen)()
                })
            }

            function b(e, t) {
                let n = Date.now() - e;
                _.default.increment({
                    name: o.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING,
                    tags: ["timingBucket:".concat(Math.min(Math.floor(n / 1e3), 3)), "source:".concat(t)]
                })
            }

            function G(e) {
                let {
                    channelId: t,
                    messageId: n,
                    attachmentIds: i,
                    embedIds: a
                } = e;
                if (null == t || null == n) return;
                let l = h.default.getChannel(t);
                C.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, {
                    channel_id: t,
                    guild_id: null == l ? void 0 : l.guild_id,
                    message_id: n,
                    embed_ids: a,
                    user_is_underage: (0, E.isCurrentUserTeen)(),
                    scan_timeout_duration: S.MESSAGE_SCAN_TIMEOUT,
                    attachment_ids_v2: i
                }), _.default.increment({
                    name: o.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT
                })
            }

            function k(e) {
                let {
                    channelId: t,
                    numOfAttachments: n,
                    numOfAttachmentsPendingScan: i,
                    numOfEmbeds: a,
                    numOfEmbedsPendingScan: l
                } = e;
                if (null == t) return;
                let s = h.default.getChannel(t);
                C.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
                    channel_id: t,
                    guild_id: null == s ? void 0 : s.guild_id,
                    num_of_attachments: n,
                    num_of_attachments_pending_scan: i,
                    num_of_embeds: a,
                    num_of_embeds_pending_scan: l
                })
            }

            function F(e) {
                let {
                    messageId: t,
                    channelId: n,
                    numOfAttachments: i,
                    numOfExplicitAttachments: a,
                    numOfEmbeds: l,
                    numOfExplicitEmbeds: s
                } = e;
                if (null == n) return;
                let r = h.default.getChannel(n);
                C.default.track(g.AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, {
                    message_id: t,
                    channel_id: n,
                    channel_type: null == r ? void 0 : r.type,
                    guild_id: null == r ? void 0 : r.guild_id,
                    num_of_attachments: i,
                    num_of_explicit_attachments: a,
                    num_of_embeds: l,
                    num_of_explicit_embeds: s
                })
            }

            function w(e) {
                let t = e.attachments.map(e => (null == e.content_scan_version && (e.content_scan_version = -1), e));
                e = e.set("attachments", t);
                let n = e.embeds.map(e => (null == e.contentScanVersion && (e.contentScanVersion = -1), e));
                return e = e.set("embeds", n)
            }(s = i || (i = {}))[s.Attachment = 0] = "Attachment", s[s.Embed = 1] = "Embed", (r = a || (a = {})).EXPLICIT_MEDIA_LEARN_MORE_VIEWED = "explicit_media_learn_more_viewed", r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = "explicit_media_learn_more_click_settings", r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = "explicit_media_learn_more_click_learn_more", r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = "explicit_media_learn_more_click_dismiss", r.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = "explicit_media_learn_more_click_false_positive", r.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = "explicit_media_false_positive_viewed", r.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = "explicit_media_false_positive_click_confirm", r.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = "explicit_media_false_positive_click_cancel", (u = l || (l = {})).UPDATE = "update", u.TIMEOUT = "timeout"