            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("781738");
            var a = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("77078"),
                u = n("150021"),
                r = n("997289"),
                d = n("788506"),
                o = n("385976"),
                c = n("867805"),
                f = n("246511"),
                E = n("467094"),
                M = n("178207"),
                m = n("256860"),
                g = n("364685"),
                I = n("24373"),
                S = n("49111"),
                p = n("782340");

            function _(e) {
                return c.default.getByName(e.replace(/(^:|:$)/g, ""))
            }

            function A(e) {
                let {
                    type: t,
                    id: n,
                    name: A,
                    isInExpressionPicker: h = !1
                } = e, {
                    location: v
                } = (0, r.useAnalyticsContext)(), T = i.useMemo(() => ({
                    ...v,
                    section: h ? S.AnalyticsSections.EXPRESSION_PICKER : S.AnalyticsSections.CONTEXT_MENU
                }), [v, h]), C = (0, m.useFavoriteStickerIds)(), R = (0, l.useStateFromStores)([g.default], () => t === f.PickerContextMenuDataTypes.STICKER && null != n ? g.default.getStickerById(n) : null), O = null != R && C.includes(R.id), y = (0, l.useStateFromStores)([o.default], () => {
                    if (t === f.PickerContextMenuDataTypes.EMOJI) {
                        if (null != n) return o.default.getDisambiguatedEmojiContext().getById(n);
                        if (null != A) {
                            var e;
                            return null !== (e = _(A)) && void 0 !== e ? e : _(c.default.convertSurrogateToName(A))
                        }
                    }
                }), x = (0, d.useIsFavoriteEmoji)(null, y);
                if (null != R && t === f.PickerContextMenuDataTypes.STICKER) return (0, I.isGuildSticker)(R) && !(0, I.isAvailableGuildSticker)(R) ? null : O ? (0, a.jsx)(s.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, E.unfavoriteSticker)(R.id),
                    label: p.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, M.trackStickerFavorited)({
                            sticker: R,
                            location: {
                                ...T,
                                object: S.AnalyticsObjects.STICKER
                            }
                        }), (0, E.favoriteSticker)(null == R ? void 0 : R.id)
                    },
                    label: p.default.Messages.FAVORITE_ITEM
                });
                if (null != y && t === f.PickerContextMenuDataTypes.EMOJI) return x ? (0, a.jsx)(s.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, u.unfavoriteEmoji)(y),
                    label: p.default.Messages.UNFAVORITE_ITEM
                }) : (0, a.jsx)(s.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, d.trackEmojiFavorited)({
                            emoji: y,
                            location: {
                                ...T,
                                object: S.AnalyticsObjects.EMOJI
                            }
                        }), (0, u.favoriteEmoji)(y)
                    },
                    label: p.default.Messages.FAVORITE_ITEM
                })
            }