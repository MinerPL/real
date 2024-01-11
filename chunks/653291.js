            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("917351"),
                d = n.n(u),
                c = n("866227"),
                f = n.n(c),
                E = n("868233"),
                h = n("446674"),
                _ = n("77078"),
                S = n("378438"),
                T = n("425773"),
                p = n("76385"),
                N = n("955513"),
                I = n("679653"),
                m = n("419830"),
                g = n("42203"),
                A = n("26989"),
                C = n("27618"),
                R = n("712611"),
                M = n("18494"),
                O = n("162771"),
                L = n("102985"),
                v = n("697218"),
                D = n("834179"),
                y = n("689476"),
                x = n("228220"),
                P = n("659500"),
                U = n("701909"),
                b = n("751520"),
                F = n("158998"),
                j = n("49111"),
                G = n("782340"),
                k = n("813069");
            let w = f("2015-05-15").local(),
                B = (0, E.makeLazy)({
                    createPromise: () => n.el("201959").then(n.bind(n, "201959")),
                    webpackId: "201959"
                }),
                H = (e, t, n) => {
                    var a, s, i;
                    let {
                        user: r,
                        text: o
                    } = n;
                    if (null == r) return (0, l.jsx)("strong", {
                        children: o
                    });
                    let u = v.default.getUser(r.id),
                        d = g.default.getChannel(e),
                        c = (null == d ? void 0 : d.isPrivate()) ? C.default.getNickname(r.id) : null,
                        f = null !== (s = null !== (a = A.default.getNick(e, r.id)) && void 0 !== a ? a : c) && void 0 !== s ? s : F.default.getName(r),
                        E = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
                    return [(0, l.jsx)("img", {
                        alt: "",
                        className: k.displayAvatar,
                        src: E
                    }, "avatar-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: k.displayedNick,
                        children: f
                    }, "display-nick-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: k.displayUsername,
                        children: F.default.getUserTag(r, {
                            identifiable: L.default.enabled && L.default.hidePersonalInformation ? "never" : "always"
                        })
                    }, "display-username-".concat(t, "-").concat(r.id))]
                },
                V = (e, t, n) => {
                    let {
                        channel: a,
                        text: s
                    } = n;
                    if (null == a) return (0, l.jsx)("strong", {
                        children: s
                    });
                    let i = g.default.getChannel(a.parent_id),
                        r = (0, m.getChannelIconComponent)(a);
                    return (0, l.jsxs)("div", {
                        className: k.resultChannel,
                        children: [null != r ? (0, l.jsx)(r, {
                            className: k.searchResultChannelIcon
                        }) : null, (0, l.jsx)("strong", {
                            children: (0, I.computeChannelName)(a, v.default, C.default)
                        }), null != i ? (0, l.jsx)("span", {
                            className: k.searchResultChannelCategory,
                            children: (0, I.computeChannelName)(i, v.default, C.default)
                        }) : null]
                    })
                },
                Y = e => {
                    let t, n, {
                        id: a,
                        searchId: s,
                        result: r,
                        group: o,
                        className: u,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        onSelect: E,
                        onFocus: h,
                        showFilter: S,
                        renderResult: T
                    } = e;
                    if (S) {
                        var p, I;
                        t = (0, l.jsx)("span", {
                            className: k.filter,
                            children: null !== (I = null === (p = N.default[o]) || void 0 === p ? void 0 : p.key) && void 0 !== I ? I : "addme:"
                        })
                    }
                    return n = null != T ? T(s, o, r) : (0, l.jsx)("strong", {
                        children: r.text
                    }), (0, l.jsxs)(_.Clickable, {
                        tag: "li",
                        className: i(k.option, u),
                        onClick: E,
                        onFocus: h,
                        id: a,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        children: [t, n, (0, l.jsx)(y.default, {
                            className: k.plusIcon
                        })]
                    })
                },
                K = e => (0, l.jsx)(Y, {
                    ...e,
                    className: k.user,
                    renderResult: H
                }),
                Q = {
                    [j.SearchTokenTypes.FILTER_FROM]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_FROM,
                        component: K
                    },
                    [j.SearchTokenTypes.FILTER_MENTIONS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
                        component: K
                    },
                    [j.SearchTokenTypes.FILTER_HAS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_HAS
                    },
                    [j.SearchTokenTypes.FILTER_FILE_TYPE]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
                    },
                    [j.SearchTokenTypes.FILTER_IN]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
                        component: e => (0, l.jsx)(Y, {
                            ...e,
                            renderResult: V
                        })
                    },
                    [j.SearchAutocompleteGroups.DATES]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_DATES
                    },
                    [j.SearchAutocompleteGroups.HISTORY]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
                        groupTip(e) {
                            let {
                                searchId: t
                            } = e;
                            return (0, l.jsx)(_.Tooltip, {
                                text: G.default.Messages.SEARCH_CLEAR_HISTORY,
                                position: "left",
                                children: e => {
                                    let {
                                        onMouseEnter: n,
                                        onMouseLeave: a
                                    } = e;
                                    return (0, l.jsx)(_.Clickable, {
                                        onClick: () => (0, S.clearHistory)(t),
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        className: k.searchClearHistory,
                                        title: G.default.Messages.SEARCH_CLEAR_HISTORY,
                                        "aria-label": G.default.Messages.SEARCH_CLEAR_HISTORY,
                                        children: (0, l.jsx)(x.default, {})
                                    })
                                }
                            })
                        },
                        component: function(e) {
                            let {
                                onSelect: t,
                                onFocus: n,
                                result: s,
                                showFilter: r,
                                searchId: o,
                                renderResult: u,
                                group: d,
                                ...c
                            } = e, f = "", E = a.useMemo(() => (function(e) {
                                let t = b.tokenizeQuery(e).map((e, t, n) => b.filterHasAnswer(e, n[t + 1]) ? e : new p.Token(e.getFullMatch(), p.NON_TOKEN_TYPE));
                                return t
                            })(s.text), [s.text]), h = E.map(e => {
                                let t = e.getFullMatch();
                                if ("" === t.trim()) return null;
                                let n = j.IS_SEARCH_FILTER_TOKEN.test(e.type),
                                    a = j.IS_SEARCH_ANSWER_TOKEN.test(e.type);
                                return f += t, (0, l.jsx)("span", {
                                    className: i({
                                        [k.filter]: n,
                                        [k.answer]: a,
                                        [k.nonText]: !n && !a
                                    }),
                                    children: t
                                }, e.type + t)
                            });
                            return (0, l.jsxs)(_.Clickable, {
                                className: i(k.option, k.history),
                                onClick: t,
                                onFocus: n,
                                ...c,
                                "aria-label": G.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
                                    suggestion: f
                                }),
                                children: [h, (0, l.jsx)(y.default, {
                                    className: k.plusIcon
                                })]
                            })
                        }
                    },
                    [j.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
                        groupTip: () => (0, l.jsx)(_.Tooltip, {
                            text: G.default.Messages.LEARN_MORE,
                            position: "left",
                            children: e => (0, l.jsx)("div", {
                                className: k.searchLearnMore,
                                ...e,
                                children: (0, l.jsx)(_.Anchor, {
                                    href: U.default.getArticleURL(j.HelpdeskArticles.USING_SEARCH),
                                    title: G.default.Messages.LEARN_MORE,
                                    children: (0, l.jsx)(D.default, {})
                                })
                            })
                        }),
                        component: function(e) {
                            var t;
                            let {
                                result: n,
                                onSelect: a,
                                onFocus: s,
                                showFilter: r,
                                searchId: o,
                                ...u
                            } = e, d = b.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
                            return (0, l.jsxs)(_.Clickable, {
                                className: i(k.option, k.searchOption),
                                onClick: a,
                                onFocus: s,
                                ...u,
                                children: [(0, l.jsx)("span", {
                                    className: k.filter,
                                    children: n.text
                                }), (0, l.jsx)("span", {
                                    className: i({
                                        [k.answer]: d
                                    }),
                                    children: d
                                }), (0, l.jsx)(y.default, {
                                    className: k.plusIcon
                                })]
                            })
                        }
                    }
                };
            class z extends a.PureComponent {
                componentDidUpdate(e, t) {
                    let {
                        resultsState: n,
                        totalResults: l
                    } = this.props, {
                        mode: a
                    } = n, {
                        resultsState: s
                    } = e;
                    null != a.filter && null == s.mode.filter && l > 0 ? this.setSelectedIndex(0) : a.type === j.SearchPopoutModes.FILTER_ALL && s.mode.type !== a.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
                }
                setSelectedIndex(e) {
                    this.setState({
                        selectedIndex: e
                    }, () => this.props.onSelectedIndexChanged(e))
                }
                render() {
                    let {
                        selectedIndex: e
                    } = this.state, {
                        navId: t,
                        resultsState: n,
                        totalResults: a
                    } = this.props;
                    return (0, l.jsx)(T.default, {
                        numResults: a,
                        query: n.query,
                        navId: t,
                        hideQuery: !this.shouldShowSearchQuery(),
                        focusedIndex: e,
                        renderCustomResults: this.renderAutocompletes,
                        renderInitialState: this.renderAutocompletes,
                        onHighlightQuery: () => this.focusOption(-1),
                        onSelectQuery: this.performSearch,
                        renderNoResults: () => null
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        dateHint: (0, N.getRandomDateShortcut)(),
                        selectedIndex: -1
                    }, this.handleDateChange = e => {
                        this.setSearchQuery(e.format(j.SEARCH_DATE_FORMAT) + " ", !0)
                    }, this.keepCurrentOptionSelected = (e, t) => {
                        let {
                            selectedIndex: n
                        } = this.state, {
                            resultsState: l,
                            totalResults: a
                        } = this.props, {
                            mode: s,
                            autocompletes: i
                        } = l, {
                            resultsState: r
                        } = e;
                        if (s.type !== r.mode.type) this.setSelectedIndex(-1);
                        else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
                            let e = b.getFlattenedStringArray(r.autocompletes, r.mode.type),
                                n = e[t.selectedIndex - 1],
                                l = b.getFlattenedStringArray(i, s.type),
                                o = l.indexOf(n); - 1 !== o ? this.setSelectedIndex(o) : t.selectedIndex >= a && this.setSelectedIndex(a - 1)
                        }
                    }, this.focusNextOption = () => {
                        this.focusOtherOption(1)
                    }, this.focusPreviousOption = () => {
                        this.focusOtherOption(-1)
                    }, this.focusOtherOption = e => {
                        let {
                            selectedIndex: t
                        } = this.state, {
                            resultsState: n
                        } = this.props;
                        !b.showDatePicker(n.mode.filter) && this.focusOption(t + e)
                    }, this.focusOption = e => {
                        let t = e,
                            {
                                autocompletes: n
                            } = this.props.resultsState,
                            l = this.shouldShowSearchQuery();
                        t < -1 || !l && t < 0 ? t = b.getTotalResults(n) - 1 : l && t >= b.getTotalResults(n) ? t = -1 : !l && t >= b.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
                    }, this.selectOption = e => {
                        let t = e;
                        if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
                        let {
                            autocompletes: n,
                            mode: l
                        } = this.props.resultsState;
                        if (b.showDatePicker(l.filter)) return;
                        let a = b.getFlattenedStringArray(n, l.type);
                        if (t >= a.length) return !1;
                        let s = a[t],
                            i = function(e) {
                                let t = !0,
                                    n = e.trim();
                                return d(N.default).forOwn(e => {
                                    "" !== e.key && null != e.key && n === e.key && (t = !1)
                                }), t
                            }(s);
                        return this.setSearchQuery(s, i), !0
                    }, this.setSearchQuery = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                mode: l,
                                cursorScope: a
                            } = t.props.resultsState,
                            s = 0;
                        null != l.token ? s = l.token.start : (null == a ? void 0 : a.currentToken) != null && (s = a.currentToken.end);
                        let i = null != l.token ? l.token.end : s;
                        P.ComponentDispatch.dispatch(j.ComponentActions.SET_SEARCH_QUERY, {
                            query: e,
                            anchor: s,
                            focus: i,
                            performSearch: n
                        }), t.setSelectedIndex(-1)
                    }, this.shouldShowSearchQuery = () => {
                        let {
                            mode: e
                        } = this.props.resultsState;
                        return e.type !== j.SearchPopoutModes.FILTER && e.type !== j.SearchPopoutModes.EMPTY && !b.showDatePicker(e.filter)
                    }, this.renderDatePicker = () => (0, l.jsxs)("div", {
                        className: k.datePicker,
                        children: [(0, l.jsx)(B, {
                            onSelect: this.handleDateChange,
                            maxDate: f().local(),
                            minDate: w
                        }), (0, l.jsxs)("div", {
                            className: k.datePickerHint,
                            children: [(0, l.jsxs)("span", {
                                className: k.hint,
                                children: [G.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
                            }), (0, l.jsx)(_.Clickable, {
                                tag: "span",
                                className: k.hintValue,
                                onClick: this.handleHintClick,
                                children: this.state.dateHint
                            })]
                        })]
                    }), this.handleHintClick = () => {
                        this.setSearchQuery(this.state.dateHint, !0)
                    }, this.performSearch = () => {
                        P.ComponentDispatch.dispatch(j.ComponentActions.PERFORM_SEARCH)
                    }, this.renderAutocompletes = () => {
                        let {
                            selectedIndex: e
                        } = this.state, {
                            navId: t,
                            searchId: n
                        } = this.props, {
                            autocompletes: a,
                            mode: s
                        } = this.props.resultsState;
                        if (b.showDatePicker(s.filter)) return this.renderDatePicker();
                        let i = -1;
                        return a.map(a => {
                            var r, o, u;
                            let d, c;
                            if (null == a || 0 === a.results.length) return null;
                            let f = null !== (r = Q[a.group]) && void 0 !== r ? r : {};
                            null != f.titleText && (c = "".concat(a.group, "-header"), d = (0, l.jsx)("div", {
                                id: c,
                                className: k.header,
                                children: f.titleText()
                            }));
                            let E = null !== (o = f.groupTip) && void 0 !== o ? o : null,
                                h = null != E ? (0, l.jsx)(E, {
                                    searchId: n
                                }) : null,
                                _ = null !== (u = f.component) && void 0 !== u ? u : Y,
                                S = s.type === j.SearchPopoutModes.FILTER_ALL;
                            return (0, l.jsxs)("ul", {
                                role: "group",
                                "aria-labelledby": c,
                                className: k.resultsGroup,
                                children: [d, h, a.results.map(s => {
                                    var r, o;
                                    if (null == s || null == a) return null;
                                    i += 1;
                                    let u = e === i;
                                    return (0, l.jsx)(_, {
                                        searchId: n,
                                        group: null !== (r = s.group) && void 0 !== r ? r : a.group,
                                        result: s,
                                        showFilter: S,
                                        onSelect: this.selectOption.bind(null, i),
                                        onFocus: this.focusOption.bind(null, i),
                                        ...(0, T.getListboxOptionProps)(t, i, u)
                                    }, "".concat(a.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
                                })]
                            }, a.group)
                        })
                    }
                }
            }
            var W = a.forwardRef((e, t) => {
                let [n, a, s] = (0, h.useStateFromStoresArray)([O.default, M.default, R.default], () => {
                    let e = O.default.getGuildId(),
                        t = M.default.getChannelId(),
                        n = null != e ? e : t;
                    o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
                    let l = R.default.getState(n),
                        a = b.getTotalResults(l.autocompletes);
                    return [n, l, a]
                });
                return (0, l.jsx)(z, {
                    ...e,
                    searchId: n,
                    resultsState: a,
                    totalResults: s,
                    ref: t
                })
            })