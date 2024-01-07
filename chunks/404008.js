            "use strict";
            n.r(t), n.d(t, {
                permissionOverwritesForRoles: function() {
                    return N
                },
                permissionOverwriteForUser: function() {
                    return O
                },
                permissionOverwriteForRole: function() {
                    return R
                },
                permissionOverwritesForAnnouncement: function() {
                    return y
                },
                isChannelFull: function() {
                    return v
                },
                sanitizeGuildTextChannelName: function() {
                    return l.default
                },
                getBitrateLimit: function() {
                    return M
                },
                computeSummarizedVoiceUsers: function() {
                    return L
                },
                channelTypeString: function() {
                    return D
                },
                getMentionIconType: function() {
                    return U
                },
                previousTextChannelRouteForGuild: function() {
                    return P
                },
                getChannelPermalink: function() {
                    return b
                },
                getChannelLinkToCopy: function() {
                    return G
                }
            }), n("70102"), n("424973"), n("222007");
            var i = n("316693"),
                a = n("798609"),
                l = n("364480"),
                s = n("89073"),
                r = n("711326"),
                u = n("808422"),
                o = n("233069"),
                d = n("42203"),
                c = n("923959"),
                _ = n("957255"),
                E = n("18494"),
                f = n("316133"),
                h = n("991170"),
                p = n("49111"),
                T = n("646718"),
                C = n("782340");
            let {
                GUILD_VOICE: m,
                GUILD_CATEGORY: S,
                GUILD_STAGE_VOICE: I
            } = p.ChannelTypes;

            function g(e, t) {
                return e === t || e === S
            }

            function A(e, t, n) {
                let a = h.default.NONE;
                return ((0, o.isGuildSelectableChannelType)(t) || t === S) && (a = i.default.add(a, p.Permissions.VIEW_CHANNEL)), (g(t, m) || g(t, I)) && (a = i.default.add(a, p.Permissions.VIEW_CHANNEL), a = i.default.add(a, p.Permissions.CONNECT)), {
                    id: e,
                    type: n,
                    deny: h.default.NONE,
                    allow: a
                }
            }

            function N(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = [];
                if (n.length > 0 || l) {
                    var r, u, d;
                    let n;
                    s.push((r = e, u = t, d = a.PermissionOverwriteType.ROLE, n = h.default.NONE, ((0, o.isGuildSelectableChannelType)(u) || u === S) && (n = i.default.add(n, p.Permissions.VIEW_CHANNEL)), g(u, m) && (n = i.default.add(n, p.Permissions.VIEW_CHANNEL), n = i.default.add(n, p.Permissions.CONNECT)), {
                        id: r,
                        type: d,
                        allow: h.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    s.push(A(e, t, a.PermissionOverwriteType.ROLE))
                }), s
            }

            function O(e, t) {
                return A(e, t, a.PermissionOverwriteType.MEMBER)
            }

            function R(e, t) {
                return A(e, t, a.PermissionOverwriteType.ROLE)
            }

            function y(e) {
                return [{
                    id: e,
                    type: a.PermissionOverwriteType.ROLE,
                    deny: p.Permissions.SEND_MESSAGES,
                    allow: h.default.NONE
                }]
            }

            function v(e, t, n) {
                var i, a;
                let l = e.getGuildId(),
                    r = n.getGuild(l),
                    u = null !== (i = null == r ? void 0 : r.maxVideoChannelUsers) && void 0 !== i ? i : -1,
                    o = null !== (a = null == r ? void 0 : r.maxStageVideoChannelUsers) && void 0 !== a ? a : -1,
                    d = f.default.countVoiceStatesForChannel(e.id),
                    c = f.default.getVoiceStatesForChannel(e),
                    E = _.default.can(p.Permissions.MOVE_MEMBERS, e) && _.default.can(p.Permissions.CONNECT, e),
                    h = !1;
                h = e.type === I ? null != l && (t.hasVideo(e.id) || (0, s.hasStream)(c)) && o > 0 && d >= o : null != l && t.hasVideo(e.id) && u > 0 && d >= u + (E ? 1 : 0);
                let T = e.userLimit > 0 && d >= e.userLimit;
                return h || T && !E
            }

            function M(e, t) {
                return t.isGuildStageVoice() ? p.BITRATE_DEFAULT : null == e ? p.BITRATE_MAX : Math.max(e.hasFeature(p.GuildFeatures.VIP_REGIONS) ? T.BoostedGuildFeatures[p.BoostedGuildTiers.TIER_3].limits.bitrate : p.BITRATE_MAX, T.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function L(e) {
                let {
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: i,
                    voiceStates: a
                } = e, l = function(e) {
                    let {
                        channels: t,
                        selectedChannelId: n,
                        selectedVoiceChannelId: i,
                        voiceStates: a
                    } = e, l = [];
                    return t.forEach(e => {
                        if (e.id === i || e.id === n) return;
                        let t = a[e.id];
                        null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                            (0, u.getAudienceRequestToSpeakState)(e.voiceState) === u.RequestToSpeakStates.ON_STAGE && l.push(e)
                        }) : t.forEach(e => l.push(e)))
                    }), l
                }({
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: i,
                    voiceStates: a
                });
                return l.map(e => e.user)
            }

            function D(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case p.ChannelTypes.DM:
                        return C.default.Messages.DM;
                    case p.ChannelTypes.GROUP_DM:
                        return C.default.Messages.GROUP_DM;
                    case p.ChannelTypes.GUILD_TEXT:
                        return C.default.Messages.TEXT_CHANNEL;
                    case p.ChannelTypes.GUILD_FORUM:
                        return C.default.Messages.FORUM_CHANNEL;
                    case p.ChannelTypes.GUILD_MEDIA:
                        return C.default.Messages.MEDIA_CHANNEL;
                    case p.ChannelTypes.GUILD_VOICE:
                        return C.default.Messages.VOICE_CHANNEL;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return C.default.Messages.STAGE_CHANNEL;
                    case p.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return C.default.Messages.NEWS_CHANNEL;
                    case p.ChannelTypes.GUILD_STORE:
                        return C.default.Messages.STORE_CHANNEL;
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return C.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function U(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === p.ChannelTypes.GUILD_VOICE) return _.default.can(p.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === p.ChannelTypes.GUILD_STAGE_VOICE) return _.default.can(p.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (o.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === p.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === p.ChannelTypes.GUILD_MEDIA) return "media";
                else if (o.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function P(e) {
                let t;
                let n = d.default.getChannel(E.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === p.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = c.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return p.Routes.CHANNEL(e, t)
            }

            function b(e, t, n, i) {
                return "".concat(location.protocol, "//").concat(location.host).concat(p.Routes.CHANNEL(e, t, n)).concat(null == i ? "" : "?summaryId=".concat(i))
            }

            function G(e, t, n, i) {
                let a;
                let l = e.getGuildId(),
                    s = (0, r.canUseMediaPostEmbed)(l, t);
                if (null != t && s) {
                    var u, o, d, c;
                    u = l, o = t.id, d = e.id, c = e.id, a = null == u || null == o || null == d ? b(u, o, c) : "".concat(location.protocol, "//").concat(location.host).concat(p.Routes.CHANNEL_THREAD_VIEW(u, o, d, c))
                } else a = null != i ? i : b(l, e.id, n);
                return a
            }