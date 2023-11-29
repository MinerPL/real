(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12246"], {
        873390: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6836d88af9197cbd4cbb.svg"
        },
        117262: function(e, t, s) {
            "use strict";
            e.exports = s.p + "c62fd6931adca229aac8.svg"
        },
        718302: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var r, l, n, a = s("884691"),
                i = s("49111");
            (n = r || (r = {})).ARROW_UP = "ARROW_UP", n.ARROW_DOWN = "ARROW_DOWN", n.ARROW_LEFT = "ARROW_LEFT", n.ARROW_RIGHT = "ARROW_RIGHT";
            l = class extends a.Component {
                componentDidMount() {
                    document.addEventListener("keydown", this.handleKeyDown, !0)
                }
                componentWillUnmount() {
                    document.removeEventListener("keydown", this.handleKeyDown, !0)
                }
                focusNext(e) {
                    let {
                        getItemGrid: t,
                        onFocus: s
                    } = this.props, {
                        focusedColumn: r,
                        focusedRow: l
                    } = this.state;
                    if (null == e) return;
                    let n = t();
                    if (null == n) return;
                    let a = this.getNext(n, r, l, e);
                    this.setState({
                        focusedColumn: a.column,
                        focusedRow: a.row
                    }, () => {
                        let e = this.calculateFocusedItem();
                        null != e && null != s && s(e)
                    })
                }
                getNext(e, t, s, r) {
                    let l, n, a, i;
                    if (null == t || null == s) n = 0, a = 0, l = {
                        column: 0,
                        row: 0
                    };
                    else switch (n = t, a = s, r) {
                        case "ARROW_UP":
                            l = {
                                column: n,
                                row: Math.max(a - 1, 0)
                            };
                            break;
                        case "ARROW_DOWN":
                            l = {
                                column: n,
                                row: Math.min(a + 1, e[n].length - 1)
                            };
                            break;
                        case "ARROW_LEFT":
                            l = this.wrapPosition(e, n, a, -1);
                            break;
                        case "ARROW_RIGHT":
                            l = this.wrapPosition(e, n, a, 1)
                    }
                    return null != l && (i = e[l.column][l.row]), (null == i || null == l) && (i = e[(l = {
                        column: n,
                        row: a
                    }).column][l.row]), {
                        column: l.column,
                        row: l.row,
                        id: i
                    }
                }
                calculateClosest(e, t) {
                    let s;
                    let r = this.props.getCoordsMap()[e];
                    if (null == r) return;
                    let l = Number.MAX_SAFE_INTEGER;
                    for (let e = 0; e < t.length; e++) {
                        let n = this.props.getCoordsMap()[t[e]];
                        if (null == n) continue;
                        let a = Math.abs(n.top - r.top);
                        if (a < l) l = a, s = e;
                        else break
                    }
                    return s
                }
                calculateFocusedItem() {
                    let {
                        getItemGrid: e
                    } = this.props, {
                        focusedRow: t,
                        focusedColumn: s
                    } = this.state, r = e();
                    return null == r || null == s || null == t || null == r[s] || null == r[s][t] ? null : r[s][t]
                }
                render() {
                    return this.props.children
                }
                constructor(...e) {
                    super(...e), this.state = {
                        focusedColumn: null,
                        focusedRow: null
                    }, this.handleKeyDown = e => {
                        let {
                            onSelect: t
                        } = this.props;
                        switch (e.keyCode) {
                            case i.KeyboardKeys.ARROW_DOWN:
                            case i.KeyboardKeys.ARROW_UP:
                            case i.KeyboardKeys.ARROW_LEFT:
                            case i.KeyboardKeys.ARROW_RIGHT:
                                this.focusNext(function(e) {
                                    switch (e) {
                                        case i.KeyboardKeys.ARROW_DOWN:
                                            return "ARROW_DOWN";
                                        case i.KeyboardKeys.ARROW_UP:
                                            return "ARROW_UP";
                                        case i.KeyboardKeys.ARROW_LEFT:
                                            return "ARROW_LEFT";
                                        case i.KeyboardKeys.ARROW_RIGHT:
                                            return "ARROW_RIGHT";
                                        default:
                                            return null
                                    }
                                }(e.keyCode));
                                break;
                            case i.KeyboardKeys.ENTER:
                                let s = this.calculateFocusedItem();
                                null != s && null != t && (e.preventDefault(), e.stopPropagation(), t(s))
                        }
                    }, this.wrapPosition = (e, t, s, r) => {
                        var l;
                        let n = e.length,
                            a = Math.max(s * n + t + r, 0) % n,
                            i = null !== (l = this.calculateClosest(e[t][s], e[a])) && void 0 !== l ? l : s,
                            o = 0;
                        return r < 0 && a > t && (o = -1), r > 0 && a < t && (o = 1), {
                            column: a,
                            row: i + o
                        }
                    }
                }
            }
        },
        354553: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var r, l = s("884691");

            function n(e, t, s) {
                return Math.min(Math.max(Math.floor(e / t), 1), s)
            }
            var a = (0, s("737960").default)(((r = class extends l.Component {
                static getDerivedStateFromProps(e, t) {
                    let {
                        width: s,
                        desiredItemWidth: r,
                        maxColumns: l
                    } = e, a = n(s, r, l);
                    return a !== t.columns ? {
                        columns: a
                    } : null
                }
                render() {
                    let {
                        width: e,
                        height: t,
                        children: s
                    } = this.props, {
                        columns: r
                    } = this.state;
                    return s(r, e, t)
                }
                constructor(...e) {
                    super(...e), this.state = {
                        columns: n(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
                    }
                }
            }).defaultProps = {
                desiredItemWidth: 200
            }, r))
        },
        873622: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007");
            var r = s("37983"),
                l = s("884691"),
                n = s("414456"),
                a = s.n(n),
                i = s("446674"),
                o = s("77078"),
                u = s("913144"),
                c = s("960476"),
                h = s("538282"),
                d = s("510849"),
                m = s("145131"),
                p = s("810567"),
                f = s("531470"),
                g = s("140331"),
                R = s("588155"),
                I = s("762518"),
                y = s("49111"),
                _ = s("115279"),
                E = s("782340"),
                F = s("705602");
            let S = e => e.stopPropagation();
            class T extends l.PureComponent {
                componentDidMount() {
                    c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, y.GIFPickerResultTypes.SEARCH)
                }
                componentWillUnmount() {
                    u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
                }
                search(e, t, s) {
                    c.search(e, t, s), "" === e ? this.setState({
                        resultType: null
                    }) : this.state.resultType !== y.GIFPickerResultTypes.SEARCH && this.setState({
                        resultType: y.GIFPickerResultTypes.SEARCH
                    })
                }
                renderHeaderContent() {
                    let {
                        query: e
                    } = this.props, {
                        resultType: t
                    } = this.state;
                    switch (t) {
                        case y.GIFPickerResultTypes.FAVORITES:
                            return (0, r.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: F.searchHeader,
                                children: E.default.Messages.CATEGORY_FAVORITE
                            });
                        case y.GIFPickerResultTypes.TRENDING_GIFS:
                            return (0, r.jsx)(o.FormTitle, {
                                tag: "h5",
                                className: F.searchHeader,
                                children: E.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                            });
                        default:
                            return (0, r.jsx)(p.default, {
                                className: F.searchBar,
                                size: p.default.Sizes.MEDIUM,
                                query: e,
                                onChange: this.handleChangeQuery,
                                onClear: this.handleClearQuery,
                                placeholder: E.default.Messages.SEARCH_TENOR,
                                "aria-label": E.default.Messages.SEARCH_TENOR,
                                ref: this.searchBarRef,
                                autoFocus: !0
                            })
                    }
                }
                renderHeader() {
                    let {
                        resultType: e
                    } = this.state, t = null;
                    return null != e && (t = (0, r.jsx)(o.Clickable, {
                        onClick: this.handleClearQuery,
                        className: F.backButton,
                        "aria-label": E.default.Messages.BACK,
                        children: (0, r.jsx)(f.default, {
                            title: E.default.Messages.BACK
                        })
                    })), (0, r.jsxs)(m.default, {
                        align: m.default.Align.CENTER,
                        children: [t, this.renderHeaderContent()]
                    })
                }
                renderContent() {
                    let {
                        resultItems: e,
                        resultQuery: t,
                        query: s,
                        favorites: l,
                        searchOffset: n,
                        searchLimit: a,
                        searchTotalResults: i,
                        suggestions: o,
                        hideFavorites: u
                    } = this.props, {
                        resultType: c
                    } = this.state;
                    return null == c ? (0, r.jsx)(R.default, {
                        hideFavoritesTile: u,
                        onSelectItem: this.handleSelectItem
                    }) : (0, r.jsx)(I.default, {
                        data: c === y.GIFPickerResultTypes.FAVORITES ? l : e,
                        onSelectGIF: this.handleSelectGIF,
                        resultType: c,
                        resultQuery: t,
                        query: s,
                        searchOffset: n,
                        searchLimit: a,
                        searchTotalResults: i,
                        suggestions: o,
                        onSelectSuggestion: this.handleSelectSuggestion
                    })
                }
                render() {
                    let {
                        className: e,
                        forwardedRef: t
                    } = this.props;
                    return (0, r.jsxs)("div", {
                        id: _.GIF_PICKER_TAB_PANEL_ID,
                        role: "tabpanel",
                        "aria-labelledby": _.GIF_PICKER_TAB_ID,
                        className: a(F.container, e),
                        onClick: S,
                        ref: t,
                        children: [(0, r.jsx)("div", {
                            className: F.header,
                            children: this.renderHeader()
                        }), (0, r.jsx)("div", {
                            className: F.content,
                            children: this.renderContent()
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        resultType: null
                    }, this.searchBarRef = l.createRef(), this.backToFrontPage = e => {
                        let {
                            resultType: t
                        } = this.state;
                        e.keyCode === y.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
                    }, this.handleChangeQuery = e => {
                        (0, h.setSearchQuery)(e), this.search(e, y.GIFPickerResultTypes.SEARCH)
                    }, this.handleSelectSuggestion = e => {
                        (0, h.setSearchQuery)(""), c.resetSearch(), this.search(e, y.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
                    }, this.handleClearQuery = () => {
                        let {
                            current: e
                        } = this.searchBarRef;
                        (0, h.setSearchQuery)(""), c.resetSearch(), this.setState({
                            resultType: null
                        }), null != e && e.focus()
                    }, this.handleSelectGIF = e => {
                        let {
                            onSelectGIF: t
                        } = this.props;
                        null != t && t(e)
                    }, this.handleSelectItem = (e, t) => {
                        let {
                            current: s
                        } = this.searchBarRef;
                        switch (e) {
                            case y.GIFPickerResultTypes.TRENDING_CATEGORY:
                                c.search(t, y.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != s && s.focus();
                                break;
                            case y.GIFPickerResultTypes.TRENDING_GIFS:
                                c.fetchTrendingGIFs()
                        }
                        this.setState({
                            resultType: e
                        })
                    }
                }
            }
            var C = l.forwardRef((e, t) => {
                !e.persistSearch && (0, h.setSearchQuery)("");
                let {
                    query: s,
                    resultQuery: l,
                    resultItems: n,
                    suggestions: a
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    query: d.default.getQuery(),
                    resultQuery: d.default.getResultQuery(),
                    resultItems: d.default.getResultItems(),
                    suggestions: d.default.getSuggestions()
                })), o = (0, h.useExpressionPickerStore)(e => e.searchQuery), u = (0, g.useSortedFavoriteGIFs)();
                return (0, r.jsx)(T, {
                    ...e,
                    forwardedRef: t,
                    query: null != o && "" !== o ? o : s,
                    resultQuery: l,
                    resultItems: n,
                    suggestions: a,
                    favorites: u,
                    searchOffset: 0,
                    searchTotalResults: d.default.getResultItems().length,
                    searchLimit: null
                })
            })
        },
        588155: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return C
                }
            }), s("222007");
            var r = s("37983"),
                l = s("884691"),
                n = s("917351"),
                a = s.n(n),
                i = s("446674"),
                o = s("713349"),
                u = s("669491"),
                c = s("77078"),
                h = s("960476"),
                d = s("718302"),
                m = s("510849"),
                p = s("671434"),
                f = s("117362"),
                g = s("140331"),
                R = s("354553"),
                I = s("4445"),
                y = s("762518"),
                _ = s("49111"),
                E = s("782340"),
                F = s("70176");
            let S = (e, t) => (0, r.jsx)(I.CategoryColumn, {
                columns: e
            }, t);
            class T extends l.PureComponent {
                componentDidMount() {
                    0 === this.props.trendingCategories.length && (0, h.fetchTrending)()
                }
                getData() {
                    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
                }
                renderCategoryExtras(e) {
                    let {
                        name: t,
                        icon: s,
                        type: n
                    } = e;
                    return (0, r.jsxs)(l.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: n === _.GIFPickerResultTypes.FAVORITES ? F.categoryFadeBlurple : F.categoryFade
                        }), (0, r.jsxs)("div", {
                            className: F.categoryText,
                            children: [null != s ? (0, r.jsx)(s, {
                                className: F.categoryIcon
                            }) : null, (0, r.jsx)("span", {
                                className: F.categoryName,
                                children: t
                            })]
                        })]
                    })
                }
                render() {
                    return (0, r.jsx)(d.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, r.jsx)(R.default, {
                            desiredItemWidth: 200,
                            maxColumns: 6,
                            children: this.renderContent
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._masonryRef = l.createRef(), this.state = {
                        favoritesTile: function(e) {
                            var t;
                            let s = a.sample(a.values(e));
                            return {
                                type: _.GIFPickerResultTypes.FAVORITES,
                                name: E.default.Messages.CATEGORY_FAVORITE,
                                icon: p.default,
                                src: null != s ? s.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                                format: null !== (t = null == s ? void 0 : s.format) && void 0 !== t ? t : o.GIFType.IMAGE
                            }
                        }(this.props.favorites),
                        selectedIndex: {
                            column: 0,
                            row: 0
                        },
                        focusedId: null
                    }, this.handleFocus = e => {
                        let {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let s = t.getCoordsMap()[e];
                        null != s && (t.scrollIntoViewRect({
                            start: s.top - 10,
                            end: s.top + s.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let {
                            onSelectItem: t
                        } = this.props, s = this.getData().find(t => t.name === e);
                        null != s && null != t && t(s.type, s.name)
                    }, this.getItemKey = (e, t) => {
                        if (e > 0) return null;
                        let s = this.getData()[t];
                        return null != s ? s.name : null
                    }, this.memoizedData = (0, f.cachedFunction)(function(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return s ? [...t] : [e, ...t]
                    }), this.renderItem = (e, t, s, l) => {
                        if (e > 0) return null;
                        let n = this.getData()[t];
                        if (null == n) return;
                        let {
                            onSelectItem: a,
                            imagePool: i,
                            videoPool: o
                        } = this.props, {
                            focusedId: c
                        } = this.state;
                        return (0, r.jsx)(y.GIFPickerSearchItem, {
                            format: n.format,
                            color: u.default.unsafe_rawColors.PRIMARY_800.css,
                            src: n.src,
                            item: n,
                            index: t,
                            coords: s,
                            onClick: () => a(n.type, n.name),
                            renderExtras: this.renderCategoryExtras,
                            focused: n.name === c,
                            imagePool: i,
                            videoPool: o
                        }, l)
                    }, this.renderContent = (e, t, s) => {
                        let {
                            trendingCategories: l
                        } = this.props;
                        return 0 === l.length ? (0, r.jsx)(I.ResultsLoader, {
                            columns: e,
                            width: t,
                            renderColumn: S
                        }) : (0, r.jsx)(c.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            className: F.container,
                            itemGutter: 12,
                            getItemKey: this.getItemKey,
                            columns: e,
                            getItemHeight: () => 110,
                            renderItem: this.renderItem,
                            sections: [this.getData().length],
                            chunkSize: 50
                        })
                    }, this.getItemGrid = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getItemGrid() : []
                    }, this.getCoordsMap = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getCoordsMap() : {}
                    }
                }
            }

            function C(e) {
                let t = (0, i.useStateFromStores)([m.default], () => m.default.getTrendingCategories()),
                    s = (0, g.useFavoriteGIFs)(),
                    l = (0, y.useElementPools)();
                return (0, r.jsx)(T, {
                    ...e,
                    ...l,
                    trendingCategories: t,
                    favorites: s
                })
            }
        },
        4445: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CategoryColumn: function() {
                    return m
                },
                ResultsLoader: function() {
                    return p
                }
            }), s("222007"), s("808653");
            var r = s("37983"),
                l = s("884691"),
                n = s("917351"),
                a = s.n(n),
                i = s("458960"),
                o = s("669491"),
                u = s("527671");
            let c = [o.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, o.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
            class h extends l.PureComponent {
                render() {
                    let {
                        props: {
                            height: e
                        },
                        state: {
                            backgroundColor: t
                        }
                    } = this;
                    return (0, r.jsx)("div", {
                        style: {
                            height: e,
                            backgroundColor: t
                        },
                        className: u.gif
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        backgroundColor: a.sample(c)
                    }
                }
            }
            class d extends l.Component {
                componentDidMount() {
                    this.animateSlide()
                }
                getAnimatedStyle() {
                    let {
                        props: {
                            columns: e
                        },
                        state: {
                            translateY: t
                        }
                    } = this;
                    return {
                        width: "".concat(100 / e, "%"),
                        transform: [{
                            translateY: t.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0px", "1px"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        blocks: e
                    } = this.state;
                    return (0, r.jsxs)(i.default.div, {
                        className: u.column,
                        style: this.getAnimatedStyle(),
                        children: [e.map((e, t) => (0, r.jsx)(h, {
                            height: e
                        }, t)), e.map((e, t) => (0, r.jsx)(h, {
                            height: e
                        }, "alt".concat(t)))]
                    })
                }
                constructor(e) {
                    super(e), this.animateSlide = () => {
                        let {
                            props: {
                                direction: e
                            },
                            state: {
                                translateY: t,
                                height: s
                            }
                        } = this;
                        t.setValue(e > 0 ? 0 : -s / 2 + 12), i.default.timing(t, {
                            toValue: e > 0 ? -s / 2 + 12 : 0,
                            duration: 800,
                            easing: i.default.Easing.linear
                        }).start(this.animateSlide)
                    };
                    let t = Array(10).fill(null).map(() => a.random(40, 150));
                    this.state = {
                        blocks: t,
                        height: 2 * t.reduce((e, t) => e + t + 12, 12),
                        translateY: new i.default.Value(0)
                    }
                }
            }
            d.defaultProps = {
                direction: -1
            };
            let m = e => {
                let {
                    columns: t
                } = e;
                return (0, r.jsx)("div", {
                    className: u.column,
                    style: {
                        width: "".concat(100 / t, "%")
                    },
                    children: [, , , , ].fill(null).map((e, t) => (0, r.jsx)("div", {
                        className: u.categoryLoader
                    }, t))
                })
            };
            class p extends l.PureComponent {
                render() {
                    let {
                        columns: e,
                        renderColumn: t
                    } = this.props;
                    return (0, r.jsx)("div", {
                        className: u.container,
                        children: Array(e).fill(null).map((s, r) => t(e, r))
                    })
                }
            }
        },
        762518: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                GIFPickerSearchItem: function() {
                    return O
                },
                useElementPools: function() {
                    return k
                },
                default: function() {
                    return M
                }
            }), s("222007");
            var r = s("37983"),
                l = s("884691"),
                n = s("414456"),
                a = s.n(n),
                i = s("917351"),
                o = s.n(i),
                u = s("217982"),
                c = s("713349"),
                h = s("669491"),
                d = s("77078"),
                m = s("960476"),
                p = s("718302"),
                f = s("96386"),
                g = s("244201"),
                R = s("476714"),
                I = s("671434"),
                y = s("354553"),
                _ = s("49111"),
                E = s("782340"),
                F = s("672123");
            let S = [h.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, h.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
                T = 1220,
                C = Array.from({
                    length: 16
                }).map((e, t) => ({
                    id: "".concat(t),
                    height: Math.floor(100 * Math.random()) + 120
                }));

            function x(e) {
                var t;
                return null !== (t = e.id) && void 0 !== t ? t : e.src
            }

            function v(e, t) {
                let s = C[t];
                return null == s ? 0 : s.height
            }

            function A(e, t, s, l) {
                if (!(e > 0)) return null == C[t] ? null : (0, r.jsx)("div", {
                    className: F.placeholder,
                    style: {
                        animationDelay: "".concat(75 * t, "ms"),
                        ...s
                    }
                }, l)
            }

            function G(e, t) {
                var s, r;
                return e > 0 ? "" : null !== (r = null === (s = C[t]) || void 0 === s ? void 0 : s.id) && void 0 !== r ? r : ""
            }

            function N(e) {
                return e === c.GIFType.VIDEO
            }
            class O extends l.PureComponent {
                componentDidMount() {
                    let {
                        props: {
                            format: e,
                            src: t,
                            coords: {
                                width: s,
                                height: r
                            },
                            videoPool: l
                        },
                        ref: n
                    } = this;
                    if (e !== c.GIFType.VIDEO || null == n) return;
                    let a = l.getElement();
                    a.oncanplay = this.handleCanPlay, a.src = t, a.width = s, a.height = r, n.appendChild(a), this._video = a
                }
                componentDidUpdate(e) {
                    let {
                        width: t,
                        height: s
                    } = this.props.coords;
                    null != this._video && (e.coords.width !== t || e.coords.height !== s) && (this._video.width = t, this._video.height = s)
                }
                componentWillUnmount() {
                    this._mounted = !1;
                    let {
                        _image: e,
                        _video: t
                    } = this, {
                        imagePool: s,
                        videoPool: r
                    } = this.props;
                    null != e && (this._image = null, s.poolElement(e)), null != t && (this._video = null, r.poolElement(t))
                }
                renderGIF() {
                    let {
                        src: e,
                        coords: {
                            width: t,
                            height: s
                        }
                    } = this.props, {
                        loaded: l
                    } = this.state;
                    return l ? (0, r.jsx)("img", {
                        src: e,
                        width: t,
                        height: s,
                        className: F.gif,
                        alt: ""
                    }) : null
                }
                render() {
                    let {
                        item: e,
                        renderExtras: t,
                        format: s,
                        coords: l,
                        focused: n
                    } = this.props, {
                        color: i,
                        loaded: o
                    } = this.state;
                    return (0, r.jsxs)(d.Clickable, {
                        tabIndex: -1,
                        innerRef: e => {
                            this.ref = e
                        },
                        className: a(F.result, {
                            [F.focused]: n
                        }),
                        onClick: this.handleClick,
                        style: {
                            backgroundColor: o ? void 0 : i,
                            ...l
                        },
                        children: [N(s) ? null : this.renderGIF(), null != t ? t(e) : null]
                    })
                }
                constructor(e) {
                    super(e), this.ref = null, this._video = null, this._image = null, this._mounted = !0, this.handleCanPlay = () => {
                        this._mounted && this.setState({
                            loaded: !0
                        })
                    }, this.handleClick = () => {
                        let {
                            onClick: e,
                            item: t,
                            index: s
                        } = this.props;
                        null != e && e(t, s)
                    };
                    let {
                        format: t,
                        color: s,
                        imagePool: r
                    } = this.props;
                    this.state = {
                        color: null == s ? o.sample(S) : s,
                        loaded: !1
                    }, !N(t) && (this._image = r.getElement(), this._image.onload = () => this.setState({
                        loaded: !0
                    }), this._image.src = e.src)
                }
            }
            class P extends l.PureComponent {
                componentDidMount() {
                    let {
                        resultType: e,
                        data: t
                    } = this.props;
                    e === _.GIFPickerResultTypes.FAVORITES && ((0, m.trackSearchStart)(_.GIFPickerResultTypes.FAVORITES), (0, m.trackSearchResultViewed)(t, _.GIFPickerResultTypes.FAVORITES, {
                        limit: null
                    }))
                }
                selectItem(e, t) {
                    let {
                        onSelectGIF: s,
                        resultType: r,
                        data: l,
                        resultQuery: n
                    } = this.props;
                    null != s && s(e), (0, m.trackSelectGIF)({
                        type: r,
                        index: t,
                        offset: this.props.searchOffset,
                        limit: this.props.searchLimit,
                        results: l,
                        totalResults: this.props.searchTotalResults,
                        query: n,
                        gifId: e.id
                    })
                }
                getSectionHeight(e) {
                    return 1 === e ? 220 : 0
                }
                renderEmptyFavorite(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, r.jsx)("div", {
                        className: F.emptyHint,
                        children: null != e ? (0, r.jsxs)("div", {
                            className: F.emptyHintCard,
                            children: [t ? (0, r.jsx)(I.default, {
                                className: F.emptyHintFavorite
                            }) : null, (0, r.jsx)("div", {
                                className: F.emptyHintText,
                                children: e
                            })]
                        }) : (0, r.jsx)("div", {
                            className: F.emptyHintSpacer
                        })
                    })
                }
                renderEmptyFavorites() {
                    return (0, r.jsx)(d.Scroller, {
                        className: F.results,
                        fade: !0,
                        children: (0, r.jsxs)("div", {
                            className: F.emptyHints,
                            children: [this.renderEmptyFavorite(E.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(E.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(E.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                                length: 15
                            }).map((e, t) => (0, r.jsx)(l.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(E.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                                length: 16
                            }).map((e, t) => (0, r.jsx)(l.Fragment, {
                                children: this.renderEmptyFavorite()
                            }, t)), this.renderEmptyFavorite(E.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                        })
                    })
                }
                render() {
                    let {
                        data: e,
                        resultQuery: t,
                        query: s,
                        resultType: l
                    } = this.props;
                    return 0 === e.length && t === s && l !== _.GIFPickerResultTypes.TRENDING_GIFS ? l === _.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(f.default, {
                        message: E.default.Messages.NO_GIF_SEARCH_RESULTS,
                        className: F.noResults
                    }) : (0, r.jsx)(p.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect,
                        children: (0, r.jsx)(y.default, {
                            desiredItemWidth: 200,
                            maxColumns: 8,
                            children: this.renderContent
                        })
                    }, t)
                }
                constructor(...e) {
                    super(...e), this._masonryRef = l.createRef(), this.prevResultQuery = null, this.state = {
                        focusedId: null
                    }, this.handleFocus = e => {
                        let {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let s = t.getCoordsMap()[e];
                        null != s && (t.scrollIntoViewRect({
                            start: s.top - 10,
                            end: s.top + s.height + 10
                        }), this.setState({
                            focusedId: e
                        }))
                    }, this.handleSelect = e => {
                        let t;
                        let {
                            data: s
                        } = this.props, r = s.findIndex(t => x(t) === e); - 1 !== r && (t = s[r]), null != t && this.selectItem(t, r)
                    }, this.handleClickItem = (e, t) => {
                        this.selectItem(e, t)
                    }, this.handleScroll = () => {
                        let {
                            resultQuery: e
                        } = this.props, {
                            current: t
                        } = this._masonryRef;
                        if (null == t) return;
                        let {
                            scrollTop: s,
                            scrollHeight: r
                        } = t.getScrollerState();
                        r - s <= T && (e !== this.prevResultQuery && (0, m.fetchSuggestions)(e), this.prevResultQuery = e)
                    }, this.renderItem = (e, t, s, l) => {
                        if (e > 0) return null;
                        let {
                            focusedId: n
                        } = this.state, a = this.props.data[t];
                        return null == a ? null : (0, r.jsx)(O, {
                            item: a,
                            index: t,
                            format: a.format,
                            src: a.src,
                            coords: s,
                            onClick: this.handleClickItem,
                            renderExtras: () => (0, r.jsx)(R.default, {
                                className: F.favButton,
                                ...a
                            }),
                            focused: x(a) === n,
                            imagePool: this.props.imagePool,
                            videoPool: this.props.videoPool
                        }, l)
                    }, this.getItemHeight = (e, t, s) => {
                        if (e > 0) return 0;
                        let r = this.props.data[t];
                        if (null == r) return 0;
                        let l = r.height / r.width;
                        return s * l
                    }, this.getItemKey = (e, t) => {
                        var s;
                        if (e > 0) return null;
                        let r = this.props.data[t];
                        return null != r ? null !== (s = r.id) && void 0 !== s ? s : r.src : null
                    }, this.renderSection = (e, t, s) => {
                        let {
                            onSelectSuggestion: n,
                            suggestions: a
                        } = this.props;
                        return 1 === e ? (0, r.jsx)("div", {
                            className: F.endContainer,
                            style: t,
                            children: a.length > 0 ? (0, r.jsxs)(l.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: F.endText,
                                    children: E.default.Messages.GIF_PICKER_RELATED_SEARCH
                                }), (0, r.jsx)("div", {
                                    className: F.searchSuggestions,
                                    children: a.map(e => (0, r.jsx)(d.Button, {
                                        look: d.Button.Looks.OUTLINED,
                                        color: d.Button.Colors.PRIMARY,
                                        size: d.Button.Sizes.SMALL,
                                        className: F.searchSuggestion,
                                        onClick: () => {
                                            n(e)
                                        },
                                        children: e
                                    }, e))
                                })]
                            }) : null
                        }, s) : null
                    }, this.renderContent = (e, t, s) => {
                        let {
                            data: l,
                            resultQuery: n,
                            query: a,
                            resultType: i
                        } = this.props;
                        return 0 === l.length && (n !== a || i === _.GIFPickerResultTypes.TRENDING_GIFS) ? (0, r.jsx)(d.MasonryList, {
                            fade: !0,
                            className: F.results,
                            sections: [C.length],
                            columns: e,
                            itemGutter: 12,
                            getItemKey: G,
                            getItemHeight: v,
                            renderItem: A,
                            chunkSize: 128
                        }, n) : (0, r.jsx)(d.MasonryList, {
                            ref: this._masonryRef,
                            fade: !0,
                            itemGutter: 12,
                            className: F.results,
                            columns: e,
                            sections: [l.length, 0],
                            getItemKey: this.getItemKey,
                            getItemHeight: this.getItemHeight,
                            renderItem: this.renderItem,
                            getSectionHeight: this.getSectionHeight,
                            renderSection: this.renderSection,
                            onScroll: this.handleScroll,
                            chunkSize: 128
                        }, "".concat(n, "-").concat(null != i ? i : ""))
                    }, this.getItemGrid = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getItemGrid() : []
                    }, this.getCoordsMap = () => {
                        let {
                            current: e
                        } = this._masonryRef;
                        return null != e ? e.getCoordsMap() : {}
                    }
                }
            }

            function k() {
                let {
                    renderWindow: e
                } = l.useContext(g.default), t = e.document, [s] = l.useState(() => new u.default(() => t.createElement("img"), e => {
                    e.onload = null, e.src = ""
                })), [r] = l.useState(() => new u.default(() => {
                    let e = t.createElement("video");
                    return e.className = F.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
                }, e => {
                    e.src = "", e.oncanplay = null;
                    let {
                        parentNode: t
                    } = e;
                    null != t && t.removeChild(e)
                }));
                return {
                    imagePool: s,
                    videoPool: r
                }
            }
            var M = function(e) {
                let t = k();
                return (0, r.jsx)(P, {
                    ...e,
                    ...t
                })
            }
        },
        217982: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("424973");
            var r = class e {
                getElement() {
                    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
                }
                poolElement(e) {
                    this._cleanElement(e), this._elements.push(e)
                }
                clearPool() {
                    this._elements.length = 0
                }
                constructor(e, t) {
                    this._elements = [], this._createElement = e, this._cleanElement = t
                }
            }
        }
    }
]);