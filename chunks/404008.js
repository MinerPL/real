            "use strict";
            n.r(t), n.d(t, {
                permissionOverwritesForRoles: function() {
                    return O
                },
                permissionOverwriteForUser: function() {
                    return L
                },
                permissionOverwriteForRole: function() {
                    return g
                },
                permissionOverwritesForAnnouncement: function() {
                    return P
                },
                isChannelFull: function() {
                    return m
                },
                sanitizeGuildTextChannelName: function() {
                    return l.default
                },
                getBitrateLimit: function() {
                    return y
                },
                computeSummarizedVoiceUsers: function() {
                    return v
                },
                channelTypeString: function() {
                    return D
                },
                getMentionIconType: function() {
                    return U
                },
                previousTextChannelRouteForGuild: function() {
                    return M
                },
                getChannelPermalink: function() {
                    return G
                },
                getChannelLinkToCopy: function() {
                    return w
                }
            }), n("70102"), n("424973"), n("222007");
            var r = n("316693"),
                i = n("798609"),
                l = n("364480"),
                u = n("89073"),
                a = n("711326"),
                o = n("808422"),
                d = n("233069"),
                s = n("42203"),
                E = n("923959"),
                _ = n("957255"),
                c = n("18494"),
                I = n("316133"),
                S = n("991170"),
                T = n("49111"),
                f = n("646718"),
                p = n("782340");
            let {
                GUILD_VOICE: N,
                GUILD_CATEGORY: C,
                GUILD_STAGE_VOICE: A
            } = T.ChannelTypes;

            function R(e, t) {
                return e === t || e === C
            }

            function h(e, t, n) {
                let i = S.default.NONE;
                return ((0, d.isGuildSelectableChannelType)(t) || t === C) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL)), (R(t, N) || R(t, A)) && (i = r.default.add(i, T.Permissions.VIEW_CHANNEL), i = r.default.add(i, T.Permissions.CONNECT)), {
                    id: e,
                    type: n,
                    deny: S.default.NONE,
                    allow: i
                }
            }

            function O(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    u = [];
                if (n.length > 0 || l) {
                    var a, o, s;
                    let n;
                    u.push((a = e, o = t, s = i.PermissionOverwriteType.ROLE, n = S.default.NONE, ((0, d.isGuildSelectableChannelType)(o) || o === C) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL)), R(o, N) && (n = r.default.add(n, T.Permissions.VIEW_CHANNEL), n = r.default.add(n, T.Permissions.CONNECT)), {
                        id: a,
                        type: s,
                        allow: S.default.NONE,
                        deny: n
                    }))
                }
                return n.forEach(e => {
                    u.push(h(e, t, i.PermissionOverwriteType.ROLE))
                }), u
            }

            function L(e, t) {
                return h(e, t, i.PermissionOverwriteType.MEMBER)
            }

            function g(e, t) {
                return h(e, t, i.PermissionOverwriteType.ROLE)
            }

            function P(e) {
                return [{
                    id: e,
                    type: i.PermissionOverwriteType.ROLE,
                    deny: T.Permissions.SEND_MESSAGES,
                    allow: S.default.NONE
                }]
            }

            function m(e, t, n) {
                var r, i;
                let l = e.getGuildId(),
                    a = n.getGuild(l),
                    o = null !== (r = null == a ? void 0 : a.maxVideoChannelUsers) && void 0 !== r ? r : -1,
                    d = null !== (i = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
                    s = I.default.countVoiceStatesForChannel(e.id),
                    E = I.default.getVoiceStatesForChannel(e),
                    c = _.default.can(T.Permissions.MOVE_MEMBERS, e) && _.default.can(T.Permissions.CONNECT, e),
                    S = !1;
                S = e.type === A ? null != l && (t.hasVideo(e.id) || (0, u.hasStream)(E)) && d > 0 && s >= d : null != l && t.hasVideo(e.id) && o > 0 && s >= o + (c ? 1 : 0);
                let f = e.userLimit > 0 && s >= e.userLimit;
                return S || f && !c
            }

            function y(e, t) {
                return t.isGuildStageVoice() ? T.BITRATE_DEFAULT : null == e ? T.BITRATE_MAX : Math.max(e.hasFeature(T.GuildFeatures.VIP_REGIONS) ? f.BoostedGuildFeatures[T.BoostedGuildTiers.TIER_3].limits.bitrate : T.BITRATE_MAX, f.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
            }

            function v(e) {
                let {
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: r,
                    voiceStates: i
                } = e, l = function(e) {
                    let {
                        channels: t,
                        selectedChannelId: n,
                        selectedVoiceChannelId: r,
                        voiceStates: i
                    } = e, l = [];
                    return t.forEach(e => {
                        if (e.id === r || e.id === n) return;
                        let t = i[e.id];
                        null != t && (e.isGuildStageVoice() ? t.forEach(e => {
                            (0, o.getAudienceRequestToSpeakState)(e.voiceState) === o.RequestToSpeakStates.ON_STAGE && l.push(e)
                        }) : t.forEach(e => l.push(e)))
                    }), l
                }({
                    channels: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: r,
                    voiceStates: i
                });
                return l.map(e => e.user)
            }

            function D(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case T.ChannelTypes.DM:
                        return p.default.Messages.DM;
                    case T.ChannelTypes.GROUP_DM:
                        return p.default.Messages.GROUP_DM;
                    case T.ChannelTypes.GUILD_TEXT:
                        return p.default.Messages.TEXT_CHANNEL;
                    case T.ChannelTypes.GUILD_FORUM:
                        return p.default.Messages.FORUM_CHANNEL;
                    case T.ChannelTypes.GUILD_MEDIA:
                        return p.default.Messages.MEDIA_CHANNEL;
                    case T.ChannelTypes.GUILD_VOICE:
                        return p.default.Messages.VOICE_CHANNEL;
                    case T.ChannelTypes.GUILD_STAGE_VOICE:
                        return p.default.Messages.STAGE_CHANNEL;
                    case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return p.default.Messages.NEWS_CHANNEL;
                    case T.ChannelTypes.GUILD_STORE:
                        return p.default.Messages.STORE_CHANNEL;
                    case T.ChannelTypes.GUILD_CATEGORY:
                        return p.default.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function U(e) {
                if (null == e) return "text";
                let t = e.isMediaChannel();
                if (e.type === T.ChannelTypes.GUILD_VOICE) return _.default.can(T.Permissions.CONNECT, e) ? "voice" : "voice-locked";
                if (e.type === T.ChannelTypes.GUILD_STAGE_VOICE) return _.default.can(T.Permissions.CONNECT, e) ? "stage" : "stage-locked";
                if (d.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
                else if (e.type === T.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
                else if (e.type === T.ChannelTypes.GUILD_MEDIA) return "media";
                else if (d.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
            }

            function M(e) {
                let t;
                let n = s.default.getChannel(c.default.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === T.ChannelTypes.GUILD_TEXT) t = n.id;
                else {
                    let n = E.default.getDefaultChannel(e);
                    t = null != n ? n.id : null
                }
                return T.Routes.CHANNEL(e, t)
            }

            function G(e, t, n, r) {
                return "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL(e, t, n)).concat(null == r ? "" : "?summaryId=".concat(r))
            }

            function w(e, t, n, r) {
                let i;
                let l = e.getGuildId(),
                    u = (0, a.canUseMediaPostEmbed)(l, t);
                if (null != t && u) {
                    var o, d, s, E;
                    o = l, d = t.id, s = e.id, E = e.id, i = null == o || null == d || null == s ? G(o, d, E) : "".concat(location.protocol, "//").concat(location.host).concat(T.Routes.CHANNEL_THREAD_VIEW(o, d, s, E))
                } else i = null != r ? r : G(l, e.id, n);
                return i
            }