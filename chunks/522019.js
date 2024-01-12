            "use strict";
            n.r(t), n.d(t, {
                VoiceWidget: function() {
                    return er
                },
                default: function() {
                    return ed
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                o = n("446674"),
                r = n("669491"),
                d = n("769846"),
                u = n("77078"),
                c = n("272030"),
                f = n("640583"),
                h = n("539405"),
                p = n("990766"),
                g = n("899633"),
                m = n("442939"),
                E = n("679653"),
                S = n("374014"),
                v = n("560367"),
                y = n("293383"),
                C = n("375202"),
                N = n("49040"),
                O = n("488464"),
                T = n("998716"),
                I = n("331759"),
                _ = n("857398"),
                A = n("373469"),
                x = n("271938"),
                R = n("42203"),
                M = n("546463"),
                L = n("42887"),
                D = n("568307"),
                j = n("18494"),
                w = n("280168"),
                k = n("703370"),
                b = n("316133"),
                P = n("901165"),
                V = n("145131"),
                U = n("953109"),
                B = n("673220"),
                F = n("474571"),
                H = n("519794"),
                G = n("368121"),
                W = n("985622"),
                Y = n("393900"),
                z = n("258078"),
                K = n("560995"),
                Z = n("762489"),
                X = n("68148"),
                J = n("334572"),
                Q = n("158998"),
                q = n("819068"),
                $ = n("999819"),
                ee = n("664980"),
                et = n("488777"),
                en = n("880584"),
                ei = n("49111"),
                ea = n("353927"),
                el = n("782340"),
                es = n("506030");

            function eo(e) {
                let {
                    flipped: t = !1,
                    locked: n = !1,
                    user: l,
                    nick: r,
                    displayNameMode: d,
                    displayUserMode: u,
                    size: c = ei.OverlayAvatarSizes.LARGE,
                    onClick: f,
                    onContextMenu: h,
                    context: p,
                    guildId: m,
                    voiceState: E
                } = e, {
                    showKeybindIndicators: S
                } = $.default.useExperiment({
                    location: "overlay_voice_widget"
                }), v = (0, o.useStateFromStores)([P.default], () => P.default.showKeybindIndicators), y = (0, o.useStateFromStores)([x.default], () => x.default.getId()), C = (0, o.useStateFromStores)([L.default], () => L.default.isLocalMute(l.id)), N = (0, o.useStateFromStores)([A.default], () => A.default.getCurrentUserActiveStream()), O = (0, o.useStateFromStoresArray)([A.default], () => null != N ? A.default.getViewerIds(N) : []), T = (0, g.default)({
                    userId: l.id,
                    context: p
                }), I = (0, o.useStateFromStores)([w.default], () => w.default.isPrioritySpeaker(l.id, p)), _ = (0, o.useStateFromStores)([A.default], () => null != A.default.getStreamForUser(l.id, m)), R = a.useMemo(() => null != N && N.ownerId !== l.id && O.includes(l.id), [N, l.id, O]);
                if (u === ei.OverlayDisplayUsers.ONLY_WHILE_SPEAKING && n && !T) return null;
                let M = l.id === y,
                    {
                        mute: D,
                        selfMute: j,
                        suppress: k,
                        deaf: b,
                        selfDeaf: V
                    } = E,
                    U = S && v,
                    B = j && (!M || !U);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(X.default, {
                        guildId: m,
                        onClick: n ? void 0 : e => null == f ? void 0 : f(e, l),
                        onContextMenu: n ? void 0 : e => null == h ? void 0 : h(e, l),
                        className: s(es.voiceUserWrapper, {
                            [es.faded]: !T,
                            [es.interactive]: !n
                        }),
                        user: l,
                        nick: r,
                        speaking: !1,
                        flipped: t,
                        isStreaming: _,
                        iconClassName: s(es.voiceIcon, {
                            [es.locked]: n
                        }),
                        isWatching: R,
                        size: c,
                        priority: I,
                        mute: D || B || C,
                        localMute: C,
                        serverMute: D || k,
                        deaf: b || V,
                        serverDeaf: b,
                        userNameClassName: s(es.username, {
                            [es.locked]: n,
                            [es.hidden]: n && (d === ei.OverlayDisplayNames.NEVER || !T && d === ei.OverlayDisplayNames.ONLY_WHILE_SPEAKING)
                        })
                    }), M && U && (0, i.jsx)(et.default, {
                        value: j,
                        action: ei.GlobalKeybindActions.TOGGLE_MUTE,
                        shouldShow: !D && !k
                    })]
                })
            }
            class er extends a.PureComponent {
                renderVoiceUsers() {
                    let {
                        context: e,
                        sortedVoiceStates: t,
                        displayNameMode: n,
                        displayUserMode: a,
                        locked: l,
                        isPreviewingInGame: o,
                        channel: r,
                        anchor: u,
                        avatarSizeMode: c
                    } = this.props, f = null != u.right, h = t.map(t => {
                        var s;
                        let {
                            user: d,
                            voiceState: u,
                            member: h
                        } = t;
                        if (null == d || null == r || null == e) return null;
                        let p = l || o;
                        return (0, i.jsx)(eo, {
                            guildId: null == r ? void 0 : r.guild_id,
                            user: d,
                            nick: null !== (s = null == h ? void 0 : h.nick) && void 0 !== s ? s : Q.default.getName(d),
                            flipped: f,
                            voiceState: u,
                            displayNameMode: n,
                            displayUserMode: a,
                            size: c,
                            locked: p,
                            onContextMenu: this.handleUserContextMenu,
                            onClick: this.handleUserContextMenu,
                            context: e
                        }, d.id)
                    });
                    return (0, i.jsx)(K.default.Body, {
                        className: s({
                            [d.default.VOICE_WIDGET_TOP_MARGIN]: l,
                            [es.bottomMargin]: l
                        }),
                        children: (0, i.jsx)(X.VoiceUserList, {
                            className: es.voiceList,
                            children: h
                        })
                    })
                }
                renderHeader() {
                    let {
                        pinned: e,
                        title: t,
                        isPreviewingInGame: n
                    } = this.props;
                    return (0, i.jsxs)(K.default.Bar, {
                        className: s(es.draggableStartArea, {
                            [es.preview]: n
                        }),
                        children: [(0, i.jsxs)(K.default.Content, {
                            dynamicSize: !0,
                            className: s(es.content, {
                                [es.hidden]: n
                            }),
                            children: [(0, i.jsx)(B.default, {
                                color: r.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(es.icon, es.faded, es.dragIcon)
                            }), (0, i.jsx)(G.default, {
                                color: r.default.unsafe_rawColors.WHITE_500.css,
                                width: 20,
                                height: 20,
                                className: s(es.icon, es.faded, es.speakerIcon)
                            }), (0, i.jsx)(z.default, {
                                color: r.default.unsafe_rawColors.PRIMARY_200.css,
                                className: es.title,
                                children: t
                            })]
                        }), n ? null : (0, i.jsx)(K.default.Icon, {
                            icon: F.default,
                            label: el.default.Messages.VOICE_SETTINGS,
                            onClick: this.handleOpenVoiceSettings,
                            tooltipPosition: "left",
                            size: 18
                        }), n ? null : (0, i.jsx)(K.default.Icon, {
                            icon: e ? Y.default : H.default,
                            label: e ? el.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : el.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME,
                            onClick: this.handlePin,
                            tooltipPosition: "left",
                            size: 18,
                            isActive: e
                        })]
                    })
                }
                renderStreamerSettings() {
                    var e;
                    let {
                        locked: t,
                        pinned: n,
                        isPreviewingInGame: a,
                        channel: l,
                        application: o,
                        streamMetadata: r,
                        streamApplication: d,
                        stream: c
                    } = this.props;
                    if (t || null == c || null == l) return null;
                    let {
                        sanitizedTitle: f,
                        title: h
                    } = (0, v.default)(r);
                    return (0, i.jsx)(K.default.Bar, {
                        className: s(es.streamerControls, {
                            [es.hidden]: a,
                            [es.unpinned]: !n
                        }),
                        children: (0, i.jsxs)(K.default.Content, {
                            className: es.streamerContent,
                            dynamicSize: !0,
                            children: [(0, i.jsxs)("div", {
                                className: es.streamerInner,
                                children: [(null == d ? void 0 : d.id) != null && d.id === (null == o ? void 0 : o.id) ? (0, i.jsx)(U.default, {
                                    className: es.gameIcon,
                                    game: o
                                }) : (0, i.jsx)(y.default, {
                                    title: f
                                }), (0, i.jsxs)(V.default, {
                                    direction: V.default.Direction.VERTICAL,
                                    justify: V.default.Justify.BETWEEN,
                                    className: es.streamerInfo,
                                    children: [(0, i.jsx)(u.Text, {
                                        className: es.streaming,
                                        variant: "text-sm/normal",
                                        children: el.default.Messages.STATUS_STREAMING
                                    }), (0, i.jsx)(Z.default, {
                                        children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : h
                                    })]
                                })]
                            }), (0, i.jsxs)(V.default, {
                                grow: 0,
                                children: [(0, i.jsx)("div", {
                                    className: es.streamerIconWrapper,
                                    children: (0, i.jsx)(I.default, {
                                        stream: c,
                                        iconClassName: es.streamerIcon,
                                        appContext: ei.AppContext.OVERLAY
                                    })
                                }), (0, i.jsx)("div", {
                                    className: es.streamerIconWrapper,
                                    children: (0, i.jsx)(_.default, {
                                        stream: c,
                                        appContext: ei.AppContext.OVERLAY
                                    })
                                }), (0, i.jsx)("div", {
                                    className: es.streamerIconWrapper,
                                    children: (0, i.jsx)(u.TooltipContainer, {
                                        text: el.default.Messages.STOP_STREAMING,
                                        children: (0, i.jsx)(u.Button, {
                                            onClick: this.handleStopStream,
                                            look: u.Button.Looks.BLANK,
                                            size: u.Button.Sizes.NONE,
                                            children: (0, i.jsx)(W.default, {
                                                className: es.streamerIcon
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }
                componentDidMount() {
                    (0, en.dispatchOverlayWidgetChanged)(this.props, this.shouldDisplay())
                }
                componentDidUpdate(e) {
                    (0, en.dispatchOverlayWidgetIfChanged)(e, this.props, this.shouldDisplay)
                }
                shouldDisplay() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            context: t,
                            locked: n,
                            pinned: i,
                            sortedVoiceStates: a,
                            channel: l
                        } = e;
                    return 0 !== a.length && null != t && null != l && (!n || !!i) && !0
                }
                render() {
                    let {
                        context: e,
                        lobbyId: t,
                        locked: n,
                        pinned: a,
                        isPreviewingInGame: l,
                        channel: o
                    } = this.props;
                    if (null == o || null == e || !this.shouldDisplay()) return null;
                    let r = ei.OverlayWidgetTypes.UNPINNED;
                    return a && (r = ei.OverlayWidgetTypes.PINNED), l && (r = ei.OverlayWidgetTypes.IN_GAME_PREVIEW), n && (r = ei.OverlayWidgetTypes.IN_GAME), (0, i.jsxs)(K.default, {
                        type: r,
                        width: 280,
                        children: [n ? null : this.renderHeader(), this.renderVoiceUsers(), this.renderStreamerSettings(), n ? null : (0, i.jsx)(ee.default, {
                            className: s({
                                [es.preview]: l
                            }),
                            contentClassName: s({
                                [es.hidden]: l
                            }),
                            channel: o,
                            lobbyId: t,
                            context: e,
                            pinned: a
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleUserContextMenu = (e, t) => {
                        let {
                            context: a
                        } = this.props;
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("406784").then(n.bind(n, "406784"));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: a
                            })
                        })
                    }, this.handleOpenVoiceSettings = () => {
                        let {
                            context: e,
                            channel: t,
                            title: a
                        } = this.props;
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await n.el("301450").then(n.bind(n, "301450"));
                            return n => (0, i.jsx)(l, {
                                ...n,
                                mediaEngineContext: e,
                                title: null != t ? null : a
                            })
                        })
                    }, this.handlePin = () => {
                        var e, t, n;
                        let i = !this.props.pinned;
                        h.default.track(ei.AnalyticEvents.OVERLAY_PIN_TOGGLED, {
                            pinned: i,
                            guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                            channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                            channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                            widget_type: ei.OverlayWidgets.VOICE
                        });
                        let {
                            id: a
                        } = this.props;
                        (0, f.togglePinned)(a)
                    }, this.handleStopStream = () => {
                        let {
                            stream: e
                        } = this.props;
                        null != e && p.stopStream((0, S.encodeStreamKey)(e))
                    }
                }
            }
            er.defaultProps = {
                context: ea.MediaEngineContextTypes.DEFAULT
            };

            function ed(e) {
                var t;
                let n = (0, o.useStateFromStores)([j.default, R.default], () => R.default.getChannel(j.default.getVoiceChannelId())),
                    l = (0, E.default)(n),
                    s = function(e) {
                        let [t] = (0, o.useStateFromStores)([b.default, O.default], () => null == e ? [
                            [], -1
                        ] : e.isGuildStageVoice() ? [O.default.getMutableParticipants(e.id, T.StageChannelParticipantNamedIndex.SPEAKER), O.default.getParticipantsVersion(e.id)] : [b.default.getVoiceStatesForChannel(e), b.default.getVoiceStateVersion(e.getGuildId())], [e], J.isVersionEqual), n = (0, o.useStateFromStores)([x.default], () => x.default.getId()), {
                            showKeybindIndicators: i
                        } = $.default.useExperiment({
                            location: "voice_widget"
                        });
                        return a.useMemo(() => {
                            if (i) {
                                let e = [...t];
                                return e.sort((e, t) => e.user.id === n ? -1 : t.user.id === n ? 1 : 0)
                            }
                            return t
                        }, [t, n, i])
                    }(n),
                    r = (0, o.useStateFromStores)([A.default], () => A.default.getStreamerActiveStreamMetadata()),
                    d = (0, o.useStateFromStores)([D.default, k.default, M.default], () => {
                        var e;
                        let t = (0, C.default)(D.default, k.default);
                        return null != t ? null === (e = M.default.getGameByGameData(t)) || void 0 === e ? void 0 : e.id : null
                    }),
                    u = (0, m.useGetOrFetchApplication)(d),
                    c = (0, o.useStateFromStoresObject)([D.default, k.default, A.default, P.default], () => {
                        let e = (0, C.default)(D.default, k.default),
                            t = A.default.getCurrentUserActiveStream();
                        return {
                            displayUserMode: P.default.getDisplayUserMode(),
                            displayNameMode: P.default.getDisplayNameMode(),
                            avatarSizeMode: P.default.getAvatarSizeMode(),
                            streamApplication: (null == r ? void 0 : r.pid) === (0, q.getPID)() ? (0, N.default)(e) : null,
                            stream: t
                        }
                    });
                return (0, i.jsx)(er, {
                    ...c,
                    application: u,
                    ...e,
                    sortedVoiceStates: s,
                    channel: n,
                    title: null != l ? l : "",
                    streamMetadata: r,
                    streamApplication: null !== (t = c.streamApplication) && void 0 !== t ? t : {
                        id: null,
                        name: null == r ? void 0 : r.sourceName
                    }
                })
            }