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