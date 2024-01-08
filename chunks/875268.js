            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return el
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("627445"),
                o = n.n(i),
                r = n("917351"),
                s = n.n(r),
                d = n("446674"),
                u = n("77078"),
                c = n("629109"),
                p = n("406189"),
                f = n("54239"),
                m = n("716241"),
                h = n("754493"),
                v = n("858944"),
                I = n("191145"),
                P = n("161306"),
                S = n("836087"),
                C = n("679653"),
                g = n("374014"),
                y = n("479788"),
                E = n("430951"),
                T = n("16916"),
                A = n("383294"),
                x = n("393414"),
                N = n("908583"),
                M = n("550410"),
                j = n("598873"),
                _ = n("54727"),
                L = n("336971"),
                w = n("954519"),
                b = n("857398"),
                O = n("373469"),
                D = n("271938"),
                R = n("42887"),
                F = n("27618"),
                W = n("697218"),
                U = n("476640"),
                k = n("555035"),
                V = n("471671"),
                B = n("754775"),
                H = n("599110"),
                G = n("387111"),
                Y = n("158998"),
                J = n("788448"),
                z = n("540814"),
                K = n("683245"),
                X = n("772442"),
                Z = n("211019"),
                q = n("19065"),
                Q = n("977347"),
                $ = n("799808"),
                ee = n("49111"),
                et = n("99795"),
                en = n("944636");
            class ea extends l.PureComponent {
                get viewProperties() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t,
                        channel: n
                    } = this.props, a = (0, et.isStreamParticipant)(e), l = null != e && e.type !== et.ParticipantTypes.ACTIVITY && e.user.id === t, i = (null == e ? void 0 : e.type) === et.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === et.ParticipantTypes.USER;
                    return {
                        canPopout: a && !l,
                        canSettings: a && l,
                        canStopStream: a,
                        canSeeViewers: a,
                        canSeeParticipantName: i && n.type !== ee.ChannelTypes.DM,
                        canDisconnect: !a,
                        isSelf: l
                    }
                }
                get streamerPaused() {
                    let {
                        isMainWindowFocused: e,
                        activeSelfStream: t,
                        participantOnScreen: n
                    } = this.props, a = null != t && (null == n ? void 0 : n.id) === (0, g.encodeStreamKey)(t) && !e;
                    return a
                }
                get activeStreamForSelectedParticipant() {
                    let {
                        participantOnScreen: e,
                        activeStreams: t
                    } = this.props;
                    return (0, et.isStreamParticipant)(e) ? t.find(t => (0, g.encodeStreamKey)(t) === e.id) : null
                }
                getScreenMessage() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t
                    } = this.props;
                    if (!(0, et.isStreamParticipant)(e)) return null;
                    let n = this.activeStreamForSelectedParticipant;
                    return null == n ? null : (0, E.default)(n, e.user, e.user.id === t, this.streamerPaused)
                }
                isEmptyBroadcast() {
                    var e;
                    let {
                        isSelfBroadcasting: t,
                        channel: n
                    } = this.props;
                    return t && (null === (e = n.recipients) || void 0 === e ? void 0 : e.length) === 0
                }
                componentDidMount() {
                    let {
                        channel: e
                    } = this.props;
                    H.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: "pip",
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                componentWillUnmount() {
                    let {
                        channel: e
                    } = this.props;
                    H.default.track(ee.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                        video_layout: I.default.getLayout(e.id),
                        ...(0, m.collectVoiceAnalyticsMetadata)(e.id)
                    })
                }
                renderStreamState() {
                    let e = this.activeStreamForSelectedParticipant,
                        {
                            participantOnScreen: t
                        } = this.props;
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.ENDED) return (0, a.jsx)(K.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.FAILED) return (0, a.jsx)(X.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if (this.isEmptyBroadcast()) return (0, a.jsx)(J.default, {});
                    else if ((null == t ? void 0 : t.type) === et.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(Z.default, {
                        participant: t,
                        width: et.PIP_WIDTH
                    });
                    return null
                }
                renderParticipantName() {
                    let {
                        channel: e,
                        participantOnScreen: t
                    } = this.props;
                    if ((null == t ? void 0 : t.type) === et.ParticipantTypes.STREAM || (null == t ? void 0 : t.type) === et.ParticipantTypes.USER) {
                        var n;
                        let l = null !== (n = G.default.getNickname(e.getGuildId(), e.id, t.user)) && void 0 !== n ? n : Y.default.getName(t.user);
                        return (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            className: en.participantName,
                            lineClamp: 1,
                            children: l
                        })
                    }
                    return null
                }
                render() {
                    let {
                        channel: e,
                        streamId: t,
                        participantOnScreen: n,
                        isVideoEnabled: l
                    } = this.props, i = (0, C.computeChannelName)(e, W.default, F.default), o = this.isEmptyBroadcast(), r = (null == n ? void 0 : n.id) === D.default.getId() && l, s = this.renderStreamState(), d = null;
                    return (null == n ? void 0 : n.type) !== et.ParticipantTypes.ACTIVITY && (null != s ? d = s : ((null == n ? void 0 : n.type) === et.ParticipantTypes.USER || (null == n ? void 0 : n.type) === et.ParticipantTypes.STREAM) && (d = (0, a.jsx)(z.default, {
                        paused: this.streamerPaused,
                        streamId: t,
                        component: R.default.getVideoComponent(),
                        mirror: r,
                        children: (0, a.jsx)(B.default, {
                            size: u.AvatarSizes.SIZE_80,
                            src: null == n ? void 0 : n.user.getAvatarURL(e.guild_id, 80),
                            "aria-label": null == n ? void 0 : n.user.username
                        })
                    }))), (0, a.jsx)(N.default, {
                        timeout: 1800,
                        children: e => {
                            var t;
                            return (0, a.jsx)(j.default, {
                                title: i,
                                backgroundKey: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                                screenMessage: null == s ? this.getScreenMessage() : null,
                                onJumpToChannel: this.handleJumpToChannel,
                                renderBottomLeftControls: this.renderBottomLeftControls,
                                renderBottomRightControls: this.renderBottomRightControls,
                                preventIdleComponent: M.default,
                                width: et.PIP_WIDTH,
                                hideControls: o,
                                className: o ? en.emptyBroadcast : void 0,
                                innerClassName: o ? en.innerEmptyBroadcast : void 0,
                                ...e,
                                children: d
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        screensharePopoutOpen: !1
                    }, this._ref = l.createRef(), this.handleVideo = e => {
                        c.default.setVideoEnabled(e)
                    }, this.handleEnableVideoWhenUnavailable = () => {
                        let {
                            isVideoAvailable: e
                        } = this.props;
                        e ? this.handleVideo(!0) : (0, q.default)()
                    }, this.handleJumpToChannel = () => {
                        var e;
                        let {
                            channel: t
                        } = this.props;
                        (0, f.popAllLayers)();
                        let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                        p.default.channelListScrollTo(n, t.id), (0, x.transitionToGuild)(n, t.id)
                    }, this.handleStartStream = () => {
                        let {
                            canGoLive: e,
                            channel: t
                        } = this.props, n = t.getGuildId();
                        if (o(null != n, "Cannot go live in non guild channel"), !e) return (0, Q.default)();
                        (0, $.default)(n, t.id, ee.AnalyticsPages.GUILD_CHANNEL)
                    }, this.handleStopStream = () => {
                        let {
                            participantOnScreen: e,
                            isSelfBroadcasting: t
                        } = this.props;
                        o((0, et.isStreamParticipant)(e), "cannot stop stream for non streamer"), t ? (0, v.openStopBroadcastConfirmModal)(() => (0, T.default)(e.stream)) : (0, T.default)(e.stream)
                    }, this.handleOpenPopout = () => {
                        let {
                            channel: e
                        } = this.props;
                        A.openChannelCallPopout(e)
                    }, this.renderBottomLeftControls = () => {
                        let {
                            canSeeParticipantName: e
                        } = this.viewProperties;
                        return (0, a.jsx)(a.Fragment, {
                            children: e ? this.renderParticipantName() : null
                        })
                    }, this.renderBottomRightControls = () => {
                        let {
                            canSettings: e,
                            canPopout: t,
                            canDisconnect: n,
                            canStopStream: l,
                            canSeeViewers: i
                        } = this.viewProperties;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [i ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, l ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                        })
                    }, this.renderDisconnectButton = () => {
                        let {
                            channel: e
                        } = this.props;
                        return (0, a.jsx)(_.default, {
                            className: en.rightTrayIcon,
                            channel: e
                        })
                    }, this.renderStopStreamButton = () => {
                        let {
                            isSelf: e
                        } = this.viewProperties;
                        return (0, a.jsx)(w.default, {
                            isSelfStream: e,
                            className: en.rightTrayIcon,
                            onClick: this.handleStopStream
                        })
                    }, this.renderViewersIcon = () => {
                        let {
                            participantOnScreen: e,
                            channel: t
                        } = this.props;
                        return o((0, et.isStreamParticipant)(e) || (null == e ? void 0 : e.type) === et.ParticipantTypes.ACTIVITY, "Cannot render participants for participant type ".concat(null == e ? void 0 : e.type)), (0, a.jsx)(M.default, {
                            children: (0, a.jsx)(S.default, {
                                channelId: t.id,
                                guildId: t.getGuildId(),
                                className: en.rightTrayIcon,
                                participant: e,
                                compact: !0
                            })
                        })
                    }, this.renderPopoutIcon = () => (0, a.jsx)(L.default, {
                        className: en.rightTrayIcon,
                        popoutOpen: !1,
                        onOpenPopout: this.handleOpenPopout,
                        onClosePopout: ee.NOOP_NULL
                    }), this.renderSettingsIcon = () => {
                        let {
                            participantOnScreen: e,
                            activeStreams: t
                        } = this.props;
                        o((0, et.isStreamParticipant)(e), "Cannot render settings for non stream participant");
                        let n = t.find(t => (0, g.encodeStreamKey)(t) === e.id);
                        return null == n || n.state === ee.ApplicationStreamStates.ENDED ? null : (0, a.jsx)(b.default, {
                            stream: n,
                            className: en.rightTrayIcon,
                            appContext: ee.AppContext.APP
                        })
                    }
                }
            }
            var el = d.default.connectStores([R.default, I.default, D.default, U.default, k.default, O.default, V.default], e => {
                let {
                    channel: t
                } = e, n = U.default.getSpeaker(t.id), a = I.default.getParticipant(t.id, n), l = s(R.default.getVideoDevices()).values().first(), i = null == l || l.disabled, o = null != a && a.type !== et.ParticipantTypes.ACTIVITY && a.type !== et.ParticipantTypes.HIDDEN_STREAM ? k.default.getStreamId(a.user.id, t.getGuildId(), (0, P.default)(a.type)) : null, r = !i && R.default.isVideoEnabled(), d = (0, y.default)(R.default), u = D.default.getId(), c = O.default.getCurrentUserActiveStream(), p = (0, h.isBroadcastingInChannel)(t.id);
                return {
                    channel: t,
                    streamId: o,
                    participantOnScreen: a,
                    isVideoAvailable: !1 === i,
                    isVideoEnabled: r,
                    isSelfBroadcasting: p,
                    canGoLive: d,
                    currentUserId: u,
                    activeStreams: O.default.getAllActiveStreams(),
                    activeSelfStream: c,
                    isMainWindowFocused: V.default.isFocused()
                }
            })(ea)