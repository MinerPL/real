(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7581"], {
        328269: function(e, t, n) {
            "use strict";
            e.exports = n.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, n) {
            "use strict";
            e.exports = n.p + "80b04934274a1d198741.svg"
        },
        960476: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackSearchStart: function() {
                    return G
                },
                trackSearchResultViewed: function() {
                    return T
                },
                search: function() {
                    return v
                },
                fetchSuggestions: function() {
                    return m
                },
                resetSearch: function() {
                    return h
                },
                trackSelectGIF: function() {
                    return A
                },
                initializeSearch: function() {
                    return M
                },
                fetchTrending: function() {
                    return C
                },
                fetchTrendingGIFs: function() {
                    return N
                },
                addFavoriteGIF: function() {
                    return P
                },
                removeFavoriteGIF: function() {
                    return D
                }
            });
            var r = n("917351"),
                i = n.n(r),
                a = n("748820"),
                l = n("872717"),
                s = n("713349"),
                u = n("913144"),
                c = n("716241"),
                o = n("915639"),
                d = n("872173"),
                f = n("510849"),
                I = n("599110"),
                E = n("564703"),
                _ = n("404118"),
                p = n("49111"),
                S = n("397336"),
                F = n("782340");
            let g = /-/g;

            function G(e) {
                let t = null != e ? {
                    [e]: 1
                } : {};
                c.default.trackWithMetadata(p.AnalyticEvents.SEARCH_STARTED, {
                    search_type: p.SearchTypes.GIF,
                    load_id: f.default.getAnalyticsID(),
                    num_modifiers: Object.keys(t).length,
                    modifiers: t
                })
            }

            function T(e, t) {
                let {
                    startTime: n,
                    ...r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = {
                    offset: 0,
                    limit: null,
                    totalResults: e.length
                }, a = (0, E.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    ...i,
                    ...r,
                    results: e
                }), l = null == n ? {} : {
                    load_duration_ms: Date.now() - n
                };
                c.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    ...a,
                    ...l
                })
            }

            function y(e, t, n) {
                let r = Date.now();
                G(t), l.default.get({
                    url: p.Endpoints.GIFS_SEARCH,
                    query: {
                        q: e,
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: o.default.locale,
                        limit: n
                    },
                    oldFormErrors: !0
                }).then(i => {
                    let a = i.body;
                    T(a, t, {
                        startTime: r,
                        limit: n
                    }), u.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        query: e,
                        items: a
                    })
                }, () => u.default.dispatch({
                    type: "GIF_PICKER_QUERY_FAILURE",
                    query: e
                }))
            }
            let R = i.debounce(y, 250);

            function v(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                "" === e ? h() : (u.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: e
                }), n ? y(e, t, r) : R(e, t, r))
            }

            function m(e) {
                "" !== e && null != e && l.default.get({
                    url: p.Endpoints.GIFS_SUGGEST,
                    query: {
                        q: e,
                        provider: "tenor",
                        limit: 5,
                        locale: o.default.locale
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let n = t.body;
                    u.default.dispatch({
                        type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                        query: e,
                        items: n
                    })
                })
            }

            function h() {
                u.default.dispatch({
                    type: "GIF_PICKER_QUERY",
                    query: ""
                })
            }

            function A(e) {
                let {
                    type: t,
                    index: n,
                    offset: r,
                    limit: i,
                    results: a,
                    totalResults: s,
                    query: u,
                    gifId: o
                } = e, d = (0, E.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
                    offset: r,
                    limit: i,
                    results: a,
                    totalResults: s
                });
                c.default.trackWithMetadata(p.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                    ...d,
                    index_num: n,
                    source_object: "GIF Picker",
                    query: u
                }), null != o && l.default.post({
                    url: p.Endpoints.GIFS_SELECT,
                    body: {
                        id: o,
                        q: u
                    },
                    oldFormErrors: !0
                })
            }

            function M() {
                let e = (0, a.v4)().replace(g, "");
                c.default.trackWithMetadata(p.AnalyticEvents.SEARCH_OPENED, {
                    search_type: p.SearchTypes.GIF,
                    load_id: e
                }), u.default.wait(() => {
                    u.default.dispatch({
                        type: "GIF_PICKER_INITIALIZE",
                        analyticsID: e
                    })
                })
            }

            function C() {
                l.default.get({
                    url: p.Endpoints.GIFS_TRENDING,
                    query: {
                        provider: "tenor",
                        locale: o.default.locale,
                        media_format: f.default.getSelectedFormat()
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e, {
                        categories: n,
                        gifs: r
                    } = t;
                    u.default.dispatch({
                        type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                        trendingCategories: n,
                        trendingGIFPreview: r[0]
                    })
                })
            }

            function N(e) {
                let t = Date.now();
                G(p.GIFPickerResultTypes.TRENDING_GIFS), l.default.get({
                    url: p.Endpoints.GIFS_TRENDING_GIFS,
                    query: {
                        media_format: f.default.getSelectedFormat(),
                        provider: "tenor",
                        locale: o.default.locale,
                        limit: e
                    },
                    oldFormErrors: !0
                }).then(n => {
                    let {
                        body: r
                    } = n;
                    T(r, p.GIFPickerResultTypes.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }), u.default.dispatch({
                        type: "GIF_PICKER_QUERY_SUCCESS",
                        items: r
                    })
                }, () => {
                    u.default.dispatch({
                        type: "GIF_PICKER_QUERY_FAILURE"
                    })
                })
            }

            function P(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    var n;
                    let r = null !== (n = i.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
                    t.gifs[e.url] = {
                        ...e,
                        order: r + 1
                    };
                    let a = s.FavoriteGIFs.toBinary(t).length;
                    if (a > S.MAX_FAVORITE_GIFS_SIZE) return _.default.show({
                        title: F.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: F.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }), !1;
                    i.size(t.gifs) > 2 && (t.hideTooltip = !0)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), I.default.track(p.AnalyticEvents.GIF_FAVORITED)
            }

            function D(e) {
                d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
                    delete t.gifs[e]
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION), I.default.track(p.AnalyticEvents.GIF_UNFAVORITED)
            }
        },
        96386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("691870"),
                s = e => {
                    let {
                        message: t,
                        className: n,
                        noResultsImageURL: i,
                        forceLightTheme: s,
                        suggestions: u
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a({
                            [l.forceLightTheme]: s
                        }, n),
                        children: (0, r.jsxs)("div", {
                            className: l.wrapper,
                            children: [(0, r.jsx)("div", {
                                className: l.sadImage,
                                style: null != i ? {
                                    backgroundImage: "url(".concat(i, ")")
                                } : {}
                            }), (0, r.jsx)("div", {
                                children: t
                            }), u]
                        })
                    })
                }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("308723");

            function l(e) {
                return i.forwardRef(function(t, n) {
                    let l = i.useRef();
                    return i.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, r.jsx)(a.default, {
                        ref: l,
                        children: n => {
                            let {
                                width: i,
                                height: a
                            } = n;
                            return (0, r.jsx)(e, {
                                ...t,
                                width: i,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        538282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openExpressionPicker: function() {
                    return o
                },
                closeExpressionPicker: function() {
                    return d
                },
                toggleMultiExpressionPicker: function() {
                    return f
                },
                toggleExpressionPicker: function() {
                    return I
                },
                setExpressionPickerView: function() {
                    return E
                },
                setSearchQuery: function() {
                    return _
                },
                useExpressionPickerStore: function() {
                    return p
                }
            });
            var r = n("995008"),
                i = n.n(r),
                a = n("308503"),
                l = n("136759"),
                s = n("13030");
            let u = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return i(e)
                    }()
                }),
                c = (0, a.default)((0, l.persist)((e, t) => u, {
                    name: "expression-picker-last-active-view",
                    partialize: e => ({
                        lastActiveView: e.lastActiveView
                    })
                })),
                o = (e, t) => {
                    c.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: c.getState().activeView
                    })
                },
                d = e => {
                    let t = c.getState();
                    if (void 0 === e || e === t.activeViewType) null !== t.activeView && c.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: t.activeView
                    })
                },
                f = e => {
                    let t = c.getState();
                    if (null == t.activeView) {
                        var n;
                        o(null !== (n = t.lastActiveView) && void 0 !== n ? n : s.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                I = (e, t) => {
                    c.getState().activeView === e ? d() : o(e, t)
                },
                E = e => {
                    c.setState({
                        activeView: e,
                        lastActiveView: c.getState().activeView
                    })
                },
                _ = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    c.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                p = c
        },
        140331: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFavoriteGIFs: function() {
                    return u
                },
                useSortedFavoriteGIFs: function() {
                    return c
                },
                useIsFavoriteGIF: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("917351"),
                a = n.n(i),
                l = n("42507");
            let s = {};

            function u() {
                var e, t;
                let n = (0, l.useFrecencySettings)();
                return null !== (t = null === (e = n.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : s
            }

            function c() {
                let e = u();
                return r.useMemo(() => a(e).map((e, t) => ({
                    ...e,
                    url: t
                })).sortBy("order").reverse().value(), [e])
            }

            function o(e) {
                let t = u();
                return null != t[e]
            }
        },
        646077: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("77078"),
                u = n("812204"),
                c = n("685665"),
                o = n("873622"),
                d = n("476765"),
                f = n("599110"),
                I = n("652914"),
                E = n("254398"),
                _ = n("49111"),
                p = n("782340"),
                S = n("369522");

            function F(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    onComplete: F,
                    uploadType: g,
                    showUpsellHeader: G,
                    analyticsPage: T
                } = e, [y, R] = i.useState(!1), v = (0, s.useModalContext)(), m = (0, d.useUID)(), {
                    AnalyticsLocationProvider: h
                } = (0, c.default)(u.default.GIF_PICKER);
                async function A(e) {
                    let {
                        gifSrc: t
                    } = e;
                    if (null == t || y) return;
                    R(!0);
                    let i = (0, E.makeTenorProxyURL)(t),
                        l = await fetch(i),
                        u = await l.blob();
                    a(), (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("57015").then(n.bind(n, "57015"));
                        return t => (0, r.jsx)(e, {
                            imgURI: i,
                            file: new File([u], "tenor.gif", {
                                type: "image/gif"
                            }),
                            onCrop: F,
                            uploadType: g,
                            showUpsellHeader: G,
                            ...t
                        })
                    }, {
                        contextKey: v
                    })
                }
                return i.useEffect(() => {
                    f.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        type: _.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: T
                        }
                    })
                }, [T]), (0, r.jsx)(h, {
                    children: (0, r.jsxs)(s.ModalRoot, {
                        className: S.gifPickerCroppingModal,
                        "aria-labelledby": m,
                        transitionState: t,
                        size: s.ModalSize.SMALL,
                        children: [G ? (0, r.jsx)(I.default, {
                            type: g,
                            analyticsPage: T,
                            analyticsSection: _.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, r.jsxs)(s.ModalHeader, {
                            className: S.modalHeader,
                            separator: !1,
                            children: [(0, r.jsx)(s.FormTitle, {
                                className: S.titleCase,
                                tag: s.FormTitleTags.H1,
                                children: p.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, r.jsx)(s.ModalCloseButton, {
                                onClick: a,
                                className: S.modalCloseButton
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(o.default, {
                                className: l(S.gifPicker, {
                                    [S.loadingOverlay]: y
                                }),
                                onSelectGIF: A,
                                hideFavorites: !0
                            }), y && (0, r.jsx)(s.Spinner, {
                                className: S.spinner
                            })]
                        })]
                    })
                })
            }
        },
        254398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeTenorProxyURL: function() {
                    return a
                }
            });
            var r = n("49111");
            let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function a(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: n
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
                let a = "".concat(r.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(a)
            }
        },
        476714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("77078"),
                u = n("960476"),
                c = n("140331"),
                o = n("118849"),
                d = n("671434"),
                f = n("659500"),
                I = n("49111"),
                E = n("782340"),
                _ = n("414763"),
                p = i.memo(function(e) {
                    let {
                        width: t,
                        height: n,
                        src: a,
                        url: p,
                        format: S,
                        className: F
                    } = e, [g, G] = i.useState(!1), T = (0, c.useIsFavoriteGIF)(p), y = T ? E.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : E.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, R = T ? d.default : o.default;
                    i.useEffect(() => {
                        if (!g) return;
                        let e = setTimeout(() => {
                            G(!1)
                        }, 500);
                        return () => clearTimeout(e)
                    }, [g]);
                    let v = e => {
                        e.preventDefault(), e.stopPropagation(), G(!0), T ? (0, u.removeFavoriteGIF)(p) : ((0, u.addFavoriteGIF)({
                            url: p,
                            src: a,
                            width: t,
                            height: n,
                            format: S
                        }), f.ComponentDispatch.dispatch(I.ComponentActions.FAVORITE_GIF))
                    };
                    return (0, r.jsx)(s.Tooltip, {
                        text: y,
                        children: e => (0, r.jsx)(s.Clickable, {
                            ...e,
                            className: l(F, _.size, _.gifFavoriteButton, {
                                [_.selected]: T,
                                [_.showPulse]: g
                            }),
                            onMouseDown: e => e.preventDefault(),
                            onClick: v,
                            onDoubleClick: e => e.preventDefault(),
                            children: (0, r.jsx)(R, {
                                className: _.icon
                            })
                        })
                    })
                })
        },
        42507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("446674"),
                a = n("872173"),
                l = n("374363");

            function s() {
                return r.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        510849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("446674"),
                i = n("713349"),
                a = n("913144"),
                l = n("240292"),
                s = n("49111"),
                u = n("782340");
            let c = {
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
                d = c.MP4,
                f = null,
                I = "",
                E = "",
                _ = [],
                p = [],
                S = [],
                F = [];

            function g(e) {
                return e.replace(/^https?:/, "")
            }
            class G extends r.default.Store {
                getAnalyticsID() {
                    return f
                }
                getQuery() {
                    return I
                }
                getResultQuery() {
                    return E
                }
                getResultItems() {
                    return _
                }
                getTrendingCategories() {
                    return p
                }
                getSelectedFormat() {
                    return d
                }
                getSuggestions() {
                    return S
                }
                getTrendingSearchTerms() {
                    return F
                }
            }
            G.displayName = "GIFPickerViewStore";
            var T = new G(a.default, {
                GIF_PICKER_INITIALIZE: function(e) {
                    f = e.analyticsID
                },
                GIF_PICKER_QUERY: function(e) {
                    "" === (I = e.query) && (E = "", _ = [], S = [])
                },
                GIF_PICKER_QUERY_SUCCESS: function(e) {
                    if (null != e.query && I === E) return !1;
                    null != e.query && (E = e.query), _ = e.items.map(e => {
                        let {
                            width: t,
                            height: n,
                            src: r,
                            gif_src: a,
                            url: l,
                            id: s
                        } = e;
                        return {
                            width: t,
                            height: n,
                            src: g(r),
                            gifSrc: g(a),
                            url: l,
                            id: s,
                            format: ! function(e) {
                                switch (e) {
                                    case o.FIXED_HEIGHT_MP4:
                                    case o.FIXED_HEIGHT_SMALL_MP4:
                                    case o.FIXED_WIDTH_MP4:
                                    case o.FIXED_WIDTH_SMALL_MP4:
                                    case o.DOWNSIZED_SMALL_MP4:
                                    case o.ORIGINAL_MP4:
                                    case c.MP4:
                                    case c.TINYMP4:
                                    case c.NANOMP4:
                                    case c.WEBM:
                                    case c.TINYWEBM:
                                    case c.NANOWEBM:
                                        return !0;
                                    default:
                                        return !1
                                }
                            }(d) ? i.GIFType.IMAGE : i.GIFType.VIDEO
                        }
                    })
                },
                GIF_PICKER_QUERY_FAILURE: function(e) {
                    let {
                        query: t
                    } = e;
                    if (null == t) return !1;
                    E = t, _ = []
                },
                GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
                    let t = e.trendingCategories,
                        n = null != e.trendingGIFPreview ? [{
                            type: s.GIFPickerResultTypes.TRENDING_GIFS,
                            icon: l.default,
                            name: u.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                            src: g(e.trendingGIFPreview.src),
                            format: i.GIFType.IMAGE
                        }] : [];
                    p = [...n, ...t.map(e => ({
                        ...e,
                        src: g(e.src),
                        type: s.GIFPickerResultTypes.TRENDING_CATEGORY,
                        format: i.GIFType.VIDEO
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
                    F = t
                }
            })
        },
        564703: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                calculateAnalyticsMetadata: function() {
                    return i
                }
            });
            var r = n("49111");

            function i(e, t, n) {
                let i = null != t ? {
                        [t]: 1
                    } : {},
                    {
                        offset: a,
                        limit: l,
                        results: s,
                        totalResults: u
                    } = null != n ? n : {};
                return {
                    search_type: r.SearchTypes.GIF,
                    load_id: e,
                    limit: l,
                    offset: a,
                    page: null != l && null != a ? Math.floor(a / l) + 1 : 1,
                    total_results: u,
                    page_results: null != s ? s.length : null,
                    num_modifiers: Object.keys(i).length,
                    modifiers: i
                }
            }
        }
    }
]);