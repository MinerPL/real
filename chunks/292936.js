            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("222007");
            var l, i, r = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("974667"),
                d = n("942367"),
                c = n("617258"),
                f = n("769846"),
                p = n("77078"),
                m = n("812204"),
                h = n("685665"),
                E = n("200197"),
                S = n("538282"),
                g = n("866353"),
                C = n("364685"),
                T = n("161585"),
                v = n("24373"),
                y = n("41170"),
                x = n("591522"),
                I = n("209069"),
                N = n("845579"),
                _ = n("945330"),
                A = n("587974"),
                R = n("599110"),
                O = n("510500"),
                M = n("171209"),
                k = n("49111"),
                b = n("782340"),
                P = n("612729");
            let L = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
                U = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
                j = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN),
                D = 2 * U + j + 2 * L,
                w = () => Promise.resolve();

            function B(e) {
                let {
                    isFocused: t,
                    isHidden: n,
                    sendability: l,
                    listIndex: i,
                    sticker: o,
                    onMouseOver: s,
                    onSelectSticker: d
                } = e, {
                    tabIndex: c,
                    ...f
                } = (0, u.useListItem)("".concat(i));
                return (0, r.jsxs)(p.Clickable, {
                    ...f,
                    tabIndex: n ? -1 : c,
                    className: a(P.suggestedExpression, {
                        [P.suggestedExpressionFocused]: t
                    }),
                    focusProps: {
                        enabled: !1
                    },
                    onClick: () => d(o, l),
                    onMouseOver: s,
                    children: [(0, r.jsx)(A.default, {
                        mask: A.default.Masks.STICKER_ROUNDED_RECT,
                        width: U + 4,
                        height: U + 4,
                        className: P.mask,
                        children: (0, r.jsx)("div", {
                            className: P.maskBackground
                        })
                    }), (0, r.jsx)(y.default, {
                        maskAsset: !0,
                        size: U,
                        sticker: o,
                        className: P.sticker
                    }), l !== g.StickerSendability.SENDABLE && (0, r.jsx)(x.default, {
                        size: 14
                    })]
                })
            }(i = l || (l = {}))[i.STICKER = 0] = "STICKER";
            var H = o.memo(function(e) {
                var t;
                let {
                    editorRef: n,
                    channel: l,
                    isEditorFocused: i,
                    onSelectSticker: s,
                    stickerIconVisible: c = !1,
                    submitButtonVisible: f = !1
                } = e, y = o.useContext(E.default), [x, A] = o.useState(null), [L, U] = o.useState(!1), [j, H] = o.useState(null), F = (0, S.useExpressionPickerStore)(e => null != e.activeView), G = o.useRef(null), [K, V] = o.useState(""), [W, Y] = o.useState(""), [q, z] = o.useState(!1), [Q, X] = o.useState(!1), Z = (0, O.useStickerSuggestionResults)(K, L, l), {
                    analyticsLocations: J,
                    AnalyticsLocationProvider: $
                } = (0, h.default)(m.default.EXPRESSION_SUGGESTIONS), {
                    handleTextChange: ee,
                    debouncedSetTextInputValue: et
                } = (0, O.useTextChangeHandler)({
                    setTextInputValue: V,
                    setHasDismissed: U,
                    setHasSelection: X,
                    setFocusedSuggestionType: A
                });
                o.useEffect(() => {
                    let e = e => {
                            z(e)
                        },
                        t = e => {
                            let t = "" !== e && null != e;
                            if (X(t), t) {
                                var l;
                                A(null), null === (l = n.current) || void 0 === l || l.focus()
                            }
                        };
                    return y.addListener("text-changed", ee), y.addListener("autocomplete-visibility-change", e), y.addListener("selection-changed", t), () => {
                        y.removeListener("text-changed", ee), y.removeListener("autocomplete-visibility-change", e), y.removeListener("selection-changed", t)
                    }
                }, [ee, n, y]), o.useLayoutEffect(() => {
                    null == x && H(null)
                }, [x]);
                let [en, el] = o.useState(!1);
                o.useLayoutEffect(() => {
                    requestAnimationFrame(() => {
                        let e = G.current;
                        el(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
                    })
                }, [i]);
                let ei = Z.length > 0,
                    er = en && !F && !q && !L && !Q && ei,
                    {
                        stickersNavigator: eo
                    } = function(e) {
                        let {
                            editorRef: t,
                            hasStickerResults: n,
                            shouldRenderSuggestions: l,
                            focusedSuggestionType: i,
                            setFocusedStickerListItem: r,
                            setFocusedSuggestionType: s,
                            setHasDismissed: a,
                            setTextInputValue: c
                        } = e, f = o.useCallback((e, t) => {
                            r(t)
                        }, [r]), p = (0, u.default)({
                            id: "expression-suggestions-stickers",
                            isEnabled: !0,
                            scrollToStart: w,
                            scrollToEnd: w,
                            orientation: d.Orientations.HORIZONTAL,
                            setFocus: f,
                            useVirtualFocus: !0
                        });
                        return o.useEffect(() => {
                            let e = e => {
                                var r, o;
                                if (l && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                                    switch (e.key) {
                                        case "ArrowUp":
                                            e.preventDefault(), null == i && n && (p.focusFirstVisibleItem(), s(0));
                                            break;
                                        case "ArrowDown":
                                            s(null), null === (r = t.current) || void 0 === r || r.focus();
                                            break;
                                        case "Escape":
                                            s(null), a(!0), c(""), null === (o = t.current) || void 0 === o || o.focus()
                                    }
                                    0 === i && p.containerProps.onKeyDown(e)
                                }
                            };
                            return window.addEventListener("keydown", e, {
                                capture: !0
                            }), () => window.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [p, l, i, s, n, t, a, r, c]), {
                            stickersNavigator: p
                        }
                    }({
                        editorRef: n,
                        hasStickerResults: ei,
                        shouldRenderSuggestions: er,
                        focusedSuggestionType: x,
                        setFocusedSuggestionType: A,
                        setHasDismissed: U,
                        setFocusedStickerListItem: H,
                        setTextInputValue: V
                    }),
                    es = (e, t) => {
                        if (er) {
                            if (R.default.track(k.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                                    sticker_id: e.id,
                                    suggestion_trigger: W
                                }), t === g.StickerSendability.SENDABLE) U(!0), s(e, T.StickerSelectLocation.EXPRESSION_SUGGESTIONS), et.cancel(), V("");
                            else if ((0, v.isStandardSticker)(e)) {
                                let t = C.default.getStickerPack(e.pack_id);
                                null != t && (0, I.default)({
                                    stickerPack: t,
                                    analyticsLocations: J
                                })
                            }
                            y.emit("sticker-suggestions-hidden")
                        }
                    },
                    ea = o.useRef([]),
                    eu = o.useRef(!1);
                o.useEffect(() => {
                    er && (ea.current = Z), er !== eu.current && (y.emit(er ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), er && ((0, M.throttledTrackExpressionSuggestionDisplayed)(K), Y(K))), eu.current = er
                }, [y, er, Z, K]);
                let ed = !er,
                    ec = er ? Z : ea.current;
                return (0, r.jsx)($, {
                    children: (0, r.jsxs)(p.Clickable, {
                        tabIndex: ed ? -1 : 0,
                        "aria-hidden": ed,
                        className: a(P.container, {
                            [P.hidden]: ed,
                            [P.submitButtonOffset]: f,
                            [P.stickerIconOffset]: c
                        }),
                        innerRef: G,
                        style: {
                            minWidth: D
                        },
                        onClick: () => {
                            var e;
                            return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                        },
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.ListNavigatorProvider, {
                                navigator: eo,
                                children: (0, r.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            tabIndex: n,
                                            ...l
                                        } = e;
                                        return (0, r.jsx)("div", {
                                            className: P.stickerResults,
                                            ref: e => {
                                                t.current = e
                                            },
                                            onMouseLeave: () => {
                                                null == x && H(null)
                                            },
                                            tabIndex: ed ? -1 : n,
                                            ...l,
                                            children: ec.map((e, t) => {
                                                let {
                                                    sticker: n,
                                                    sendability: l
                                                } = e;
                                                return (0, r.jsx)(B, {
                                                    isFocused: j === "".concat(t),
                                                    isHidden: ed,
                                                    sendability: l,
                                                    listIndex: t,
                                                    onMouseOver: () => {
                                                        eo.setFocus("".concat(t)), H("".concat(t))
                                                    },
                                                    onSelectSticker: es,
                                                    sticker: n
                                                }, n.id)
                                            })
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("div", {
                                className: P.bottomInformationTextContainer,
                                children: [(0, r.jsx)("div", {
                                    className: P.textDivider
                                }), (0, r.jsxs)("div", {
                                    className: P.bottomInformationLayout,
                                    children: [(0, r.jsx)(p.Text, {
                                        className: P.descriptionText,
                                        style: {
                                            maxWidth: D
                                        },
                                        variant: "text-sm/normal",
                                        children: null != j ? b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                            stickerName: null === (t = Z[+j]) || void 0 === t ? void 0 : t.sticker.name
                                        }) : b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                            upHook: (e, t) => (0, r.jsx)(p.KeyCombo, {
                                                shortcut: "up",
                                                className: P.keybind
                                            }, t)
                                        })
                                    }), (0, r.jsx)(p.Clickable, {
                                        onClick: () => {
                                            R.default.track(k.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                enabled: !1,
                                                location: {
                                                    section: k.AnalyticsSections.EXPRESSION_PICKER
                                                }
                                            }), N.ExpressionSuggestionsEnabled.updateSetting(!1)
                                        },
                                        children: (0, r.jsx)(p.Tooltip, {
                                            text: b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                            children: e => (0, r.jsx)(_.default, {
                                                ...e,
                                                className: P.closeIcon
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: P.containerBackground
                        })]
                    })
                })
            })