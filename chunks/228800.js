            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007"), n("70102");
            var a = n("37983"),
                s = n("884691"),
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
                N = n("778588"),
                I = n("957255"),
                v = n("101125"),
                L = n("351825"),
                R = n("738602"),
                x = n("430025"),
                y = n("659500"),
                O = n("773336"),
                D = n("412861"),
                j = n("79254"),
                b = n("64096"),
                P = n("49111"),
                F = n("80028"),
                U = n("782340"),
                H = n("381769"),
                k = s.memo(function(e) {
                    var t, l;
                    let k, {
                            className: G,
                            channel: w,
                            draftType: B,
                            editorTextContent: V,
                            setValue: W,
                            canOnlyUseTextCommands: z
                        } = e,
                        Z = (0, f.useAppContext)(),
                        K = s.useRef(null),
                        Y = (0, r.useStateFromStores)([v.default], () => v.default.getActivities()),
                        q = (0, r.useStateFromStores)([m.default], () => m.default.getSettings().clipsEnabled),
                        X = (0, r.useStateFromStores)([m.default], () => m.default.getLastClipsSession()),
                        Q = (0, r.useStateFromStoresArray)([m.default], () => m.default.getNewClipIds()),
                        J = (0, r.useStateFromStores)([M.default], () => null == M.default.getCurrentSidebarChannelId(w.id)),
                        $ = (0, r.useStateFromStores)([g.HotspotStore], () => g.HotspotStore.hasHotspot(g.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
                        ee = (0, u.useModalsStore)(e => (0, u.hasModalOpenSelector)(e, F.CLIPS_GALLERY_MODAL_KEY)),
                        et = (0, r.useStateFromStores)([N.default], () => N.default.hasLayers()),
                        en = (0, r.useStateFromStores)([m.default], () => m.default.hasClips()),
                        [ea, es] = s.useState(null),
                        el = (0, p.useEnableClips)() && (q || en),
                        ei = w.isPrivate(),
                        er = (0, r.useStateFromStores)([I.default], () => ei || I.default.can(P.Permissions.ATTACH_FILES, w) && I.default.can(P.Permissions.SEND_MESSAGES, w)),
                        eo = (0, c.default)(X);
                    (null == eo ? void 0 : eo.newClipIds.length) !== (null == X ? void 0 : X.newClipIds.length) && (null !== (t = null == X ? void 0 : X.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ea && $ && J && !ee && !et && es("recentClips");
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
                            return t => (0, a.jsx)(e, {
                                ...t,
                                channelId: w.id
                            })
                        }, {
                            modalKey: F.CLIPS_GALLERY_MODAL_KEY
                        }), es(null)
                    }
                    s.useEffect(() => {
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
                        eC = (0, r.useStateFromStores)([I.default, _.default], () => (0, C.canUseApplicationCommands)(I.default, _.default, z, w)),
                        ep = (0, S.useCanPostPollsInChannel)(null != w ? w : void 0),
                        em = (0, u.useRedesignIconContext)().enabled,
                        eE = null !== (l = null == Q ? void 0 : Q.length) && void 0 !== l ? l : 0,
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
                            appContext: Z
                        });
                    if (0 === eg.length) return null;
                    let eS = Y.some(e => (0, h.default)(e, P.ActivityFlags.SYNC)),
                        e_ = Y.some(e => (0, h.default)(e, P.ActivityFlags.JOIN) && !(0, h.default)(e, P.ActivityFlags.EMBEDDED)) || eS;
                    k = em ? (0, a.jsx)(o.CirclePlusIcon, {
                        className: H.attachButtonIcon,
                        colorClass: H.attachButtonPlus
                    }) : e_ ? (0, a.jsx)(x.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonPlay,
                        background: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    }) : eE > 0 ? (0, a.jsx)(R.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonClip,
                        background: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(L.default, {
                        className: H.attachButtonIcon,
                        foreground: H.attachButtonPlus,
                        width: 24,
                        height: 24
                    });
                    let eA = (0, a.jsx)(u.Popout, {
                        shouldShow: null != ea,
                        animation: u.Popout.Animation.NONE,
                        align: "recentClips" === ea ? "center" : "left",
                        position: "top",
                        positionKey: null != ea ? ea : "null",
                        onRequestOpen: () => es("attachMenu"),
                        onRequestClose: () => {
                            !(0, u.hasAnyModalOpen)() && es(null)
                        },
                        renderPopout: e => {
                            switch (ea) {
                                case "recentClips":
                                    return (0, a.jsx)(E.default, {
                                        ...e,
                                        onOpenClips: ed,
                                        lastClipsSession: X
                                    });
                                case "attachMenu":
                                    return (0, a.jsx)(j.default, {
                                        ...e,
                                        onClose: () => es(null),
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
                        children: e => (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.BLANK,
                            size: u.Button.Sizes.NONE,
                            className: i(H.attachButton, G),
                            innerClassName: H.attachButtonInner,
                            "aria-label": U.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
                            onDoubleClick: er ? () => {
                                var e;
                                return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                            } : void 0,
                            ...e,
                            children: k
                        })
                    });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: H.uploadInput,
                            children: (0, a.jsx)(d.default, {
                                ref: K,
                                onChange: e => {
                                    eu(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
                                },
                                multiple: w.rateLimitPerUser <= 0,
                                tabIndex: -1,
                                "aria-hidden": !0
                            })
                        }), (0, a.jsx)("div", {
                            className: H.attachWrapper,
                            children: eA
                        })]
                    })
                })