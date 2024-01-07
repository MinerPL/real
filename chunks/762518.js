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