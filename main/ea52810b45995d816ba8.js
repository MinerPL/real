(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65800"], {
        916580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                o = n("600965"),
                r = n("191225"),
                s = n("420444"),
                d = n("697517"),
                u = n("292687"),
                c = n("161778"),
                p = n("875268"),
                f = n("449501"),
                m = n("471671"),
                h = n("457112"),
                v = n("49111"),
                P = n("272505");
            let I = {
                [v.PictureInPictureComponents.VIDEO]: p.default,
                [v.PictureInPictureComponents.EMBED_IFRAME]: d.default
            };
            class S extends i.PureComponent {
                render() {
                    let {
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: i,
                        theme: l,
                        dockedRect: o,
                        appContext: r,
                        roundCorners: s
                    } = this.props;
                    return (0, a.jsx)(h.default, {
                        pictureInPictureComponents: I,
                        selectedPIPWindow: e,
                        pipWindows: t,
                        maxX: n,
                        maxY: i,
                        dockedRect: o,
                        theme: l,
                        onWindowMove: this.handleWindowMove,
                        appContext: r,
                        roundCorners: s
                    })
                }
                constructor(...e) {
                    super(...e), this.handleWindowMove = (e, t) => {
                        o.moveTo(e, t)
                    }
                }
            }
            var C = l.default.connectStores([f.default, u.default, m.default, c.default, r.default], e => {
                let {
                    showInPopoutWindow: t = !1
                } = e, n = u.default.getWindowOpen(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT), a = m.default.windowSize();
                if (n) {
                    let e = u.default.getWindow(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                    a = null == e ? a : {
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }
                let i = f.default.pipWindows,
                    l = n && !t ? null : f.default.pipWindow,
                    o = r.default.getConnectedActivityChannelId(),
                    d = null != o && !(0, s.default)(o),
                    p = r.default.getActivityPanelMode(),
                    h = d && p === P.ActivityPanelModes.PANEL,
                    I = (null == l ? void 0 : l.component) !== v.PictureInPictureComponents.EMBED_IFRAME || (null == l ? void 0 : l.component) === v.PictureInPictureComponents.EMBED_IFRAME && !h;
                return {
                    selectedPIPWindow: l,
                    pipWindows: i,
                    maxX: a.width,
                    maxY: a.height,
                    theme: c.default.theme,
                    dockedRect: null != l ? f.default.getDockedRect(l.id) : null,
                    appContext: t ? v.AppContext.POPOUT : void 0,
                    roundCorners: I
                }
            })(S)
        },
        827560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("773670"),
                i = n("498225"),
                l = n("77078"),
                o = n("244201"),
                r = n("778588"),
                s = n("144747"),
                d = n("49111");

            function u() {
                let e = (0, l.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, i.useStateFromStores)([s.default], () => s.default.isOpen()),
                    n = (0, i.useStateFromStores)([r.default], () => r.default.hasLayers()),
                    [u, c] = a.useState(!1),
                    p = (0, o.useWindowDispatch)();
                return a.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return p.subscribe(d.ComponentActions.POPOUT_SHOW, e), p.subscribe(d.ComponentActions.POPOUT_HIDE, t), () => {
                        p.unsubscribe(d.ComponentActions.POPOUT_SHOW, e), p.unsubscribe(d.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [p]), e || t || u || n
            }
        },
        505259: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("498225"),
                i = n("271938"),
                l = n("191225");

            function o(e) {
                let t = i.default.getId(),
                    {
                        userActivity: n,
                        inActivity: o
                    } = (0, a.useStateFromStoresObject)([l.default], () => {
                        var n;
                        let a = l.default.getSelfEmbeddedActivityForChannel(e),
                            i = l.default.getEmbeddedActivitiesForChannel(e),
                            o = null === (n = i.find(e => e.application_id === (null == a ? void 0 : a.application_id))) || void 0 === n ? void 0 : n.connections,
                            r = null == o ? void 0 : o.has(t);
                        return {
                            userActivity: a,
                            inActivity: null != r && r
                        }
                    });
                return {
                    userActivity: n,
                    inActivity: o
                }
            }
        },
        157945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("773670"),
                i = n("427964"),
                l = n("498225"),
                o = n("827560"),
                r = n("244201"),
                s = n("206230"),
                d = n("659500"),
                u = n("49111");
            let c = (0, i.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    i = (0, l.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    p = (0, o.default)(),
                    [f, m] = a.useState(!1),
                    h = (0, r.useWindowDispatch)();
                return a.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        p && (h.dispatch(u.ComponentActions.POPOUT_CLOSE), d.ComponentDispatch.dispatch(u.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, p, t, h]), a.useEffect(() => {
                    var a, l, o;
                    if (i || !f || !t) return;
                    let r = p;

                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !r && c(e)
                        }, 100)
                    }
                    return null === (a = e.current) || void 0 === a || a.addEventListener("focusout", s), (null === (l = n.document.activeElement) || void 0 === l ? void 0 : l.tagName) !== "IFRAME" && !r && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), r = !0
                    }
                }, [t, f, i, e, n, p]), m
            }
        },
        676065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("773670"),
                i = n("550766");

            function l(e) {
                let {
                    channel: t,
                    userActivity: n,
                    inActivity: l,
                    embeddedActivitiesManager: o
                } = e;
                a.useEffect(() => {
                    !l && (0, i.launchEmbeddedActivity)(t.id)
                }, [null == n ? void 0 : n.application_id, t.id, l, o])
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            let a = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function i(e) {
                let {
                    allowPopups: t
                } = e, n = a;
                return t && (n = [...a, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return C
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                o = n.n(l),
                r = n("6763"),
                s = n("462567"),
                d = n("498225"),
                u = n("292687"),
                c = n("614818"),
                p = n("161778"),
                f = n("659500"),
                m = n("157945"),
                h = n("828466"),
                v = n("954016"),
                P = n("49111"),
                I = n("812757");

            function S(e) {
                let {
                    url: t,
                    className: n,
                    style: l,
                    onLoad: o,
                    shouldRefocus: I,
                    queryParams: S,
                    allowPopups: C = !1,
                    referrerPolicy: g = "origin"
                } = e, y = (0, d.useStateFromStores)([u.default], () => u.default.getWindow(P.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, s.v4)(), [t]), T = i.useRef(null), x = (0, m.default)(T, I, null == y ? window : y), A = {
                    ...S,
                    frame_id: E,
                    platform: v.ActivityPlatform.DESKTOP
                }, [N, M] = i.useState(!1), _ = p.default.theme, j = {
                    ...l
                };
                return _ === P.ThemeTypes.LIGHT ? j.colorScheme = "light" : j.colorScheme = "dark", i.useEffect(() => (f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_MOUNT, {
                    id: E
                }), () => {
                    f.ComponentDispatch.dispatch(P.ComponentActions.IFRAME_UNMOUNT, {
                        id: E
                    })
                }), [E]), f.ComponentDispatch.subscribe(P.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    M(t)
                }), N && (j.pointerEvents = "none"), null != t ? (0, a.jsx)("iframe", {
                    style: j,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: g,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), T.current = e.target, x(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, A], null != t ? t : "")
                    },
                    sandbox: (0, h.default)({
                        allowPopups: C
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(A))
                }) : null
            }

            function C(e) {
                let {
                    onLoad: t
                } = e, [n, l] = i.useState(!1), r = i.useCallback(e => {
                    l(!0), null == t || t(e)
                }, [t]);
                return (0, a.jsxs)("div", {
                    className: I.fillParent,
                    children: [!n && (0, a.jsx)("div", {
                        className: o(I.fillParent, I.iframePlaceholder)
                    }), (0, a.jsx)("div", {
                        className: o(I.fillParent, n ? void 0 : I.hiddenIframeContainer),
                        children: (0, a.jsx)(S, {
                            ...e,
                            onLoad: r
                        })
                    })]
                })
            }
        },
        697517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                o = n.n(l),
                r = n("498225"),
                s = n("77078"),
                d = n("913144"),
                u = n("255397"),
                c = n("406189"),
                p = n("54239"),
                f = n("191145"),
                m = n("292687"),
                h = n("393414"),
                v = n("784981"),
                P = n("908583"),
                I = n("449501"),
                S = n("18494"),
                C = n("550766"),
                g = n("191225"),
                y = n("420444"),
                E = n("817477"),
                T = n("386568"),
                x = n("965135"),
                A = n("954016"),
                N = n("272505"),
                M = n("49111"),
                _ = n("99795"),
                j = n("905273"),
                L = n("183038");

            function w(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [l, x] = i.useState(!1), w = (0, r.useStateFromStores)([g.default], () => g.default.getSelfEmbeddedActivityForChannel(t.id)), b = (0, r.useStateFromStores)([g.default], () => g.default.getActivityPanelMode()), O = null == w ? void 0 : w.activity_id, D = (0, r.useStateFromStores)([S.default], () => S.default.getChannelId() === t.id), {
                    dockedRect: R,
                    isHidden: F
                } = (0, r.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.pipWindow;
                    return {
                        dockedRect: null != e ? I.default.getDockedRect(e.id) : null,
                        isHidden: I.default.isEmbeddedActivityHidden()
                    }
                }), U = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(M.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: k,
                    selectedParticipant: W,
                    participantsOpen: B
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != w ? f.default.getParticipant(t.id, w.application_id) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), V = D || null != U, H = (0, y.default)(t.id), G = H && (null == W ? void 0 : W.type) !== _.ParticipantTypes.ACTIVITY, Y = !H && b === N.ActivityPanelModes.PIP, J = V && (G || Y) && null == R, z = (!V || J) && !F;

                function K() {
                    var e;
                    if (null != w && u.default.selectParticipant(t.id, w.application_id), null != U) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : M.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function q() {
                    x(!l)
                }
                i.useEffect(() => {
                    if ((null == w ? void 0 : w.application_id) != null) {
                        let e = z ? A.ActivityLayoutMode.PIP : A.ActivityLayoutMode.FOCUSED;
                        d.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: w.application_id
                        })
                    }
                }, [null == w ? void 0 : w.application_id, z]);
                if (null == w || null == O || null == k && (0, y.default)(t.id)) return null;
                let X = {
                    instance_id: O,
                    channel_id: t.id
                };
                return null != t.guild_id && "" !== t.guild_id && (X.guild_id = t.guild_id), (0, a.jsx)(P.default, {
                    timeout: 2e3,
                    children: e => {
                        var i, r, d, u, c, p, f;
                        let {
                            idle: m,
                            onActive: h,
                            onForceIdle: P
                        } = e;
                        return (0, a.jsxs)(v.default, {
                            className: o(j.root, {
                                [j.pipMode]: z,
                                [L.idle]: m && !(null === (i = w.config) || void 0 === i ? void 0 : i.useInteractivePIP),
                                [j.pipModeSquare]: z && Y,
                                [j.pipModeShort]: z && !l,
                                [j.pipModeTall]: z && l,
                                [j.hidden]: F
                            }),
                            noBorder: !z,
                            children: [(d = h, u = P, c = m, p = Y, z && null != w && ((null == k ? void 0 : k.type) === _.ParticipantTypes.ACTIVITY || p) ? (null === (f = w.config) || void 0 === f ? void 0 : f.useInteractivePIP) ? (0, a.jsx)(T.InteractivePIPHeader, {
                                onJumpToChannel: K,
                                applicationId: w.application_id,
                                channel: t,
                                showControls: !c,
                                onMouseDown: d,
                                onMouseMove: d,
                                onMouseLeave: u,
                                onToggleHeight: q,
                                isExpanded: l,
                                hideExpandedButton: p
                            }) : p ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(T.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        K(), (0, C.updateActivityPanelMode)(N.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: w.application_id
                                })
                            }) : null == k ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    className: j.clickShield,
                                    onDoubleClick: K
                                }), (0, a.jsx)(T.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: K,
                                    channel: t,
                                    applicationId: w.application_id,
                                    selectedParticipant: k
                                })]
                            }) : null), n ? (0, a.jsx)(s.Spinner, {
                                className: o(j.iframe, {
                                    [j.pipModeSquare]: z && Y,
                                    [j.pipModeShort]: z && !l,
                                    [j.pipModeTall]: z && l
                                })
                            }) : (0, a.jsx)(s.Clickable, {
                                className: o(j.fillParent, Y ? j.clickable : null),
                                onClick: () => {
                                    Y && ((0, C.updateActivityPanelMode)(N.ActivityPanelModes.PANEL), K())
                                },
                                children: (0, a.jsx)(E.EmbedIFrameWithLoadingBackground, {
                                    allowPopups: A.APPLICATIONS_WITH_ALLOWED_POPUPS.has(w.application_id),
                                    referrerPolicy: A.APPLICATIONS_WITH_NO_REFFERER.has(w.application_id) ? "no-referrer" : "origin",
                                    url: w.url,
                                    queryParams: X,
                                    className: o(j.iframe, {
                                        [j.pipModeSquare]: z && Y,
                                        [j.pipModeShort]: z && !l,
                                        [j.pipModeTall]: z && l,
                                        [j.pipNonInteractive]: z && !(null === (r = w.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                    }),
                                    shouldRefocus: !z && D
                                })
                            }), !z && (0, a.jsx)(T.TileOverlay, {
                                participantsOpen: B,
                                showToggleParticipants: !1,
                                channelId: t.id
                            })]
                        })
                    }
                })
            }
            var b = e => {
                let {
                    channel: t,
                    ...n
                } = e, {
                    isLoading: i
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, a.jsx)(w, {
                    channel: t,
                    isLoading: i,
                    ...n
                })
            }
        },
        386568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PIPOverlay: function() {
                    return w
                },
                TextActivityPIPOverlay: function() {
                    return b
                },
                TileOverlay: function() {
                    return O
                },
                InteractivePIPHeader: function() {
                    return D
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                l = n.n(i),
                o = n("498225"),
                r = n("629109"),
                s = n("244201"),
                d = n("442939"),
                u = n("836087"),
                c = n("383294"),
                p = n("289180"),
                f = n("19065"),
                m = n("550410"),
                h = n("598873"),
                v = n("981913"),
                P = n("576242"),
                I = n("336971"),
                S = n("109489"),
                C = n("116439"),
                g = n("42887"),
                y = n("145131"),
                E = n("256170"),
                T = n("433487"),
                x = n("735890"),
                A = n("49111"),
                N = n("809924"),
                M = n("782340"),
                _ = n("499785"),
                j = n("183038");

            function L(e) {
                let {
                    onClick: t,
                    isExpanded: n
                } = e;
                return (0, a.jsx)(v.default, {
                    iconClassName: l(_.arrowIcon, {
                        [_.arrowIconExpanded]: n
                    }),
                    onClick: t,
                    iconComponent: E.default,
                    label: n ? M.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : M.default.Messages.PICTURE_IN_PICTURE_EXPAND
                })
            }

            function w(e) {
                var t, n;
                let {
                    channel: i,
                    applicationId: l,
                    onMouseDown: v,
                    onMouseMove: S,
                    onMouseLeave: E,
                    onJumpToChannel: T,
                    idle: M,
                    selectedParticipant: L
                } = e, w = (0, s.useAppContext)(), b = w === A.AppContext.POPOUT, O = (0, o.useStateFromStores)([g.default], () => g.default.isVideoEnabled()), D = (0, o.useStateFromStores)([g.default], () => Object.values(g.default.getVideoDevices())[0]), R = null === (t = null == D ? void 0 : D.disabled) || void 0 === t || t, F = !1 === R, U = (0, d.default)([l])[0], k = (0, p.default)(i), W = e => {
                    r.default.setVideoEnabled(e)
                };
                return (0, a.jsxs)("div", {
                    className: j.videoControls,
                    onMouseMove: S,
                    onMouseDown: v,
                    onMouseLeave: E,
                    children: [(0, a.jsx)("div", {
                        className: j.topControls,
                        children: (0, a.jsx)(h.PictureInPictureHeader, {
                            idle: M,
                            title: null !== (n = null == U ? void 0 : U.name) && void 0 !== n ? n : i.name,
                            onJumpToChannel: T,
                            preventIdleComponent: m.default
                        })
                    }), (0, a.jsxs)("div", {
                        className: j.bottomControls,
                        children: [(0, a.jsxs)(y.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: y.default.Align.CENTER,
                            children: [(0, a.jsx)(C.default, {
                                className: _.leftPipIcon,
                                enabled: O,
                                cameraUnavailable: !F,
                                hasPermission: k,
                                onChange: W,
                                onCameraUnavailable: () => {
                                    F ? W(!0) : (0, f.default)()
                                }
                            }), (0, a.jsx)(m.default, {
                                children: (0, a.jsx)(u.default, {
                                    channelId: i.id,
                                    guildId: i.getGuildId(),
                                    className: j.leftTrayIcon,
                                    participant: L,
                                    compact: !0
                                })
                            })]
                        }), (0, a.jsxs)(y.default, {
                            grow: 0,
                            shrink: 1,
                            justify: y.default.Justify.END,
                            basis: "50%",
                            align: y.default.Align.CENTER,
                            children: [b ? null : (0, a.jsx)(I.default, {
                                className: _.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, x.default)(() => c.openChannelCallPopout(i))
                                },
                                onClosePopout: N.NOOP_NULL
                            }), (0, a.jsx)(P.default, {
                                applicationId: l,
                                channelId: i.id,
                                className: _.rightPipIcon
                            })]
                        })]
                    })]
                })
            }

            function b(e) {
                var t;
                let {
                    channel: n,
                    applicationId: i,
                    onMouseDown: o,
                    onMouseMove: r,
                    onMouseLeave: s,
                    onJumpToChannel: u,
                    idle: c
                } = e, p = (0, d.default)([i])[0];
                return (0, a.jsx)("div", {
                    className: l(j.videoControls, j.videoControlsTextActivity),
                    onMouseMove: r,
                    onMouseDown: o,
                    onMouseLeave: s,
                    children: (0, a.jsxs)("div", {
                        className: l(j.topControls, j.topControlsTextActivity),
                        children: [(0, a.jsx)(h.PictureInPictureHeader, {
                            idle: c,
                            title: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : n.name,
                            onJumpToChannel: u,
                            preventIdleComponent: m.default
                        }), (0, a.jsx)(P.default, {
                            applicationId: i,
                            channelId: n.id,
                            iconClassName: _.leaveActivityIcon
                        })]
                    })
                })
            }

            function O(e) {
                let {
                    channelId: t,
                    participantsOpen: n,
                    showToggleParticipants: i
                } = e;
                return i ? (0, a.jsx)(S.default, {
                    channelId: t,
                    isParticipantsOpen: n,
                    className: _.participantsButton
                }) : null
            }

            function D(e) {
                var t;
                let {
                    onMouseDown: n,
                    onMouseMove: i,
                    onMouseLeave: o,
                    showControls: r,
                    applicationId: s,
                    channel: u,
                    onJumpToChannel: c,
                    onToggleHeight: p,
                    isExpanded: f,
                    hideExpandedButton: v
                } = e, I = (0, d.default)([s])[0];
                return (0, a.jsx)("div", {
                    className: _.pipHeader,
                    onMouseMove: i,
                    onMouseDown: n,
                    onMouseLeave: o,
                    children: (0, a.jsxs)("div", {
                        className: l(j.topControls, _.pipHeaderContent, {
                            [_.pipHeaderContentOpen]: r
                        }),
                        children: [!r && (0, a.jsx)(T.default, {
                            className: _.menuIcon,
                            width: 12,
                            height: 12
                        }), r && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(h.PictureInPictureHeader, {
                                idle: !r,
                                title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : u.name,
                                onJumpToChannel: c,
                                preventIdleComponent: m.default
                            }), (0, a.jsxs)("div", {
                                className: _.pipHeaderButtonsRight,
                                children: [v ? null : (0, a.jsx)(L, {
                                    isExpanded: f,
                                    onClick: p
                                }), (0, a.jsx)(P.default, {
                                    applicationId: s,
                                    channelId: u.id,
                                    iconClassName: _.leaveActivityIcon
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        965135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEmbeddedActivityLifecycle: function() {
                    return s
                }
            });
            var a = n("773670"),
                i = n("550766"),
                l = n("505259"),
                o = n("676065"),
                r = n("141962");
            let s = e => {
                let {
                    userActivity: t,
                    inActivity: n
                } = (0, l.default)(e.id), s = r.default;
                return (0, o.default)({
                    channel: e,
                    userActivity: t,
                    inActivity: n,
                    embeddedActivitiesManager: s
                }), a.useEffect(() => () => {
                    (null == t ? void 0 : t.application_id) != null && (0, i.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.application_id)
                }, [e.id, null == t ? void 0 : t.application_id]), {
                    isLoading: !n
                }
            }
        },
        788448: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("77078"),
                o = n("987317"),
                r = n("713726"),
                s = n("503417"),
                d = n("162236"),
                u = n("546463"),
                c = n("101125"),
                p = n("953109"),
                f = n("474571"),
                m = n("782340"),
                h = n("572568");

            function v() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.getBroadcast()),
                    t = (0, i.useStateFromStores)([u.default], () => null != e ? u.default.getDetectableGame(e.applicationId) : null);
                if (null == e) return null;
                let n = () => {
                        (0, d.openBroadcastingPrivacySettingsModal)()
                    },
                    v = () => {
                        (0, r.stopBroadcast)(), o.default.disconnect()
                    };
                return (0, a.jsxs)("div", {
                    className: h.container,
                    children: [null != t && (0, a.jsx)(p.default, {
                        game: t,
                        size: p.default.Sizes.LARGE
                    }), (0, a.jsxs)("div", {
                        className: h.content,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: m.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                        }), (0, a.jsxs)("div", {
                            className: h.actions,
                            children: [(0, a.jsx)(l.Tooltip, {
                                text: m.default.Messages.BROADCASTING_SETTINGS,
                                children: e => (0, a.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: n,
                                    children: (0, a.jsx)(f.default, {
                                        className: h.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            }), (0, a.jsx)(l.Tooltip, {
                                text: m.default.Messages.STOP_BROADCASTING,
                                children: e => (0, a.jsx)(l.Clickable, {
                                    ...e,
                                    onClick: v,
                                    children: (0, a.jsx)(s.default, {
                                        className: h.button,
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        540814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                o = n.n(l),
                r = n("175962");
            class s extends i.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        streamId: n
                    } = e;
                    if (t.aReady) {
                        if (n !== t.aStreamId) return null == n ? {
                            bStreamId: n,
                            bReady: !0,
                            aStreamId: null,
                            aReady: !1
                        } : {
                            bStreamId: n,
                            bReady: !1
                        }
                    } else if (n !== t.bStreamId) return null == n ? {
                        aStreamId: n,
                        aReady: !0,
                        bStreamId: null,
                        bReady: !1
                    } : {
                        aStreamId: n,
                        aReady: !1
                    };
                    return null
                }
                renderVideo(e, t) {
                    let {
                        children: n,
                        mirror: l,
                        paused: o,
                        component: s
                    } = this.props;
                    if (null == e) {
                        if (null == n) return null;
                        let e = i.Children.only(n);
                        return i.cloneElement(e, {
                            style: {
                                display: t && !l ? void 0 : "none"
                            },
                            ...e.props
                        })
                    }
                    return (0, a.jsx)(s, {
                        paused: o,
                        className: r.media,
                        streamId: e,
                        onReady: t ? null : this.handleReady
                    })
                }
                render() {
                    let {
                        mirror: e,
                        className: t
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: o(r.video, t, {
                            [r.mirror]: e
                        }),
                        onDoubleClick: this.handleDoubleClick,
                        onContextMenu: this.handleContextMenu,
                        children: [this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady)]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        aStreamId: null,
                        aReady: !1,
                        bStreamId: this.props.streamId,
                        bReady: !0
                    }, this.handleReady = () => {
                        this.state.aReady ? this.setState({
                            bReady: !0,
                            aStreamId: null,
                            aReady: !1
                        }) : this.setState({
                            aReady: !0,
                            bStreamId: null,
                            bReady: !1
                        })
                    }, this.handleDoubleClick = e => {
                        let {
                            onDoubleClick: t,
                            id: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleContextMenu = e => {
                        let {
                            onContextMenu: t,
                            id: n
                        } = this.props;
                        null == t || t(e, n)
                    }
                }
            }
            s.defaultProps = {
                paused: !0
            };
            var d = s
        },
        875268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ei
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("161179"),
                o = n.n(l),
                r = n("427964"),
                s = n.n(r),
                d = n("498225"),
                u = n("77078"),
                c = n("629109"),
                p = n("406189"),
                f = n("54239"),
                m = n("716241"),
                h = n("754493"),
                v = n("858944"),
                P = n("191145"),
                I = n("161306"),
                S = n("836087"),
                C = n("679653"),
                g = n("374014"),
                y = n("479788"),
                E = n("430951"),
                T = n("16916"),
                x = n("383294"),
                A = n("393414"),
                N = n("908583"),
                M = n("550410"),
                _ = n("598873"),
                j = n("54727"),
                L = n("336971"),
                w = n("954519"),
                b = n("857398"),
                O = n("373469"),
                D = n("271938"),
                R = n("42887"),
                F = n("27618"),
                U = n("697218"),
                k = n("476640"),
                W = n("555035"),
                B = n("471671"),
                V = n("754775"),
                H = n("599110"),
                G = n("387111"),
                Y = n("158998"),
                J = n("788448"),
                z = n("540814"),
                K = n("683245"),
                q = n("772442"),
                X = n("211019"),
                Z = n("19065"),
                Q = n("977347"),
                $ = n("799808"),
                ee = n("49111"),
                et = n("99795"),
                en = n("13423");
            class ea extends i.PureComponent {
                get viewProperties() {
                    let {
                        participantOnScreen: e,
                        currentUserId: t,
                        channel: n
                    } = this.props, a = (0, et.isStreamParticipant)(e), i = null != e && e.type !== et.ParticipantTypes.ACTIVITY && e.user.id === t, l = (null == e ? void 0 : e.type) === et.ParticipantTypes.STREAM || (null == e ? void 0 : e.type) === et.ParticipantTypes.USER;
                    return {
                        canPopout: a && !i,
                        canSettings: a && i,
                        canStopStream: a,
                        canSeeViewers: a,
                        canSeeParticipantName: l && n.type !== ee.ChannelTypes.DM,
                        canDisconnect: !a,
                        isSelf: i
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
                        video_layout: P.default.getLayout(e.id),
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
                    if ((null == e ? void 0 : e.state) === ee.ApplicationStreamStates.FAILED) return (0, a.jsx)(q.default, {
                        stream: e,
                        width: et.PIP_WIDTH
                    });
                    if (this.isEmptyBroadcast()) return (0, a.jsx)(J.default, {});
                    else if ((null == t ? void 0 : t.type) === et.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(X.default, {
                        participant: t,
                        width: et.PIP_WIDTH
                    });
                    return null
                }
                renderParticipantName() {
                    var e;
                    let {
                        channel: t,
                        participantOnScreen: n
                    } = this.props;
                    if ((null == n ? void 0 : n.type) === et.ParticipantTypes.STREAM || (null == n ? void 0 : n.type) === et.ParticipantTypes.USER) {
                        let i = null !== (e = G.default.getNickname(t.getGuildId(), t.id, n.user)) && void 0 !== e ? e : Y.default.getName(n.user);
                        return (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            className: en.participantName,
                            lineClamp: 1,
                            children: i
                        })
                    }
                    return null
                }
                render() {
                    var e;
                    let {
                        channel: t,
                        streamId: n,
                        participantOnScreen: i,
                        isVideoEnabled: l
                    } = this.props, o = (0, C.computeChannelName)(t, U.default, F.default), r = this.isEmptyBroadcast(), s = (null == i ? void 0 : i.id) === D.default.getId() && l, d = this.renderStreamState(), c = null;
                    return (null == i ? void 0 : i.type) !== et.ParticipantTypes.ACTIVITY && (null != d ? c = d : ((null == i ? void 0 : i.type) === et.ParticipantTypes.USER || (null == i ? void 0 : i.type) === et.ParticipantTypes.STREAM) && (c = (0, a.jsx)(z.default, {
                        paused: this.streamerPaused,
                        streamId: n,
                        component: R.default.getVideoComponent(),
                        mirror: s,
                        children: (0, a.jsx)(V.default, {
                            size: u.AvatarSizes.SIZE_80,
                            src: null == i ? void 0 : i.user.getAvatarURL(t.guild_id, 80),
                            "aria-label": null == i ? void 0 : i.user.username
                        })
                    }))), (0, a.jsx)(N.default, {
                        timeout: 1800,
                        children: t => (0, a.jsx)(_.default, {
                            title: o,
                            backgroundKey: null !== (e = null == i ? void 0 : i.id) && void 0 !== e ? e : "",
                            screenMessage: null == d ? this.getScreenMessage() : null,
                            onJumpToChannel: this.handleJumpToChannel,
                            renderBottomLeftControls: this.renderBottomLeftControls,
                            renderBottomRightControls: this.renderBottomRightControls,
                            preventIdleComponent: M.default,
                            width: et.PIP_WIDTH,
                            hideControls: r,
                            className: r ? en.emptyBroadcast : void 0,
                            innerClassName: r ? en.innerEmptyBroadcast : void 0,
                            ...t,
                            children: c
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        screensharePopoutOpen: !1
                    }, this._ref = i.createRef(), this.handleVideo = e => {
                        c.default.setVideoEnabled(e)
                    }, this.handleEnableVideoWhenUnavailable = () => {
                        let {
                            isVideoAvailable: e
                        } = this.props;
                        e ? this.handleVideo(!0) : (0, Z.default)()
                    }, this.handleJumpToChannel = () => {
                        var e;
                        let {
                            channel: t
                        } = this.props;
                        (0, f.popAllLayers)();
                        let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : ee.ME;
                        p.default.channelListScrollTo(n, t.id), (0, A.transitionToGuild)(n, t.id)
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
                        x.openChannelCallPopout(e)
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
                            canStopStream: i,
                            canSeeViewers: l
                        } = this.viewProperties;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [l ? this.renderViewersIcon() : null, e ? this.renderSettingsIcon() : null, t ? this.renderPopoutIcon() : null, i ? this.renderStopStreamButton() : null, n ? this.renderDisconnectButton() : null]
                        })
                    }, this.renderDisconnectButton = () => {
                        let {
                            channel: e
                        } = this.props;
                        return (0, a.jsx)(j.default, {
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
            var ei = d.default.connectStores([R.default, P.default, D.default, k.default, W.default, O.default, B.default], e => {
                let {
                    channel: t
                } = e, n = k.default.getSpeaker(t.id), a = P.default.getParticipant(t.id, n), i = s(R.default.getVideoDevices()).values().first(), l = null == i || i.disabled, o = null != a && a.type !== et.ParticipantTypes.ACTIVITY && a.type !== et.ParticipantTypes.HIDDEN_STREAM ? W.default.getStreamId(a.user.id, t.getGuildId(), (0, I.default)(a.type)) : null, r = !l && R.default.isVideoEnabled(), d = (0, y.default)(R.default), u = D.default.getId(), c = O.default.getCurrentUserActiveStream(), p = (0, h.isBroadcastingInChannel)(t.id);
                return {
                    channel: t,
                    streamId: o,
                    participantOnScreen: a,
                    isVideoAvailable: !1 === l,
                    isVideoEnabled: r,
                    isSelfBroadcasting: p,
                    canGoLive: d,
                    currentUserId: u,
                    activeStreams: O.default.getAllActiveStreams(),
                    activeSelfStream: c,
                    isMainWindowFocused: B.default.isFocused()
                }
            })(ea)
        },
        598873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureHeader: function() {
                    return S
                },
                default: function() {
                    return C
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("575482"),
                l = n.n(i),
                o = n("498225"),
                r = n("912557"),
                s = n("580279"),
                d = n("77078"),
                u = n("945956"),
                c = n("145131"),
                p = n("276999"),
                f = n("531470"),
                m = n("713573"),
                h = n("301178"),
                v = n("600123"),
                P = n("782340"),
                I = n("183038");

            function S(e) {
                let {
                    title: t,
                    onJumpToChannel: n,
                    idle: i,
                    preventIdleComponent: l
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != s ? (0, a.jsx)(h.default, {
                    voiceChannelId: s,
                    idle: i
                }) : null;
                return (0, a.jsxs)(l, {
                    className: I.headerIdleContainer,
                    children: [(0, a.jsxs)(d.Clickable, {
                        className: I.headerTitle,
                        onClick: n,
                        children: [(0, a.jsx)(f.default, {
                            "aria-label": P.default.Messages.OPEN_IN_THEATER,
                            className: I.backButton,
                            width: 20,
                            height: 20
                        }), (0, a.jsx)(m.default, {
                            className: I.headerText,
                            size: m.default.Sizes.SIZE_16,
                            color: r.default.unsafe_rawColors.WHITE_500.css,
                            children: t
                        })]
                    }), c]
                })
            }

            function C(e) {
                let {
                    children: t,
                    idle: n,
                    onJumpToChannel: i,
                    backgroundKey: o,
                    onActive: r,
                    onForceIdle: d,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: P,
                    innerClassName: C,
                    ...g
                } = e;
                return (0, a.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: d,
                    className: l(I.pictureInPictureVideo, {
                        [I.idle]: n
                    }, P),
                    onDoubleClick: i,
                    children: [(0, a.jsx)(s.default, {
                        children: (0, a.jsx)(p.BackgroundTransition, {
                            className: C,
                            children: t
                        }, o)
                    }), null != m ? (0, a.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, a.jsxs)("div", {
                        className: I.videoControls,
                        children: [(0, a.jsx)("div", {
                            className: I.topControls,
                            children: (0, a.jsx)(S, {
                                idle: n,
                                onJumpToChannel: i,
                                ...g
                            })
                        }), (0, a.jsxs)("div", {
                            className: I.bottomControls,
                            children: [(0, a.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: I.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, a.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                justify: c.default.Justify.END,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                children: null == f ? void 0 : f()
                            })]
                        })]
                    })]
                })
            }
        },
        301178: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("498225"),
                l = n("912557"),
                o = n("77078"),
                r = n("255397"),
                s = n("600965"),
                d = n("191225"),
                u = n("191145"),
                c = n("373469"),
                p = n("546463"),
                f = n("449501"),
                m = n("697218"),
                h = n("663745"),
                v = n("49111"),
                P = n("99795"),
                I = n("782340"),
                S = n("183038");

            function C(e) {
                let {
                    closePopout: t,
                    idle: n,
                    pipWindows: l,
                    voiceChannelId: m,
                    onSelect: h
                } = e;
                n && t();
                let S = (0, i.useStateFromStores)([d.default], () => d.default.getSelfEmbeddedActivityForChannel(m)),
                    C = (0, i.useStateFromStores)([f.default], () => f.default.pipWindow),
                    g = (0, i.useStateFromStores)([u.default], () => u.default.getSelectedParticipant(m)),
                    y = (0, i.useStateFromStores)([u.default], () => u.default.getStreamParticipants(m));
                return (0, a.jsx)(o.Menu, {
                    navId: "pip-menu",
                    "aria-label": "switch PIP",
                    onClose: t,
                    onSelect: h,
                    children: (function() {
                        let e = l.find(e => e.component === v.PictureInPictureComponents.EMBED_IFRAME),
                            t = l.find(e => e.component === v.PictureInPictureComponents.VIDEO),
                            n = [];
                        return null != e && (null == C ? void 0 : C.id) !== e.id && n.push({
                            pipWindow: e
                        }), null != t && y.forEach(e => {
                            let a = c.default.getActiveStreamForApplicationStream(e.stream),
                                i = e.id === (null == g ? void 0 : g.id) && (null == C ? void 0 : C.id) === t.id;
                            null != a && !i && n.push({
                                pipWindow: t,
                                participant: e,
                                stream: a
                            })
                        }), n
                    })().map(function(e) {
                        var t;
                        let n = e.pipWindow.id,
                            i = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                            l = function(e) {
                                if (e.pipWindow.component === v.PictureInPictureComponents.EMBED_IFRAME && null != S) {
                                    var t;
                                    let e = null === (t = p.default.getGame(S.application_id)) || void 0 === t ? void 0 : t.name;
                                    return null == e ? I.default.Messages.SWITCH_PIP_TO_ACTIVITY : I.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                        activityName: e
                                    })
                                }
                                return null == e.participant || e.participant.type !== P.ParticipantTypes.STREAM ? I.default.Messages.SWITCH_PIP_TO_GO_LIVE : I.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                                    username: e.participant.userNick
                                })
                            }(e),
                            d = "".concat(n).concat(null != i ? i : "");
                        return (0, a.jsx)(o.MenuItem, {
                            id: d,
                            label: l,
                            action: () => (function(e) {
                                (null == C ? void 0 : C.id) !== e.pipWindow.id && (0, s.switchPIPFocus)(e.pipWindow.id);
                                let t = e.participant;
                                null != t && t.type !== P.ParticipantTypes.ACTIVITY && r.default.selectParticipant(m, t.id)
                            })(e)
                        }, d)
                    })
                })
            }
            var g = function(e) {
                let {
                    voiceChannelId: t,
                    idle: n
                } = e, r = (0, i.useStateFromStores)([f.default], () => f.default.pipWindows), s = Array.from(r.values()), d = (0, i.useStateFromStoresArray)([c.default], () => c.default.getAllActiveStreamsForChannel(t)), u = d.filter(e => {
                    var n;
                    return e.ownerId !== (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
                }), p = 1 === s.length && s[0].component === v.PictureInPictureComponents.EMBED_IFRAME || 0 === u.length, P = 1 === s.length && u.length <= 1;
                return p || P ? null : (0, a.jsx)(o.Popout, {
                    position: "bottom",
                    renderPopout: e => (0, a.jsx)(C, {
                        voiceChannelId: t,
                        pipWindows: s,
                        idle: n,
                        ...e
                    }),
                    children: e => (0, a.jsx)(o.Clickable, {
                        className: S.menuIcon,
                        ...e,
                        children: (0, a.jsx)(h.default, {
                            color: l.default.unsafe_rawColors.WHITE_500.css
                        })
                    })
                })
            }
        },
        857398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("498225"),
                o = n("77078"),
                r = n("754493"),
                s = n("234755"),
                d = n("951691"),
                u = n("799808"),
                c = n("42203"),
                p = n("697218"),
                f = n("474571"),
                m = n("804643"),
                h = n("587974"),
                v = n("719923"),
                P = n("550410"),
                I = n("981913"),
                S = n("49111"),
                C = n("646718"),
                g = n("782340"),
                y = n("135817");

            function E(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)(f.default, {
                    className: t
                })
            }

            function T(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(h.default, {
                        className: t,
                        mask: h.default.Masks.HEADER_BAR_BADGE,
                        children: (0, a.jsx)(E, {})
                    }), (0, a.jsx)(m.default, {
                        className: y.badgeUpgrade
                    })]
                })
            }

            function x(e) {
                let {
                    hideBadges: t = !1,
                    stream: n,
                    ...f
                } = e, m = (0, l.useStateFromStores)([p.default], () => v.default.isPremium(p.default.getCurrentUser(), C.PremiumTypes.TIER_1)), h = (0, l.useStateFromStores)([c.default], () => c.default.getChannel(null == n ? void 0 : n.channelId)), y = i.useMemo(() => null != n ? [n] : [], [n]), x = (0, r.useIsBroadcastingInChannel)(null == h ? void 0 : h.id), A = i.useCallback(() => {
                    null != h && (0, u.default)(h.getGuildId(), h.id, S.AnalyticsSections.STREAM_SETTINGS)
                }, [h]);
                if (null == n || null == h) return null;
                let N = E;
                return !t && !m && (N = T), (0, a.jsx)(o.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, a.jsx)(P.default, {
                            children: x ? (0, a.jsx)(s.default, {
                                onClose: t
                            }) : (0, a.jsx)(d.default, {
                                channel: h,
                                currentUser: p.default.getCurrentUser(),
                                activeStreams: y,
                                onClose: t,
                                showReportOption: !0,
                                handleGoLive: A
                            })
                        })
                    },
                    animation: o.Popout.Animation.FADE,
                    children: e => (0, a.jsx)(I.default, {
                        ...e,
                        label: g.default.Messages.STREAMER_SETTINGS_TITLE,
                        iconComponent: N,
                        ...f
                    })
                })
            }
        },
        476640: function(e, t, n) {
            "use strict";
            let a, i;
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("427964"),
                o = n.n(l),
                r = n("498225"),
                s = n("913144"),
                d = n("191145"),
                u = n("374014"),
                c = n("373469"),
                p = n("271938"),
                f = n("42887"),
                m = n("280168"),
                h = n("99795");

            function v() {
                let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                if (null == a) e = null;
                else {
                    var n, l, r, s, v;
                    e = d.default.getSelectedParticipantId(a);
                    let t = c.default.getLastActiveStream(),
                        P = null != e ? d.default.getParticipant(a, e) : null;
                    if (((null == P ? void 0 : P.type) === h.ParticipantTypes.ACTIVITY || (null == P ? void 0 : P.type) === h.ParticipantTypes.USER && !(null === (n = P.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (l = d.default.getParticipant(a, (0, u.encodeStreamKey)(t))) || void 0 === l ? void 0 : l.id), null == e) {
                        let t = p.default.getId(),
                            n = o(d.default.getVideoParticipants(a)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                            l = Date.now();
                        null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, l)]).filter(e => {
                            let [t, n] = e;
                            return 0 !== n
                        }).maxBy(e => {
                            let [t, n] = e;
                            return -n
                        })) || void 0 === r ? void 0 : r[0]) && (e = null != i ? i : null === (v = n.first()) || void 0 === v ? void 0 : null === (s = v.user) || void 0 === s ? void 0 : s.id)
                    }
                }
                i !== e && (i = e, t && C.emitChange())
            }
            let P = o.debounce(v, 300);

            function I() {
                return P(), !1
            }
            class S extends r.default.Store {
                initialize() {
                    this.waitFor(d.default, p.default, m.default, c.default, f.default), this.syncWith([d.default, c.default], I)
                }
                getSpeaker(e) {
                    return a !== e && (a = e, v(!1)), null != i ? i : p.default.getId()
                }
            }
            S.displayName = "VideoSpeakerStore";
            let C = new S(s.default, {
                AUDIO_SET_LOCAL_VIDEO_DISABLED: I
            });
            var g = C
        },
        276999: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BackgroundTransition: function() {
                    return m
                }
            });
            var a = n("920040"),
                i = n("773670"),
                l = n("575482"),
                o = n.n(l),
                r = n("28926"),
                s = n("638800"),
                d = n("580279"),
                u = n("145131"),
                c = n("49111"),
                p = n("585791");
            let f = {
                [c.ChannelLayouts.NORMAL]: p.normal,
                [c.ChannelLayouts.MINIMUM]: p.minimum,
                [c.ChannelLayouts.NO_CHAT]: p.noChat,
                [c.ChannelLayouts.FULL_SCREEN]: p.fullScreen
            };
            class m extends i.PureComponent {
                componentDidAppear() {
                    this.state.animation.setValue(1)
                }
                componentWillEnter(e) {
                    let {
                        animation: t
                    } = this.state;
                    t.setValue(0), r.default.spring(t, {
                        toValue: 1,
                        overshootClamping: !0
                    }).start(e)
                }
                componentWillLeave(e) {
                    r.default.spring(this.state.animation, {
                        toValue: 0,
                        overshootClamping: !0
                    }).start(e)
                }
                render() {
                    return (0, a.jsx)(r.default.div, {
                        className: o(p.videoBackgroundTransition, this.props.className),
                        style: {
                            opacity: this.state.animation
                        },
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        animation: new r.default.Value(0)
                    }
                }
            }
            class h extends i.PureComponent {
                componentDidMount() {
                    document.addEventListener("mousedown", this.handleMouseEvent, !0), document.addEventListener("mousemove", this.handleMouseEvent, !0)
                }
                componentWillUnmount() {
                    document.removeEventListener("mousedown", this.handleMouseEvent, !0), document.removeEventListener("mousemove", this.handleMouseEvent, !0), this._timeout.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    if (e.layout !== t.layoutProp) return t.idle ? {
                        idle: !1,
                        layoutProp: e.layout
                    } : {
                        layoutProp: e.layout
                    };
                    return null
                }
                componentDidUpdate(e) {
                    this.props.layout !== e.layout && this._timeout.stop()
                }
                renderBackground() {
                    let {
                        background: e,
                        backgroundKey: t,
                        layout: n
                    } = this.props, i = "".concat(n, "-").concat(null != t ? t : "");
                    return (0, a.jsx)(d.default, {
                        className: p.videoBackground,
                        component: "div",
                        children: (0, a.jsx)(m, {
                            children: e
                        }, i)
                    })
                }
                renderContents() {
                    let {
                        top: e,
                        center: t,
                        bottom: n,
                        layout: i,
                        focused: l
                    } = this.props, {
                        idle: r
                    } = this.state;
                    return (0, a.jsx)(u.default, {
                        className: o(p.video, f[i], {
                            [p.idle]: r
                        }),
                        direction: u.default.Direction.VERTICAL,
                        justify: u.default.Justify.CENTER,
                        children: (0, a.jsxs)(u.default, {
                            className: p.videoWrapper,
                            direction: u.default.Direction.VERTICAL,
                            children: [this.renderBackground(), (0, a.jsxs)(u.default, {
                                className: o(p.videoInner, {
                                    [p.focused]: l
                                }),
                                direction: u.default.Direction.VERTICAL,
                                justify: u.default.Justify.BETWEEN,
                                children: [(0, a.jsx)(u.default, {
                                    className: p.videoTop,
                                    grow: 0,
                                    children: e
                                }), (0, a.jsx)(u.default, {
                                    className: p.videoCenter,
                                    children: t
                                }), (0, a.jsx)(u.default, {
                                    className: p.videoBottom,
                                    grow: 0,
                                    children: n
                                })]
                            })]
                        })
                    })
                }
                render() {
                    let {
                        layout: e,
                        className: t,
                        animated: n
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: o(p.videoHeight, f[e], t, {
                            [p.animated]: n
                        }),
                        children: this.renderContents()
                    })
                }
                constructor(e) {
                    super(e), this._timeout = new s.Timeout, this.handleMouseEvent = () => {
                        let {
                            layout: e
                        } = this.props;
                        (e === c.ChannelLayouts.FULL_SCREEN || e === c.ChannelLayouts.NO_CHAT) && (this._timeout.start(3e3, () => this.setState({
                            idle: !0
                        })), this.state.idle && this.setState({
                            idle: !1
                        }))
                    }, this.state = {
                        idle: !1,
                        backgroundAnimation: new r.default.Value(0),
                        layoutProp: e.layout
                    }
                }
            }
            h.defaultProps = {
                layout: c.ChannelLayouts.MINIMUM,
                animated: !0
            }
        },
        804643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("920040");
            n("773670");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 8,
                    height: n = 8,
                    color: l = "currentColor",
                    foreground: o,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 8",
                    fill: "none",
                    children: (0, a.jsx)("path", {
                        className: o,
                        fill: l,
                        d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z"
                    })
                })
            }
        }
    }
]);