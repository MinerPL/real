            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("394846"),
                d = n("118810"),
                c = n("446674"),
                f = n("551042"),
                p = n("77078"),
                m = n("452804"),
                h = n("901582"),
                E = n("594203"),
                S = n("244201"),
                g = n("716241"),
                C = n("86678"),
                T = n("873622"),
                v = n("277855"),
                y = n("191191"),
                x = n("256860"),
                I = n("364685"),
                N = n("889701"),
                _ = n("168973"),
                A = n("983782"),
                R = n("659500"),
                O = n("791776"),
                M = n("538282"),
                k = n("13030"),
                b = n("49111"),
                P = n("115279"),
                L = n("958706"),
                U = n("560241"),
                j = n("782340"),
                D = n("300441");
            let w = k.MIN_EXPRESSION_PICKER_WIDTH + P.EmojiSize.MEDIUM,
                B = i.memo(function(e) {
                    let {
                        isActive: t,
                        className: n,
                        viewType: i,
                        autoFocus: r = !1,
                        "aria-controls": s,
                        ...a
                    } = e;
                    return (0, l.jsx)(p.Button, {
                        role: "tab",
                        autoFocus: r,
                        "aria-controls": t ? s : void 0,
                        ...a,
                        onClick: () => {
                            g.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                                tab: i,
                                badged: !1
                            }), (0, M.setExpressionPickerView)(i)
                        },
                        "aria-current": t ? "page" : void 0,
                        className: o(n, D.navButton, D.navItem, {
                            [D.navButtonActive]: t
                        }),
                        look: p.Button.Looks.BLANK,
                        size: p.Button.Sizes.NONE
                    })
                }),
                H = e => {
                    let {
                        positionContainerRef: t,
                        drawerRef: n,
                        orientation: l
                    } = e, r = (0, c.useStateFromStores)([_.default], () => _.default.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [u, d] = i.useState(null != r ? r : k.ExpressionPickerWidths.MIN), f = i.useMemo(() => {
                        switch (u) {
                            case k.ExpressionPickerWidths.MIN:
                                return k.MIN_EXPRESSION_PICKER_WIDTH;
                            case k.ExpressionPickerWidths.MAX:
                                return null;
                            default:
                                return u
                        }
                    }, [u]), p = i.useCallback(e => {
                        let t = e >= o ? k.ExpressionPickerWidths.MAX : e <= k.MIN_EXPRESSION_PICKER_WIDTH ? k.ExpressionPickerWidths.MIN : e;
                        null == t && null != n.current && (n.current.style.width = ""), m.default.updatedUnsyncedSettings({
                            expressionPickerWidth: t
                        }), d(t)
                    }, [n, o]), h = (0, E.default)({
                        initialElementDimension: f,
                        maxDimension: o,
                        minDimension: k.MIN_EXPRESSION_PICKER_WIDTH,
                        resizableDomNodeRef: n,
                        onElementResize: p,
                        orientation: l
                    });
                    i.useEffect(() => {
                        let e = a.debounce(() => {
                            null != t.current && s(t.current.offsetWidth)
                        }, 500);
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [t]), i.useLayoutEffect(() => {
                        null != t.current && s(t.current.offsetWidth)
                    }, [t]);
                    let S = i.useCallback(e => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), h(e)
                    }, [t, h]);
                    return {
                        drawerWidth: f,
                        handleDrawerResizeHandleMouseDown: S
                    }
                };
            var F = i.memo(function(e) {
                var t, n, r;
                let {
                    positionTargetRef: s,
                    hideGifFavorites: a,
                    includeCreateEmojiButton: m,
                    onSelectGIF: _,
                    onSelectEmoji: F,
                    onSelectSticker: G,
                    onSelectSound: K,
                    channel: V,
                    type: W,
                    position: Y,
                    align: q,
                    positionLayerClassName: z,
                    closeOnModalOuterClick: Q = !1,
                    parentModalKey: X
                } = e, Z = i.useRef(null), J = i.useRef(!1), $ = i.useRef(), ee = i.useRef(null), et = "left" === q ? E.ResizeOrientation.HORIZONTAL_RIGHT : E.ResizeOrientation.HORIZONTAL_LEFT, {
                    drawerWidth: en,
                    handleDrawerResizeHandleMouseDown: el
                } = H({
                    positionContainerRef: Z,
                    drawerRef: ee,
                    orientation: et
                }), ei = (0, M.useExpressionPickerStore)(e => e.activeView), er = (0, x.useHasSendableSticker)(V), {
                    renderWindow: eo,
                    windowDispatch: es
                } = i.useContext(S.default), ea = (0, c.useStateFromStores)([I.default], () => !I.default.hasLoadedStickerPacks), eu = (0, v.useSoundmojiExperiment)("expression_picker"), ed = null != X, ec = (0, f.useIsModalAtTop)(null != X ? X : ""), ef = i.useCallback(e => {
                    var t;
                    if (!ed && (0, f.hasAnyModalOpen)() || ed && !(ec && Q)) return;
                    let {
                        target: n
                    } = e;
                    if ((0, d.isElement)(n) && null != n.closest("." + k.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                    for (;
                        (0, d.isElement)(n);) {
                        if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                        n = n.parentNode
                    }(0, M.closeExpressionPicker)();
                    let l = null === (t = (0, O.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                    (null == l || "BODY" === l.tagName) && R.ComponentDispatch.dispatchToLastSubscribed(b.ComponentActions.TEXTAREA_FOCUS)
                }, [Q, ec, ed]), ep = i.useCallback(() => {
                    (0, M.closeExpressionPicker)()
                }, []);
                i.useLayoutEffect(() => {
                    let e = () => {
                        ei === k.ExpressionPickerViewType.GIF && (0, M.closeExpressionPicker)()
                    };
                    return eo.addEventListener("mousedown", ef), eo.addEventListener("contextmenu", ef), es.subscribe(b.ComponentActions.POPOUT_CLOSE, ep), R.ComponentDispatch.subscribe(b.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                        eo.removeEventListener("mousedown", ef), eo.removeEventListener("contextmenu", ef), es.unsubscribe(b.ComponentActions.POPOUT_CLOSE, ep), R.ComponentDispatch.unsubscribe(b.ComponentActions.CLOSE_GIF_PICKER, e)
                    }
                }, [ei, ep, ef, eo, es]), (0, p.useFocusLock)(Z), i.useEffect(() => {
                    (0, M.setSearchQuery)("")
                }, []), i.useEffect(() => {
                    (!ed && (0, f.hasAnyModalOpen)() || ed && !ec) && (0, M.closeExpressionPicker)()
                }, [ec, ed]), i.useEffect(() => {
                    if (null != ee.current && !J.current) {
                        var e, t, n, l;
                        ei === k.ExpressionPickerViewType.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), J.current = !0) : ei === k.ExpressionPickerViewType.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ea && (null == $ || null === (l = $.current) || void 0 === l || l.onPickerOpen(), J.current = !0) : (g.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                            width: ee.current.offsetWidth,
                            tab: ei,
                            badged: !1
                        }), J.current = !0)
                    }
                });
                let em = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile,
                    eh = null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending,
                    eE = !(null === (r = W.expressionPicker) || void 0 === r ? void 0 : r.onlyEmojis) && (em || eh),
                    eS = "left" === q ? "right" : "left",
                    eg = null != z ? z : "left" === q ? D.positionLayerDefaultAlignLeft : D.positionLayerDefaultAlignRight;
                return (0, l.jsx)(h.default, {
                    section: b.AnalyticsSections.EXPRESSION_PICKER,
                    children: (0, l.jsx)(A.AppReferencePositionLayer, {
                        className: o(D.positionLayer, eg),
                        reference: s,
                        position: Y,
                        align: q,
                        spacing: 8,
                        autoInvert: !0,
                        children: e => {
                            let {
                                isPositioned: t
                            } = e;
                            return (0, l.jsx)("section", {
                                className: o(D.positionContainer, {
                                    [D.positionContainerOnlyEmoji]: !eE
                                }),
                                ref: Z,
                                role: "dialog",
                                "aria-label": j.default.Messages.EXPRESSION_PICKER,
                                children: t ? (0, l.jsxs)("div", {
                                    className: D.drawerSizingWrapper,
                                    style: {
                                        width: null == en ? void 0 : en,
                                        [q]: 0
                                    },
                                    ref: ee,
                                    children: [(0, l.jsx)("div", {
                                        className: D.resizeHandle,
                                        onMouseDown: el,
                                        style: {
                                            [eS]: -2
                                        }
                                    }), (0, l.jsxs)("div", {
                                        className: D.contentWrapper,
                                        children: [eE ? (0, l.jsx)("nav", {
                                            className: D.nav,
                                            children: (0, l.jsxs)("div", {
                                                className: D.navList,
                                                role: "tablist",
                                                "aria-label": j.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                                children: [em && (0, l.jsx)(B, {
                                                    id: P.GIF_PICKER_TAB_ID,
                                                    "aria-controls": P.GIF_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.GIF,
                                                    isActive: ei === k.ExpressionPickerViewType.GIF,
                                                    viewType: k.ExpressionPickerViewType.GIF,
                                                    children: j.default.Messages.EXPRESSION_PICKER_GIF
                                                }), eh ? (0, l.jsx)(B, {
                                                    id: U.STICKER_PICKER_TAB_ID,
                                                    "aria-controls": U.STICKER_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.STICKER,
                                                    isActive: ei === k.ExpressionPickerViewType.STICKER,
                                                    autoFocus: !er,
                                                    viewType: k.ExpressionPickerViewType.STICKER,
                                                    children: (0, l.jsx)("div", {
                                                        className: D.stickersNavItem,
                                                        children: j.default.Messages.EXPRESSION_PICKER_STICKER
                                                    })
                                                }) : null, (0, l.jsx)(B, {
                                                    id: P.EMOJI_PICKER_TAB_ID,
                                                    "aria-controls": P.EMOJI_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.EMOJI,
                                                    isActive: ei === k.ExpressionPickerViewType.EMOJI,
                                                    viewType: k.ExpressionPickerViewType.EMOJI,
                                                    children: j.default.Messages.EXPRESSION_PICKER_EMOJI
                                                }), eu && null != K && (0, l.jsx)(B, {
                                                    id: P.SOUNDBOARD_PICKER_TAB_ID,
                                                    "aria-controls": P.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.SOUNDBOARD,
                                                    isActive: ei === k.ExpressionPickerViewType.SOUNDBOARD,
                                                    viewType: k.ExpressionPickerViewType.SOUNDBOARD,
                                                    children: "Sounds"
                                                })]
                                            })
                                        }) : null, ei === k.ExpressionPickerViewType.STICKER && eE ? (0, l.jsx)(N.default, {
                                            isLoading: ea,
                                            channel: V,
                                            containerWidth: en,
                                            onSelectSticker: G,
                                            closePopout: ep,
                                            ref: e => {
                                                $.current = e
                                            }
                                        }) : null, ei === k.ExpressionPickerViewType.GIF && eE ? (0, l.jsx)(T.default, {
                                            onSelectGIF: _,
                                            hideFavorites: a,
                                            persistSearch: !0
                                        }) : null, ei === k.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(C.default, {
                                            hasTabWrapper: !0,
                                            persistSearch: !0,
                                            channel: V,
                                            containerWidth: en,
                                            includeCreateEmojiButton: m,
                                            emojiSize: null != en && en < w ? P.EmojiSize.MEDIUM : P.EmojiSize.LARGE,
                                            pickerIntention: L.EmojiIntention.CHAT,
                                            closePopout: ep,
                                            onSelectEmoji: F,
                                            ref: e => {
                                                $.current = e
                                            }
                                        }) : null, ei === k.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                                            className: D.soundboardContainer,
                                            children: (0, l.jsx)(y.default, {
                                                guildId: V.guild_id,
                                                channel: V,
                                                containerWidth: en,
                                                onClose: ep,
                                                onSelect: K,
                                                analyticsSource: "expression-picker",
                                                autoWidth: !0
                                            })
                                        }) : null]
                                    })]
                                }) : null
                            })
                        }
                    })
                })
            })