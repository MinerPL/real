            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007"), n("70102");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("446674"),
                o = n("31745"),
                u = n("77078"),
                d = n("371642"),
                c = n("84339"),
                f = n("244201"),
                h = n("871388"),
                C = n("389153"),
                p = n("56947"),
                m = n("386045"),
                E = n("734217"),
                g = n("139321"),
                S = n("562228"),
                _ = n("140596"),
                A = n("300322"),
                T = n("845579"),
                M = n("982108"),
                I = n("778588"),
                N = n("957255"),
                v = n("101125"),
                L = n("351825"),
                x = n("738602"),
                R = n("430025"),
                y = n("659500"),
                O = n("773336"),
                D = n("412861"),
                j = n("79254"),
                b = n("64096"),
                P = n("49111"),
                U = n("80028"),
                F = n("782340"),
                H = n("381769"),
                k = a.memo(function(e) {
                    var t, l;
                    let k, {
                            className: G,
                            channel: w,
                            draftType: B,
                            editorTextContent: V,
                            setValue: W,
                            canOnlyUseTextCommands: Z
                        } = e,
                        z = (0, f.useAppContext)(),
                        K = a.useRef(null),
                        Y = (0, r.useStateFromStores)([v.default], () => v.default.getActivities()),
                        q = (0, r.useStateFromStores)([m.default], () => m.default.getSettings().clipsEnabled),
                        X = (0, r.useStateFromStores)([m.default], () => m.default.getLastClipsSession()),
                        J = (0, r.useStateFromStoresArray)([m.default], () => m.default.getNewClipIds()),
                        Q = (0, r.useStateFromStores)([M.default], () => null == M.default.getCurrentSidebarChannelId(w.id)),
                        $ = (0, r.useStateFromStores)([g.HotspotStore], () => g.HotspotStore.hasHotspot(g.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
                        ee = (0, u.useModalsStore)(e => (0, u.hasModalOpenSelector)(e, U.CLIPS_GALLERY_MODAL_KEY)),
                        et = (0, r.useStateFromStores)([I.default], () => I.default.hasLayers()),
                        en = (0, r.useStateFromStores)([m.default], () => m.default.hasClips()),
                        [es, ea] = a.useState(null),
                        el = (0, p.useEnableClips)() && (q || en),
                        ei = w.isPrivate(),
                        er = (0, r.useStateFromStores)([N.default], () => ei || N.default.can(P.Permissions.ATTACH_FILES, w) && N.default.can(P.Permissions.SEND_MESSAGES, w)),
                        eo = (0, c.default)(X);
                    (null == eo ? void 0 : eo.newClipIds.length) !== (null == X ? void 0 : X.newClipIds.length) && (null !== (t = null == X ? void 0 : X.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == es && $ && Q && !ee && !et && ea("recentClips");
                    let eu = (e, t, n) => {
                        null != t && "ETOOLARGE" === t.code ? (0, D.showUploadFileSizeExceededError)(w, []) : (0, D.promptToUpload)(e, w, B, {
                            requireConfirm: !0,
                            showLargeMessageDialog: n
                        }), y.ComponentDispatch.dispatchToLastSubscribed(P.ComponentActions.TEXTAREA_FOCUS)
                    };

                    function ed() {
                        (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("167573").then(n.bind(n, "167573"));
                            return t => (0, s.jsx)(e, {
                                ...t,
                                channelId: w.id
                            })
                        }, {
                            modalKey: U.CLIPS_GALLERY_MODAL_KEY
                        }), ea(null)
                    }
                    a.useEffect(() => {
                        let e = () => {
                            var e;
                            return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                        };
                        return y.ComponentDispatch.subscribe(P.ComponentActions.UPLOAD_FILE, e), () => {
                            y.ComponentDispatch.unsubscribe(P.ComponentActions.UPLOAD_FILE, e)
                        }
                    });
                    let ec = (0, A.useCanStartPublicThread)(w),
                        ef = (0, A.useCanStartPrivateThread)(w),
                        eh = !T.UseLegacyChatInput.useSetting() && !(0, O.isAndroidWeb)() && null != window.ResizeObserver,
                        eC = (0, r.useStateFromStores)([N.default, _.default], () => (0, C.canUseApplicationCommands)(N.default, _.default, Z, w)),
                        ep = (0, S.useCanPostPollsInChannel)(null != w ? w : void 0),
                        em = (0, u.useRedesignIconContext)().enabled,
                        eE = null !== (l = null == J ? void 0 : J.length) && void 0 !== l ? l : 0,
                        eg = (0, b.default)({
                            canAttachFiles: er,
                            canStartThreads: ec || ef,
                            useSlate: eh,
                            hasClips: el,
                            canUseApplicationCommands: eC,
                            channel: w,
                            activities: Y,
                            newClipsCount: eE,
                            canPostPolls: ep,
                            appContext: z
                        });
                    if (0 === eg.length) return null;
                    let eS = Y.some(e => (0, h.default)(e, P.ActivityFlags.SYNC)),
                        e_ = Y.some(e => (0, h.default)(e, P.ActivityFlags.JOIN) && !(0, h.default)(e, P.ActivityFlags.EMBEDDED)) || eS;
                    k = em ? (0, s.jsx)(o.CirclePlusIcon, {
                        className: H.attachButtonIcon,
                        colorClass: H.attachButtonPlus
                    }) : e_ ? (0, s.jsx)(R.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonPlay,
                        background: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    }) : eE > 0 ? (0, s.jsx)(x.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonClip,
                        background: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    }) : (0, s.jsx)(L.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    });
                    let eA = (0, s.jsx)(u.Popout, {
                        shouldShow: null != es,
                        animation: u.Popout.Animation.NONE,
                        align: "recentClips" === es ? "center" : "left",
                        position: "top",
                        positionKey: null != es ? es : "null",
                        onRequestOpen: () => ea("attachMenu"),
                        onRequestClose: () => {
                            !(0, u.hasAnyModalOpen)() && ea(null)
                        },
                        renderPopout: e => {
                            switch (es) {
                                case "recentClips":
                                    return (0, s.jsx)(E.default, {
                                        ...e,
                                        onOpenClips: ed,
                                        lastClipsSession: X
                                    });
                                case "attachMenu":
                                    return (0, s.jsx)(j.default, {
                                        ...e,
                                        onClose: () => ea(null),
                                        options: eg,
                                        channel: w,
                                        onFileUpload: () => {
                                            var e;
                                            return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                                        },
                                        draftType: B,
                                        editorTextContent: V,
                                        setValue: W,
                                        openClips: ed
                                    });
                                default:
                                    throw Error("Invalid popout type provided")
                            }
                        },
                        children: e => (0, s.jsx)(u.Button, {
                            look: u.Button.Looks.BLANK,
                            size: u.Button.Sizes.NONE,
                            className: i(H.attachButton, G),
                            innerClassName: H.attachButtonInner,
                            "aria-label": F.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
                            onDoubleClick: er ? () => {
                                var e;
                                return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                            } : void 0,
                            ...e,
                            children: k
                        })
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: H.uploadInput,
                            children: (0, s.jsx)(d.default, {
                                ref: K,
                                onChange: e => {
                                    eu(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
                                },
                                multiple: w.rateLimitPerUser <= 0,
                                tabIndex: -1,
                                "aria-hidden": !0
                            })
                        }), (0, s.jsx)("div", {
                            className: H.attachWrapper,
                            children: eA
                        })]
                    })
                })