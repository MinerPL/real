(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56854"], {
        960476: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackSearchStart: function() {
                    return T
                },
                trackSearchResultViewed: function() {
                    return h
                },
                search: function() {
                    return m
                },
                fetchSuggestions: function() {
                    return y
                },
                resetSearch: function() {
                    return v
                },
                trackSelectGIF: function() {
                    return A
                },
                initializeSearch: function() {
                    return C
                },
                fetchTrending: function() {
                    return M
                },
                fetchTrendingGIFs: function() {
                    return N
                },
                addFavoriteGIF: function() {
                    return D
                },
                removeFavoriteGIF: function() {
                    return P
                }
            });
            var r = n("917351"),
                l = n.n(r),
                a = n("748820"),
                i = n("872717"),
                u = n("713349"),
                c = n("913144"),
                s = n("716241"),
                o = n("915639"),
                d = n("872173"),
                I = n("510849"),
                f = n("599110"),
                _ = n("564703"),
                E = n("404118"),
                F = n("49111"),
                S = n("397336"),
                p = n("782340");
            let G = /-/g;

            function T(e) {
                let t = null != e ? {
                    [e]: 1
                } : {};
                s.default.trackWithMetadata(F.AnalyticEvents.SEARCH_STARTED, {
                    search_type: F.SearchTypes.GIF,
                    load_id: I.default.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function h(e, t) {
                let {
                    startTime: n,
                    ...r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l = {
                    offset: 0,
                    limit: null,
                    totalResults: e.length
                }, a = (0, _.calculateAnalyticsMetadata)(I.default.getAnalyticsID(), t, {
                    ...l,
                    ...r,
                    results: e
                }), i = null == n ? {} : {
                    load_duration_ms: Date.now() - n
                };
                s.default.trackWithMetadata(F.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    ...a,
                    ...i
                })
            }

            function R(e, t, n) {
                let r = Date.now();
                T(t), i.default.get({
                    url: F.Endpoints.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: I.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: o.default.locale,
                        limit: n
                    },
                    oldFormErrors: !0
                }).then(l => {
                    let a = l.body;
                    h(a, t, {
                        startTime: r,
                        limit: n
                    }), c.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: a
                    })
                }, () => c.default.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                    query: e
                }))
            }
            let g = l.debounce(R, 250);

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                "" === e ? v() : (c.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: e
                }), n ? R(e, t, r) : g(e, t, r))
            }

            function y(e) {
                "" !== e && null != e && i.default.get({
                    url: F.Endpoints.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: "tenor",
                        limit: 5,
                        locale: o.default.locale
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body;
                    c.default.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: n
                    })
                })
            }

            function v() {
                c.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function A(e) {
                let {
                    type: t,
                    index: n,
                    offset: r,
                    limit: l,
                    results: a,
                    totalResults: u,
                    query: c,
                    gifId: o
                } = e, d = (0, _.calculateAnalyticsMetadata)(I.default.getAnalyticsID(), t, {
                    offset: r,
                    limit: l,
                    results: a,
                    totalResults: u
                });
                s.default.trackWithMetadata(F.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    ...d,
                    index_num: n,
                    source_object: "GIF Picker",
                    query: c
                }), null != o && i.default.post({
                    url: F.Endpoints.GIFS_SELECT,
                    body: {
                        id: o,
                        q: c
                    },
                    oldFormErrors: !0
                })
            }

            function C() {
                let e = (0, a.v4)().replace(G, "");
                s.default.trackWithMetadata(F.AnalyticEvents.SEARCH_OPENED, {
                    search_type: F.SearchTypes.GIF,
                    load_id: e
                }), c.default.wait(() => {
                    c.default.dispatch({
                        type: "GIF_PICKER_INITIALIZE",
                        analyticsID: e
                    })
                })
            }

            function M() {
                i.default.get({
                    url: F.Endpoints.GIFS_TRENDING,
                    query: {
                        provider: "tenor",
                        locale: o.default.locale,
                        media_format: I.default.getSelectedFormat()
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e, {
                        categories: n,
                        gifs: r
                    } = t;
                    c.default.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: n,
                        trendingGIFPreview: r[0]
                    })
                })
            }

            function N(e) {
                let t = Date.now();
                T(F.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
                    url: F.Endpoints.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: I.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: o.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then(n => {
                    let {
                        body: r
                    } = n;
                    h(r, F.GIFPickerResultTypes.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }), c.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: r
                    })
                }, () => {
                    c.default.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE"
                    })
                })
            }

            function D(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    var n;
                    let r = null !== (n = l.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
                    t.gifs[e.url] = {
                        ...e,
                        order: r + 1
                    };
                    let a = u.FavoriteGIFs.toBinary(t).length;
                    if (a > S.MAX_FAVORITE_GIFS_SIZE) return E.default.show({
                        title: p.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: p.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }), !1;
                    l.size(t.gifs) > 2 && (t.hideTooltip = !0)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), f.default.track(F.AnalyticEvents.GIF_FAVORITED)
            }

            function P(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    delete t.gifs[e]
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), f.default.track(F.AnalyticEvents.GIF_UNFAVORITED)
            }
        },
        809803: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StarOutlineIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2.066 10.94c-.976-.71-.475-2.255.733-2.255h6.123l1.893-5.824c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6Zm11.558-.255h5.257l-4.253 3.09 1.625 5L12 15.685l-4.253 3.09 1.625-5-4.253-3.09h5.257l1.624-5 1.624 5Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        140331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoriteGIFs: function() {
                    return c
                },
                useSortedFavoriteGIFs: function() {
                    return s
                },
                useIsFavoriteGIF: function() {
                    return o
                }
            });
            var r = n("884691"),
                l = n("917351"),
                a = n.n(l),
                i = n("42507");
            let u = {};

            function c() {
                var e, t;
                let n = (0, i.useFrecencySettings)();
                return null !== (t = null === (e = n.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : u
            }

            function s() {
                let e = c();
                return r.useMemo(() => a(e).map((e, t) => ({
                    ...e,
                    url: t
                })).sortBy("order").reverse().value(), [e])
            }

            function o(e) {
                let t = c();
                return null != t[e]
            }
        },
        476714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var r = n("37983"),
                l = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("77078"),
                c = n("960476"),
                s = n("140331"),
                o = n("118849"),
                d = n("671434"),
                I = n("659500"),
                f = n("49111"),
                _ = n("782340"),
                E = n("414763"),
                F = l.memo(function(e) {
                    let {
                        width: t,
                        height: n,
                        src: a,
                        url: F,
                        format: S,
                        className: p
                    } = e, [G, T] = l.useState(!1), h = (0, s.useIsFavoriteGIF)(F), R = h ? _.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : _.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, g = h ? d.default : o.default;
                    l.useEffect(() => {
                        if (!G) return;
                        let e = setTimeout(() => {
                            T(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }, [G]);
                    let m = e => {
                        e.preventDefault(), e.stopPropagation(), T(!0), h ? (0, c.removeFavoriteGIF)(F) : ((0, c.addFavoriteGIF)({
                            url: F,
                            src: a,
                            width: t,
                            height: n,
                            format: S
                        }), I.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
                    };
                    return (0, r.jsx)(u.Tooltip, {
                        text: R,
                        children: e => (0, r.jsx)(u.Clickable, {
                            ...e,
                            className: i(p, E.size, E.gifFavoriteButton, {
                                [E.selected]: h,
                                [E.showPulse]: G
                            }),
                            onMouseDown: e => e.preventDefault(),
                            onClick: m,
                            onDoubleClick: e => e.preventDefault(),
                            children: (0, r.jsx)(g, {
                                className: E.icon
                            })
                        })
                    })
                })
        },
        510849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("446674"),
                l = n("713349"),
                a = n("913144"),
                i = n("240292"),
                u = n("49111"),
                c = n("782340");
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
                o = {
                    FIXED_HEIGHT_MP4: "fixed_height.mp4",
                    FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
                    FIXED_WIDTH_MP4: "fixed_width.mp4",
                    FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
                    DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
                    ORIGINAL_MP4: "original.mp4"
                },
                d = s.MP4,
                I = null,
                f = "",
                _ = "",
                E = [],
                F = [],
                S = [],
                p = [];

            function G(e) {
                return e.replace(/^https?:/, "")
            }
            class T extends r.default.Store {
                getAnalyticsID() {
                    return I
                }
                getQuery() {
                    return f
                }
                getResultQuery() {
                    return _
                }
                getResultItems() {
                    return E
                }
                getTrendingCategories() {
                    return F
                }
                getSelectedFormat() {
                    return d
                }
                getSuggestions() {
                    return S
                }
                getTrendingSearchTerms() {
                    return p
                }
            }
            T.displayName = "GIFPickerViewStore";
            var h = new T(a.default, {
                GIF_PICKER_INITIALIZE: function(e) {
                    I = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    "" === (f = e.query) && (_ = "", E = [], S = [])
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && f === _) return !1;
                    null != e.query && (_ = e.query), E = e.items.map(e => {
                        let {
                            width: t,
                            height: n,
                            src: r,
                            gif_src: a,
                            url: i,
                            id: u
                        } = e;
                        return {
                            width: t,
                            height: n,
                            src: G(r),
                            gifSrc: G(a),
                            url: i,
                            id: u,
                            format: ! function(e) {
                                switch (e) {
                                    case o.FIXED_HEIGHT_MP4:
                                    case o.FIXED_HEIGHT_SMALL_MP4:
                                    case o.FIXED_WIDTH_MP4:
                                    case o.FIXED_WIDTH_SMALL_MP4:
                                    case o.DOWNSIZED_SMALL_MP4:
                                    case o.ORIGINAL_MP4:
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
                            }(d) ? l.GIFType.IMAGE : l.GIFType.VIDEO
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
                            icon: i.default,
                            name: c.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: G(e.trendingGIFPreview.src),
                            format: l.GIFType.IMAGE
                        }] : [];
                    F = [...n, ...t.map(e => ({
                        ...e,
                        src: G(e.src),
                        type: u.GIFPickerResultTypes.TRENDING_CATEGORY,
                        format: l.GIFType.VIDEO
                    }))]
                },
                GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    S = t
                },
                GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
                    let {
                        items: t
                    } = e;
                    p = t
                }
            })
        },
        118849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("809803"),
                i = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M19.6,9l-4.2-0.4c-0.4,0-0.7-0.3-0.8-0.6l-1.6-3.9c-0.3-0.8-1.5-0.8-1.8,0L9.4,8.1C9.3,8.4,9,8.6,8.6,8.7L4.4,9 c-0.9,0.1-1.2,1.2-0.6,1.8L7,13.6c0.3,0.2,0.4,0.6,0.3,1l-1,4.1c-0.2,0.9,0.7,1.5,1.5,1.1l3.6-2.2c0.3-0.2,0.7-0.2,1,0l3.6,2.2 c0.8,0.5,1.7-0.2,1.5-1.1l-1-4.1c-0.1-0.4,0-0.7,0.3-1l3.2-2.8C20.9,10.2,20.5,9.1,19.6,9z M12,15.4l-3.8,2.3l1-4.3l-3.3-2.9 l4.4-0.4l1.7-4l1.7,4l4.4,0.4l-3.3,2.9l1,4.3L12,15.4z"
                        })
                    })
                }, a.StarOutlineIcon)
        },
        671434: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("469563"),
                a = n("825701"),
                i = n("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, i.default)(u),
                        viewBox: "0 0 24 24",
                        width: t,
                        height: n,
                        children: [(0, r.jsx)("path", {
                            d: "M0,0H24V24H0Z",
                            fill: "none"
                        }), (0, r.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
                        })]
                    })
                }, a.StarIcon)
        },
        564703: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateAnalyticsMetadata: function() {
                    return l
                }
            });
            var r = n("49111");

            function l(e, t, n) {
                let l = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: a,
                        limit: i,
                        results: u,
                        totalResults: c
                    } = null != n ? n : {};
                return {
                    search_type: r.SearchTypes.GIF,
                    load_id: e,
                    limit: i,
                    offset: a,
                    page: null != i && null != a ? Math.floor(a / i) + 1 : 1,
                    total_results: c,
                    page_results: null != u ? u.length : null,
                    num_modifiers: Object.keys(l).length,
                    modifiers: l
                }
            }
        }
    }
]);