            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return B
                }
            }), l("222007");
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("627445"),
                u = l.n(i),
                o = l("907002"),
                d = l("446674"),
                c = l("77078"),
                f = l("404118"),
                m = l("987317"),
                S = l("990766"),
                C = l("901582"),
                E = l("299285"),
                h = l("928609"),
                _ = l("268491"),
                p = l("42203"),
                g = l("305961"),
                N = l("42887"),
                I = l("568307"),
                x = l("18494"),
                v = l("697218"),
                A = l("703370"),
                R = l("145131"),
                T = l("476765"),
                L = l("599110"),
                M = l("773336"),
                O = l("50885"),
                j = l("773356"),
                D = l("7738"),
                P = l("375202"),
                b = l("636909"),
                U = l("934054"),
                y = l("23922"),
                G = l("16750"),
                H = l("686298"),
                V = l("49111"),
                w = l("180524"),
                F = l("782340"),
                k = l("770420");
            (a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

            function B(e) {
                var t, n, a, i;
                let {
                    selectGuild: B = !1,
                    selectSource: W = !0,
                    guildId: z,
                    analyticsLocation: K,
                    onClose: Y,
                    transitionState: Z
                } = e, {
                    preset: J,
                    resolution: X,
                    fps: Q
                } = (0, d.useStateFromStoresObject)([_.default], () => _.default.getState()), q = (0, d.useStateFromStores)([x.default, p.default], () => p.default.getChannel(x.default.getVoiceChannelId())), $ = (0, d.useStateFromStores)([I.default, A.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null), ee = (0, d.useStateFromStores)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), et = (0, d.useStateFromStores)([g.default], () => {
                    var e;
                    return null === (e = g.default.getGuild(z)) || void 0 === e ? void 0 : e.premiumTier
                }), [el, en] = null !== (t = (0, D.default)(J, ee, et)) && void 0 !== t ? t : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30];
                J !== H.ApplicationStreamPresets.PRESET_CUSTOM && (X = el, Q = en);
                let ea = (0, T.useUID)();
                let [es, er] = r.useState((a = B, i = W, a ? 0 : i ? 1 : 2)), [ei, eu] = r.useState(null), [eo, ed] = r.useState(!1), [ec, ef] = r.useState(null), [em, eS] = r.useState(null), [eC, eE] = r.useState(null), [eh, e_] = r.useState(J), [ep, eg] = r.useState(X), [eN, eI] = r.useState(Q), [ex, ev] = r.useState(!0), [eA, eR] = r.useState(null != z ? z : null), eT = null !== (n = null == q ? void 0 : q.id) && void 0 !== n ? n : ec;
                r.useEffect(() => {
                    let e = (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? E.default.getApplication(e.id) : null;
                    L.default.track(V.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: K
                    })
                }, [K]);

                function eL() {
                    ! function() {
                        var e, t;
                        u(null != $ || null != em, "got nothing to stream");
                        let l = null !== (e = null == q ? void 0 : q.id) && void 0 !== e ? e : ec;
                        u(null != l, "Received null target channel ID");
                        let n = p.default.getChannel(l),
                            a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : z;
                        null == q && m.default.selectVoiceChannel(l);
                        let s = eh,
                            r = ep,
                            i = eN;
                        !(0, j.default)(s, r, i, ee, et) && (s = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, i = H.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: s,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, G.default)($, em, I.default.getRunningGames()),
                            d = !(0, M.isWindows)() || null == o || (null == em ? void 0 : em.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(a, l, {
                            pid: c,
                            sourceId: null == c && null != em ? em.id : null,
                            sourceName: null == c && null != em ? em.name : null,
                            audioSourceId: eC,
                            sound: ex
                        }), (async () => {
                            let e = await h.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: F.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), Y()
                }
                let eM = r.useCallback((e, t, l) => {
                    let n = (0, D.default)(e, ee, et),
                        [a, s] = null != n ? n : [t, l];
                    if (e !== eh && (t = a, l = s), !(0, j.default)(e, t, l, ee, et)) {
                        let [e, n] = (0, D.default)(H.ApplicationStreamPresets.PRESET_VIDEO, ee, et);
                        t = e, l = n
                    }
                    l !== eN && eI(l), t !== ep && eg(t), a !== t || s !== l ? e_(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eh && e_(e)
                }, [ee, et, eN, ep, eh]);
                async function eO(e) {
                    if (e.preventDefault(), 1 === es) return er(2);
                    let t = (0, G.default)($, em, I.default.getRunningGames()),
                        n = O.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, M.isMac)() && null != em) {
                        let e = await N.default.getMediaEngine().getDesktopSources(),
                            t = em.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var a, r;
                            a = t, r = e, L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: a,
                                screens: r.length
                            }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                                header: F.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: F.default.Messages.OKAY,
                                cancelText: F.default.Messages.CANCEL,
                                onConfirm: () => O.default.relaunch(),
                                ...e,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: F.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    n ? ! function() {
                        var e;
                        let t = null !== (e = null == $ ? void 0 : $.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, s.jsx)(e, {
                                ...l,
                                handleStream: eL,
                                pid: t
                            })
                        })
                    }() : eL()
                }
                let ej = r.useCallback(e => {
                        eS(e), null != e && (er(2), ed(!0))
                    }, []),
                    eD = r.useCallback(e => {
                        eR(e), er(W ? 1 : 2)
                    }, [W]),
                    eP = function(e) {
                        switch (e) {
                            case 1:
                                return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case 2:
                                return null;
                            default:
                                return F.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(es),
                    eb = (0, s.jsx)(c.ModalHeader, {
                        className: k.modalHeader,
                        separator: !1,
                        children: (0, s.jsxs)(R.default, {
                            direction: R.default.Direction.VERTICAL,
                            align: R.default.Align.CENTER,
                            className: k.header,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: ea,
                                className: k.headerText,
                                children: F.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != eP ? (0, s.jsx)(c.Text, {
                                className: k.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: eP
                            }) : null]
                        })
                    }),
                    eU = (0, s.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: es,
                        width: 480,
                        onSlideReady: eu,
                        children: [(0, s.jsx)(c.Slide, {
                            id: 0,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(U.default, {
                                    onSelectGuild: eD
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 1,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(y.default, {
                                    selectedSource: em,
                                    onChangeSelectedSource: ej
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 2,
                            children: (0, s.jsx)("div", {
                                className: k.modalSize,
                                children: (0, s.jsx)(b.default, {
                                    selectedChannelId: ec,
                                    selectedPreset: eh,
                                    selectedResolution: ep,
                                    selectedSource: em,
                                    selectedFPS: eN,
                                    sound: ex,
                                    sourceChanged: eo,
                                    selectSource: W,
                                    onChangeSelectedFPS: e => eM(eh, ep, e),
                                    onChangeSelectedResolution: e => eM(eh, e, eN),
                                    onChangeSelectedPreset: e => eM(e, ep, eN),
                                    onChangeSelectedChannelId: ef,
                                    onChangeSelectedSource: ej,
                                    onChangeSource: () => er(1),
                                    onChangeAudioDevice: e => eE(e),
                                    onChangeGuild: () => er(0),
                                    onChangeSound: e => ev(e),
                                    onClose: Y,
                                    guildId: eA,
                                    selectGuild: B,
                                    isAnimationDone: 2 === ei && Z === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    ey = function(e, t, l, n) {
                        switch (e) {
                            case 1:
                                return t ? 0 : null;
                            case 2:
                                if (n) return 1;
                                if (!l && t) return 0;
                                return null;
                            default:
                                return null
                        }
                    }(es, B, W, eo),
                    eG = 2 !== es || null == em && null == $ || null == eT,
                    eH = (0, s.jsxs)(c.ModalFooter, {
                        justify: null == ey ? R.default.Justify.START : R.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eG,
                            autoFocus: !0,
                            children: F.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == ey ? (0, s.jsx)(c.Button, {
                            className: k.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: Y,
                            children: F.default.Messages.CANCEL
                        }) : (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => er(ey),
                            children: F.default.Messages.BACK
                        })]
                    });
                return (0, s.jsx)(C.default, {
                    page: V.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, s.jsxs)(c.ModalRoot, {
                        "aria-labelledby": ea,
                        transitionState: Z,
                        size: c.ModalSize.DYNAMIC,
                        className: k.modalSize,
                        children: [(0, s.jsx)(c.ModalCloseButton, {
                            onClick: Y,
                            className: k.modalCloseButton
                        }), (0, s.jsx)("div", {
                            className: k.art
                        }), (0, s.jsxs)("form", {
                            onSubmit: eO,
                            children: [eb, eU, eH]
                        })]
                    })
                })
            }