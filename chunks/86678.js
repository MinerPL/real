            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return ec
                }
            }), i("222007"), i("424973");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("483366"),
                o = i.n(r),
                u = i("880317"),
                c = i("446674"),
                d = i("151426"),
                f = i("769846"),
                E = i("77078"),
                m = i("150021"),
                I = i("901582"),
                p = i("997289"),
                g = i("812204"),
                _ = i("685665"),
                S = i("384997"),
                h = i("385976"),
                C = i("575226"),
                T = i("305781"),
                N = i("986632"),
                A = i("538282"),
                y = i("246511"),
                v = i("45961"),
                j = i("802894"),
                R = i("592407"),
                O = i("139321"),
                M = i("716849"),
                x = i("552917"),
                P = i("845579"),
                L = i("923959"),
                D = i("697218"),
                b = i("599110"),
                U = i("764364"),
                w = i("159885"),
                G = i("788506"),
                k = i("352046"),
                F = i("260211"),
                V = i("964611"),
                K = i("420489"),
                H = i("920514"),
                B = i("83017"),
                J = i("729873"),
                W = i("640076"),
                z = i("851111"),
                Z = i("282566"),
                Y = i("115279"),
                Q = i("49111"),
                X = i("994428"),
                q = i("958706"),
                $ = i("431364");
            let ee = (0, w.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
                et = (0, w.cssValueToNumber)(f.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
                ei = e => e.stopPropagation(),
                en = (e, t) => {
                    N.EmojiPickerStore.setInspectedExpressionPosition(e, t, y.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
                },
                el = e => {
                    let {
                        analyticsLocation: t,
                        pickerIntention: i,
                        columnCounts: n,
                        onSelectEmoji: s,
                        emojiGrid: a,
                        emojiList: r,
                        channelGuildId: o,
                        isBurstReaction: d
                    } = e, f = (0, c.useStateFromStores)([h.default], () => h.default.getDisambiguatedEmojiContext(o), [o]), E = l.useCallback((e, n) => {
                        switch (e.type) {
                            case B.EmojiGridItemTypes.CREATE_EMOJI:
                                s(void 0, !0), R.default.open(e.guildId, Q.GuildSettingsSections.EMOJI);
                                return;
                            case B.EmojiGridItemTypes.EMOJI: {
                                if (null != e.emoji && n.altKey) {
                                    f.isFavoriteEmojiWithoutFetchingLatest(e.emoji) ? (0, m.unfavoriteEmoji)(e.emoji) : ((0, G.trackEmojiFavorited)({
                                        emoji: e.emoji,
                                        location: {
                                            ...t,
                                            object: Q.AnalyticsObjects.EMOJI
                                        }
                                    }), (0, m.favoriteEmoji)(e.emoji));
                                    return
                                }
                                let l = {
                                    page: null != o ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
                                    section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: Q.AnalyticsObjects.EMOJI
                                };
                                d && (l = {
                                    page: null != o ? Q.AnalyticsPages.GUILD_CHANNEL : Q.AnalyticsPages.DM_CHANNEL,
                                    section: Q.AnalyticsSections.EMOJI_PICKER_POPOUT,
                                    object: Q.AnalyticsObjects.EMOJI
                                }), (0, G.trackEmojiSelect)({
                                    emoji: e.emoji,
                                    location: l,
                                    pickerIntention: i,
                                    category: e.category,
                                    subCategory: e.subCategory,
                                    newlyAddedHighlight: e.subCategory === Y.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(o, e.emoji.id)
                                }), s(e.emoji, !n.shiftKey, d)
                            }
                        }
                    }, [s, o, i, f, t, d]), {
                        gridDispatch: I,
                        getItemProps: p,
                        getRowProps: g,
                        gridContainerProps: _,
                        handleGridContainerKeyDown: S,
                        isUsingKeyboardNavigation: T
                    } = (0, v.useExpressionPickerGridKeyboardNavigation)({
                        columnCounts: n,
                        gridNavigatorId: Y.GRID_NAVIGATOR_ID,
                        itemGrid: a,
                        itemList: r,
                        onGridNavigatorItemSelect: E,
                        onGridNavigatorPositionChange: en
                    });
                    return l.useEffect(() => N.EmojiPickerStore.useStore.subscribe(e => {
                        if (null == e) return;
                        let {
                            columnIndex: t,
                            rowIndex: i,
                            source: n
                        } = e;
                        n !== y.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && I({
                            type: u.GridActionType.SET_FOCUSED_POSITION,
                            x: t,
                            y: i
                        })
                    }, e => e.inspectedExpressionPosition), [I]), {
                        getItemProps: p,
                        getRowProps: g,
                        gridContainerProps: _,
                        handleGridContainerKeyDown: S,
                        isUsingKeyboardNavigation: T
                    }
                },
                es = (e, t) => {
                    let [i, n] = l.useState(null);
                    l.useEffect(() => {
                        if (null != i) {
                            var e;
                            null === (e = t.current) || void 0 === e || e.scrollToSectionTop(i), n(null)
                        }
                    }, [t, i]), l.useEffect(() => {
                        n(N.EmojiPickerStore.getState().activeCategoryIndex)
                    }, [e])
                },
                ea = (e, t, i, n) => {
                    l.useLayoutEffect(() => {
                        if (n) {
                            var e;
                            null === (e = i.current) || void 0 === e || e.focus()
                        }
                    }, [e, t, i, n])
                },
                er = o(G.trackEmojiSearchEmpty, 200),
                eo = o(G.trackEmojiSearchResultsViewed, 200),
                eu = {
                    section: void 0,
                    openPopoutType: void 0
                };
            var ec = l.memo(l.forwardRef(function(e, t) {
                var i, s;
                let r, {
                        pickerIntention: o,
                        channel: u,
                        guildId: f,
                        closePopout: m,
                        emojiSize: y = Y.EmojiSize.MEDIUM,
                        hasTabWrapper: R = !1,
                        includeCreateEmojiButton: w,
                        onSelectEmoji: en,
                        containerWidth: ec,
                        onNavigateAway: ed,
                        persistSearch: ef,
                        className: eE,
                        headerClassName: em,
                        analyticsOverride: eI = eu,
                        searchProps: ep = {},
                        wrapper: eg,
                        shouldHidePickerActions: e_ = !1,
                        messageId: eS,
                        renderHeader: eh,
                        listHeaderClassName: eC
                    } = e,
                    {
                        onFocus: eT,
                        onKeyDown: eN,
                        autoFocus: eA = !0,
                        accessory: ey
                    } = ep,
                    ev = (0, c.useStateFromStores)([L.default], () => null != f ? L.default.getDefaultChannel(f) : null, [f]),
                    [ej, eR] = l.useState(null),
                    eO = l.useRef(""),
                    eM = (0, A.useExpressionPickerStore)(e => e.searchQuery),
                    ex = l.useRef(null),
                    eP = l.useRef(null),
                    eL = l.useRef(null);
                null == u && null != ev && (u = ev);
                let eD = null !== (s = null !== (i = null == u ? void 0 : u.getGuildId()) && void 0 !== i ? i : f) && void 0 !== s ? s : null,
                    [eb, eU] = l.useState(!1),
                    ew = D.default.getCurrentUser(),
                    eG = (0, U.isPremium)(ew);
                l.useImperativeHandle(t, () => ({
                    onPickerOpen: e8
                }));
                let {
                    location: ek
                } = (0, p.useAnalyticsContext)(), {
                    page: eF,
                    section: eV,
                    object: eK,
                    openPopoutType: eH
                } = eI, eB = l.useMemo(() => ({
                    ...ek,
                    section: null != eV ? eV : Q.AnalyticsSections.EMOJI_PICKER_POPOUT
                }), [ek, eV]), {
                    AnalyticsLocationProvider: eJ
                } = (0, _.default)(g.default.EMOJI_PICKER), {
                    diversitySurrogate: eW
                } = (0, c.useStateFromStoresObject)([h.default], () => ({
                    diversitySurrogate: h.default.diversitySurrogate
                })), ez = (0, G.useEmojiSearchResults)(eM, u, o), eZ = null == ez ? 0 : ez.locked.length + ez.unlocked.length, eY = P.EmojiPickerCollapsedSections.useSetting(), eQ = l.useMemo(() => new Set(eY), [eY]), eX = l.useCallback(e => {
                    P.EmojiPickerCollapsedSections.updateSetting(Array.from(e))
                }, []), eq = (0, v.useExpressionPickerGridWidth)({
                    gridWrapperRef: ex,
                    containerWidth: ec,
                    listPaddingLeft: et,
                    listScrollbarWidth: 8
                }), {
                    rowCountBySection: e$,
                    sectionDescriptors: e0,
                    emojiGrid: e1,
                    columnCounts: e2
                } = (0, B.useEmojiGrid)({
                    gridWidth: eq,
                    channel: u,
                    includeCreateEmojiButton: w,
                    pickerIntention: o,
                    emojiSearchResults: ez,
                    collapsedSections: eQ,
                    emojiPaddingHorizontal: ee,
                    emojiSpriteSize: y
                }), {
                    newlyAddedEmojis: e4
                } = (0, k.default)(eD, o), {
                    trackOnPickerOpen: e3
                } = (0, G.useTrackEmojiPickerOpened)({
                    intention: o,
                    isBurstReaction: eb,
                    analyticsObject: eK
                });
                (0, M.useMaybeFetchPremiumLikelihood)(x.default);
                let e8 = l.useCallback(() => {
                        let e = e4.length > 0 ? e4[0].id : null;
                        (0, T.updateNewlyAddedLastSeen)(eD, e), e3()
                    }, [e3, e4, eD]),
                    e9 = (0, B.useEmojiSelectHandler)({
                        pickerIntention: o,
                        selectedChannel: u,
                        closePopout: m,
                        onSelectEmoji: en,
                        setUpsellConfigs: eR,
                        emojiSelectAnalytics: e => {
                            "" !== eM ? (0, G.trackEmojiSearchSelect)(e.emoji, {
                                ...eB,
                                object: Q.AnalyticsObjects.EMOJI
                            }, eM, o) : (0, G.trackEmojiSelect)({
                                emoji: e.emoji,
                                location: {
                                    ...eB,
                                    object: null != eK ? eK : Q.AnalyticsObjects.EMOJI,
                                    ...null != eF && {
                                        page: eF
                                    }
                                },
                                pickerIntention: o,
                                category: e.category,
                                subCategory: e.subCategory,
                                position: e.columnIndex + 1,
                                newlyAddedHighlight: e.subCategory === Y.EmojiSubCategory.NEWLY_ADDED_EMOJI && C.default.isNewerThanLastSeen(eD, e.emoji.id),
                                isBurstReaction: eb
                            })
                        },
                        trackEmojiFavorited: e => {
                            (0, G.trackEmojiFavorited)({
                                emoji: e.emoji,
                                location: {
                                    ...eB,
                                    object: Q.AnalyticsObjects.EMOJI
                                }
                            })
                        }
                    }),
                    e6 = l.useCallback(() => {
                        m(), null == ed || ed()
                    }, [m, ed]),
                    {
                        getItemProps: e7,
                        getRowProps: e5,
                        gridContainerProps: te,
                        handleGridContainerKeyDown: tt,
                        isUsingKeyboardNavigation: ti
                    } = el({
                        pickerIntention: o,
                        analyticsLocation: eB,
                        columnCounts: e2,
                        onSelectEmoji: en,
                        emojiGrid: e1,
                        emojiList: eP,
                        channelGuildId: eD,
                        isBurstReaction: eb
                    });
                es(ec, eP), ea(ec, eW, eL, eA), l.useEffect(() => {
                    !ef && (0, A.setSearchQuery)("")
                }, [ef]), l.useEffect(() => (b.default.track(Q.AnalyticEvents.OPEN_POPOUT, {
                    type: null != eH ? eH : "Emoji Picker",
                    guild_id: eD
                }), N.EmojiPickerStore.resetStoreState), [eH, eD]), l.useEffect(() => () => (0, O.hideHotspot)(O.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), l.useLayoutEffect(() => {
                    var e;
                    let {
                        columnIndex: t,
                        rowIndex: i
                    } = N.EmojiPickerStore.getState().inspectedExpressionPosition;
                    (null === (e = e1[i]) || void 0 === e ? void 0 : e[t]) == null && 0 !== t && N.EmojiPickerStore.setInspectedExpressionPosition(0, 0)
                }, [e1]), l.useEffect(() => {
                    if ("" === eO.current && "" !== eM && (0, G.trackEmojiSearchStart)(eB, o), 0 === eZ && "" !== eM) er(eB, eM);
                    else if ("" !== eM && eO.current !== eM) {
                        var e;
                        eo(eZ, null !== (e = null == ez ? void 0 : ez.locked.length) && void 0 !== e ? e : 0, eB, eM, o)
                    }
                    eO.current = eM
                }, [eM, eB, eZ, ez, o]);
                let tn = null != eg ? eg : R ? "div" : E.Dialog,
                    tl = null != eq;
                (null == ej ? void 0 : ej.type) === B.EmojiUpsellType.PREMIUM ? r = (0, n.jsx)(Z.default, {
                    onLearnMore: e6,
                    emojiDescriptor: ej.emojiDescriptor,
                    pickerIntention: o,
                    analyticsLocation: eB,
                    onClose: () => eR(null),
                    channel: u
                }) : (null == ej ? void 0 : ej.type) === B.EmojiUpsellType.ROLE_SUBSCRIPTION ? r = (0, n.jsx)(j.default, {
                    onClose: () => eR(null),
                    guildId: ej.guildId,
                    emojiId: ej.emojiId
                }) : eb && !eG && (r = (0, n.jsx)(F.default, {
                    onDismiss: () => eU(!1)
                }));
                let ts = (0, n.jsx)(H.default, {
                        pickerIntention: o,
                        emojiListRef: eP,
                        onKeyDown: e => {
                            null == tt || tt(e), null == eN || eN(e)
                        },
                        searchBarRef: eL,
                        onFocus: eT,
                        autoFocus: eA,
                        accessory: ey,
                        headerClassName: em,
                        hasTabWrapper: R,
                        diversitySurrogate: eW,
                        isBurstReaction: eb,
                        onBurstReactionToggle: () => eU(!eb),
                        renderHeader: eh
                    }),
                    ta = [];
                o === q.EmojiIntention.REACTION && ta.push(d.DismissibleContent.SUPER_REACTIONS_NITRO_MARKETING), !h.default.hasFavoriteEmojis(eD) && ta.push(d.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
                let tr = (0, n.jsx)(I.default, {
                    ...eB,
                    children: (0, n.jsxs)(tn, {
                        id: Y.EMOJI_PICKER_TAB_PANEL_ID,
                        "aria-labelledby": R ? Y.EMOJI_PICKER_TAB_ID : void 0,
                        role: R ? "tabpanel" : void 0,
                        className: a($.wrapper, {
                            [$.emojiPickerHasTabWrapper]: R,
                            [$.isBurstReactionPicker]: eb && eG
                        }),
                        children: [R ? null : ts, (0, n.jsxs)("div", {
                            className: a($.emojiPicker, eE),
                            onScroll: ei,
                            children: [R ? ts : null, (0, n.jsxs)("div", {
                                className: $.bodyWrapper,
                                ref: ex,
                                children: [(0, n.jsx)(z.default, {
                                    channel: u,
                                    closePopout: m
                                }), (0, n.jsx)(S.default, {
                                    contentTypes: ta,
                                    children: e => {
                                        let {
                                            visibleContent: t,
                                            markAsDismissed: i
                                        } = e;
                                        if (t === d.DismissibleContent.EMOJI_PICKER_FAVORITE_EMOJIS_TIP) return (0, n.jsx)(K.default, {
                                            markAsDismissed: () => i(X.ContentDismissActionType.UNKNOWN)
                                        })
                                    }
                                }), e_ ? null : (0, n.jsx)("div", {
                                    className: $.emojiPickerListWrapper,
                                    id: Y.GRID_NAVIGATOR_ID,
                                    ...te,
                                    children: tl ? (0, n.jsx)(W.default, {
                                        collapsedSections: eQ,
                                        diversitySurrogate: eW,
                                        emojiGrid: e1,
                                        emojiListRef: eP,
                                        emojiSize: y,
                                        getEmojiItemProps: e7,
                                        getEmojiRowProps: e5,
                                        gridWidth: eq,
                                        isUsingKeyboardNavigation: ti,
                                        onEmojiSelect: (e, t) => {
                                            e9(e, {
                                                ...t,
                                                isBurst: eb
                                            })
                                        },
                                        rowCount: e1.length,
                                        rowCountBySection: e$,
                                        sectionDescriptors: e0,
                                        setCollapsedSections: eX,
                                        channelGuildId: eD,
                                        messageId: eS,
                                        isBurstReaction: eb,
                                        listHeaderClassName: eC
                                    }) : null
                                })]
                            }), (0, n.jsx)(J.EmojiPickerInspector, {
                                emojiGrid: e1,
                                className: $.inspector,
                                guildId: eD,
                                pickerIntention: o,
                                channel: u
                            }), r]
                        }), e_ ? null : (0, n.jsx)(V.default, {
                            className: $.categoryList,
                            emojiListRef: eP,
                            sectionDescriptors: e0,
                            intention: o,
                            channel: u
                        })]
                    })
                });
                return (0, n.jsx)(eJ, {
                    children: tr
                })
            }))