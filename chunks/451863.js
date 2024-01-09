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
                g = l("42203"),
                p = l("305961"),
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
                G = l("934054"),
                U = l("23922"),
                y = l("16750"),
                H = l("686298"),
                V = l("49111"),
                w = l("180524"),
                k = l("782340"),
                F = l("770420");
            (a = n || (n = {}))[a.GUILD = 0] = "GUILD", a[a.SOURCE = 1] = "SOURCE", a[a.CONFIRM = 2] = "CONFIRM";

            function B(e) {
                var t, n, a, i, B;
                let {
                    selectGuild: W = !1,
                    selectSource: z = !0,
                    guildId: K,
                    analyticsLocation: Y,
                    onClose: Z,
                    transitionState: J
                } = e, {
                    preset: X,
                    resolution: Q,
                    fps: q
                } = (0, d.useStateFromStoresObject)([_.default], () => _.default.getState()), $ = (0, d.useStateFromStores)([x.default, g.default], () => g.default.getChannel(x.default.getVoiceChannelId())), ee = (0, d.useStateFromStores)([I.default, A.default], () => (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null), et = (0, d.useStateFromStores)([v.default], () => {
                    let e = v.default.getCurrentUser();
                    return u(null != e, "GoLiveModal: user cannot be undefined"), e
                }), el = null !== (t = null == $ ? void 0 : $.getGuildId()) && void 0 !== t ? t : K, en = (0, d.useStateFromStores)([p.default], () => {
                    var e;
                    return null != el ? null === (e = p.default.getGuild(el)) || void 0 === e ? void 0 : e.premiumTier : null
                }), [ea, es] = null !== (n = (0, D.default)(X, et, en)) && void 0 !== n ? n : [H.ApplicationStreamResolutions.RESOLUTION_720, H.ApplicationStreamFPS.FPS_30];
                X !== H.ApplicationStreamPresets.PRESET_CUSTOM && (Q = ea, q = es);
                let er = (0, T.useUID)();
                let [ei, eu] = r.useState((i = W, B = z, i ? 0 : B ? 1 : 2)), [eo, ed] = r.useState(null), [ec, ef] = r.useState(!1), [em, eS] = r.useState(null), [eC, eE] = r.useState(null), [eh, e_] = r.useState(null), [eg, ep] = r.useState(X), [eN, eI] = r.useState(Q), [ex, ev] = r.useState(q), [eA, eR] = r.useState(!0), [eT, eL] = r.useState(null != K ? K : null), eM = null !== (a = null == $ ? void 0 : $.id) && void 0 !== a ? a : em;
                r.useEffect(() => {
                    let e = (0, M.isWindows)() ? (0, P.default)(I.default, A.default) : null,
                        t = (null == e ? void 0 : e.id) != null ? E.default.getApplication(e.id) : null;
                    L.default.track(V.AnalyticEvents.OPEN_MODAL, {
                        type: "Go Live Modal",
                        application_id: null == t ? void 0 : t.id,
                        application_name: null == e ? void 0 : e.name,
                        game_id: null == t ? void 0 : t.id,
                        location_section: Y
                    })
                }, [Y]);

                function eO() {
                    ! function() {
                        var e, t;
                        u(null != ee || null != eC, "got nothing to stream");
                        let l = null !== (e = null == $ ? void 0 : $.id) && void 0 !== e ? e : em;
                        u(null != l, "Received null target channel ID");
                        let n = g.default.getChannel(l),
                            a = null !== (t = null == n ? void 0 : n.getGuildId()) && void 0 !== t ? t : K;
                        null == $ && m.default.selectVoiceChannel(l);
                        let s = eg,
                            r = eN,
                            i = ex;
                        !(0, j.default)(s, r, i, et, en) && (s = H.ApplicationStreamPresets.PRESET_VIDEO, r = H.ApplicationStreamResolutions.RESOLUTION_720, i = H.ApplicationStreamFPS.FPS_30), (0, S.updateStreamSettings)({
                            preset: s,
                            resolution: r,
                            frameRate: i
                        });
                        let o = (0, y.default)(ee, eC, I.default.getRunningGames()),
                            d = !(0, M.isWindows)() || null == o || (null == eC ? void 0 : eC.id.startsWith("camera:")),
                            c = d || null == o ? null : o.pid;
                        (0, S.startStream)(a, l, {
                            pid: c,
                            sourceId: null == c && null != eC ? eC.id : null,
                            sourceName: null == c && null != eC ? eC.name : null,
                            audioSourceId: eh,
                            sound: eA
                        }), (async () => {
                            let e = await h.default.hasPermission(w.NativePermissionTypes.SCREEN_RECORDING, {
                                showAuthorizationError: !1
                            });
                            !e && f.default.show({
                                title: k.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_TITLE,
                                body: k.default.Messages.WARNING_SCREEN_RECORDING_PERMISSION_BODY
                            })
                        })()
                    }(), Z()
                }
                let ej = r.useCallback((e, t, l) => {
                    let n = (0, D.default)(e, et, en),
                        [a, s] = null != n ? n : [t, l];
                    if (e !== eg && (t = a, l = s), !(0, j.default)(e, t, l, et, en)) {
                        let [e, n] = (0, D.default)(H.ApplicationStreamPresets.PRESET_VIDEO, et, en);
                        t = e, l = n
                    }
                    l !== ex && ev(l), t !== eN && eI(t), a !== t || s !== l ? ep(H.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eg && ep(e)
                }, [et, en, ex, eN, eg]);
                async function eD(e) {
                    if (e.preventDefault(), 1 === ei) return eu(2);
                    let t = (0, y.default)(ee, eC, I.default.getRunningGames()),
                        n = O.default.supportsFeature(V.NativeFeatures.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated);
                    if ((0, M.isMac)() && null != eC) {
                        let e = await N.default.getMediaEngine().getDesktopSources(),
                            t = eC.id;
                        if (t.startsWith("screen") && e.length > 0 && !e.some(e => e.includes(t))) {
                            var a, r;
                            a = t, r = e, L.default.track(V.AnalyticEvents.SCREENSHARE_FAILED, {
                                source_id: a,
                                screens: r.length
                            }), (0, c.openModal)(e => (0, s.jsx)(c.ConfirmModal, {
                                header: k.default.Messages.SCREENSHARE_RELAUNCH,
                                confirmText: k.default.Messages.OKAY,
                                cancelText: k.default.Messages.CANCEL,
                                onConfirm: () => O.default.relaunch(),
                                ...e,
                                children: (0, s.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: k.default.Messages.SCREENSHARE_RELAUNCH_BODY
                                })
                            }));
                            return
                        }
                    }
                    n ? ! function() {
                        var e;
                        let t = null !== (e = null == ee ? void 0 : ee.pid) && void 0 !== e ? e : null;
                        (0, c.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await l.el("426319").then(l.bind(l, "426319"));
                            return l => (0, s.jsx)(e, {
                                ...l,
                                handleStream: eO,
                                pid: t
                            })
                        })
                    }() : eO()
                }
                let eP = r.useCallback(e => {
                        eE(e), null != e && (eu(2), ef(!0))
                    }, []),
                    eb = r.useCallback(e => {
                        eL(e), eu(z ? 1 : 2)
                    }, [z]),
                    eG = function(e) {
                        switch (e) {
                            case 1:
                                return k.default.Messages.GO_LIVE_MODAL_DESCRIPTION_SELECT_SOURCE;
                            case 2:
                                return null;
                            default:
                                return k.default.Messages.GO_LIVE_MODAL_DESCRIPTION_GENERIC
                        }
                    }(ei),
                    eU = (0, s.jsx)(c.ModalHeader, {
                        className: F.modalHeader,
                        separator: !1,
                        children: (0, s.jsxs)(R.default, {
                            direction: R.default.Direction.VERTICAL,
                            align: R.default.Align.CENTER,
                            className: F.header,
                            children: [(0, s.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                id: er,
                                className: F.headerText,
                                children: k.default.Messages.GO_LIVE_MODAL_TITLE
                            }), null != eG ? (0, s.jsx)(c.Text, {
                                className: F.headerDescription,
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: eG
                            }) : null]
                        })
                    }),
                    ey = (0, s.jsxs)(c.Slides, {
                        springConfig: {
                            ...o.config.stiff,
                            clamp: !0
                        },
                        activeSlide: ei,
                        width: 480,
                        onSlideReady: ed,
                        children: [(0, s.jsx)(c.Slide, {
                            id: 0,
                            children: (0, s.jsx)("div", {
                                className: F.modalSize,
                                children: (0, s.jsx)(G.default, {
                                    onSelectGuild: eb
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 1,
                            children: (0, s.jsx)("div", {
                                className: F.modalSize,
                                children: (0, s.jsx)(U.default, {
                                    selectedSource: eC,
                                    onChangeSelectedSource: eP
                                })
                            })
                        }), (0, s.jsx)(c.Slide, {
                            id: 2,
                            children: (0, s.jsx)("div", {
                                className: F.modalSize,
                                children: (0, s.jsx)(b.default, {
                                    selectedChannelId: em,
                                    selectedPreset: eg,
                                    selectedResolution: eN,
                                    selectedSource: eC,
                                    selectedFPS: ex,
                                    sound: eA,
                                    sourceChanged: ec,
                                    selectSource: z,
                                    onChangeSelectedFPS: e => ej(eg, eN, e),
                                    onChangeSelectedResolution: e => ej(eg, e, ex),
                                    onChangeSelectedPreset: e => ej(e, eN, ex),
                                    onChangeSelectedChannelId: eS,
                                    onChangeSelectedSource: eP,
                                    onChangeSource: () => eu(1),
                                    onChangeAudioDevice: e => e_(e),
                                    onChangeGuild: () => eu(0),
                                    onChangeSound: e => eR(e),
                                    onClose: Z,
                                    selectedGuildId: eT,
                                    targetGuildPremiumTier: en,
                                    selectGuild: W,
                                    isAnimationDone: 2 === eo && J === c.ModalTransitionState.ENTERED
                                })
                            })
                        })]
                    }),
                    eH = function(e, t, l, n) {
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
                    }(ei, W, z, ec),
                    eV = 2 !== ei || null == eC && null == ee || null == eM,
                    ew = (0, s.jsxs)(c.ModalFooter, {
                        justify: null == eH ? R.default.Justify.START : R.default.Justify.BETWEEN,
                        children: [(0, s.jsx)(c.Button, {
                            type: "submit",
                            size: c.Button.Sizes.SMALL,
                            disabled: eV,
                            autoFocus: !0,
                            children: k.default.Messages.GO_LIVE_MODAL_CTA
                        }), null == eH ? (0, s.jsx)(c.Button, {
                            className: F.cancelButton,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: Z,
                            children: k.default.Messages.CANCEL
                        }) : (0, s.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: c.ButtonColors.PRIMARY,
                            onClick: () => eu(eH),
                            children: k.default.Messages.BACK
                        })]
                    });
                return (0, s.jsx)(C.default, {
                    page: V.AnalyticsPages.GO_LIVE_MODAL,
                    children: (0, s.jsxs)(c.ModalRoot, {
                        "aria-labelledby": er,
                        transitionState: J,
                        size: c.ModalSize.DYNAMIC,
                        className: F.modalSize,
                        children: [(0, s.jsx)(c.ModalCloseButton, {
                            onClick: Z,
                            className: F.modalCloseButton
                        }), (0, s.jsx)("div", {
                            className: F.art
                        }), (0, s.jsxs)("form", {
                            onSubmit: eD,
                            children: [eU, ey, ew]
                        })]
                    })
                })
            }