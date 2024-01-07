            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n("617258"),
                u = n("77078"),
                d = n("272030"),
                c = n("997289"),
                f = n("246511"),
                p = n("151185"),
                m = n("599110"),
                h = n("866353"),
                E = n("161585"),
                S = n("24373"),
                g = n("41170"),
                C = n("591522"),
                T = n("49111"),
                v = n("782340"),
                y = n("267005");
            let x = (0, a.cssValueToNumber)(y.stickerPickerPreviewDimensions),
                I = (0, a.cssValueToNumber)(y.stickerPickerPreviewPadding),
                N = i.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: r = !0,
                        getStickerItemProps: a,
                        getStickerRowProps: N,
                        gutterWidth: _,
                        inspectedStickerPosition: A,
                        isScrolling: R,
                        isUsingKeyboardNavigation: O,
                        onInspect: M,
                        onSelect: k,
                        rowIndex: b,
                        stickerClassName: P,
                        stickerDescriptors: L,
                        stickerPadding: U = I,
                        stickerSize: j = x,
                        ownedStickerPacks: D,
                        enlargeOnInteraction: w = !1,
                        channel: B,
                        currentUser: H,
                        checkSendability: F = !0
                    } = e, {
                        location: G
                    } = (0, c.useAnalyticsContext)(), K = j + 2 * U, V = i.useMemo(() => ({
                        gridColumnGap: _,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(K, "px)"),
                        height: K,
                        paddingRight: t ? void 0 : K
                    }), [t, _, K]), W = i.useMemo(() => ({
                        width: j,
                        height: j,
                        padding: U
                    }), [U, j]);
                    return (0, l.jsx)("div", {
                        className: y.row,
                        style: V,
                        ...null == N ? void 0 : N(b),
                        children: L.map(e => {
                            var c;
                            let x = e.visibleRowIndex === (null == A ? void 0 : A.rowIndex) && e.columnIndex === (null == A ? void 0 : A.columnIndex),
                                I = e.type === E.StickerGridItemTypes.STICKER && w && x,
                                N = (0, s.throttle)(() => {
                                    (null == R ? void 0 : R.current) !== !0 && (null == O ? void 0 : O.current) !== !0 && !x && (null == M || M(e))
                                }, 250),
                                {
                                    ref: _,
                                    tabIndex: L,
                                    onFocus: U,
                                    ...K
                                } = null !== (c = null == a ? void 0 : a(e.columnIndex, b)) && void 0 !== c ? c : {};
                            switch (e.type) {
                                case E.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, l.jsx)("div", {
                                        ...K,
                                        children: (0, l.jsxs)(u.Clickable, {
                                            "aria-label": e.name,
                                            className: o(y.createSticker, P, {
                                                [y.createInspected]: x
                                            }),
                                            innerRef: _,
                                            tabIndex: L,
                                            onFocus: null != U ? U : N,
                                            onMouseMove: N,
                                            onClick: () => {
                                                e.type === E.StickerGridItemTypes.CREATE_STICKER && (m.default.track(T.AnalyticEvents.OPEN_MODAL, {
                                                    type: T.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: G
                                                }), (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await n.el("54666").then(n.bind(n, "54666"));
                                                    return n => (0, l.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...n
                                                    })
                                                }))
                                            },
                                            style: W,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)("div", {
                                                className: y.iconWrapper,
                                                children: (0, l.jsx)(p.default, {
                                                    className: y.icon
                                                })
                                            }), (0, l.jsx)(u.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case E.StickerGridItemTypes.STICKER: {
                                    let s = t && null != D && (0, S.isStandardSticker)(e.sticker) && !D.has(e.sticker.pack_id);
                                    return (0, i.createElement)("div", {
                                        ...K,
                                        key: e.sticker.id
                                    }, (0, l.jsxs)(u.Clickable, {
                                        className: o(y.sticker, P, {
                                            [y.stickerInspected]: x
                                        }),
                                        innerRef: _,
                                        tabIndex: L,
                                        onFocus: null != U ? U : N,
                                        onMouseMove: N,
                                        onClick: t => {
                                            (null == R ? void 0 : R.current) !== !0 && (null == O ? void 0 : O.current) !== !0 && (null == k || k(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("367343").then(n.bind(n, "367343"));
                                                return t => (0, l.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: W,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, l.jsx)(u.HiddenVisually, {
                                            children: (0, g.getStickerAltText)(e.sticker)
                                        }), (0, l.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)(g.default, {
                                                className: o(y.stickerNode, {
                                                    [y.stickerNodeDimmed]: w && !x && null != A && -1 !== A.rowIndex && -1 !== A.columnIndex,
                                                    [y.stickerNodeHidden]: I,
                                                    [y.stickerUnsendable]: F && !(0, h.isSendableSticker)(e.sticker, H, B)
                                                }),
                                                disableAnimation: !x && !r,
                                                enlargeOnInteraction: w,
                                                isInteracting: x,
                                                maskAsset: x,
                                                sticker: e.sticker,
                                                size: j
                                            }), s ? (0, l.jsx)(C.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var _ = N