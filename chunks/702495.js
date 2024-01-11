            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return C
                }
            }), n("781738");
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                u = n("77078"),
                s = n("150021"),
                o = n("997289"),
                c = n("788506"),
                l = n("385976"),
                d = n("867805"),
                E = n("246511"),
                f = n("467094"),
                _ = n("178207"),
                p = n("256860"),
                S = n("364685"),
                y = n("24373"),
                I = n("49111"),
                m = n("782340");

            function T(t) {
                return d.default.getByName(t.replace(/(^:|:$)/g, ""))
            }

            function C(t) {
                let {
                    type: e,
                    id: n,
                    name: C,
                    isInExpressionPicker: k = !1
                } = t, {
                    location: v
                } = (0, o.useAnalyticsContext)(), A = i.useMemo(() => ({
                    ...v,
                    section: k ? I.AnalyticsSections.EXPRESSION_PICKER : I.AnalyticsSections.CONTEXT_MENU
                }), [v, k]), h = (0, p.useFavoriteStickerIds)(), R = (0, a.useStateFromStores)([S.default], () => e === E.PickerContextMenuDataTypes.STICKER && null != n ? S.default.getStickerById(n) : null), O = null != R && h.includes(R.id), M = (0, a.useStateFromStores)([l.default], () => {
                    if (e === E.PickerContextMenuDataTypes.EMOJI) {
                        if (null != n) return l.default.getDisambiguatedEmojiContext().getById(n);
                        if (null != C) {
                            var t;
                            return null !== (t = T(C)) && void 0 !== t ? t : T(d.default.convertSurrogateToName(C))
                        }
                    }
                }), g = (0, c.useIsFavoriteEmoji)(null, M);
                if (null != R && e === E.PickerContextMenuDataTypes.STICKER) return (0, y.isGuildSticker)(R) && !(0, y.isAvailableGuildSticker)(R) ? null : O ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, f.unfavoriteSticker)(R.id),
                    label: m.default.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, _.trackStickerFavorited)({
                            sticker: R,
                            location: {
                                ...A,
                                object: I.AnalyticsObjects.STICKER
                            }
                        }), (0, f.favoriteSticker)(null == R ? void 0 : R.id)
                    },
                    label: m.default.Messages.FAVORITE_ITEM
                });
                if (null != M && e === E.PickerContextMenuDataTypes.EMOJI) return g ? (0, r.jsx)(u.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, s.unfavoriteEmoji)(M),
                    label: m.default.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(u.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, c.trackEmojiFavorited)({
                            emoji: M,
                            location: {
                                ...A,
                                object: I.AnalyticsObjects.EMOJI
                            }
                        }), (0, s.favoriteEmoji)(M)
                    },
                    label: m.default.Messages.FAVORITE_ITEM
                })
            }