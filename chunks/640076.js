            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return Z
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("917351"),
                o = i.n(r),
                u = i("446674"),
                c = i("895547"),
                d = i("769846"),
                f = i("96386"),
                E = i("997289"),
                m = i("986632"),
                I = i("538282"),
                p = i("246511"),
                g = i("45961"),
                _ = i("515059"),
                S = i("139321"),
                h = i("845579"),
                C = i("124299"),
                T = i("599110"),
                N = i("159885"),
                A = i("788506"),
                y = i("675280"),
                v = i("917764"),
                j = i("83017"),
                R = i("232786"),
                O = i("842126"),
                M = i("913631"),
                x = i("115279"),
                P = i("49111"),
                L = i("13030"),
                D = i("782340"),
                b = i("843646");
            let U = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
                w = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
                G = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
                k = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
                F = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
                V = (0, N.cssValueToNumber)(d.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
                K = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
                H = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT) + (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP),
                B = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
                J = e => e + 2 * B,
                W = e => {
                    let {
                        collapsedSections: t,
                        diversitySurrogate: i,
                        emojiGrid: s,
                        emojiSize: r,
                        onEmojiSelect: d,
                        searchQuery: f,
                        sectionDescriptors: I,
                        setCollapsedSections: g,
                        getEmojiItemProps: h,
                        getEmojiRowProps: C,
                        isScrolling: N,
                        isUsingKeyboardNavigation: D,
                        allowAnimatedEmoji: B,
                        channelGuildId: J,
                        messageId: W,
                        isBurstReaction: z,
                        listHeaderClassName: Z
                    } = e, Y = (0, E.useAnalyticsContext)(), Q = l.useRef(P.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), X = l.useMemo(() => "" !== i ? c.default.convert.toCodePoint(i) : "", [i]), q = l.useCallback(function(e) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = new Set(t),
                            l = t.has(e);
                        l ? n.delete(e) : n.add(e), null != i && T.default.track(P.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: Y.location,
                            tab: L.ExpressionPickerViewType.EMOJI,
                            collapsed: !l,
                            guild_id: i.id
                        }), g(n)
                    }, [Y, t, g]), $ = l.useCallback(e => {
                        let {
                            columnIndex: t,
                            visibleRowIndex: i
                        } = e, n = e.type === j.EmojiGridItemTypes.EMOJI ? e.emoji.allNamesString : e.name;
                        Q.current !== P.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(Q.current), Q.current = window.requestAnimationFrame(() => {
                            m.EmojiPickerStore.setInspectedExpressionPosition(t, i, p.InspectedExpressionChangeSource.MOUSE_EVENT), m.EmojiPickerStore.setSearchPlaceholder(n), Q.current = P.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID
                        })
                    }, []), ee = (0, u.useStateFromStores)([S.HotspotStore], () => S.HotspotStore.hasHotspot(S.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), []), et = l.useMemo(() => o.memoize((e, t) => {
                        let i = s[e],
                            l = I[t.sectionIndex];
                        return (0, n.jsx)(O.default, {
                            emojiDescriptors: i,
                            emojiSize: r,
                            surrogateCodePoint: X,
                            onInspect: $,
                            onSelect: d,
                            getEmojiItemProps: h,
                            getEmojiRowProps: C,
                            isScrolling: N,
                            isUsingKeyboardNavigation: D,
                            rowIndex: e,
                            allowAnimatedEmoji: B,
                            showEmojiFavoriteTooltip: ee,
                            channelGuildId: J,
                            category: l.sectionId,
                            selectedItemClassName: b.selectedItem,
                            messageId: W,
                            isBurstReaction: z
                        }, e)
                    }), [s, I, r, X, $, d, h, C, N, D, B, ee, J, W, z]);
                    l.useEffect(() => () => {
                        var e, t;
                        return null === (t = et.cache) || void 0 === t ? void 0 : null === (e = t.clear) || void 0 === e ? void 0 : e.call(t)
                    }, [et]);
                    let ei = l.useMemo(() => o.memoize(e => {
                            let i = I[e];
                            if (null == i) return;
                            let {
                                guild: l,
                                pack: s,
                                categoryId: r,
                                type: o,
                                sectionId: u
                            } = i;
                            if (o === x.EmojiCategoryTypes.SEARCH_RESULTS) return;
                            let c = o === x.EmojiCategoryTypes.GUILD ? null != l ? (0, n.jsx)(v.default, {
                                    guild: l,
                                    height: 16,
                                    width: 16
                                }) : null : o === x.EmojiCategoryTypes.PACK ? null != s ? (0, n.jsx)(M.default, {
                                    pack: s,
                                    height: 16,
                                    width: 16
                                }) : null : null != r ? (0, n.jsx)(y.default, {
                                    categoryId: r,
                                    height: 16,
                                    width: 16
                                }) : null,
                                d = null == l ? void 0 : l.toString();
                            return null != r && (d = (0, A.getStringForEmojiCategory)(r, null == l ? void 0 : l.toString(), null == s ? void 0 : s.name)), (0, n.jsx)(_.default, {
                                className: a(b.header, Z),
                                icon: c,
                                isCollapsed: t.has(u),
                                onClick: () => q(u, l),
                                children: d
                            }, u)
                        }), [I, t, q, Z]),
                        en = l.useCallback((e, i) => {
                            let l = I[e];
                            if (l.type === x.EmojiCategoryTypes.GUILD) {
                                let s = t.has(l.sectionId);
                                return (0, n.jsx)("div", {
                                    className: a(b.categorySection, {
                                        [b.categorySectionLast]: e === I.length - 1,
                                        [b.categorySectionCollapsed]: s
                                    }),
                                    children: i
                                })
                            }
                            return (0, n.jsx)("div", {
                                className: a(b.categorySection, {
                                    [b.categorySectionLast]: e === I.length - 1,
                                    [b.categorySectionCollapsed]: t.has(l.sectionId)
                                }),
                                children: i
                            }, e)
                        }, [t, I]),
                        el = l.useCallback(e => {
                            let i = I[e];
                            return i.sectionId !== x.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(i.sectionId) ? null : (0, n.jsx)(R.default, {
                                className: b.premiumUpsell
                            }, "emoji-picker-inline-upsell")
                        }, [I, t]),
                        es = l.useCallback(e => {
                            let i = I[e];
                            return i.sectionId !== x.EmojiCategoryTypes.PREMIUM_UPSELL || t.has(i.sectionId) ? 0 : H
                        }, [I, t]),
                        ea = l.useCallback(e => {
                            var i;
                            return e === I.length - 1 || t.has(null === (i = I[e]) || void 0 === i ? void 0 : i.sectionId) ? 0 : K
                        }, [t, I]),
                        er = l.useMemo(() => ["" !== f ? F : U, w, G, k], [f]),
                        eo = l.useCallback(e => {
                            let t = I[e];
                            return t.type === x.EmojiCategoryTypes.SEARCH_RESULTS ? 0 : V
                        }, [I]);
                    return {
                        listPadding: er,
                        renderRow: et,
                        renderSection: en,
                        renderSectionHeader: ei,
                        renderSectionFooter: el,
                        sectionMarginBottom: ea,
                        sectionHeaderHeight: eo,
                        sectionFooterHeight: es
                    }
                },
                z = l.memo(function(e) {
                    let {
                        diversitySurrogate: t,
                        emojiGrid: i,
                        emojiListRef: s,
                        emojiSize: a,
                        onEmojiSelect: r,
                        sectionDescriptors: o,
                        rowCountBySection: u,
                        collapsedSections: c,
                        setCollapsedSections: d,
                        getEmojiItemProps: E,
                        getEmojiRowProps: p,
                        rowCount: _,
                        isUsingKeyboardNavigation: S,
                        channelGuildId: T,
                        messageId: N,
                        isBurstReaction: A,
                        listHeaderClassName: y
                    } = e, v = l.useRef(!1), j = m.EmojiPickerStore.useStore(e => e.activeCategoryIndex), R = (0, I.useExpressionPickerStore)(e => e.searchQuery), O = h.AnimateEmoji.useSetting(), {
                        listPadding: M,
                        renderRow: x,
                        renderSection: P,
                        renderSectionHeader: L,
                        renderSectionFooter: U,
                        sectionMarginBottom: w,
                        sectionHeaderHeight: G,
                        sectionFooterHeight: k
                    } = W({
                        collapsedSections: c,
                        diversitySurrogate: t,
                        emojiGrid: i,
                        emojiSize: a,
                        onEmojiSelect: r,
                        searchQuery: R,
                        sectionDescriptors: o,
                        setCollapsedSections: d,
                        getEmojiItemProps: E,
                        getEmojiRowProps: p,
                        isScrolling: v,
                        isUsingKeyboardNavigation: S,
                        allowAnimatedEmoji: O,
                        channelGuildId: T,
                        messageId: N,
                        isBurstReaction: A,
                        listHeaderClassName: y
                    }), F = (0, g.useSynchronizedActiveCategoryIndexForScrollPosition)({
                        activeCategoryIndex: j,
                        isScrolling: v,
                        listRef: s,
                        onActiveCategoryIndexChange: m.EmojiPickerStore.setActiveCategoryIndex,
                        scrollOffset: 20,
                        searchQuery: R
                    });
                    (0, g.useSynchronizedScrollPositionForActiveCategoryIndex)({
                        searchQuery: R,
                        activeCategoryIndex: j,
                        listRef: s
                    });
                    let V = o.length > 0;
                    return (0, n.jsx)("div", {
                        className: b.listWrapper,
                        children: V ? (0, n.jsx)(C.default, {
                            role: "none presentation",
                            className: b.list,
                            listPadding: M,
                            onScroll: F,
                            renderRow: x,
                            renderSection: P,
                            renderSectionHeader: L,
                            renderSectionFooter: U,
                            rowCount: _,
                            rowCountBySection: u,
                            rowHeight: J(a),
                            sectionHeaderHeight: G,
                            sectionMarginBottom: w,
                            sectionFooterHeight: k,
                            stickyHeaders: !0,
                            ref: s
                        }) : (0, n.jsx)(f.default, {
                            message: D.default.Messages.NO_EMOJI_SEARCH_RESULTS,
                            className: b.noSearchResultsContainer
                        })
                    })
                });
            var Z = z