(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35196"], {
        437083: function(t, e, n) {
            var r = n("561449"),
                i = n("877297");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                i = n("164099");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        957478: function(t, e, n) {
            var r = n("626785");
            t.exports = function(t, e) {
                return r(e, function(e) {
                    return t[e]
                })
            }
        },
        561449: function(t, e, n) {
            t.exports = function(t, e) {
                var n = -1,
                    r = t.length;
                for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                return e
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    a = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var u = r(n, a),
                        s = t[u];
                    t[u] = t[n], t[n] = s
                }
                return t.length = e, t
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                i = n("329252"),
                a = n("725502");
            t.exports = function(t) {
                return (a(t) ? r : i)(t)
            }
        },
        164099: function(t, e, n) {
            var r = n("957478"),
                i = n("466731");
            t.exports = function(t) {
                return null == t ? [] : r(t, i(t))
            }
        },
        150021: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                setDiversityColor: function() {
                    return I
                },
                fetchEmoji: function() {
                    return m
                },
                uploadEmoji: function() {
                    return T
                },
                deleteEmoji: function() {
                    return C
                },
                updateEmoji: function() {
                    return k
                },
                favoriteEmoji: function() {
                    return A
                },
                unfavoriteEmoji: function() {
                    return h
                }
            }), n("424973");
            var r = n("917351"),
                i = n.n(r),
                a = n("872717"),
                u = n("750028"),
                s = n("913144"),
                o = n("599417"),
                c = n("385976"),
                l = n("867805"),
                d = n("619443"),
                E = n("872173"),
                f = n("341542"),
                _ = n("404118"),
                p = n("49111"),
                S = n("397336"),
                y = n("782340");

            function I(t) {
                E.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", e => {
                    e.diversitySurrogate = u.StringValue.create(), e.diversitySurrogate.value = t
                }, S.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function m(t) {
                s.default.dispatch({
                    type: "EMOJI_FETCH",
                    guildId: t
                }), a.default.get({
                    url: p.Endpoints.GUILD_EMOJIS(t),
                    oldFormErrors: !0
                }).then(e => s.default.dispatch({
                    type: "EMOJI_FETCH_SUCCESS",
                    guildId: t,
                    emojis: e.body
                }), () => s.default.dispatch({
                    type: "EMOJI_FETCH_FAILURE",
                    guildId: t
                }))
            }

            function T(t) {
                let {
                    guildId: e,
                    image: n,
                    name: r,
                    roles: i
                } = t;
                return s.default.dispatch({
                    type: "EMOJI_UPLOAD_START",
                    guildId: e
                }), a.default.post({
                    url: p.Endpoints.GUILD_EMOJIS(e),
                    body: {
                        image: n,
                        name: r,
                        roles: i
                    },
                    oldFormErrors: !0
                }).then(() => s.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: e
                }), t => (s.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: e
                }), Promise.reject(t)))
            }

            function C(t, e) {
                return s.default.dispatch({
                    type: "EMOJI_DELETE",
                    guildId: t,
                    emojiId: e
                }), a.default.delete({
                    url: p.Endpoints.GUILD_EMOJI(t, e),
                    oldFormErrors: !0
                })
            }
            async function k(t) {
                let {
                    guildId: e,
                    emojiId: n,
                    name: r,
                    roles: i
                } = t;
                try {
                    return await a.default.patch({
                        url: p.Endpoints.GUILD_EMOJI(e, n),
                        body: {
                            name: r,
                            roles: i
                        },
                        oldFormErrors: !0
                    })
                } catch (t) {
                    throw new o.default(t)
                }
            }

            function v(t) {
                return f.default.totalUnavailableGuilds > 0 || !d.default.isConnected() ? t : t.filter(t => {
                    var e;
                    let n = null !== (e = c.default.getCustomEmojiById(t)) && void 0 !== e ? e : l.default.getByName(t);
                    return null != n
                })
            }

            function A(t) {
                var e;
                (function(t) {
                    null != t && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => (e.emojis = v(e.emojis), i.size(e.emojis) >= S.MAX_FAVORITES) ? (_.default.show({
                        title: y.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: y.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                            count: S.MAX_FAVORITES
                        })
                    }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), S.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (e = t.id) && void 0 !== e ? e : t.name)
            }

            function h(t) {
                var e;
                (function(t) {
                    null != t && E.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => {
                        if (!e.emojis.includes(t)) return !1;
                        e.emojis = e.emojis.filter(e => t !== e), e.emojis = v(e.emojis)
                    }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (e = t.id) && void 0 !== e ? e : t.name)
            }
        },
        367343: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                u = n("702495"),
                s = n("835487"),
                o = n("782340");

            function c(t) {
                let {
                    target: e,
                    onSelect: n
                } = t, c = (0, u.default)({
                    type: e.getAttribute("data-type"),
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    isInExpressionPicker: !0
                }), l = (0, s.default)({
                    type: e.getAttribute("data-type"),
                    packId: e.getAttribute("data-pack-id")
                });
                return (0, r.jsx)(i.Menu, {
                    navId: "expression-picker",
                    onClose: a.closeContextMenu,
                    "aria-label": o.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [c, l]
                    })
                })
            }
        },
        835487: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("252931"),
                s = n("13162"),
                o = n("166465"),
                c = n("246511"),
                l = n("782340");

            function d(t) {
                let {
                    type: e,
                    packId: n
                } = t, d = (0, i.useStateFromStores)([o.default], () => null !== n && null != o.default.getPackByPackId({
                    packId: n
                })), {
                    viewAndUseEnabled: E
                } = (0, u.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                return E && d && (e === c.PickerContextMenuDataTypes.EMOJI || e === c.PickerContextMenuDataTypes.PACK_ICON) && null !== n ? (0, r.jsx)(a.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, s.uncollectPack)({
                            packId: n
                        })
                    },
                    label: l.default.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }
        },
        13162: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getPacksForUser: function() {
                    return o
                },
                collectPack: function() {
                    return c
                },
                uncollectPack: function() {
                    return l
                },
                updateInventorySettings: function() {
                    return d
                },
                getPackMetadata: function() {
                    return E
                },
                dismissPackAddedNotification: function() {
                    return f
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("569883"),
                u = n("871336"),
                s = n("49111");
            async function o() {
                i.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let t = await r.default.get({
                        url: s.Endpoints.INVENTORY_GET
                    });
                    i.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: t.body.map(t => u.default.fromServer(t))
                    })
                } catch (e) {
                    var t;
                    i.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: (null == (t = e.body) ? void 0 : t.status) >= 400 && (null == t ? void 0 : t.status) <= 499
                    })
                }
            }
            async function c(t) {
                let {
                    authorId: e,
                    packId: n,
                    expressionName: a
                } = t;
                try {
                    let t = await r.default.put({
                        url: s.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: e,
                            pack_id: n,
                            name_override: a
                        }
                    });
                    i.default.dispatch({
                        type: "INVENTORY_COLLECT_PACK_SUCCESS",
                        pack: u.default.fromServer(t.body)
                    })
                } catch (t) {
                    return
                }
            }
            async function l(t) {
                let {
                    packId: e
                } = t;
                try {
                    await r.default.put({
                        url: s.Endpoints.INVENTORY_REMOVE_PACK,
                        body: {
                            pack_id: e
                        }
                    }), i.default.dispatch({
                        type: "INVENTORY_REMOVE_PACK_SUCCESS",
                        packId: e
                    })
                } catch (t) {
                    return
                }
            }
            async function d(t) {
                let {
                    guildId: e,
                    settings: n
                } = t;
                try {
                    await r.default.patch({
                        url: s.Endpoints.INVENTORY_UPDATE_SETTINGS(e),
                        body: {
                            is_emoji_pack_collectible: n.isEmojiPackCollectible
                        }
                    })
                } catch (t) {
                    return
                }
            }
            async function E(t) {
                let {
                    packId: e
                } = t;
                try {
                    let t = await r.default.get({
                        url: s.Endpoints.INVENTORY_PACK_METADATA(e)
                    });
                    return a.default.createFromServer(t.body)
                } catch (t) {
                    return
                }
            }

            function f() {
                i.default.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }
        },
        569883: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("666038");
            r = class t extends i.default {
                static createFromServer(e) {
                    return new t({
                        collectedCount: e.collected_count
                    })
                }
                constructor(t) {
                    super(), this.collectedCount = t.collectedCount
                }
            }
        },
        702495: function(t, e, n) {
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
        },
        178207: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                trackStickerPickerOpen: function() {
                    return c
                },
                trackStickerFavorited: function() {
                    return l
                },
                trackStickerSearchStart: function() {
                    return d
                },
                trackStickerSearchResultsViewed: function() {
                    return E
                },
                trackStickerSearchSelect: function() {
                    return f
                },
                trackStickerSelect: function() {
                    return _
                },
                trackStickerSearchEmpty: function() {
                    return p
                }
            });
            var r = n("716241"),
                i = n("599110"),
                a = n("161585"),
                u = n("49111"),
                s = n("13030"),
                o = n("646718");
            let c = t => {
                    let {
                        containerWidth: e,
                        favoriteStickers: n,
                        frequentlyUsedStickers: i,
                        guildStickers: o,
                        stickersTotal: c
                    } = t;
                    r.default.trackWithMetadata(u.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: e,
                        tab: s.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(t => (0, a.isAnimatedSticker)(t.format_type)).length,
                        num_custom_expressions_favorites: n.filter(t => (0, a.isCustomSticker)(t.type)).length,
                        num_standard_expressions_favorites: n.filter(t => !(0, a.isCustomSticker)(t.type)).length,
                        num_expressions_frecent: i.length,
                        num_custom_expressions_frecent: i.filter(t => (0, a.isCustomSticker)(t.type)).length,
                        num_animated_expressions_frecent: i.filter(t => (0, a.isAnimatedSticker)(t.format_type)).length,
                        num_standard_expressions_frecent: i.filter(t => !(0, a.isCustomSticker)(t.type)).length,
                        num_current_guild_expressions: o.length,
                        num_custom_expressions_total: c
                    })
                },
                l = t => {
                    let e, {
                        sticker: n,
                        location: i
                    } = t;
                    n.type === a.MetaStickerType.GUILD && (e = n.guild_id), r.default.trackWithMetadata(u.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: s.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: e,
                        is_animated: (0, a.isAnimatedSticker)(n.format_type),
                        is_custom: (0, a.isCustomSticker)(n.type)
                    })
                },
                d = () => {
                    i.default.track(u.AnalyticEvents.SEARCH_STARTED, {
                        search_type: u.SearchTypes.STICKER
                    })
                },
                E = (t, e, n) => {
                    r.default.trackWithMetadata(u.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: u.SearchTypes.STICKER,
                        total_results: e,
                        query: t,
                        is_suggestion: n
                    })
                },
                f = (t, e, n) => {
                    let i;
                    let {
                        sticker: s
                    } = t;
                    s.type === a.MetaStickerType.GUILD && (i = s.guild_id), r.default.trackWithMetadata(u.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: s.id,
                        search_type: u.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: i,
                        sticker_id: s.id,
                        query: e
                    })
                },
                _ = t => {
                    let e;
                    let {
                        sticker: n,
                        category: i
                    } = t;
                    n.type === a.MetaStickerType.GUILD && (e = n.guild_id), r.default.trackWithMetadata(u.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: o.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: i,
                        expression_guild_id: e,
                        is_animated: (0, a.isAnimatedSticker)(n.format_type),
                        is_custom: (0, a.isCustomSticker)(n.type)
                    })
                },
                p = t => {
                    null != t && "" !== t && r.default.trackWithMetadata(u.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: t,
                        search_type: u.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        }
    }
]);