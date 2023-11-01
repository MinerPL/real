(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35196"], {
        458389: function(t, e, n) {
            var r = n("594140"),
                i = n("564414"),
                o = n("725502"),
                a = n("591350"),
                u = n("476540"),
                c = n("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = o(t),
                    l = !n && i(t),
                    d = !n && !l && a(t),
                    f = !n && !l && !d && c(t),
                    p = n || l || d || f,
                    E = p ? r(t.length, String) : [],
                    _ = E.length;
                for (var y in t)(e || s.call(t, y)) && !(p && ("length" == y || d && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || u(y, _))) && E.push(y);
                return E
            }
        },
        437083: function(t, e, n) {
            var r = n("561449"),
                i = n("877297");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        562132: function(t, e, n) {
            var r = n("33426"),
                i = n("136047"),
                o = n("270879"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return o(t) && i(t.length) && !!a[r(t)]
            }
        },
        205873: function(t, e, n) {
            var r = n("733228"),
                i = n("541349"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        329252: function(t, e, n) {
            var r = n("877297"),
                i = n("164099");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        594140: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        492692: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
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
        733228: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        541349: function(t, e, n) {
            var r = n("761197")(Object.keys, Object);
            t.exports = r
        },
        276440: function(t, e, n) {
            t = n.nmd(t);
            var r = n("447414"),
                i = "object" == typeof e && e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = function() {
                    try {
                        var t = o && o.require && o.require("util").types;
                        if (t) return t;
                        return a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            t.exports = u
        },
        761197: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        877297: function(t, e, n) {
            var r = n("68421");
            t.exports = function(t, e) {
                var n = -1,
                    i = t.length,
                    o = i - 1;
                for (e = void 0 === e ? i : e; ++n < e;) {
                    var a = r(n, o),
                        u = t[a];
                    t[a] = t[n], t[n] = u
                }
                return t.length = e, t
            }
        },
        591350: function(t, e, n) {
            t = n.nmd(t);
            var r = n("690516"),
                i = n("221386"),
                o = "object" == typeof e && e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = u ? u.isBuffer : void 0;
            t.exports = c || i
        },
        381178: function(t, e, n) {
            var r = n("562132"),
                i = n("492692"),
                o = n("276440"),
                a = o && o.isTypedArray,
                u = a ? i(a) : r;
            t.exports = u
        },
        466731: function(t, e, n) {
            var r = n("458389"),
                i = n("205873"),
                o = n("603108");
            t.exports = function(t) {
                return o(t) ? r(t) : i(t)
            }
        },
        375128: function(t, e, n) {
            var r = n("437083"),
                i = n("329252"),
                o = n("725502");
            t.exports = function(t) {
                return (o(t) ? r : i)(t)
            }
        },
        221386: function(t, e, n) {
            t.exports = function() {
                return !1
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
                    return v
                },
                updateEmoji: function() {
                    return A
                },
                favoriteEmoji: function() {
                    return C
                },
                unfavoriteEmoji: function() {
                    return b
                }
            });
            var r = n("917351"),
                i = n.n(r),
                o = n("872717"),
                a = n("750028"),
                u = n("913144"),
                c = n("599417"),
                s = n("385976"),
                l = n("867805"),
                d = n("619443"),
                f = n("872173"),
                p = n("341542"),
                E = n("404118"),
                _ = n("49111"),
                y = n("397336"),
                S = n("782340");

            function I(t) {
                f.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", e => {
                    e.diversitySurrogate = a.StringValue.create(), e.diversitySurrogate.value = t
                }, y.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function m(t) {
                u.default.dispatch({
                    type: "EMOJI_FETCH",
                    guildId: t
                }), o.default.get({
                    url: _.Endpoints.GUILD_EMOJIS(t),
                    oldFormErrors: !0
                }).then(e => u.default.dispatch({
                    type: "EMOJI_FETCH_SUCCESS",
                    guildId: t,
                    emojis: e.body
                }), () => u.default.dispatch({
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
                return u.default.dispatch({
                    type: "EMOJI_UPLOAD_START",
                    guildId: e
                }), o.default.post({
                    url: _.Endpoints.GUILD_EMOJIS(e),
                    body: {
                        image: n,
                        name: r,
                        roles: i
                    },
                    oldFormErrors: !0
                }).then(() => u.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: e
                }), t => (u.default.dispatch({
                    type: "EMOJI_UPLOAD_STOP",
                    guildId: e
                }), Promise.reject(t)))
            }

            function v(t, e) {
                return u.default.dispatch({
                    type: "EMOJI_DELETE",
                    guildId: t,
                    emojiId: e
                }), o.default.delete({
                    url: _.Endpoints.GUILD_EMOJI(t, e),
                    oldFormErrors: !0
                })
            }
            async function A(t) {
                let {
                    guildId: e,
                    emojiId: n,
                    name: r,
                    roles: i
                } = t;
                try {
                    return await o.default.patch({
                        url: _.Endpoints.GUILD_EMOJI(e, n),
                        body: {
                            name: r,
                            roles: i
                        },
                        oldFormErrors: !0
                    })
                } catch (t) {
                    throw new c.default(t)
                }
            }

            function k(t) {
                return p.default.totalUnavailableGuilds > 0 || !d.default.isConnected() ? t : t.filter(t => {
                    var e;
                    let n = null !== (e = s.default.getCustomEmojiById(t)) && void 0 !== e ? e : l.default.getByName(t);
                    return null != n
                })
            }

            function C(t) {
                var e;
                (function(t) {
                    null != t && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => (e.emojis = k(e.emojis), i.size(e.emojis) >= y.MAX_FAVORITES) ? (E.default.show({
                        title: S.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: S.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                            count: y.MAX_FAVORITES
                        })
                    }), !1) : !e.emojis.includes(t) && void e.emojis.push(t), y.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (e = t.id) && void 0 !== e ? e : t.name)
            }

            function b(t) {
                var e;
                (function(t) {
                    null != t && f.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", e => {
                        if (!e.emojis.includes(t)) return !1;
                        e.emojis = e.emojis.filter(e => t !== e), e.emojis = k(e.emojis)
                    }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
                })(null !== (e = t.id) && void 0 !== e ? e : t.name)
            }
        },
        367343: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                o = n("272030"),
                a = n("702495"),
                u = n("835487"),
                c = n("782340");

            function s(t) {
                let {
                    target: e,
                    onSelect: n
                } = t, s = (0, a.default)({
                    type: e.getAttribute("data-type"),
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    isInExpressionPicker: !0
                }), l = (0, u.default)({
                    type: e.getAttribute("data-type"),
                    packId: e.getAttribute("data-pack-id")
                });
                return (0, r.jsx)(i.Menu, {
                    navId: "expression-picker",
                    onClose: o.closeContextMenu,
                    "aria-label": c.default.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, r.jsxs)(i.MenuGroup, {
                        children: [s, l]
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
                o = n("77078"),
                a = n("252931"),
                u = n("13162"),
                c = n("166465"),
                s = n("246511"),
                l = n("782340");

            function d(t) {
                let {
                    type: e,
                    packId: n
                } = t, d = (0, i.useStateFromStores)([c.default], () => null !== n && null != c.default.getPackByPackId({
                    packId: n
                })), {
                    viewAndUseEnabled: f
                } = (0, a.useInventoryGuildPacksUserExperiment)({
                    autoTrackExposure: !1
                });
                return f && d && (e === s.PickerContextMenuDataTypes.EMOJI || e === s.PickerContextMenuDataTypes.PACK_ICON) && null !== n ? (0, r.jsx)(o.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, u.uncollectPack)({
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
                    return c
                },
                collectPack: function() {
                    return s
                },
                uncollectPack: function() {
                    return l
                },
                updateInventorySettings: function() {
                    return d
                },
                getPackMetadata: function() {
                    return f
                },
                dismissPackAddedNotification: function() {
                    return p
                }
            });
            var r = n("872717"),
                i = n("913144"),
                o = n("569883"),
                a = n("871336"),
                u = n("49111");
            async function c() {
                i.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let t = await r.default.get({
                        url: u.Endpoints.INVENTORY_GET
                    });
                    i.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: t.body.map(t => a.default.fromServer(t))
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: function(t) {
                            return (null == t ? void 0 : t.status) >= 400 && (null == t ? void 0 : t.status) <= 499
                        }(t.body)
                    })
                }
            }
            async function s(t) {
                let {
                    authorId: e,
                    packId: n,
                    expressionName: o
                } = t;
                try {
                    let t = await r.default.put({
                        url: u.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: e,
                            pack_id: n,
                            name_override: o
                        }
                    });
                    i.default.dispatch({
                        type: "INVENTORY_COLLECT_PACK_SUCCESS",
                        pack: a.default.fromServer(t.body)
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
                        url: u.Endpoints.INVENTORY_REMOVE_PACK,
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
                        url: u.Endpoints.INVENTORY_UPDATE_SETTINGS(e),
                        body: {
                            is_emoji_pack_collectible: n.isEmojiPackCollectible
                        }
                    })
                } catch (t) {
                    return
                }
            }
            async function f(t) {
                let {
                    packId: e
                } = t;
                try {
                    let t = await r.default.get({
                        url: u.Endpoints.INVENTORY_PACK_METADATA(e)
                    });
                    return o.default.createFromServer(t.body)
                } catch (t) {
                    return
                }
            }

            function p() {
                i.default.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }
        },
        569883: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class i extends r.default {
                static createFromServer(t) {
                    return new i({
                        collectedCount: t.collected_count
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
                    return v
                }
            });
            var r = n("37983"),
                i = n("884691"),
                o = n("446674"),
                a = n("77078"),
                u = n("150021"),
                c = n("997289"),
                s = n("788506"),
                l = n("385976"),
                d = n("867805"),
                f = n("246511"),
                p = n("467094"),
                E = n("178207"),
                _ = n("256860"),
                y = n("364685"),
                S = n("24373"),
                I = n("49111"),
                m = n("782340");

            function T(t) {
                return d.default.getByName(t.replace(/(^:|:$)/g, ""))
            }

            function v(t) {
                let {
                    type: e,
                    id: n,
                    name: v,
                    isInExpressionPicker: A = !1
                } = t, {
                    location: k
                } = (0, c.useAnalyticsContext)(), C = i.useMemo(() => ({
                    ...k,
                    section: A ? I.AnalyticsSections.EXPRESSION_PICKER : I.AnalyticsSections.CONTEXT_MENU
                }), [k, A]), b = (0, _.useFavoriteStickerIds)(), h = (0, o.useStateFromStores)([y.default], () => e === f.PickerContextMenuDataTypes.STICKER && null != n ? y.default.getStickerById(n) : null), j = null != h && b.includes(h.id), O = (0, o.useStateFromStores)([l.default], () => {
                    if (e === f.PickerContextMenuDataTypes.EMOJI) {
                        if (null != n) return l.default.getDisambiguatedEmojiContext().getById(n);
                        if (null != v) {
                            var t;
                            return null !== (t = T(v)) && void 0 !== t ? t : T(d.default.convertSurrogateToName(v))
                        }
                    }
                }), g = (0, s.useIsFavoriteEmoji)(null, O);
                if (null != h && e === f.PickerContextMenuDataTypes.STICKER) return (0, S.isGuildSticker)(h) && !(0, S.isAvailableGuildSticker)(h) ? null : j ? (0, r.jsx)(a.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, p.unfavoriteSticker)(h.id),
                    label: m.default.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, E.trackStickerFavorited)({
                            sticker: h,
                            location: {
                                ...C,
                                object: I.AnalyticsObjects.STICKER
                            }
                        }), (0, p.favoriteSticker)(null == h ? void 0 : h.id)
                    },
                    label: m.default.Messages.FAVORITE_ITEM
                });
                if (null != O && e === f.PickerContextMenuDataTypes.EMOJI) return g ? (0, r.jsx)(a.MenuItem, {
                    id: "unfavorite",
                    action: () => (0, u.unfavoriteEmoji)(O),
                    label: m.default.Messages.UNFAVORITE_ITEM
                }) : (0, r.jsx)(a.MenuItem, {
                    id: "favorite",
                    action: () => {
                        (0, s.trackEmojiFavorited)({
                            emoji: O,
                            location: {
                                ...C,
                                object: I.AnalyticsObjects.EMOJI
                            }
                        }), (0, u.favoriteEmoji)(O)
                    },
                    label: m.default.Messages.FAVORITE_ITEM
                })
            }
        },
        178207: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                trackStickerPickerOpen: function() {
                    return s
                },
                trackStickerFavorited: function() {
                    return l
                },
                trackStickerSearchStart: function() {
                    return d
                },
                trackStickerSearchResultsViewed: function() {
                    return f
                },
                trackStickerSearchSelect: function() {
                    return p
                },
                trackStickerSelect: function() {
                    return E
                },
                trackStickerSearchEmpty: function() {
                    return _
                }
            });
            var r = n("716241"),
                i = n("599110"),
                o = n("161585"),
                a = n("49111"),
                u = n("13030"),
                c = n("646718");
            let s = t => {
                    let {
                        containerWidth: e,
                        favoriteStickers: n,
                        frequentlyUsedStickers: i,
                        guildStickers: c,
                        stickersTotal: s
                    } = t;
                    r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: e,
                        tab: u.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(t => (0, o.isAnimatedSticker)(t.format_type)).length,
                        num_custom_expressions_favorites: n.filter(t => (0, o.isCustomSticker)(t.type)).length,
                        num_standard_expressions_favorites: n.filter(t => !(0, o.isCustomSticker)(t.type)).length,
                        num_expressions_frecent: i.length,
                        num_custom_expressions_frecent: i.filter(t => (0, o.isCustomSticker)(t.type)).length,
                        num_animated_expressions_frecent: i.filter(t => (0, o.isAnimatedSticker)(t.format_type)).length,
                        num_standard_expressions_frecent: i.filter(t => !(0, o.isCustomSticker)(t.type)).length,
                        num_current_guild_expressions: c.length,
                        num_custom_expressions_total: s
                    })
                },
                l = t => {
                    let e, {
                        sticker: n,
                        location: i
                    } = t;
                    n.type === o.MetaStickerType.GUILD && (e = n.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: u.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: e,
                        is_animated: (0, o.isAnimatedSticker)(n.format_type),
                        is_custom: (0, o.isCustomSticker)(n.type)
                    })
                },
                d = () => {
                    i.default.track(a.AnalyticEvents.SEARCH_STARTED, {
                        search_type: a.SearchTypes.STICKER
                    })
                },
                f = (t, e, n) => {
                    r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: a.SearchTypes.STICKER,
                        total_results: e,
                        query: t,
                        is_suggestion: n
                    })
                },
                p = (t, e, n) => {
                    let i;
                    let {
                        sticker: u
                    } = t;
                    u.type === o.MetaStickerType.GUILD && (i = u.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: u.id,
                        search_type: a.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: i,
                        sticker_id: u.id,
                        query: e
                    })
                },
                E = t => {
                    let e;
                    let {
                        sticker: n,
                        category: i
                    } = t;
                    n.type === o.MetaStickerType.GUILD && (e = n.guild_id), r.default.trackWithMetadata(a.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: c.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: i,
                        expression_guild_id: e,
                        is_animated: (0, o.isAnimatedSticker)(n.format_type),
                        is_custom: (0, o.isCustomSticker)(n.type)
                    })
                },
                _ = t => {
                    null != t && "" !== t && r.default.trackWithMetadata(a.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: t,
                        search_type: a.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        }
    }
]);