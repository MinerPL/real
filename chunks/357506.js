            "use strict";
            let i;
            n.r(t), n.d(t, {
                default: function() {
                    return eh
                }
            }), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                o = n.n(s),
                r = n("499032"),
                d = n.n(r),
                u = n("483366"),
                c = n.n(u),
                f = n("969176"),
                h = n.n(f),
                p = n("446674"),
                g = n("77078"),
                m = n("404118"),
                S = n("272030"),
                E = n("539405"),
                v = n("304580"),
                y = n("175980"),
                C = n("485328"),
                I = n("827792"),
                N = n("812204"),
                T = n("685665"),
                O = n("9759"),
                _ = n("705565"),
                A = n("479788"),
                x = n("375202"),
                R = n("831773"),
                L = n("359477"),
                M = n("373469"),
                D = n("271938"),
                j = n("42203"),
                w = n("305961"),
                P = n("42887"),
                k = n("568307"),
                b = n("18494"),
                V = n("40597"),
                U = n("703370"),
                B = n("144747"),
                F = n("227602"),
                H = n("901165"),
                G = n("471671"),
                W = n("145131");
            n("58608");
            var Y = n("773336"),
                z = n("50885"),
                K = n("13798"),
                Z = n("819068"),
                X = n("999819"),
                J = n("878624"),
                Q = n("827922"),
                q = n("485415"),
                $ = n("206496"),
                ee = n("684325"),
                et = n("762243"),
                en = n("265268"),
                ei = n("6791"),
                ea = n("49111"),
                el = n("782340"),
                es = n("885971");
            p.default.PersistedStore.disableWrites = __OVERLAY__, p.default.initialize();
            let eo = null;

            function er(e) {
                e.preventDefault()
            }

            function ed(e) {
                (0, S.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("562353").then(n.bind(n, "562353"));
                    return t => (0, a.jsx)(e, {
                        ...t
                    })
                })
            }
            let eu = e => {
                    let {
                        keybind: t,
                        onClick: n,
                        isPreviewingInGame: i,
                        locked: l
                    } = e, s = l ? g.Clickable : "div";
                    return (0, a.jsx)(s, {
                        className: o(es.overlayBackground, {
                            [es.overlayActive]: !l,
                            [es.overlayLocked]: l,
                            [es.previewMode]: !l && i
                        }),
                        onMouseDown: e => {
                            let {
                                currentTarget: t,
                                target: i,
                                button: a
                            } = e;
                            a === ea.MouseButtons.PRIMARY && t === i && n()
                        },
                        onContextMenu: ed,
                        children: l ? null : (0, a.jsx)("div", {
                            className: es.closeContainer,
                            children: (0, a.jsx)(v.default, {
                                variant: v.default.Variants.BOLD,
                                keybind: t,
                                closeAction: n
                            })
                        })
                    })
                },
                ec = e => {
                    let {
                        keyCode: t,
                        shiftKey: n,
                        metaKey: i,
                        altKey: a,
                        ctrlKey: l
                    } = e;
                    return {
                        keyCode: t,
                        shiftKey: n,
                        metaKey: i,
                        altKey: a,
                        ctrlKey: l
                    }
                };
            class ef extends l.Component {
                handleLock() {
                    !(0, g.hasAnyModalOpen)() && !B.default.isOpen() && E.default.setLocked(!0, (0, Z.getPID)())
                }
                handleDeactivate() {
                    E.default.deactivateAllRegions()
                }
                componentDidMount() {
                    E.default.startSession(), R.default.initialize(), I.default.initialize(), L.default.initialize()
                }
                componentDidUpdate(e) {
                    let {
                        initialized: t
                    } = this.props;
                    if (t) {
                        if (t && !e.initialized) {
                            this.initialSetup();
                            return
                        }
                        if (!e.locked && this.props.locked) {
                            if (window.addEventListener("contextmenu", er, !1), null != eo) {
                                let e = Date.now() - eo;
                                E.default.track(ea.AnalyticEvents.OVERLAY_LOCKED, {
                                    unlocked_duration: e
                                }), eo = null
                            }
                            C.default.disable(), this.activeKeyEventShapes = [], H.default.isPinned(ea.OverlayWidgets.TEXT) && (C.default.setLayout(y.OVERLAY_LOCKED_LAYOUT), C.default.enable())
                        } else e.locked && !this.props.locked && (window.removeEventListener("contextmenu", er, !1), null == eo && (eo = Date.now(), E.default.track(ea.AnalyticEvents.OVERLAY_UNLOCKED)), C.default.disable(), this.activeKeyEventShapes = [], C.default.setLayout(y.OVERLAY_LAYOUT), C.default.enable());
                        e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, K.toBrowserEvents)(this.props.keybindKeyCodes))
                    }
                }
                initialSetup() {
                    let {
                        connectedToVoice: e,
                        locked: t,
                        canGoLive: n,
                        isStreaming: i,
                        voiceGuild: a,
                        voiceChannelId: l,
                        game: s,
                        canStartBroadcast: o,
                        canBroadcast: r,
                        showKeybindNotification: d,
                        dismissKeybindNotification: u
                    } = this.props;
                    E.default.track(ea.AnalyticEvents.OVERLAY_INITIALIZED, {
                        voice_widget_connected: e,
                        text_widget_connected: H.default.isPinned(ea.OverlayWidgets.TEXT)
                    }), X.default.trackExposure({
                        location: "Overlay"
                    });
                    let c = n && !i && null != s,
                        f = e && null != a && null != l,
                        h = {
                            type: ei.OverlayNudgeTypes.WELCOME
                        };
                    if (d ? h = {
                            type: ei.OverlayNudgeTypes.KEYBIND_INDICATORS,
                            markAsDismissed: u
                        } : c && !e && o ? (O.default.trackExposure({
                            location: "overlay_notification"
                        }), r && (h = {
                            type: ei.OverlayNudgeTypes.BROADCAST,
                            game: s
                        })) : c && f ? h = {
                            type: ei.OverlayNudgeTypes.GO_LIVE_VOICE,
                            game: s,
                            voiceChannelId: l,
                            voiceGuild: a
                        } : c && (h = {
                            type: ei.OverlayNudgeTypes.GO_LIVE_NON_VOICE,
                            game: s
                        }), E.default.overlayMounted(h), window.addEventListener("resize", this.handleWindowResize), t && window.addEventListener("contextmenu", er, !1), Y.isPlatformEmbedded) {
                        let e = z.default.requireModule("discord_overlay2");
                        void 0 !== e.setPerfInfoCallback && (e.setPerfInfoCallback(e => {
                            E.default.track(ea.AnalyticEvents.OVERLAY_PERF_INFO, e)
                        }), e.broadcastCommand({
                            message: "set_perf_report_interval",
                            interval: 9e5
                        })), z.default.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                            H.default.getDisableExternalLinkAlert() || t === V.default.getLastURL() ? z.default.send("OPEN_EXTERNAL_URL", t) : m.default.show({
                                title: el.default.Messages.OVERLAY_LINK_ALERT_TITLE,
                                body: el.default.Messages.OVERLAY_LINK_ALERT_BODY,
                                secondaryConfirmText: el.default.Messages.OVERLAY_LINK_ALERT_SECONDARY,
                                confirmText: el.default.Messages.CONTINUE,
                                cancelText: el.default.Messages.CANCEL,
                                onConfirmSecondary: () => {
                                    E.default.disableExternalLinkAlert(), z.default.send("OPEN_EXTERNAL_URL", t)
                                },
                                onConfirm: () => z.default.send("OPEN_EXTERNAL_URL", t)
                            })
                        })
                    }
                    window.addEventListener("keydown", this.onKeyDownGlobal, !0), window.addEventListener("keyup", this.onKeyUpGlobal, !0)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("keydown", this.onKeyDownGlobal, !0), window.removeEventListener("keyup", this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener("contextmenu", er, !1), R.default.terminate(), I.default.terminate(), L.default.terminate()
                }
                renderInvalidSizeMessage() {
                    return (0, a.jsx)(W.default, {
                        justify: W.default.Justify.CENTER,
                        align: W.default.Align.CENTER,
                        className: es.invalidContainer,
                        children: (0, a.jsx)("div", {
                            className: es.inactiveContainer,
                            children: el.default.Messages.OVERLAY_TOO_SMALL.format(Z.OVERLAY_MIN_RESOLUTION)
                        })
                    })
                }
                render() {
                    let {
                        locked: e,
                        keybind: t,
                        incompatibleApp: n,
                        initialized: l,
                        isPreviewingInGame: s,
                        activeRegions: r,
                        windowSize: d,
                        voiceGuild: u,
                        voiceChannelId: c
                    } = this.props, {
                        width: f,
                        height: h
                    } = d;
                    if (0 === f || 0 === h || n || !l) return null;
                    let p = e || s,
                        g = D.default.getId();
                    return (0, a.jsxs)("div", {
                        className: es.overlay,
                        children: [(0, a.jsx)(ee.default, {}), s && (0, a.jsx)("header", {
                            className: es.previewingInGameHeader,
                            children: el.default.Messages.OVERLAY_IN_GAME_PREVIEW_HEADER
                        }), i, (!e || r.has(ea.OverlayActiveRegions.TEXT_WIDGET)) && (0, a.jsx)(eu, {
                            locked: e,
                            keybind: t,
                            onClick: e ? this.handleDeactivate : this.handleLock,
                            isPreviewingInGame: s
                        }), (0, Z.validResolution)(d) ? (0, a.jsx)($.default, {
                            className: o({
                                [es.layoutLocked]: e,
                                [es.layoutUnlocked]: !e
                            })
                        }) : e ? null : this.renderInvalidSizeMessage(), (0, a.jsx)(en.default, {}), null != u && null != c && (0, a.jsx)(et.default, {
                            streamerId: g,
                            guildId: u.id,
                            channelId: c
                        }), (0, a.jsx)(q.default, {
                            locked: p,
                            keybind: t
                        }), (0, a.jsx)(J.default, {})]
                    })
                }
                constructor(e) {
                    super(e), this.handleWindowResize = c(() => {
                        this.forceUpdate()
                    }, 500), this.activeKeyEventShapes = [], this.lockEventShape = (0, K.toBrowserEvents)(this.props.keybindKeyCodes), this.getActiveKeyEventIndex = e => this.activeKeyEventShapes.findIndex(t => h(t, e)), this.onKeyDownGlobal = e => {
                        let t = ec(e),
                            n = this.getActiveKeyEventIndex(t) > -1,
                            i = [16, 17, 18, 91].includes(e.keyCode);
                        !n && !i && this.activeKeyEventShapes.push(t);
                        let a = this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every(e => this.activeKeyEventShapes.some(t => h(e, t)));
                        a && (e.preventDefault(), e.stopPropagation());
                        let {
                            locked: l,
                            activeRegions: s
                        } = this.props;
                        t.keyCode === d.codes.esc && l && s.has(ea.OverlayActiveRegions.TEXT_WIDGET) && E.default.deactivateAllRegions()
                    }, this.onKeyUpGlobal = e => {
                        let t = ec(e),
                            n = this.getActiveKeyEventIndex(t);
                        n > -1 && this.activeKeyEventShapes.splice(n, 1)
                    };
                    let t = e.locked && H.default.isPinned(ea.OverlayWidgets.TEXT);
                    C.default.setLayout(t ? y.OVERLAY_LOCKED_LAYOUT : y.OVERLAY_LAYOUT), t && C.default.enable()
                }
            }

            function eh() {
                let {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: l
                } = (0, p.useStateFromStoresObject)([H.default], () => ({
                    locked: H.default.isUILocked((0, Z.getPID)()),
                    initialized: H.default.initialized,
                    incompatibleApp: H.default.incompatibleApp,
                    activeRegions: H.default.getActiveRegions(),
                    isPreviewingInGame: H.default.isPreviewingInGame()
                })), s = (0, p.useStateFromStores)([G.default], () => G.default.windowSize()), o = (0, p.useStateFromStores)([F.default], () => F.default.getOverlayKeybind()), r = (0, p.useStateFromStores)([b.default], () => b.default.getVoiceChannelId()), d = (0, p.useStateFromStores)([j.default], () => j.default.getChannel(r)), u = (0, p.useStateFromStores)([w.default], () => null != d ? w.default.getGuild(d.guild_id) : null), c = (0, p.useStateFromStores)([k.default, U.default], () => (0, x.default)(k.default, U.default)), f = (0, p.useStateFromStores)([P.default], () => (0, A.default)(P.default)), {
                    canBroadcast: h
                } = O.default.useExperiment({
                    location: "overlay"
                }, {
                    autoTrackExposure: !1
                }), m = (0, _.default)() && null != c, S = (0, p.useStateFromStores)([M.default], () => null != M.default.getCurrentUserActiveStream()), {
                    AnalyticsLocationProvider: E
                } = (0, T.default)(N.default.OVERLAY), {
                    showKeybindIndicators: v,
                    dismissKeybindNotification: y
                } = (0, Q.useGetKeybindNotification)();
                return (0, a.jsx)(E, {
                    children: (0, a.jsx)(g.RedesignIconContextProvider, {
                        children: (0, a.jsx)(ef, {
                            locked: e,
                            initialized: t,
                            incompatibleApp: n,
                            activeRegions: i,
                            isPreviewingInGame: l,
                            windowSize: s,
                            keybind: null != o ? (0, K.toString)(o.shortcut, !0) : "???",
                            keybindKeyCodes: null != o ? o.shortcut : [],
                            connectedToVoice: null != r,
                            voiceChannelId: null != d ? d.id : null,
                            voiceGuild: u,
                            game: c,
                            canGoLive: f,
                            isStreaming: S,
                            canBroadcast: h,
                            canStartBroadcast: m,
                            showKeybindNotification: v,
                            dismissKeybindNotification: y
                        })
                    })
                })
            }