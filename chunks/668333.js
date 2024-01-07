            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ef
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("446674"),
                s = n("769846"),
                a = n("77078"),
                u = n("96386"),
                d = n("997289"),
                c = n("812204"),
                f = n("685665"),
                p = n("917764"),
                m = n("986632"),
                h = n("538282"),
                E = n("246511"),
                S = n("45961"),
                g = n("515059"),
                C = n("845579"),
                T = n("305961"),
                v = n("697218"),
                y = n("124299"),
                x = n("841811"),
                I = n("290581"),
                N = n("599110"),
                _ = n("159885"),
                A = n("570759"),
                R = n("866353"),
                O = n("364685"),
                M = n("161585"),
                k = n("24373"),
                b = n("41170"),
                P = n("801396"),
                L = n("355494"),
                U = n("77162"),
                j = n("209069"),
                D = n("49111"),
                w = n("13030"),
                B = n("782340"),
                H = n("327518"),
                F = n("327769");
            let G = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
                K = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
                V = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
                W = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
                Y = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
                q = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
                z = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
                Q = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
                X = (0, _.cssValueToNumber)(s.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
                Z = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
                J = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
                $ = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
                ee = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
                et = Z + 2 * $,
                en = et + ee,
                el = J + 2 * $ + ee,
                ei = [V, Y, q, z],
                er = [W, Y, q, z],
                eo = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
                es = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
                ea = e => {
                    let {
                        onSuggestionClick: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: H.searchSuggestions,
                        children: es.map(e => (0, l.jsx)(a.Clickable, {
                            className: H.searchSuggestion,
                            onClick: () => t(e),
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: e
                            })
                        }, e))
                    })
                },
                eu = e => {
                    let {
                        onSelectSticker: t,
                        channel: n,
                        currentUser: l
                    } = e, r = (0, d.useAnalyticsContext)(), {
                        analyticsLocations: o
                    } = (0, f.default)(), s = (0, h.useExpressionPickerStore)(e => e.searchQuery), a = i.useCallback(e => {
                        let {
                            visibleRowIndex: t,
                            columnIndex: n,
                            gridSectionIndex: l
                        } = e;
                        m.StickerPickerStore.setActiveCategoryIndex(l), m.StickerPickerStore.setInspectedExpressionPosition(n, t, E.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === M.StickerGridItemTypes.STICKER && m.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
                    }, []), u = i.useCallback(e => {
                        if (e.type !== M.StickerGridItemTypes.STICKER) return;
                        let {
                            packId: i,
                            sticker: a,
                            type: u
                        } = e, d = {
                            ...r.location,
                            object: "" === s ? D.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : D.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                        };
                        if (null != a && !(0, R.isSendableSticker)(a, l, n)) {
                            let e = O.default.getStickerPack(i);
                            null != e && (N.default.track(D.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                                sticker_id: a.id,
                                sticker_pack_id: i,
                                location: d,
                                location_stack: o
                            }), (0, j.default)({
                                stickerPack: e,
                                analyticsLocations: o
                            }));
                            let t = (0, k.isGuildSticker)(a),
                                r = (0, R.getStickerSendability)(a, l, n);
                            r === R.StickerSendability.SENDABLE_WITH_PREMIUM && (0, A.setShowPremiumUpsell)(!0), t && R.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                            return
                        }
                        u === M.StickerGridItemTypes.STICKER && null != a && t(e)
                    }, [r.location, s, l, n, o, t]);
                    return {
                        handleStickerInspect: a,
                        handleSelect: u
                    }
                },
                ed = e => {
                    let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        onSelectSticker: r,
                        getStickerItemProps: s,
                        getStickerRowProps: u,
                        gutterWidth: c,
                        inspectedStickerPosition: f,
                        isScrolling: m,
                        isUsingKeyboardNavigation: h,
                        stickersGrid: E,
                        stickersCategories: S,
                        filteredStickers: y,
                        ownedStickerPacks: _,
                        channel: A
                    } = e, R = (0, d.useAnalyticsContext)(), L = (0, o.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
                        handleStickerInspect: j,
                        handleSelect: F
                    } = eu({
                        onSelectSticker: r,
                        channel: A,
                        currentUser: L
                    }), [V, W] = i.useState(!1), Y = i.useCallback(e => {
                        C.StickerPickerCollapsedSections.updateSetting(Array.from(e))
                    }, []), q = i.useCallback(e => {
                        let t = E[e];
                        return null != t ? (0, l.jsx)(U.default, {
                            getStickerItemProps: s,
                            getStickerRowProps: u,
                            gutterWidth: c,
                            inspectedStickerPosition: f,
                            isScrolling: m,
                            isUsingKeyboardNavigation: h,
                            onInspect: j,
                            onSelect: F,
                            rowIndex: e,
                            stickerClassName: H.sticker,
                            stickerDescriptors: t,
                            stickerSize: n > G ? Z : J,
                            preferAnimation: n <= K,
                            ownedStickerPacks: _,
                            isDisplayingIndividualStickers: !0,
                            channel: A,
                            currentUser: L
                        }, e) : null
                    }, [E, s, u, c, f, m, h, j, F, n, _, A, L]), z = i.useCallback((e, t) => (0, l.jsx)("div", {
                        children: t
                    }, e), []), $ = i.useCallback(function(e) {
                        let {
                            isStickerPack: n = !0
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = new Set(t), i = t.has(e);
                        i ? l.delete(e) : l.add(e), N.default.track(D.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == R ? void 0 : R.location,
                            tab: w.ExpressionPickerViewType.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }), Y(l)
                    }, [R, t, Y]), ee = i.useCallback(e => {
                        let n = S[e];
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return null;
                            let i = t.length > 0 && n.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [i ? (0, l.jsx)("div", {
                                    className: H.divider,
                                    children: (0, l.jsx)(a.FormDivider, {})
                                }) : null, (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                                    children: B.default.Messages.STICKERS_YOU_MIGHT_LIKE
                                }, "stickers-you-might-like-header")]
                            })
                        }
                        switch (n.type) {
                            case M.StickerCategoryTypes.FAVORITE:
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(I.default, {
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case M.StickerCategoryTypes.RECENT:
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(x.default, {}),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case M.StickerCategoryTypes.GUILD:
                            case M.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                                let e = T.default.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(p.default, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                            case M.StickerCategoryTypes.PACK: {
                                let e = O.default.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(b.default, {
                                        disableAnimation: !0,
                                        size: 12,
                                        sticker: (0, k.getStickerPackPreviewSticker)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                        }
                    }, [t, S, $, y]), et = i.useCallback(e => {
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return 0;
                            let l = t.length > 0 && n.length > 0 ? Q : 0;
                            return X + l
                        }
                        return X
                    }, [y]), en = i.useCallback(e => {
                        let n = S[e],
                            i = t.has(n.id);
                        return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != y || i ? null : (0, l.jsx)(P.default, {
                            className: H.emptyGuildUpsell,
                            guildId: n.id,
                            channel: A,
                            shouldTrackUpsellViewed: !V,
                            setTrackedUpsellViewed: W
                        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
                    }, [S, t, y, A, V]), el = i.useCallback(e => {
                        let n = S[e],
                            l = t.has(n.id);
                        return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || l ? 0 : eo
                    }, [S, t]);
                    return {
                        renderRow: q,
                        renderSection: z,
                        renderSectionHeader: ee,
                        sectionHeaderHeight: et,
                        renderSectionFooter: en,
                        sectionFooterHeight: el
                    }
                },
                ec = i.forwardRef(function(e, t) {
                    let {
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        filteredStickers: a,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: C,
                        rowCount: T,
                        rowCountBySection: v,
                        stickersCategories: x,
                        stickersGrid: I,
                        channel: N
                    } = e, _ = i.useRef(!1), A = i.useRef(null), [R, M] = m.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], r.default), {
                        AnalyticsLocationProvider: k
                    } = (0, f.default)(c.default.STICKER_PICKER), b = (0, h.useExpressionPickerStore)(e => e.searchQuery), P = (0, o.useStateFromStores)([O.default], () => O.default.getPremiumPacks()), U = i.useMemo(() => new Set(P.map(e => e.id)), [P]), {
                        renderRow: j,
                        renderSection: D,
                        renderSectionFooter: w,
                        sectionFooterHeight: K,
                        renderSectionHeader: V,
                        sectionHeaderHeight: W
                    } = ed({
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        stickersCategories: x,
                        stickersGrid: I,
                        isScrolling: _,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: C,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        inspectedStickerPosition: M,
                        filteredStickers: a,
                        ownedStickerPacks: U,
                        channel: N
                    }), Y = (0, S.useSynchronizedActiveCategoryIndexForScrollPosition)({
                        activeCategoryIndex: R,
                        isScrolling: _,
                        listRef: A,
                        onActiveCategoryIndexChange: m.StickerPickerStore.setActiveCategoryIndex,
                        scrollOffset: 20,
                        searchQuery: b
                    });
                    return (0, S.useSynchronizedScrollPositionForActiveCategoryIndex)({
                        searchQuery: b,
                        activeCategoryIndex: R,
                        listRef: A
                    }), i.useImperativeHandle(t, () => ({
                        scrollTo: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                        },
                        getRowDescriptors: () => {
                            var e, t;
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                        },
                        getSectionDescriptors: () => {
                            var e, t;
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                        },
                        scrollToSectionTop: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                        },
                        scrollRowIntoView: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                        },
                        getScrollerNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                        },
                        scrollIntoViewNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                        },
                        getListDimensions: function() {
                            for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                                height: -1,
                                totalHeight: -1
                            }
                        }
                    }), []), (0, l.jsx)(k, {
                        children: (0, l.jsxs)("div", {
                            className: H.wrapper,
                            children: [null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length ? (0, l.jsx)(u.default, {
                                message: B.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                                className: H.noSearchResultsContainer,
                                noResultsImageURL: F,
                                suggestions: (0, l.jsx)(ea, {
                                    onSuggestionClick: e => (0, h.setSearchQuery)(e, !0)
                                })
                            }) : (0, l.jsx)(y.default, {
                                role: "none presentation",
                                listPadding: null != a ? er : ei,
                                onScroll: Y,
                                renderRow: j,
                                renderSection: null == a ? D : void 0,
                                renderSectionHeader: V,
                                renderSectionFooter: w,
                                rowCount: T,
                                rowCountBySection: v,
                                rowHeight: s > G ? en : el,
                                sectionHeaderHeight: W,
                                sectionFooterHeight: K,
                                stickyHeaders: !0,
                                ref: A
                            }), (0, l.jsx)(L.default, {
                                stickersGrid: I
                            })]
                        })
                    })
                });
            var ef = ec