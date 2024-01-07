            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("769846"),
                i = n("77078"),
                r = n("812204"),
                o = n("716241"),
                u = n("685665"),
                d = n("933629"),
                c = n("437472"),
                f = n("159885"),
                m = n("256860"),
                E = n("161585"),
                _ = n("41170"),
                h = n("139185"),
                p = n("49111"),
                I = n("646718"),
                T = n("814809");
            let g = (0, f.cssValueToNumber)(l.default.STICKERS_CONSTANTS_STICKER_DIMENSION),
                C = e => {
                    null != e && o.default.trackWithMetadata(p.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                        type: I.PremiumUpsellTypes.STICKER_IN_MESSAGE_HOVER,
                        expression_id: e.id,
                        expression_name: e.name,
                        is_animated: (0, E.isAnimatedSticker)(e.format_type),
                        is_custom: (0, E.isCustomSticker)(e.type)
                    })
                };
            var S = e => {
                let {
                    renderableSticker: t,
                    channel: n,
                    isInteracting: l
                } = e, [o, f] = s.useState(!0), [E, p] = s.useState(String(Date.now())), [I] = (0, m.useStickerForRenderableSticker)(t, l), {
                    AnalyticsLocationProvider: S
                } = (0, u.default)(r.default.STICKER_MESSAGE), A = (0, a.jsxs)("span", {
                    className: T.stickerName,
                    children: [(0, a.jsx)(c.default, {
                        className: T.stickerIcon
                    }), (null != I ? I : t).name]
                });
                return (0, a.jsx)(S, {
                    children: (0, a.jsx)(i.Popout, {
                        align: "center",
                        animation: i.Popout.Animation.TRANSLATE,
                        positionKey: E,
                        onRequestClose: () => {
                            f(!0)
                        },
                        renderPopout: e => (0, a.jsx)(h.default, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => p(String(Date.now()))
                        }),
                        children: e => {
                            let {
                                onClick: n
                            } = e;
                            return (0, a.jsx)(i.Tooltip, {
                                ...d.EXPRESSION_TOOLTIP_PROPS,
                                shouldShow: o,
                                text: (0, d.renderClickableTooltipNode)(A),
                                "aria-label": !1,
                                onTooltipShow: () => {
                                    C(I)
                                },
                                children: e => (0, a.jsx)(i.Clickable, {
                                    ...e,
                                    className: T.clickableSticker,
                                    onClick: e => {
                                        f(!o), n(e)
                                    },
                                    tag: "span",
                                    children: (0, a.jsx)(_.default, {
                                        isInteracting: l,
                                        size: g,
                                        sticker: null != I ? I : t
                                    })
                                })
                            })
                        }
                    })
                })
            }