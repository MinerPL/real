            "use strict";
            n.r(t), n.d(t, {
                collectGuildAnalyticsMetadata: function() {
                    return P
                },
                collectChannelAnalyticsMetadataFromId: function() {
                    return R
                },
                collectChannelAnalyticsMetadata: function() {
                    return V
                },
                collectVoiceAnalyticsMetadata: function() {
                    return k
                },
                trackWithMetadata: function() {
                    return M
                },
                getChannelOpenedMetadata: function() {
                    return w
                },
                getVoiceStateMetadata: function() {
                    return L
                },
                getCustomStatusMetadata: function() {
                    return U
                },
                default: function() {
                    return G
                }
            });
            var s = n("917351"),
                i = n.n(s),
                r = n("316693"),
                a = n("507313"),
                o = n("233069"),
                d = n("271938"),
                u = n("42203"),
                l = n("923959"),
                f = n("525065"),
                _ = n("26989"),
                c = n("305961"),
                g = n("42887"),
                m = n("957255"),
                h = n("824563"),
                v = n("945956"),
                E = n("660478"),
                p = n("18494"),
                y = n("162771"),
                T = n("282109"),
                C = n("800762"),
                S = n("599110"),
                I = n("718517"),
                A = n("991170"),
                D = n("761932"),
                N = n("49111"),
                O = n("724210");

            function b(e) {
                let t = 0;
                for (let n in e) t += 1;
                return t
            }

            function P(e) {
                var t;
                if (null == e) return null;
                let n = c.default.getGuild(e);
                if (null == n) return null;
                let s = d.default.getId(),
                    i = _.default.getMember(e, s),
                    r = l.default.getChannels(e),
                    a = r[l.GUILD_SELECTABLE_CHANNELS_KEY].length,
                    o = r[l.GUILD_VOCAL_CHANNELS_KEY].length,
                    u = C.default.getVoiceStates(e);
                return {
                    guild_id: n.id,
                    guild_size_total: f.default.getMemberCount(e),
                    guild_num_channels: a + o,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: o,
                    guild_num_roles: b(n.roles),
                    guild_member_num_roles: null != i ? i.roles.length : 0,
                    guild_member_perms: String(null !== (t = m.default.getGuildPermissions(n)) && void 0 !== t ? t : A.default.NONE),
                    guild_is_vip: n.hasFeature(N.GuildFeatures.VIP_REGIONS),
                    is_member: null != i,
                    num_voice_channels_active: b(u)
                }
            }

            function R(e) {
                if (null == e) return null;
                let t = u.default.getChannel(e);
                return null == t ? null : V(t)
            }

            function V(e) {
                var t;
                if (null == e) return null;
                let n = !1,
                    s = e.getGuildId();
                if (null != s) {
                    let t = e => {
                        if (null == e) return !1;
                        let t = e.permissionOverwrites[s];
                        return null != t && r.default.has(t.deny, N.Permissions.VIEW_CHANNEL)
                    };
                    n = o.THREAD_CHANNEL_TYPES.has(e.type) && null != e.parent_id ? t(u.default.getChannel(e.parent_id)) : t(e)
                }
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
                    channel_member_perms: String(null != s && null !== (t = m.default.getChannelPermissions(e)) && void 0 !== t ? t : A.default.NONE),
                    channel_hidden: n
                }
            }

            function k(e) {
                if (null == e) return null;
                let t = u.default.getChannel(e);
                if (null == t) return null;
                let n = g.default.isVideoEnabled(),
                    s = v.default.getMediaSessionId();
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    guild_id: t.getGuildId(),
                    media_session_id: s,
                    ...L(t.getGuildId(), t.id, n),
                    ...(0, D.getVoiceAnalyticsMetadataAdditional)()
                }
            }

            function M(e) {
                var t, n, s, i, r;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (S.default.isThrottled(e)) return;
                let d = !("location" in a) || a.location !== N.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                    l = "guild_id" in a ? a.guild_id : d ? y.default.getGuildId() : null,
                    f = "channel_id" in a ? a.channel_id : d ? p.default.getChannelId(l) : null,
                    _ = u.default.getChannel(f);
                let c = (t = _, n = l, null == t ? null != n ? n : null : t.isPrivate() ? null : null !== (i = null !== (s = t.getGuildId()) && void 0 !== s ? s : n) && void 0 !== i ? i : null);
                let g = {
                    ...a,
                    ...P(c),
                    ...null != l && null != f && (0, O.isStaticChannelRoute)(f) ? (r = 0, {
                        channel_static_route: f,
                        channel_hidden: !1
                    }) : V(_)
                };
                S.default.track(e, g, {
                    flush: o
                })
            }

            function w(e) {
                let t = u.default.getChannel(e);
                if (null == t || null == t.guild_id) return {};
                let n = c.default.getGuild(t.guild_id);
                if (null == n) return {};
                let s = E.default.getSnapshot(e, 10 * I.default.Millis.SECOND);
                return {
                    channel_was_unread: s.unread,
                    channel_mention_count: s.mentionCount,
                    channel_is_muted: T.default.isChannelMuted(t.guild_id, t.id),
                    channel_resolved_unread_setting: T.default.resolveUnreadSetting(t),
                    channel_preset: (0, a.presetFromSettings)(T.default.resolveUnreadSetting(t), T.default.resolvedMessageNotifications(t)),
                    guild_was_unread: s.guildUnread,
                    guild_mention_count: s.guildMentionCount,
                    guild_is_muted: T.default.isMuted(t.guild_id),
                    guild_resolved_unread_setting: T.default.resolveGuildUnreadSetting(n),
                    guild_preset: (0, a.presetFromSettings)(T.default.resolveGuildUnreadSetting(n), T.default.getMessageNotifications(t.guild_id))
                }
            }

            function L(e, t, n) {
                let s = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                return i(C.default.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== d.default.getId()).forEach(e => {
                    s.voice_state_count++, (e.selfVideo || e.selfStream) && s.video_stream_count++
                }), s
            }

            function U(e, t) {
                let n = {
                    custom_status_count: 0
                };
                return i(C.default.getVoiceStates(e)).forEach(e => {
                    e.channelId === t && null != h.default.findActivity(e.userId, e => e.type === N.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
                }), n
            }
            var G = {
                trackWithMetadata: M,
                getVoiceStateMetadata: L
            }