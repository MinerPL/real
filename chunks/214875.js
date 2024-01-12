            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            }), n("702976"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("823411"),
                r = n("115718"),
                o = n("575365"),
                u = n("716241"),
                d = n("382483"),
                c = n("701916"),
                E = n("939398"),
                f = n("815553"),
                _ = n("191145"),
                h = n("605250"),
                C = n("619443"),
                T = n("963103"),
                I = n("778613"),
                S = n("398604"),
                N = n("123561"),
                A = n("288518"),
                p = n("834052"),
                m = n("845579"),
                g = n("42203"),
                R = n("546463"),
                O = n("26989"),
                L = n("305961"),
                v = n("42887"),
                M = n("377253"),
                P = n("957255"),
                D = n("945956"),
                y = n("568307"),
                x = n("18494"),
                b = n("162771"),
                U = n("101125"),
                G = n("282109"),
                j = n("697218"),
                k = n("330338"),
                w = n("545429"),
                F = n("860957"),
                B = n("599110"),
                H = n("568734"),
                V = n("449008"),
                Y = n("50885"),
                W = n("49111"),
                K = n("6791");
            class z extends s.PureComponent {
                componentDidMount() {
                    let {
                        selectedChannelId: e,
                        connected: t,
                        isNSFWChannel: n,
                        channelParentId: a,
                        isTextInVoice: s,
                        canSendMessage: i,
                        hasPendingMemberAction: l
                    } = this.props;
                    t && null != e && ((0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
                        ...(0, u.getChannelOpenedMetadata)(e),
                        channel_is_nsfw: n,
                        parent_id: a,
                        can_send_message: i,
                        has_pending_member_action: l
                    }), s && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
                        channel_is_nsfw: n
                    }))
                }
                componentDidUpdate(e) {
                    var t, n, a;
                    let {
                        voiceChannelId: s,
                        voiceChannelGuildId: i,
                        voiceChannelType: o,
                        voiceChannelBitrate: C,
                        videoEnabled: T,
                        isScreenSharing: I,
                        runningGame: A,
                        runningGamePid: O,
                        selectedChannelId: v,
                        selectedGuildId: P,
                        channelParentId: x,
                        connected: j,
                        homeLink: k,
                        friendsTabSection: w,
                        isNSFWChannel: z,
                        isMemberPending: q,
                        hasPreviewEnabled: Q,
                        postableChannelCount: Z,
                        isTextInVoice: X,
                        canSendMessage: J,
                        numMessageRequests: $,
                        hasPendingMemberAction: ee
                    } = this.props;
                    if (e.voiceChannelId !== s && null != e.voiceChannelId) {
                        let t = y.default.getCurrentGameForAnalytics(),
                            n = null != t ? t.name : "",
                            a = p.default.getStageInstanceByChannel(e.voiceChannelId),
                            s = S.default.getActiveEventByChannel(e.voiceChannelId);
                        B.default.track(W.AnalyticEvents.LEAVE_VOICE_CHANNEL, {
                            channel_id: e.voiceChannelId,
                            channel_type: e.voiceChannelType,
                            channel_bitrate: e.voiceChannelBitrate,
                            guild_id: e.voiceChannelGuildId,
                            rtc_connection_id: D.default.getRTCConnectionId(),
                            game_name: n,
                            duration: D.default.getDuration(),
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            media_session_id: D.default.getMediaSessionId(),
                            stage_instance_id: null == a ? void 0 : a.id,
                            guild_scheduled_event_id: null == s ? void 0 : s.id,
                            ...(0, u.getVoiceStateMetadata)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                            ...D.default.getVoiceStateStats(),
                            ..._.default.getSelectedParticipantStats(e.voiceChannelId)
                        })
                    }
                    if (e.voiceChannelId !== s && null != s) {
                        let e = y.default.getCurrentGameForAnalytics(),
                            t = null != e ? e.name : "",
                            n = p.default.getStageInstanceByChannel(s),
                            a = S.default.getActiveEventByChannel(s);
                        (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
                            ...(0, u.getChannelOpenedMetadata)(s),
                            channel_id: s,
                            channel_is_nsfw: z,
                            parent_id: x,
                            can_send_message: J,
                            has_pending_member_action: ee
                        }), B.default.track(W.AnalyticEvents.JOIN_VOICE_CHANNEL, {
                            channel_id: s,
                            channel_type: o,
                            channel_bitrate: C,
                            guild_id: i,
                            game_name: t,
                            game_platform: this.props.gamePlatform,
                            game_id: this.props.gameId,
                            stage_instance_id: null == n ? void 0 : n.id,
                            guild_scheduled_event_id: null == a ? void 0 : a.id,
                            ...(0, u.getCustomStatusMetadata)(i, s),
                            ...(0, u.getVoiceStateMetadata)(i, s, T)
                        })
                    }
                    if (e.runningGame !== A && null != A && !A.isLauncher) {
                        let e = R.default.getGameByName(A.name),
                            t = y.default.getOverrideForGame(A),
                            n = L.default.getGuildIds(),
                            a = m.ActivityRestrictedGuilds.getSetting(),
                            s = n.filter(e => !a.includes(e)).slice(0, 200),
                            i = null;
                        i = null != t ? "custom_override" : null != e ? "verified_game" : "launcher";
                        let o = (0, y.getOverlayGameStatus)(A);
                        if (setTimeout(() => {
                                var t;
                                let n = Y.default.GetWindowFullscreenTypeByPid(A.pid, A.name, A.fullscreenType);
                                B.default.track(W.AnalyticEvents.LAUNCH_GAME, {
                                    game: A.name,
                                    game_id: null == e ? null : e.id,
                                    verified: null != e,
                                    elevated: A.elevated,
                                    is_launcher: null !== (t = null == A ? void 0 : A.isLauncher) && void 0 !== t && t,
                                    game_platform: W.ActivityGamePlatforms.DESKTOP,
                                    detection_method: i,
                                    distributor: A.distributor,
                                    is_overlay_enabled: F.default.enabled,
                                    is_overlay_game_enabled: o.enabled,
                                    is_overlay_game_source: o.source,
                                    fullscreen_type: r.RunningProcessFullscreenType[n],
                                    overlay_method: K.OverlayMethod[o.overlayMethod],
                                    activity_status_enabled: m.ShowCurrentGame.getSetting(),
                                    activity_status_shared_guilds: s,
                                    current_user_status: U.default.getStatus()
                                })
                            }, 1e4), null != A.name && null != O && R.default.shouldReport(A.name)) {
                            let e = A.name;
                            l.default.identifyGame(O, e).then(e => l.default.reportUnverifiedGame(e)).catch(e => new(0, h.default)("AutoAnalytics").error("Cannot identify game", e))
                        }
                    }
                    if ((e.videoEnabled !== T || e.isScreenSharing !== I) && null != s) {
                        let e = "none",
                            t = [I ? "screen" : null, T ? "camera" : null].filter(V.isNotNullish),
                            n = null;
                        I ? (e = "screen", n = (0, E.getDesktopSourceMetadata)()) : T && (e = "camera"), B.default.track(W.AnalyticEvents.VIDEO_INPUT_TOGGLED, {
                            video_input_type: e,
                            video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                            enabled_inputs: t,
                            preview_enabled: m.AlwaysPreviewVideo.getSetting(),
                            ...n,
                            ...this.getGameMetadata(),
                            ...(0, u.collectVoiceAnalyticsMetadata)(s)
                        })
                    }
                    if (j && null != P && (P !== e.selectedGuildId || !e.connected || q && !e.isMemberPending)) {
                        let e = {
                            ...q ? {
                                is_pending: q,
                                preview_enabled: Q
                            } : {},
                            postable_channels: Z,
                            premium_progress_bar_enabled: null !== (n = null === (t = L.default.getGuild(b.default.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) && void 0 !== n && n,
                            viewing_all_channels: !G.default.isOptInEnabled(P),
                            num_recent_channels: N.default.recentsChannelCount(P)
                        };
                        (0, u.trackWithMetadata)(W.AnalyticEvents.GUILD_VIEWED, e)
                    } else j && null == P && k === W.Routes.FRIENDS && (!e.connected || w !== e.friendsTabSection || k !== e.homeLink) ? B.default.track(W.AnalyticEvents.FRIENDS_LIST_VIEWED, {
                        tab_opened: w,
                        ...(0, d.default)(),
                        ...(0, f.getNowPlayingAnalytics)()
                    }) : j && null == P && k === W.Routes.MESSAGE_REQUESTS && (!e.connected || k !== e.homeLink) && !this.isMessageRequestsInitialized && (this.isMessageRequestsInitialized = !0, B.default.track(W.AnalyticEvents.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: $
                    }));
                    if (j && null != v && (!e.connected || v !== e.selectedChannelId || P !== e.selectedGuildId)) {
                        let t = e.selectedChannelId,
                            n = g.default.getChannel(t),
                            s = L.default.getGuild(null == n ? void 0 : n.getGuildId());
                        if (null != t && null != n && null != s && s.publicUpdatesChannelId === t) {
                            let e = M.default.getMessages(t),
                                i = e.toArray().reverse(),
                                l = i.find(e => {
                                    var t;
                                    return (0, H.hasFlag)(e.flags, W.MessageFlags.IS_CROSSPOST) && (null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === "667560445975986187"
                                });
                            B.default.track(W.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
                                last_message_id: null == l ? void 0 : l.id,
                                last_message_reference_message_id: null == l ? void 0 : null === (a = l.messageReference) || void 0 === a ? void 0 : a.message_id,
                                messages_loaded: e.hasFetched,
                                ...(0, u.collectChannelAnalyticsMetadata)(n),
                                ...(0, u.collectGuildAnalyticsMetadata)(s.id)
                            })
                        }
                        let i = (0, c.collectThreadMetadata)(g.default.getChannel(v), !0);
                        (0, u.trackWithMetadata)(W.AnalyticEvents.CHANNEL_OPENED, {
                            channel_is_nsfw: z,
                            parent_id: x,
                            can_send_message: J,
                            has_pending_member_action: ee,
                            ...i,
                            ...(0, u.getChannelOpenedMetadata)(v)
                        }), X && (0, u.trackWithMetadata)(W.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
                            channel_is_nsfw: z
                        })
                    }
                }
                getGameMetadata() {
                    return {
                        game_platform: this.props.gamePlatform,
                        game_name: this.props.gameName,
                        game_exe_name: this.props.gameExeName,
                        game_id: this.props.gameId
                    }
                }
                render() {
                    return null
                }
                constructor(...e) {
                    super(...e), this.isMessageRequestsInitialized = !1
                }
            }

            function q() {
                var e;
                let [t, n] = (0, i.useStateFromStoresArray)([x.default], () => [x.default.getVoiceChannelId(), x.default.getChannelId()], []), s = (0, i.useStateFromStores)([g.default], () => g.default.getChannel(n), [n]), l = (0, i.useStateFromStores)([_.default], () => (null == s ? void 0 : s.id) != null && _.default.getChatOpen(s.id), [s]), r = null == s ? void 0 : s.nsfw, u = null !== (e = null == s ? void 0 : s.parent_id) && void 0 !== e ? e : void 0, d = (0, i.useStateFromStores)([g.default], () => g.default.getChannel(t), [t]), c = (0, i.useStateFromStores)([b.default], () => b.default.getGuildId(), []), E = (0, i.useStateFromStores)([L.default], () => L.default.getGuild(c), [c]), f = (0, i.useStateFromStores)([j.default], () => j.default.getCurrentUser(), []), h = (0, i.useStateFromStores)([O.default], () => {
                    var e, t;
                    return null != f && null != c && null !== (t = null === (e = O.default.getMember(c, f.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== t && t
                }, [f, c]), S = (0, i.useStateFromStores)([w.default], () => w.default.getState().section, []), N = (0, i.useStateFromStores)([k.default], () => k.default.getHomeLink(), []), p = (0, i.useStateFromStores)([C.default], () => C.default.isConnected(), []), [m, R] = (0, i.useStateFromStoresArray)([v.default], () => [v.default.isVideoEnabled(), v.default.isScreenSharing()], []), M = (0, i.useStateFromStores)([U.default], () => U.default.getPrimaryActivity(), []), D = (0, i.useStateFromStores)([y.default], () => y.default.getCurrentGameForAnalytics(), []), G = (0, T.default)(c), F = (0, i.useStateFromStores)([P.default], () => P.default.can(W.Permissions.SEND_MESSAGES, s)), B = (0, i.useStateFromStores)([A.default], () => A.default.getMessageRequestsCount(), []), H = (0, I.useHasPendingMemberAction)(null == E ? void 0 : E.id, null == s ? void 0 : s.id), V = {
                    selectedChannelId: n,
                    channelParentId: u,
                    isNSFWChannel: r,
                    selectedGuildId: c,
                    friendsTabSection: S,
                    homeLink: N,
                    connected: p,
                    videoEnabled: m,
                    isScreenSharing: R,
                    voiceChannelId: null == d ? void 0 : d.id,
                    voiceChannelGuildId: null == d ? void 0 : d.getGuildId(),
                    voiceChannelType: null == d ? void 0 : d.type,
                    voiceChannelBitrate: null == d ? void 0 : d.bitrate,
                    runningGame: D,
                    runningGamePid: null != D ? D.pid : null,
                    gamePlatform: (0, o.default)(M),
                    gameName: null != M ? M.name : null,
                    gameId: null != M ? M.application_id : null,
                    gameExeName: null != D ? D.exeName : null,
                    hasPreviewEnabled: null == E ? void 0 : E.features.has(W.GuildFeatures.PREVIEW_ENABLED),
                    isMemberPending: h,
                    postableChannelCount: G,
                    isTextInVoice: l,
                    canSendMessage: F,
                    numMessageRequests: B,
                    hasPendingMemberAction: H
                };
                return (0, a.jsx)(z, {
                    ...V
                })
            }