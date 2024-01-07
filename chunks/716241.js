            "use strict";
            n.r(e), n.d(e, {
                collectGuildAnalyticsMetadata: function() {
                    return C
                },
                collectChannelAnalyticsMetadataFromId: function() {
                    return O
                },
                collectChannelAnalyticsMetadata: function() {
                    return L
                },
                collectVoiceAnalyticsMetadata: function() {
                    return M
                },
                trackWithMetadata: function() {
                    return U
                },
                getVoiceStateMetadata: function() {
                    return D
                },
                getCustomStatusMetadata: function() {
                    return G
                },
                default: function() {
                    return P
                }
            });
            var l = n("917351"),
                u = n.n(l),
                i = n("316693"),
                a = n("233069"),
                s = n("271938"),
                r = n("42203"),
                c = n("923959"),
                d = n("525065"),
                o = n("26989"),
                f = n("305961"),
                _ = n("42887"),
                S = n("957255"),
                g = n("824563"),
                E = n("945956"),
                v = n("18494"),
                p = n("162771"),
                T = n("800762"),
                A = n("599110"),
                I = n("991170"),
                h = n("761932"),
                y = n("49111"),
                m = n("724210");

            function N(t) {
                let e = 0;
                for (let n in t) e += 1;
                return e
            }

            function C(t) {
                var e;
                if (null == t) return null;
                let n = f.default.getGuild(t);
                if (null == n) return null;
                let l = s.default.getId(),
                    u = o.default.getMember(t, l),
                    i = c.default.getChannels(t),
                    a = i[c.GUILD_SELECTABLE_CHANNELS_KEY].length,
                    r = i[c.GUILD_VOCAL_CHANNELS_KEY].length,
                    _ = T.default.getVoiceStates(t);
                return {
                    guild_id: n.id,
                    guild_size_total: d.default.getMemberCount(t),
                    guild_num_channels: a + r,
                    guild_num_text_channels: a,
                    guild_num_voice_channels: r,
                    guild_num_roles: N(n.roles),
                    guild_member_num_roles: null != u ? u.roles.length : 0,
                    guild_member_perms: String(null !== (e = S.default.getGuildPermissions(n)) && void 0 !== e ? e : I.default.NONE),
                    guild_is_vip: n.hasFeature(y.GuildFeatures.VIP_REGIONS),
                    is_member: null != u,
                    num_voice_channels_active: N(_)
                }
            }

            function O(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                return null == e ? null : L(e)
            }

            function L(t) {
                var e;
                if (null == t) return null;
                let n = !1,
                    l = t.getGuildId();
                if (null != l) {
                    let e = t => {
                        if (null == t) return !1;
                        let e = t.permissionOverwrites[l];
                        return null != e && i.default.has(e.deny, y.Permissions.VIEW_CHANNEL)
                    };
                    n = a.THREAD_CHANNEL_TYPES.has(t.type) && null != t.parent_id ? e(r.default.getChannel(t.parent_id)) : e(t)
                }
                return {
                    channel_id: t.id,
                    channel_type: t.type,
                    channel_size_total: t.isPrivate() ? t.recipients.length : 0,
                    channel_member_perms: String(null != l && null !== (e = S.default.getChannelPermissions(t)) && void 0 !== e ? e : I.default.NONE),
                    channel_hidden: n
                }
            }

            function M(t) {
                if (null == t) return null;
                let e = r.default.getChannel(t);
                if (null == e) return null;
                let n = _.default.isVideoEnabled(),
                    l = E.default.getMediaSessionId();
                return {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    media_session_id: l,
                    ...D(e.getGuildId(), e.id, n),
                    ...(0, h.getVoiceAnalyticsMetadataAdditional)()
                }
            }

            function U(t) {
                var e, n, l, u, i;
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (A.default.isThrottled(t)) return;
                let c = !("location" in a) || a.location !== y.AnalyticsLocations.GUILD_CREATE_INVITE_SUGGESTION,
                    d = "guild_id" in a ? a.guild_id : c ? p.default.getGuildId() : null,
                    o = "channel_id" in a ? a.channel_id : c ? v.default.getChannelId(d) : null,
                    f = r.default.getChannel(o);
                let _ = (e = f, n = d, null == e ? null != n ? n : null : e.isPrivate() ? null : null !== (u = null !== (l = e.getGuildId()) && void 0 !== l ? l : n) && void 0 !== u ? u : null);
                let S = {
                    ...a,
                    ...C(_),
                    ...null != d && null != o && (0, m.isStaticChannelRoute)(o) ? (i = 0, {
                        channel_static_route: o,
                        channel_hidden: !1
                    }) : L(f)
                };
                A.default.track(t, S, {
                    flush: s
                })
            }

            function D(t, e, n) {
                let l = {
                    voice_state_count: 0,
                    video_stream_count: 0,
                    video_enabled: n
                };
                return u(T.default.getVoiceStates(t)).filter(t => t.channelId === e).filter(t => t.userId !== s.default.getId()).forEach(t => {
                    l.voice_state_count++, (t.selfVideo || t.selfStream) && l.video_stream_count++
                }), l
            }

            function G(t, e) {
                let n = {
                    custom_status_count: 0
                };
                return u(T.default.getVoiceStates(t)).forEach(t => {
                    t.channelId === e && null != g.default.findActivity(t.userId, t => t.type === y.ActivityTypes.CUSTOM_STATUS) && n.custom_status_count++
                }), n
            }
            var P = {
                trackWithMetadata: U,
                getVoiceStateMetadata: D
            }