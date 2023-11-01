(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65993"], {
        960476: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackSearchStart: function() {
                    return F
                },
                trackSearchResultViewed: function() {
                    return m
                },
                search: function() {
                    return C
                },
                fetchSuggestions: function() {
                    return G
                },
                resetSearch: function() {
                    return g
                },
                trackSelectGIF: function() {
                    return A
                },
                initializeSearch: function() {
                    return D
                },
                fetchTrending: function() {
                    return M
                },
                fetchTrendingGIFs: function() {
                    return v
                },
                addFavoriteGIF: function() {
                    return O
                },
                removeFavoriteGIF: function() {
                    return N
                }
            });
            var a = n("917351"),
                r = n.n(a),
                i = n("748820"),
                l = n("872717"),
                u = n("713349"),
                o = n("913144"),
                s = n("716241"),
                d = n("915639"),
                c = n("872173"),
                f = n("510849"),
                I = n("599110"),
                _ = n("564703"),
                E = n("404118"),
                p = n("49111"),
                T = n("397336"),
                h = n("782340");
            let S = /-/g;

            function F(e) {
                let t = null != e ? {
                    [e]: 1
                } : {};
                s.default.trackWithMetadata(p.AnalyticEvents.SEARCH_STARTED, {
                    search_type: p.SearchTypes.GIF,
                    load_id: f.default.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function m(e, t) {
                let {
                    startTime: n,
                    ...a
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
                    offset: 0,
                    limit: null,
                    totalResults: e.length
                }, i = (0, _.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    ...r,
                    ...a,
                    results: e
                }), l = null == n ? {} : {
                    load_duration_ms: Date.now() - n
                };
                s.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    ...i,
                    ...l
                })
            }

            function y(e, t, n) {
                let a = Date.now();
                F(t), l.default.get({
                    url: p.Endpoints.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: n
                    },
                    oldFormErrors: !0
                }).then(r => {
                    let i = r.body;
                    m(i, t, {
                        startTime: a,
                        limit: n
                    }), o.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: i
                    })
                }, () => o.default.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                    query: e
                }))
            }
            let R = r.debounce(y, 250);

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 ? arguments[3] : void 0;
                "" === e ? g() : (o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: e
                }), n ? y(e, t, a) : R(e, t, a))
            }

            function G(e) {
                "" !== e && null != e && l.default.get({
                    url: p.Endpoints.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: "tenor",
                        limit: 5,
                        locale: d.default.locale
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body;
                    o.default.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: n
                    })
                })
            }

            function g() {
                o.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function A(e) {
                let {
                    type: t,
                    index: n,
                    offset: a,
                    limit: r,
                    results: i,
                    totalResults: u,
                    query: o,
                    gifId: d
                } = e, c = (0, _.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    offset: a,
                    limit: r,
                    results: i,
                    totalResults: u
                });
                s.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    ...c,
                    index_num: n,
                    source_object: "GIF Picker",
                    query: o
                }), null != d && l.default.post({
                    url: p.Endpoints.GIFS_SELECT,
                    body: {
                        id: d,
                        q: o
                    },
                    oldFormErrors: !0
                })
            }

            function D() {
                let e = (0, i.v4)().replace(S, "");
                s.default.trackWithMetadata(p.AnalyticEvents.SEARCH_OPENED, {
                    search_type: p.SearchTypes.GIF,
                    load_id: e
                }), o.default.wait(() => {
                    o.default.dispatch({
                        type: "GIF_PICKER_INITIALIZE",
                        analyticsID: e
                    })
                })
            }

            function M() {
                l.default.get({
                    url: p.Endpoints.GIFS_TRENDING,
                    query: {
                        provider: "tenor",
                        locale: d.default.locale,
                        media_format: f.default.getSelectedFormat()
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e, {
                        categories: n,
                        gifs: a
                    } = t;
                    o.default.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: n,
                        trendingGIFPreview: a[0]
                    })
                })
            }

            function v(e) {
                let t = Date.now();
                F(p.GIFPickerResultTypes.TRENDING_GIFS), l.default.get({
                    url: p.Endpoints.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: d.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then(n => {
                    let {
                        body: a
                    } = n;
                    m(a, p.GIFPickerResultTypes.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }), o.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: a
                    })
                }, () => {
                    o.default.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE"
                    })
                })
            }

            function O(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    var n;
                    let a = null !== (n = r.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
                    t.gifs[e.url] = {
                        ...e,
                        order: a + 1
                    };
                    let i = u.FavoriteGIFs.toBinary(t).length;
                    if (i > T.MAX_FAVORITE_GIFS_SIZE) return E.default.show({
                        title: h.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: h.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }), !1;
                    r.size(t.gifs) > 2 && (t.hideTooltip = !0)
                }, T.UserSettingsDelay.INFREQUENT_USER_ACTION), I.default.track(p.AnalyticEvents.GIF_FAVORITED)
            }

            function N(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    delete t.gifs[e]
                }, T.UserSettingsDelay.INFREQUENT_USER_ACTION), I.default.track(p.AnalyticEvents.GIF_UNFAVORITED)
            }
        },
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("974889"),
                l = n("954016"),
                u = n("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: s,
                    openInPopout: d,
                    initialSelectedApplicationId: c,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: I = !1,
                    analyticsLocations: _
                } = e;
                d && (0, i.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let E = d ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: o,
                        locationObject: s,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: I,
                        analyticsLocations: _
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: E
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return u
                }
            });
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function u(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        140331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoriteGIFs: function() {
                    return o
                },
                useSortedFavoriteGIFs: function() {
                    return s
                },
                useIsFavoriteGIF: function() {
                    return d
                }
            });
            var a = n("884691"),
                r = n("917351"),
                i = n.n(r),
                l = n("42507");
            let u = {};

            function o() {
                var e, t;
                let n = (0, l.useFrecencySettings)();
                return null !== (t = null === (e = n.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : u
            }

            function s() {
                let e = o();
                return a.useMemo(() => i(e).map((e, t) => ({
                    ...e,
                    url: t
                })).sortBy("order").reverse().value(), [e])
            }

            function d(e) {
                let t = o();
                return null != t[e]
            }
        },
        476714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                u = n("77078"),
                o = n("960476"),
                s = n("140331"),
                d = n("118849"),
                c = n("671434"),
                f = n("659500"),
                I = n("49111"),
                _ = n("782340"),
                E = n("414763"),
                p = r.memo(function(e) {
                    let {
                        width: t,
                        height: n,
                        src: i,
                        url: p,
                        format: T,
                        className: h
                    } = e, [S, F] = r.useState(!1), m = (0, s.useIsFavoriteGIF)(p), y = m ? _.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : _.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, R = m ? c.default : d.default;
                    r.useEffect(() => {
                        if (!S) return;
                        let e = setTimeout(() => {
                            F(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }, [S]);
                    let C = e => {
                        e.preventDefault(), e.stopPropagation(), F(!0), m ? (0, o.removeFavoriteGIF)(p) : ((0, o.addFavoriteGIF)({
                            url: p,
                            src: i,
                            width: t,
                            height: n,
                            format: T
                        }), f.ComponentDispatch.dispatch(I.ComponentActions.FAVORITE_GIF))
                    };
                    return (0, a.jsx)(u.Tooltip, {
                        text: y,
                        children: e => (0, a.jsx)(u.Clickable, {
                            ...e,
                            className: l(h, E.size, E.gifFavoriteButton, {
                                [E.selected]: m,
                                [E.showPulse]: S
                            }),
                            onMouseDown: e => e.preventDefault(),
                            onClick: C,
                            onDoubleClick: e => e.preventDefault(),
                            children: (0, a.jsx)(R, {
                                className: E.icon
                            })
                        })
                    })
                })
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var a = n("884691"),
                r = n("866227"),
                i = n.n(r),
                l = n("862337"),
                u = n("296892");
            let o = new Date("2023-01-01T07:59:59.000Z"),
                s = i(o),
                d = (0, u.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function c() {
                let [e, t] = a.useState(() => s.isAfter(Date.now()));
                return a.useEffect(() => {
                    let n = new l.Timeout,
                        a = () => {
                            let e = s.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                s.isBefore(Date.now()) ? t(!1) : a()
                            })
                        };
                    return e && a(), () => n.stop()
                }), e
            }
            var f = d
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return y
                },
                openThreadSidebarForCreating: function() {
                    return R
                },
                closeThreadSidebar: function() {
                    return C
                },
                closeAndClearThreadSidebar: function() {
                    return G
                }
            });
            var a = n("627445"),
                r = n.n(a),
                i = n("917351"),
                l = n.n(i),
                u = n("913144"),
                o = n("295426"),
                s = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                I = n("144491"),
                _ = n("845579"),
                E = n("474643"),
                p = n("18494"),
                T = n("800762"),
                h = n("659500"),
                S = n("648564"),
                F = n("49111"),
                m = n("724210");

            function y(e, t, n) {
                s.MainWindowDispatch.dispatch(F.ComponentActions.POPOUT_CLOSE);
                let a = !l.isEmpty(T.default.getVoiceStatesForChannel(e.id));
                if (t || !_.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    u.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, I.transitionToThread)(e, n) : (0, I.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let i = p.default.getChannelId();
                e.parent_id !== i && !(0, m.isGuildHomeChannel)(i) && (0, I.transitionToChannel)(e.parent_id), (0, f.transitionTo)(F.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, m.isGuildHomeChannel)(i) ? m.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    h.ComponentDispatch.dispatch(F.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function R(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(F.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), s.MainWindowDispatch.dispatch(F.ComponentActions.POPOUT_CLOSE), p.default.getChannelId() !== e.id && (0, I.transitionToChannel)(e.id);
                let a = E.default.getDraft(e.id, E.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = E.default.getDraft(e.id, E.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", E.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, E.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    u.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function C(e, t) {
                (0, f.transitionTo)(F.Routes.CHANNEL(e, (0, m.isGuildHomeChannel)(t) ? m.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function G(e) {
                u.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.FirstThreadMessage
                }), u.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: E.DraftType.ThreadSettings
                })
            }
        },
        510849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("446674"),
                r = n("713349"),
                i = n("913144"),
                l = n("240292"),
                u = n("49111"),
                o = n("782340");
            let s = {
                    GIF: "gif",
                    MP4: "mp4",
                    MEDIUMGIF: "mediumgif",
                    TINYGIF: "tinygif",
                    NANOGIF: "nanogif",
                    LOOPEDMP4: "loopedmp4",
                    TINYMP4: "tinymp4",
                    NANOMP4: "nanomp4",
                    WEBM: "webm",
                    TINYWEBM: "tinywebm",
                    NANOWEBM: "nanowebm"
                },
                d = {
                    FIXED_HEIGHT_MP4: "fixed_height.mp4",
                    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
                    FIXED_WIDTH_MP4: "fixed_width.mp4",
                    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
                    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
                    ORIGINAL_MP4: "original.mp4"
                },
                c = s.MP4,
                f = null,
                I = "",
                _ = "",
                E = [],
                p = [],
                T = [],
                h = [];

            function S(e) {
                return e.replace(/^https?:/, "")
            }
            class F extends a.default.Store {
                getAnalyticsID() {
                    return f
                }
                getQuery() {
                    return I
                }
                getResultQuery() {
                    return _
                }
                getResultItems() {
                    return E
                }
                getTrendingCategories() {
                    return p
                }
                getSelectedFormat() {
                    return c
                }
                getSuggestions() {
                    return T
                }
                getTrendingSearchTerms() {
                    return h
                }
            }
            F.displayName = "GIFPickerViewStore";
            var m = new F(i.default, {
                GIF_PICKER_INITIALIZE: function(e) {
                    f = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    "" === (I = e.query) && (_ = "", E = [], T = [])
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && I === _) return !1;
                    null != e.query && (_ = e.query), E = e.items.map(e => {
                        let {
                            width: t,
                            height: n,
                            src: a,
                            gif_src: i,
                            url: l,
                            id: u
                        } = e;
                        return {
                            width: t,
                            height: n,
                            src: S(a),
                            gifSrc: S(i),
                            url: l,
                            id: u,
                            format: ! function(e) {
                                switch (e) {
                                    case d.FIXED_HEIGHT_MP4:
                                    case d.FIXED_HEIGHT_SMALL_MP4:
                                    case d.FIXED_WIDTH_MP4:
                                    case d.FIXED_WIDTH_SMALL_MP4:
                                    case d.DOWNSIZED_SMALL_MP4:
                                    case d.ORIGINAL_MP4:
                                    case s.MP4:
                                    case s.TINYMP4:
                                    case s.NANOMP4:
                                    case s.WEBM:
                                    case s.TINYWEBM:
                                    case s.NANOWEBM:
                                        return !0;
                                    default:
                                        return !1
                                }
                            }(c) ? r.GIFType.IMAGE : r.GIFType.VIDEO
                        }
                    })
                },
                GIF_PICKER_QUERY_FAILURE: function(e) {
                    let {
                        query: t
                    } = e;
                    if (null == t) return !1;
                    _ = t, E = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    let t = e.trendingCategories,
                        n = null != e.trendingGIFPreview ? [{
                            type: u.GIFPickerResultTypes.TRENDING_GIFS,
                            icon: l.default,
                            name: o.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: S(e.trendingGIFPreview.src),
                            format: r.GIFType.IMAGE
                        }] : [];
                    p = [...n, ...t.map(e => ({
                        ...e,
                        src: S(e.src),
                        type: u.GIFPickerResultTypes.TRENDING_CATEGORY,
                        format: r.GIFType.VIDEO
                    }))]
                },
                GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    T = t
                },
                GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    h = t
                }
            })
        },
        564703: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateAnalyticsMetadata: function() {
                    return r
                }
            });
            var a = n("49111");

            function r(e, t, n) {
                let r = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: i,
                        limit: l,
                        results: u,
                        totalResults: o
                    } = null != n ? n : {};
                return {
                    search_type: a.SearchTypes.GIF,
                    load_id: e,
                    limit: l,
                    offset: i,
                    page: null != l && null != i ? Math.floor(i / l) + 1 : 1,
                    total_results: o,
                    page_results: null != u ? u.length : null,
                    num_modifiers: Object.keys(r).length,
                    modifiers: r
                }
            }
        }
    }
]);