            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            }), n("881410"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("917351"),
                o = n.n(r),
                u = n("522632"),
                d = n("458960"),
                c = n("394846"),
                E = n("446674"),
                f = n("77078"),
                _ = n("913144"),
                h = n("340626"),
                C = n("444949"),
                T = n("139245"),
                I = n("69927"),
                S = n("444497"),
                N = n("349682"),
                A = n("393414"),
                p = n("970366"),
                m = n("915639"),
                g = n("161778"),
                R = n("350522"),
                O = n("926787"),
                L = n("305961"),
                v = n("251013"),
                M = n("664336"),
                P = n("794818"),
                D = n("574921"),
                y = n("197231"),
                x = n("283167"),
                b = n("868246"),
                U = n("276580"),
                G = n("586086"),
                j = n("338638"),
                k = n("311092"),
                w = n("447621"),
                F = n("49111"),
                B = n("782340"),
                H = n("309633"),
                V = n("479999"),
                Y = n("183127");
            class W extends s.PureComponent {
                componentDidMount() {
                    var e, t, n;
                    let {
                        isFetching: a,
                        guilds: {
                            gamesYouPlay: s,
                            featured: i
                        },
                        searchRoute: l,
                        currentHomepageCategoryId: r,
                        mostRecentQuery: o
                    } = this.props;
                    if ((0, C.fetchActivityStatistics)(), (0, x.maybeFetchGuildDiscoveryCategories)(), null == O.default.getSearchIndex() && (0, h.createAlgoliaIndex)(), _.default.wait(() => {
                            (0, T.markView)(F.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
                        }), !a && 0 === o.length && P.trackDiscoveryViewed({
                            loadId: this.loadId,
                            gamesYouPlayGuilds: s.guilds,
                            allGuilds: i.guilds,
                            categoryId: r
                        }), null != l) {
                        let {
                            query: e,
                            offset: t,
                            limit: n,
                            preferredLocale: a,
                            categoryId: s
                        } = u.parse(l);
                        (0, h.doAlgoliaSearch)(e, {
                            categoryId: parseInt(s, 10),
                            preferredLocale: a,
                            offset: parseInt(t, 10),
                            filters: {
                                approximate_member_count: P.MINIMUM_MEMBER_COUNT
                            },
                            length: parseInt(n, 10)
                        })
                    } else null != r && r !== w.DISCOVERY_ALL_CATEGORIES_ID && _.default.wait(() => (0, h.selectCategory)(r));
                    let d = (0, A.getHistory)().location,
                        c = null !== (t = null === (e = d.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
                    c > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
                        to: c
                    })), (0, p.trackAppUIViewed)("guild_discovery")
                }
                componentDidUpdate(e) {
                    let {
                        guilds: {
                            gamesYouPlay: t,
                            featured: n
                        },
                        isFetching: a,
                        mostRecentQuery: s,
                        currentHomepageCategoryId: i,
                        currentCategoryId: l
                    } = this.props;
                    if (e.isFetching && !a && P.trackDiscoveryViewed({
                            loadId: this.loadId,
                            gamesYouPlayGuilds: t.guilds,
                            allGuilds: n.guilds,
                            categoryId: i
                        }), e.currentCategoryId !== l) {
                        var r;
                        null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
                            to: 0
                        })
                    }
                    e.currentCategoryId !== l && P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && i !== l && (0, h.selectCategory)(i)
                }
                componentWillUnmount() {
                    let {
                        currentCategoryId: e,
                        recommendationsLoadId: t,
                        recommendationsGuilds: n
                    } = this.props;
                    e === w.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && P.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
                }
                getOrderedGuildIdsSeen(e) {
                    return e.filter(e => this._guildIdsSeen.has(e))
                }
                renderGamesYouPlay() {
                    let {
                        guilds: e,
                        mightHaveGamesYouPlay: t,
                        theme: n,
                        userGuilds: s
                    } = this.props, i = Object.keys(s), l = e[F.GuildDiscoverySections.GAMES_YOU_PLAY];
                    l.guilds = l.guilds.filter(e => !i.includes(e.id));
                    let {
                        loadingGuildId: r
                    } = this.state;
                    return t ? (0, a.jsx)(U.default, {
                        loadId: this.loadId,
                        title: B.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
                        guildsData: l,
                        loadingGuildId: r,
                        analyticsContext: P.AnalyticsContexts.RECOMMENDED,
                        onViewGuild: this.handleViewGuild,
                        onGuildCardSeen: this.handleGuildCardSeen,
                        fetchGuilds: h.fetchGamesYouPlayGuilds,
                        theme: n
                    }) : null
                }
                renderSearchBar() {
                    var e, t;
                    let {
                        mostRecentQuery: n,
                        guilds: {
                            search: s
                        },
                        defaultLanguage: i,
                        isFetchingSearch: l,
                        currentCategoryId: r,
                        categories: o,
                        currentCategoryName: u
                    } = this.props;
                    D.DiscoveryTagsExperiment.trackExposure({
                        location: "54961b_1"
                    });
                    let {
                        shouldDisplayRecommendedSearchTags: d
                    } = D.DiscoveryTagsExperiment.getCurrentConfig({
                        location: "54961b_2"
                    }, {
                        autoTrackExposure: !1
                    }), c = d ? r === w.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
                        categoryName: u
                    }) : r === w.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                        categoryName: u
                    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
                    return (0, a.jsx)(j.default, {
                        loadId: this.loadId,
                        searchResults: E,
                        mostRecentQuery: n,
                        isFetchingSearch: l,
                        defaultLanguage: i,
                        placeholder: c,
                        currentCategoryId: r,
                        categories: o
                    })
                }
                renderSearchResults() {
                    var e, t;
                    let {
                        mostRecentQuery: n,
                        guilds: {
                            search: s
                        },
                        availableLanguages: i,
                        defaultLanguage: l,
                        isFetchingSearch: r,
                        theme: o,
                        currentCategoryId: u,
                        currentCategoryName: d
                    } = this.props, {
                        loadingGuildId: c
                    } = this.state, E = u === w.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                        categoryName: d
                    }), f = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
                    return (0, a.jsx)(G.default, {
                        loadId: this.loadId,
                        availableLanguages: i,
                        defaultLanguage: l,
                        placeholder: E,
                        isFetchingSearch: r,
                        searchResults: f,
                        mostRecentQuery: n,
                        loadingGuildId: c,
                        currentCategoryId: u,
                        currentCategoryName: d,
                        scroller: this._scroller.current,
                        theme: o,
                        onViewGuild: this.handleViewGuild,
                        onGuildCardSeen: this.handleGuildCardSeen,
                        onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.SEARCH)
                    })
                }
                renderRecommendedGuildsSection() {
                    let {
                        guilds: e,
                        theme: t
                    } = this.props, {
                        loadingGuildId: n
                    } = this.state;
                    return (0, a.jsx)(U.default, {
                        loadId: this.loadId,
                        title: B.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
                        guildsData: e.featured,
                        analyticsContext: P.AnalyticsContexts.POPULAR,
                        onViewGuild: this.handleViewGuild,
                        onGuildCardSeen: this.handleGuildCardSeen,
                        fetchGuilds: () => (0, h.fetchFeaturedOrPopularGuilds)(0, 30),
                        loadingGuildId: n,
                        theme: t,
                        onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
                    })
                }
                renderPopularGuildsSection() {
                    let {
                        guilds: e,
                        theme: t,
                        currentCategoryId: n
                    } = this.props, {
                        loadingGuildId: s
                    } = this.state;
                    return (0, a.jsx)(U.default, {
                        loadId: this.loadId,
                        title: B.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
                        guildsData: e[n],
                        loadingGuildId: s,
                        analyticsContext: P.AnalyticsContexts.POPULAR,
                        onViewGuild: this.handleViewGuild,
                        onGuildCardSeen: this.handleGuildCardSeen,
                        fetchGuilds: () => (0, h.fetchPopularGuildsForCategory)(n),
                        currentCategoryId: n,
                        theme: t,
                        onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
                    })
                }
                render() {
                    var e, t;
                    let {
                        currentCategoryName: n,
                        mostRecentQuery: i,
                        currentCategoryId: r,
                        guilds: u
                    } = this.props, d = i.length > 0;
                    D.DiscoveryTagsExperiment.trackExposure({
                        location: "54961b_3"
                    });
                    let {
                        shouldDisplayRecommendedSearchTags: E
                    } = D.DiscoveryTagsExperiment.getCurrentConfig({
                        location: "54961b_4"
                    }, {
                        autoTrackExposure: !1
                    }), _ = r === w.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[F.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
                    if (r === w.DISCORD_HUB_ID) return (0, a.jsx)(N.default, {
                        loadId: this.loadId
                    });
                    let h = r === w.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_HOME_TITLE : B.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                        categoryName: n
                    });
                    return (0, a.jsxs)("div", {
                        className: H.pageWrapper,
                        children: [(0, a.jsx)(I.AppPageTitle, {
                            subsection: d ? i : void 0,
                            location: h
                        }), (0, a.jsx)("div", {
                            className: l(H.dragRegion, H.pageHeaderDrag, {
                                [H.searchPageDrag]: d
                            })
                        }), c.isMobile && (0, a.jsx)(M.default, {
                            children: (0, a.jsx)(s.Fragment, {})
                        }), (0, a.jsx)(f.AdvancedScrollerAuto, {
                            className: H.scroller,
                            ref: this._scroller,
                            onScroll: this.handleScroll,
                            children: (0, a.jsx)("div", {
                                className: l(H.viewWrapper, {
                                    [H.searchPage]: d
                                }),
                                children: d ? this.renderSearchResults() : (0, a.jsxs)(f.HeadingLevel, {
                                    forceLevel: 1,
                                    component: (0, a.jsxs)("div", {
                                        className: H.searchHeader,
                                        children: [(0, a.jsx)("img", {
                                            alt: "",
                                            className: H.headerImage,
                                            src: Y
                                        }), (0, a.jsx)("div", {
                                            className: H.headerContentWrapper,
                                            children: (0, a.jsxs)("div", {
                                                className: H.headerContent,
                                                children: [(0, a.jsx)(f.Heading, {
                                                    variant: "heading-xl/semibold",
                                                    className: H.searchTitle,
                                                    children: r === w.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_HOME_TITLE : B.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                                                        categoryName: n
                                                    })
                                                }), (0, a.jsx)(f.Text, {
                                                    variant: "text-md/normal",
                                                    className: H.searchSubtitle,
                                                    children: r === w.DISCOVERY_ALL_CATEGORIES_ID && B.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                                                }), this.renderSearchBar(), E && (0, a.jsx)(k.DiscoveryTags, {
                                                    hideOverflow: !0,
                                                    section: P.AnalyticsContexts.HEADER,
                                                    className: H.headerTagContainer,
                                                    discoveryTagStyle: k.DiscoveryTagStyle.LIGHT,
                                                    onTagClick: e => this.handleTagSearch(e, void 0, P.AnalyticsContexts.HEADER),
                                                    tags: o.chain(_).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                                                })]
                                            })
                                        })]
                                    }),
                                    children: [(0, a.jsx)("div", {
                                        className: H.featuredBody,
                                        children: r === w.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
                                    }), (0, a.jsxs)("div", {
                                        className: H.footer,
                                        children: [(0, a.jsx)("img", {
                                            alt: "",
                                            src: V,
                                            className: H.footerImage
                                        }), (0, a.jsx)(f.Heading, {
                                            variant: "heading-md/semibold",
                                            children: B.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
                                        }), (0, a.jsx)(f.Button, {
                                            look: f.Button.Looks.LINK,
                                            color: f.Button.Colors.LINK,
                                            size: f.Button.Sizes.MIN,
                                            onClick: this.scrollToTop,
                                            children: B.default.Messages.GUILD_DISCOVERY_FOOTER_BODY
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._scroller = s.createRef(), this._guildIdsSeen = new Set, this.loadId = (0, y.makeAnalyticsID)(), this.state = {
                        animatedValue: new d.default.Value(0),
                        loadingGuildId: null
                    }, this.scrollToTop = () => {
                        null != this._scroller.current && this._scroller.current.scrollTo({
                            to: 0
                        })
                    }, this.handleScroll = () => {
                        var e, t;
                        let {
                            animatedValue: n
                        } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
                        n.setValue(Math.min(1, a / 200))
                    }, this.handleViewGuild = async (e, t, n, a) => {
                        var s, i;
                        let {
                            currentCategoryId: l
                        } = this.props, {
                            loadingGuildId: r
                        } = this.state;
                        if (e === r) return;
                        let o = null !== (i = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== i ? i : 0,
                            {
                                location: u
                            } = (0, A.getHistory)();
                        (0, A.replaceWith)({
                            ...u,
                            state: o
                        }), this.setState({
                            loadingGuildId: e
                        });
                        let d = l !== w.DISCOVERY_ALL_CATEGORIES_ID ? l : null;
                        try {
                            await P.viewGuild({
                                loadId: null != a ? a : this.loadId,
                                guildId: e,
                                index: t,
                                analyticsContext: n,
                                categoryId: d
                            })
                        } catch (e) {
                            this.setState({
                                loadingGuildId: null
                            })
                        }
                    }, this.handleGuildCardSeen = e => {
                        this._guildIdsSeen.add(e)
                    }, this.handleTagSearch = (e, t, n) => {
                        let {
                            currentCategoryId: a,
                            defaultLanguage: s
                        } = this.props;
                        if (null == a) return;
                        let i = {
                            approximate_member_count: P.MINIMUM_MEMBER_COUNT
                        };
                        (0, h.getSearchResultsCount)(e, i), (0, h.doAlgoliaSearch)(e, {
                            filters: i,
                            categoryId: a,
                            preferredLocale: s.code,
                            offset: 0,
                            length: G.MAX_GUILDS_PER_PAGE,
                            tag: !0
                        }), P.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
                    }
                }
            }
            let K = E.default.connectStores([g.default, m.default, v.default, R.default, O.default, b.default, L.default], () => {
                var e;
                let t = w.LANGUAGE_OPTIONS,
                    n = m.default.locale,
                    a = null !== (e = o.find(t, {
                        code: n
                    })) && void 0 !== e ? e : t[0],
                    s = v.default.applicationStatistics,
                    i = Object.keys(s),
                    l = R.default.hasConsented(F.Consents.PERSONALIZATION) && i.length > 0,
                    r = O.default.getCurrentCategoryId(),
                    u = O.default.getCurrentHomepageCategoryId();
                return {
                    isFetching: O.default.isFetching(),
                    isFetchingSearch: O.default.isFetchingSearch(),
                    guilds: O.default.getDiscoverableGuilds(),
                    mostRecentQuery: O.default.getMostRecentQuery(),
                    currentCategoryId: r,
                    currentHomepageCategoryId: u,
                    currentCategoryName: b.default.getCategoryName(r),
                    categories: b.default.getDiscoveryCategories(),
                    userGuilds: L.default.getGuilds(),
                    theme: g.default.theme,
                    mightHaveGamesYouPlay: l,
                    availableLanguages: t,
                    defaultLanguage: a
                }
            })(W);

            function z(e) {
                let {
                    fetching: t,
                    loadId: n,
                    recommendedGuilds: s
                } = (0, E.useStateFromStoresObject)([S.default], () => ({
                    recommendedGuilds: S.default.getRecommendedGuilds(),
                    loadId: S.default.getLoadId(),
                    fetching: S.default.isFetching()
                }));
                return (0, a.jsx)(K, {
                    ...e,
                    fetchingRecommendations: t,
                    usingGameRecommendations: !1,
                    recommendationsGuilds: s,
                    recommendationsLoadId: n
                })
            }