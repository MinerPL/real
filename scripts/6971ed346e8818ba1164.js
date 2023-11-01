(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["97429"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        247431: function(e, t, n) {
            "use strict";
            e.exports = n.p + "12c09c71eb271a47bcab.svg"
        },
        529115: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea67b1321e3d4154e476.svg"
        },
        599964: function(e, t, n) {
            "use strict";
            e.exports = n.p + "87ce0c8ff87b3951af60.png"
        },
        978985: function(e, t, n) {
            "use strict";
            e.exports = n.p + "02705764250e5f57361c.svg"
        },
        655361: function(e, t, n) {
            "use strict";
            e.exports = n.p + "77da9836b1bc41486aeb.svg"
        },
        64847: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c038718481fa8dc048db.svg"
        },
        675384: function(e, t, n) {
            "use strict";
            e.exports = n.p + "796df921d2df9b74d231.svg"
        },
        842397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "25fe25ac4c0fa2db7287.png"
        },
        856081: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3610f6f27aba39c71911.png"
        },
        203450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a4fc2040888d2d0a25bf.png"
        },
        16759: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0e84d192ba4f48d8b1e4.png"
        },
        672453: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1bf3560d5f044c945b91.png"
        },
        110209: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b39307de7b7798615bf4.png"
        },
        210318: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b0b17713c80d9d10e884.png"
        },
        923699: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6837714c5000d0735b6b.png"
        },
        106897: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d7b5187a25e8797b3fcb.svg"
        },
        280220: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f28bee10efad470960c.svg"
        },
        156807: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3d880387e95767d8fe6a.svg"
        },
        83310: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bb9a11c6c6eeca585c1d.svg"
        },
        287112: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b3f7e22e48bfd5292636.svg"
        },
        446963: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f129970a62476663733f.svg"
        },
        423739: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3d0eb2e70e53c6495c6f.svg"
        },
        22079: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ec848654c14e218d5fa2.svg"
        },
        655279: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c586aac99de98cfb010d.svg"
        },
        481292: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4bb5bd02b0b61d8c8cca.svg"
        },
        636974: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openModal: function() {
                    return a
                },
                updateQuery: function() {
                    return s
                },
                inviteChannel: function() {
                    return i
                },
                inviteUser: function() {
                    return r
                }
            });
            var l = n("913144");

            function a(e, t) {
                return new Promise(n => {
                    setTimeout(() => {
                        l.default.dispatch({
                            type: "ACTIVITY_INVITE_MODAL_OPEN",
                            activity: e,
                            isPrivate: t,
                            resolve: n
                        })
                    }, 0)
                })
            }

            function s(e) {
                l.default.dispatch({
                    type: "ACTIVITY_INVITE_MODAL_QUERY",
                    query: e
                })
            }

            function i(e) {
                l.default.dispatch({
                    type: "ACTIVITY_INVITE_MODAL_SEND",
                    channelId: e
                })
            }

            function r(e) {
                l.default.dispatch({
                    type: "ACTIVITY_INVITE_MODAL_SEND",
                    userId: e
                })
            }
        },
        340626: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createAlgoliaIndex: function() {
                    return p
                },
                doAlgoliaSearch: function() {
                    return function e(t, n) {
                        let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            {
                                categoryId: a = h.DISCOVERY_ALL_CATEGORIES_ID,
                                preferredLocale: s,
                                offset: c,
                                length: C,
                                tag: E
                            } = n,
                            p = d.default.getSearchIndex();
                        if (null == p) return;
                        l && ! function(e) {
                            let {
                                query: t,
                                preferredLocale: n,
                                offset: l,
                                limit: a,
                                categoryId: s,
                                tag: r
                            } = e, o = (0, u.getHistory)(), d = i.stringify({
                                query: t,
                                offset: l,
                                limit: a,
                                preferredLocale: n,
                                categoryId: s,
                                tag: r
                            }), c = o.location.search, h = null != c && c.length > 0 && c.startsWith("?"), C = !h || c.startsWith("?") && c.split("?")[1] !== d;
                            C && (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY, {
                                search: d
                            })
                        }({
                            query: t,
                            preferredLocale: s,
                            offset: c,
                            limit: C,
                            categoryId: a,
                            tag: E
                        }), o.default.dispatch({
                            type: "GUILD_DISCOVERY_SEARCH_FETCH_START",
                            section: f.GuildDiscoverySections.SEARCH,
                            query: t,
                            categoryId: a
                        });
                        let g = Object.assign({}, m, n.filters),
                            S = Object.keys(g),
                            _ = S.map(e => "".concat(e).concat(g[e]));
                        a !== h.DISCOVERY_ALL_CATEGORIES_ID && _.push("(primary_category_id=".concat(a, " OR categories.id=").concat(a, ")"));
                        let I = _.join(" AND ");
                        try {
                            let i = p.search(t, {
                                    filters: I,
                                    optionalFilters: ["preferred_locale: ".concat(s)],
                                    length: C,
                                    offset: c,
                                    restrictSearchableAttributes: ["name", "description", "keywords", "categories.name", "categories.name_localizations.".concat(s), "primary_category.name", "primary_category.name_localizations.".concat(s), "vanity_url_code"]
                                }),
                                u = r.default.get({
                                    url: f.Endpoints.GUILD_DISCOVERY_VALID_TERM,
                                    query: {
                                        term: t
                                    },
                                    oldFormErrors: !0
                                });
                            Promise.all([i, u]).then(e => {
                                let [{
                                    hits: n,
                                    nbHits: l
                                }, {
                                    body: {
                                        valid: s
                                    }
                                }] = e;
                                o.default.dispatch({
                                    type: "GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS",
                                    section: f.GuildDiscoverySections.SEARCH,
                                    query: t,
                                    categoryId: a,
                                    guilds: s ? [...n.map(e => ({
                                        ...e,
                                        id: e.objectID
                                    }))] : [],
                                    offset: c,
                                    limit: C,
                                    total: s ? Math.min(l, h.MAX_ALGOLIA_PAGINATOR_RESULTS) : 0
                                })
                            }).catch(s => {
                                s.body.retry_after > 0 && p === d.default.getSearchIndex() ? setTimeout(() => {
                                    e(t, n, l)
                                }, 1e3 * s.body.retry_after) : o.default.dispatch({
                                    type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
                                    section: f.GuildDiscoverySections.SEARCH,
                                    categoryId: a,
                                    query: t
                                })
                            })
                        } catch (e) {
                            o.default.dispatch({
                                type: "GUILD_DISCOVERY_SEARCH_FETCH_FAILURE",
                                section: f.GuildDiscoverySections.SEARCH,
                                categoryId: a,
                                query: t
                            })
                        }
                    }
                },
                getSearchResultsCount: function() {
                    return g
                },
                fetchPopularGuildsForCategory: function() {
                    return S
                },
                fetchFeaturedOrPopularGuilds: function() {
                    return _
                },
                fetchGamesYouPlayGuilds: function() {
                    return I
                },
                clearSearch: function() {
                    return N
                },
                selectCategory: function() {
                    return T
                }
            });
            var l = n("542455"),
                a = n("472086"),
                s = n.n(a),
                i = n("522632"),
                r = n("872717"),
                o = n("913144"),
                u = n("393414"),
                d = n("926787"),
                c = n("251013"),
                f = n("49111"),
                h = n("447621");
            let C = window.GLOBAL_ENV.ALGOLIA_KEY,
                E = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "prod_discoverable_guilds" : "staging" === window.GLOBAL_ENV.PROJECT_ENV ? "stg_discoverable_guilds" : "dev_discoverable_guilds",
                m = {
                    "auto_removed:": !1,
                    approximate_presence_count: "> 0",
                    approximate_member_count: "> 0"
                };

            function p() {
                if (null == C) return;
                let e = s("NKTZZ4AIZU", C, {
                        responsesCache: (0, l.createNullCache)()
                    }),
                    t = e.initIndex(E);
                o.default.wait(() => o.default.dispatch({
                    type: "GUILD_DISCOVERY_SEARCH_INIT",
                    index: t
                }))
            }

            function g(e, t) {
                let n = d.default.getSearchIndex();
                if (null == n) return;
                let l = Object.assign({}, m, t),
                    a = Object.keys(l),
                    s = a.map(e => "".concat(e).concat(l[e]));
                try {
                    let t = n.search(e, {
                            filters: s.join(" AND "),
                            facets: ["categories.id"]
                        }),
                        l = r.default.get({
                            url: f.Endpoints.GUILD_DISCOVERY_VALID_TERM,
                            query: {
                                term: e
                            },
                            oldFormErrors: !0
                        });
                    Promise.all([t, l]).then(t => {
                        let [{
                            nbHits: n,
                            facets: l
                        }, {
                            body: {
                                valid: a
                            }
                        }] = t;
                        o.default.dispatch({
                            type: "GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS",
                            query: e,
                            nbHits: a ? n : 0,
                            facets: a ? l : void 0
                        })
                    })
                } catch (t) {
                    o.default.dispatch({
                        type: "GUILD_DISCOVERY_SEARCH_COUNTS_FAIL",
                        query: e
                    })
                }
            }
            async function S(e) {
                o.default.dispatch({
                    type: "GUILD_DISCOVERY_POPULAR_FETCH_START",
                    categoryId: e
                });
                try {
                    let t = await r.default.get({
                            url: f.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                categories: [e]
                            }),
                            oldFormErrors: !0
                        }),
                        {
                            guilds: n
                        } = t.body;
                    o.default.dispatch({
                        type: "GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS",
                        categoryId: e,
                        guilds: n
                    })
                } catch (t) {
                    o.default.dispatch({
                        type: "GUILD_DISCOVERY_POPULAR_FETCH_FAILURE",
                        categoryId: e
                    })
                }
            }
            async function _(e, t) {
                o.default.dispatch({
                    type: "GUILD_DISCOVERY_FETCH_START",
                    section: f.GuildDiscoverySections.FEATURED
                });
                try {
                    let n = await r.default.get({
                        url: f.Endpoints.GUILD_DISCOVERY,
                        query: i.stringify({
                            offset: e,
                            limit: t
                        }),
                        oldFormErrors: !0
                    });
                    A(n.body, f.GuildDiscoverySections.FEATURED)
                } catch (e) {
                    o.default.dispatch({
                        type: "GUILD_DISCOVERY_FETCH_FAILURE",
                        section: f.GuildDiscoverySections.FEATURED
                    })
                }
            }
            async function I() {
                let e = c.default.applicationStatistics,
                    t = Object.keys(e);
                o.default.dispatch({
                    type: "GUILD_DISCOVERY_FETCH_START",
                    section: f.GuildDiscoverySections.GAMES_YOU_PLAY
                });
                try {
                    let e = await r.default.get({
                        url: f.Endpoints.GUILD_DISCOVERY,
                        query: i.stringify({
                            application_ids: t
                        }),
                        oldFormErrors: !0
                    });
                    A(e.body, f.GuildDiscoverySections.GAMES_YOU_PLAY)
                } catch (e) {
                    o.default.dispatch({
                        type: "GUILD_DISCOVERY_FETCH_FAILURE",
                        section: f.GuildDiscoverySections.GAMES_YOU_PLAY
                    })
                }
            }

            function N() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && (0, u.transitionTo)(f.Routes.GUILD_DISCOVERY), o.default.dispatch({
                    type: "GUILD_DISCOVERY_CLEAR_SEARCH"
                })
            }

            function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                o.default.dispatch({
                    type: "GUILD_DISCOVERY_SELECT_CATEGORY",
                    categoryId: e,
                    isHomepage: t
                })
            }

            function A(e, t) {
                let {
                    offset: n,
                    limit: l,
                    guilds: a,
                    total: s
                } = e;
                o.default.dispatch({
                    type: "GUILD_DISCOVERY_FETCH_SUCCESS",
                    section: t,
                    guilds: a,
                    offset: n,
                    limit: l,
                    total: s
                })
            }
        },
        412026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("984444"),
                u = n("456799"),
                d = n("15318"),
                c = n("146782"),
                f = n("77078"),
                h = n("161778"),
                C = n("945956"),
                E = n("704926"),
                m = n("687609"),
                p = n("331306"),
                g = n("49111"),
                S = n("115022");
            let _ = {
                    [g.RTCConnectionQuality.UNKNOWN]: f.Tooltip.Colors.BLACK,
                    [g.RTCConnectionQuality.BAD]: f.Tooltip.Colors.RED,
                    [g.RTCConnectionQuality.AVERAGE]: f.Tooltip.Colors.YELLOW,
                    [g.RTCConnectionQuality.FINE]: f.Tooltip.Colors.GREEN
                },
                I = {
                    [g.ConnectionStatus.CONNECTED]: S.rtcConnectionStatusConnected,
                    [g.ConnectionStatus.CONNECTING]: S.rtcConnectionStatusConnecting,
                    [g.ConnectionStatus.ERROR]: S.rtcConnectionStatusError
                },
                N = {
                    [g.RTCConnectionQuality.FINE]: S.rtcConnectionQualityFine,
                    [g.RTCConnectionQuality.AVERAGE]: S.rtcConnectionQualityAverage,
                    [g.RTCConnectionQuality.BAD]: S.rtcConnectionQualityBad,
                    [g.RTCConnectionQuality.UNKNOWN]: null
                },
                T = r.default.connectStores([C.default, h.default], () => ({
                    theme: h.default.theme,
                    connectionState: C.default.getState(),
                    hostname: C.default.getHostname(),
                    averagePing: C.default.getAveragePing(),
                    lastPing: C.default.getLastPing(),
                    outboundLossRate: C.default.getOutboundLossRate(),
                    pings: C.default.getPings(),
                    isSecureFramesEnabled: C.default.isSecureFramesEnabled()
                }))(p.default);
            class A extends a.PureComponent {
                renderPopoutTarget(e) {
                    return (0, l.jsx)(f.Popout, {
                        renderPopout: this.renderPopout,
                        position: "top",
                        children: e
                    })
                }
                renderStatus() {
                    let {
                        statusTextClassName: e,
                        hasVideo: t,
                        state: n
                    } = this.props, {
                        connectionStatus: a,
                        connectionStatusText: s
                    } = m.default.getStatus(n, t);
                    return this.renderPopoutTarget(t => {
                        let {
                            onClick: n
                        } = t;
                        return (0, l.jsx)(f.Button, {
                            look: f.Button.Looks.BLANK,
                            size: f.Button.Sizes.NONE,
                            className: i(e, I[a]),
                            onClick: n,
                            children: s
                        })
                    })
                }
                render() {
                    let e;
                    let {
                        quality: t,
                        smallPing: n,
                        lastPing: a,
                        state: s,
                        className: r,
                        children: o
                    } = this.props;
                    return s === g.RTCConnectionStates.RTC_CONNECTED && (e = (0, l.jsx)(f.Tooltip, {
                        text: t !== g.RTCConnectionQuality.UNKNOWN && null != a ? "".concat(a.toFixed(0), " ms") : null,
                        color: _[t],
                        children: e => (0, l.jsx)(L, {
                            quality: t,
                            smallPing: n,
                            ...e
                        })
                    })), (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: i(S.rtcConnectionStatus, N[t], r),
                            children: [e, (0, l.jsx)("div", {
                                className: S.labelWrapper,
                                children: this.renderStatus()
                            })]
                        }), o]
                    })
                }
                constructor(...e) {
                    super(...e), this.renderPopout = e => (0, l.jsx)(T, {
                        ...e
                    })
                }
            }

            function L(e) {
                let {
                    quality: t,
                    smallPing: n,
                    ...a
                } = e, s = (0, f.useRedesignIconContext)().enabled;
                if (!s) return (0, l.jsx)(E.default, {
                    className: i(S.ping, {
                        [S.smallPing]: n
                    }),
                    foreground: S.pingForeground
                });
                {
                    let e = {
                        [g.RTCConnectionQuality.FINE]: d.ConnectionFineIcon,
                        [g.RTCConnectionQuality.AVERAGE]: o.ConnectionAverageIcon,
                        [g.RTCConnectionQuality.BAD]: u.ConnectionBadIcon,
                        [g.RTCConnectionQuality.UNKNOWN]: c.ConnectionUnknownIcon
                    } [t];
                    return (0, l.jsx)(e, {
                        className: i(S.ping, {
                            [S.smallPing]: n
                        }),
                        ...a
                    })
                }
            }
            var R = A
        },
        570687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CloseButton: function() {
                    return k
                },
                LinkButton: function() {
                    return K
                },
                default: function() {
                    return z
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("90915"),
                d = n("974667"),
                c = n("394846"),
                f = n("446674"),
                h = n("77078"),
                C = n("450911"),
                E = n("272030"),
                m = n("502651"),
                p = n("139375"),
                g = n("843962"),
                S = n("679653"),
                _ = n("379881"),
                I = n("262973"),
                N = n("106435"),
                T = n("373469"),
                A = n("824563"),
                L = n("660478"),
                R = n("191542"),
                x = n("282109"),
                v = n("697218"),
                O = n("79798"),
                M = n("98292"),
                y = n("376069"),
                D = n("379793"),
                b = n("945330"),
                G = n("671434"),
                j = n("50885"),
                U = n("943722"),
                P = n("254167"),
                F = n("49111"),
                B = n("782340"),
                w = n("244087");
            let V = j.default.getEnableHardwareAcceleration() ? h.AnimatedAvatar : h.Avatar,
                H = {
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    }
                },
                k = e => (0, l.jsx)(h.Clickable, {
                    className: w.closeButton,
                    ...e,
                    focusProps: {
                        offset: {
                            top: -2,
                            bottom: -2,
                            left: -2,
                            right: 6
                        }
                    },
                    children: (0, l.jsx)(b.default, {
                        className: w.closeIcon
                    })
                }),
                Y = () => (0, l.jsx)(G.default, {
                    className: w.favoriteIcon
                });
            class K extends a.Component {
                render() {
                    let {
                        route: e,
                        selected: t,
                        icon: n,
                        iconClassName: a,
                        interactiveClassName: s,
                        text: r,
                        children: o,
                        locationState: d,
                        onClick: f,
                        className: C,
                        role: E,
                        "aria-posinset": m,
                        "aria-setsize": p,
                        ...g
                    } = this.props;
                    return (0, l.jsx)(D.default, {
                        className: i(w.channel, {
                            [w.fullWidth]: c.isMobile
                        }, C),
                        onClick: f,
                        role: E,
                        focusProps: {
                            within: !0,
                            ...H
                        },
                        "aria-posinset": m,
                        "aria-setsize": p,
                        children: (0, l.jsx)(h.Interactive, {
                            as: "div",
                            selected: t,
                            className: i(s, w.interactive, w.linkButton, {
                                [w.interactiveSelected]: t
                            }),
                            children: (0, l.jsxs)(u.Link, {
                                to: {
                                    pathname: e,
                                    state: d
                                },
                                className: w.link,
                                ...g,
                                children: [(0, l.jsx)(y.default, {
                                    selected: t,
                                    muted: !1,
                                    avatar: (0, l.jsx)(n, {
                                        className: i(w.linkButtonIcon, a)
                                    }),
                                    name: r,
                                    innerClassName: w.avatarWithText
                                }), o]
                            })
                        })
                    })
                }
            }

            function W(e) {
                let {
                    channel: t,
                    selected: s = !1,
                    user: r,
                    activities: c,
                    applicationStream: T,
                    isTyping: A,
                    status: R,
                    isMobile: v,
                    "aria-posinset": b,
                    "aria-setsize": G
                } = e, [j, K] = a.useState(!1), W = a.useRef(null), z = a.useRef(null), {
                    avatarSrc: Z,
                    avatarDecorationSrc: Q,
                    eventHandlers: X
                } = (0, N.default)({
                    user: r,
                    size: h.AvatarSizes.SIZE_32,
                    animateOnHover: !(s || j)
                }), q = (0, f.useStateFromStores)([x.default], () => x.default.isChannelMuted(t.getGuildId(), t.id)), J = (0, f.useStateFromStores)([L.default], () => L.default.getMentionCount(t.id) > 0), $ = (0, S.default)(t), ee = (0, f.useStateFromStores)([_.default], () => _.default.isFavorite(t.id)), et = () => {
                    K(!0)
                }, en = () => {
                    K(!1)
                }, el = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    null != e && (e.preventDefault(), e.stopPropagation()), C.default.closePrivateChannel(t.id, s, n)
                }, ea = () => {
                    C.default.preload(F.ME, t.id)
                }, es = e => {
                    e.stopPropagation()
                }, ei = e => {
                    if (e.target === e.currentTarget) {
                        var t;
                        null === (t = W.current) || void 0 === t || t.click()
                    }
                }, er = e => {
                    t.isMultiUserDM() ? (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("493015").then(n.bind(n, "493015"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            channel: t,
                            selected: s
                        })
                    }, {
                        noBlurEvent: !0
                    }) : (0, E.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("130074").then(n.bind(n, "130074"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            user: r,
                            channel: t,
                            channelSelected: s
                        })
                    })
                }, eo = e => {
                    e.preventDefault(), e.stopPropagation();
                    let n = B.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                            name
                        }),
                        a = B.default.Messages.LEAVE_GROUP_DM_BODY.format({
                            name
                        });
                    t.isManaged() && (n = B.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                        name
                    }), a = B.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                        name
                    })), (0, h.openModal)(e => (0, l.jsx)(P.default, {
                        header: n,
                        body: a,
                        onSubmit: el,
                        ...e
                    }))
                }, eu = () => {
                    let e = {
                        className: w.activity,
                        textClassName: w.activityText,
                        emojiClassName: w.activityEmoji
                    };
                    return t.isSystemDM() ? (0, l.jsx)("div", {
                        className: w.subtext,
                        children: B.default.Messages.SYSTEM_DM_ACTIVITY_TEXT
                    }) : t.isMultiUserDM() ? (0, l.jsx)("div", {
                        className: w.subtext,
                        children: B.default.Messages.MEMBERS_HEADER.format({
                            members: t.recipients.length + 1
                        })
                    }) : null != c ? (0, l.jsx)(U.default, {
                        ...e,
                        activities: c,
                        applicationStream: T,
                        animate: j,
                        hideTooltip: !0
                    }) : null
                }, ed = () => {
                    if (t.isMultiUserDM()) return (0, l.jsx)(V, {
                        ...X,
                        src: (0, g.getChannelIconURL)(t),
                        "aria-hidden": !0,
                        className: w.avatar,
                        size: h.AvatarSizes.SIZE_32
                    });
                    o(null != r, "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel");
                    let e = null;
                    return !r.isSystemUser() && (e = (0, m.default)(c) ? F.StatusTypes.STREAMING : R), (0, l.jsx)(V, {
                        ...X,
                        size: h.AvatarSizes.SIZE_32,
                        src: Z,
                        avatarDecoration: Q,
                        status: e,
                        isMobile: v,
                        isTyping: A,
                        className: w.avatar,
                        "aria-label": r.username,
                        statusTooltip: !0
                    })
                }, ec = t.isMultiUserDM(), ef = t.isSystemDM(), eh = (0, I.systemDMRedesignEnabled)();
                return (0, l.jsx)(d.ListNavigatorItem, {
                    id: t.id,
                    children: e => {
                        let {
                            role: n,
                            ...a
                        } = e;
                        return (0, l.jsx)(D.default, {
                            className: w.channel,
                            role: n,
                            focusProps: {
                                ...H,
                                focusTarget: W,
                                ringTarget: z
                            },
                            ref: z,
                            onMouseEnter: et,
                            onMouseLeave: en,
                            onMouseDown: ea,
                            onContextMenu: er,
                            "aria-setsize": G,
                            "aria-posinset": b,
                            children: (0, l.jsxs)(h.Interactive, {
                                className: i(w.interactive, {
                                    [w.interactiveSystemDM]: eh && ef,
                                    [w.interactiveSelected]: s
                                }),
                                as: "div",
                                onClick: ei,
                                muted: q,
                                selected: s,
                                children: [(0, l.jsx)(u.Link, {
                                    innerRef: W,
                                    to: F.Routes.CHANNEL(F.ME, t.id),
                                    className: w.link,
                                    "aria-label": (0, p.default)({
                                        channel: t,
                                        unread: J
                                    }),
                                    ...a,
                                    children: (0, l.jsx)(y.default, {
                                        avatar: ed(),
                                        selected: s,
                                        highlighted: J,
                                        muted: null != q && q,
                                        subText: eu(),
                                        name: (0, l.jsx)(M.default, {
                                            children: $
                                        }),
                                        decorators: t.isSystemDM() ? (0, l.jsx)(O.default, {
                                            className: w.decorator,
                                            type: O.default.Types.SYSTEM_DM,
                                            verified: !0
                                        }) : null
                                    })
                                }), ee ? (0, l.jsx)(Y, {}) : null, !ef && (0, l.jsx)(k, {
                                    "aria-label": ec ? B.default.Messages.LEAVE_GROUP_DM : B.default.Messages.CLOSE_DM,
                                    onClick: ec ? eo : el,
                                    onMouseDown: es
                                })]
                            })
                        })
                    }
                })
            }
            var z = e => {
                let {
                    channel: t,
                    selected: n,
                    ...a
                } = e, s = (0, f.useStateFromStores)([v.default], () => v.default.getUser(t.getRecipientId())), i = null == s ? void 0 : s.id, r = (0, f.useStateFromStoresObject)([A.default, T.default], () => ({
                    status: null != i ? A.default.getStatus(i) : null,
                    activities: null != i ? A.default.getActivities(i) : null,
                    applicationStream: null != i ? T.default.getAnyStreamForUser(i) : null,
                    isMobile: null != i && A.default.isMobileOnline(i)
                }), [i]), o = (0, f.useStateFromStores)([R.default], () => null != s ? R.default.isTyping(t.id, t.getRecipientId()) : void 0);
                return t.isMultiUserDM() ? (0, l.jsx)(W, {
                    channel: t,
                    selected: n,
                    ...a
                }) : (0, l.jsx)(W, {
                    channel: t,
                    selected: n,
                    user: s,
                    isTyping: o,
                    ...a,
                    ...r
                })
            }
        },
        254167: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("782340"),
                r = n("417108");

            function o(e) {
                let {
                    header: t,
                    body: n,
                    onSubmit: o,
                    ...u
                } = e, [d, c] = a.useState(!1);
                return (0, l.jsxs)(s.ConfirmModal, {
                    header: t,
                    confirmText: i.default.Messages.LEAVE_GROUP_DM,
                    cancelText: i.default.Messages.CANCEL,
                    onConfirm: () => {
                        o(null, d)
                    },
                    ...u,
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, l.jsx)(s.Checkbox, {
                        type: s.Checkbox.Types.INVERTED,
                        value: d,
                        onChange: () => c(e => !e),
                        className: r.checkbox,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: i.default.Messages.LEAVE_GROUP_DM_SILENTLY
                        })
                    })]
                })
            }
        },
        631316: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("369470"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("233736"),
                f = n("77078"),
                h = n("406189"),
                C = n("206230"),
                E = n("716241"),
                m = n("274870"),
                p = n("718091"),
                g = n("288518"),
                S = n("415435"),
                _ = n("486503"),
                I = n("161778"),
                N = n("42203"),
                T = n("824563"),
                A = n("287850"),
                L = n("476765"),
                R = n("689476"),
                x = n("826684"),
                v = n("570687"),
                O = n("49111"),
                M = n("782340"),
                y = n("381226");
            (l = a || (a = {}))[l.PAGES = 0] = "PAGES", l[l.DMS = 1] = "DMS";
            let D = i.memo(function() {
                return (0, s.jsxs)("svg", {
                    width: "184",
                    height: "428",
                    viewBox: "0 0 184 428",
                    className: y.empty,
                    children: [(0, s.jsx)("rect", {
                        x: 40,
                        y: 6,
                        width: 144,
                        height: 20,
                        rx: 10
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 16,
                        r: 16
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 50,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .9
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 60,
                        r: 16,
                        opacity: .9
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 94,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .8
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 104,
                        r: 16,
                        opacity: .8
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 138,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .7
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 148,
                        r: 16,
                        opacity: .7
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 182,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .6
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 192,
                        r: 16,
                        opacity: .6
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 226,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .5
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 236,
                        r: 16,
                        opacity: .5
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 270,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .4
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 280,
                        r: 16,
                        opacity: .4
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 314,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .3
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 324,
                        r: 16,
                        opacity: .3
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 358,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .2
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 368,
                        r: 16,
                        opacity: .2
                    }), (0, s.jsx)("rect", {
                        x: 40,
                        y: 402,
                        width: 144,
                        height: 20,
                        rx: 10,
                        opacity: .1
                    }), (0, s.jsx)("circle", {
                        cx: 16,
                        cy: 412,
                        r: 16,
                        opacity: .1
                    })]
                })
            });
            class b extends i.Component {
                static getDerivedStateFromProps(e) {
                    let {
                        children: t,
                        privateChannelIds: n
                    } = e;
                    if (null == t) return {
                        preRenderedChildren: 0,
                        nonNullChildren: [],
                        totalRowCount: n.length
                    };
                    {
                        let e = t.filter(e => null != e),
                            l = e.length;
                        return {
                            preRenderedChildren: l,
                            nonNullChildren: e,
                            totalRowCount: l + n.length
                        }
                    }
                }
                componentDidMount() {
                    let {
                        selectedChannelId: e,
                        homeLink: t
                    } = this.props;
                    null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics()
                }
                shouldComponentUpdate(e) {
                    return !(0, c.default)(this.props, e, ["children"])
                }
                componentDidUpdate(e) {
                    let {
                        selectedChannelId: t,
                        homeLink: n
                    } = this.props;
                    null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics()
                }
                scrollToChannel(e) {
                    if (null == this._list) return;
                    let {
                        padding: t
                    } = this.props, {
                        preRenderedChildren: n
                    } = this.state, l = null != e ? this.props.privateChannelIds.indexOf(e) : -1, a = 0;
                    l < 0 || null == e ? this._list.scrollTo({
                        to: a
                    }) : (a += 44 * (l + n) + t, this._list.scrollIntoViewRect({
                        start: Math.max(a - 8, 0),
                        end: a + 44 + 8
                    }))
                }
                render() {
                    let {
                        privateChannelIds: e,
                        padding: t
                    } = this.props, {
                        preRenderedChildren: n
                    } = this.state;
                    return (0, s.jsx)(u.ListNavigatorContainer, {
                        children: l => {
                            let {
                                ref: a,
                                role: i,
                                ...r
                            } = l;
                            return (0, s.jsx)(f.FocusJumpSection, {
                                children: l => (0, s.jsx)(f.List, {
                                    fade: !0,
                                    innerRole: i,
                                    innerAriaLabel: M.default.Messages.DIRECT_MESSAGES,
                                    innerTag: "ul",
                                    ref: e => {
                                        var t;
                                        this._list = e, this.props.listRef.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                                    },
                                    onScroll: this.handleScroll,
                                    className: y.scroller,
                                    sectionHeight: this.getSectionHeight,
                                    paddingTop: t,
                                    paddingBottom: 8,
                                    rowHeight: this.getRowHeight,
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: [n, Math.max(e.length, 1)],
                                    ...r,
                                    ...l
                                })
                            })
                        }
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        initialized: !1,
                        preRenderedChildren: 0,
                        totalRowCount: 0,
                        nonNullChildren: []
                    }, this._list = null, this.hasReportedAnalytics = !1, this.reportAnalytics = () => {
                        var e;
                        if (this.hasReportedAnalytics) return;
                        let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let {
                            privateChannelIds: n,
                            channels: l
                        } = this.props;
                        if (0 === n.length) return;
                        let a = i.Children.count(this.props.children);
                        if (null == t) return;
                        let s = Math.round((t.offsetHeight - 44 * a) / 44),
                            r = s > n.length ? n.slice(0, s + 1) : n,
                            o = r.map(e => null != l[e] ? l[e].getRecipientId() : null),
                            u = {
                                num_users_visible: r.length,
                                num_users_visible_with_mobile_indicator: o.filter(e => null != e && T.default.isMobileOnline(e)).length
                            };
                        this.hasReportedAnalytics = !0, E.default.trackWithMetadata(O.AnalyticEvents.DM_LIST_VIEWED, {
                            ...u
                        })
                    }, this.getSectionHeight = e => {
                        let {
                            showDMHeader: t
                        } = this.props;
                        return e === a.PAGES ? 0 : t ? 40 : 0
                    }, this.handleScroll = o(() => {
                        if (null != this._list) {
                            let e = this._list.getScrollerNode();
                            null != e && h.default.updateChannelListScroll(O.ME, e.scrollTop)
                        }
                    }, 100), this.renderDM = (e, t) => {
                        let {
                            privateChannelIds: n,
                            channels: l,
                            selectedChannelId: a
                        } = this.props, {
                            totalRowCount: i,
                            preRenderedChildren: r
                        } = this.state, o = n[t], u = l[o];
                        return null == u ? null : (0, s.jsx)(v.default, {
                            channel: u,
                            selected: u.id === a,
                            "aria-posinset": r + t + 1,
                            "aria-setsize": i
                        }, u.id)
                    }, this.renderChild = e => {
                        let {
                            nonNullChildren: t,
                            totalRowCount: n
                        } = this.state, l = t[e];
                        return i.isValidElement(l) ? i.cloneElement(l, {
                            "aria-setsize": n,
                            "aria-posinset": e + 1
                        }) : l
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e, {
                            privateChannelIds: l
                        } = this.props;
                        return t === a.PAGES ? this.renderChild(n) : 0 === n && 0 === l.length ? (0, s.jsx)(D, {}, "no-private-channels") : this.renderDM(t, n)
                    }, this.renderSection = e => {
                        let {
                            section: t
                        } = e, {
                            showDMHeader: n
                        } = this.props;
                        return t !== a.PAGES && n ? (0, s.jsxs)(x.default, {
                            className: y.privateChannelsHeaderContainer,
                            children: [(0, s.jsx)("span", {
                                className: y.headerText,
                                children: M.default.Messages.DIRECT_MESSAGES
                            }), (0, s.jsx)(p.default, {
                                tooltip: M.default.Messages.CREATE_DM,
                                tooltipPosition: "top",
                                popoutAlign: "left",
                                iconClassName: y.privateChannelRecipientsInviteButtonIcon,
                                icon: R.default,
                                subscribeToGlobalHotkey: !0
                            })]
                        }, t) : null
                    }, this.getRowHeight = (e, t) => {
                        let {
                            privateChannelIds: n
                        } = this.props;
                        return e === a.DMS && 0 === t && 0 === n.length ? 428 : 44
                    }
                }
            }
            b.defaultProps = {
                padding: 8
            };
            var G = e => {
                let {
                    version: t,
                    theme: n,
                    children: l,
                    showDMHeader: a
                } = e, r = i.Children.count(l), o = N.default.getMutablePrivateChannels(), c = (0, S.filterOutMessageRequestsAndSpam)(o), f = (0, d.useStateFromStoresArray)([A.default, g.default, _.default], () => {
                    let e = A.default.getPrivateChannelIds(),
                        t = (0, S.filterOutMessageRequestsAndSpamById)(e, [g.default, _.default]);
                    return (0, m.filterBroadcastingGDMs)(t)
                }, []), h = (0, d.useStateFromStoresObject)([C.default, I.default, N.default], () => ({
                    theme: I.default.darkSidebar ? O.ThemeTypes.DARK : n,
                    keyboardModeEnabled: C.default.keyboardModeEnabled,
                    version: null != t ? "".concat(t, ":").concat(N.default.getPrivateChannelsVersion()) : N.default.getPrivateChannelsVersion()
                })), E = i.useRef(null), p = i.useCallback(e => {
                    let t = E.current,
                        n = document.querySelector(e);
                    null != t && null != n && t.scrollIntoViewNode({
                        node: n,
                        callback: () => {
                            requestAnimationFrame(() => {
                                var t;
                                return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
                                    preventScroll: !0
                                })
                            })
                        }
                    })
                }, []), T = i.useCallback(() => new Promise(e => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e())
                    })
                }), []), R = i.useCallback(() => new Promise(e => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100))
                        }
                    })
                }), []), x = (0, L.useUID)(), v = (0, u.default)({
                    id: "private-channels-".concat(x),
                    isEnabled: h.keyboardModeEnabled,
                    scrollToStart: T,
                    scrollToEnd: R,
                    defaultFocused: (r + (a ? 1 : 0)).toString(),
                    setFocus: p
                });
                return (0, s.jsx)(u.ListNavigatorProvider, {
                    navigator: v,
                    children: (0, s.jsx)(b, {
                        channels: c,
                        privateChannelIds: f,
                        listRef: E,
                        theme: n,
                        version: t,
                        ...e,
                        children: l,
                        ...h
                    })
                })
            }
        },
        331306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n.n(a),
                i = n("414456"),
                r = n.n(i),
                o = n("773364"),
                u = n("77078"),
                d = n("673777"),
                c = n("222871"),
                f = n("845579"),
                h = n("42887"),
                C = n("413709"),
                E = n("758710"),
                m = n("599110"),
                p = n("306160"),
                g = n("701909"),
                S = n("687609"),
                _ = n("49111"),
                I = n("353927"),
                N = n("782340"),
                T = n("126657");
            let A = () => {
                h.default.getMediaEngine().once(o.MediaEngineEvent.ConnectionStats, e => {
                    let t = Object.values(I.MediaEngineContextTypes).map(t => {
                        let n = e.filter(e => {
                            let {
                                connection: n
                            } = e;
                            return n.context === t
                        }).map((e, n) => {
                            let l = e.stats;
                            return l.context = t, l.index = n, l
                        });
                        for (let e of n) {
                            var l;
                            (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = "(redacted)")
                        }
                        return n
                    }).filter(e => e.length > 0);
                    (0, p.copy)(JSON.stringify(t, null, 2)), (0, u.showToast)((0, u.createToast)(N.default.Messages.COPIED, u.ToastType.SUCCESS))
                })
            };
            var L = function(e) {
                (0, a.useEffect)(() => {
                    m.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                        type: "RTC Connection"
                    })
                }, []);
                let t = (0, a.useCallback)(() => {
                        let {
                            closePopout: t
                        } = e;
                        null != t && t(), d.open()
                    }, [e]),
                    n = (0, a.useCallback)(() => {
                        let {
                            hostname: t,
                            averagePing: n,
                            lastPing: a,
                            outboundLossRate: i
                        } = e, o = f.DeveloperMode.getSetting();
                        return (0, l.jsxs)(s.Fragment, {
                            children: [o && (0, l.jsxs)("div", {
                                children: [(0, l.jsx)("div", {
                                    className: T.graphContainer,
                                    children: (0, l.jsx)(c.default, {
                                        dataPoints: e.pings,
                                        width: 258,
                                        height: 80
                                    })
                                }), (0, l.jsx)("div", {
                                    className: T.popoutText,
                                    children: (0, l.jsx)("strong", {
                                        children: S.default.getShortHostname(t)
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: T.popoutText,
                                children: N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format({
                                    averagePing: n.toFixed(0)
                                })
                            }), null != a ? (0, l.jsx)("div", {
                                className: T.popoutText,
                                children: N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format({
                                    lastPing: a.toFixed(0)
                                })
                            }) : null, null != i ? (0, l.jsx)("div", {
                                className: T.popoutText,
                                children: N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format({
                                    outboundLossRate: i.toFixed(1)
                                })
                            }) : null, (0, l.jsxs)("div", {
                                className: r(T.popoutText, T.popoutTextDetails),
                                children: [null == i ? N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format({
                                    badPing: 250
                                }) : null, null != i ? N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format({
                                    badPing: 250,
                                    badLossRate: 10
                                }) : null]
                            })]
                        })
                    }, [e]),
                    {
                        connectionState: i,
                        isSecureFramesEnabled: o
                    } = e,
                    p = f.DeveloperMode.getSetting(),
                    L = {
                        [_.RTCConnectionStates.AWAITING_ENDPOINT]: N.default.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
                            url: _.Links.STATUS
                        }),
                        [_.RTCConnectionStates.CONNECTING]: N.default.Messages.RTC_CONNECTION_STATE_CONNECTING,
                        [_.RTCConnectionStates.AUTHENTICATING]: N.default.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
                        [_.RTCConnectionStates.DISCONNECTED]: N.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
                        [_.RTCConnectionStates.RTC_CONNECTING]: N.default.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
                        [_.RTCConnectionStates.ICE_CHECKING]: N.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                            url: g.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.DTLS_CONNECTING]: N.default.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
                            url: g.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.RTC_CONNECTED]: n,
                        [_.RTCConnectionStates.NO_ROUTE]: N.default.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({
                            url: g.default.getArticleURL(_.HelpdeskArticles.VOICE_CONNECTION_ERRORS)
                        }),
                        [_.RTCConnectionStates.RTC_DISCONNECTED]: N.default.Messages.RTC_CONNECTION_STATE_DISCONNECTED
                    } [i];
                return (0, l.jsx)("div", {
                    className: T.container,
                    children: (0, l.jsxs)("section", {
                        className: T.section,
                        children: ["function" == typeof L ? L() : (0, l.jsx)("p", {
                            className: r(T.popoutText, T.popoutTextDetails),
                            children: L
                        }), (0, l.jsx)("hr", {
                            className: T.separator
                        }), (0, l.jsxs)("div", {
                            className: T.popoutBottom,
                            children: [(0, l.jsx)("span", {
                                className: T.secured,
                                children: o ? N.default.Messages.SECURE_FRAMES_CONNECTION_INDICATOR : N.default.Messages.SECURE_CONNECTION
                            }), p && h.default.supports(I.Features.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(u.Anchor, {
                                    className: T.debugButton,
                                    onClick: t,
                                    children: [N.default.Messages.DEBUG, (0, l.jsx)(E.default, {
                                        className: T.launchIcon,
                                        width: 12,
                                        height: 12
                                    })]
                                }), (0, l.jsxs)(u.Anchor, {
                                    className: T.copyStatsButton,
                                    onClick: A,
                                    title: "Copy to clipboard",
                                    children: [N.default.Messages.COPY_STATS, (0, l.jsx)(C.default, {
                                        className: T.copyIcon,
                                        width: 12,
                                        height: 12
                                    })]
                                })]
                            }), !p && !__OVERLAY__ && (0, l.jsx)(u.Anchor, {
                                className: T.debugButton,
                                href: g.default.getArticleURL(_.HelpdeskArticles.VOICE_VIDEO_TROUBLESHOOTING),
                                children: N.default.Messages.LEARN_MORE
                            })]
                        })]
                    })
                })
            }
        },
        318042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("862337");
            class s extends l.Component {
                componentDidMount() {
                    this.update(), this._interval.start(this.props.updateInterval, this.update)
                }
                componentWillUnmount() {
                    this._interval.stop()
                }
                calculateInitialDeltaBytes(e) {
                    let {
                        numUpdatesToShow: t,
                        updateInterval: n,
                        pointsToSmooth: l
                    } = this.props, a = Date.now(), s = 0, i = 0, r = [], o = null != e[0] ? e[0].bytes : 0;
                    for (; s < t + l; s++) {
                        let t;
                        let l = a - (s + 1) * n;
                        for (; i < e.length;)
                            if ((t = e[i]).timestamp > l) i++;
                            else break;
                        if (i === e.length) break;
                        null != t && (r.push(o - t.bytes), o = t.bytes)
                    }
                    for (; s < t + l; s++) r.push(0);
                    return r.reverse(), r
                }
                smoothDeltaBytes(e) {
                    let {
                        pointsToSmooth: t
                    } = this.props, n = [];
                    for (let l = 0; l < e.length - t; l++) {
                        let a = 0;
                        for (let n = 0; n < t; n++) a += e[l + n];
                        n.push(a / t)
                    }
                    return n
                }
                render() {
                    let {
                        numUpdatesToShow: e,
                        updateInterval: t,
                        children: n
                    } = this.props;
                    return n(this.state.smoothedDeltaBytes, t, e)
                }
                constructor(e) {
                    super(e), this._interval = new a.Interval, this.update = () => {
                        let {
                            onUpdate: e,
                            numUpdatesToShow: t,
                            pointsToSmooth: n,
                            updateInterval: l
                        } = this.props, a = this.props.getHistoricalTotalBytes(), s = null != a[0] ? a[0].bytes : 0, i = [...this.state.deltaBytes.slice(1, t + n), s - this.state.lastTotalBytes];
                        this.setState({
                            deltaBytes: i,
                            smoothedDeltaBytes: this.smoothDeltaBytes(i),
                            lastTotalBytes: s
                        }, () => null != e && e(l))
                    };
                    let t = this.props.getHistoricalTotalBytes(),
                        n = this.calculateInitialDeltaBytes(t);
                    this.state = {
                        deltaBytes: n,
                        smoothedDeltaBytes: this.smoothDeltaBytes(n),
                        lastTotalBytes: null != t[0] ? t[0].bytes : 0
                    }
                }
            }
            s.defaultProps = {
                numUpdatesToShow: 30,
                updateInterval: 500,
                pointsToSmooth: 10
            };
            var i = s
        },
        524110: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDispatchApplicationStates: function() {
                    return R
                },
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("446674"),
                u = n("669491"),
                d = n("266491"),
                c = n("77078"),
                f = n("393414"),
                h = n("546463"),
                C = n("535974"),
                E = n("352326"),
                m = n("280174"),
                p = n("195812"),
                g = n("964889"),
                S = n("318042"),
                _ = n("49111"),
                I = n("782340"),
                N = n("518837");
            let T = {
                [_.LocalDispatchApplicationStates.INSTALLING]: {
                    [m.TimeUnits.NONE]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                },
                [_.LocalDispatchApplicationStates.UPDATING]: {
                    [m.TimeUnits.NONE]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_UPDATING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                },
                [_.LocalDispatchApplicationStates.REPAIRING]: {
                    [m.TimeUnits.NONE]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING.format({
                        name: e
                    }),
                    [m.TimeUnits.SECONDS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_SECONDS.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.MINUTES]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_MINUTES.format({
                        name: e,
                        timeRemaining: t
                    }),
                    [m.TimeUnits.HOURS]: (e, t) => I.default.Messages.APPLICATION_PROGRESS_INDICATOR_INSTALLING_HOURS.format({
                        name: e,
                        timeRemaining: t
                    })
                }
            };
            class A extends a.PureComponent {
                renderText() {
                    let {
                        state: e,
                        isPaused: t
                    } = this.props;
                    if (e.type === _.LocalDispatchApplicationStates.UPDATING || e.type === _.LocalDispatchApplicationStates.REPAIRING || e.type === _.LocalDispatchApplicationStates.INSTALLING) {
                        if (t) return I.default.Messages.APPLICATION_PROGRESS_INDICATOR_PAUSED;
                        if (e.stage === _.DispatchApplicationStages.PATCHING || e.stage === _.DispatchApplicationStages.REPAIRING) return (0, l.jsx)(S.default, {
                            getHistoricalTotalBytes: C.default.getHistoricalTotalBytesWritten,
                            updateInterval: 5e3,
                            children: this.renderProgressBody
                        })
                    }
                    return null
                }
                render() {
                    let e = this.renderText();
                    return null != e ? e : I.default.Messages.LIBRARY
                }
                constructor(...e) {
                    super(...e), this.renderProgressBody = (e, t) => {
                        let {
                            state: n,
                            application: l
                        } = this.props, {
                            stage: a,
                            progress: s,
                            total: i,
                            type: r
                        } = n;
                        if (null == s || null == i || null == a) return null;
                        let o = e[e.length - 1] / t * 1e3,
                            u = 0 !== o ? Math.max(1, (i - s) / o) : null,
                            d = T[r],
                            c = null != d ? Object.keys(d) : [],
                            {
                                unit: f,
                                time: h
                            } = (0, m.getTimeAndUnit)(null != u ? u / 60 : null, c);
                        if (null != d && null != f) {
                            let e = d[f];
                            return null != e ? e(l.name, h) : null
                        }
                        return null
                    }
                }
            }
            class L extends a.PureComponent {
                componentWillAppear(e) {
                    this.state.animationScale.setValue(1), e()
                }
                componentWillEnter(e) {
                    r.default.spring(this.state.animationScale, {
                        toValue: 1,
                        duration: 200
                    }).start(e)
                }
                componentWillLeave(e) {
                    r.default.spring(this.state.animationScale, {
                        toValue: 0,
                        duration: 200
                    }).start(e)
                }
                getTooltipText() {
                    let {
                        firstApplication: e,
                        firstState: t,
                        isPaused: n
                    } = this.props;
                    return null == e || null == t ? I.default.Messages.LIBRARY : (0, l.jsx)(A, {
                        application: e,
                        state: t,
                        isPaused: n
                    })
                }
                render() {
                    let {
                        percent: e,
                        isPaused: t,
                        className: n
                    } = this.props;
                    return (0, l.jsx)(r.default.div, {
                        style: {
                            transform: [{
                                scale: this.state.animationScale
                            }]
                        },
                        className: i(n, N.progressContainer),
                        onClick: this.handleOnClick,
                        children: (0, l.jsx)(c.Tooltip, {
                            text: this.getTooltipText(),
                            position: "right",
                            "aria-label": !1,
                            children: n => (0, l.jsx)("div", {
                                ...n,
                                children: (0, l.jsx)(c.ProgressCircle, {
                                    percent: e,
                                    colorOverride: t ? u.default.unsafe_rawColors.PRIMARY_500.css : null,
                                    children: (0, l.jsx)(p.default, {
                                        className: N.downloadIcon
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        animationScale: new r.default.Value(0)
                    }, this.handleOnClick = e => {
                        let {
                            onClick: t
                        } = this.props;
                        e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, f.transitionTo)(_.Routes.APPLICATION_LIBRARY)
                    }
                }
            }
            L.defaultProps = {
                strokeSize: c.ProgressCircle.StrokeSizes.MEDIUM
            };

            function R(e, t) {
                return e.reduce((e, n) => {
                    let {
                        applicationId: l,
                        branchId: a
                    } = n, s = t.getState(l, a);
                    return null != s && e.push(s), e
                }, [])
            }
            var x = o.default.connectStores([E.default, h.default, C.default], () => {
                let e = E.default.activeItems,
                    t = R(e, C.default),
                    {
                        total: n,
                        progress: l
                    } = g.getCombinedProgress(t);
                return {
                    percent: g.calculateProgressPercentage(l, n),
                    isPaused: E.default.paused,
                    firstApplication: e.length > 0 ? h.default.getGame(e[0].applicationId) : null,
                    firstState: t.length > 0 ? t[0] : null
                }
            })(e => {
                let {
                    determineOwnVisibility: t = !0,
                    ...n
                } = e;
                return t ? (0, l.jsx)(d.default, {
                    component: a.Fragment,
                    children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(L, {
                        ...n
                    }) : null
                }) : (0, l.jsx)(L, {
                    ...n
                })
            })
        },
        57005: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("679653"),
                i = n("782340"),
                r = n("21893");

            function o(e) {
                let {
                    channel: t,
                    category: n,
                    ...o
                } = e, u = (0, s.default)(t, !0), d = (0, s.default)(n);
                return (0, l.jsx)(a.ConfirmModal, {
                    header: i.default.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
                    confirmText: i.default.Messages.SYNC_PERMISSIONS,
                    cancelText: i.default.Messages.KEEP_PERMISSIONS,
                    confirmButtonColor: a.Button.Colors.BRAND,
                    ...o,
                    children: (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: r.message,
                        selectable: !1,
                        children: i.default.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
                            channelName: u,
                            categoryName: d
                        })
                    })
                })
            }
        },
        667771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeChannelSortable: function() {
                    return A
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("476042"),
                s = n("95410"),
                i = n("77078"),
                r = n("851387"),
                o = n("57005"),
                u = n("320954"),
                d = n("200008"),
                c = n("512395"),
                f = n("870691"),
                h = n("42203"),
                C = n("245997"),
                E = n("923959"),
                m = n("305961"),
                p = n("957255"),
                g = n("162771"),
                S = n("230674"),
                _ = n("991170"),
                I = n("49111");
            let N = "DRAGGABLE_GUILD_CHANNEL";

            function T(e, t) {
                var n, l;
                if (null == e || null == t) return null;
                if (e !== I.FAVORITES) return h.default.getChannel(t);
                let a = E.default.getChannels(e),
                    s = null !== (l = null !== (n = a[0, E.GUILD_SELECTABLE_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== n ? n : a[0, E.GUILD_VOCAL_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== l ? l : a[I.ChannelTypes.GUILD_CATEGORY].find(e => e.channel.id === t);
                return null == s ? void 0 : s.channel
            }

            function A(e) {
                return (0, a.DropTarget)(N, {
                    drop(e, t) {
                        let n;
                        let a = g.default.getGuildId(),
                            s = t.getItem(),
                            u = (0, S.getDropData)(T(a, s.id), s.position, e.channel, e.position, s.channelList);
                        if (null == u) return;
                        let c = T(a, s.id);
                        if (null == c) return;
                        let f = C.default.getCategories(a),
                            E = m.default.getGuild(a);
                        if (null == E) return;
                        let N = (0, S.getDnDUpdates)(c, T(a, u.referenceId), u.parentId, f);
                        if (0 !== N.length) {
                            if (a === I.FAVORITES) {
                                (0, d.updateFavoriteChannels)(N);
                                return
                            }
                            if (N = N.filter(e => {
                                    let {
                                        id: t
                                    } = e, n = h.default.getChannel(t);
                                    if (null == n) return !1;
                                    let l = h.default.getChannel(n.parent_id);
                                    return n.type === I.ChannelTypes.GUILD_CATEGORY || null == l ? p.default.can(I.Permissions.MANAGE_CHANNELS, E) : p.default.can(I.Permissions.MANAGE_CHANNELS, l)
                                }), c.parent_id !== u.parentId && N.find(e => {
                                    if (e.id !== c.id) return !1;
                                    let t = h.default.getChannel(e.parent_id),
                                        l = null != t && p.default.can(I.Permissions.MANAGE_ROLES, c) && p.default.can(I.Permissions.MANAGE_ROLES, t);
                                    if (!l) return !0;
                                    let a = _.default.areChannelsLocked(c, t),
                                        s = _.default.areChannelsLocked(c, h.default.getChannel(c.parent_id));
                                    return (null == c.parent_id && !a || s && !a) && (n = e), !0
                                }), null != n) {
                                let e = h.default.getChannel(n.parent_id);
                                null != e && (0, i.openModal)(t => (0, l.jsx)(o.default, {
                                    ...t,
                                    channel: c,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && (n.lock_permissions = !0, r.default.batchChannelUpdate(a, N))
                                    },
                                    onCancel: () => {
                                        null != n && r.default.batchChannelUpdate(a, N)
                                    }
                                }))
                            } else r.default.batchChannelUpdate(a, N)
                        }
                    },
                    canDrop(e, t) {
                        let n = t.getItem(),
                            l = h.default.getChannel(n.id);
                        if (null == l) return !1;
                        let a = (0, S.getDropData)(h.default.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                        if (null == a) return !1;
                        if (g.default.getGuildId() === I.FAVORITES) return !0;
                        let s = m.default.getGuild(n.guildId);
                        if (null == s) return !1;
                        let i = h.default.getChannel(a.parentId),
                            r = h.default.getChannel(l.parent_id),
                            o = p.default.can(I.Permissions.MANAGE_CHANNELS, s),
                            u = null != r ? p.default.can(I.Permissions.MANAGE_CHANNELS, r) : o,
                            d = null != i ? p.default.can(I.Permissions.MANAGE_CHANNELS, i) : o;
                        return u && d
                    }
                }, (e, t) => {
                    let n = t.getItem();
                    return null == n || null == n.isChannelDrag ? {
                        connectChannelDropTarget: e.dropTarget(),
                        sorting: !1,
                        sortingType: null,
                        sortingPosition: null,
                        sortingParent: null
                    } : {
                        connectChannelDropTarget: e.dropTarget(),
                        sorting: !0,
                        sortingType: n.type,
                        sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                        sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
                    }
                })((0, a.DragSource)(N, {
                    canDrag(e) {
                        let {
                            channel: t
                        } = e;
                        if (g.default.getGuildId() === I.FAVORITES) return !0;
                        let a = m.default.getGuild(t.getGuildId());
                        if (null == a) return !1;
                        if ((0, c.isOptInEnabledForGuild)(a.id) && p.default.can(I.Permissions.MANAGE_CHANNELS, a)) {
                            let e = "true" === s.default.get("doNotShowReorderModal");
                            return !e && (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("468749").then(n.bind(n, "468749"));
                                return t => (0, l.jsx)(e, {
                                    ...t
                                })
                            }), !1
                        }
                        if (t.type === I.ChannelTypes.GUILD_CATEGORY) return p.default.can(I.Permissions.MANAGE_CHANNELS, a) && !(0, c.isOptInEnabledForGuild)(a.id);
                        let r = h.default.getChannel(t.parent_id);
                        return null != r && p.default.can(I.Permissions.MANAGE_CHANNELS, r) || null == r && p.default.can(I.Permissions.MANAGE_CHANNELS, a)
                    },
                    beginDrag(e) {
                        let {
                            channel: {
                                id: t,
                                parent_id: n,
                                guild_id: l,
                                type: a
                            },
                            position: s
                        } = e, i = g.default.getGuildId(), r = C.default.getCategories(i), o = (0, u.default)(r._categories, r, e => {
                            let {
                                channel: t
                            } = e;
                            if (t.type === I.ChannelTypes.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length) return i === I.FAVORITES || p.default.can(I.Permissions.MANAGE_CHANNELS, t) && p.default.can(I.Permissions.VIEW_CHANNEL, t);
                            return !f.default.isCollapsed(t.parent_id)
                        });
                        return {
                            isChannelDrag: !0,
                            id: t,
                            position: s,
                            parentId: n,
                            type: a,
                            channelList: o,
                            guildId: l
                        }
                    }
                }, e => ({
                    connectChannelDragSource: e.dragSource(),
                    connectDragPreview: e.dragPreview()
                }))(e))
            }
        },
        735577: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QUICKSWITCHER_SHOW: function() {
                    return a
                }
            });
            var l = n("104589");
            let a = {
                binds: ["mod+k", "mod+t"],
                comboKeysBindGlobal: !0,
                action: () => ((0, l.show)("KEYBIND", ""), !1)
            }
        },
        175980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                OVERLAY_LAYOUT: function() {
                    return T
                },
                OVERLAY_LOCKED_LAYOUT: function() {
                    return A
                },
                getOverlayLayoutContent: function() {
                    return L
                }
            });
            var l = n("102457"),
                a = n("55562"),
                s = n("953260"),
                i = n("798232"),
                r = n("278412"),
                o = n("222301"),
                u = n("735577"),
                d = n("714208"),
                c = n("24312"),
                f = n("30269"),
                h = n("271524"),
                C = n("333949"),
                E = n("945924"),
                m = n("648900"),
                p = n("838021"),
                g = n("347445"),
                S = n("493334"),
                _ = n("49111"),
                I = n("782340");

            function N() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.map(e => {
                    let t = T[e];
                    if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
                    return t.binds[0]
                })
            }
            let T = {
                    [_.KeybindActions.SERVER_NEXT]: h.SERVER_NEXT,
                    [_.KeybindActions.SERVER_PREV]: h.SERVER_PREV,
                    [_.KeybindActions.CHANNEL_NEXT]: a.CHANNEL_NEXT,
                    [_.KeybindActions.CHANNEL_PREV]: a.CHANNEL_PREV,
                    [_.KeybindActions.NAVIGATE_BACK]: a.NAVIGATE_BACK,
                    [_.KeybindActions.NAVIGATE_FORWARD]: a.NAVIGATE_FORWARD,
                    [_.KeybindActions.UNREAD_NEXT]: S.UNREAD_NEXT,
                    [_.KeybindActions.UNREAD_PREV]: S.UNREAD_PREV,
                    [_.KeybindActions.MENTION_CHANNEL_NEXT]: S.MENTION_NEXT,
                    [_.KeybindActions.MENTION_CHANNEL_PREV]: S.MENTION_PREV,
                    [_.KeybindActions.TOGGLE_PREVIOUS_GUILD]: a.TOGGLE_PREVIOUS_GUILD,
                    [_.KeybindActions.JUMP_TO_GUILD]: s.JUMP_TO_GUILD,
                    [_.KeybindActions.SUBMIT]: C.SUBMIT,
                    [_.KeybindActions.TEXTAREA_FOCUS]: E.TEXTAREA_FOCUS,
                    [_.KeybindActions.MARK_CHANNEL_READ]: i.MARK_CHANNEL_READ,
                    [_.KeybindActions.MARK_SERVER_READ]: r.MARK_SERVER_READ,
                    [_.KeybindActions.TOGGLE_MUTE]: m.TOGGLE_MUTE,
                    [_.KeybindActions.TOGGLE_DEAFEN]: m.TOGGLE_DEAFEN,
                    [_.KeybindActions.TOGGLE_CATEGORY_COLLAPSED]: p.TOGGLE_CATEGORY_COLLAPSED,
                    [_.KeybindActions.SCROLL_UP]: c.SCROLL_UP,
                    [_.KeybindActions.SCROLL_DOWN]: c.SCROLL_DOWN,
                    [_.KeybindActions.SEARCH_EMOJIS]: f.SEARCH_EMOJIS,
                    [_.KeybindActions.TOGGLE_HOTKEYS]: g.TOGGLE_HOTKEYS,
                    [_.KeybindActions.JUMP_TO_FIRST_UNREAD]: o.JUMP_TO_FIRST_UNREAD,
                    [_.KeybindActions.RETURN_TO_AUDIO_CHANNEL]: d.RETURN_TO_AUDIO_CHANNEL,
                    [_.KeybindActions.CALL_ACCEPT]: l.CALL_ACCEPT,
                    [_.KeybindActions.CALL_START]: l.CALL_START,
                    [_.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
                },
                A = {
                    [_.KeybindActions.QUICKSWITCHER_SHOW]: u.QUICKSWITCHER_SHOW
                };

            function L() {
                return [{
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
                    binds: N(_.KeybindActions.SERVER_PREV, _.KeybindActions.SERVER_NEXT)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
                    binds: N(_.KeybindActions.CHANNEL_PREV, _.KeybindActions.CHANNEL_NEXT)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
                    binds: N(_.KeybindActions.NAVIGATE_BACK, _.KeybindActions.NAVIGATE_FORWARD)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
                    binds: N(_.KeybindActions.UNREAD_PREV, _.KeybindActions.UNREAD_NEXT)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
                    binds: N(_.KeybindActions.MENTION_CHANNEL_PREV, _.KeybindActions.MENTION_CHANNEL_NEXT),
                    groupEnd: !0
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
                    binds: N(_.KeybindActions.TOGGLE_PREVIOUS_GUILD)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
                    binds: N(_.KeybindActions.MARK_SERVER_READ)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
                    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
                    binds: N(_.KeybindActions.SEARCH_EMOJIS),
                    groupEnd: !0
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
                    binds: N(_.KeybindActions.TOGGLE_MUTE)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
                    binds: N(_.KeybindActions.TOGGLE_DEAFEN)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
                    binds: N(_.KeybindActions.CALL_ACCEPT)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
                    binds: N(_.KeybindActions.MARK_CHANNEL_READ)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
                    binds: N(_.KeybindActions.CALL_START),
                    groupEnd: !0
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
                    binds: N(_.KeybindActions.SCROLL_UP, _.KeybindActions.SCROLL_DOWN)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
                    binds: N(_.KeybindActions.JUMP_TO_FIRST_UNREAD)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
                    binds: N(_.KeybindActions.TEXTAREA_FOCUS)
                }, {
                    description: I.default.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
                    binds: N(_.KeybindActions.QUICKSWITCHER_SHOW)
                }]
            }
        },
        454286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SETTINGS_LAYERS_LAYOUT: function() {
                    return d
                }
            });
            var l = n("118810"),
                a = n("77078"),
                s = n("244201"),
                i = n("144747"),
                r = n("659500"),
                o = n("202035"),
                u = n("49111");
            let d = {
                POP_LAYER: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action(e) {
                        if ((0, a.isInDndMode)()) return !1;
                        if (r.ComponentDispatch.hasSubscribers(u.ComponentActions.CALL_DECLINE)) return r.ComponentDispatch.dispatch(u.ComponentActions.CALL_DECLINE), !1;
                        if (i.default.close()) return !1;
                        if ((0, l.isElement)(e.target)) {
                            let t = (0, s.getWindowDispatchForElement)(e.target);
                            if (null == t ? void 0 : t.hasSubscribers(u.ComponentActions.POPOUT_CLOSE)) return t.dispatch(u.ComponentActions.POPOUT_CLOSE), !1
                        }
                        if (r.ComponentDispatch.hasSubscribers(u.ComponentActions.MODAL_CLOSE)) return r.ComponentDispatch.dispatch(u.ComponentActions.MODAL_CLOSE), !1;
                        r.ComponentDispatch.dispatch(u.ComponentActions.LAYER_POP_ESCAPE_KEY)
                    }
                },
                ...o.default
            }
        },
        493814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("65597"),
                o = n("77078"),
                u = n("719451"),
                d = n("812204"),
                c = n("685665"),
                f = n("534438"),
                h = n("141254"),
                C = n("116616"),
                E = n("653047"),
                m = n("697218"),
                p = n("145131"),
                g = n("791106"),
                S = n("476765"),
                _ = n("124969"),
                I = n("83900"),
                N = n("216422"),
                T = n("128295"),
                A = n("414868"),
                L = n("599110"),
                R = n("315102"),
                x = n("773336"),
                v = n("50885"),
                O = n("52114"),
                M = n("218484"),
                y = n("49111"),
                D = n("646718"),
                b = n("782340"),
                G = n("672067"),
                j = n("926622");

            function U() {
                let {
                    analyticsLocations: e,
                    sourceAnalyticsLocations: t
                } = (0, c.default)(d.default.PREMIUM_UPSELL_TOOLTIP);
                return a.useEffect(() => {
                    L.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: D.PremiumUpsellTypes.GUILD_CAP_INLINE_INVITE_MODAL,
                        location: {
                            page: y.AnalyticsPages.NATIVE_INVITE_MODAL
                        },
                        location_stack: t
                    })
                }, [t]), (0, l.jsxs)(o.Clickable, {
                    onClick: () => (0, C.default)({
                        analyticsSource: {
                            page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL
                        },
                        analyticsLocation: {
                            page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL,
                            section: y.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
                        },
                        analyticsLocations: e
                    }),
                    className: G.experimentUpsellError,
                    children: [(0, l.jsx)(N.default, {
                        width: 24,
                        height: 24,
                        className: G.experimentUpsellIcon,
                        color: g.GradientCssUrls.PREMIUM_TIER_2
                    }), (0, l.jsx)("span", {
                        className: G.experimentUpsellText,
                        children: b.default.Messages.GUILD_CAP_UPSELL_TOOLTIP
                    }), (0, l.jsx)("span", {
                        className: G.experimentGetNitro,
                        children: b.default.Messages.GUILD_CAP_UPSELL_GET_NITRO
                    })]
                })
            }

            function P(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsxs)("div", {
                    "aria-hidden": "true",
                    className: i(G.iconContainer, t),
                    children: [(0, l.jsx)(T.default, {
                        className: G.iconSparklePlus
                    }), (0, l.jsx)(I.default, {
                        className: G.iconLink,
                        width: 40,
                        height: 40
                    }), (0, l.jsx)(A.default, {
                        className: G.iconSparkleStar
                    })]
                })
            }

            function F(e) {
                let {
                    transitionState: t
                } = e, n = (0, S.useUID)(), {
                    AnalyticsLocationProvider: a
                } = (0, c.default)(d.default.INVITE_MODAL);
                return (0, l.jsx)(a, {
                    children: (0, l.jsx)(o.ModalRoot, {
                        size: o.ModalSize.DYNAMIC,
                        "aria-labelledby": n,
                        transitionState: t,
                        children: (0, l.jsxs)(o.ModalContent, {
                            className: G.errorContent,
                            children: [(0, l.jsx)(P, {
                                className: G.errorImage
                            }), (0, l.jsx)(o.Heading, {
                                id: n,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
                            }), (0, l.jsx)("div", {
                                className: G.errorBody,
                                children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_BODY
                            }), (0, l.jsx)(_.Button, {
                                size: _.Button.Sizes.LARGE,
                                onClick: () => O.default.close(),
                                color: _.Button.Colors.BRAND,
                                children: b.default.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
                            })]
                        })
                    })
                })
            }

            function B(e) {
                let t, n, {
                    transitionState: s
                } = e;
                (0, r.default)([m.default], () => {
                    var e;
                    return null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType
                });
                let {
                    invite: C,
                    error: g,
                    submitting: I
                } = (0, r.useStateFromStoresObject)([M.default], () => M.default.getProps());
                a.useEffect(() => {
                    !__OVERLAY__ && x.isPlatformEmbedded && ((0, x.isWindows)() ? v.default.minimize() : v.default.restore(), v.default.focus())
                }, []);
                let N = (0, S.useUID)(),
                    {
                        AnalyticsLocationProvider: T
                    } = (0, c.default)(d.default.INVITE_MODAL);
                if (null == C) return null;
                if (C.state === y.InviteStates.EXPIRED || C.state === y.InviteStates.BANNED || C.state === y.InviteStates.ERROR) return (0, l.jsx)(F, {
                    transitionState: s
                });
                if (null == C.channel) return null;

                function A() {
                    null != C && O.default.acceptInvite(C)
                }
                let {
                    guild: L,
                    channel: D,
                    inviter: P,
                    target_application: B
                } = C, w = null != C.stage_instance, V = null == C.guild && null == C.channel && null != C.inviter;
                if (null != B) {
                    t = null == L ? void 0 : L.name;
                    let e = E.default.createFromServer(B);
                    n = e.getCoverImageURL(1024)
                } else if (null != L) t = L.name, n = R.default.getGuildSplashURL({
                    id: L.id,
                    splash: L.splash
                });
                else if ((null == (t = D.name) || "" === t) && null != P && (t = P.username), null == t) throw Error("no name for group DM invite");
                let H = (0, h.isAtGuildCapAndNonPremium)(),
                    k = w ? b.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : b.default.Messages.INVITE_MODAL_BUTTON.format({
                        guildName: t
                    });
                return V && (k = b.default.Messages.ACCEPT_INVITE_MODAL_BUTTON), (0, l.jsx)(T, {
                    children: (0, l.jsxs)(o.ModalRoot, {
                        size: o.ModalSize.DYNAMIC,
                        "aria-labelledby": N,
                        transitionState: s,
                        className: G.container,
                        children: [(0, l.jsx)("div", {
                            className: G.contentWrapper,
                            children: (0, l.jsx)(o.Scroller, {
                                className: G.scroller,
                                children: (0, l.jsxs)(p.default, {
                                    className: G.inviteContent,
                                    direction: p.default.Direction.VERTICAL,
                                    justify: p.default.Justify.BETWEEN,
                                    children: [(0, l.jsx)("div", {
                                        id: N,
                                        className: j.marginBottom20,
                                        children: (0, l.jsx)(u.default, {
                                            invite: C,
                                            disableUser: null != L,
                                            error: g
                                        })
                                    }), w && null != L ? (0, l.jsx)("div", {
                                        className: i(j.marginBottom20, G.stage),
                                        children: (0, l.jsx)(f.default, {
                                            isCard: !0,
                                            stageInstance: C.stage_instance,
                                            guild: L
                                        })
                                    }) : null, (0, l.jsxs)("div", {
                                        children: [H ? (0, l.jsx)(U, {}) : null, null == B ? (0, l.jsx)(o.Tooltip, {
                                            text: H ? b.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                                            position: "bottom",
                                            children: e => {
                                                let {
                                                    onMouseEnter: t,
                                                    onMouseLeave: n
                                                } = e;
                                                return (0, l.jsx)(_.Button, {
                                                    size: _.Button.Sizes.LARGE,
                                                    onClick: A,
                                                    submitting: I,
                                                    disabled: H,
                                                    color: w ? _.Button.Colors.GREEN : _.Button.Colors.BRAND,
                                                    onMouseEnter: t,
                                                    onMouseLeave: n,
                                                    children: H ? b.default.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : k
                                                })
                                            }
                                        }) : (0, l.jsxs)("div", {
                                            className: G.buttonGroup,
                                            children: [(0, l.jsx)(_.Button, {
                                                size: _.Button.Sizes.LARGE,
                                                onClick: A,
                                                submitting: I,
                                                children: b.default.Messages.PLAY
                                            }), (0, l.jsx)(_.Button, {
                                                color: _.Button.Colors.PRIMARY,
                                                size: _.Button.Sizes.LARGE,
                                                onClick: A,
                                                submitting: I,
                                                children: b.default.Messages.SPECTATE
                                            })]
                                        }), (0, l.jsx)(p.default, {
                                            justify: p.default.Justify.CENTER,
                                            className: j.marginTop8,
                                            children: (0, l.jsx)(_.Button, {
                                                look: _.Button.Looks.LINK,
                                                className: G.noThanksButton,
                                                onClick: function() {
                                                    O.default.close()
                                                },
                                                color: _.Button.Colors.TRANSPARENT,
                                                children: b.default.Messages.INIVTE_MODAL_NO_THANKS
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), null != n && (0, l.jsx)("div", {
                            className: G.inviteSplash,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        })]
                    })
                })
            }
        },
        52114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("913144"),
                a = n("970728"),
                s = n("883029"),
                i = {
                    acceptInvite(e) {
                        let t = a.default.getInviteContext("Desktop Invite Modal", e);
                        a.default.acceptInvite({
                            inviteKey: e.code,
                            context: t,
                            callback: e => {
                                null != e && null != e.guild && null != e.channel && !__OVERLAY__ && a.default.transitionToInvite(e)
                            }
                        }).then(() => this.close(), e => {
                            l.default.dispatch({
                                type: "INVITE_MODAL_ERROR",
                                message: (0, s.getInviteError)(e.code)
                            })
                        })
                    },
                    close() {
                        l.default.dispatch({
                            type: "INVITE_MODAL_CLOSE"
                        })
                    }
                }
        },
        827792: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("913144"),
                i = n("316272"),
                r = n("493814"),
                o = n("218484");
            let u = "INVITE_MODAL_KEY";
            class d extends i.default {
                _initialize() {
                    s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
                }
                _terminate() {
                    (0, a.closeModal)(u), s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
                }
                handleOpenModal() {
                    o.default.isOpen() && !(0, a.hasModalOpen)(u) && (0, a.openModal)(e => (0, l.jsx)(r.default, {
                        ...e
                    }), {
                        modalKey: u,
                        onCloseRequest: () => s.default.dispatch({
                            type: "INVITE_MODAL_CLOSE"
                        })
                    })
                }
                handleCloseModal() {
                    (0, a.closeModal)(u)
                }
            }
            var c = new d
        },
        218484: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("446674"),
                s = n("913144"),
                i = n("42793"),
                r = n("393414"),
                o = n("233069"),
                u = n("813006"),
                d = n("42203"),
                c = n("305961"),
                f = n("337543"),
                h = n("957255"),
                C = n("697218"),
                E = n("50885"),
                m = n("49111"),
                p = n("724210");
            let g = m.AppContext.APP,
                S = !1,
                _ = !1,
                I = [];

            function N() {
                S = !0
            }
            class T extends a.default.Store {
                initialize() {
                    this.waitFor(c.default, f.default, C.default)
                }
                isOpen() {
                    let e = __OVERLAY__ ? m.AppContext.OVERLAY : m.AppContext.APP;
                    return !!(S && I.length > 0 && g === e)
                }
                getProps() {
                    return {
                        invite: I.length > 0 ? I[0][0] : null,
                        error: null != l && "" !== l ? l : null,
                        submitting: _
                    }
                }
            }
            T.displayName = "InviteModalStore";
            var A = new T(s.default, {
                OVERLAY_INITIALIZE: N,
                CONNECTION_OPEN: N,
                CONNECTION_CLOSED: function() {
                    S = !1
                },
                INVITE_MODAL_OPEN: function(e) {
                    let t = e.invite;
                    if (null == t) return !1;
                    let n = t.state === m.InviteStates.EXPIRED || t.state === m.InviteStates.BANNED || t.state === m.InviteStates.ERROR;
                    if (!n) {
                        let {
                            channel: e,
                            guild: n
                        } = t;
                        if (null == e) return !1;
                        if ((0, o.isMultiUserDM)(e.type)) {
                            if (null != d.default.getChannel(e.id)) return (0, r.transitionToGuild)(m.ME, e.id), E.default.focus(), !1
                        } else {
                            if (null == n) return !1;
                            if (null != c.default.getGuild(n.id) && !(0, i.isStreamInvite)(t)) {
                                let e = function(e) {
                                    if ((0, i.isRoleSubscriptionInvite)(e)) return p.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                                    let {
                                        channel: t
                                    } = e;
                                    if (null != t) {
                                        let e = d.default.getChannel(t.id);
                                        if (h.default.can(m.Permissions.VIEW_CHANNEL, e)) return t.id
                                    }
                                    return null
                                }(t);
                                return (0, r.transitionToGuild)(n.id, e), E.default.focus(), !1
                            }
                        }
                    }
                    if (I.some(e => {
                            let [n] = e;
                            return n.code === t.code
                        })) return !1;
                    g = e.context, _ = !1;
                    let l = function(e) {
                        let {
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            code: l,
                            state: a,
                            target_type: s,
                            target_user: i,
                            target_application: r,
                            stage_instance: o,
                            type: d,
                            channel: c,
                            guild: f
                        } = e, h = {
                            code: l,
                            state: a,
                            approximate_member_count: t,
                            approximate_presence_count: n,
                            target_type: s,
                            target_user: i,
                            target_application: r,
                            stage_instance: o,
                            type: d
                        };
                        return null != c && (h.channel = {
                            ...c
                        }), null != f && (h.guild = new u.default(f)), null != e.inviter && (h.inviter = {
                            ...e.inviter
                        }), h
                    }(t);
                    I.push([l, e.resolve])
                },
                INVITE_MODAL_CLOSE: function() {
                    if (l = null, _ = !1, I.length > 0) {
                        let [, e] = I.shift();
                        null != e && e()
                    }
                },
                INVITE_ACCEPT: function() {
                    _ = !0
                },
                INVITE_MODAL_ERROR: function(e) {
                    let {
                        message: t
                    } = e;
                    l = t, _ = !1
                }
            })
        },
        670984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("913144"),
                i = n("135230"),
                r = n("316272"),
                o = n("782340");
            let u = "ActivityInviteManager",
                d = () => {
                    s.default.dispatch({
                        type: "ACTIVITY_INVITE_MODAL_CLOSE"
                    })
                };
            class c extends r.default {
                _initialize() {
                    s.default.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
                }
                _terminate() {
                    s.default.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.default.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
                }
                handleModalOpen(e) {
                    let {
                        activity: t,
                        isPrivate: s
                    } = e;
                    s ? (0, a.openModal)(e => (0, l.jsx)(i.default, {
                        title: o.default.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
                            name: t.name
                        }),
                        body: o.default.Messages.ACTIVITY_INVITE_PRIVATE,
                        confirmText: o.default.Messages.OKAY,
                        ...e
                    }), {
                        onCloseCallback: d,
                        modalKey: u
                    }) : (0, a.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("582139").then(n.bind(n, "582139"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    }, {
                        onCloseCallback: d,
                        modalKey: u
                    })
                }
                handleModalClose(e) {
                    (0, a.closeModal)(u)
                }
            }
            var f = new c
        },
        951039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("712596"),
                i = n("697218"),
                r = n("153769"),
                o = n("719923"),
                u = n("805199"),
                d = n("513196"),
                c = n("42723"),
                f = n("605475");

            function h(e) {
                let {
                    isActive: t
                } = e, {
                    persistIcon: n
                } = (0, s.useCanUseDesktopInAppIcons)({
                    location: "AppIconHome"
                }), [h, C, E] = (0, a.useStateFromStoresArray)([i.default, u.default], () => [u.default.getCurrentDesktopIcon(), u.default.isEditorOpen, o.default.isPremium(i.default.getCurrentUser())]), m = f.ICONS_BY_ID[h], p = h !== d.FreemiumAppIconIds.DEFAULT && (E || C), g = (0, l.jsx)(r.default, {
                    width: 30,
                    height: 22
                });
                return (n || t) && null != m && p ? (0, l.jsx)(c.default, {
                    id: h,
                    width: 48
                }) : g
            }
        },
        651896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("713726"),
                i = n("194051");

            function r() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcastsToValidateChannels());
                (0, l.useEffect)(() => {
                    e.length > 0 && (0, s.maybeFetchBroadcastChannels)()
                }, [e])
            }
        },
        520480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackNewBroadcastDetected: function() {
                    return f
                }
            });
            var l = n("884691"),
                a = n("917351"),
                s = n.n(a),
                i = n("716241"),
                r = n("9759"),
                o = n("754493"),
                u = n("813531"),
                d = n("49111");
            let c = (e, t) => [...t].filter(t => !e.has(t)),
                f = () => {
                    let e = (0, u.default)(),
                        t = (0, o.default)(),
                        {
                            canViewBroadcasts: n
                        } = r.default.useExperiment({
                            location: "Home Button"
                        }, {
                            autoTrackExposure: !1
                        }),
                        a = l.useRef(t),
                        f = l.useRef(new Set);
                    l.useEffect(() => {
                        let l = new Set(e.map(e => e.channelId)),
                            r = !s.isEqual(f.current, l);
                        if (n && r) {
                            let n = c(f.current, l);
                            i.default.trackWithMetadata(d.AnalyticEvents.NEW_BROADCAST_DETECTED, {
                                active_broadcast_highlight: e.length > 0,
                                num_active_broadcasts: e.length,
                                is_broadcasting: t,
                                prev_is_broadcasting: a.current,
                                prev_num_active_broadcasts: f.current.size,
                                new_broadcast_channel_ids: n,
                                broadcast_channel_ids: [...l]
                            }), f.current = l, a.current = t
                        }
                    }, [e, t, n])
                }
        },
        813531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("101125"),
                s = n("194051");

            function i() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getBroadcast()),
                    t = (0, l.useStateFromStores)([s.default], () => s.default.getBroadcasts());
                return null != e ? [e].concat(t) : t
            }
        },
        749387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("669491"),
                r = n("77078"),
                o = n("630086"),
                u = n("716241"),
                d = n("393414"),
                c = n("546463"),
                f = n("697218"),
                h = n("953109"),
                C = n("774223"),
                E = n("158998"),
                m = n("754493"),
                p = n("813531"),
                g = n("395635"),
                S = n("49111"),
                _ = n("782340"),
                I = n("795329");

            function N(e) {
                var t;
                let {
                    userId: n,
                    applicationId: a
                } = e, i = (0, s.useStateFromStores)([f.default], () => f.default.getUser(n)), o = null !== (t = E.default.getGlobalName(i)) && void 0 !== t ? t : E.default.getUserTag(i), u = (0, s.useStateFromStores)([c.default], () => c.default.getDetectableGame(a));
                return null == i ? null : (0, l.jsxs)("div", {
                    className: I.broadcast,
                    children: [(0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: I.inline,
                            children: [(0, l.jsx)(r.Avatar, {
                                size: r.AvatarSizes.SIZE_16,
                                src: i.getAvatarURL(null, 16),
                                "aria-label": o
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                children: o
                            })]
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: (null == u ? void 0 : u.name) != null ? _.default.Messages.STREAMING.format({
                                name: u.name
                            }) : _.default.Messages.STREAMING_A_GAME
                        })]
                    }), (0, l.jsx)(h.default, {
                        game: u
                    })]
                })
            }

            function T(e) {
                let {
                    closePopout: t
                } = e, n = (0, p.default)(), s = n.slice(0, 3), c = (0, m.default)(), f = n.length - s.length;
                return a.useEffect(() => {
                    u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_POPOUT_VIEWED, {
                        num_broadcasts_shown: s.length,
                        num_active_broadcasts: n.length,
                        is_broadcasting: c
                    })
                }, [n.length, s.length, c]), (0, l.jsxs)("div", {
                    className: I.container,
                    children: [(0, l.jsxs)("div", {
                        className: I.header,
                        children: [(0, l.jsxs)("div", {
                            className: I.inline,
                            children: [(0, l.jsx)(C.default, {
                                color: i.default.colors.HEADER_PRIMARY.css,
                                height: 16,
                                width: 16
                            }), (0, l.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: _.default.Messages.LIVE_BROADCASTS
                            })]
                        }), (0, l.jsx)(g.default, {})]
                    }), s.map((e, t) => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(N, {
                            ...e
                        }, e.userId), t !== s.length - 1 && (0, l.jsx)("hr", {
                            className: I.separator
                        })]
                    })), f > 0 && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("hr", {
                            className: I.separator
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: _.default.Messages.MORE_OPEN_BROADCASTS.format({
                                count: f
                            })
                        })]
                    }), (0, l.jsx)(r.Button, {
                        onClick: () => {
                            (0, d.transitionTo)(S.Routes.ME), o.default.setSection(S.FriendsSections.ONLINE), u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_LIST_VISITED, {
                                num_active_broadcasts: n.length,
                                friends_tab_clicked: !1,
                                is_broadcasting: c
                            }), t()
                        },
                        className: I.button,
                        children: _.default.Messages.VIEW_OPEN_BROADCASTS
                    })]
                })
            }
        },
        395635: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("298878"),
                i = n("782340");

            function r(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)(a.Tooltip, {
                    text: i.default.Messages.BROADCASTING_BETA_TOOLTIP_TEXT,
                    children: e => (0, l.jsx)(s.default, {
                        ...e,
                        className: t
                    })
                })
            }
        },
        44723: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("5667"),
                s = n("782340"),
                i = n("875502"),
                r = n("655361");

            function o(e) {
                let {
                    markAsDismissed: t
                } = e;
                return (0, l.jsx)(a.default, {
                    header: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_HEADER,
                    content: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_BODY,
                    buttonCTA: s.default.Messages.GOT_IT,
                    onClick: () => {},
                    markAsDismissed: t,
                    caretPosition: a.default.CaretPosition.BOTTOM_CENTER,
                    asset: (0, l.jsx)("img", {
                        src: r,
                        alt: "",
                        className: i.image
                    }),
                    className: i.content
                })
            }
        },
        481699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340");

            function s(e) {
                let {
                    channel: t,
                    embeddedApps: n
                } = e;
                if (t.type === l.ChannelTypes.GUILD_VOICE) {
                    if (null == n || !(n.length > 0)) return;
                    {
                        let e = n.map(e => e.application.name);
                        return a.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_DESCRIBED_BY_LABEL_ACTIVITIES.format({
                            activeActivities: e.join(", ")
                        })
                    }
                }
            }
        },
        222481: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340");

            function s(e) {
                if (null == e) return null;
                switch (e.type) {
                    case l.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return a.default.Messages.NEWS_CHANNEL;
                    case l.ChannelTypes.GUILD_STORE:
                        return a.default.Messages.STORE_CHANNEL;
                    case l.ChannelTypes.DM:
                    case l.ChannelTypes.GROUP_DM:
                        return a.default.Messages.DM;
                    case l.ChannelTypes.PRIVATE_THREAD:
                        return a.default.Messages.PRIVATE_THREAD;
                    case l.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case l.ChannelTypes.PUBLIC_THREAD:
                        return a.default.Messages.THREAD;
                    case l.ChannelTypes.GUILD_TEXT:
                        return a.default.Messages.TEXT_CHANNEL;
                    case l.ChannelTypes.GUILD_FORUM:
                        let t = e.isMediaChannel();
                        return t ? a.default.Messages.MEDIA_CHANNEL : a.default.Messages.FORUM_CHANNEL;
                    case l.ChannelTypes.GUILD_MEDIA:
                        return a.default.Messages.MEDIA_CHANNEL;
                    case l.ChannelTypes.GUILD_STAGE_VOICE:
                        return a.default.Messages.STAGE_CHANNEL;
                    case l.ChannelTypes.GUILD_VOICE:
                        return a.default.Messages.VOICE_CHANNEL;
                    case l.ChannelTypes.GUILD_CATEGORY:
                    default:
                        return null
                }
            }
        },
        557661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelSubtitle: function() {
                    return a
                }
            });
            var l = n("782340");

            function a(e) {
                if (null == e) return null;
                switch (e.type) {
                    case "embedded-activities":
                    case "event":
                        return {
                            subtitle: e.name
                        };
                    case "go-live":
                        return {
                            subtitle: l.default.Messages.GO_LIVE_SUBTITLE
                        }
                }
                return null
            }
        },
        120363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelListUpsells: function() {
                    return r
                },
                useChannelListUpsellLocationTrackerRef: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("308503"),
                s = n("16470");
            let i = (0, a.default)(e => ({
                upsellsByGuildId: {}
            }));

            function r(e) {
                return i(t => {
                    var n;
                    let l = {};
                    return null == e ? l : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : l
                }, s.default)
            }

            function o(e) {
                if (null == e) return !1;
                try {
                    let t = window.getComputedStyle(e);
                    return t.overflow.includes("scroll")
                } catch (e) {
                    return !1
                }
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = l.useRef(null);
                return l.useLayoutEffect(() => {
                    let l = a.current,
                        s = () => {
                            requestAnimationFrame(() => {
                                var l, s, r, o, u;
                                let d = null !== (s = null === (l = a.current) || void 0 === l ? void 0 : l.getBoundingClientRect()) && void 0 !== s ? s : null;
                                r = {
                                    name: t,
                                    guildId: e,
                                    disabled: n,
                                    boundingRect: null != d ? d : null
                                }, i.setState(e => ({
                                    upsellsByGuildId: {
                                        ...null !== (o = e.upsellsByGuildId) && void 0 !== o ? o : {},
                                        [r.guildId]: {
                                            ...null !== (u = e.upsellsByGuildId[r.guildId]) && void 0 !== u ? u : {},
                                            [r.name]: r
                                        }
                                    }
                                }))
                            })
                        };
                    if (null == l) return s(), () => {};
                    let r = function(e) {
                        let t = e.parentNode;
                        for (; null != t && t !== document.body && !o(t);) t = t.parentNode;
                        return o(t) ? t : null
                    }(l);
                    return s(), null == r || r.addEventListener("scroll", s, {
                        passive: !0
                    }), () => {
                        null == r || r.removeEventListener("scroll", s)
                    }
                }, [e, t, n]), a
            }
        },
        228854: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                s = n("151426"),
                i = n("77078"),
                r = n("272030"),
                o = n("369964"),
                u = n("778588"),
                d = n("227602"),
                c = n("522049"),
                f = n("962541"),
                h = n("13798"),
                C = n("56947"),
                E = n("386045"),
                m = n("803725"),
                p = n("49111"),
                g = n("782340"),
                S = n("508170");

            function _(e) {
                (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("630950").then(n.bind(n, "630950"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }
            let I = e => {
                let {
                    keybindString: t,
                    children: n
                } = e, a = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t()
                };
                return (0, l.jsx)(i.Popout, {
                    shouldShow: !1,
                    position: "top",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: n
                        } = e;
                        return (0, l.jsx)(o.default, {
                            dismissibleContent: s.DismissibleContent.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: S.clipsEducationArt,
                            position: "top",
                            header: (0, l.jsx)("div", {
                                className: S.header,
                                children: g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
                                    keybind: t,
                                    keybindHook: () => (0, l.jsx)("span", {
                                        className: S.keybindHintKeys,
                                        children: (0, l.jsx)(i.KeyCombo, {
                                            className: S.keybindShortcut,
                                            shortcut: t
                                        })
                                    })
                                })
                            }),
                            headerClassName: S.clipsEducationHeader,
                            body: (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: S.bodyText,
                                    children: g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
                                        keybindHook: () => (0, l.jsx)("div", {
                                            className: S.keyCombo,
                                            children: t
                                        }),
                                        keybind: t
                                    })
                                })
                            }),
                            onClose: e => {
                                a(e, n)
                            }
                        })
                    },
                    children: () => n
                })
            };
            var N = () => {
                let e = (0, a.default)([u.default], () => u.default.hasLayers()),
                    t = (0, C.useEnableClips)(),
                    [n, s] = (0, a.useStateFromStoresArray)([E.default], () => [E.default.getSettings().clipsEnabled, E.default.getIsSavingClip()]),
                    i = (0, a.default)([d.default], () => d.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP));
                if (!(t && n) || null == i || e) return null;
                let r = h.toString(i.shortcut, !0);
                return (0, l.jsx)(I, {
                    keybindString: r,
                    children: (0, l.jsx)(f.default, {
                        disabled: s,
                        tooltipText: null != i ? g.default.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
                            hotkey: h.toString(null == i ? void 0 : i.shortcut, !0)
                        }) : g.default.Messages.CLIPS_EDIT_SAVE_CLIP,
                        onClick: m.saveClip,
                        onContextMenu: _,
                        icon: c.default
                    })
                })
            }
        },
        243632: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDropsExperiment: function() {
                    return E
                },
                useShowEligibilityEnrollmentTooltip: function() {
                    return m
                },
                useAnyDropsEnabled: function() {
                    return p
                },
                useFetchInitialDropProgress: function() {
                    return g
                },
                useActivityPanelDrop: function() {
                    return S
                },
                useTrackDropsImpression: function() {
                    return _
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("913144"),
                i = n("428958"),
                r = n("862853"),
                o = n("10641"),
                u = n("568307"),
                d = n("376152"),
                c = n("931115"),
                f = n("180273"),
                h = n("579565"),
                C = n("411511");

            function E(e) {
                let t, n;
                let l = c.DropsForGoLiveFortniteExperiment.useExperiment({
                    location: "59cc4b_1"
                });
                if (null == e) return null;
                let a = (0, h.getDrop)(e);
                if (null == a) return null;
                if (a.dropsQuestId === C.FORTNITE_QUEST_ID) t = c.DropsForGoLiveFortniteExperiment, n = l;
                else t = null, n = null;
                return null == t || null == n ? null : {
                    experiment: t,
                    config: n,
                    drop: a
                }
            }

            function m(e) {
                var t;
                let n = (0, a.useStateFromStores)([f.default], () => f.default.serverEligibleByQuestIds),
                    i = E(e),
                    r = function(e) {
                        let t = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGamesSeen(!1)),
                            n = l.useMemo(() => (0, h.getEligibleGameLastSeenStartTimeSeconds)(), []),
                            s = (0, h.isDropGameDetected)(e, t, n);
                        return s
                    }(e),
                    o = null != i && n[i.drop.dropsQuestId];
                null != i && o && r && i.experiment.trackExposure({
                    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
                });
                let c = null == i ? void 0 : null === (t = i.config) || void 0 === t ? void 0 : t.dropsEnabled,
                    C = null == i ? void 0 : i.drop,
                    m = null == C || (0, h.getDropExpired)(C);
                return l.useEffect(() => {
                    c && !m && r && null != C && s.default.wait(() => {
                        null == o && (0, d.fetchDropsEligibility)(C.dropsQuestId)
                    })
                }, [o, C, c, m, r]), null != C && !!c && !m && o && r
            }

            function p() {
                let e = E(C.PartnerGame.FORTNITE);
                return null == e ? void 0 : e.config.dropsEnabled
            }

            function g(e) {
                let t = E(e),
                    n = null == t ? void 0 : t.drop,
                    s = (0, a.useStateFromStores)([f.default], () => null != n && f.default.serverEligibleByQuestIds[n.dropsQuestId]),
                    i = (0, a.useStateFromStores)([f.default], () => f.default.hasInitialProgressFetched);
                l.useEffect(() => {
                    null != n && s && !i && (0, d.fetchProgress)(n.dropsQuestId)
                }, [n, s, i])
            }

            function S(e, t, n, l) {
                var s;
                let i = E(e),
                    u = null == i ? void 0 : i.drop,
                    d = (0, a.useStateFromStores)([f.default], () => null != u && f.default.serverEligibleByQuestIds[u.dropsQuestId]),
                    c = (0, a.useStateFromStores)([f.default], () => f.default.getIsPartnerGameQuestComplete(e)),
                    C = (0, h.doesGameTitleMatchList)(null == t ? void 0 : t.name, null !== (s = null == u ? void 0 : u.gameSearchTerm) && void 0 !== s ? s : []),
                    m = (0, r.useIsAnyContentShown)([n, l]),
                    p = (0, o.useIsDismissibleContentDismissed)(l),
                    g = null == u || (0, h.getDropExpired)(u),
                    S = !!(null != u && !g && C && (null == i ? void 0 : i.config.dropsEnabled) && d);
                return {
                    partnerGame: S ? e : null,
                    dropsActivityPanelExperienceBlocked: m,
                    showDropsSparkles: !c && !p
                }
            }

            function _(e, t, n) {
                let l = (0, h.getDrop)(e);
                (0, i.default)({
                    type: t,
                    name: n,
                    properties: {
                        drops_quest_id: null == l ? void 0 : l.dropsQuestId,
                        game_id: null == l ? void 0 : l.dropsGameId
                    }
                })
            }
        },
        917973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");

            function a() {
                return (0, l.jsxs)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsxs)("g", {
                        clipPath: "url(#clip0_1378_82282)",
                        children: [(0, l.jsx)("path", {
                            d: "M8.00009 15.4171C12.0001 15.4171 14.8572 14 14.8572 10.8457C14.8572 7.41711 12.9286 5.21429 9.5 3.5L11.0629 1.67997C11.1315 1.56599 11.1686 1.43593 11.1707 1.30296C11.1727 1.16999 11.1396 1.03885 11.0746 0.922821C11.0096 0.806793 10.9151 0.710005 10.8007 0.642268C10.6862 0.57453 10.5559 0.538252 10.4229 0.537109H5.57723C5.44425 0.538252 5.31394 0.57453 5.1995 0.642268C5.08506 0.710005 4.99057 0.806793 4.92559 0.922821C4.86062 1.03885 4.82747 1.16999 4.82951 1.30296C4.83156 1.43593 4.86872 1.56599 4.93723 1.67997L6.5 3.5C3.07143 5.22571 1.14294 7.43997 1.14294 10.8685C1.14294 14 4.00009 15.4171 8.00009 15.4171Z",
                            fill: "#B9BBBE",
                            stroke: "#B9BBBE",
                            strokeWidth: "1.14286",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, l.jsxs)("g", {
                            clipPath: "url(#clip1_1378_82282)",
                            children: [(0, l.jsx)("mask", {
                                id: "path-2-inside-1_1378_82282",
                                fill: "white",
                                children: (0, l.jsx)("path", {
                                    d: "M11.9667 7.3558L9.45706 7.13802L8.47706 4.83062C8.30077 4.41063 7.69929 4.41063 7.52299 4.83062L6.543 7.1432L4.03857 7.3558C3.58227 7.39209 3.39561 7.96246 3.74301 8.2632L5.64597 9.91208L5.0756 12.3595C4.9719 12.8054 5.45412 13.158 5.84819 12.9195L8.00003 11.6232L10.1519 12.9247C10.5459 13.1632 11.0282 12.8106 10.9245 12.3647L10.3541 9.91208L12.257 8.2632C12.6045 7.96246 12.423 7.39209 11.9667 7.3558ZM8.00003 10.6536L6.05041 11.8306L6.56892 9.61134L4.84745 8.11801L7.11855 7.92098L8.00003 5.83136L8.88669 7.92616L11.1578 8.1232L9.43632 9.61653L9.95483 11.8358L8.00003 10.6536Z"
                                })
                            }), (0, l.jsx)("path", {
                                d: "M11.9667 7.3558L9.45706 7.13802L8.47706 4.83062C8.30077 4.41063 7.69929 4.41063 7.52299 4.83062L6.543 7.1432L4.03857 7.3558C3.58227 7.39209 3.39561 7.96246 3.74301 8.2632L5.64597 9.91208L5.0756 12.3595C4.9719 12.8054 5.45412 13.158 5.84819 12.9195L8.00003 11.6232L10.1519 12.9247C10.5459 13.1632 11.0282 12.8106 10.9245 12.3647L10.3541 9.91208L12.257 8.2632C12.6045 7.96246 12.423 7.39209 11.9667 7.3558ZM8.00003 10.6536L6.05041 11.8306L6.56892 9.61134L4.84745 8.11801L7.11855 7.92098L8.00003 5.83136L8.88669 7.92616L11.1578 8.1232L9.43632 9.61653L9.95483 11.8358L8.00003 10.6536Z",
                                fill: "#292B2F"
                            }), (0, l.jsx)("path", {
                                d: "M9.45706 7.13802L7.61621 7.91986L8.08626 9.02658L9.28416 9.13053L9.45706 7.13802ZM8.47706 4.83062L6.63292 5.60471L6.63622 5.61247L8.47706 4.83062ZM7.52299 4.83062L9.36448 5.61099L9.36712 5.6047L7.52299 4.83062ZM6.543 7.1432L6.71216 9.13604L7.9139 9.03403L8.38448 7.92356L6.543 7.1432ZM4.03857 7.3558L4.19716 9.34953L4.20773 9.34863L4.03857 7.3558ZM3.74301 8.2632L5.05272 6.75168L5.05201 6.75108L3.74301 8.2632ZM5.64597 9.91208L7.59377 10.366L7.86766 9.19079L6.95567 8.40057L5.64597 9.91208ZM5.0756 12.3595L3.1278 11.9055L3.12758 11.9064L5.0756 12.3595ZM5.84819 12.9195L4.81616 11.2063L4.81258 11.2085L5.84819 12.9195ZM8.00003 11.6232L9.03508 9.91185L8.00209 9.28708L6.968 9.91002L8.00003 11.6232ZM10.1519 12.9247L11.1875 11.2137L11.1869 11.2133L10.1519 12.9247ZM10.9245 12.3647L8.97644 12.8177H8.97644L10.9245 12.3647ZM10.3541 9.91208L9.04439 8.40057L8.13288 9.19037L8.40608 10.3651L10.3541 9.91208ZM12.257 8.2632L10.948 6.75108L10.9473 6.75169L12.257 8.2632ZM8.00003 10.6536L9.03502 8.94219L8.00093 8.31679L6.96635 8.94139L8.00003 10.6536ZM6.05041 11.8306L4.10286 11.3756L3.02377 15.9941L7.08408 13.5428L6.05041 11.8306ZM6.56892 9.61134L8.51647 10.0664L8.79102 8.8913L7.87948 8.10056L6.56892 9.61134ZM4.84745 8.11801L4.67459 6.1255L-0.0310004 6.53375L3.5369 9.62879L4.84745 8.11801ZM7.11855 7.92098L7.29142 9.91349L8.49266 9.80928L8.96131 8.69832L7.11855 7.92098ZM8.00003 5.83136L9.84184 5.05178L7.99691 0.693003L6.15728 5.05402L8.00003 5.83136ZM8.88669 7.92616L7.04488 8.70574L7.51423 9.8146L8.71382 9.91868L8.88669 7.92616ZM11.1578 8.1232L12.4683 9.63398L16.0362 6.53893L11.3307 6.13068L11.1578 8.1232ZM9.43632 9.61653L8.12576 8.10575L7.21422 8.89648L7.48877 10.0716L9.43632 9.61653ZM9.95483 11.8358L8.91984 13.5471L12.9826 16.0042L11.9024 11.3807L9.95483 11.8358ZM12.1396 5.36328L9.62996 5.14551L9.28416 9.13053L11.7938 9.34831L12.1396 5.36328ZM11.2979 6.35618L10.3179 4.04878L6.63622 5.61247L7.61621 7.91986L11.2979 6.35618ZM10.3212 4.05655C9.45878 2.00198 6.54128 2.00198 5.67887 4.05655L9.36712 5.6047C8.8573 6.81927 7.14275 6.81927 6.63294 5.6047L10.3212 4.05655ZM5.68152 4.05027L4.70152 6.36285L8.38448 7.92356L9.36447 5.61098L5.68152 4.05027ZM6.37384 5.15037L3.8694 5.36296L4.20773 9.34863L6.71216 9.13604L6.37384 5.15037ZM3.87998 5.36209C1.64333 5.54001 0.753531 8.32058 2.43401 9.77532L5.05201 6.75108C6.03768 7.60434 5.52122 9.24418 4.19716 9.3495L3.87998 5.36209ZM2.43331 9.77471L4.33626 11.4236L6.95567 8.40057L5.05272 6.75168L2.43331 9.77471ZM3.69816 9.45814L3.1278 11.9055L7.0234 12.8134L7.59377 10.366L3.69816 9.45814ZM3.12758 11.9064C2.62503 14.0674 4.9682 15.7899 6.88379 14.6305L4.81258 11.2085C5.94003 10.5261 7.31876 11.5434 7.02362 12.8125L3.12758 11.9064ZM6.88021 14.6326L9.03205 13.3363L6.968 9.91002L4.81616 11.2063L6.88021 14.6326ZM6.96498 13.3345L9.11682 14.636L11.1869 11.2133L9.03508 9.91185L6.96498 13.3345ZM9.11626 14.6357C11.0319 15.7951 13.375 14.0726 12.8725 11.9116L8.97644 12.8177C8.6813 11.5486 10.06 10.5313 11.1875 11.2137L9.11626 14.6357ZM12.8725 11.9116L12.3021 9.45905L8.40608 10.3651L8.97644 12.8177L12.8725 11.9116ZM11.6638 11.4236L13.5667 9.77471L10.9473 6.75169L9.04439 8.40057L11.6638 11.4236ZM13.566 9.77532C15.2133 8.34936 14.4056 5.54348 12.1253 5.36209L11.8081 9.3495C10.4404 9.2407 9.99563 7.57556 10.948 6.75108L13.566 9.77532ZM6.96635 8.94139L5.01673 10.1184L7.08408 13.5428L9.0337 12.3657L6.96635 8.94139ZM7.99796 12.2856L8.51647 10.0664L4.62138 9.15631L4.10286 11.3756L7.99796 12.2856ZM7.87948 8.10056L6.15801 6.60724L3.5369 9.62879L5.25837 11.1221L7.87948 8.10056ZM5.02032 10.1105L7.29142 9.91349L6.94569 5.92846L4.67459 6.1255L5.02032 10.1105ZM8.96131 8.69832L9.84278 6.6087L6.15728 5.05402L5.2758 7.14364L8.96131 8.69832ZM6.15822 6.61094L7.04488 8.70574L10.7285 7.14659L9.84184 5.05178L6.15822 6.61094ZM8.71382 9.91868L10.9849 10.1157L11.3307 6.13068L9.05956 5.93365L8.71382 9.91868ZM9.84724 6.61242L8.12576 8.10575L10.7469 11.1273L12.4683 9.63398L9.84724 6.61242ZM7.48877 10.0716L8.00729 12.2908L11.9024 11.3807L11.3839 9.16149L7.48877 10.0716ZM10.9898 10.1244L9.03502 8.94219L6.96504 12.3649L8.91984 13.5471L10.9898 10.1244Z",
                                fill: "#292B2F",
                                mask: "url(#path-2-inside-1_1378_82282)"
                            }), (0, l.jsx)("mask", {
                                id: "path-4-inside-2_1378_82282",
                                fill: "white",
                                children: (0, l.jsx)("path", {
                                    d: "M10.6811 7.81008L8.98505 7.6629L8.32275 6.10351C8.2036 5.81966 7.79711 5.81966 7.67796 6.10351L7.01566 7.66641L5.3231 7.81008C4.62661 7.81008 4.49996 8 5.12336 8.42333L6.40942 9.53768L6.02395 11.1917C6.00007 12 5.86977 12.1684 6.54609 11.5701L8.00036 10.6941L9.45462 11.5737C9.72094 11.7348 10.5001 12.5 9.97675 11.1952L9.59129 9.53768L10.8773 8.42333C11.5001 8.19204 11.7365 7.81008 10.6811 7.81008ZM8.00036 10.0388L6.68275 10.8343L7.03318 9.33443L5.86977 8.32521L7.40463 8.19204L8.00036 6.77983L8.59958 8.19555L10.1344 8.32871L8.97103 9.33794L9.32146 10.8378L8.00036 10.0388Z"
                                })
                            }), (0, l.jsx)("path", {
                                d: "M10.6811 7.81008L8.98505 7.6629L8.32275 6.10351C8.2036 5.81966 7.79711 5.81966 7.67796 6.10351L7.01566 7.66641L5.3231 7.81008C4.62661 7.81008 4.49996 8 5.12336 8.42333L6.40942 9.53768L6.02395 11.1917C6.00007 12 5.86977 12.1684 6.54609 11.5701L8.00036 10.6941L9.45462 11.5737C9.72094 11.7348 10.5001 12.5 9.97675 11.1952L9.59129 9.53768L10.8773 8.42333C11.5001 8.19204 11.7365 7.81008 10.6811 7.81008ZM8.00036 10.0388L6.68275 10.8343L7.03318 9.33443L5.86977 8.32521L7.40463 8.19204L8.00036 6.77983L8.59958 8.19555L10.1344 8.32871L8.97103 9.33794L9.32146 10.8378L8.00036 10.0388Z",
                                fill: "#292B2F"
                            }), (0, l.jsx)("path", {
                                d: "M10.6811 7.81008L10.5643 9.15667L10.6226 9.16173H10.6811V7.81008ZM8.98505 7.6629L7.74096 8.19129L8.05863 8.93924L8.8682 9.00949L8.98505 7.6629ZM8.32275 6.10351L7.07643 6.62665L7.07866 6.6319L8.32275 6.10351ZM7.67796 6.10351L8.92249 6.6309L8.92427 6.62665L7.67796 6.10351ZM7.01566 7.66641L7.12998 9.01321L7.94215 8.94427L8.26017 8.19379L7.01566 7.66641ZM5.3231 7.81008V9.16173H5.38037L5.43743 9.15689L5.3231 7.81008ZM5.12336 8.42333L6.00849 7.40181L5.94843 7.34977L5.88269 7.30512L5.12336 8.42333ZM6.40942 9.53768L7.7258 9.84446L7.9109 9.05021L7.29455 8.51616L6.40942 9.53768ZM6.02395 11.1917L4.70758 10.8849L4.67689 11.0166L4.6729 11.1518L6.02395 11.1917ZM6.54609 11.5701L5.84862 10.4124L5.74296 10.476L5.65056 10.5577L6.54609 11.5701ZM8.00036 10.6941L8.69987 9.53752L8.00175 9.11529L7.30289 9.53629L8.00036 10.6941ZM9.45462 11.5737L10.1545 10.4173L10.1541 10.4171L9.45462 11.5737ZM9.97675 11.1952L8.66024 11.5014L8.68369 11.6022L8.72224 11.6983L9.97675 11.1952ZM9.59129 9.53768L8.70616 8.51616L8.09014 9.04993L8.27477 9.84385L9.59129 9.53768ZM10.8773 8.42333L10.4067 7.15625L10.1772 7.24149L9.99222 7.40181L10.8773 8.42333ZM8.00036 10.0388L8.69983 8.8822L8.00096 8.45955L7.30177 8.88166L8.00036 10.0388ZM6.68275 10.8343L5.36655 10.5267L4.63728 13.648L7.38134 11.9914L6.68275 10.8343ZM7.03318 9.33443L8.34938 9.64196L8.53493 8.84781L7.91888 8.31341L7.03318 9.33443ZM5.86977 8.32521L5.75294 6.97862L2.57279 7.25452L4.98406 9.34623L5.86977 8.32521ZM7.40463 8.19204L7.52146 9.53863L8.33329 9.4682L8.65001 8.71739L7.40463 8.19204ZM8.00036 6.77983L9.24509 6.25297L7.99825 3.3072L6.75498 6.25448L8.00036 6.77983ZM8.59958 8.19555L7.35484 8.72241L7.67204 9.4718L8.48276 9.54214L8.59958 8.19555ZM10.1344 8.32871L11.0201 9.34973L13.4314 7.25802L10.2513 6.98212L10.1344 8.32871ZM8.97103 9.33794L8.08533 8.31692L7.46929 8.85132L7.65483 9.64546L8.97103 9.33794ZM9.32146 10.8378L8.62198 11.9943L11.3677 13.6549L10.6377 10.5302L9.32146 10.8378ZM10.798 6.46349L9.1019 6.31631L8.8682 9.00949L10.5643 9.15667L10.798 6.46349ZM10.2291 7.13451L9.56684 5.57512L7.07866 6.6319L7.74096 8.19129L10.2291 7.13451ZM9.56905 5.58037C8.98622 4.19185 7.01449 4.19185 6.43166 5.58037L8.92427 6.62665C8.57972 7.44748 7.42099 7.44748 7.07644 6.62665L9.56905 5.58037ZM6.43345 5.57612L5.77114 7.13902L8.26017 8.19379L8.92248 6.63089L6.43345 5.57612ZM6.90133 6.3196L5.20878 6.46328L5.43743 9.15689L7.12998 9.01321L6.90133 6.3196ZM5.3231 6.45843C5.10802 6.45843 4.84452 6.47114 4.58999 6.53325C4.44279 6.56917 3.76471 6.73882 3.47608 7.44908C3.15174 8.24719 3.63364 8.86933 3.75832 9.01788C3.9431 9.23802 4.17343 9.4121 4.36403 9.54153L5.88269 7.30512C5.76159 7.22289 5.77398 7.21448 5.82894 7.27996C5.85758 7.31408 5.94673 7.4254 6.00911 7.60946C6.07876 7.81499 6.1177 8.12916 5.98047 8.46683C5.84997 8.78797 5.62675 8.9651 5.49284 9.04671C5.36321 9.12571 5.25893 9.15263 5.23081 9.15949C5.17642 9.17276 5.18995 9.16173 5.3231 9.16173V6.45843ZM4.23823 9.44484L5.52429 10.5592L7.29455 8.51616L6.00849 7.40181L4.23823 9.44484ZM5.09305 9.2309L4.70758 10.8849L7.34033 11.4985L7.7258 9.84446L5.09305 9.2309ZM4.6729 11.1518C4.66635 11.3734 4.65876 11.4066 4.64988 11.6197C4.64705 11.6874 4.64296 11.806 4.65294 11.9315C4.65839 12 4.68026 12.3558 4.92373 12.6956C5.07395 12.9053 5.30495 13.104 5.61868 13.2083C5.91447 13.3067 6.17762 13.2858 6.3497 13.2504C6.64872 13.1889 6.86511 13.0426 6.93214 12.9973C7.10307 12.8819 7.29288 12.7141 7.44162 12.5826L5.65056 10.5577C5.46114 10.7253 5.41361 10.7608 5.41951 10.7568C5.42905 10.7504 5.462 10.7285 5.51307 10.7028C5.55951 10.6794 5.66173 10.632 5.80505 10.6025C5.95216 10.5722 6.19396 10.5508 6.47159 10.6431C6.76716 10.7414 6.98318 10.9285 7.12116 11.1211C7.24527 11.2943 7.29575 11.4554 7.31684 11.5372C7.33927 11.6243 7.34562 11.6907 7.34773 11.7172C7.35154 11.7651 7.34865 11.7846 7.35083 11.7323C7.35196 11.7051 7.36962 11.4141 7.37501 11.2316L4.6729 11.1518ZM7.24356 12.7279L8.69782 11.8519L7.30289 9.53629L5.84862 10.4124L7.24356 12.7279ZM7.30084 11.8506L8.75511 12.7302L10.1541 10.4171L8.69987 9.53752L7.30084 11.8506ZM8.75473 12.73C8.72817 12.7139 8.72345 12.7086 8.77203 12.7445C8.79887 12.7643 8.87336 12.8202 8.92995 12.8612C9.00019 12.912 9.28841 13.1293 9.62677 13.2298C9.78218 13.276 10.3131 13.4107 10.8463 13.0654C11.4232 12.692 11.4968 12.0983 11.5043 11.8721C11.5127 11.6184 11.4612 11.3899 11.4195 11.2371C11.3729 11.066 11.3079 10.8831 11.2313 10.692L8.72224 11.6983C8.77644 11.8335 8.80159 11.9121 8.81145 11.9483C8.82631 12.0027 8.79771 11.9273 8.80249 11.7828C8.80635 11.6658 8.84988 11.1376 9.37713 10.7962C9.86087 10.483 10.3227 10.6165 10.3968 10.6385C10.466 10.6591 10.514 10.6811 10.5353 10.6914C10.5586 10.7027 10.5715 10.7105 10.5719 10.7107C10.573 10.7114 10.5685 10.7087 10.5574 10.7012C10.5465 10.6938 10.5325 10.684 10.5144 10.6709C10.4686 10.6378 10.4426 10.6177 10.3779 10.5699C10.335 10.5382 10.2476 10.4737 10.1545 10.4173L8.75473 12.73ZM11.2933 10.889L10.9078 9.23151L8.27477 9.84385L8.66024 11.5014L11.2933 10.889ZM10.4764 10.5592L11.7625 9.44484L9.99222 7.40181L8.70616 8.51616L10.4764 10.5592ZM11.3479 9.69041C11.5779 9.60499 11.8316 9.48518 12.0568 9.32017C12.1687 9.23817 12.3127 9.11663 12.4415 8.94784C12.5647 8.78658 12.7427 8.4909 12.7591 8.08449C12.8006 7.05456 11.9118 6.67221 11.6778 6.59303C11.3522 6.48286 10.9945 6.45843 10.6811 6.45843V9.16173C10.8955 9.16173 10.904 9.18505 10.8114 9.15373C10.7647 9.13794 10.5948 9.07633 10.4206 8.90404C10.2138 8.69948 10.0419 8.37256 10.058 7.97545C10.0719 7.63125 10.2211 7.40138 10.2928 7.30747C10.3703 7.20603 10.4402 7.15336 10.4588 7.1397C10.4975 7.11136 10.4881 7.12602 10.4067 7.15625L11.3479 9.69041ZM7.30177 8.88166L5.98417 9.67713L7.38134 11.9914L8.69894 11.1959L7.30177 8.88166ZM7.99895 11.1418L8.34938 9.64196L5.71698 9.02691L5.36655 10.5267L7.99895 11.1418ZM7.91888 8.31341L6.75547 7.30419L4.98406 9.34623L6.14748 10.3555L7.91888 8.31341ZM5.98659 9.6718L7.52146 9.53863L7.2878 6.84546L5.75294 6.97862L5.98659 9.6718ZM8.65001 8.71739L9.24573 7.30518L6.75498 6.25448L6.15925 7.6667L8.65001 8.71739ZM6.75562 7.30669L7.35484 8.72241L9.84432 7.66869L9.24509 6.25297L6.75562 7.30669ZM8.48276 9.54214L10.0176 9.6753L10.2513 6.98212L8.71641 6.84896L8.48276 9.54214ZM9.24874 7.30769L8.08533 8.31692L9.85674 10.359L11.0201 9.34973L9.24874 7.30769ZM7.65483 9.64546L8.00526 11.1453L10.6377 10.5302L10.2872 9.03041L7.65483 9.64546ZM10.0209 9.68117L8.69983 8.8822L7.30088 11.1954L8.62198 11.9943L10.0209 9.68117Z",
                                fill: "#292B2F",
                                mask: "url(#path-4-inside-2_1378_82282)"
                            })]
                        })]
                    }), (0, l.jsxs)("defs", {
                        children: [(0, l.jsx)("clipPath", {
                            id: "clip0_1378_82282",
                            children: (0, l.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: "white"
                            })
                        }), (0, l.jsx)("clipPath", {
                            id: "clip1_1378_82282",
                            children: (0, l.jsx)("rect", {
                                width: "12.4444",
                                height: "12.4444",
                                fill: "white",
                                transform: "translate(1.77783 2.66602)"
                            })
                        })]
                    })]
                })
            }
            n("884691")
        },
        48683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("79112"),
                r = n("271938"),
                o = n("945330"),
                u = n("599110"),
                d = n("243632"),
                c = n("180273"),
                f = n("411511"),
                h = n("49111"),
                C = n("782340"),
                E = n("918321");
            let m = (e, t, n) => {
                let l = t.assets.tooltipSrc;
                switch (e) {
                    case f.TooltipActions.STREAM_CTA:
                        return {
                            header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
                                gameName: t.title
                            }), body: t.messages.enrollmentTooltip(n), imgSrc: l, imgStyle: E.dropImgPreStreamNotice
                        };
                    case f.TooltipActions.TRACK_PROGRESS:
                        return {
                            header: C.default.Messages.DROP_ENROLLMENT_CTA_TOOLTIP_HEADER.format({
                                gameName: t.title
                            }), body: "", imgSrc: l, imgStyle: E.dropImgProgressTracker
                        };
                    case f.TooltipActions.QUEST_COMPLETION:
                        return {
                            header: C.default.Messages.DROPS_QUEST_COMPLETION_TOOLTIP_HEADER, body: t.messages.completionTooltip(n), imgSrc: l, imgStyle: E.dropImgQuestCompletion
                        };
                    case f.TooltipActions.LOADING_INITIAL_PROGRESS:
                        return {
                            header: "", body: "", imgSrc: l, imgStyle: E.dropImgPreStreamNotice
                        }
                }
            };

            function p(e) {
                let {
                    streamLengthRequirement: t,
                    viewerCountRequirement: n
                } = e, i = (0, a.useStateFromStores)([c.default], () => c.default.currentDropQuestStreamProgress), r = Math.floor(i / 100 * t).toString();
                return (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-sm/bold",
                        className: E.progressBarCount,
                        children: C.default.Messages.DROPS_STREAM_PROGRESS_INDICATOR.format({
                            minutesStreamed: r,
                            streamLengthRequirement: t
                        })
                    }), (0, l.jsx)("div", {
                        className: E.progressBarContainer,
                        children: (0, l.jsx)("div", {
                            className: E.progressBarOuter,
                            children: (0, l.jsx)("div", {
                                className: E.progressBarInner,
                                style: {
                                    width: "".concat(i, "%")
                                }
                            })
                        })
                    }), (0, l.jsxs)(s.Text, {
                        variant: "text-xs/medium",
                        className: E.viewerCount,
                        children: ["*", C.default.Messages.DROPS_REQUIRE_NUM_VIEWERS.format({
                            numViewers: n
                        }), "*"]
                    })]
                })
            }

            function g(e) {
                let {
                    onClose: t,
                    tooltipAction: n,
                    partnerGame: c
                } = e, g = (0, d.useDropsExperiment)(c);
                (0, d.useFetchInitialDropProgress)(c);
                let S = (0, a.useStateFromStores)([r.default], () => r.default.getId());
                if (null == g) return null;
                let {
                    streamLengthRequirement: _,
                    viewerCountRequirement: I
                } = g.config, N = g.drop, {
                    header: T,
                    body: A,
                    imgSrc: L,
                    imgStyle: R
                } = m(n, N, _), x = () => {
                    u.default.track(h.AnalyticEvents.DROPS_ACTIVITY_PANEL_POPOVER_CTA_CLICK, {
                        user_id: S,
                        drops_quest_id: N.dropsQuestId,
                        game_id: N.dropsGameId,
                        game_name: N.title.toLowerCase(),
                        tooltip_action: n
                    })
                }, v = () => {
                    t()
                };
                return (0, l.jsxs)("div", {
                    className: E.container,
                    children: [(0, l.jsx)("img", {
                        src: L,
                        alt: "",
                        className: R
                    }), (0, l.jsx)(s.Clickable, {
                        className: E.buttonClose,
                        "aria-label": C.default.Messages.CLOSE,
                        onClick: v,
                        children: (0, l.jsx)(o.default, {
                            width: 16,
                            height: 16,
                            className: E.closeIcon
                        })
                    }), n === f.TooltipActions.LOADING_INITIAL_PROGRESS ? (0, l.jsx)(s.Spinner, {
                        className: E.spinner
                    }) : (0, l.jsx)(s.Heading, {
                        className: E.title,
                        variant: "heading-md/extrabold",
                        children: T
                    }), n === f.TooltipActions.TRACK_PROGRESS ? (0, l.jsx)(p, {
                        streamLengthRequirement: _,
                        viewerCountRequirement: I
                    }) : (0, l.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        className: E.subTitle,
                        children: A
                    }), n === f.TooltipActions.QUEST_COMPLETION ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.Button, {
                            look: s.Button.Looks.INVERTED,
                            fullWidth: !0,
                            onClick: () => {
                                t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
                            },
                            children: C.default.Messages.REDEEM
                        }), (0, l.jsx)(s.Button, {
                            className: E.linkButtonContainer,
                            innerClassName: E.linkButton,
                            onClick: v,
                            look: s.Button.Looks.LINK,
                            fullWidth: !0,
                            color: s.Button.Colors.WHITE,
                            children: C.default.Messages.NOT_NOW
                        })]
                    }) : (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.INVERTED,
                        fullWidth: !0,
                        onClick: () => {
                            t(), i.default.open(h.UserSettingsSections.INVENTORY), x()
                        },
                        children: C.default.Messages.LEARN_MORE
                    }), (0, l.jsx)("div", {
                        className: E.pointer
                    })]
                })
            }
        },
        690874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("42203"),
                s = n("957255"),
                i = n("660478"),
                r = n("282109"),
                o = n("843455");

            function u(e) {
                return (0, l.useStateFromStoresObject)([a.default, i.default, r.default, s.default], () => {
                    let t = Object.keys(e);
                    return t.reduce((e, t) => {
                        let n = a.default.getChannel(t),
                            l = null == n ? void 0 : n.isGuildVocal();
                        return e.badge = e.badge + i.default.getMentionCount(t), e.unread = e.unread || !l && s.default.can(o.Permissions.VIEW_CHANNEL, n) && i.default.hasUnread(t) && !r.default.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
                    }, {
                        badge: 0,
                        unread: !1
                    })
                })
            }
        },
        149362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("42203"),
                s = n("316133"),
                i = n("379881"),
                r = n("49111");

            function o(e) {
                let t = (0, l.useStateFromStoresObject)([s.default, a.default, i.default], () => {
                    if (e !== r.FAVORITES) return s.default.getVoiceStates(e);
                    let t = i.default.getFavoriteChannels(),
                        n = {};
                    for (let e in t) {
                        let t = a.default.getChannel(e);
                        null != t && (n[e] = s.default.getVoiceStatesForChannel(t))
                    }
                    return n
                }, [e]);
                return t
            }
        },
        102135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                u = n("77078"),
                d = n("191225"),
                c = n("488464"),
                f = n("998716"),
                h = n("373469"),
                C = n("42203"),
                E = n("697218"),
                m = n("316133"),
                p = n("272339"),
                g = n("82636"),
                S = n("368121"),
                _ = n("228427"),
                I = n("619911"),
                N = n("811305"),
                T = n("449008"),
                A = n("379881"),
                L = n("49111"),
                R = n("782340"),
                x = n("455547"),
                v = n("805959");

            function O(e, t) {
                return 0 === t.length ? null : (0, l.jsxs)("div", {
                    className: x.row,
                    children: [(0, l.jsx)(e, {
                        className: x.activityIcon
                    }), (0, l.jsx)(N.default, {
                        guildId: void 0,
                        users: t,
                        max: 6
                    })]
                })
            }

            function M() {
                var e, t;
                let n = (0, o.useStateFromStoresArray)([A.default, C.default], () => Object.keys(A.default.getFavoriteChannels()).map(e => C.default.getChannel(e)).filter(T.isNotNullish)),
                    a = n.map(e => e.id),
                    s = n.filter(e => e.type === L.ChannelTypes.GUILD_VOICE),
                    i = n.filter(e => e.type === L.ChannelTypes.GUILD_STAGE_VOICE).map(e => e.id),
                    R = (0, o.useStateFromStoresArray)([m.default], () => r.flatMap(s, e => {
                        let t = m.default.getVoiceStatesForChannel(e);
                        return t.map(e => {
                            let {
                                user: t
                            } = e;
                            return t
                        })
                    }), [s]),
                    v = (0, o.useStateFromStoresArray)([c.default], () => r.flatMap(i, e => {
                        let t = c.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER);
                        return t.filter(e => e.type === f.StageChannelParticipantTypes.VOICE).map(e => {
                            let {
                                user: t
                            } = e;
                            return t
                        })
                    })),
                    M = (0, o.useStateFromStores)([c.default], () => {
                        let e = 0;
                        for (let t of i) e += c.default.getParticipantCount(t, f.StageChannelParticipantNamedIndex.AUDIENCE);
                        return e
                    }),
                    y = (0, o.useStateFromStoresArray)([h.default], () => h.default.getAllApplicationStreams().filter(e => a.includes(e.channelId)).map(e => e.ownerId), [a]),
                    D = (0, o.useStateFromStoresArray)([d.default], () => {
                        let e = d.default.getEmbeddedActivitiesByChannel(),
                            t = [];
                        for (let s of a) {
                            var n, l;
                            t.push(...null !== (l = null === (n = e.get(s)) || void 0 === n ? void 0 : n.flatMap(e => Array.from(e.connections.keys()))) && void 0 !== l ? l : [])
                        }
                        return t
                    }, [a]),
                    b = (0, o.useStateFromStoresArray)([E.default], () => D.map(e => E.default.getUser(e)), [D]),
                    G = (0, o.useStateFromStoresArray)([E.default], () => y.map(e => E.default.getUser(e)), [y]),
                    j = O(S.default, R.filter(e => !y.includes(e.id) && !D.includes(e.id)));
                let U = (e = v, t = M, 0 === e.length ? null : (0, l.jsxs)("div", {
                        className: x.row,
                        children: [(0, l.jsx)(_.default, {
                            className: x.activityIcon
                        }), (0, l.jsx)(N.default, {
                            guildId: void 0,
                            users: e,
                            max: 3
                        }), (0, l.jsxs)("div", {
                            className: x.stageListenerPill,
                            children: [(0, l.jsx)(p.default, {
                                width: 16,
                                height: 16
                            }), (0, l.jsx)(u.Text, {
                                className: x.stageListenerCount,
                                color: "text-normal",
                                variant: "text-xs/medium",
                                children: t
                            })]
                        })]
                    })),
                    P = O(I.default, G.filter(e => null != e && !D.includes(e.id))),
                    F = O(g.default, b);
                return (0, l.jsxs)(l.Fragment, {
                    children: [U, j, P, F]
                })
            }

            function y() {
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: s(x.row, x.rowGuildName),
                        children: (0, l.jsx)("span", {
                            className: s(x.guildNameText, x.guildNameTextLimitedSize),
                            children: R.default.Messages.FAVORITES_GUILD_NAME
                        })
                    }), (0, l.jsx)(M, {})]
                })
            }

            function D(e) {
                let {
                    "aria-label": t = !1,
                    children: n
                } = e;
                return (0, l.jsx)(u.Tooltip, {
                    hideOnClick: !0,
                    spacing: 20,
                    position: "right",
                    text: (0, l.jsx)(y, {}),
                    "aria-label": t,
                    tooltipClassName: v.listItemTooltip,
                    children: e => (0, l.jsx)("div", {
                        ...e,
                        children: n
                    })
                })
            }
        },
        369964: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("731898"),
                u = n("10641"),
                d = n("275623"),
                c = n("216422"),
                f = n("994428"),
                h = n("782340"),
                C = n("804920"),
                E = a.forwardRef(function(e, t) {
                    let {
                        body: n,
                        header: s,
                        artClassName: E,
                        headerClassName: m,
                        contentClassName: p,
                        tryItText: g,
                        onTryFeature: S,
                        onClose: _,
                        className: I,
                        inlineArt: N = !1,
                        isPremiumFeature: T = !1,
                        shouldUseHorizontalButtons: A = !1,
                        showGIFTag: L = !1,
                        dismissibleContent: R,
                        position: x = "top",
                        art: v,
                        isPremiumEarlyAccess: O = !1,
                        maxWidth: M = 280
                    } = e, y = A ? r.Button.Sizes.LARGE : r.Button.Sizes.MAX, [D, b] = a.useState(!1), {
                        ref: G,
                        width: j
                    } = (0, o.default)();

                    function U(e) {
                        (0, u.markDismissibleContentAsDismissed)(R, {
                            dismissAction: e
                        })
                    }
                    return a.useEffect(() => {
                        var e, t;
                        let n = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
                        !D && n > M && b(!0)
                    }, [D, j, G, M]), a.useEffect(() => {
                        (0, u.requestMarkDismissibleContentAsShown)(R)
                    }, [R]), (0, l.jsx)("div", {
                        className: I,
                        ref: t,
                        children: (0, l.jsxs)("div", {
                            className: i(C.content, p, {
                                [C.contentNoArt]: null == E || N,
                                [C.contentPremium]: T || O
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: i(E, N ? C.artInline : C.artAbsolute),
                                children: [L && (0, l.jsx)(d.default, {
                                    className: C.gifTag
                                }), v]
                            }), (0, l.jsxs)("div", {
                                className: C.body,
                                children: [(0, l.jsxs)(r.Heading, {
                                    className: i(T ? C.headerWithPremiumIcon : C.header, m),
                                    variant: "heading-md/bold",
                                    color: "always-white",
                                    children: [T && !O ? (0, l.jsx)(c.default, {
                                        className: C.premiumIcon
                                    }) : null, O ? (0, l.jsxs)(r.Text, {
                                        color: "always-white",
                                        variant: "eyebrow",
                                        className: C.earlyAccessBadgeContainer,
                                        children: [(0, l.jsx)(c.default, {
                                            className: C.earlyAccessIcon
                                        }), (0, l.jsx)("span", {
                                            className: C.earlyAccessText,
                                            children: h.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                        })]
                                    }) : null, s]
                                }), null == n ? null : "string" == typeof n ? (0, l.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: n
                                }) : n]
                            }), (0, l.jsx)("div", {
                                ref: G,
                                className: D || !A ? C.buttonContainerVertical : C.buttonContainerHorizontal,
                                children: null != S ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(r.Button, {
                                        className: C.button,
                                        size: y,
                                        onClick: e => {
                                            null == _ || _(e), S(e), U(f.ContentDismissActionType.PRIMARY)
                                        },
                                        color: T || O ? r.Button.Colors.BRAND : r.Button.Colors.WHITE,
                                        look: T || O ? r.Button.Looks.INVERTED : r.Button.Looks.FILLED,
                                        children: null != g ? g : h.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                    }), (0, l.jsx)(r.Button, {
                                        className: C.button,
                                        size: y,
                                        onClick: e => {
                                            null == _ || _(e), U(f.ContentDismissActionType.DISMISS)
                                        },
                                        color: T || O ? r.Button.Colors.WHITE : r.Button.Colors.BRAND,
                                        look: T || O ? r.Button.Looks.LINK : r.Button.Looks.FILLED,
                                        children: h.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                    })]
                                }) : (0, l.jsx)(r.Button, {
                                    className: C.button,
                                    size: r.Button.Sizes.MAX,
                                    onClick: e => {
                                        null == _ || _(e), U(f.ContentDismissActionType.PRIMARY)
                                    },
                                    color: r.Button.Colors.WHITE,
                                    children: h.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                })
                            }), (0, l.jsx)("div", {
                                className: i(C.pointer, {
                                    [C.bottomPointer]: "top" === x,
                                    [C.leftPointer]: "right" === x
                                })
                            })]
                        })
                    })
                })
        },
        560367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("782340");
            let a = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

            function s(e) {
                let t = l.default.Messages.ACTIVITY_PANEL_GO_LIVE;
                return null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName), {
                    sanitizedTitle: t.replace(a, ""),
                    title: t
                }
            }
        },
        293383: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("509043"),
                o = n("437825"),
                u = n("587974"),
                d = n("624468");
            let c = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];

            function f(e) {
                return (0, r.int2hex)(c[function(e) {
                    let t = 5381,
                        n = 0;
                    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
                    return t >>> 0
                }(e) % c.length])
            }

            function h(e) {
                var t;
                let {
                    title: n,
                    className: s
                } = e, [r, c] = a.useState(f(n));
                return a.useEffect(() => {
                    c(f(n))
                }, [n]), (0, l.jsxs)("div", {
                    className: d.wrapper,
                    children: [(0, l.jsx)(u.default, {
                        mask: u.default.Masks.STATUS_SCREENSHARE,
                        width: 32,
                        height: 32,
                        children: (0, l.jsx)("div", {
                            className: i(d.icon, s),
                            style: {
                                backgroundColor: r
                            },
                            children: null !== (t = n[0]) && void 0 !== t ? t : "?"
                        })
                    }), (0, l.jsx)(o.default, {
                        className: d.badge
                    })]
                })
            }
        },
        514256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildPremiumSubscriptionCount: function() {
                    return a
                }
            });
            var l = n("913144");
            let a = (e, t) => {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
                        guildId: e,
                        premiumCount: t
                    })
                })
            }
        },
        223817: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {};
            class i extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e)
                }
                getState() {
                    return s
                }
                getCountForGuild(e) {
                    return s[e]
                }
            }
            i.displayName = "GuildBoostingProgressBarPersistedStore", i.persistKey = "PremiumGuildProgressBarPersistedStore";
            var r = new i(a.default, {
                APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
                    let {
                        guildId: t,
                        premiumCount: n
                    } = e;
                    s = {
                        ...s,
                        [t]: n
                    }
                }
            })
        },
        880730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PROGRESS_BAR_CONTAINER_HEIGHT: function() {
                    return M
                },
                PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN: function() {
                    return y
                },
                default: function() {
                    return b
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                o = n("446674"),
                u = n("769846"),
                d = n("77078"),
                c = n("272030"),
                f = n("206230"),
                h = n("812204"),
                C = n("716241"),
                E = n("685665"),
                m = n("592407"),
                p = n("957255"),
                g = n("461380"),
                S = n("427459"),
                _ = n("159885"),
                I = n("514256"),
                N = n("223817"),
                T = n("379532"),
                A = n("944305"),
                L = n("49111"),
                R = n("782340"),
                x = n("503561");
            let v = (0, _.cssValueToNumber)(u.default.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
                O = e => {
                    let {
                        guild: t,
                        onSelect: n
                    } = e, [s, i] = a.useState(t.premiumProgressBarEnabled), [r, u] = a.useState(!1), f = (0, o.useStateFromStores)([p.default], () => p.default.can(L.Permissions.MANAGE_GUILD, t)), h = async () => {
                        f && (u(!0), await m.default.saveGuild(t.id, {
                            premiumProgressBarEnabled: !s
                        }), i(!s), u(!1))
                    };
                    return (0, l.jsx)(d.Menu, {
                        navId: "progress-bar-context",
                        onClose: c.closeContextMenu,
                        "aria-label": R.default.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
                        onSelect: n,
                        children: (0, l.jsx)(d.MenuCheckboxItem, {
                            id: "progress-bar-enabled",
                            label: R.default.Messages.GUILD_ENABLE_PROGRESS_BAR,
                            checked: s,
                            disabled: r,
                            action: h
                        })
                    })
                },
                M = 57,
                y = M + v,
                D = {
                    tension: 180,
                    friction: 80
                };
            var b = e => {
                var t;
                let {
                    guild: n,
                    withMargin: s
                } = e, {
                    analyticsLocations: u
                } = (0, E.default)(h.default.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
                    premiumSubscriberCount: m,
                    id: _
                } = n, v = (0, S.getGuildTierFromAppliedBoostCount)(m, _), M = (0, S.getNextTier)(v, n.id), y = null == M, b = null != M ? M : v, G = (0, o.useStateFromStores)([N.default], () => null !== (t = N.default.getCountForGuild(_)) && void 0 !== t ? t : 0), j = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), U = (0, o.useStateFromStores)([p.default], () => p.default.can(L.Permissions.MANAGE_GUILD, n));
                a.useEffect(() => {
                    G !== m && (0, I.updateGuildPremiumSubscriptionCount)(_, m)
                }, [_, G, m]);
                let P = "".concat(Math.min(100, m / (0, S.getAppliedGuildBoostsRequired)(n.id)[b] * 100), "%"),
                    {
                        current: F
                    } = a.useRef(P),
                    B = {
                        from: {
                            width: G === m ? F : "0%"
                        },
                        to: {
                            width: P
                        },
                        config: D,
                        immediate: j
                    },
                    [w, V] = (0, r.useSpring)(() => B),
                    H = () => {
                        (0, C.trackWithMetadata)(L.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
                            location: {
                                section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
                            },
                            guild_id: _,
                            location_stack: u
                        }), (0, T.default)({
                            analyticsLocations: u,
                            analyticsSourceLocation: {
                                page: L.AnalyticsPages.GUILD_CHANNEL,
                                section: L.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR,
                                object: L.AnalyticsObjects.TOOLTIP
                            },
                            guild: n,
                            perks: (0, A.premiumProgressBarUpsellPerks)(),
                            perkIntro: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
                        })
                    },
                    k = R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({
                        levelName: (0, S.getShortenedTierName)(b)
                    }),
                    Y = R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
                        numBoosts: m,
                        numTotal: (0, S.getAppliedGuildBoostsRequired)(n.id)[b]
                    });
                return y && (k = (0, S.getShortenedTierName)(b), Y = R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({
                    numBoosts: m
                })), (0, l.jsx)(d.Tooltip, {
                    text: y ? R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({
                        levelName: (0, S.getTierName)(b)
                    }),
                    color: d.Tooltip.Colors.BLACK,
                    position: "top",
                    delay: 200,
                    hideOnClick: !0,
                    children: e => (0, l.jsxs)(d.Clickable, {
                        ...e,
                        onClick: H,
                        onMouseEnter: () => {
                            var t;
                            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), V(B)
                        },
                        className: i(x.container, {
                            [x.containerWithMargin]: s
                        }),
                        onContextMenu: e => {
                            U && (0, c.openContextMenu)(e, e => (0, l.jsx)(O, {
                                ...e,
                                guild: n
                            }))
                        },
                        children: [(0, l.jsxs)("div", {
                            className: x.textArea,
                            children: [(0, l.jsx)("div", {
                                className: x.goalTextContainer,
                                children: (0, l.jsx)(d.Text, {
                                    className: x.goalText,
                                    color: "interactive-active",
                                    variant: "text-xs/bold",
                                    children: k
                                })
                            }), (0, l.jsxs)("div", {
                                className: x.progressFraction,
                                children: [(0, l.jsx)(d.Text, {
                                    color: "interactive-normal",
                                    variant: "text-xs/normal",
                                    children: Y
                                }), (0, l.jsx)(g.default, {
                                    className: x.count,
                                    height: 16,
                                    width: 16,
                                    direction: g.default.Directions.RIGHT
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: i(x.progressBarContainer, {
                                [x.progressBarContainerComplete]: y
                            }),
                            children: [(0, l.jsx)(r.animated.div, {
                                className: x.progressBar,
                                style: w
                            }), y ? (0, l.jsx)("span", {
                                "aria-label": R.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                                role: "img",
                                className: x.tadaIcon,
                                children: "\uD83C\uDF89"
                            }) : null]
                        })]
                    })
                })
            }
        },
        827298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ackGuildHome: function() {
                    return i
                }
            });
            var l = n("249654"),
                a = n("267363"),
                s = n("133335");
            let i = e => {
                (0, a.ackGuildFeature)(e, s.ReadStateTypes.GUILD_HOME, l.default.fromTimestamp(Date.now()))
            }
        },
        802479: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("151426"),
                i = n("120363"),
                r = n("708402"),
                o = n("155207"),
                u = n("645266"),
                d = n("782340");

            function c(e) {
                let {
                    guild: t,
                    selected: n
                } = e, c = a.useCallback(() => {
                    (0, u.goToMemberSafetyDashboard)(t.id)
                }, [t.id]), f = (0, i.useChannelListUpsellLocationTrackerRef)(t.id, s.DismissibleContent.MEMBERS_LAUNCH_UPSELL);
                return (0, l.jsx)("div", {
                    ref: f,
                    children: (0, l.jsx)(r.default, {
                        renderIcon: e => (0, l.jsx)(o.default, {
                            className: e
                        }),
                        text: d.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE,
                        selected: n,
                        onClick: c
                    })
                })
            }
        },
        444497: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                s = n("913144"),
                i = n("794818");
            let r = null,
                o = !1,
                u = !1;
            class d extends a.default.Store {
                getRecommendedGuilds() {
                    return r
                }
                getLoadId() {
                    return l
                }
                isFetching() {
                    return o
                }
                failed() {
                    return u
                }
            }
            d.displayName = "GuildRecommendationsStore";
            var c = new d(s.default, {
                GUILD_RECOMMENDATION_FETCH: function() {
                    o = !0
                },
                GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
                    r = e.recommendedGuilds.map(i.makeDiscoverableGuild), l = e.loadId, o = !1
                },
                GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
                    u = !0, o = !1
                }
            })
        },
        205550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useEligibleForGameRecommendations: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("350522");
            n("926787");
            var s = n("305961"),
                i = n("568307");
            n("599110"), n("444497");
            var r = n("895042"),
                o = n("49111");

            function u() {
                let e = (0, l.useStateFromStores)([s.default], () => s.default.getGuildCount()),
                    t = (0, l.useStateFromStores)([i.default], () => i.default.getGamesSeen(!1).filter(e => (0, i.gameInDatabase)(e)).length, []),
                    n = (0, l.useStateFromStores)([a.default], () => a.default.hasConsented(o.Consents.PERSONALIZATION)),
                    {
                        showRecs: u
                    } = r.default.useExperiment({
                        location: "e7214b_1"
                    }, {
                        autoTrackExposure: !1
                    });
                return n && u && e < 4 && t >= 2
            }
            n("447621")
        },
        895042: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-01_server_recommendations_rollout",
                label: "Rollout experiment for server recommendations.",
                defaultConfig: {
                    showRecs: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show server recommendations",
                    config: {
                        showRecs: !0
                    }
                }]
            })
        },
        459736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("20606"),
                s = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(i),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M17.225 6.06504C17.3227 6.00866 17.4362 5.98608 17.548 6.00084C17.6598 6.0156 17.7637 6.06686 17.8434 6.14665C17.9232 6.22645 17.9744 6.33037 17.9892 6.44225C18.0039 6.55413 17.9813 6.66772 17.925 6.76548L15.65 10.2551L21.9875 11.581C21.9875 11.7185 21.9875 11.8562 21.9875 11.9937C21.9875 12.1313 21.9875 12.2689 21.9875 12.4065L15.65 13.7323L17.925 17.222C17.9939 17.3117 18.0313 17.4216 18.0313 17.5347C18.0313 17.6478 17.9939 17.7577 17.925 17.8474C17.8281 17.9424 17.6982 17.9962 17.5625 17.9975C17.466 17.996 17.3714 17.9702 17.2875 17.9224L13.8125 15.646L12.4125 22H11.5875L10.2625 15.6585L6.77501 17.935C6.69176 17.9843 6.59672 18.0102 6.49997 18.01C6.43455 18.0098 6.3699 17.9963 6.30977 17.9705C6.24964 17.9447 6.1953 17.9072 6.15001 17.8599C6.06977 17.7789 6.01879 17.6734 6.0052 17.5601C5.99162 17.4468 6.01621 17.3323 6.07501 17.2345L8.36253 13.7449L2 12.4065C2 12.2689 2 12.1313 2 11.9937C2 11.8562 2 11.7185 2 11.581L8.35002 10.2551L6.0625 6.76548C6.0037 6.66774 5.97918 6.55315 5.99277 6.43988C6.00635 6.32661 6.05726 6.22113 6.1375 6.14009C6.21731 6.05781 6.32295 6.00542 6.43672 5.99176C6.5505 5.97809 6.6655 6.00399 6.7625 6.06504L10.25 8.34148L11.575 2H12.4L13.7375 8.34148L17.225 6.06504Z",
                        fill: "white"
                    }), (0, l.jsx)("path", {
                        d: "M22 12.4065C21.8956 14.9141 20.8533 17.2908 19.0798 19.0654C17.3062 20.8401 14.931 21.883 12.425 21.9875L13.7625 15.646L17.2375 17.9224C17.3214 17.9702 17.416 17.996 17.5125 17.9975C17.6481 17.9962 17.7781 17.9424 17.875 17.8474C17.9439 17.7577 17.9813 17.6478 17.9813 17.5347C17.9813 17.4216 17.9439 17.3117 17.875 17.222L15.6 13.7323L22 12.4065ZM13.7625 8.34148L17.2375 6.06504C17.3352 6.00866 17.4487 5.98608 17.5605 6.00084C17.6723 6.0156 17.7762 6.06686 17.8559 6.14665C17.9357 6.22645 17.9869 6.33037 18.0017 6.44225C18.0164 6.55413 17.9938 6.66772 17.9375 6.76548L15.6625 10.2551L22 11.581C21.8956 9.07342 20.8533 6.69669 19.0798 4.92206C17.3062 3.14742 14.931 2.10449 12.425 2L13.7625 8.34148ZM10.275 8.34148L11.6 2C9.09402 2.10449 6.71878 3.14742 4.94525 4.92206C3.17172 6.69669 2.12945 9.07342 2.02502 11.581L8.37497 10.2551L6.08752 6.76548C6.02873 6.66774 6.00413 6.55315 6.01772 6.43988C6.0313 6.32661 6.08228 6.22113 6.16252 6.14009C6.24233 6.05781 6.34797 6.00542 6.46175 5.99176C6.57552 5.97809 6.69052 6.00399 6.78752 6.06504L10.275 8.34148ZM6.16252 17.8474C6.08228 17.7663 6.0313 17.6609 6.01772 17.5476C6.00413 17.4343 6.02873 17.3197 6.08752 17.222L8.37497 13.7323L2 12.4065C2.10442 14.9141 3.1467 17.2908 4.92023 19.0654C6.69376 20.8401 9.06899 21.883 11.575 21.9875L10.25 15.646L6.7625 17.9224C6.67925 17.9718 6.58428 17.9977 6.48753 17.9975C6.35971 17.9937 6.23848 17.9398 6.15001 17.8474H6.16252Z",
                        fill: "url(#paint0_linear_3793:27920)"
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("linearGradient", {
                            id: "paint0_linear_3793:27920",
                            x1: "2",
                            y1: "21.9875",
                            x2: "21.9875",
                            y2: "1.98749",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                stopColor: a.default.CREATOR_REVENUE_ICON_GRADIENT_START
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                stopColor: a.default.CREATOR_REVENUE_ICON_GRADIENT_END
                            })]
                        })
                    })]
                })
            }
        },
        470926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showPremiumChannelIconButton: function() {
                    return d
                },
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("20606"),
                r = n("915675"),
                o = n("216997"),
                u = n("708995");

            function d(e) {
                return e
            }

            function c(e) {
                let {
                    locked: t
                } = e;
                return (0, l.jsx)("div", {
                    className: s(u.iconItem, o.premiumChannelIcon),
                    children: (0, l.jsx)(r.default, {
                        className: u.actionIcon,
                        color: t ? i.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON : void 0
                    })
                })
            }
        },
        972027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_guild_events_entrypoint",
                label: "Experiments with showing Events entrypoint in the channel list in friends guilds",
                defaultConfig: {
                    canSeeTopLevelEventsEntrypoint: !1
                },
                treatments: [{
                    id: 1,
                    label: "User can see top level events entrypoint in friend guilds",
                    config: {
                        canSeeTopLevelEventsEntrypoint: !0
                    }
                }]
            });
            var s = a
        },
        178517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("922770"),
                a = n("972027"),
                s = n("334683"),
                i = n("534222"),
                r = n("49111");

            function o(e) {
                var t;
                let n = (0, s.default)(null == e ? void 0 : e.id),
                    o = (0, i.default)(null == e ? void 0 : e.id),
                    {
                        canSeeTopLevelEventsEntrypoint: u
                    } = a.default.useExperiment({
                        location: "Channel List",
                        guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : ""
                    }, {
                        autoTrackExposure: !1
                    }),
                    d = (0, l.default)(null == e ? void 0 : e.id),
                    c = null == e ? void 0 : e.hasFeature(r.GuildFeatures.COMMUNITY);
                return !d && ((c || u) && n || o.length > 0)
            }
        },
        268760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UnreadBarMode: function() {
                    return a
                },
                default: function() {
                    return j
                }
            });
            var l, a, s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("913144"),
                u = n("488464"),
                d = n("998716"),
                c = n("755624"),
                f = n("42203"),
                h = n("305961"),
                C = n("660478"),
                E = n("162771"),
                m = n("282109"),
                p = n("316133"),
                g = n("449008"),
                S = n("123561"),
                _ = n("49111");
            (l = a || (a = {})).HIDDEN = "hidden", l.UNREAD = "unread", l.MENTIONS = "mentions", l.VOICE_CHANNELS = "voice-channels";
            let I = {
                    mode: a.HIDDEN,
                    mentionCount: 0,
                    targetChannelId: null
                },
                N = {
                    topBar: I,
                    bottomBar: I
                },
                T = {},
                A = {};

            function L(e) {
                let t = f.default.getChannel(e);
                if (null == t || null == t.getGuildId() || t.isGuildVocal()) return !1;
                let n = t.isThread() ? c.default.isMuted(t.id) : m.default.isChannelMuted(t.getGuildId(), t.id);
                return !n && C.default.hasRelevantUnread(t)
            }

            function R(e) {
                let t = f.default.getChannel(e);
                if (null == t) return !1;
                let n = t.getGuildId();
                if (null == n) return !1;
                let l = m.default.isGuildCollapsed(n),
                    a = m.default.isChannelMuted(n, t.id);
                return (!l || !a) && C.default.getMentionCount(e) > 0
            }

            function x(e) {
                return e.isGuildStageVoice() ? u.default.getMutableParticipants(e.id, d.StageChannelParticipantNamedIndex.SPEAKER).length > 0 : p.default.getVoiceStatesForChannel(e).length > 0
            }

            function v(e) {
                var t, n, l;
                let {
                    guildChannels: s
                } = S.default.getGuildWithoutChangingCommunityRows(e), r = s.getChannels(null !== (t = A[e]) && void 0 !== t ? t : []);
                if (null == r || 0 === r.length) return !1;
                let o = null,
                    u = null,
                    d = null,
                    c = null,
                    f = !0,
                    h = !0,
                    E = !1,
                    m = s.getCategoryFromSection(s.voiceChannelsSectionNumber),
                    p = null !== (n = null == m ? void 0 : m.getShownChannelIds()) && void 0 !== n ? n : [],
                    [g, _, N] = s.getSlicedChannels(r);
                for (let e = 0; e < _.length; e++) {
                    let t = _[e];
                    if ((L(t.id) || i.some(t.threadIds, L)) && (h = !1), (R(t.id) || i.some(t.threadIds, R)) && (f = !1), p.includes(t.id) && (E = !0), !h && !f && E) break
                }
                let v = 0,
                    O = !1,
                    M = 0,
                    y = !1;
                if (h || f)
                    for (let e = g.length - 1; e >= 0; e--) {
                        let t = g[e];
                        (L(t.id) || i.some(t.threadIds, L)) && (null == u && (u = t.id), O = !0), (R(t.id) || i.some(t.threadIds, R)) && (null == o && (o = t.id), v += C.default.getMentionCount(t.id) + i.sumBy(t.threadIds, C.default.getMentionCount))
                    }
                if (h || f)
                    for (let e = 0; e < N.length; e++) {
                        let t = N[e];
                        if (!h && !f) break;
                        (L(t.id) || i.some(t.threadIds, L)) && (null == c && (c = t.id), y = !0), (R(t.id) || i.some(t.threadIds, R)) && (null == d && (d = t.id), M += C.default.getMentionCount(t.id) + i.sumBy(t.threadIds, C.default.getMentionCount))
                    }
                let D = null,
                    b = null,
                    G = null !== (l = null == m ? void 0 : m.getChannelRecords()) && void 0 !== l ? l : [];
                f && M > 0 ? D = {
                    mode: a.MENTIONS,
                    mentionCount: M,
                    targetChannelId: d
                } : !E && i.some(G, x) ? D = {
                    mode: a.VOICE_CHANNELS,
                    mentionCount: 0,
                    targetChannelId: null
                } : h && y && (D = {
                    mode: a.UNREAD,
                    mentionCount: 0,
                    targetChannelId: c
                }), f && v > 0 ? b = {
                    mode: a.MENTIONS,
                    mentionCount: v,
                    targetChannelId: o
                } : h && O && (b = {
                    mode: a.UNREAD,
                    mentionCount: 0,
                    targetChannelId: u
                });
                let j = null != b && (null == D || D.mode !== a.MENTIONS && b.mode === a.MENTIONS),
                    U = null != D && (D.mode === a.MENTIONS || !j);
                return T[e] = {
                    topBar: j && null != b ? b : I,
                    bottomBar: U && null != D ? D : I
                }, !0
            }
            let O = i.throttle(v, 200);

            function M(e) {
                let {
                    guildId: t
                } = e, n = h.default.getGuild(t);
                return !!(null != n && n.hasFeature(_.GuildFeatures.COMMUNITY)) && O(t)
            }

            function y(e) {
                let {
                    id: t
                } = e, n = f.default.getChannel(t);
                if (null == n) return !1;
                let l = h.default.getGuild(n.guild_id);
                return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && O(n.guild_id)
            }

            function D(e) {
                let {
                    channel: t
                } = e, n = f.default.getChannel(t.id);
                if (null == n) return !1;
                let l = h.default.getGuild(t.guild_id);
                return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && O(n.guild_id)
            }

            function b(e) {
                let {
                    channelId: t
                } = e, n = f.default.getChannel(t);
                if (null == n) return !1;
                let l = h.default.getGuild(n.guild_id);
                return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && E.default.getGuildId() === n.guild_id && O(n.guild_id)
            }
            class G extends r.default.Store {
                initialize() {
                    this.waitFor(S.default, C.default, m.default, c.default, p.default, E.default, h.default)
                }
                getUnreadStateForGuildId(e) {
                    var t;
                    return null !== (t = T[e]) && void 0 !== t ? t : N
                }
            }
            G.displayName = "ChannelListUnreadsStore";
            var j = new G(o.default, {
                UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
                    let {
                        guildId: t,
                        channelIds: n
                    } = e, l = h.default.getGuild(t);
                    return !!(null != l && l.hasFeature(_.GuildFeatures.COMMUNITY)) && null != n && !i.isEqual(A[t], n) && (A[t] = n, v(t))
                },
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => {
                        var t;
                        let {
                            channelId: n
                        } = e;
                        return null === (t = f.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(g.isNotNullish).uniq().forEach(e => {
                        let t = h.default.getGuild(e);
                        null != t && t.hasFeature(_.GuildFeatures.COMMUNITY) && O(e) && (n = !0)
                    }), n
                },
                CHANNEL_ACK: b,
                CHANNEL_DELETE: D,
                CHANNEL_LOCAL_ACK: b,
                MESSAGE_ACK: b,
                MESSAGE_CREATE: b,
                MESSAGE_DELETE_BULK: b,
                MESSAGE_DELETE: b,
                PASSIVE_UPDATE_V1: function(e) {
                    let t = h.default.getGuild(e.guildId);
                    return !!(null != e.channels && null != t && t.hasFeature(_.GuildFeatures.COMMUNITY)) && O(e.guildId)
                },
                RESORT_THREADS: b,
                THREAD_CREATE: D,
                THREAD_DELETE: D,
                THREAD_LIST_SYNC: M,
                THREAD_MEMBER_UPDATE: y,
                THREAD_MEMBERS_UPDATE: y,
                THREAD_UPDATE: D,
                BULK_CLEAR_RECENTS: M,
                CATEGORY_COLLAPSE_ALL: M,
                CATEGORY_EXPAND_ALL: M,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = E.default.getGuildId();
                    if (null == n) return !1;
                    let l = new Set(t.map(e => e.guildId));
                    if (!l.has(n)) return !1;
                    let s = T[n];
                    return null != s && s.bottomBar.mode === a.VOICE_CHANNELS && O(n)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t || null == n) return !1;
                    let l = A[t];
                    return null != l && !!l.includes(n) && O(t)
                }
            })
        },
        175632: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSectionFooterConfig: function() {
                    return o
                },
                isSectionFooterWithActiveVoiceChannels: function() {
                    return u
                }
            });
            var l = n("870691"),
                a = n("957255"),
                s = n("319839"),
                i = n("796618"),
                r = n("49111");

            function o(e, t, n) {
                var l, a, r, o, u;
                return {
                    hasDivider: (l = e, a = t, ! function(e, t) {
                        if (t === s.SECTION_INDEX_COMMUNITY) {
                            let t = e.getCommunitySection().getRows();
                            return 1 === t.length && t[0] === i.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR || e.getCommunitySection().isEmpty()
                        }
                        return 0 === e.getSections()[t]
                    }(l, r = n) && (r === s.SECTION_INDEX_COMMUNITY || !!a && (r === s.SECTION_INDEX_FAVORITES || r !== s.SECTION_INDEX_UNCATEGORIZED_CHANNELS && (r === l.recentsSectionNumber || (l.voiceChannelsSectionNumber, !1))))),
                    canHaveVoiceSummary: (o = e, !((u = n) === s.SECTION_INDEX_COMMUNITY || u === s.SECTION_INDEX_FAVORITES || u === s.SECTION_INDEX_UNCATEGORIZED_CHANNELS || u === o.recentsSectionNumber || u === o.voiceChannelsSectionNumber))
                }
            }

            function u(e) {
                let {
                    category: t,
                    voiceStates: n,
                    selectedChannelId: s,
                    selectedVoiceChannelId: i
                } = e, o = function(e) {
                    let {
                        category: t,
                        voiceStates: n,
                        selectedChannelId: s,
                        selectedVoiceChannelId: i
                    } = e;
                    if (!0 !== l.default.isCollapsed(t.record.id)) return [];
                    let o = t.getChannelRecords();
                    return o.filter(e => {
                        var t;
                        if (!a.default.can(r.Permissions.VIEW_CHANNEL, e)) return !1;
                        let l = null !== (t = n[e.id]) && void 0 !== t ? t : [];
                        return e.id !== i && e.id !== s && l.length > 0
                    })
                }({
                    category: t,
                    selectedChannelId: s,
                    selectedVoiceChannelId: i,
                    voiceStates: n
                });
                return o.length > 0
            }
        },
        2003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                voiceCategoryExpand: function() {
                    return a
                },
                voiceCategoryCollapse: function() {
                    return s
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "VOICE_CATEGORY_EXPAND",
                    guildId: e,
                    expand: !0
                })
            }

            function s(e) {
                l.default.dispatch({
                    type: "VOICE_CATEGORY_COLLAPSE",
                    guildId: e,
                    expand: !1
                })
            }
        },
        982721: function(e, t, n) {
            "use strict";

            function l(e) {
                return e.length > 0
            }
            n.r(t), n.d(t, {
                showChannelItemEmbeddedActivities: function() {
                    return l
                }
            })
        },
        973539: function(e, t, n) {
            "use strict";

            function l(e) {
                return null != e && e > 0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        60937: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("65597"),
                a = n("590260"),
                s = n("677315"),
                i = n("875229"),
                r = n("466818"),
                o = n("698882"),
                u = n("290886"),
                d = n("363176"),
                c = n("903724"),
                f = n("178517"),
                h = n("796618"),
                C = n("49111");

            function E(e) {
                let t = (0, s.useGuildHomeExperiment)(e),
                    n = (0, f.default)(e),
                    E = (0, i.useCanReviewGuildMemberApplications)(e.id),
                    m = (0, c.useShowRoleSubscriptionsInChannelList)(e.id),
                    p = (0, a.useGuildShopVisibleInGuild)(e),
                    g = (0, u.useCanSeeOnboardingHome)(e.id),
                    S = (0, l.default)([o.default], () => o.default.getNewMemberActions(e.id), [e.id]),
                    _ = (0, d.default)(e.id),
                    I = (0, r.useCanAccessMemberSafetyPage)(e.id),
                    N = [],
                    T = e.hasFeature(C.GuildFeatures.HUB),
                    A = e.hasFeature(C.GuildFeatures.COMMUNITY),
                    L = e.hasFeature(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
                return T && N.push(h.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS), g && _ && null != S && S.length > 0 ? N.push(h.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(h.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR), !T && (t || g) && N.push(h.ChannelListCommunityRow.GUILD_HOME), n && N.push(h.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS), !T && A && N.push(h.ChannelListCommunityRow.CHANNELS_AND_ROLES), m && N.push(h.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS), p && N.push(h.ChannelListCommunityRow.GUILD_SHOP), E && N.push(h.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), I && (A || L) && N.push(h.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY), N
            }
        },
        447235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("830210"),
                a = n("49111");

            function s(e) {
                let {
                    channel: t,
                    locked: n,
                    video: s,
                    selected: i
                } = e, r = function(e) {
                    let {
                        channel: t,
                        video: n,
                        considerMaxStageVoiceUserLimit: s = !0
                    } = e, {
                        limit: i
                    } = (0, l.default)(t), r = -1;
                    return (t.userLimit > 0 && (r = t.userLimit), n && i > 0 && (r = r > 0 ? Math.min(r, i) : i), s && r === a.MAX_STAGE_VOICE_USER_LIMIT) ? 0 : r
                }({
                    channel: t,
                    video: s
                });
                return r > 0 && !n && !i
            }
        },
        79234: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("308289"),
                d = n("144491"),
                c = n("401690"),
                f = n("487269"),
                h = n("967241"),
                C = n("957255"),
                E = n("660478"),
                m = n("697218"),
                p = n("315102"),
                g = n("299039"),
                S = n("49111"),
                _ = n("648564"),
                I = n("782340"),
                N = n("141322");

            function T(e) {
                let {
                    channel: t
                } = e, s = (0, r.useStateFromStoresArray)([c.default, E.default, C.default], () => {
                    let e = c.default.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
                    return i(c.default.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(i.values(c.default.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && C.default.can(S.Permissions.VIEW_CHANNEL, t)).sort((e, t) => {
                        let n = E.default.lastMessageId(e.id),
                            l = E.default.lastMessageId(t.id);
                        return g.default.compare(n, l)
                    }).reverse().value()
                }), u = t.isForumLikeChannel() ? 5 : 3;
                return a.useEffect(() => {
                    (0, f.trackActiveThreadsPopoutOpened)()
                }, []), (0, l.jsxs)("div", {
                    className: N.popout,
                    children: [(0, l.jsx)(o.Text, {
                        className: N.title,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: t.isForumLikeChannel() ? I.default.Messages.ACTIVE_THREADS_POPOUT_HEADER_FORUM : I.default.Messages.ACTIVE_THREADS_POPOUT_HEADER
                    }), s.slice(0, t.isForumLikeChannel() ? s.length : u).map(e => (0, l.jsx)(A, {
                        thread: e
                    }, e.id)).filter(e => a.isValidElement(e)).slice(0, u), (0, l.jsx)(o.Clickable, {
                        className: N.more,
                        onClick: () => {
                            t.isForumLikeChannel() ? (0, d.transitionToChannel)(t.id) : (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("33250").then(n.bind(n, "33250"));
                                return n => (0, l.jsx)(e, {
                                    channel: t,
                                    ...n
                                })
                            })
                        },
                        children: (0, l.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: I.default.Messages.ACTIVE_THREADS_POPOUT_LINK
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    thread: t
                } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.getUser(t.ownerId)), a = (0, f.useLastMessageTimestamp)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: N.row,
                    onClick: e => {
                        (0, h.openThreadSidebarForViewing)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, _.OpenThreadAnalyticsLocations.POPOUT)
                    },
                    children: [null == n ? (0, l.jsx)("img", {
                        className: N.avatar,
                        src: p.default.getDefaultAvatarURL(void 0, void 0),
                        alt: ""
                    }) : (0, l.jsx)(u.default, {
                        className: N.avatar,
                        user: n,
                        size: o.AvatarSizes.SIZE_16
                    }), (0, l.jsx)(o.Text, {
                        className: N.name,
                        variant: "text-sm/normal",
                        color: "none",
                        children: t.name
                    }), (0, l.jsxs)(o.Text, {
                        className: N.timestamp,
                        variant: "text-sm/normal",
                        color: "none",
                        children: [(0, l.jsx)("span", {
                            className: N.bullet,
                            children: "•"
                        }), (0, f.getTimestampString)(a)]
                    })]
                })
            }
        },
        708402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("910959"),
                o = n("708995"),
                u = n("404135");

            function d(e) {
                let {
                    renderIcon: t,
                    text: n,
                    selected: a,
                    badge: d,
                    showUnread: c = !1,
                    ...f
                } = e;
                return (0, l.jsxs)(i.Clickable, {
                    ...f,
                    tag: "li",
                    className: s(o.containerDefault, u.wrapper, {
                        [u.modeSelected]: a
                    }),
                    children: [c ? (0, l.jsx)("div", {
                        className: s(u.unread, u.unreadRelevant)
                    }) : null, (0, l.jsx)("div", {
                        className: u.link,
                        children: (0, l.jsxs)("div", {
                            className: r.content,
                            children: [(0, l.jsx)("div", {
                                className: u.iconContainer,
                                children: t(u.icon)
                            }), (0, l.jsx)("div", {
                                className: u.name,
                                children: n
                            }), d]
                        })
                    })]
                })
            }
        },
        708186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                },
                NonChannelCategory: function() {
                    return y
                },
                VoiceChannelCategoryButton: function() {
                    return D
                },
                VoiceChannelCategory: function() {
                    return b
                },
                ReadonlyCategoryChannel: function() {
                    return G
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("820542"),
                c = n("272030"),
                f = n("667771"),
                h = n("870691"),
                C = n("305961"),
                E = n("957255"),
                m = n("282109"),
                p = n("98292"),
                g = n("381546"),
                S = n("256170"),
                _ = n("689476"),
                I = n("368121"),
                N = n("826684"),
                T = n("323137"),
                A = n("2003"),
                L = n("49111"),
                R = n("782340"),
                x = n("716439");

            function v(e) {
                e.stopPropagation()
            }
            let O = a.memo(function(e) {
                let t, {
                        channel: s,
                        connectChannelDragSource: f,
                        connectChannelDropTarget: g,
                        disableManageChannels: I,
                        position: T,
                        sortingPosition: A,
                        hideIcon: O,
                        children: M
                    } = e,
                    y = (0, o.useStateFromStores)([m.default], () => m.default.isChannelMuted(s.getGuildId(), s.id)),
                    D = (0, o.useStateFromStores)([h.default], () => h.default.isCollapsed(s.id)),
                    b = (0, o.useStateFromStores)([E.default], () => E.default.can(L.Permissions.MANAGE_CHANNELS, s));
                t = null != A ? T > A ? x.containerDragAfter : x.containerDragBefore : x.containerDefault;
                let G = a.useCallback(() => {
                        D ? (0, d.categoryExpand)(s.id) : (0, d.categoryCollapse)(s.id)
                    }, [s.id, D]),
                    j = a.useCallback(e => {
                        if ("null" !== s.id) {
                            let t = C.default.getGuild(s.getGuildId());
                            null != t && (0, c.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("142047").then(n.bind(n, "142047"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channel: s,
                                    guild: t
                                })
                            })
                        }
                    }, [s]),
                    U = a.useCallback(() => {
                        let e = s.type === L.ChannelTypes.GUILD_CATEGORY ? null : s.type,
                            t = s.getGuildId();
                        null != t && (0, u.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await n.el("581354").then(n.bind(n, "581354"));
                            return n => (0, l.jsx)(a, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: "null" !== s.id ? s.id : null
                            })
                        })
                    }, [s]),
                    {
                        role: P,
                        tabIndex: F,
                        ...B
                    } = (0, r.useListItem)(s.id),
                    w = a.useRef(null),
                    V = a.useRef(null),
                    H = (0, l.jsxs)("li", {
                        className: t,
                        "data-dnd-name": s.name,
                        children: [(0, l.jsx)(u.FocusRing, {
                            focusTarget: w,
                            ringTarget: V,
                            offset: {
                                left: 4,
                                right: 4
                            },
                            children: (0, l.jsxs)("div", {
                                ref: V,
                                className: i(x.iconVisibility, x.wrapper, {
                                    [x.collapsed]: D,
                                    [x.muted]: y,
                                    [x.clickable]: !0
                                }),
                                onContextMenu: j,
                                children: [(0, l.jsxs)(u.Clickable, {
                                    innerRef: w,
                                    className: x.mainContent,
                                    tabIndex: F,
                                    ...B,
                                    onClick: G,
                                    "aria-label": R.default.Messages.CATEGORY_A11Y_LABEL.format({
                                        categoryName: s.name
                                    }),
                                    "aria-expanded": !D,
                                    focusProps: {
                                        enabled: !1
                                    },
                                    children: [O ? null : (0, l.jsx)(S.default, {
                                        className: x.icon
                                    }), (0, l.jsx)(N.default, {
                                        className: x.name,
                                        children: (0, l.jsx)(p.default, {
                                            children: s.name
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    onClick: v,
                                    className: x.children,
                                    children: b && !I ? (0, l.jsx)(u.Tooltip, {
                                        text: R.default.Messages.CREATE_CHANNEL,
                                        children: e => {
                                            let {
                                                onMouseEnter: t,
                                                onMouseLeave: n
                                            } = e;
                                            return (0, l.jsx)(u.Button, {
                                                "aria-label": R.default.Messages.CREATE_CHANNEL,
                                                look: u.Button.Looks.BLANK,
                                                size: u.Button.Sizes.NONE,
                                                className: i(x.addButton, x.forceVisible),
                                                onClick: U,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                tabIndex: F,
                                                focusProps: {
                                                    offset: {
                                                        top: -3,
                                                        right: -4,
                                                        bottom: -3,
                                                        left: -4
                                                    }
                                                },
                                                children: (0, l.jsx)(_.default, {
                                                    width: 18,
                                                    height: 18,
                                                    className: x.addButtonIcon
                                                })
                                            })
                                        }
                                    }) : null
                                })]
                            })
                        }), M]
                    });
                return null != g && null != f ? g(f(H)) : H
            });
            var M = (0, f.makeChannelSortable)(O);
            let y = a.memo(function(e) {
                    let {
                        name: t,
                        onDismiss: n,
                        className: a
                    } = e;
                    return (0, l.jsx)("li", {
                        className: i(a, x.containerDefault),
                        children: (0, l.jsxs)("div", {
                            className: i(x.iconVisibility, x.wrapperStatic),
                            children: [(0, l.jsx)("div", {
                                className: x.mainContent,
                                children: (0, l.jsx)(N.default, {
                                    className: x.name,
                                    children: (0, l.jsx)(p.default, {
                                        children: t
                                    })
                                })
                            }), null != n ? (0, l.jsx)(u.TooltipContainer, {
                                text: R.default.Messages.CLEAR_RECENT_CHANNELS,
                                className: x.dismissWrapper,
                                children: (0, l.jsx)(u.Clickable, {
                                    className: x.dismissButton,
                                    onClick: n,
                                    children: (0, l.jsx)(g.default, {
                                        className: x.dismiss
                                    })
                                })
                            }) : null]
                        })
                    })
                }),
                D = a.memo(function(e) {
                    let {
                        category: t
                    } = e, n = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id)), s = a.useCallback(() => {
                        n ? (0, A.voiceCategoryExpand)(t.guild.id) : (0, A.voiceCategoryCollapse)(t.guild.id)
                    }, [t.guild.id, n]);
                    return n ? (0, l.jsxs)(u.Clickable, {
                        className: x.voiceChannelsButton,
                        onClick: s,
                        children: [(0, l.jsx)(I.default, {
                            className: x.voiceChannelsToggleIcon,
                            width: 16,
                            height: 16
                        }), (0, l.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: R.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
                        })]
                    }) : (0, l.jsxs)(u.Clickable, {
                        className: x.voiceChannelsButton,
                        onClick: s,
                        children: [(0, l.jsx)(I.default, {
                            className: x.voiceChannelsToggleIcon,
                            width: 16,
                            height: 16
                        }), (0, l.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            children: R.default.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
                        })]
                    })
                }),
                b = a.memo(function(e) {
                    let {
                        category: t,
                        channel: n
                    } = e, a = (0, o.useStateFromStores)([T.default], () => T.default.isVoiceCategoryCollapsed(t.guild.id));
                    return a || null == n || n.record.type === L.ChannelTypes.GUILD_CATEGORY ? a ? (0, l.jsx)("li", {
                        className: i(x.containerDefault),
                        children: (0, l.jsx)("div", {
                            className: i(x.iconVisibility, x.wrapperStatic),
                            children: (0, l.jsx)(N.default, {
                                className: x.name,
                                children: (0, l.jsx)(p.default, {
                                    children: R.default.Messages.VOICE_CHANNELS_CATEGORY_HEADER
                                })
                            })
                        })
                    }) : null : (0, l.jsx)("div", {
                        style: {
                            height: 16
                        }
                    })
                }),
                G = a.memo(function(e) {
                    let {
                        channel: t
                    } = e;
                    return (0, l.jsx)("li", {
                        className: i(x.containerDefault),
                        children: (0, l.jsx)("div", {
                            className: i(x.iconVisibility, x.wrapperStatic),
                            children: (0, l.jsx)(N.default, {
                                className: x.name,
                                children: (0, l.jsx)(p.default, {
                                    children: t.name
                                })
                            })
                        })
                    })
                })
        },
        938177: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("429928"),
                d = n("697218"),
                c = n("339521"),
                f = n("963422"),
                h = n("713573"),
                C = n("811305"),
                E = n("550368"),
                m = n("315102"),
                p = n("449008"),
                g = n("158998"),
                S = n("809403");
            let _ = C.Sizes.SIZE_24;

            function I(e) {
                var t, n;
                let {
                    activity: s,
                    user: i,
                    embeddedApp: r,
                    onOpenSpotifyAlbum: d
                } = e, {
                    assets: c,
                    application_id: f
                } = s;
                if (null == c || null == c.large_image && null == c.small_image) return null != r ? function(e) {
                    let t = m.default.getApplicationIconURL({
                            id: e.application.id,
                            icon: e.application.icon
                        }),
                        n = e.application.name;
                    return (0, l.jsx)(o.Tooltip, {
                        text: n,
                        position: "top",
                        children: () => (0, l.jsx)("img", {
                            alt: n,
                            src: t,
                            className: S.applicationLargeImage
                        })
                    })
                }(r) : null;
                let h = null !== (t = c.large_image) && void 0 !== t ? t : c.small_image,
                    C = (0, u.default)(s),
                    p = C ? S.spotifyLargeImage : S.applicationLargeImage,
                    g = null != h ? (0, l.jsx)("img", {
                        alt: null !== (n = c.large_text) && void 0 !== n ? n : "",
                        src: (0, E.getAssetImage)(f, h, [128, 128]),
                        className: p
                    }) : null;
                return C ? (g = (0, l.jsx)(o.Clickable, {
                    className: S.clickable,
                    onClick: () => {
                        d(s, i.id)
                    },
                    children: g
                }), (0, l.jsx)(o.Tooltip, {
                    text: null != c.large_text ? c.large_text : null,
                    position: "top",
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return null != g ? a.cloneElement(g, n) : null
                    }
                })) : g
            }

            function N(e) {
                let {
                    activity: t,
                    embeddedApp: n,
                    onOpenSpotifyTrack: a
                } = e, {
                    details: s
                } = t, i = t.name, r = i;
                if (null != n) r = n.application.name;
                else {
                    if (!(0, u.default)(t) || null == t.sync_id || null == s) return null;
                    i = s, r = (0, l.jsx)(o.Clickable, {
                        className: S.headerLink,
                        onClick: () => {
                            a(t)
                        },
                        children: s
                    })
                }
                return (0, l.jsx)(h.default, {
                    title: i,
                    className: S.header,
                    children: r
                })
            }

            function T(e) {
                let {
                    activity: t,
                    user: n,
                    onOpenSpotifyArtist: a
                } = e, {
                    details: s,
                    state: r
                } = t, o = s;
                return ((0, u.default)(t) && null != r && (o = [(0, l.jsx)(f.default, {
                    artists: r,
                    linkClassName: S.bodyLink,
                    canOpen: null != t.sync_id,
                    onOpenSpotifyArtist: e => {
                        a(t, n.id, e)
                    }
                }, r)]), null == o || "" === o) ? null : (0, l.jsx)("div", {
                    className: i(S.ellipsisRow, S.colorHeaderSecondary, S.bodyTextSize),
                    children: o
                })
            }

            function A(e) {
                let {
                    activity: t
                } = e, {
                    state: n
                } = t;
                return null == n || "" === n || (0, u.default)(t) ? null : (0, l.jsx)("div", {
                    className: i(S.ellipsisRow, S.colorHeaderSecondary, S.bodyTextSize, S.activity),
                    children: n
                })
            }

            function L(e) {
                let {
                    activity: t
                } = e;
                if (!(0, u.default)(t)) return null;
                let {
                    timestamps: n
                } = t;
                if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null) return null;
                let {
                    start: a,
                    end: s
                } = n;
                return (0, l.jsx)(c.default, {
                    start: a,
                    end: s,
                    className: S.timeBar,
                    themed: !0,
                    singleLine: !0
                })
            }

            function R(e) {
                let {
                    activity: t,
                    embeddedApp: n,
                    user: s,
                    channel: i,
                    sortedVoiceStates: c,
                    onOpenSpotifyTrack: f,
                    onOpenSpotifyArtist: h,
                    onOpenSpotifyAlbum: E
                } = e, m = [];
                null != n ? m = Array.from(n.embeddedActivity.connections.keys()) : (0, u.default)(t) && (m = c.map(e => e.user.id));
                let R = (0, r.useStateFromStoresArray)([d.default], () => m.map(e => d.default.getUser(e)).filter(p.isNotNullish)),
                    x = null != n || (0, u.default)(t),
                    v = a.useMemo(() => {
                        let e = new Map;
                        return x && c.forEach(t => {
                            let n = t.member;
                            null != n && e.set(t.user.id, n)
                        }), e
                    }, [c, x]);
                return x ? (0, l.jsxs)("div", {
                    className: S.flexColumn,
                    children: [(0, l.jsxs)("div", {
                        className: S.flexRow,
                        children: [(0, l.jsx)(I, {
                            activity: t,
                            user: s,
                            embeddedApp: n,
                            onOpenSpotifyAlbum: E
                        }), (0, l.jsxs)("div", {
                            className: S.detailsAndAvatarsContainer,
                            children: [(0, l.jsx)(N, {
                                activity: t,
                                embeddedApp: n,
                                onOpenSpotifyTrack: f
                            }), (0, l.jsx)(T, {
                                activity: t,
                                user: s,
                                onOpenSpotifyArtist: h
                            }), (0, l.jsx)(A, {
                                activity: t
                            }), m.length > 0 && (0, l.jsx)(C.default, {
                                className: S.usersSummary,
                                guildId: i.guild_id,
                                users: R,
                                size: _,
                                max: 7,
                                renderUser: e => {
                                    var t;
                                    if (null == e) return null;
                                    let n = v.get(e.id),
                                        a = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : g.default.getName(e);
                                    return (0, l.jsx)(o.TooltipContainer, {
                                        text: a,
                                        position: "bottom",
                                        children: (0, l.jsx)("img", {
                                            src: e.getAvatarURL(i.guild_id, _),
                                            alt: a,
                                            className: S.avatar
                                        }, e.id)
                                    }, e.id)
                                }
                            })]
                        })]
                    }), (0, l.jsx)(L, {
                        activity: t
                    })]
                }) : null
            }
        },
        783735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelItemDisabled: function() {
                    return v
                },
                getChannelItemClassName: function() {
                    return O
                },
                ChannelItemEditButton: function() {
                    return M
                },
                ChannelItemInviteButton: function() {
                    return y
                },
                default: function() {
                    return G
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("18054"),
                d = n("398604"),
                c = n("242757"),
                f = n("629220"),
                h = n("834052"),
                C = n("12896"),
                E = n("233069"),
                m = n("373469"),
                p = n("305961"),
                g = n("957255"),
                S = n("162771"),
                _ = n("36694"),
                I = n("945330"),
                N = n("474571"),
                T = n("76539"),
                A = n("230674"),
                L = n("49111"),
                R = n("782340"),
                x = n("708995");

            function v(e, t, n) {
                return null != t && !!t && !(0, A.areTypesInSameSection)(n, e.type)
            }

            function O(e, t) {
                return null == t ? x.containerDefault : e > t ? x.containerDragAfter : x.containerDragBefore
            }

            function M(e) {
                let {
                    channel: t,
                    disableManageChannels: n,
                    tabIndex: a,
                    forceShowButtons: s
                } = e, d = (0, r.useStateFromStores)([g.default, S.default], () => n || S.default.getGuildId() === L.FAVORITES || !g.default.can(L.Permissions.MANAGE_CHANNELS, t) && !g.default.can(L.Permissions.MANAGE_ROLES, t) && !g.default.can(L.Permissions.MANAGE_WEBHOOKS, t) || (0, E.isGuildSelectableChannelType)(t.type) && !g.default.can(L.Permissions.VIEW_CHANNEL, t) || t.isGuildVocal() && !g.default.can(L.Permissions.CONNECT, t) || !E.EDITABLE_CHANNEL_TYPES.has(t.type));
                if (d) return null;

                function c() {
                    u.default.open(t.id)
                }
                return (0, l.jsx)(o.Tooltip, {
                    text: R.default.Messages.EDIT_CHANNEL,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onFocus: r,
                            onBlur: u
                        } = e;
                        return (0, l.jsx)(o.Clickable, {
                            className: i(x.iconItem, s ? x.alwaysShown : void 0),
                            onClick: c,
                            tabIndex: a,
                            "aria-label": R.default.Messages.EDIT_CHANNEL,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            onFocus: r,
                            onBlur: u,
                            children: (0, l.jsx)(N.default, {
                                width: 16,
                                height: 16,
                                className: x.actionIcon
                            })
                        })
                    }
                })
            }

            function y(e) {
                let {
                    channel: t,
                    isDefaultChannel: a = !1,
                    locked: s,
                    tabIndex: u,
                    forceShowButtons: f
                } = e, E = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t.getGuildId())), S = (0, r.useStateFromStores)([h.default], () => h.default.getStageInstanceByChannel(t.id), [t.id]), _ = (0, r.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(t.id), [t.id]), I = (0, r.useStateFromStores)([g.default], () => (0, c.canViewInviteModal)(g.default, E, t, S)), N = (0, r.useStateFromStores)([g.default], () => g.default.can(L.Permissions.CREATE_INSTANT_INVITE, t) ? R.default.Messages.CREATE_INSTANT_INVITE : R.default.Messages.INVITE_TO_SERVER);
                if (s || !I) return null;

                function A() {
                    if (null != E) {
                        let e = m.default.getAllActiveStreams().filter(e => e.state !== L.ApplicationStreamStates.ENDED && e.channelId === t.id);
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await n.el("310688").then(n.bind(n, "310688"));
                            return n => (0, l.jsx)(a, {
                                ...n,
                                guild: E,
                                channel: t,
                                streamUserId: 1 === e.length ? e[0].ownerId : null,
                                source: L.InstantInviteSources.GUILD_CHANNELS,
                                guildScheduledEvent: _
                            })
                        })
                    }
                }
                let v = (0, l.jsx)(T.default, {
                    width: 16,
                    height: 16,
                    className: x.actionIcon,
                    "aria-hidden": !0
                });
                return a && (v = (0, l.jsx)(C.default, {
                    tutorialId: "instant-invite",
                    position: "left",
                    children: (0, l.jsx)("div", {
                        children: v
                    })
                })), (0, l.jsx)(o.Tooltip, {
                    text: N,
                    children: e => (0, l.jsx)(o.Clickable, {
                        className: i(x.iconItem, f ? x.alwaysShown : void 0),
                        ...e,
                        onClick: A,
                        tabIndex: u,
                        "aria-label": N,
                        children: v
                    })
                })
            }

            function D(e) {
                let {
                    channel: t
                } = e, n = () => {
                    (0, f.dimissFavoriteSuggestion)(t.guild_id, t.id)
                };
                return (0, l.jsx)(o.Tooltip, {
                    text: R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
                    children: e => (0, l.jsx)(o.Clickable, {
                        className: x.iconItem,
                        ...e,
                        onClick: n,
                        "aria-label": R.default.Messages.REMOVE_FAVORITE_SUGGESTION,
                        children: (0, l.jsx)(I.default, {
                            width: 16,
                            height: 16,
                            className: x.actionIcon
                        })
                    })
                })
            }

            function b(e) {
                let {
                    channel: t
                } = e, n = () => {
                    (0, f.setIsFavorite)(t.guild_id, t.id, !0, {
                        section: L.AnalyticsSections.CHANNEL_LIST
                    })
                };
                return (0, l.jsx)(o.Tooltip, {
                    text: R.default.Messages.ADD_FAVORITE,
                    children: e => (0, l.jsx)(o.Clickable, {
                        className: x.iconItem,
                        ...e,
                        onClick: n,
                        "aria-label": R.default.Messages.ADD_FAVORITE,
                        children: (0, l.jsx)(_.default, {
                            width: 16,
                            height: 16,
                            className: x.actionIcon
                        })
                    })
                })
            }
            class G extends a.PureComponent {
                renderEditButton() {
                    return (0, l.jsx)(M, {
                        ...this.props
                    })
                }
                renderInviteButton() {
                    return (0, l.jsx)(y, {
                        ...this.props
                    })
                }
                renderRemoveSuggestionButton() {
                    return (0, l.jsx)(D, {
                        ...this.props
                    })
                }
                renderAcceptSuggestionButton() {
                    return (0, l.jsx)(b, {
                        ...this.props
                    })
                }
                getClassName() {
                    let {
                        position: e,
                        sortingPosition: t
                    } = this.props;
                    return O(e, t)
                }
                isDisabled() {
                    let {
                        channel: e,
                        sorting: t,
                        sortingType: n
                    } = this.props;
                    return v(e, t, n)
                }
            }
            G.defaultProps = {
                isDefaultChannel: !1
            }
        },
        39347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("669491"),
                i = n("77078"),
                r = n("575136"),
                o = n("37930"),
                u = n("680986"),
                d = n("470926"),
                c = n("819450"),
                f = n("401690"),
                h = n("305961"),
                C = n("957255"),
                E = n("660478"),
                m = n("800762"),
                p = n("956089"),
                g = n("89073"),
                S = n("982721"),
                _ = n("973539"),
                I = n("447235"),
                N = n("360723"),
                T = n("137376"),
                A = n("522052"),
                L = n("49111"),
                R = n("782340"),
                x = n("174757");

            function v(e) {
                var t, n;
                let {
                    channel: v,
                    highlighted: O,
                    isChannelSelected: M,
                    isChannelCollapsed: y,
                    voiceStates: D,
                    enableConnectedUserLimit: b,
                    enableActivities: G,
                    isSubscriptionGated: j,
                    needSubscriptionToAccess: U,
                    isNewChannel: P,
                    muted: F
                } = e, B = (0, a.useStateFromStores)([E.default], () => E.default.getMentionCount(v.id)), w = (0, r.default)(v), V = (0, a.useStateFromStores)([C.default], () => !C.default.can(L.Permissions.CONNECT, v)), H = (0, a.useStateFromStores)([m.default], () => m.default.hasVideo(v.id)), k = (0, c.useStageHasMedia)(v.id) && v.isGuildStageVoice(), Y = (0, I.default)({
                    channel: v,
                    locked: V,
                    video: H || k,
                    selected: M
                }), K = (0, a.useStateFromStores)([f.default], () => f.default.getNewThreadCount(v.guild_id, v.id)), W = (0, u.useUnreadThreadsCountForParent)(v.guild_id, v.id), z = (0, a.useStateFromStores)([h.default], () => {
                    var e;
                    return null !== (t = null === (e = h.default.getGuild(v.guild_id)) || void 0 === e ? void 0 : e.hasFeature(L.GuildFeatures.COMMUNITY)) && void 0 !== t && t
                });
                if ((0, _.default)(B)) return (0, l.jsx)(A.default, {
                    mentionsCount: B
                });
                if ((0, d.showPremiumChannelIconButton)(j)) return (0, l.jsx)(d.default, {
                    locked: U
                });
                if (P) return (0, l.jsx)(p.TextBadge, {
                    text: R.default.Messages.NEW,
                    color: s.default.unsafe_rawColors.BRAND_260.css,
                    className: x.newChannel
                });
                if (O) return (0, l.jsx)(o.default, {
                    width: 16,
                    height: 16
                });
                if (!F && v.isForumLikeChannel() && null != K && K > 0) return (0, l.jsx)(i.Text, {
                    variant: "text-xs/semibold",
                    color: "text-brand",
                    children: R.default.Messages.CHANNEL_NEW_POSTS_LABEL.format({
                        count: (0, p.getBadgeCountString)(K)
                    })
                });
                if (!F && v.isForumLikeChannel() && null != W && W > 0) return (0, l.jsx)(i.Text, {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: (0, p.getBadgeCountString)(W)
                });
                let Z = null !== (n = null == D ? void 0 : D.length) && void 0 !== n ? n : 0;
                return null != b && b && Y ? (0, l.jsx)(T.default, {
                    userCount: Z,
                    video: H || k,
                    channel: v
                }) : y && (0, g.hasStream)(D) && z ? (0, l.jsx)(p.TextBadge, {
                    text: R.default.Messages.LIVE,
                    color: s.default.unsafe_rawColors.RED_400.css
                }) : null != G && G && (0, S.showChannelItemEmbeddedActivities)(w) ? (0, l.jsx)(N.default, {
                    embeddedApps: w
                }) : null
            }
        },
        360723: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("953109"),
                o = n("450754");

            function u(e) {
                let {
                    className: t,
                    embeddedApps: n
                } = e;
                if (n.length <= 0) return null;
                {
                    if (1 === n.length) return (0, l.jsx)("div", {
                        className: s(o.container, t),
                        children: (0, l.jsx)(r.default, {
                            game: n[0].application,
                            className: o.icon24px
                        })
                    });
                    let e = n.length - 1;
                    return (0, l.jsxs)("div", {
                        className: s(o.container, t),
                        children: [(0, l.jsx)(r.default, {
                            game: n[0].application,
                            className: o.icon20px
                        }), 2 === n.length ? (0, l.jsx)(r.default, {
                            game: n[1].application,
                            className: o.icon20px
                        }) : (0, l.jsx)(i.Text, {
                            className: o.overflow,
                            variant: "text-xs/bold",
                            color: "interactive-active",
                            children: "+".concat(e)
                        })]
                    })
                }
            }
        },
        120817: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FavoritesChannelList: function() {
                    return eu
                },
                GuildChannelList: function() {
                    return ed
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("406189"),
                c = n("345037"),
                f = n("901582"),
                h = n("206230"),
                C = n("812204"),
                E = n("685665"),
                m = n("880730"),
                p = n("802479"),
                g = n("972027"),
                S = n("334683"),
                _ = n("534222"),
                I = n("240239"),
                N = n("676143"),
                T = n("512395"),
                A = n("721264"),
                L = n("612246"),
                R = n("233069"),
                x = n("42203"),
                v = n("162805"),
                O = n("923959"),
                M = n("660478"),
                y = n("162771"),
                D = n("476765"),
                b = n("319839"),
                G = n("123561"),
                j = n("829072"),
                U = n("60937"),
                P = n("708186"),
                F = n("258285"),
                B = n("687183"),
                w = n("127193"),
                V = n("508176"),
                H = n("522342"),
                k = n("738552"),
                Y = n("630062"),
                K = n("873774"),
                W = n("677777"),
                z = n("579095"),
                Z = n("333896"),
                Q = n("446380"),
                X = n("919429"),
                q = n("944843"),
                J = n("283848"),
                $ = n("388930"),
                ee = n("37416"),
                et = n("796618"),
                en = n("249181"),
                el = n("49111"),
                ea = n("724210"),
                es = n("782340"),
                ei = n("272125");
            class er extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        initialized: !0
                    })
                }
                componentWillUnmount() {
                    this.updateChannelListScroll.cancel()
                }
                componentDidUpdate(e, t) {
                    let {
                        scrollToChannel: n,
                        guildId: l,
                        selectedChannelId: a
                    } = this.props, {
                        initialized: s
                    } = this.state, {
                        scrollTop: i
                    } = v.default.getGuildDimensions(l);
                    null != n ? (this.scrollToChannel(n), d.default.clearChannelListScrollTo(l)) : l !== e.guildId ? null != i && this.scrollTo(i) : a !== e.selectedChannelId ? this.scrollToChannel(a) : !t.initialized && s && (null == i && null != a ? this.scrollToChannel(a, !1, en.SCROLL_TO_SPACER, this.handleListScroll) : this.scrollTo(null != i ? i : 0, this.handleListScroll)), this.testShouldSkipTutorial()
                }
                getSectionRowsFromChannel(e) {
                    return this.props.guildChannels.getSectionRowsFromChannel(e)
                }
                scrollTo(e, t) {
                    var n;
                    null === (n = this._list) || void 0 === n || n.scrollTo({
                        to: e,
                        animate: !1,
                        callback: t
                    })
                }
                scrollToChannel(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : en.SCROLL_TO_SPACER,
                        l = arguments.length > 3 ? arguments[3] : void 0,
                        a = this._list,
                        s = this.getSectionRowsFromChannel(e)[0];
                    if (null != s && null != a) {
                        if (null != s.threadOffset) {
                            let [e] = a.getScrollPosition(s.section, s.row), i = s.threadOffset * en.HEIGHT_CHANNEL;
                            a.scrollIntoViewRect({
                                start: e + i,
                                end: e + i + en.HEIGHT_CHANNEL,
                                padding: n,
                                animate: t,
                                callback: l
                            })
                        } else a.scrollToIndex({
                            section: s.section,
                            row: s.row,
                            animate: t,
                            padding: n,
                            callback: l
                        })
                    }
                }
                isUnreadVisible() {
                    let {
                        guildChannels: e
                    } = this.props, t = this._list;
                    if (null == t) return !1;
                    let n = t.getItems();
                    return n.some(n => {
                        if ("row" !== n.type) return !1;
                        let {
                            section: l,
                            row: a
                        } = n;
                        if (l < b.SECTION_INDEX_UNCATEGORIZED_CHANNELS || e.isPlaceholderRow(l, a)) return !1;
                        let s = e.getChannelFromSectionRow(l, a);
                        if (null == s) return !1;
                        let {
                            channel: i,
                            category: r
                        } = s;
                        return !!(0, R.isGuildReadableType)(i.record.type) && (!r.isCollapsed || !r.isMuted) && !i.isMuted && !!t.isItemVisible(l, a, !0) && M.default.hasRelevantUnread(i.record)
                    })
                }
                renderTopUnread() {
                    let {
                        topMention: e,
                        bottomUnread: t,
                        bottomMention: n,
                        isUnreadVisible: a
                    } = this.state, {
                        guildId: s,
                        guildChannels: i,
                        guildChannelsVersion: r
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: ei.positionedContainer,
                        children: (0, l.jsx)(J.default, {
                            ref: this.unreadTopRef,
                            textUnread: es.default.Messages.NEW_UNREADS,
                            textMention: es.default.Messages.NEW_MENTIONS,
                            hide: null == e && (a || null != t || null != n),
                            className: ei.unreadTop,
                            barClassName: ei.unreadBar,
                            guildId: s,
                            guildChannels: i,
                            guildChannelsVersion: r,
                            isVisible: this.isChannelVisible,
                            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                            onCalculate: this.handleUnreadCalculate
                        })
                    })
                }
                renderBottomUnread() {
                    let {
                        guildId: e,
                        guildChannels: t,
                        guildChannelsVersion: n
                    } = this.props, {
                        bottomMention: a,
                        isUnreadVisible: s
                    } = this.state;
                    return (0, l.jsx)(J.default, {
                        reverse: !0,
                        ref: this.unreadBottomRef,
                        textUnread: es.default.Messages.NEW_UNREADS,
                        textMention: es.default.Messages.NEW_MENTIONS,
                        hide: null == a && s,
                        className: ei.unreadBottom,
                        barClassName: ei.unreadBar,
                        guildId: e,
                        guildChannels: t,
                        guildChannelsVersion: n,
                        isVisible: this.isChannelVisible,
                        onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                        onCalculate: this.handleUnreadCalculate
                    })
                }
                renderList() {
                    let {
                        guildChannels: e,
                        guild: t,
                        guildBanner: n,
                        hasGuildSubheader: a
                    } = this.props, {
                        ref: s,
                        ...i
                    } = this.context, r = 0;
                    return null != n ? r = en.SERVER_BANNER_PADDING : t.hasCommunityInfoSubheader() && !a && (r = en.SERVER_COMMUNITY_INFO_PADDING), (0, l.jsx)(u.FocusJumpSection, {
                        children: t => (0, l.jsx)(u.List, {
                            ref: this.setListRef,
                            className: ei.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: r,
                            paddingBottom: en.HEIGHT_BUFFER,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(),
                            innerAriaLabel: es.default.Messages.CHANNELS,
                            innerTag: "ul",
                            getAnchorId: this.getAnchorId,
                            ...i,
                            ...t
                        }, "guild-channels")
                    })
                }
                render() {
                    let {
                        guildChannels: e,
                        guildChannelsVersion: t,
                        showNewUnreadsBar: n
                    } = this.props;
                    return (0, l.jsx)(a.Fragment, {
                        children: (0, l.jsx)(D.UID, {
                            children: s => (0, l.jsx)(u.HeadingLevel, {
                                component: (0, l.jsx)(u.HiddenVisually, {
                                    children: (0, l.jsx)(u.H, {
                                        id: s,
                                        children: es.default.Messages.CHANNELS
                                    })
                                }),
                                children: n ? (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: ei.positionedContainer,
                                        children: (0, l.jsx)(q.default, {
                                            position: "top",
                                            guildChannels: e,
                                            guildChannelsVersion: t,
                                            jumpToVoiceChannels: this.jumpToVoiceChannels,
                                            jumpToChannel: this.jumpToChannel
                                        })
                                    }), this.renderList(), (0, l.jsx)(q.default, {
                                        position: "bottom",
                                        guildChannels: e,
                                        guildChannelsVersion: t,
                                        jumpToVoiceChannels: this.jumpToVoiceChannels,
                                        jumpToChannel: this.jumpToChannel
                                    })]
                                }) : (0, l.jsxs)(a.Fragment, {
                                    children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._list = null, this.unreadTopRef = a.createRef(), this.unreadBottomRef = a.createRef(), this.state = {
                        initialized: !1,
                        isUnreadVisible: !0,
                        topUnread: null,
                        topMention: null,
                        bottomUnread: null,
                        bottomMention: null
                    }, this.setListRef = e => {
                        var t;
                        let {
                            ref: n
                        } = this.context;
                        n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e
                    }, this.jumpToVoiceChannels = () => {
                        var e, t, n, l;
                        let {
                            guildChannels: a,
                            voiceStates: s
                        } = this.props, i = 0, r = null !== (n = null === (e = a.getCategoryFromSection(a.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                        for (let e = 0; e < r.length - 1; e++) {
                            let t = null !== (l = s[r[e]]) && void 0 !== l ? l : [];
                            if (t.length > 0) {
                                i = e + 1;
                                break
                            }
                        }
                        null === (t = this._list) || void 0 === t || t.scrollToIndex({
                            section: a.voiceChannelsSectionNumber,
                            row: i,
                            animate: !0,
                            padding: en.SCROLL_TO_SPACER
                        })
                    }, this.jumpToChannel = e => this.scrollToChannel(e, !0, en.SCROLL_TO_UNREAD_BUFFER), this.jumpToChannelWithMentionsAndUnreads = (e, t) => {
                        let [n, l] = t;
                        return this.scrollToChannel(e, !0, null != n && null != l ? en.SCROLL_TO_UNREAD_BUFFER : en.SCROLL_TO_SPACER)
                    }, this.isChannelVisible = (e, t) => {
                        let n = this.getSectionRowsFromChannel(e),
                            l = this._list;
                        if (null == l) return !1;
                        for (let {
                                row: e,
                                section: a
                            }
                            of n) {
                            let [n, s] = l.getScrollPosition(a, e), i = l.getScrollerState();
                            if (t && n + s < i.scrollTop + i.offsetHeight) return !0;
                            if (!t && n > i.scrollTop) return !0
                        }
                        return !1
                    }, this.getVisibleChannels = () => {
                        let e = this._list;
                        if (null == e) return [];
                        let t = e.getItems(),
                            n = e.getScrollerState(),
                            l = [];
                        for (var a = 0; a < t.length; a++) {
                            let s = t[a];
                            if ((0, u.isListItemRow)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                                    [a, i] = e.getScrollPosition(s.section, s.row);
                                null != t && a + i < n.scrollTop + n.offsetHeight && a > n.scrollTop && l.push(t.channel.id)
                            }
                        }
                        return l
                    }, this.handleResize = () => {
                        var e, t;
                        let {
                            showNewUnreadsBar: n
                        } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                        if (this.setState({
                                isUnreadVisible: this.isUnreadVisible()
                            }), n && null != l) {
                            let {
                                scrollTop: e
                            } = l;
                            this.updateChannelListScroll(e)
                        }
                    }, this.handleListScroll = () => {
                        var e, t;
                        let {
                            onScroll: n
                        } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                        if (null != l) {
                            let {
                                scrollTop: e
                            } = l;
                            null != n && n(l), this.updateChannelListScroll(e)
                        }
                        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
                    }, this.handleUnreadCalculate = (e, t, n) => {
                        let l = this.isUnreadVisible();
                        n ? this.setState({
                            isUnreadVisible: l,
                            bottomUnread: t,
                            bottomMention: e
                        }) : this.setState({
                            isUnreadVisible: l,
                            topUnread: t,
                            topMention: e
                        })
                    }, this.updateChannelListScroll = i.throttle(e => {
                        d.default.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
                    }, 100), this.getSectionHeight = e => {
                        let {
                            guild: t,
                            guildChannels: n
                        } = this.props;
                        return (0, F.getChannelListSectionHeight)(e, t, n)
                    }, this.getSectionFooterHeight = e => {
                        let {
                            guildChannels: t,
                            voiceStates: n,
                            selectedVoiceChannelId: l,
                            selectedChannelId: a,
                            optInEnabled: s,
                            guildChannelsVersion: i
                        } = this.props;
                        return (0, B.getChannelListSectionFooterHeight)({
                            sectionIndex: e,
                            guildChannels: t,
                            guildChannelsVersion: i,
                            voiceStates: n,
                            selectedChannelId: a,
                            selectedVoiceChannelId: l,
                            optInEnabled: s
                        })
                    }, this.getRowHeight = (e, t) => {
                        let {
                            guildChannels: n,
                            voiceStates: l,
                            stageChannelSpeakerVoiceStates: a,
                            selectedVoiceChannelId: s
                        } = this.props, i = en.HEIGHT_CHANNEL;
                        if (e === b.SECTION_INDEX_COMMUNITY) {
                            let e = n.getCommunitySection();
                            if (e.isEmpty()) return 0;
                            if (e.getRow(t) === et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR) {
                                let t = e.getRows();
                                return t.length > 1 ? m.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN : m.PROGRESS_BAR_CONTAINER_HEIGHT
                            }
                            return i
                        }
                        if (n.isPlaceholderRow(e, t)) return 0;
                        let r = n.getChannelFromSectionRow(e, t);
                        if (null == r) return 0;
                        let {
                            channel: o,
                            category: u
                        } = r;
                        if (o.record.type === el.ChannelTypes.GUILD_CATEGORY) return 40;
                        for (let e of o.threadIds) {
                            i += en.HEIGHT_CHANNEL;
                            let t = l[o.id];
                            null != t && t.length > 0 && (i += (s === e ? t.length * en.HEIGHT_USER : en.HEIGHT_USER) + en.HEIGHT_USER_PADDING)
                        }
                        if (o.record.isGuildVoice()) {
                            let e = l[o.id];
                            if (null != e && e.length > 0) {
                                let t = e.length * en.HEIGHT_USER;
                                (o.isCollapsed || u.isCollapsed) && (t = en.HEIGHT_USER), i += t + en.HEIGHT_USER_PADDING
                            }
                        }
                        if (null != o.subtitle && (i += en.HEIGHT_CHANNEL_SUBTITLE), o.record.isGuildStageVoice()) {
                            var d, c;
                            let e = null !== (d = l[o.id]) && void 0 !== d ? d : [],
                                t = null !== (c = a[o.id]) && void 0 !== c ? c : [];
                            if (null != e && e.length > 0) {
                                let e = t.length * en.HEIGHT_USER;
                                o.isCollapsed || u.isCollapsed ? e = Math.ceil(e / en.COLLAPSED_USERS_PER_ROW) : e += en.HEIGHT_USER, i += e + en.HEIGHT_USER_PADDING
                            }
                        }
                        return i
                    }, this.dismissRecents = () => {
                        let {
                            guild: e,
                            guildChannels: t,
                            selectedChannelId: n
                        } = this.props, l = t.getCategoryFromSection(t.recentsSectionNumber);
                        if (null == l) return;
                        let a = null,
                            s = l.getShownChannelAndThreadIds();
                        null != n && s.includes(n) && (a = (0, N.getFirstRouteFor)(t)), (0, N.clearRecentChannels)(e.id, s, a)
                    }, this.renderSection = e => {
                        let {
                            section: t
                        } = e, {
                            guildChannels: n,
                            guildChannelsVersion: a,
                            guild: s,
                            selectedChannelId: i,
                            disableManageChannels: r
                        } = this.props;
                        return (0, l.jsx)(F.default, {
                            sectionIndex: t,
                            guild: s,
                            guildChannels: n,
                            guildChannelsVersion: a,
                            selectedChannelId: i,
                            disableManageChannels: r
                        }, (0, F.getKeyForSection)(t, n))
                    }, this.renderRow = e => {
                        var t, n;
                        let {
                            section: s,
                            row: i
                        } = e, {
                            guild: r,
                            selectedChannel: o,
                            selectedChannelId: u,
                            selectedVoiceChannel: d,
                            selectedVoiceChannelId: c,
                            guildChannels: f,
                            voiceStates: h,
                            disableManageChannels: C,
                            stageChannelSpeakerVoiceStates: E,
                            optInEnabled: g
                        } = this.props;
                        if (s === b.SECTION_INDEX_COMMUNITY) {
                            let e = f.getCommunitySection(),
                                t = e.getRow(i);
                            if (null == t) return null;
                            switch (t) {
                                case et.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
                                    return (0, l.jsx)(I.default, {
                                        guild: r,
                                        channel: O.default.getDefaultChannel(r.id)
                                    }, et.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS);
                                case et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
                                    let n = e.getRows();
                                    return (0, l.jsx)(m.default, {
                                        guild: r,
                                        withMargin: n.length > 1
                                    }, et.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR);
                                case et.ChannelListCommunityRow.GUILD_HOME:
                                    return (0, l.jsx)(H.default, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.GUILD_HOME
                                    }, et.ChannelListCommunityRow.GUILD_HOME);
                                case et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
                                    return (0, l.jsx)($.default, {
                                        guild: r,
                                        selected: u === et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
                                    }, et.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS);
                                case et.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                                    return (0, l.jsx)(K.default, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.ROLE_SUBSCRIPTIONS
                                    }, et.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS);
                                case et.ChannelListCommunityRow.GUILD_SHOP:
                                    return (0, l.jsx)(W.default, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.GUILD_SHOP
                                    }, et.ChannelListCommunityRow.GUILD_SHOP);
                                case et.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                                    return (0, l.jsx)(k.default, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.MEMBER_APPLICATIONS
                                    }, et.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS);
                                case et.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                                    return (0, l.jsx)(Y.GuildNewMemberActionsProgressBar, {
                                        guild: r
                                    });
                                case et.ChannelListCommunityRow.CHANNELS_AND_ROLES:
                                    return (0, l.jsx)(V.GuildBrowseChannelsRow, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.CHANNEL_BROWSER || u === ea.StaticChannelRoute.CUSTOMIZE_COMMUNITY
                                    }, et.ChannelListCommunityRow.CHANNELS_AND_ROLES);
                                case et.ChannelListCommunityRow.GUILD_DIRECTORY:
                                    return (0, l.jsx)(w.default, {
                                        guild: r,
                                        selectedChannelId: u,
                                        disableManageChannels: C
                                    }, et.ChannelListCommunityRow.GUILD_DIRECTORY);
                                case et.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
                                    return (0, l.jsx)(p.default, {
                                        guild: r,
                                        selected: u === ea.StaticChannelRoute.MEMBER_SAFETY
                                    }, et.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY);
                                default:
                                    return null
                            }
                        }
                        if (f.isPlaceholderRow(s, i)) return null;
                        let S = f.getChannelFromSectionRow(s, i);
                        if (null == S) return null;
                        let {
                            category: _,
                            channel: N
                        } = S, T = _ instanceof b.ChannelListFavoritesCategory, A = N.record, L = "".concat(s).concat(N.id);
                        switch (A.type) {
                            case el.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case el.ChannelTypes.GUILD_TEXT:
                            case el.ChannelTypes.GUILD_FORUM:
                            case el.ChannelTypes.GUILD_MEDIA:
                            case el.ChannelTypes.DM:
                            case el.ChannelTypes.GROUP_DM:
                                return (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)(X.default, {
                                        channel: A,
                                        guild: r,
                                        position: N.position,
                                        selected: u === N.id,
                                        muted: N.isMuted,
                                        subtitle: N.subtitle,
                                        disableManageChannels: C,
                                        canBeNewChannel: g && s === f.recentsSectionNumber,
                                        isFavoriteCategory: T
                                    }), N.threadCount > 0 ? (0, l.jsx)(z.default, {
                                        channel: A,
                                        sortedThreadIds: N.threadIds,
                                        selectedChannel: null != o && (o.id === N.id || o.parent_id === A.id) ? o : null,
                                        selectedVoiceChannelId: (null == d ? void 0 : d.parent_id) === A.id ? c : null
                                    }) : null]
                                }, L);
                            case el.ChannelTypes.GUILD_STAGE_VOICE:
                                return (0, l.jsx)(Z.default, {
                                    channel: A,
                                    guild: r,
                                    position: N.position,
                                    selected: u === N.id,
                                    connected: c === N.id,
                                    collapsed: N.isCollapsed || _.isCollapsed,
                                    voiceStates: null !== (t = h[N.id]) && void 0 !== t ? t : [],
                                    speakerVoiceStates: null !== (n = E[N.id]) && void 0 !== n ? n : [],
                                    disableManageChannels: C,
                                    isFavoriteCategory: T
                                }, L);
                            case el.ChannelTypes.GUILD_VOICE:
                                return (0, l.jsx)(ee.default, {
                                    channel: A,
                                    guild: r,
                                    position: N.position,
                                    selected: u === N.id,
                                    connected: c === N.id,
                                    collapsed: N.isCollapsed || _.isCollapsed,
                                    voiceStates: h[N.id],
                                    subtitle: N.subtitle,
                                    disableManageChannels: C,
                                    showTutorial: N.isFirstVoiceChannel,
                                    isFavoriteCategory: T
                                }, L);
                            case el.ChannelTypes.GUILD_STORE:
                                return (0, l.jsx)(Q.default, {
                                    channel: A,
                                    guild: r,
                                    position: N.position,
                                    selected: u === N.id
                                }, L);
                            case el.ChannelTypes.GUILD_CATEGORY:
                                if (s !== f.voiceChannelsSectionNumber) return null;
                                return (0, l.jsx)(P.ReadonlyCategoryChannel, {
                                    channel: A
                                }, "readonly-".concat(A.id));
                            case el.ChannelTypes.PUBLIC_THREAD:
                            case el.ChannelTypes.PRIVATE_THREAD:
                                return (0, l.jsx)(X.default, {
                                    channel: A,
                                    guild: r,
                                    position: N.position,
                                    selected: u === N.id,
                                    muted: N.isMuted,
                                    subtitle: N.subtitle,
                                    disableManageChannels: C,
                                    canBeNewChannel: !1,
                                    isFavoriteCategory: !1,
                                    forceTopLevelThread: !0
                                }, L);
                            default:
                                return null
                        }
                    }, this.renderSectionFooter = e => {
                        let {
                            section: t
                        } = e, {
                            guildChannels: n,
                            guildChannelsVersion: a,
                            voiceStates: s,
                            selectedChannelId: i,
                            selectedVoiceChannelId: r,
                            optInEnabled: o,
                            guildId: u
                        } = this.props;
                        return (0, l.jsx)(B.default, {
                            guildId: u,
                            guildChannels: n,
                            guildChannelsVersion: a,
                            sectionIndex: t,
                            voiceStates: s,
                            selectedChannelId: i,
                            selectedVoiceChannelId: r,
                            optInEnabled: o
                        }, (0, B.getKeyForSectionFooter)(t, n, o))
                    }, this.getAnchorId = (e, t) => {
                        var n, l, a;
                        let {
                            guildChannels: s
                        } = this.props;
                        if (e !== b.SECTION_INDEX_COMMUNITY) {
                            if (null == t) return e === b.SECTION_INDEX_FAVORITES ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === b.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? "uncategorized-header" : null === (a = s.getNamedCategoryFromSection(e)) || void 0 === a ? void 0 : a.id;
                            if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
                        }
                    }, this.testShouldSkipTutorial = () => {
                        if (!L.default.shouldShow("voice-conversations")) return;
                        let {
                            guildChannels: e
                        } = this.props, t = e.getFirstVoiceChannel();
                        if (null == t) {
                            c.default.dismiss("voice-conversations");
                            return
                        }
                        let n = this._list;
                        if (null == n) return;
                        let l = this.getSectionRowsFromChannel(t.id);
                        for (let {
                                section: e,
                                row: t
                            }
                            of l) !n.isItemVisible(e, t) && c.default.dismiss("voice-conversations")
                    }
                }
            }
            er.contextType = r.ListContainerContext;
            let eo = e => {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: s
                } = e, i = (0, o.useStateFromStores)([h.default], () => h.default.keyboardModeEnabled), {
                    AnalyticsLocationProvider: u
                } = (0, E.default)(C.default.GUILD_CHANNEL_LIST), d = (0, o.useStateFromStores)([x.default], () => x.default.getChannel(n)), c = (0, o.useStateFromStores)([x.default], () => x.default.getChannel(s)), m = (0, o.useStateFromStores)([y.default], () => y.default.getGuildId()), p = (0, T.useOptInEnabledForGuild)(t), g = a.useRef(null), S = a.useCallback((e, t) => {
                    let n = g.current;
                    if (null != n) {
                        if (el.ID_REGEX.test(t) || (0, ea.isStaticChannelRoute)(t)) n.scrollToChannel(t, !1, 2 * en.SCROLL_TO_SPACER, () => {
                            requestAnimationFrame(() => {
                                var t;
                                return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus()
                            })
                        });
                        else {
                            var l;
                            null === (l = document.querySelector(e)) || void 0 === l || l.focus()
                        }
                    }
                }, []), _ = a.useCallback(() => new Promise(e => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()))
                }), []), I = a.useCallback(() => new Promise(e => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
                }), []), N = (0, r.default)({
                    id: "channels",
                    defaultFocused: null != n ? n : void 0,
                    isEnabled: i,
                    setFocus: S,
                    scrollToStart: _,
                    scrollToEnd: I
                }), L = N.setFocus;
                a.useEffect(() => {
                    null != n && L(n)
                }, [n, L]);
                let R = (0, A.default)(t);
                return (0, l.jsx)(u, {
                    children: (0, l.jsx)(f.default, {
                        section: el.AnalyticsSections.GUILD_CHANNEL_LIST,
                        children: (0, l.jsx)(r.ListNavigatorProvider, {
                            navigator: N,
                            children: (0, l.jsx)(er, {
                                ...e,
                                listNavigator: N,
                                ref: g,
                                selectedChannel: d,
                                selectedVoiceChannel: c,
                                stageChannelSpeakerVoiceStates: R,
                                selectedGuildId: m,
                                optInEnabled: p
                            })
                        })
                    })
                })
            };

            function eu(e) {
                let t = (0, j.useFavoritesServerChannelList)();
                return (0, l.jsx)(eo, {
                    ...e,
                    guildChannels: t,
                    guildChannelsVersion: 0
                })
            }

            function ed(e) {
                let t = (0, U.default)(e.guild),
                    n = (0, S.default)(e.guild.id),
                    a = (0, _.default)(e.guild.id),
                    s = (0, o.useStateFromStoresObject)([G.default], () => G.default.getGuild(e.guildId, t));
                return !e.guild.hasFeature(el.GuildFeatures.COMMUNITY) && !e.guild.hasFeature(el.GuildFeatures.HUB) && n && 0 === a.length && g.default.trackExposure({
                    guildId: e.guildId,
                    location: "Channel List"
                }), (0, l.jsx)(eo, {
                    ...e,
                    ...s
                })
            }
        },
        249181: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SCROLL_TO_SPACER: function() {
                    return l
                },
                SCROLL_TO_UNREAD_BUFFER: function() {
                    return a
                },
                HEIGHT_SECTION: function() {
                    return s
                },
                HEIGHT_SECTION_DIVIDER: function() {
                    return i
                },
                HEIGHT_BUFFER: function() {
                    return r
                },
                HEIGHT_CHANNEL: function() {
                    return o
                },
                HEIGHT_CHANNEL_SUBTITLE: function() {
                    return u
                },
                HEIGHT_USER: function() {
                    return d
                },
                HEIGHT_USER_PADDING: function() {
                    return c
                },
                SERVER_BANNER_PADDING: function() {
                    return f
                },
                SERVER_COMMUNITY_INFO_PADDING: function() {
                    return h
                },
                COLLAPSED_USERS_PER_ROW: function() {
                    return C
                },
                TUTORIAL_INLINE_SPECS: function() {
                    return E
                }
            });
            let l = 8,
                a = 32,
                s = 40,
                i = 12,
                r = 12,
                o = 34,
                u = 16,
                d = 32,
                c = 8,
                f = 84,
                h = 16,
                C = 5,
                E = {
                    origin: {
                        x: -36,
                        y: 7
                    },
                    targetWidth: 232,
                    targetHeight: 40,
                    offset: {
                        x: 0,
                        y: 0
                    }
                }
        },
        258285: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelListSectionHeight: function() {
                    return C
                },
                getKeyForSection: function() {
                    return E
                },
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("676143"),
                i = n("12896"),
                r = n("808072"),
                o = n("319839"),
                u = n("708186"),
                d = n("249181"),
                c = n("49111"),
                f = n("782340"),
                h = n("272125");

            function C(e, t, n) {
                if (e === o.SECTION_INDEX_COMMUNITY) return d.HEIGHT_BUFFER;
                if (e === o.SECTION_INDEX_UNCATEGORIZED_CHANNELS) return t.hasFeature(c.GuildFeatures.HUB) ? 0 : d.HEIGHT_BUFFER;
                if (e === n.voiceChannelsSectionNumber) {
                    var l;
                    let t = n.getCategoryFromSection(e);
                    if (null == t || t.isEmpty()) return 0;
                    if (t.isCollapsed) return d.HEIGHT_SECTION + d.HEIGHT_SECTION_DIVIDER;
                    let a = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
                    return null == a || a.record.type === c.ChannelTypes.GUILD_CATEGORY ? d.HEIGHT_SECTION_DIVIDER : 16 + d.HEIGHT_SECTION_DIVIDER
                }
                return d.HEIGHT_SECTION
            }

            function E(e, t) {
                switch (e) {
                    case o.SECTION_INDEX_COMMUNITY:
                        return "hoisted-spacer";
                    case o.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
                        return "uncategorized-spacer";
                    case o.SECTION_INDEX_FAVORITES:
                        return "favorites";
                    case t.recentsSectionNumber:
                        return "recents-header";
                    case t.voiceChannelsSectionNumber:
                        return "voice-channels-header";
                    default: {
                        let n = t.getNamedCategoryFromSection(e);
                        if (null != n) return "category-".concat(n.id);
                        return "section-".concat(e)
                    }
                }
            }
            var m = a.memo(function(e) {
                let {
                    sectionIndex: t,
                    guild: n,
                    guildChannels: C,
                    guildChannelsVersion: E,
                    selectedChannelId: m,
                    disableManageChannels: p
                } = e, g = a.useCallback(() => {
                    let e = C.getCategoryFromSection(C.recentsSectionNumber);
                    if (null == e) return;
                    let t = null,
                        l = e.getShownChannelAndThreadIds();
                    null != m && l.includes(m) && (t = (0, s.getFirstRouteFor)(C)), (0, s.clearRecentChannels)(n.id, l, t)
                }, [n.id, m, C, E]);
                switch (t) {
                    case o.SECTION_INDEX_COMMUNITY:
                        return (0, l.jsx)("div", {
                            style: {
                                height: d.HEIGHT_BUFFER
                            }
                        });
                    case o.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
                        if (n.hasFeature(c.GuildFeatures.HUB)) return null;
                        return (0, l.jsx)("div", {
                            style: {
                                height: d.HEIGHT_BUFFER
                            }
                        });
                    case o.SECTION_INDEX_FAVORITES:
                        return (0, l.jsx)(u.NonChannelCategory, {
                            name: f.default.Messages.FAVORITES
                        });
                    case C.recentsSectionNumber:
                        return (0, l.jsx)(u.NonChannelCategory, {
                            name: f.default.Messages.RECENTS_CATEGORY_HEADER,
                            onDismiss: g
                        });
                    case C.voiceChannelsSectionNumber: {
                        var S;
                        let e = C.getCategoryFromSection(C.voiceChannelsSectionNumber);
                        if (null == e || e.isEmpty()) return null;
                        let n = null === (S = C.getChannelFromSectionRow(t, 0)) || void 0 === S ? void 0 : S.channel;
                        return (0, l.jsxs)(a.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: h.sectionDivider
                            }), (0, l.jsx)(u.VoiceChannelCategory, {
                                category: e,
                                channel: n
                            })]
                        })
                    }
                    case o.SECTION_INDEX_FIRST_NAMED_CATEGORY: {
                        let e = C.getNamedCategoryFromSection(t);
                        if (null == e) return null;
                        return (0, l.jsx)(u.default, {
                            channel: e.record,
                            position: e.position,
                            disableManageChannels: p,
                            children: (0, l.jsx)(i.default, {
                                inlineSpecs: d.TUTORIAL_INLINE_SPECS,
                                arrowAlignment: r.ArrowAlignments.TOP,
                                tutorialId: "organize-by-topic",
                                position: "right"
                            })
                        })
                    }
                    default: {
                        let e = C.getNamedCategoryFromSection(t);
                        if (null == e) return null;
                        return (0, l.jsx)(u.default, {
                            channel: e.record,
                            position: e.position,
                            disableManageChannels: p
                        })
                    }
                }
            })
        },
        687183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelListSectionFooterHeight: function() {
                    return h
                },
                getKeyForSectionFooter: function() {
                    return C
                },
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("811305"),
                i = n("404008"),
                r = n("319839"),
                o = n("175632"),
                u = n("708186"),
                d = n("249181"),
                c = n("272125");
            let f = a.memo(function(e) {
                let {
                    guildChannels: t,
                    guildChannelsVersion: n
                } = e, s = a.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
                return null == s ? null : (0, l.jsx)(u.VoiceChannelCategoryButton, {
                    category: s
                })
            });

            function h(e) {
                let {
                    sectionIndex: t,
                    guildChannels: n,
                    voiceStates: l,
                    selectedChannelId: a,
                    selectedVoiceChannelId: s,
                    optInEnabled: i
                } = e;
                if (t === n.voiceChannelsSectionNumber) return 44;
                let {
                    hasDivider: u,
                    canHaveVoiceSummary: c
                } = (0, o.getSectionFooterConfig)(n, i, t), f = u ? d.HEIGHT_SECTION_DIVIDER : 0;
                if (!c || t === r.SECTION_INDEX_COMMUNITY) return f;
                let h = n.getNamedCategoryFromSection(t);
                if (null == h) return f;
                let C = (0, o.isSectionFooterWithActiveVoiceChannels)({
                    category: h,
                    selectedChannelId: a,
                    selectedVoiceChannelId: s,
                    voiceStates: l
                });
                return C ? d.HEIGHT_CHANNEL + f : f
            }

            function C(e, t, n) {
                if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
                let {
                    hasDivider: l,
                    canHaveVoiceSummary: a
                } = (0, o.getSectionFooterConfig)(t, n, e);
                return "section-footer-".concat(e).concat(l ? "-divider" : "").concat(a ? "-voice-summary" : "")
            }
            var E = a.memo(function(e) {
                let {
                    sectionIndex: t,
                    guildChannels: n,
                    guildChannelsVersion: u,
                    voiceStates: d,
                    guildId: h,
                    selectedChannelId: C,
                    selectedVoiceChannelId: E,
                    optInEnabled: m
                } = e, {
                    hasDivider: p,
                    canHaveVoiceSummary: g
                } = a.useMemo(() => (0, o.getSectionFooterConfig)(n, m, t), [n, m, t, u]), S = a.useMemo(() => t === r.SECTION_INDEX_COMMUNITY ? null : n.getCategoryFromSection(t), [n, t, u]), _ = a.useMemo(() => null != S && S.isCollapsed ? (0, i.computeSummarizedVoiceUsers)({
                    channels: S.getChannelRecords(),
                    selectedChannelId: C,
                    selectedVoiceChannelId: E,
                    voiceStates: d
                }) : [], [S, C, E, d]);
                if (t === n.voiceChannelsSectionNumber) return (0, l.jsx)(f, {
                    guildChannels: n,
                    guildChannelsVersion: u
                });
                let I = p ? (0, l.jsx)("div", {
                    className: c.sectionDivider
                }) : null;
                return g && 0 !== _.length ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: c.voiceUserSummary,
                        children: (0, l.jsx)(s.default, {
                            renderIcon: !0,
                            users: _,
                            max: 8,
                            showUserPopout: !0,
                            guildId: h
                        })
                    }), I]
                }) : I
            })
        },
        137376: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("830210"),
                s = n("42687");

            function i(e) {
                let {
                    channel: t,
                    video: n,
                    userCount: i
                } = e, {
                    limit: r
                } = (0, a.default)(t), o = -1, u = !1;
                return t.userLimit > 0 && (o = t.userLimit), n && r > 0 && (u = o < 0 || r < o, o = o > 0 ? Math.min(o, r) : r), (0, l.jsx)(s.default, {
                    users: i,
                    total: o,
                    videoLimit: u
                })
            }
        },
        127193: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("272030"),
                u = n("667771"),
                d = n("42203"),
                c = n("923959"),
                f = n("957255"),
                h = n("783735"),
                C = n("41594"),
                E = n("49111"),
                m = n("708995");
            let p = (0, u.makeChannelSortable)(function(e) {
                let {
                    guild: t,
                    selectedChannelId: s,
                    position: u,
                    disableManageChannels: p,
                    sorting: g,
                    sortingType: S,
                    sortingPosition: _,
                    connectChannelDragSource: I,
                    connectChannelDropTarget: N,
                    tabIndex: T
                } = e, A = (0, r.useStateFromStores)([d.default, c.default], () => {
                    let e = c.default.getDirectoryChannelIds(t.id);
                    return 0 === e.length ? null : d.default.getChannel(e[0])
                }), L = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(null == A ? void 0 : A.parent_id)), R = s === (null == A ? void 0 : A.id), x = (0, r.useStateFromStores)([f.default], () => null != L ? f.default.can(E.Permissions.MANAGE_CHANNELS, L) : null != t && f.default.can(E.Permissions.MANAGE_CHANNELS, t)), v = a.useCallback(e => {
                    null != A && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("425630").then(n.bind(n, "425630"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            channel: A
                        })
                    })
                }, [A]);
                if (null == A) return null;
                let O = (0, h.getChannelItemClassName)(u, _),
                    M = (0, h.isChannelItemDisabled)(A, g, S),
                    y = (0, l.jsx)("div", {
                        className: i(O, {
                            [m.disabled]: M,
                            [m.selected]: R
                        }),
                        "data-dnd-name": A.name,
                        children: (0, l.jsxs)(C.default, {
                            className: m.iconVisibility,
                            channel: A,
                            guild: t,
                            selected: R,
                            onContextMenu: v,
                            forceInteractable: !0,
                            children: [(0, l.jsx)(h.ChannelItemInviteButton, {
                                channel: A,
                                tabIndex: T
                            }), (0, l.jsx)(h.ChannelItemEditButton, {
                                channel: A,
                                disableManageChannels: p,
                                tabIndex: T
                            })]
                        })
                    });
                return x && (y = N(I(y))), y
            });
            var g = p
        },
        508176: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildBrowseChannelsRow: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("65597"),
                i = n("151426"),
                r = n("669491"),
                o = n("272030"),
                u = n("10641"),
                d = n("863636"),
                c = n("361776"),
                f = n("15684"),
                h = n("393414"),
                C = n("660478"),
                E = n("446685"),
                m = n("956089"),
                p = n("299039"),
                g = n("319839"),
                S = n("708402"),
                _ = n("49111"),
                I = n("724210"),
                N = n("133335"),
                T = n("782340"),
                A = n("174757");

            function L(e) {
                let {
                    guild: t,
                    selected: L
                } = e, R = (0, c.default)(t), x = (0, u.useIsDismissibleContentDismissed)(i.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX), v = (0, s.useStateFromStoresArray)([f.default], () => Array.from(f.default.getNewChannelIds(t.id)).filter(e => f.default.shouldIndicateNewChannel(t.id, e))), O = (0, s.default)([C.default], () => C.default.hasUnread(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), M = v.length > g.MAX_NEW_CHANNELS_TO_SHOW, y = (0, s.default)([d.default, C.default], () => {
                    let e = d.default.lastFetchedAt(t.id),
                        n = C.default.lastMessageId(t.id, N.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
                    if (null == n) return !1;
                    let l = p.default.extractTimestamp(n);
                    return null != e && e > l
                }), D = a.useCallback(() => {
                    (0, h.transitionTo)(_.Routes.CHANNEL(t.id, R ? I.StaticChannelRoute.CUSTOMIZE_COMMUNITY : I.StaticChannelRoute.CHANNEL_BROWSER))
                }, [t.id, R]), b = a.useCallback(e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("357763").then(n.bind(n, "357763"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            guild: t
                        })
                    })
                }, [t]), G = null;
                return (!x || O || M) && !L && !y && (G = (0, l.jsx)(m.TextBadge, {
                    color: r.default.unsafe_rawColors.BRAND_260.css,
                    text: T.default.Messages.NEW,
                    className: A.newChannel
                })), (0, l.jsx)(S.default, {
                    renderIcon: e => (0, l.jsx)(E.default, {
                        className: e
                    }),
                    text: R ? T.default.Messages.CHANNELS_AND_ROLES : T.default.Messages.CHANNEL_BROWSER_TITLE,
                    selected: L,
                    onClick: D,
                    onContextMenu: b,
                    badge: G
                })
            }
        },
        637667: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                o = n("394846"),
                u = n("77078"),
                d = n("51565"),
                c = n("845579"),
                f = n("68238"),
                h = n("794352"),
                C = n("315102"),
                E = n("974755"),
                m = n("49111"),
                p = n("695838"),
                g = n("782340"),
                S = n("217997");

            function _(e) {
                var t;
                let {
                    guild: n,
                    controller: a,
                    guildBanner: s,
                    animate: u
                } = e, {
                    value: d
                } = a.springs, f = c.GifAutoPlay.getSetting();
                return (0, l.jsx)(r.animated.div, {
                    className: S.animatedContainer,
                    style: {
                        opacity: d,
                        transform: d.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
                    },
                    children: (0, l.jsx)(r.animated.div, {
                        className: i(S.bannerImage, {
                            [S.bannerImgFullWidth]: o.isMobile
                        }),
                        style: {
                            transform: d.to(e => f ? "translateY(".concat((1 - e) * 60, "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * 90, "px)"))
                        },
                        children: (0, l.jsx)("img", {
                            className: i(S.bannerImg, {
                                [S.bannerImgFullWidth]: o.isMobile
                            }),
                            src: null !== (t = C.default.getGuildBannerURL({
                                id: n.id,
                                banner: s
                            }, u)) && void 0 !== t ? t : "",
                            alt: "",
                            height: 135,
                            width: 240,
                            "aria-hidden": !0
                        })
                    })
                })
            }

            function I(e) {
                let {
                    guild: t,
                    controller: n,
                    hasBanner: a,
                    hasSubheader: s
                } = e, {
                    value: o
                } = n.springs, d = t.hasFeature(m.GuildFeatures.DISCOVERABLE), c = (0, l.jsx)("div", {
                    className: S.communityInfo,
                    children: d && (0, l.jsx)(u.Tooltip, {
                        text: g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                        position: "right",
                        children: e => (0, l.jsxs)("div", {
                            className: S.communityInfoPill,
                            ...e,
                            children: [(0, l.jsx)(h.default, {
                                width: 12,
                                height: 12,
                                className: S.communityIcon
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
                            })]
                        })
                    })
                });
                return s ? (0, l.jsx)("div", {
                    className: i(S.communityInfoContainer, S.hasSubheader),
                    children: c
                }) : (0, l.jsx)(r.animated.div, {
                    className: S.communityInfoContainer,
                    style: a ? {
                        opacity: o
                    } : {
                        height: o.to(e => "".concat(20 * e, "px"))
                    },
                    children: c
                })
            }

            function N(e) {
                let {
                    guild: t
                } = e, n = t.id === p.FAVORITES_RAW_GUILD_ID;
                return n ? (0, l.jsx)(u.Tooltip, {
                    text: "Super-duper alpha! This may break, change, or be removed at any time. One day real users can use this. :')",
                    children: e => (0, l.jsx)(f.default, {
                        className: S.favoritesInfo,
                        ...e
                    })
                }) : null
            }
            var T = a.memo(function(e) {
                var t;
                let {
                    bannerVisible: n,
                    controller: s,
                    className: r,
                    onClick: f,
                    onContextMenu: h,
                    onMouseDown: p,
                    disableBannerAnimation: T,
                    "aria-expanded": A,
                    "aria-controls": L,
                    guild: R,
                    guildBanner: x,
                    animationOverlayHeight: v,
                    children: O,
                    headerClassName: M,
                    communityInfoVisible: y,
                    hasSubheader: D
                } = e, b = R.hasFeature(m.GuildFeatures.ANIMATED_BANNER), G = (0, d.default)(R), j = !G && R.hasCommunityInfoSubheader(), U = (0, C.isAnimatedIconHash)(x) && b && !T, [P, F] = a.useState(!1), B = a.useRef(), w = a.useRef(null), V = a.useRef(), H = c.GifAutoPlay.getSetting();
                a.useEffect(() => {
                    if (U && n && !B.current && H) return F(!0), V.current = setTimeout(() => {
                        F(!1)
                    }, 5e3), () => {
                        clearTimeout(V.current)
                    }
                }, [U, n, H]), a.useEffect(() => {
                    B.current = n
                }, [n]);
                let k = () => {
                    let {
                        renderBanner: t,
                        guildBanner: n
                    } = e;
                    return null != n && !t
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        ref: w,
                        className: i(r, {
                            [S.container]: !0,
                            [S.clickable]: null != f,
                            [S.selected]: null != f && A,
                            [S.hasBanner]: k(),
                            [S.bannerVisible]: n,
                            [S.communityInfoVisible]: !G && y || D && j
                        }),
                        onMouseDown: p,
                        onContextMenu: h,
                        onClick: f,
                        children: [(0, l.jsxs)("header", {
                            className: i(S.header, M, {
                                [S.themedHeaderMobile]: o.isMobile
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: i(S.headerContent, S.primaryInfo),
                                children: [(0, l.jsx)(E.default, {
                                    guild: R,
                                    isBannerVisible: n
                                }), (0, l.jsxs)(u.Text, {
                                    color: "none",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    className: S.name,
                                    children: [R.toString(), (0, l.jsx)(N, {
                                        guild: R
                                    })]
                                }), null != f && (0, l.jsx)(u.Clickable, {
                                    className: S.headerButton,
                                    "aria-controls": L,
                                    "aria-expanded": A,
                                    focusProps: {
                                        ringTarget: w,
                                        offset: 4
                                    },
                                    onClick: f,
                                    onContextMenu: h,
                                    "aria-label": g.default.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
                                        guildName: null !== (t = null == R ? void 0 : R.toString()) && void 0 !== t ? t : ""
                                    })
                                }), (0, l.jsx)("div", {
                                    className: S.headerChildren,
                                    children: O
                                })]
                            }), j && (0, l.jsx)(I, {
                                guild: R,
                                controller: s,
                                hasBanner: null != x,
                                hasSubheader: null != D && D
                            })]
                        }), null != x ? (0, l.jsx)(_, {
                            guild: R,
                            controller: s,
                            guildBanner: x,
                            animate: P
                        }) : null]
                    }), U && k() ? (0, l.jsx)("div", {
                        className: S.animatedBannerHoverLayer,
                        onMouseEnter: () => {
                            F(!0), clearTimeout(V.current)
                        },
                        onMouseLeave: () => F(!1),
                        style: {
                            height: v
                        }
                    }) : null]
                })
            })
        },
        522342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("450911"),
                o = n("677315"),
                u = n("827298"),
                d = n("290886"),
                c = n("393414"),
                f = n("660478"),
                h = n("223383"),
                C = n("620193"),
                E = n("708402"),
                m = n("49111"),
                p = n("724210"),
                g = n("133335"),
                S = n("782340");

            function _(e) {
                let {
                    guild: t,
                    selected: n
                } = e, _ = (0, s.useListItem)("home-tab-".concat(t.id)), {
                    showBadge: I
                } = o.GuildHomeBadgeExperiment.useExperiment({
                    location: "487e85_1"
                }, {
                    autoTrackExposure: !1
                });
                a.useEffect(() => {
                    o.GuildHomeBadgeExperiment.trackExposure({
                        location: "487e85_2"
                    })
                }, []);
                let N = (0, d.useCanSeeOnboardingHome)(t.id),
                    T = (0, i.useStateFromStores)([f.default], () => f.default.hasUnread(t.id, g.ReadStateTypes.GUILD_HOME) && I, [t.id, I]);
                return (0, l.jsx)(E.default, {
                    ..._,
                    renderIcon: e => N ? (0, l.jsx)(C.default, {
                        className: e
                    }) : (0, l.jsx)(h.default, {
                        className: e
                    }),
                    text: N ? S.default.Messages.SERVER_GUIDE : S.default.Messages.GUILD_HOME,
                    showUnread: T,
                    selected: n,
                    onMouseDown: function() {
                        r.default.preload(t.id, p.StaticChannelRoute.GUILD_HOME)
                    },
                    onClick: function() {
                        (0, u.ackGuildHome)(t.id), (0, c.transitionTo)(m.Routes.CHANNEL(t.id, p.StaticChannelRoute.GUILD_HOME))
                    }
                })
            }
        },
        738552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("393414"),
                s = n("922577"),
                i = n("708402"),
                r = n("49111"),
                o = n("724210"),
                u = n("782340");

            function d(e) {
                let {
                    guild: t,
                    selected: n
                } = e;
                return (0, l.jsx)(i.default, {
                    renderIcon: e => (0, l.jsx)(s.default, {
                        className: e,
                        width: 24,
                        height: 24
                    }),
                    text: u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
                    selected: n,
                    onClick: () => {
                        (0, a.transitionTo)(r.Routes.CHANNEL(t.id, o.StaticChannelRoute.MEMBER_APPLICATIONS))
                    }
                })
            }
        },
        630062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildNewMemberActionsProgressBar: function() {
                    return p
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("449918"),
                o = n("698882"),
                u = n("675305"),
                d = n("393414"),
                c = n("461380"),
                f = n("49111"),
                h = n("724210"),
                C = n("782340"),
                E = n("374407");

            function m(e, t) {
                return (0, l.jsx)(i.Text, {
                    variant: "text-xs/bold",
                    color: "text-normal",
                    children: e
                }, t)
            }
            let p = a.memo(function(e) {
                let {
                    guild: t
                } = e, n = (0, s.useStateFromStores)([o.default], () => o.default.getNewMemberActions(t.id), [t.id]), p = (0, s.useStateFromStores)([u.default], () => u.default.getCompletedActions(t.id)), g = a.useMemo(() => {
                    if (null == n || null == p) return 0;
                    let e = 0;
                    return n.forEach(t => {
                        null != p[t.channelId] && e++
                    }), e
                }, [p, n]), S = null == n ? 0 : n.length;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i.Clickable, {
                        className: E.progressBarContainer,
                        onClick: function() {
                            (0, d.transitionTo)(f.Routes.CHANNEL(t.id, h.StaticChannelRoute.GUILD_HOME))
                        },
                        children: [(0, l.jsxs)("div", {
                            className: E.progressBarText,
                            children: [(0, l.jsx)(i.Heading, {
                                variant: "heading-sm/bold",
                                children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
                            }), (0, l.jsxs)("div", {
                                className: E.rightContainer,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: E.rightText,
                                    children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
                                        numberHook: m,
                                        total: S.toString(),
                                        completed: g.toString()
                                    })
                                }), (0, l.jsx)(c.default, {
                                    className: E.arrow,
                                    width: 16,
                                    height: 16,
                                    direction: c.default.Directions.RIGHT
                                })]
                            })]
                        }), (0, l.jsx)(i.Progress, {
                            className: E.progressBar,
                            foregroundGradientColor: [(0, r.getColor)(f.Color.GREEN_300), (0, r.getColor)(f.Color.GREEN_230)],
                            percent: g / S * 100 + 3,
                            animate: !0
                        })]
                    }), (0, l.jsx)("div", {
                        role: "separator",
                        className: E.divider
                    })]
                })
            })
        },
        873774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("272030"),
                s = n("459736"),
                i = n("393414"),
                r = n("708402"),
                o = n("49111"),
                u = n("724210"),
                d = n("782340");

            function c(e) {
                let {
                    guild: t,
                    selected: c
                } = e;
                return (0, l.jsx)(r.default, {
                    renderIcon: e => (0, l.jsx)(s.default, {
                        className: e
                    }),
                    text: d.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                    selected: c,
                    onClick: () => {
                        (0, i.transitionTo)(o.Routes.CHANNEL(t.id, u.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                    },
                    onContextMenu: e => {
                        null != t && (0, a.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("867195").then(n.bind(n, "867195"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guild: t
                            })
                        })
                    }
                })
            }
        },
        677777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("65597"),
                r = n("151426"),
                o = n("95410"),
                u = n("77078"),
                d = n("272030"),
                c = n("206230"),
                f = n("716241"),
                h = n("183137"),
                C = n("551254"),
                E = n("991148"),
                m = n("907038"),
                p = n("10641"),
                g = n("393414"),
                S = n("923959"),
                _ = n("305961"),
                I = n("381546"),
                N = n("956089"),
                T = n("599110"),
                A = n("708402"),
                L = n("49111"),
                R = n("724210"),
                x = n("500307"),
                v = n("782340"),
                O = n("864080");

            function M(e) {
                let {
                    guildId: t,
                    selected: n,
                    handleClick: a
                } = e, d = (0, C.useIsEligibleForSubscriptionsInGuildShop)(t, "guild_shop_channel_row"), E = (0, i.default)([_.default], () => _.default.getGuild(t)), A = (null == E ? void 0 : E.hasFeature(L.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !0, R = "false" === o.default.get(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "false"), M = (0, i.default)([c.default], () => c.default.useReducedMotion);
                return (0, l.jsx)(u.ClickableContainer, {
                    tag: "div",
                    onClick: a,
                    className: s(O.previewChannelRow, {
                        [O.selected]: n,
                        [O.phantomPreview]: R
                    }),
                    "aria-label": v.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
                    children: (0, l.jsxs)("div", {
                        className: O.previewChannelRowContent,
                        children: [(0, l.jsx)(m.default, {
                            className: O.shopIcon
                        }), (0, l.jsx)("div", {
                            className: O.channelLabel,
                            children: v.default.Messages.GUILD_SHOP_CHANNEL_LABEL
                        }), (0, l.jsxs)("div", {
                            className: O.gifSection,
                            children: [M ? (0, l.jsx)(N.TextBadge, {
                                color: u.tokens.unsafe_rawColors.BRAND_260.css,
                                text: v.default.Messages.NEW,
                                className: O.newBadge
                            }) : (0, l.jsx)("img", {
                                src: (0, h.getAssetCDNUrl)("server_products/storefront/money.gif"),
                                className: O.money,
                                alt: ""
                            }), n && (0, l.jsx)(u.Clickable, {
                                className: O.closeButton,
                                onClick: e => {
                                    if (e.stopPropagation(), (0, p.markDismissibleContentAsDismissed)(r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW), T.default.track(L.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                                            ...(0, f.collectGuildAnalyticsMetadata)(t),
                                            action_taken: x.GuildShopPreviewClickActions.DISMISS_CHANNEL_ROW
                                        }), !d || !A) {
                                        var n;
                                        (0, g.replaceWith)(L.Routes.CHANNEL(t, null === (n = S.default.getDefaultChannel(t)) || void 0 === n ? void 0 : n.id))
                                    }
                                },
                                "aria-label": v.default.Messages.DISMISS,
                                children: (0, l.jsx)(I.default, {
                                    width: 16,
                                    height: 16
                                })
                            })]
                        })]
                    })
                })
            }

            function y(e) {
                let {
                    guild: t,
                    selected: a
                } = e, s = (0, E.useGuildShopPreviewVisible)(t, "guild_shop_channel_row"), i = () => {
                    o.default.set(x.GUILD_SHOP_CHANNEL_ROW_CLICK, "true"), (0, g.transitionTo)(L.Routes.CHANNEL(t.id, R.StaticChannelRoute.GUILD_SHOP))
                };
                return s ? (0, l.jsx)(M, {
                    guildId: t.id,
                    selected: a,
                    handleClick: i
                }) : (0, l.jsx)(A.default, {
                    renderIcon: e => (0, l.jsx)(m.default, {
                        width: 20,
                        height: 20,
                        className: e
                    }),
                    text: v.default.Messages.GUILD_SHOP_CHANNEL_LABEL,
                    selected: a,
                    onClick: i,
                    onContextMenu: e => {
                        null != t && (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("367289").then(n.bind(n, "367289"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guild: t
                            })
                        })
                    }
                })
            }
        },
        579095: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("42203"),
                r = n("316133"),
                o = n("449008"),
                u = n("120969"),
                d = n("782340"),
                c = n("15304"),
                f = a.memo(function(e) {
                    let {
                        channel: t,
                        selectedChannel: n,
                        selectedVoiceChannelId: a,
                        sortedThreadIds: f
                    } = e, h = (0, s.useStateFromStoresArray)([i.default], () => f.map(e => i.default.getChannel(e)).filter(o.isNotNullish), [f]), C = (0, s.useStateFromStores)([r.default], () => {
                        let e = h[h.length - 1];
                        if (null == e) return 0;
                        let t = r.default.getVoiceStates(e.guild_id)[e.id];
                        return null == t || 0 === t.length ? 0 : a !== e.id ? 40 : 32 * t.length + 8
                    });
                    return (0, l.jsx)("li", {
                        className: c.container,
                        children: (0, l.jsxs)("ul", {
                            role: "group",
                            "aria-label": d.default.Messages.THREAD_GROUP_A11Y_LABEL.format({
                                channelName: t.name
                            }),
                            children: [(0, l.jsx)("div", {
                                className: c.spineBorder,
                                style: {
                                    bottom: 24 + C
                                }
                            }), h.map((e, t) => (0, l.jsx)(u.default, {
                                thread: e,
                                isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
                                isSelectedVoice: a === e.id,
                                isLast: t === h.length - 1
                            }, e.id))]
                        })
                    })
                })
        },
        120969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("450911"),
                c = n("272030"),
                f = n("755624"),
                h = n("967241"),
                C = n("42203"),
                E = n("660478"),
                m = n("800762"),
                p = n("316133"),
                g = n("98292"),
                S = n("973539"),
                _ = n("137376"),
                I = n("522052"),
                N = n("884155"),
                T = n("49111"),
                A = n("648564"),
                L = n("782340"),
                R = n("708995"),
                x = n("404135"),
                v = n("15304");

            function O(e) {
                let {
                    style: t
                } = e;
                return (0, l.jsx)("svg", {
                    className: v.spine,
                    width: "12",
                    height: "11",
                    viewBox: "0 0 12 11",
                    fill: "none",
                    "aria-hidden": !0,
                    style: t,
                    children: (0, l.jsx)("path", {
                        d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
                        fill: "currentColor"
                    })
                })
            }
            var M = a.memo(function(e) {
                let {
                    thread: t,
                    isSelectedChannel: s,
                    isSelectedVoice: v,
                    isLast: M
                } = e, y = (0, o.useStateFromStores)([p.default], () => p.default.getVoiceStatesForChannel(t), [t]), D = (0, o.useStateFromStores)([m.default], () => m.default.hasVideo(t.id)), {
                    unread: b,
                    mentionCount: G
                } = (0, o.useStateFromStoresObject)([E.default], () => ({
                    unread: E.default.hasUnread(t.id),
                    mentionCount: E.default.getMentionCount(t.id)
                })), j = (0, o.useStateFromStores)([f.default], () => f.default.isMuted(t.id)), U = a.useCallback(e => {
                    (0, h.openThreadSidebarForViewing)(t, !e.shiftKey, A.OpenThreadAnalyticsLocations.CHANNEL_LIST)
                }, [t]), P = a.useCallback(() => {
                    d.default.preload(t.guild_id, t.id)
                }, [t.guild_id, t.id]), F = a.useCallback(e => {
                    let a = C.default.getChannel(t.id);
                    null != a && (0, c.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("994827").then(n.bind(n, "994827"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            channel: a
                        })
                    })
                }, [t.id]), B = null == y ? 0 : y.length, {
                    role: w,
                    ...V
                } = (0, r.useListItem)(t.id), H = a.useRef(null), k = G > 0 ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
                    channelName: t.name,
                    mentionCount: G
                }) : b ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({
                    channelName: t.name
                }) : L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
                    channelName: t.name
                });
                return (0, l.jsxs)("li", {
                    role: w,
                    className: i(R.containerDefault, {
                        [R.selected]: s
                    }),
                    children: [(0, l.jsx)(O, {}), M ? null : (0, l.jsx)(O, {
                        style: {
                            transform: "rotateX(180deg) translateY(-9px)"
                        }
                    }), (0, l.jsx)(u.FocusRing, {
                        focusTarget: H,
                        ringTarget: H,
                        offset: {
                            top: 2,
                            bottom: 2,
                            right: 4
                        },
                        children: (0, l.jsxs)("div", {
                            className: i(R.iconVisibility, x.wrapper, x.typeThread, {
                                [x.modeSelected]: s,
                                [x.modeMuted]: !s && j,
                                [x.modeUnread]: !j && !s && b
                            }),
                            onMouseDown: P,
                            onContextMenu: F,
                            children: [!b || j || s ? null : (0, l.jsx)("div", {
                                className: i(x.unread, x.unreadRelevant)
                            }), (0, l.jsx)(u.Clickable, {
                                ...V,
                                innerRef: H,
                                className: x.link,
                                onClick: U,
                                "aria-label": k,
                                focusProps: {
                                    enabled: !1
                                },
                                children: (0, l.jsxs)("div", {
                                    className: i(x.linkTop, x.threadMainContent),
                                    children: [(0, l.jsx)(g.default, {
                                        className: x.name,
                                        "aria-hidden": !0,
                                        children: t.name
                                    }), (0, l.jsxs)("div", {
                                        className: x.children,
                                        children: [B > 0 && t.userLimit > 0 ? (0, l.jsx)(_.default, {
                                            userCount: B,
                                            video: D,
                                            channel: t
                                        }) : null, (0, S.default)(G) ? (0, l.jsx)(I.default, {
                                            mentionsCount: G
                                        }) : null]
                                    })]
                                })
                            })]
                        })
                    }), (0, l.jsx)(N.default, {
                        channel: t,
                        collapsed: !v,
                        collapsedMax: 6,
                        voiceStates: y,
                        location: T.AnalyticsLocations.GUILD_CHANNEL_LIST
                    })]
                })
            })
        },
        522052: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("171210"),
                s = n("956089"),
                i = n("168986");

            function r(e) {
                let {
                    mentionsCount: t
                } = e;
                return (0, l.jsx)("div", {
                    className: i.mentionsBadge,
                    "aria-hidden": !0,
                    children: (0, l.jsx)(s.NumberBadge, {
                        count: t,
                        color: a.default.STATUS_DANGER
                    })
                })
            }
        },
        333896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("255397"),
                u = n("272030"),
                d = n("667771"),
                c = n("650912"),
                f = n("139375"),
                h = n("233322"),
                C = n("157186"),
                E = n("848848"),
                m = n("106346"),
                p = n("144491"),
                g = n("716214"),
                S = n("567469"),
                _ = n("998716"),
                I = n("834052"),
                N = n("819450"),
                T = n("886776"),
                A = n("870691"),
                L = n("42203"),
                R = n("305961"),
                x = n("88093"),
                v = n("957255"),
                O = n("660478"),
                M = n("282109"),
                y = n("800762"),
                D = n("98292"),
                b = n("109264"),
                G = n("404008"),
                j = n("783735"),
                U = n("39347"),
                P = n("41594"),
                F = n("884155"),
                B = n("49111"),
                w = n("695838"),
                V = n("782340"),
                H = n("708995"),
                k = n("68800");
            class Y extends j.default {
                getVoiceStatesCount() {
                    var e;
                    let {
                        voiceStates: t
                    } = this.props;
                    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
                }
                isFull() {
                    let {
                        channel: e
                    } = this.props;
                    return (0, G.isChannelFull)(e, y.default, R.default)
                }
                getModeClass() {
                    let {
                        position: e,
                        sortingPosition: t,
                        isUserOver: n
                    } = this.props;
                    if (n) return H.containerUserOver;
                    if (null != t) return e > t ? H.containerDragAfter : H.containerDragBefore;
                    return H.containerDefault
                }
                renderVoiceUsers() {
                    let {
                        channel: e,
                        collapsed: t,
                        tabIndex: n,
                        speakerVoiceStates: a,
                        numAudience: s
                    } = this.props;
                    return (0, l.jsx)(F.default, {
                        channel: e,
                        voiceStates: a,
                        collapsed: t,
                        tabIndex: n,
                        location: B.AnalyticsLocations.GUILD_CHANNEL_LIST,
                        numAudience: s
                    })
                }
                renderChannelInfo() {
                    return this.props.channelInfo
                }
                render() {
                    let {
                        channel: e,
                        selected: t,
                        connected: n,
                        locked: a,
                        connectChannelDropTarget: i,
                        connectChannelDragSource: o,
                        connectUserDropTarget: u,
                        connectDragPreview: d,
                        canReorderChannel: c,
                        canMoveMembers: h,
                        stageInstance: C,
                        isSubscriptionGated: E,
                        needSubscriptionToAccess: m,
                        unread: p,
                        mentionCount: g,
                        isFavoriteSuggestion: S
                    } = this.props, {
                        shouldShowGuildVerificationPopout: _
                    } = this.state, I = this.getVoiceStatesCount(), N = (0, l.jsxs)("li", {
                        className: s(this.getModeClass(), {
                            [H.disabled]: this.isDisabled()
                        }),
                        "data-dnd-name": e.name,
                        children: [(0, l.jsx)(r.Popout, {
                            position: "right",
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: _,
                            children: () => (0, l.jsx)(r.Tooltip, {
                                text: this.getTooltipText(),
                                children: i => {
                                    let {
                                        onClick: r,
                                        onContextMenu: o,
                                        ...u
                                    } = i;
                                    return (0, l.jsxs)(P.default, {
                                        className: H.iconVisibility,
                                        iconClassName: s({
                                            [k.iconLive]: null != C
                                        }),
                                        channel: e,
                                        selected: !S && t,
                                        connected: n,
                                        unread: n ? p : void 0,
                                        mentionCount: g,
                                        locked: a,
                                        onClick: () => {
                                            this.handleClick(), null == r || r()
                                        },
                                        onContextMenu: e => {
                                            this.handleContextMenu(e), null == o || o()
                                        },
                                        connectDragPreview: d,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, f.default)({
                                            channel: e,
                                            unread: p,
                                            mentionCount: g,
                                            userCount: I,
                                            isSubscriptionGated: E,
                                            needSubscriptionToAccess: m
                                        }),
                                        ...u,
                                        children: [S && this.renderAcceptSuggestionButton(), S && this.renderRemoveSuggestionButton(), !S && this.renderOpenChatButton(), !S && this.renderInviteButton(), !S && this.renderEditButton(), !S && this.renderChannelInfo()]
                                    })
                                }
                            })
                        }), this.renderVoiceUsers()]
                    });
                    return h && (N = u(N)), c && (N = i(o(N))), N
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shouldShowGuildVerificationPopout: !1
                    }, this.closeGuildVerificationPopout = () => {
                        this.setState({
                            shouldShowGuildVerificationPopout: !1
                        })
                    }, this.handleClick = () => {
                        let {
                            channel: e,
                            locked: t,
                            connected: n,
                            unverifiedAccount: l
                        } = this.props, a = e.getGuildId();
                        null != a && (0, C.shouldShowMembershipVerificationGate)(a) && (0, h.openMemberVerificationModal)(a), l && this.setState({
                            shouldShowGuildVerificationPopout: !0
                        }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, g.connectAndOpen)(e), !__OVERLAY__ && (0, p.transitionToChannel)(e.id)
                    }, this.handleClickChat = () => {
                        let {
                            channel: e,
                            locked: t
                        } = this.props;
                        !__OVERLAY__ && !t && (0, p.transitionToChannel)(e.id)
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props, a = R.default.getGuild(t.getGuildId());
                        null != a && (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("168003").then(n.bind(n, "168003"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }, this.renderPopout = () => {
                        let {
                            channel: e
                        } = this.props, {
                            shouldShowGuildVerificationPopout: t
                        } = this.state;
                        if (t) return (0, l.jsx)(m.default, {
                            type: m.GuildVerificationPopoutTypes.VOICE,
                            guildId: e.guild_id,
                            closePopout: this.closeGuildVerificationPopout
                        });
                        throw Error("VoiceChannel.renderPopout: There must always be something to render")
                    }, this.renderOpenChatButton = () => {
                        let {
                            channel: e,
                            locked: t,
                            forceShowButtons: n
                        } = this.props;
                        if (!t) return (0, l.jsx)(r.Tooltip, {
                            text: V.default.Messages.OPEN_CHAT,
                            children: t => {
                                let {
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: u,
                                    onBlur: d
                                } = t;
                                return (0, l.jsx)(r.Clickable, {
                                    className: s(H.iconItem, n ? H.alwaysShown : null),
                                    onClick: () => {
                                        o.default.updateChatOpen(e.id, !0), this.handleClickChat()
                                    },
                                    "aria-label": V.default.Messages.OPEN_CHAT,
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: u,
                                    onBlur: d,
                                    children: (0, l.jsx)(b.default, {
                                        width: 16,
                                        height: 16,
                                        className: H.actionIcon
                                    })
                                })
                            }
                        })
                    }, this.getTooltipText = () => {
                        let {
                            connected: e
                        } = this.props;
                        return this.isFull() && !e ? V.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
                    }, this.renderSubtitle = () => {
                        var e;
                        let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                        return null == t ? null : (0, l.jsx)(D.default, {
                            children: t
                        })
                    }
                }
            }
            let K = (0, d.makeChannelSortable)((0, c.makeVoiceUserDroppable)(Y));

            function W(e) {
                let {
                    guild: t,
                    channel: n,
                    disableSorting: a,
                    isFavoriteCategory: s,
                    collapsed: r,
                    voiceStates: o
                } = e, u = (0, i.useStateFromStoresObject)([O.default], () => ({
                    unread: O.default.hasUnread(n.id),
                    mentionCount: O.default.getMentionCount(n.id)
                })), d = (0, i.useStateFromStoresObject)([L.default, x.default, v.default], () => {
                    let e = L.default.getChannel(n.parent_id),
                        l = x.default.getCheck(n.guild_id);
                    return {
                        canManageChannel: null != t && v.default.can(B.Permissions.MANAGE_CHANNELS, n),
                        canReorderChannel: !0 !== a && (t.id === w.FAVORITES_RAW_GUILD_ID || (null != e ? v.default.can(B.Permissions.MANAGE_CHANNELS, e) : v.default.can(B.Permissions.MANAGE_CHANNELS, t))),
                        canMoveMembers: v.default.can(B.Permissions.MOVE_MEMBERS, n),
                        locked: !v.default.can(B.Permissions.CONNECT, n),
                        bypassLimit: v.default.can(B.Permissions.MOVE_MEMBERS, n),
                        unverifiedAccount: !l.canChat
                    }
                }), c = (0, i.useStateFromStores)([A.default], () => A.default.isCollapsed(n.parent_id)), f = (0, T.default)(n.id), h = (0, i.useStateFromStores)([I.default], () => I.default.getStageInstanceByChannel(n.id), [n.id]), C = (0, S.useStageParticipantsCount)(n.id, _.StageChannelParticipantNamedIndex.AUDIENCE), {
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: p
                } = (0, E.default)(n.id), g = (0, i.useStateFromStores)([M.default], () => M.default.isFavorite(t.id, n.id)), R = (0, N.getStageHasMedia)(n.id), y = (0, U.default)({
                    channel: n,
                    highlighted: !1,
                    isChannelSelected: !1,
                    isChannelCollapsed: r,
                    voiceStates: o,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: p,
                    enableConnectedUserLimit: R || n.userLimit > 0 && n.userLimit < B.MAX_STAGE_VOICE_USER_LIMIT
                }), D = e.connected && null == y;
                return (0, l.jsx)(K, {
                    categoryCollapsed: c,
                    connectAction: f,
                    numAudience: C,
                    stageInstance: h,
                    isSubscriptionGated: m,
                    needSubscriptionToAccess: p,
                    ...u,
                    ...d,
                    ...e,
                    isFavoriteSuggestion: s && !g,
                    forceShowButtons: D,
                    channelInfo: y
                })
            }
        },
        446380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("450911"),
                u = n("272030"),
                d = n("667771"),
                c = n("139375"),
                f = n("393414"),
                h = n("42203"),
                C = n("305961"),
                E = n("957255"),
                m = n("783735"),
                p = n("41594"),
                g = n("49111"),
                S = n("708995");

            function _(e, t) {
                let n = t.getGuildId();
                if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
                o.default.preload(n, t.id)
            }
            class I extends m.default {
                render() {
                    let {
                        channel: e,
                        selected: t,
                        connectChannelDropTarget: n,
                        connectChannelDragSource: a,
                        connectDragPreview: s,
                        canReorderChannel: r
                    } = this.props, o = (0, l.jsx)("li", {
                        className: i(this.getClassName(), {
                            [S.disabled]: this.isDisabled()
                        }),
                        "data-dnd-name": e.name,
                        children: (0, l.jsxs)(p.default, {
                            className: S.iconVisibility,
                            channel: e,
                            selected: t,
                            onClick: this.handleClick,
                            onMouseDown: _,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: r ? s : null,
                            "aria-label": (0, c.default)({
                                channel: e
                            }),
                            children: [this.renderInviteButton(), this.renderEditButton()]
                        })
                    });
                    return r ? n(a(o)) : o
                }
                constructor(...e) {
                    super(...e), this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props, a = C.default.getGuild(t.getGuildId());
                        null != a && (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("599943").then(n.bind(n, "599943"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }, this.handleClick = e => {
                        ! function(e) {
                            let t = e.getGuildId();
                            if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                            (0, f.transitionTo)(g.Routes.CHANNEL(t, e.id), {
                                state: {
                                    analyticsSource: {
                                        page: g.AnalyticsPages.GUILD_CHANNEL,
                                        section: g.AnalyticsSections.CHANNEL_LIST,
                                        object: g.AnalyticsObjects.CHANNEL
                                    }
                                }
                            })
                        }(e)
                    }
                }
            }
            let N = (0, d.makeChannelSortable)(I);
            var T = a.memo(function(e) {
                let {
                    channel: t,
                    guild: n,
                    disableSorting: a
                } = e, s = (0, r.useStateFromStoresObject)([h.default, E.default], () => {
                    let e = h.default.getChannel(t.parent_id);
                    return {
                        canManageChannel: E.default.can(g.Permissions.MANAGE_CHANNELS, t),
                        canReorderChannel: !0 !== a && null != e ? E.default.can(g.Permissions.MANAGE_CHANNELS, e) : E.default.can(g.Permissions.MANAGE_CHANNELS, n)
                    }
                });
                return (0, l.jsx)(N, {
                    ...s,
                    ...e
                })
            })
        },
        919429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("272030"),
                d = n("667771"),
                c = n("427953"),
                f = n("139375"),
                h = n("557661"),
                C = n("358269"),
                E = n("848848"),
                m = n("512395"),
                p = n("15684"),
                g = n("300322"),
                S = n("42203"),
                _ = n("305961"),
                I = n("957255"),
                N = n("660478"),
                T = n("282109"),
                A = n("697218"),
                L = n("79234"),
                R = n("783735"),
                x = n("39347"),
                v = n("41594"),
                O = n("49111"),
                M = n("695838"),
                y = n("708995");
            class D extends R.default {
                componentWillUnmount() {
                    this.resetThreadPopoutTimers()
                }
                resetThreadPopoutTimers() {
                    clearTimeout(this.enterTimer), clearTimeout(this.exitTimer)
                }
                renderChannelInfo() {
                    let {
                        channelInfo: e
                    } = this.props;
                    return null == e ? null : (0, l.jsx)("div", {
                        className: y.channelInfo,
                        children: e
                    })
                }
                render() {
                    let {
                        channel: e,
                        guild: t,
                        selected: n,
                        muted: a,
                        unread: i,
                        canHaveDot: o,
                        relevant: u,
                        hasActiveThreads: d,
                        hasMoreActiveThreads: c,
                        mentionCount: C,
                        connectChannelDropTarget: E,
                        connectChannelDragSource: m,
                        connectDragPreview: p,
                        canReorderChannel: g,
                        isSubscriptionGated: S,
                        isFavoriteSuggestion: _,
                        subtitle: I,
                        forceTopLevelThread: N
                    } = this.props, T = (0, h.getChannelSubtitle)(I), A = (0, l.jsx)("li", {
                        className: s(this.getClassName(), {
                            [y.disabled]: this.isDisabled(),
                            [y.selected]: n
                        }),
                        "data-dnd-name": e.name,
                        onMouseEnter: c ? this.handleMouseEnter : void 0,
                        onMouseLeave: c ? this.handleMouseLeave : void 0,
                        children: (0, l.jsx)(r.Popout, {
                            position: "right",
                            renderPopout: this.renderThreadsPopout,
                            onRequestClose: this.handleThreadsPopoutClose,
                            spacing: 0,
                            shouldShow: c && this.state.shouldShowThreadsPopout,
                            children: () => (0, l.jsxs)(v.default, {
                                className: y.iconVisibility,
                                channel: e,
                                guild: t,
                                selected: !_ && n,
                                muted: a,
                                unread: i,
                                canHaveDot: o,
                                relevant: u,
                                mentionCount: C,
                                hasActiveThreads: d,
                                subtitle: null == T ? void 0 : T.subtitle,
                                subtitleColor: null == T ? void 0 : T.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: g ? p : null,
                                isFavoriteSuggestion: _,
                                channelTypeOverride: N ? O.ChannelTypes.GUILD_TEXT : void 0,
                                "aria-label": (0, f.default)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: C,
                                    isSubscriptionGated: S
                                }),
                                children: [_ && this.renderAcceptSuggestionButton(), _ && this.renderRemoveSuggestionButton(), !_ && this.renderInviteButton(), !_ && this.renderEditButton(), !_ && this.renderChannelInfo()]
                            })
                        })
                    });
                    return g ? E(m(A)) : A
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shouldShowThreadsPopout: !1
                    }, this.enterTimer = 0, this.exitTimer = 0, this.handleMouseEnter = () => {
                        this.props.canShowThreadPreviewForUser && (this.resetThreadPopoutTimers(), this.enterTimer = setTimeout(() => {
                            this.setState({
                                shouldShowThreadsPopout: !0
                            })
                        }, 200))
                    }, this.handleMouseLeave = () => {
                        this.resetThreadPopoutTimers(), this.exitTimer = setTimeout(() => {
                            this.state.shouldShowThreadsPopout && this.setState({
                                shouldShowThreadsPopout: !1
                            })
                        }, 250)
                    }, this.handleThreadsPopoutClose = () => {
                        this.resetThreadPopoutTimers(), this.setState({
                            shouldShowThreadsPopout: !1
                        })
                    }, this.handleMouseDown = () => {
                        this.handleThreadsPopoutClose();
                        let {
                            channel: e,
                            highlighted: t
                        } = this.props, n = e.getGuildId();
                        o.default.preload(null != n ? n : O.ME, e.id, t)
                    }, this.renderThreadsPopout = e => (0, l.jsx)(L.default, {
                        ...e,
                        channel: this.props.channel
                    }), this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (t.type === O.ChannelTypes.GROUP_DM) {
                            (0, u.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("493015").then(n.bind(n, "493015"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channel: t,
                                    selected: !0
                                })
                            });
                            return
                        }
                        if (t.type === O.ChannelTypes.DM) {
                            let a = A.default.getUser(t.getRecipientId());
                            null != a && (0, u.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("130074").then(n.bind(n, "130074"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    user: a,
                                    channel: t,
                                    showModalItems: !1
                                })
                            });
                            return
                        }
                        let a = _.default.getGuild(t.getGuildId());
                        null != a && (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("327241").then(n.bind(n, "327241"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }
                }
            }
            let b = (0, d.makeChannelSortable)(D);

            function G(e) {
                let {
                    channel: t,
                    guild: n,
                    disableSorting: a,
                    isFavoriteCategory: s,
                    muted: r,
                    selected: o
                } = e, {
                    hasActiveThreads: u,
                    hasMoreActiveThreads: d
                } = (0, g.useHasActiveThreads)(t), f = (0, i.useStateFromStoresObject)([N.default], () => ({
                    ackMessageId: N.default.ackMessageId(t.id),
                    unread: N.default.hasUnread(t.id),
                    mentionCount: N.default.getMentionCount(t.id)
                })), h = (0, i.useStateFromStores)([N.default], () => N.default.hasNotableUnread(t.id)), _ = (0, i.useStateFromStoresObject)([S.default, I.default], () => {
                    let e = S.default.getChannel(t.parent_id);
                    return {
                        canManageChannel: I.default.can(O.Permissions.MANAGE_CHANNELS, t),
                        canReorderChannel: !0 !== a && (n.id === M.FAVORITES_RAW_GUILD_ID || (null != e ? I.default.can(O.Permissions.MANAGE_CHANNELS, e) : I.default.can(O.Permissions.MANAGE_CHANNELS, n)))
                    }
                }), L = (0, i.useStateFromStores)([T.default], () => T.default.isChannelRelevant(t)), R = (0, m.useChannelHighlightsEnabledForGuild)(t.guild_id), v = (0, C.useUnreadChannelHighlights)(t.id, f.ackMessageId).length > 0, y = !!R && !!f.unread && v, D = (0, i.useStateFromStores)([p.default], () => p.default.shouldIndicateNewChannel(n.id, t.id)), {
                    needSubscriptionToAccess: G,
                    isSubscriptionGated: j
                } = (0, E.default)(t.id), U = (0, i.useStateFromStores)([T.default], () => T.default.isFavorite(n.id, t.id)), P = (0, i.useStateFromStores)([A.default], () => {
                    let e = A.default.getCurrentUser();
                    return null != e && (!t.isNSFW() || e.nsfwAllowed)
                }, [t]), {
                    isActivitiesInTextEnabled: F
                } = c.ActivitiesInTextExperiment.useExperiment({
                    location: "webGuildTextChannel"
                }, {
                    autoTrackExposure: !1
                }), B = (0, x.default)({
                    channel: t,
                    highlighted: y,
                    isChannelCollapsed: !1,
                    isChannelSelected: o,
                    isSubscriptionGated: j,
                    needSubscriptionToAccess: G,
                    isNewChannel: D,
                    muted: r,
                    enableActivities: F
                });
                return (0, l.jsx)(b, {
                    ...f,
                    ..._,
                    ...e,
                    highlighted: y,
                    canHaveDot: h,
                    hasActiveThreads: u,
                    hasMoreActiveThreads: d,
                    relevant: L,
                    isSubscriptionGated: j,
                    needSubscriptionToAccess: G,
                    isNewChannel: D && e.canBeNewChannel,
                    isFavoriteSuggestion: s && !U,
                    canShowThreadPreviewForUser: P,
                    channelInfo: B
                })
            }
        },
        944843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                o = n("446674"),
                u = n("669491"),
                d = n("77078"),
                c = n("206230"),
                f = n("149362"),
                h = n("471671"),
                C = n("533403"),
                E = n("837899"),
                m = n("425190"),
                p = n("368121"),
                g = n("404008"),
                S = n("268760"),
                _ = n("782340"),
                I = n("326944");
            let N = {
                friction: 30,
                tension: 300
            };

            function T(e) {
                var t;
                let {
                    guildChannels: n,
                    jumpToVoiceChannels: s
                } = e, r = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, f.default)(n.id), c = a.useCallback(e => {
                    e.preventDefault(), e.stopPropagation(), s()
                }, [s]), h = null !== (t = null == r ? void 0 : r.getChannelRecords()) && void 0 !== t ? t : [], E = (0, g.computeSummarizedVoiceUsers)({
                    channels: h,
                    selectedChannelId: null,
                    selectedVoiceChannelId: null,
                    voiceStates: o
                });
                return (0, l.jsxs)(d.Clickable, {
                    className: i(I.bar),
                    onClick: c,
                    children: [(0, l.jsx)(p.default, {
                        className: I.voiceChannelsIcon,
                        width: 14,
                        height: 14,
                        color: u.default.unsafe_rawColors.GREEN_330.css
                    }), (0, l.jsx)(d.Text, {
                        variant: "text-xs/semibold",
                        color: "text-positive",
                        className: I.barText,
                        children: _.default.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({
                            count: E.length
                        })
                    }), (0, l.jsx)(C.default, {
                        guildId: n.id,
                        className: I.voiceChannelsUsers,
                        users: E.slice(0, 4),
                        renderMoreUsers: () => null,
                        max: 4,
                        size: d.AvatarSizes.SIZE_16
                    })]
                })
            }

            function A(e) {
                let {
                    position: t,
                    guildChannels: n,
                    guildChannelsVersion: s,
                    jumpToVoiceChannels: u,
                    jumpToChannel: f
                } = e, {
                    bottomBar: C,
                    topBar: p
                } = (0, o.useStateFromStoresObject)([S.default], () => S.default.getUnreadStateForGuildId(n.id)), g = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), A = (0, o.useStateFromStores)([h.default], () => h.default.isFocused()), {
                    mode: L,
                    mentionCount: R,
                    targetChannelId: x
                } = "bottom" === t ? C : p, v = L === S.UnreadBarMode.HIDDEN, O = (0, r.useSpring)({
                    to: {
                        transform: v ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
                    },
                    config: N,
                    immediate: g || !A
                }), M = a.useCallback(e => {
                    e.preventDefault(), e.stopPropagation(), null != x && f(x)
                }, [f, x]);
                return (0, l.jsx)("div", {
                    className: i(I.container, {
                        [I.top]: "top" === t,
                        [I.bottom]: "bottom" === t
                    }),
                    children: (0, l.jsx)(r.animated.div, {
                        className: I.containerPadding,
                        style: O,
                        "aria-hidden": v,
                        children: L === S.UnreadBarMode.HIDDEN ? (0, l.jsx)("div", {
                            className: i(I.bar, I.emptyBar)
                        }) : L === S.UnreadBarMode.UNREAD ? (0, l.jsxs)(d.Clickable, {
                            className: I.bar,
                            onClick: M,
                            children: ["bottom" === t ? (0, l.jsx)(E.default, {
                                className: I.unreadIcon,
                                height: 14,
                                width: 14
                            }) : (0, l.jsx)(m.default, {
                                className: I.unreadIcon,
                                height: 14,
                                width: 14
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-xs/semibold",
                                color: "interactive-normal",
                                className: I.barText,
                                children: _.default.Messages.NEW_UNREADS
                            })]
                        }) : L === S.UnreadBarMode.MENTIONS ? (0, l.jsx)(d.Clickable, {
                            className: i(I.bar, I.mentionsBar),
                            onClick: M,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/semibold",
                                color: "status-danger-text",
                                className: I.barText,
                                children: _.default.Messages.NEW_MENTIONS_COUNT.format({
                                    count: R
                                })
                            })
                        }) : L === S.UnreadBarMode.VOICE_CHANNELS ? (0, l.jsx)(T, {
                            jumpToVoiceChannels: u,
                            guildChannels: n,
                            guildChannelsVersion: s
                        }) : void 0
                    })
                })
            }
        },
        283848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("6587"),
                r = n("755624"),
                o = n("42203"),
                u = n("660478"),
                d = n("282109"),
                c = n("471671"),
                f = n("357007");

            function h(e) {
                let t = o.default.getChannel(e);
                if (null == t || null == t.getGuildId()) return !1;
                let n = t.isThread() ? r.default.isMuted(t.id) : d.default.isChannelMuted(t.getGuildId(), t.id);
                return !n && u.default.hasRelevantUnread(t)
            }

            function C(e) {
                let t = o.default.getChannel(e);
                if (null == t) return !1;
                let n = t.getGuildId();
                if (null == n) return !1;
                let l = d.default.isGuildCollapsed(n),
                    a = d.default.isChannelMuted(n, t.id);
                return (!l || !a) && u.default.getMentionCount(e) > 0
            }
            var E = a.forwardRef(function(e, t) {
                let {
                    guildId: n,
                    guildChannels: a,
                    guildChannelsVersion: r,
                    ...o
                } = e, u = (0, i.useFlattenedChannelIdListWithThreads)(n, a, r, !1, {
                    ignoreRecents: !0
                }), d = (0, s.useStateFromStores)([c.default], () => c.default.isFocused());
                return (0, l.jsx)(f.default, {
                    ref: t,
                    ...o,
                    isUnread: h,
                    isMentioned: C,
                    items: u,
                    animate: d
                })
            })
        },
        388930: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("974667"),
                s = n("446674"),
                i = n("151426"),
                r = n("77078"),
                o = n("272030"),
                u = n("10641"),
                d = n("534222"),
                c = n("660478"),
                f = n("282109"),
                h = n("943232"),
                C = n("956089"),
                E = n("708402"),
                m = n("133335"),
                p = n("782340"),
                g = n("404135");

            function S(e) {
                let {
                    selected: t,
                    showUnread: n,
                    onClick: s,
                    onContextMenu: i,
                    eventsMuted: r,
                    rowLabel: o,
                    mentionCount: u,
                    guildId: d
                } = e, c = (0, a.useListItem)("upcoming-events-".concat(d));
                return (0, l.jsx)(E.default, {
                    ...c,
                    renderIcon: e => (0, l.jsx)(h.default, {
                        className: e
                    }),
                    text: o,
                    selected: t,
                    onClick: s,
                    onContextMenu: i,
                    showUnread: n,
                    badge: !r && u > 0 ? (0, l.jsx)(C.NumberBadge, {
                        className: g.numberBadge,
                        disableColor: !0,
                        count: u
                    }) : null
                })
            }

            function _(e) {
                let {
                    guild: t,
                    selected: a
                } = e, {
                    hasUnread: h,
                    mentionCount: C
                } = (0, s.useStateFromStoresObject)([c.default], () => ({
                    hasUnread: c.default.hasUnread(t.id, m.ReadStateTypes.GUILD_EVENT),
                    mentionCount: c.default.getMentionCount(t.id, m.ReadStateTypes.GUILD_EVENT)
                }), [t.id]), E = (0, s.useStateFromStores)([f.default], () => f.default.isMuteScheduledEventsEnabled(t.id));
                async function g() {
                    await (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("659707").then(n.bind(n, "659707"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            guildId: t.id
                        })
                    }), (0, u.markDismissibleContentAsDismissed)(i.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)
                }
                let _ = (0, d.default)(t.id),
                    I = _.length > 0 ? p.default.Messages.GUILD_EVENTS_PLURAL.format({
                        number: _.length
                    }) : p.default.Messages.GUILD_EVENTS;
                return (0, l.jsx)(S, {
                    selected: a,
                    showUnread: h && !E,
                    onClick: g,
                    onContextMenu: e => {
                        (0, o.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("213528").then(n.bind(n, "213528"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guildId: t.id
                            })
                        })
                    },
                    eventsMuted: E,
                    rowLabel: I,
                    mentionCount: C,
                    guildId: t.id
                })
            }
        },
        37416: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return J
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("862337"),
                o = n("77078"),
                u = n("255397"),
                d = n("272030"),
                c = n("667771"),
                f = n("650912"),
                h = n("746164"),
                C = n("575136"),
                E = n("843624"),
                m = n("139375"),
                p = n("481699"),
                g = n("679653"),
                S = n("242740"),
                _ = n("557661"),
                I = n("261552"),
                N = n("233322"),
                T = n("157186"),
                A = n("848848"),
                L = n("534222"),
                R = n("106346"),
                x = n("144491"),
                v = n("12896"),
                O = n("845579"),
                M = n("42203"),
                y = n("305961"),
                D = n("88093"),
                b = n("957255"),
                G = n("660478"),
                j = n("282109"),
                U = n("800762"),
                P = n("98292"),
                F = n("109264"),
                B = n("404008"),
                w = n("783735"),
                V = n("39347"),
                H = n("41594"),
                k = n("744925"),
                Y = n("199334"),
                K = n("884155"),
                W = n("49111"),
                z = n("695838"),
                Z = n("782340"),
                Q = n("708995");
            class X extends w.default {
                componentWillUnmount() {
                    this.activitiesHideTimeout.stop()
                }
                getVoiceStatesCount() {
                    var e;
                    let {
                        voiceStates: t
                    } = this.props;
                    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
                }
                isFull() {
                    let {
                        channel: e
                    } = this.props;
                    return (0, B.isChannelFull)(e, U.default, y.default)
                }
                getModeClass() {
                    let {
                        position: e,
                        sortingPosition: t,
                        isUserOver: n
                    } = this.props;
                    if (n) return Q.containerUserOver;
                    if (null != t) return e > t ? Q.containerDragAfter : Q.containerDragBefore;
                    return Q.containerDefault
                }
                renderSubtitle() {
                    var e;
                    let {
                        channel: t,
                        connected: n
                    } = this.props, a = null === (e = (0, _.getChannelSubtitle)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle, s = null != t.status && t.status.length > 0;
                    return s || null == a ? s || n ? (0, l.jsx)(Y.default, {
                        onClick: this.handleVoiceStatusClick,
                        channel: t,
                        connected: n
                    }) : null : (0, l.jsx)(P.default, {
                        children: a
                    })
                }
                renderVoiceUsers() {
                    let {
                        channel: e,
                        voiceStates: t,
                        collapsed: n,
                        tabIndex: a
                    } = this.props;
                    return (0, l.jsx)(K.default, {
                        channel: e,
                        collapsed: n,
                        collapsedMax: 6,
                        voiceStates: t,
                        tabIndex: a,
                        location: W.AnalyticsLocations.GUILD_CHANNEL_LIST
                    })
                }
                renderChannelInfo() {
                    let {
                        channelInfo: e
                    } = this.props;
                    return null == e ? null : (0, l.jsx)("div", {
                        className: Q.channelInfo,
                        children: e
                    })
                }
                render() {
                    let {
                        channel: e,
                        selected: t,
                        connected: n,
                        unread: a,
                        mentionCount: i,
                        locked: r,
                        sorting: u,
                        isUserOver: d,
                        connectChannelDropTarget: c,
                        connectChannelDragSource: f,
                        connectUserDropTarget: h,
                        connectDragPreview: C,
                        canReorderChannel: E,
                        canMoveMembers: g,
                        showTutorial: S,
                        hasActiveEvent: _,
                        embeddedApps: I,
                        isSubscriptionGated: N,
                        isFavoriteSuggestion: T
                    } = this.props, {
                        shouldShowActivities: A,
                        shouldShowGuildVerificationPopout: L
                    } = this.state, R = this.getVoiceStatesCount(), x = (0, l.jsxs)("li", {
                        className: s(this.getModeClass(), {
                            [Q.disabled]: this.isDisabled()
                        }),
                        "data-dnd-name": e.name,
                        children: [(0, l.jsx)("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            children: (0, l.jsx)(o.Popout, {
                                position: "right",
                                renderPopout: this.renderPopout,
                                spacing: 0,
                                onRequestClose: this.closeGuildVerificationPopout,
                                shouldShow: A && !u && !d && !L || L,
                                children: () => (0, l.jsx)(o.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: o => {
                                        let {
                                            onClick: u,
                                            onContextMenu: d,
                                            ...c
                                        } = o;
                                        return (0, l.jsxs)(H.default, {
                                            className: Q.iconVisibility,
                                            iconClassName: s({
                                                [Q.iconLive]: _
                                            }),
                                            channel: e,
                                            selected: !T && t,
                                            connected: n,
                                            unread: n ? a : void 0,
                                            mentionCount: i,
                                            locked: r,
                                            subtitle: this.renderSubtitle(),
                                            onClick: () => {
                                                this.handleClick(), null == u || u()
                                            },
                                            onContextMenu: e => {
                                                this.handleContextMenu(e), null == d || d()
                                            },
                                            connectDragPreview: C,
                                            isFavoriteSuggestion: T,
                                            "aria-label": (0, m.default)({
                                                channel: e,
                                                unread: a,
                                                mentionCount: i,
                                                userCount: R,
                                                embeddedActivitiesCount: I.length,
                                                isSubscriptionGated: N
                                            }),
                                            "aria-describedby": (0, p.default)({
                                                channel: e,
                                                embeddedApps: I
                                            }),
                                            ...c,
                                            children: [T && this.renderAcceptSuggestionButton(), T && this.renderRemoveSuggestionButton(), !T && this.renderOpenChatButton(), !T && this.renderInviteButton(), !T && this.renderEditButton(), !T && this.renderChannelInfo()]
                                        })
                                    }
                                })
                            })
                        }), this.renderVoiceUsers()]
                    });
                    return g && (x = h(x)), E && (x = c(f(x))), S && (x = (0, l.jsx)(v.default, {
                        tutorialId: "voice-conversations",
                        position: "right",
                        offsetX: -20,
                        children: x
                    })), x
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shouldShowActivities: !1,
                        shouldShowGuildVerificationPopout: !1
                    }, this.activitiesHideTimeout = new r.Timeout, this.closeGuildVerificationPopout = () => {
                        this.setState({
                            shouldShowGuildVerificationPopout: !1
                        })
                    }, this.handleVoiceConnect = () => {
                        let {
                            locked: e,
                            connected: t,
                            channel: n,
                            unverifiedAccount: l,
                            needSubscriptionToAccess: a
                        } = this.props;
                        l && this.setState({
                            shouldShowGuildVerificationPopout: !0
                        }), S.default.handleVoiceConnect({
                            channel: n,
                            connected: t,
                            needSubscriptionToAccess: a,
                            locked: e
                        })
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props, a = y.default.getGuild(t.getGuildId());
                        null != a && (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("168003").then(n.bind(n, "168003"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }, this.handleMouseEnter = () => {
                        this.activitiesHideTimeout.stop(), this.setState({
                            shouldShowActivities: !0
                        })
                    }, this.handleMouseLeave = () => {
                        this.activitiesHideTimeout.start(100, () => this.setState({
                            shouldShowActivities: !1
                        }))
                    }, this.closePopout = () => {
                        this.activitiesHideTimeout.stop(), this.setState({
                            shouldShowActivities: !1
                        })
                    }, this.handleClick = () => {
                        let {
                            channel: e
                        } = this.props, t = e.getGuildId();
                        null != t && (0, T.shouldShowMembershipVerificationGate)(t) && (0, N.openMemberVerificationModal)(t), this.handleVoiceConnect()
                    }, this.handleVoiceStatusClick = e => {
                        let {
                            allowSetStatus: t,
                            connected: a,
                            channel: s
                        } = this.props;
                        t && a && (e.stopPropagation(), (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("843624").then(n.bind(n, "843624"));
                            return t => (0, l.jsx)(e, {
                                channel: s,
                                ...t
                            })
                        }, {
                            modalKey: E.VOICE_CHANNEL_STATUS_MODAL_KEY
                        }))
                    }, this.renderPopout = () => {
                        let {
                            channel: e,
                            voiceStates: t,
                            sorting: n,
                            isUserOver: a,
                            selected: s,
                            guild: i
                        } = this.props, {
                            shouldShowActivities: r,
                            shouldShowGuildVerificationPopout: o
                        } = this.state;
                        if (r && !n && !a && !o) {
                            let n = O.ActivityRestrictedGuilds.getSetting().includes(i.id);
                            return (0, l.jsx)(k.default, {
                                onAction: this.closePopout,
                                guild: i,
                                channel: e,
                                voiceStates: t,
                                isChannelSelected: s,
                                shouldShowSettingNudge: n
                            })
                        }
                        if (o) return (0, l.jsx)(R.default, {
                            type: R.GuildVerificationPopoutTypes.VOICE,
                            guildId: e.guild_id,
                            closePopout: this.closeGuildVerificationPopout
                        });
                        throw Error("VoiceChannel.renderPopout: There must always be something to render")
                    }, this.renderOpenChatButton = () => {
                        let {
                            channel: e,
                            locked: t,
                            forceShowButtons: n
                        } = this.props;
                        if (!t) return (0, l.jsx)(o.Tooltip, {
                            text: Z.default.Messages.OPEN_CHAT,
                            children: t => {
                                let {
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: r,
                                    onBlur: d
                                } = t;
                                return (0, l.jsx)(o.Clickable, {
                                    className: s(Q.iconItem, n ? Q.alwaysShown : null),
                                    onClick: () => {
                                        u.default.updateChatOpen(e.id, !0), (0, x.transitionToChannel)(e.id)
                                    },
                                    "aria-label": Z.default.Messages.OPEN_CHAT,
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: r,
                                    onBlur: d,
                                    children: (0, l.jsx)(F.default, {
                                        width: 16,
                                        height: 16,
                                        className: Q.actionIcon
                                    })
                                })
                            }
                        })
                    }, this.getTooltipText = () => {
                        let {
                            connected: e
                        } = this.props;
                        return this.isFull() && !e ? Z.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
                    }
                }
            }
            let q = (0, c.makeChannelSortable)((0, f.makeVoiceUserDroppable)(X));

            function J(e) {
                var t, n, a;
                let {
                    guild: s,
                    channel: r,
                    disableSorting: o,
                    isFavoriteCategory: u,
                    selected: d,
                    collapsed: c,
                    voiceStates: f
                } = e, E = (0, i.useStateFromStoresObject)([G.default], () => ({
                    unread: G.default.hasUnread(r.id),
                    mentionCount: G.default.getMentionCount(r.id)
                })), m = (0, i.useStateFromStoresObject)([M.default, D.default, b.default], () => {
                    let e = M.default.getChannel(r.parent_id),
                        t = D.default.getCheck(r.guild_id);
                    return {
                        canManageChannel: b.default.can(W.Permissions.MANAGE_CHANNELS, r),
                        canReorderChannel: !0 !== o && (s.id === z.FAVORITES_RAW_GUILD_ID || (null != e ? b.default.can(W.Permissions.MANAGE_CHANNELS, e) : b.default.can(W.Permissions.MANAGE_CHANNELS, s))),
                        canMoveMembers: b.default.can(W.Permissions.MOVE_MEMBERS, r),
                        locked: !b.default.can(W.Permissions.CONNECT, r),
                        bypassLimit: b.default.can(W.Permissions.MOVE_MEMBERS, r),
                        unverifiedAccount: !t.canChat
                    }
                }), p = (0, i.useStateFromStores)([U.default], () => U.default.hasVideo(r.id)), S = (0, C.default)(r), _ = (0, g.default)(r), N = (0, L.useActiveEvent)(r.id), {
                    isSubscriptionGated: T,
                    needSubscriptionToAccess: R
                } = (0, A.default)(r.id), x = (0, I.default)(), v = (0, i.useStateFromStores)([j.default], () => j.default.isFavorite(s.id, r.id)), O = e.connected || (null == x ? void 0 : x.channelId) === r.id, y = h.default.useExperiment({
                    guildId: null !== (a = s.id) && void 0 !== a ? a : "",
                    location: "c3f8c7_1"
                }, {
                    autoTrackExposure: !1
                }).enabled, P = (0, V.default)({
                    channel: r,
                    highlighted: !1,
                    isChannelSelected: d,
                    isChannelCollapsed: c,
                    voiceStates: f,
                    isSubscriptionGated: T,
                    needSubscriptionToAccess: R,
                    enableConnectedUserLimit: !0,
                    enableActivities: !0
                });
                return (0, l.jsx)(q, {
                    channelName: _,
                    embeddedApps: S,
                    embeddedActivityType: null === (n = S[0]) || void 0 === n ? void 0 : null === (t = n.embeddedActivity) || void 0 === t ? void 0 : t.type,
                    video: p,
                    hasActiveEvent: null != N,
                    isSubscriptionGated: T,
                    needSubscriptionToAccess: R,
                    ...E,
                    ...m,
                    ...e,
                    connected: O,
                    isFavoriteSuggestion: u && !v,
                    forceShowButtons: O && null == P,
                    channelInfo: P,
                    allowSetStatus: y
                })
            }
        },
        744925: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("463848"),
                d = n("750560"),
                c = n("575136"),
                f = n("871388"),
                h = n("152311"),
                C = n("429928"),
                E = n("532602"),
                m = n("419830"),
                p = n("769791"),
                g = n("271938"),
                S = n("305961"),
                _ = n("957255"),
                I = n("824563"),
                N = n("697218"),
                T = n("800762"),
                A = n("533403"),
                L = n("315102"),
                R = n("449008"),
                x = n("158998"),
                v = n("447235"),
                O = n("938177"),
                M = n("137376"),
                y = n("789482"),
                D = n("49111"),
                b = n("782340"),
                G = n("702816");

            function j(e) {
                var t;
                let {
                    guildId: n,
                    member: a,
                    className: s
                } = e, r = null != a.member ? (0, L.getGuildMemberAvatarURL)(a.member) : null;
                return (0, l.jsx)(o.Tooltip, {
                    text: a.nick,
                    position: "bottom",
                    children: e => (0, l.jsx)(o.Avatar, {
                        src: null != r ? r : a.user.getAvatarURL(n, 16),
                        size: o.AvatarSizes.SIZE_16,
                        className: i(G.partyAvatar, s),
                        "aria-label": null !== (t = a.nick) && void 0 !== t ? t : x.default.getName(a.user),
                        ...e
                    })
                })
            }

            function U(e) {
                let {
                    members: t,
                    guildId: n
                } = e;
                return (0, l.jsx)(A.default, {
                    className: G.partyMembers,
                    guildId: n,
                    users: t,
                    max: 6,
                    renderUser: (e, t, a) => (0, l.jsx)(j, {
                        guildId: n,
                        member: e,
                        className: t
                    }, a),
                    renderMoreUsers: (e, t, n) => (0, l.jsx)("div", {
                        className: i(G.morePartyMembers, t),
                        children: e
                    }, n)
                })
            }

            function P(e) {
                var t, s;
                let {
                    channel: i,
                    guild: u,
                    onAction: C,
                    voiceStates: E,
                    isChannelSelected: m,
                    shouldShowSettingNudge: p
                } = e;
                ! function(e, t) {
                    let n = a.useMemo(() => {
                        var n;
                        return null == t || t.length > 50 ? {} : {
                            [e.getGuildId()]: null !== (n = t.map(e => {
                                let {
                                    user: t
                                } = e;
                                return t.id
                            })) && void 0 !== n ? n : []
                        }
                    }, [e, t]);
                    (0, d.useSubscribeGuildMembers)(n)
                }(i, E);
                let g = (0, c.default)(i),
                    S = new Map;
                g.forEach(e => {
                    S.set(e.application.id, e)
                });
                let _ = null !== (t = null == E ? void 0 : E.filter(R.isNotNullish)) && void 0 !== t ? t : [],
                    N = e => t => [D.ActivityTypes.PLAYING, D.ActivityTypes.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === D.ActivityTypes.LISTENING,
                    T = (0, r.useStateFromStores)([I.default], () => {
                        let e = new Map(S);
                        return _.forEach(t => {
                            let n = I.default.findActivity(t.user.id, N(t));
                            if (null != n && (0, h.default)(n)) {
                                let t = null != n.application_id ? e.get(n.application_id) : null;
                                null != t && null != n.application_id && e.set(n.application_id, {
                                    ...t,
                                    embeddedActivity: {
                                        ...n,
                                        application_id: t.embeddedActivity.application_id,
                                        connections: t.embeddedActivity.connections,
                                        url: t.embeddedActivity.url,
                                        guildId: t.embeddedActivity.guildId,
                                        channelId: t.embeddedActivity.channelId
                                    }
                                })
                            }
                        }), e
                    }, [_, S], r.statesWillNeverBeEqual),
                    A = (0, r.useStateFromStores)([I.default], () => {
                        let e = {};
                        return _.forEach(t => {
                            let n = I.default.findActivity(t.user.id, N(t));
                            if (null != n && !(0, h.default)(n)) {
                                var l, a, s, i;
                                let r = "".concat(null !== (a = n.application_id) && void 0 !== a ? a : "", ":").concat(null !== (s = null === (l = n.party) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : t.user.id),
                                    o = null !== (i = e[r]) && void 0 !== i ? i : {
                                        members: [],
                                        activity: n
                                    };
                                o.members.push(t), !(0, f.default)(o.activity, D.ActivityFlags.JOIN) && (o.activity = n), e[r] = o
                            }
                        }), Object.values(e)
                    }, [_], r.statesWillNeverBeEqual),
                    L = Array.from(T.values()).map(e => ({
                        members: _,
                        activity: e.embeddedActivity
                    })),
                    x = [...L, ...A];
                return 0 === x.length ? null : (0, l.jsxs)(o.Scroller, {
                    className: G.container,
                    children: [(0, l.jsx)(B, {
                        channel: i,
                        isChannelSelected: m,
                        voiceStatesCount: null !== (s = null == E ? void 0 : E.length) && void 0 !== s ? s : 0
                    }), (0, l.jsx)("div", {
                        className: G.headerDivider
                    }), x.map((e, t) => {
                        let {
                            members: n,
                            activity: a
                        } = e, s = a.application_id, r = null != s ? T.get(s) : void 0;
                        return (0, l.jsx)(F, {
                            activity: a,
                            embeddedApp: r,
                            channel: i,
                            members: n,
                            onAction: C
                        }, t)
                    }), p && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: G.headerDivider
                        }), (0, l.jsx)("div", {
                            className: G.settingNudgeText,
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                tag: "span",
                                children: b.default.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format({
                                    onClick: () => {
                                        (0, o.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("349406").then(n.bind(n, "349406"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                guild: u
                                            })
                                        })
                                    }
                                })
                            })
                        })]
                    })]
                })
            }
            let F = e => {
                let {
                    channel: t,
                    activity: n,
                    members: a,
                    embeddedApp: s,
                    onAction: i
                } = e, o = null != s, d = o ? Array.from(s.embeddedActivity.connections.keys()) : [], c = (0, r.useStateFromStores)([N.default, g.default], () => {
                    var e, t, l, s;
                    return a.length <= 0 ? null : o ? null !== (t = null === (e = a.find(e => e.voiceState.sessionId === (null == n ? void 0 : n.session_id))) || void 0 === e ? void 0 : e.user) && void 0 !== t ? t : N.default.getUser(d[0]) : null !== (s = null === (l = a.find(e => e.user.id !== g.default.getId())) || void 0 === l ? void 0 : l.user) && void 0 !== s ? s : a[0].user
                });
                if (null == c) return null;
                let f = o || (0, C.default)(n);
                return (0, l.jsxs)("div", {
                    className: G.activity,
                    children: [(0, l.jsx)("div", {
                        className: G.channelActivityContainer,
                        children: f ? (0, l.jsx)(O.default, {
                            activity: n,
                            embeddedApp: s,
                            user: c,
                            channel: t,
                            sortedVoiceStates: a,
                            onOpenSpotifyTrack: p.openTrack,
                            onOpenSpotifyArtist: p.openArtist,
                            onOpenSpotifyAlbum: p.openAlbum
                        }) : (0, l.jsx)(u.default, {
                            type: u.UserActivityTypes.VOICE_CHANNEL,
                            activity: n,
                            user: c,
                            guildId: t.getGuildId(),
                            channelId: t.id,
                            renderHeaderAccessory: () => (0, l.jsx)(U, {
                                guildId: t.guild_id,
                                members: a
                            }),
                            isEmbedded: o
                        })
                    }), (0, l.jsx)("div", {
                        className: G.activityActionsContainer,
                        children: (0, l.jsx)(E.default, {
                            type: u.UserActivityTypes.VOICE_CHANNEL,
                            activity: n,
                            user: c,
                            guildId: t.getGuildId(),
                            channelId: t.id,
                            color: G.button,
                            onAction: i,
                            isEmbedded: o
                        })
                    })]
                })
            };

            function B(e) {
                let {
                    channel: t,
                    isChannelSelected: n,
                    voiceStatesCount: a
                } = e, s = (0, r.useStateFromStores)([_.default], () => !_.default.can(D.Permissions.CONNECT, t)), i = (0, r.useStateFromStores)([T.default], () => T.default.hasVideo(t.id)), u = (0, v.default)({
                    channel: t,
                    locked: s,
                    video: i,
                    selected: n
                }), d = (0, r.useStateFromStores)([S.default], () => S.default.getGuild(t.guild_id)), c = (0, m.getChannelIconComponent)(t, d);
                return null == c ? null : (0, l.jsxs)("div", {
                    className: G.popoutHeaderContainer,
                    children: [(0, l.jsxs)("div", {
                        className: G.channelNameContainer,
                        children: [(0, l.jsx)(c, {
                            className: G.channelIcon
                        }), (0, l.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-normal",
                            className: G.channelName,
                            children: t.name
                        })]
                    }), u ? (0, l.jsx)(M.default, {
                        userCount: a,
                        video: i,
                        channel: t
                    }) : (0, l.jsx)(y.default, {
                        userCount: a
                    })]
                })
            }
        },
        199334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("77078"),
                u = n("746164"),
                d = n("367376"),
                c = n("957255"),
                f = n("98292"),
                h = n("832132"),
                C = n("599110"),
                E = n("49111"),
                m = n("782340"),
                p = n("781691"),
                g = n("632215");

            function S(e) {
                let {
                    channel: t,
                    connected: n,
                    onClick: s
                } = e, S = u.default.useExperiment({
                    guildId: t.guild_id,
                    location: "118493_1"
                }, {
                    autoTrackExposure: !1
                }).enabled, _ = null != t.status && t.status.length > 0, I = (0, r.useStateFromStores)([c.default], () => c.default.can(E.Permissions.SET_VOICE_CHANNEL_STATUS, t));
                if (a.useEffect(() => {
                        n && null != t.guild_id && u.default.trackExposure({
                            guildId: t.guild_id,
                            location: "118493_2"
                        })
                    }, [n, t.guild_id]), a.useEffect(() => {
                        S && _ && C.default.track(E.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
                            guild_id: t.guild_id,
                            channel_id: t.id
                        })
                    }, [t.id, _, S, t.guild_id]), !S || null == t.guild_id) return null;
                let N = i(p.statusDiv, n && I ? p.hoverable : null);
                return _ ? (0, l.jsx)(o.Clickable, {
                    className: N,
                    onClick: I ? s : void 0,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: i(p.statusText, g.markup),
                        children: (0, l.jsx)(f.default, {
                            children: d.default.parseVoiceChannelStatus(t.status, !0, {
                                channelId: t.id
                            })
                        })
                    })
                }) : n && I ? (0, l.jsxs)(o.Clickable, {
                    className: N,
                    onClick: s,
                    children: [(0, l.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: p.statusText,
                        children: m.default.Messages.VOICE_CHANNEL_SET_STATUS
                    }), (0, l.jsx)(h.default, {
                        className: p.pencilIcon,
                        width: 14,
                        height: 14
                    })]
                }) : null
            }
        },
        42687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("437825"),
                r = n("595755");

            function o(e) {
                let {
                    total: t,
                    users: n,
                    videoLimit: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.wrapper,
                    children: [(0, l.jsxs)("span", {
                        className: s(r.users, {
                            [r.video]: a,
                            [r.extraLong]: n >= 100
                        }),
                        children: [a ? (0, l.jsx)(i.default, {
                            className: r.videoIcon
                        }) : null, n.toString().padStart(2, "0")]
                    }), (0, l.jsx)("span", {
                        className: s(r.total, {
                            [r.extraLong]: t >= 100
                        }),
                        children: t.toString().padStart(2, "0")
                    })]
                })
            }
        },
        789482: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("155207"),
                i = n("110671");

            function r(e) {
                let {
                    userCount: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: i.container,
                    children: [(0, l.jsx)(s.default, {
                        width: 12,
                        height: 12,
                        className: i.peopleIcon
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: i.userCountText,
                        children: t
                    })]
                })
            }
        },
        106346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildVerificationPopoutTypes: function() {
                    return a
                },
                default: function() {
                    return g
                }
            });
            var l, a, s = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("437822"),
                u = n("774146"),
                d = n("878720"),
                c = n("88093"),
                f = n("697218"),
                h = n("476765"),
                C = n("49111"),
                E = n("482931"),
                m = n("782340"),
                p = n("913447");
            (l = a || (a = {}))[l.VOICE = 0] = "VOICE";
            var g = e => {
                let {
                    type: t,
                    guildId: l,
                    closePopout: g
                } = e, S = (0, h.useUID)(), {
                    notClaimed: _,
                    notEmailVerified: I,
                    notPhoneVerified: N,
                    newAccount: T,
                    newMember: A
                } = (0, i.useStateFromStores)([c.default], () => c.default.getCheck(l), [l]), L = t === a.VOICE ? m.default.Messages.GUILD_VERIFICATION_VOICE_HEADER : null, R = null, x = null;
                return (t === a.VOICE && (_ ? (R = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_CLAIMED, x = m.default.Messages.CLAIM_ACCOUNT) : N ? (R = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_PHONE_VERIFIED, x = m.default.Messages.VERIFY_PHONE) : I ? (R = m.default.Messages.GUILD_VERIFICATION_VOICE_NOT_VERIFIED, x = m.default.Messages.RESEND_VERIFICATION_EMAIL) : A ? (R = m.default.Messages.GUILD_VERIFICATION_VOICE_MEMBER_AGE.format({
                    min: C.VerificationCriteria.MEMBER_AGE
                }), x = m.default.Messages.OKAY) : T && (R = m.default.Messages.GUILD_VERIFICATION_VOICE_ACCOUNT_AGE.format({
                    min: C.VerificationCriteria.ACCOUNT_AGE
                }), x = m.default.Messages.OKAY)), null == L || null == R) ? null : (0, s.jsxs)(r.Dialog, {
                    className: p.container,
                    "aria-labelledby": S,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        className: p.image,
                        src: n("748301")
                    }), (0, s.jsxs)("div", {
                        className: p.content,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: S,
                            children: L
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: R
                        }), (0, s.jsxs)("div", {
                            className: p.buttonContainer,
                            children: [null != x ? (0, s.jsx)(r.Button, {
                                onClick: () => {
                                    _ ? u.openClaimAccountModal() : N ? (0, r.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("601745").then(n.bind(n, "601745"));
                                        return t => (0, s.jsx)(e, {
                                            reason: d.ChangePhoneReason.GUILD_PHONE_REQUIRED,
                                            ...t
                                        })
                                    }, {
                                        modalKey: E.PHONE_VERIFICATION_MODAL_KEY
                                    }) : I && (o.default.verifyResend(), (0, r.openModal)(e => {
                                        var t;
                                        return (0, s.jsx)(r.ConfirmModal, {
                                            header: m.default.Messages.VERIFICATION_EMAIL_TITLE,
                                            confirmText: m.default.Messages.OKAY,
                                            confirmButtonColor: r.Button.Colors.BRAND,
                                            ...e,
                                            children: (0, s.jsx)(r.Text, {
                                                variant: "text-md/normal",
                                                children: m.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                                    email: null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.email
                                                })
                                            })
                                        })
                                    })), g()
                                },
                                className: p.primaryButton,
                                children: x
                            }) : null, _ || N || I ? (0, s.jsx)(r.Button, {
                                onClick: g,
                                look: r.Button.Looks.BLANK,
                                className: p.cancel,
                                children: m.default.Messages.NEVERMIND
                            }) : null]
                        })]
                    })]
                })
            }
        },
        509223: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                SpecialGuildsNodeIds: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.PENDING_JOIN_REQUESTS_FOLDER = 1] = "PENDING_JOIN_REQUESTS_FOLDER"
        },
        533669: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("65597"),
                s = n("162771");

            function i(e) {
                let t = (0, a.default)([s.default], () => s.default.getGuildId());
                l.useLayoutEffect(() => {
                    null != t && e(t, !1)
                }, [t, e])
            }
        },
        957833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsHomeSelected: function() {
                    return i
                }
            });
            var l = n("803182"),
                a = n("393027"),
                s = n("49111");

            function i() {
                let e = (0, a.default)(e => e.guildId),
                    {
                        pathname: t
                    } = (0, l.useLocation)(),
                    n = t.startsWith(s.Routes.GUILD_DISCOVERY),
                    i = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION("")),
                    r = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
                return null == e && !(n || i || r)
            }
        },
        21841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("884691"),
                a = n("298386"),
                s = n("446674"),
                i = n("191225"),
                r = n("534222"),
                o = n("170183"),
                u = n("130563"),
                d = n("373469"),
                c = n("271938"),
                f = n("42203"),
                h = n("305961"),
                C = n("957255"),
                E = n("945956"),
                m = n("282109"),
                p = n("800762"),
                g = n("49111");

            function S(e) {
                var t, n;
                let S = (0, s.useStateFromStores)([m.default], () => m.default.isMuted(e)),
                    _ = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(e)),
                    I = (null === (t = (0, o.default)(e)) || void 0 === t ? void 0 : t.length) > 0,
                    N = (0, r.useGuildActiveEvent)(e),
                    T = (null === (n = (0, u.default)()) || void 0 === n ? void 0 : n.guild_id) === e,
                    A = (0, s.useStateFromStores)([c.default], () => c.default.getId()),
                    {
                        selectedVoiceGuildId: L,
                        selectedVoiceChannelId: R
                    } = (0, s.useStateFromStoresObject)([E.default], () => ({
                        selectedVoiceGuildId: E.default.getGuildId(),
                        selectedVoiceChannelId: E.default.getChannelId()
                    })),
                    x = L === e,
                    v = (0, s.useStateFromStores)([d.default], () => !!x && null != d.default.getActiveStreamForUser(A, e)),
                    O = (0, s.useStateFromStores)([p.default], () => p.default.getVoiceStateVersion()),
                    M = (0, s.useStateFromStoresArray)([p.default, f.default, C.default], () => {
                        let t = p.default.getVoiceStates(e),
                            n = [];
                        for (let e in t) {
                            let l = f.default.getBasicChannel(t[e].channelId);
                            null != l && l.type !== a.ChannelTypes.GUILD_STAGE_VOICE && (null == _ ? void 0 : _.afkChannelId) !== l.id && C.default.canBasicChannel(g.BasicPermissions.VIEW_CHANNEL, l) && n.push(t[e])
                        }
                        return n
                    }, [e, O]),
                    y = M.length > 0,
                    D = null != M.find(e => e.selfVideo),
                    b = (0, s.useStateFromStores)([d.default], () => d.default.getAllApplicationStreams().some(t => t.guildId === e)),
                    G = (0, s.useStateFromStores)([p.default], () => x && null != R && p.default.hasVideo(R), [x, R]),
                    j = (0, s.useStateFromStores)([i.default], () => i.default.getEmbeddedActivitiesForGuild(e)),
                    U = (0, s.useStateFromStores)([i.default], () => Array.from(i.default.getSelfEmbeddedActivities().values()).some(t => {
                        let {
                            guildId: n
                        } = t;
                        return n === e
                    })),
                    P = j.length > 0,
                    F = !1,
                    B = !1,
                    w = !1,
                    V = !1,
                    H = !1,
                    k = !1;
                return x ? (F = !0, B = (null == N ? void 0 : N.channel_id) === R, w = T, V = G, H = v, k = U) : !S && (F = y, B = null != N, w = I, V = D, H = b, k = P), l.useMemo(() => ({
                    audio: F,
                    video: V,
                    screenshare: H,
                    liveStage: w,
                    activeEvent: B,
                    activity: k,
                    isCurrentUserConnected: x || T
                }), [F, V, H, w, B, k, x, T])
            }
        },
        512812: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("982527"),
                s = n("305961");

            function i() {
                return (0, l.useStateFromStoresArray)([a.default, s.default], () => {
                    let e = a.default.computeGuildIds(),
                        t = s.default.getGuilds();
                    return e.filter(e => null == t[e])
                })
            }
        },
        543785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("301165"),
                i = n("974667"),
                r = n("446674"),
                o = n("77078"),
                u = n("272030"),
                d = n("191145"),
                c = n("843962"),
                f = n("679653"),
                h = n("373469"),
                C = n("945956"),
                E = n("660478"),
                m = n("18494"),
                p = n("697218"),
                g = n("471671"),
                S = n("15738"),
                _ = n("956089"),
                I = n("108189"),
                N = n("829562"),
                T = n("247539"),
                A = n("255991"),
                L = n("49111"),
                R = n("71576");
            let x = {
                friction: 28,
                tension: 600
            };

            function v(e) {
                switch (e) {
                    case "height":
                    case "opacity":
                        return {
                            duration: 150, ...x
                        };
                    case "scale":
                        return {
                            ...x
                        };
                    default:
                        throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
                }
            }
            class O extends a.PureComponent {
                componentWillEnter(e) {
                    let {
                        controller: t
                    } = this.state;
                    e(), t.update({
                        immediate: !g.default.isFocused(),
                        height: 1,
                        opacity: 1,
                        scale: 1,
                        config: v
                    }).start().then(() => this.setState({
                        animating: !1
                    }))
                }
                componentWillAppear(e) {
                    let {
                        controller: t
                    } = this.state;
                    t.update({
                        immediate: !0,
                        scale: 1,
                        opacity: 1,
                        height: 1,
                        config: v
                    }).start().then(e)
                }
                componentWillLeave(e) {
                    let {
                        controller: t
                    } = this.state;
                    this.setState({
                        animating: !0
                    }, () => t.update({
                        immediate: !g.default.isFocused(),
                        height: 0,
                        opacity: 0,
                        scale: 0,
                        config: v
                    }).start().then(e))
                }
                componentWillUnmount() {
                    this.state.controller.dispose()
                }
                getAnimatedStyle() {
                    let {
                        controller: e
                    } = this.state, {
                        opacity: t,
                        height: n,
                        scale: l
                    } = e.springs;
                    return {
                        opacity: t,
                        height: n.to([0, 1], [0, 56]),
                        transform: l.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
                    }
                }
                getChannelIcon() {
                    let {
                        channel: e
                    } = this.props, t = e.type === L.ChannelTypes.DM ? p.default.getUser(e.getRecipientId()) : null;
                    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, c.getChannelIconURL)(e)
                }
                render() {
                    let {
                        channel: e,
                        channelName: t,
                        selected: n,
                        badge: r,
                        audio: u,
                        video: d,
                        stream: c,
                        isCurrentUserInThisDMCall: f,
                        unread: h
                    } = this.props, {
                        hovered: C,
                        animating: E
                    } = this.state;
                    return (0, l.jsx)(s.animated.div, {
                        style: this.getAnimatedStyle(),
                        children: (0, T.default)((0, l.jsxs)(a.Fragment, {
                            children: [(0, l.jsx)(S.default, {
                                hovered: !E && C,
                                selected: !E && n,
                                unread: !E && h,
                                className: R.pill
                            }), (0, l.jsx)(N.default, {
                                text: null != t ? t : "",
                                selected: n,
                                children: (0, l.jsx)(o.BlobMask, {
                                    selected: n || C,
                                    lowerBadge: r > 0 ? (0, A.renderMentionBadge)(r) : null,
                                    upperBadge: (0, A.renderMediaBadge)({
                                        audio: u,
                                        video: d,
                                        screenshare: c,
                                        isCurrentUserConnected: f
                                    }),
                                    lowerBadgeWidth: (0, _.getBadgeWidthForValue)(r),
                                    children: (0, l.jsx)(i.ListNavigatorItem, {
                                        id: e.id,
                                        children: a => (0, l.jsx)(I.default, {
                                            to: L.Routes.CHANNEL(L.ME, e.id),
                                            onMouseEnter: () => this.setState({
                                                hovered: !0
                                            }),
                                            onMouseLeave: () => this.setState({
                                                hovered: !1
                                            }),
                                            icon: this.getChannelIcon(),
                                            selected: n || C,
                                            ariaLabel: null != t ? t : "",
                                            onContextMenu: this.handleContextMenu,
                                            ...a
                                        })
                                    })
                                })
                            })]
                        }))
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hovered: !1,
                        animating: !0,
                        controller: new s.Controller({
                            scale: 0,
                            height: 0,
                            opacity: 0,
                            config: v
                        })
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props, a = t.type === L.ChannelTypes.DM ? p.default.getUser(t.getRecipientId()) : null;
                        null != a ? (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("130074").then(n.bind(n, "130074"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                user: a
                            })
                        }) : (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("493015").then(n.bind(n, "493015"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                selected: !1
                            })
                        })
                    }
                }
            }
            O.defaultProps = {
                badge: 0,
                audio: !1,
                video: !1,
                isCurrentUserInThisDMCall: !1
            };
            var M = a.forwardRef(function(e, t) {
                let n = e.channel.id,
                    a = (0, f.default)(e.channel),
                    s = (0, r.useStateFromStores)([C.default], () => C.default.getChannelId(), []),
                    i = (0, r.useStateFromStores)([d.default], () => null != s ? d.default.getMode(s) : L.ChannelModes.VOICE, [s]),
                    o = (0, r.useStateFromStores)([h.default], () => h.default.getAllApplicationStreamsForChannel(n).length > 0),
                    u = (0, r.useStateFromStores)([m.default], () => m.default.getChannelId(), []),
                    c = (0, r.useStateFromStores)([E.default], () => E.default.getMentionCount(n), [n]),
                    p = s === n,
                    g = !1,
                    S = !1;
                return p && (g = i === L.ChannelModes.VOICE, S = i === L.ChannelModes.VIDEO), (0, l.jsx)(O, {
                    ...e,
                    ref: t,
                    channelName: a,
                    unread: c > 0,
                    selected: u === n,
                    badge: c,
                    audio: g,
                    video: S,
                    stream: o,
                    isCurrentUserInThisDMCall: p
                })
            })
        },
        363887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("301165"),
                o = n("509043"),
                u = n("446674"),
                d = n("769846"),
                c = n("77078"),
                f = n("208127"),
                h = n("305961"),
                C = n("282109"),
                E = n("109024"),
                m = n("346955"),
                p = n("956089"),
                g = n("159885"),
                S = n("255991"),
                _ = n("49111"),
                I = n("782340"),
                N = n("54965");
            let T = (0, g.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
                A = (0, g.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE);

            function L(e) {
                let {
                    guildId: t,
                    animate: n
                } = e, a = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(t), [t]), s = (0, u.useStateFromStores)([C.default], () => C.default.isMuted(t));
                return null == a ? (0, l.jsx)("div", {
                    className: N.guildIconUnavailable,
                    children: "!"
                }) : (0, l.jsx)(E.default, {
                    guild: a,
                    animate: n,
                    size: E.default.Sizes.SMOL,
                    className: i(N.guildIcon, s && (0, f.isReadStateStaffExperimentEnabled)() && N.guildIconMuted),
                    tabIndex: -1
                })
            }

            function R(e) {
                let t, n, {
                        folderNode: s,
                        hovered: i,
                        expanded: u
                    } = e,
                    {
                        color: d,
                        children: c
                    } = s,
                    f = null != d ? d : _.DEFAULT_FOLDER_COLOR,
                    h = c.map(e => e.id),
                    [C, E] = a.useState(!1),
                    [p, g] = a.useState(u),
                    S = u ? 0 : -A,
                    I = (0, r.useSpring)({
                        transform: "translate3d(0, ".concat(S, "px, 0)"),
                        config: {
                            duration: T
                        },
                        onStart() {
                            E(!0), g(u)
                        },
                        onRest() {
                            E(!1), g(u)
                        }
                    }),
                    R = C ? I : void 0;
                return (C || p) && (t = (0, l.jsx)(r.animated.div, {
                    style: R,
                    className: N.expandedFolderIconWrapper,
                    children: (0, l.jsx)(m.default, {
                        style: {
                            color: (0, o.int2hex)(f)
                        }
                    })
                })), (C || !p) && (n = (0, l.jsx)(r.animated.div, {
                    style: R,
                    className: N.closedFolderIconWrapper,
                    children: h.slice(0, 4).map(e => (0, l.jsx)(L, {
                        guildId: e,
                        animate: i
                    }, e))
                })), (0, l.jsxs)("div", {
                    "aria-hidden": !0,
                    style: u ? void 0 : {
                        backgroundColor: (0, o.int2rgba)(f, .4)
                    },
                    className: N.folderIconWrapper,
                    children: [t, n]
                })
            }

            function x(e) {
                let {
                    folderNode: t,
                    forceCircular: n,
                    expanded: s,
                    sorting: r,
                    mediaState: o,
                    mentionCount: u = 0,
                    tooltipName: d,
                    folderGroupId: f,
                    folderIconContent: h,
                    onClick: C,
                    onContextMenu: E,
                    onHoverChange: m,
                    onKeyDown: g,
                    treeItemProps: {
                        onFocus: _,
                        ...T
                    }
                } = e, [A, L] = a.useState(!1), x = a.useCallback(() => {
                    r || L(!0), null == m || m(!0)
                }, [r, m]), v = a.useCallback(() => {
                    r || L(!1), null == m || m(!1)
                }, [r, m]), O = s || null == o ? null : (0, S.renderMediaBadge)(o), M = !s && u > 0 ? (0, S.renderMentionBadge)(u) : null;
                return (0, l.jsx)(c.BlobMask, {
                    selected: !n,
                    upperBadge: O,
                    lowerBadge: M,
                    lowerBadgeWidth: (0, p.getBadgeWidthForValue)(u),
                    children: (0, l.jsx)(c.Clickable, {
                        className: i(N.folder, {
                            [N.hover]: A
                        }),
                        onClick: C,
                        onContextMenu: E,
                        onMouseEnter: x,
                        onMouseLeave: v,
                        onKeyDown: g,
                        onFocus: _,
                        "aria-label": I.default.Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL.format({
                            folderName: d,
                            mentions: u
                        }),
                        "aria-expanded": s,
                        "aria-owns": f,
                        focusProps: {
                            enabled: !1
                        },
                        ...T,
                        role: "treeitem",
                        children: null != h ? (0, l.jsx)("div", {
                            className: N.expandedFolderIconWrapper,
                            children: h
                        }) : (0, l.jsx)(R, {
                            folderNode: t,
                            hovered: A,
                            expanded: s
                        })
                    })
                })
            }
        },
        945317: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("301165"),
                r = n("669491"),
                o = n("77078"),
                u = n("109024"),
                d = n("492950"),
                c = n("54965");

            function f(e) {
                let {
                    guild: t,
                    show: n,
                    active: a,
                    onAnimationStart: f,
                    onAnimationRest: h
                } = e, C = {}, E = {};
                C.transform = "translate3d(10px, 10px, 0) scale3d(3, 3, 1)", E.transform = "translate3d(0, 0, 0) scale3d(1, 1, 1)";
                let m = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_500).hex(),
                    p = (0, o.useToken)(r.default.unsafe_rawColors.PRIMARY_630).hex();
                a && null == t.icon && (C.backgroundColor = m, E.backgroundColor = p);
                let g = (0, i.useTransition)(n, {
                    from: C,
                    enter: E,
                    leave: C,
                    config: {
                        duration: 100
                    },
                    onStart: f,
                    onRest: h
                });
                return (0, l.jsx)(l.Fragment, {
                    children: g((e, n, a) => n && (0, l.jsx)("div", {
                        className: s(c.folder, c.hover),
                        children: (0, l.jsx)("div", {
                            className: c.folderIconWrapper,
                            children: (0, l.jsxs)("div", {
                                className: c.closedFolderIconWrapper,
                                children: [(0, l.jsx)(i.animated.div, {
                                    className: c.folderIconPreview,
                                    style: e,
                                    children: (0, l.jsx)(u.default, {
                                        guild: t,
                                        size: u.default.Sizes.SMOL,
                                        className: c.guildIcon
                                    })
                                }), (0, l.jsx)(d.default, {
                                    className: c.miniPlaceholder
                                })]
                            })
                        })
                    }, a.key))
                })
            }
        },
        472942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                FolderEndDropTarget: function() {
                    return N
                },
                PlaceholderDropTarget: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("476042"),
                d = n("851387"),
                c = n("599110"),
                f = n("674644"),
                h = n("829562"),
                C = n("49111"),
                E = n("782340"),
                m = n("191072");

            function p(e) {
                let t = a.useRef(null),
                    n = e.map(e => e[0]);
                return a.useLayoutEffect(() => {
                    let n = requestAnimationFrame(() => {
                        let n = t.current;
                        if (null != n)
                            for (let [t, l] of e) t ? n.classList.add(l) : n.classList.remove(l)
                    });
                    return () => cancelAnimationFrame(n)
                }, n), t
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return o(t.type !== f.GuildsNodeType.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
                    accept: e,
                    canDrop: e => e.nodeId !== t.id && (!l || e.type !== f.GuildsNodeType.FOLDER || t.type !== f.GuildsNodeType.FOLDER) && (e.type !== f.GuildsNodeType.FOLDER || null == t.parentId) && !0,
                    drop(e) {
                        let {
                            nodeId: a
                        } = e;
                        l && t.type !== f.GuildsNodeType.FOLDER && c.default.track(C.AnalyticEvents.GUILD_FOLDER_CREATED), d.default.moveById(a, t.id, n, l)
                    },
                    collect: e => ({
                        canDrop: e.canDrop(),
                        isOver: e.isOver()
                    })
                }
            }

            function S(e) {
                let {
                    name: t,
                    targetNode: n,
                    combine: s,
                    below: r
                } = e, o = a.useMemo(() => g([f.GuildsNodeType.GUILD, f.GuildsNodeType.FOLDER], n, r, s), [n, r, s]), [{
                    canDrop: d,
                    isOver: c
                }, h] = (0, u.useDrop)(o), C = p([
                    [d, m.autoPointerEvents],
                    [c, m.dragOver]
                ]);
                return (0, l.jsx)("div", {
                    ref: e => {
                        C.current = e, h(e)
                    },
                    "data-dnd-name": E.default.Messages.DND_DROP_ABOVE.format({
                        itemName: t
                    }),
                    className: i(m.target)
                })
            }

            function _(e) {
                let {
                    name: t,
                    targetNode: n,
                    onDragOverChanged: s
                } = e, [{
                    canDrop: r,
                    isOver: o
                }, d] = (0, u.useDrop)(() => g([f.GuildsNodeType.GUILD], n, !0, !0));
                a.useEffect(() => {
                    null == s || s(o)
                }, [s, o]);
                let c = p([
                    [r, m.autoPointerEvents],
                    [o, m.dragOver]
                ]);
                return (0, l.jsx)(h.default, {
                    text: t,
                    shouldShow: o,
                    forceOpen: o,
                    disableWrapper: !0,
                    tooltipClass: m.centerTargetTooltip,
                    children: (0, l.jsx)("div", {
                        ref: e => {
                            c.current = e, d(e)
                        },
                        "data-dnd-name": E.default.Messages.DND_DROP_COMBINE.format({
                            itemName: t
                        }),
                        className: i(m.centerTarget, {})
                    })
                })
            }
            var I = a.memo(function(e) {
                let {
                    name: t,
                    targetNode: n,
                    noCombine: a = !1,
                    below: s = !1,
                    onDragOverChanged: i
                } = e, r = !a && null == n.parentId;
                return (0, l.jsxs)("div", {
                    className: m.wrapper,
                    "aria-hidden": !0,
                    children: [(0, l.jsx)(S, {
                        name: t,
                        targetNode: n,
                        below: s
                    }), r ? (0, l.jsx)(_, {
                        name: t,
                        targetNode: n,
                        onDragOverChanged: i
                    }) : null]
                })
            });

            function N(e) {
                let {
                    name: t,
                    targetNode: n
                } = e, [{
                    canDrop: a,
                    isOver: s
                }, r] = (0, u.useDrop)(() => g([f.GuildsNodeType.GUILD], n, !0, !0)), o = p([
                    [s, m.wrapperOver]
                ]), d = p([
                    [s, m.dragOver],
                    [a, m.autoPointerEvents]
                ]);
                return (0, l.jsx)("div", {
                    ref: o,
                    className: i(m.folderEndWrapper),
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", {
                        className: m.folderTarget,
                        children: (0, l.jsx)("div", {
                            ref: e => {
                                d.current = e, r(e)
                            },
                            "aria-label": "At end of ".concat(t),
                            className: i(m.target)
                        })
                    })
                })
            }

            function T(e) {
                let {
                    children: t
                } = e, [, n] = (0, u.useDrop)({
                    accept: []
                });
                return (0, l.jsx)("div", {
                    ref: n,
                    children: t
                })
            }
        },
        696336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return es
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("817736"),
                d = n("90915"),
                c = n("974667"),
                f = n("118810"),
                h = n("446674"),
                C = n("233736"),
                E = n("862337"),
                m = n("77078"),
                p = n("406189"),
                g = n("302437"),
                S = n("812204"),
                _ = n("685665"),
                I = n("191145"),
                N = n("15131"),
                T = n("205550"),
                A = n("267567"),
                L = n("393027"),
                R = n("162805"),
                x = n("26989"),
                v = n("305961"),
                O = n("677099"),
                M = n("697218"),
                y = n("773336"),
                D = n("439932"),
                b = n("674644"),
                G = n("533669"),
                j = n("270382"),
                U = n("777778"),
                P = n("648647"),
                F = n("982360"),
                B = n("628570"),
                w = n("597680"),
                V = n("822485"),
                H = n("798573"),
                k = n("795853"),
                Y = n("357762"),
                K = n("504957"),
                W = n("199218"),
                z = n("624531"),
                Z = n("785343"),
                Q = n("22567"),
                X = n("49111"),
                q = n("782340"),
                J = n("5457");
            let $ = 56,
                ee = (0, y.isWindows)() ? 4 : (0, y.isMac)() ? 0 : 12,
                et = $ - 16,
                en = ee + 10;
            class el {
                setGuildsTree(e) {
                    this.guildsTree = e
                }
                constructor(e, t, n) {
                    this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new E.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
                        let n = this.scrollerRef.current;
                        if (null == n) return;
                        if (null == e && window.location.pathname.startsWith(X.Routes.GUILD_DISCOVERY) || e === X.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === X.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
                            let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
                            (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
                                node: e,
                                animate: t,
                                padding: 8
                            }): n.scrollTo({
                                to: 0,
                                animate: t
                            });
                            return
                        }
                        if (null == e) {
                            n.scrollTo({
                                to: 0,
                                animate: t
                            });
                            return
                        }
                        let l = this.nodeRefs[e];
                        for (; null == l;) {
                            let t = this.guildsTree.getNode(e);
                            if ((null == t ? void 0 : t.parentId) == null) break;
                            l = this.nodeRefs[t.parentId]
                        }
                        null != l && (0, f.isElement)(l) ? n.scrollIntoViewNode({
                            node: l,
                            animate: t,
                            padding: 8
                        }) : n.scrollTo({
                            to: 0,
                            animate: t
                        })
                    }, this.handleJumpToGuild = e => {
                        this.scrollToGuild(e, !0)
                    }, this.scrollTo = e => {
                        var t;
                        null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e)
                    }, this.isItemVisible = (e, t, n) => {
                        let l = this.scrollerRef.current;
                        if (null == l) return !1;
                        let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
                        if (a < 0) return !1;
                        let s = $ * a + en;
                        !t && (s += et);
                        let i = l.getScrollerState();
                        return !t && !!(s >= i.scrollTop) || !!t && !!(s + $ <= i.scrollTop + i.offsetHeight) || !1
                    }, this.handleScroll = () => {
                        !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
                    }, this._handleScroll = o.debounce(() => {
                        let e = this.scrollerRef.current;
                        if (null == e) return;
                        let {
                            scrollTop: t
                        } = e.getScrollerState();
                        p.default.updateGuildListScrollTo(t), this.onScroll()
                    }, 200), this.setNodeRef = (e, t) => {
                        this.nodeRefs[e] = t
                    }
                }
            }

            function ea(e) {
                let {
                    disableAppDownload: t = y.isPlatformEmbedded,
                    isOverlay: n = !1,
                    className: s,
                    themeOverride: r
                } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
                    let e = O.default.getGuildsTree();
                    return [e, e.version]
                }), u = (0, h.useStateFromStores)([A.default], () => A.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), C = (0, h.useStateFromStoresArray)([v.default, x.default], () => Object.keys(v.default.getGuilds()).filter(e => x.default.isCurrentUserGuest(e))), p = f.concat(C), g = (0, h.useStateFromStores)([M.default], () => {
                    var e;
                    return null === (e = M.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
                }), $ = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), [ee, et] = a.useState(!1), en = a.useCallback(() => et(!0), []), ea = a.useCallback(() => et(!1), []), es = a.useRef(!1), [ei] = a.useState(() => new E.Timeout), er = a.useRef(null), eo = a.useRef(null), {
                    ref: eu,
                    ...ed
                } = (0, c.useListContainerProps)(), ec = (0, m.useFocusJumpSection)(), [ef, eh] = a.useState(!1), [eC] = a.useState(() => new el(o, eh, () => {
                    var e, t;
                    null === (e = er.current) || void 0 === e || e.calculateState(), null === (t = eo.current) || void 0 === t || t.calculateState()
                })), {
                    AnalyticsLocationProvider: eE
                } = (0, _.default)(S.default.GUILDS_LIST), {
                    pathname: em
                } = (0, d.useLocation)(), ep = em.startsWith(X.Routes.GUILD_DISCOVERY), eg = em.startsWith(X.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
                a.useLayoutEffect(() => {
                    if (!es.current) {
                        if (0 !== o.size) {
                            if (ep) eC.scrollToGuild(null, !1);
                            else {
                                let {
                                    scrollTop: e
                                } = R.default.getGuildListDimensions();
                                eC.scrollTo({
                                    to: e,
                                    animate: !1
                                })
                            }
                            return es.current = !0, () => ei.stop()
                        }
                    }
                }, []), a.useEffect(() => {
                    if (eC.setGuildsTree(o), es.current || 0 === o.size) return;
                    let e = L.default.getState().guildId;
                    eC.scrollToGuild(e, !1);
                    let t = null,
                        n = L.default.subscribe(e => {
                            let {
                                guildId: n
                            } = e;
                            n !== t && (t = n, eC.scrollToGuild(t, !1))
                        });
                    return n
                }, [o, eC]), (0, G.default)(eC.scrollToGuild);
                let eS = (0, T.useEligibleForGameRecommendations)(),
                    e_ = o.getRoots(),
                    eI = (0, N.default)();
                return (0, l.jsx)(eE, {
                    children: (0, l.jsx)("nav", {
                        className: i(J.wrapper, s, (0, D.getThemeClass)(r), {
                            [J.hidden]: $
                        }),
                        "aria-label": q.default.Messages.GUILDS_BAR_A11Y_LABEL,
                        children: (0, l.jsxs)("ul", {
                            ref: eu,
                            ...ed,
                            ...ec,
                            role: "tree",
                            className: J.tree,
                            children: [(0, l.jsx)(j.default, {
                                ref: er,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorTop,
                                barClassName: J.unreadMentionsBar
                            }), (0, l.jsxs)(m.AdvancedScrollerNone, {
                                className: i({
                                    [J.scroller]: !0,
                                    [J.scrolling]: ef
                                }),
                                ref: eC.scrollerRef,
                                onScroll: eC.handleScroll,
                                children: [(0, l.jsx)(H.HomeButton, {}), eI ? (0, l.jsx)(w.default, {}) : null, (0, l.jsx)(F.default, {}), (0, l.jsx)(k.default, {
                                    isOnHubVerificationRoute: eg
                                }), (0, l.jsx)(U.default, {}), p.map(e => (0, l.jsx)(Q.default, {
                                    guildId: e
                                }, e)), g ? (0, l.jsx)(Z.default, {}) : null, !n && eS ? (0, l.jsx)(V.default, {
                                    ref: eC.guildDiscoveryRef,
                                    selected: ep,
                                    tooltip: q.default.Messages.GUILD_DISCOVERY_TOOLTIP
                                }) : null, (0, l.jsx)(Y.default, {}), (0, l.jsx)("div", {
                                    "aria-label": q.default.Messages.SERVERS,
                                    children: e_.map(function e(t) {
                                        switch (t.type) {
                                            case b.GuildsNodeType.FOLDER:
                                                return (0, l.jsx)(W.default, {
                                                    folderNode: t,
                                                    setNodeRef: eC.setNodeRef,
                                                    draggable: !0,
                                                    sorting: ee,
                                                    onDragStart: en,
                                                    onDragEnd: ea,
                                                    renderChildNode: e
                                                }, t.id);
                                            case b.GuildsNodeType.GUILD:
                                                return (0, l.jsx)(z.default, {
                                                    guildNode: t,
                                                    setRef: eC.setNodeRef,
                                                    draggable: !0,
                                                    sorting: ee,
                                                    onDragStart: en,
                                                    onDragEnd: ea
                                                }, t.id);
                                            default:
                                                return null
                                        }
                                    })
                                }), n ? null : (0, l.jsx)(B.default, {
                                    disableTooltip: f.length > 0,
                                    lastTargetNode: e_[e_.length - 1]
                                }), n || eS ? null : (0, l.jsx)(V.default, {
                                    ref: eC.guildDiscoveryRef,
                                    selected: ep
                                }), (0, l.jsx)(K.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(Y.default, {}), (0, l.jsx)(P.default, {})]
                                })]
                            }), (0, l.jsx)(j.default, {
                                reverse: !0,
                                ref: eo,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorBottom,
                                barClassName: J.unreadMentionsBar
                            })]
                        })
                    })
                })
            }
            var es = a.memo(function(e) {
                let t = (0, g.default)("guildsnav");
                return (0, l.jsx)(c.ListNavigatorProvider, {
                    navigator: t,
                    children: (0, l.jsx)(ea, {
                        ...e
                    })
                })
            }, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))
        },
        492950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("587974"),
                r = n("467573");

            function o(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)(i.default, {
                    mask: i.default.Masks.SQUIRCLE,
                    className: s(t, r.placeholderMask),
                    width: 48,
                    height: 48,
                    style: {
                        display: "block"
                    },
                    children: (0, l.jsx)("div", {
                        className: r.dragInner
                    })
                })
            }
        },
        270382: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("208127"),
                r = n("383173"),
                o = n("952451"),
                u = n("336376"),
                d = n("677099"),
                c = n("402088"),
                f = n("471671"),
                h = n("357007"),
                C = n("117362"),
                E = n("49111"),
                m = n("782340");
            let p = "app-download-item",
                g = "add-server-item";

            function S(e) {
                var t;
                if (!(0, i.isReadStateStaffExperimentEnabled)()) return !1;
                let n = o.default.getMutableGuildStates();
                return e !== p && e !== g && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.unread)
            }

            function _(e) {
                var t;
                let n = o.default.getMutableGuildStates();
                return e === E.ViewHistoryKeys.SERVER_DISCOVERY_BADGE && !c.default.hasViewed(E.ViewHistoryKeys.SERVER_DISCOVERY_BADGE) || e !== p && e !== g && (null === (t = n[null != e ? e : "null"]) || void 0 === t ? void 0 : t.mentionCount) > 0
            }
            let I = (0, C.cachedFunction)((e, t, n) => ["null", ...t, ...e, g, E.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE, p]);
            var N = a.forwardRef(function(e, t) {
                let n = (0, s.useStateFromStoresArray)([d.default, u.default, o.default], () => I(d.default.getGuildFolders(), u.default.getUnreadPrivateChannelIds(), o.default.getStoreChangeSentinel())),
                    a = (0, s.useStateFromStores)([f.default], () => f.default.isFocused()),
                    i = (0, s.useStateFromStores)([r.default], () => r.default.getExpandedFolders());
                return (0, l.jsx)(h.default, {
                    ...e,
                    ref: t,
                    items: n,
                    isUnread: S,
                    textUnread: m.default.Messages.NEW,
                    textMention: m.default.Messages.NEW,
                    isMentioned: _,
                    animate: a,
                    expandedFolders: i
                })
            })
        },
        777778: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("266491"),
                r = n("274870"),
                o = n("42203"),
                u = n("336376"),
                d = n("945956"),
                c = n("543785");

            function f() {
                (0, s.useStateFromStores)([o.default], () => o.default.getPrivateChannelsVersion());
                let e = o.default.getMutablePrivateChannels(),
                    t = (0, s.useStateFromStoresArray)([u.default], () => u.default.getUnreadPrivateChannelIds()),
                    {
                        selectedVoiceGuildId: n,
                        selectedVoiceChannelId: f
                    } = (0, s.useStateFromStoresObject)([d.default], () => ({
                        selectedVoiceGuildId: d.default.getGuildId(),
                        selectedVoiceChannelId: d.default.getChannelId()
                    })),
                    h = t.map(t => {
                        let n = e[t];
                        return null == n || n.id === f || n.isBroadcastChannel() ? null : (0, l.jsx)(c.default, {
                            channel: n
                        }, n.id)
                    }),
                    C = null == n && null != f ? e[f] : null,
                    E = (0, r.useIsBroadcastingGDM)(null == C ? void 0 : C.id);
                return null != C && !E && h.unshift((0, l.jsx)(c.default, {
                    channel: C
                }, C.id)), (0, l.jsx)(i.default, {
                    component: a.Fragment,
                    children: h
                })
            }
        },
        648647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("195812"),
                i = n("966270"),
                r = n("782340");
            let o = "DOWNLOAD_APPS";

            function u() {
                let e = (0, a.useModalsStore)(e => (0, a.hasModalOpenSelector)(e, o));
                return (0, l.jsx)(i.default, {
                    id: "app-download-button",
                    onClick: () => {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("649486").then(n.bind(n, "649486"));
                            return t => (0, l.jsx)(e, {
                                source: "Guilds",
                                ...t
                            })
                        }, {
                            modalKey: o
                        })
                    },
                    selected: e,
                    tooltip: r.default.Messages.DOWNLOAD_APPS,
                    icon: s.default
                })
            }
        },
        982360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("987317"),
                r = n("9759"),
                o = n("42203"),
                u = n("660478"),
                d = n("18494"),
                c = n("697218"),
                f = n("476765"),
                h = n("774223"),
                C = n("158998"),
                E = n("966270"),
                m = n("255991"),
                p = n("782340");

            function g() {
                var e;
                let t = (0, f.useUID)(),
                    [n, g] = (0, a.useStateFromStoresArray)([d.default, o.default], () => [o.default.getChannel(d.default.getVoiceChannelId()), d.default.getCurrentlySelectedChannelId(null)]),
                    S = (0, a.useStateFromStores)([u.default], () => null != n ? u.default.getMentionCount(n.id) : 0),
                    _ = (0, a.useStateFromStores)([c.default], () => c.default.getUser(null == n ? void 0 : n.ownerId)),
                    I = null !== (e = C.default.getGlobalName(_)) && void 0 !== e ? e : C.default.getUserTag(_),
                    {
                        canViewBroadcasts: N
                    } = r.default.useExperiment({
                        location: "broadcast_button_guilds_bar_no_track"
                    }, {
                        autoTrackExposure: !1
                    }),
                    T = null == n ? void 0 : n.isBroadcastChannel(),
                    A = T && g === (null == n ? void 0 : n.id);
                return T && N ? (0, l.jsx)(E.default, {
                    id: t,
                    onClick: () => {
                        T && null != n && i.default.selectPrivateChannel(n.id)
                    },
                    icon: h.default,
                    tooltip: null != I ? p.default.Messages.BROADCASTING_CHANNEL_NAME.format({
                        name: I
                    }) : void 0,
                    selected: A,
                    upperBadge: (0, l.jsx)(s.Avatar, {
                        size: s.AvatarSizes.SIZE_16,
                        src: null == _ ? void 0 : _.getAvatarURL(null, 16),
                        "aria-label": I
                    }),
                    lowerBadge: S > 0 ? (0, m.renderMentionBadge)(S) : null
                }) : null
            }
        },
        966270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("77078"),
                u = n("15738"),
                d = n("829562"),
                c = n("247539"),
                f = n("652494");
            let h = a.forwardRef(function(e, t) {
                let {
                    id: n,
                    onClick: s,
                    onContextMenu: h,
                    icon: C,
                    selected: E,
                    tooltip: m,
                    upperBadge: p,
                    lowerBadge: g,
                    lowerBadgeWidth: S,
                    showPill: _ = !0,
                    className: I,
                    "aria-label": N,
                    children: T,
                    onMouseEnter: A,
                    onMouseLeave: L,
                    onMouseDown: R
                } = e, x = (0, r.useTreeItem)(n), [v, O] = a.useState(!1);
                return (0, c.default)((0, l.jsxs)(l.Fragment, {
                    children: [_ ? (0, l.jsx)("div", {
                        className: f.pill,
                        children: (0, l.jsx)(u.default, {
                            hovered: v,
                            selected: E
                        })
                    }) : null, (0, l.jsx)(d.default, {
                        text: m,
                        selected: E,
                        children: (0, l.jsx)(o.BlobMask, {
                            className: f.circleButtonMask,
                            selected: E || v,
                            upperBadge: p,
                            lowerBadge: g,
                            lowerBadgeWidth: S,
                            children: (0, l.jsx)(o.Clickable, {
                                innerRef: t,
                                onMouseEnter: () => {
                                    null == A || A(), O(!0)
                                },
                                onMouseLeave: () => {
                                    null == L || L(), O(!1)
                                },
                                onMouseDown: R,
                                className: i(f.circleIconButton, I, {
                                    [f.selected]: E || v
                                }),
                                onClick: s,
                                "aria-label": "string" == typeof m && null == N ? m : N,
                                onContextMenu: h,
                                focusProps: {
                                    enabled: !1
                                },
                                ...x,
                                children: null != C && (0, l.jsx)(C, {
                                    className: f.circleIcon
                                })
                            })
                        })
                    }), T]
                }))
            });
            var C = h
        },
        628570: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("272030"),
                o = n("685665"),
                u = n("616265"),
                d = n("141254"),
                c = n("116616"),
                f = n("12896"),
                h = n("305961"),
                C = n("697218"),
                E = n("151185"),
                m = n("472942"),
                p = n("966270"),
                g = n("49111"),
                S = n("243338"),
                _ = n("782340"),
                I = n("823660");
            let N = {
                origin: {
                    x: -16,
                    y: 0
                },
                targetWidth: 48,
                targetHeight: 48,
                offset: {
                    x: 0,
                    y: 0
                }
            };

            function T(e) {
                (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("946661").then(n.bind(n, "946661"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }

            function A(e) {
                let {
                    disableTooltip: t,
                    lastTargetNode: n
                } = e, r = (0, s.useStateFromStores)([h.default], () => h.default.getGuilds()), A = a.useMemo(() => Object.values(r), [r]), L = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), R = a.useMemo(() => A.some(e => e.isOwner(L)), [A, L]), x = (0, i.useModalsStore)(e => (0, i.hasModalOpenSelector)(e, S.CREATE_GUILD_MODAL_KEY)), {
                    analyticsLocations: v
                } = (0, o.default)(), O = (0, l.jsx)(p.default, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, d.isAtGuildCapAndNonPremium)() ? (0, c.default)({
                            analyticsSource: {
                                page: g.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL
                            },
                            analyticsLocation: {
                                page: g.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL,
                                section: g.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
                            },
                            analyticsLocations: v
                        }) : u.default.openCreateGuildModal({
                            location: "Guild List"
                        })
                    },
                    selected: x,
                    onContextMenu: T,
                    tooltip: _.default.Messages.ADD_A_SERVER,
                    icon: E.default
                });
                return t ? O : (0, l.jsx)("div", {
                    className: I.tutorialContainer,
                    children: (0, l.jsxs)(f.default, {
                        tutorialId: R ? "create-more-servers" : "create-first-server",
                        inlineSpecs: N,
                        position: "right",
                        children: [O, null != n && (0, l.jsx)(m.default, {
                            name: _.default.Messages.DND_END_OF_LIST,
                            targetNode: n,
                            below: !0,
                            noCombine: !0
                        })]
                    })
                })
            }
        },
        597680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("272030"),
                d = n("191225"),
                c = n("379881"),
                f = n("690874"),
                h = n("102135"),
                C = n("393027"),
                E = n("373469"),
                m = n("42203"),
                p = n("18494"),
                g = n("800762"),
                S = n("290581"),
                _ = n("15738"),
                I = n("108189"),
                N = n("698652"),
                T = n("247539"),
                A = n("255991"),
                L = n("49111"),
                R = n("782340"),
                x = n("818789");
            let v = {
                analyticsSource: {
                    page: L.AnalyticsPages.GUILD_CHANNEL,
                    section: L.AnalyticsSections.CHANNEL_LIST,
                    object: L.AnalyticsObjects.CHANNEL
                }
            };

            function O() {
                let e = (0, s.useTreeItem)("favorites"),
                    [t, O] = a.useState(!1),
                    {
                        favoriteServerMuted: M,
                        favoriteChannels: y
                    } = (0, i.useStateFromStoresObject)([c.default], () => ({
                        favoriteChannels: c.default.getFavoriteChannels(),
                        favoriteServerMuted: c.default.favoriteServerMuted
                    })),
                    D = (0, i.useStateFromStores)([p.default], () => p.default.getChannelId(L.FAVORITES)),
                    b = (0, i.useStateFromStores)([m.default], () => m.default.getChannel(D)),
                    G = (0, C.default)(e => e.guildId),
                    j = G === L.FAVORITES,
                    {
                        badge: U,
                        unread: P
                    } = (0, f.default)(y),
                    F = function(e) {
                        let t = (0, i.useStateFromStores)([p.default], () => p.default.getVoiceChannelId()),
                            n = null != t && null != e[t],
                            l = (0, i.useStateFromStores)([E.default], () => {
                                if (!n) return !1;
                                let t = E.default.getCurrentUserActiveStream();
                                return null != t && null != e[t.channelId]
                            }),
                            a = (0, i.useStateFromStores)([E.default], () => E.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
                            s = (0, i.useStateFromStores)([g.default], () => n && null != t && g.default.hasVideo(t), [n, t]),
                            r = (0, i.useStateFromStoresArray)([d.default], () => Object.keys(e).reduce((e, t) => (e.push(...d.default.getEmbeddedActivitiesForChannel(t)), e), [])),
                            o = (0, i.useStateFromStores)([d.default], () => Array.from(d.default.getSelfEmbeddedActivities().values()).some(t => {
                                let {
                                    channelId: n
                                } = t;
                                return null != e[n]
                            })),
                            u = r.length > 0,
                            c = !1,
                            f = !1,
                            h = !1,
                            C = !1;
                        return n ? (c = !s, f = s, h = l, C = o) : (h = a, C = u), (0, A.renderMediaBadge)({
                            audio: c,
                            video: f,
                            screenshare: h,
                            liveStage: !1,
                            isCurrentUserConnected: n,
                            activity: C
                        })
                    }(y),
                    B = U > 0 ? (0, N.renderMentionBadge)(U) : null;
                return (0, T.default)((0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(_.default, {
                        selected: j,
                        hovered: t,
                        unread: P && !M,
                        className: x.pill
                    }), (0, l.jsx)(h.default, {
                        children: (0, l.jsx)(r.BlobMask, {
                            selected: j || t,
                            upperBadge: F,
                            lowerBadge: B,
                            children: (0, l.jsx)(I.default, {
                                ...e,
                                ariaLabel: R.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                                    guildName: R.default.Messages.FAVORITES_GUILD_NAME,
                                    mentions: U
                                }),
                                to: {
                                    pathname: L.Routes.CHANNEL(L.FAVORITES, D),
                                    state: v
                                },
                                selected: j || t,
                                onMouseEnter: () => O(!0),
                                onMouseLeave: () => O(!1),
                                onMouseDown: function() {
                                    null != b && o.default.preload(b.guild_id, b.id)
                                },
                                onContextMenu: function(e) {
                                    (0, u.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await n.el("95086").then(n.bind(n, "95086"));
                                        return t => (0, l.jsx)(e, {
                                            ...t
                                        })
                                    })
                                },
                                children: (0, l.jsx)(S.default, {
                                    className: x.favoriteIcon,
                                    width: 20,
                                    height: 20
                                })
                            })
                        })
                    })]
                }))
            }
        },
        797438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("476042"),
                o = n("301165"),
                u = n("974667"),
                d = n("769846"),
                c = n("452804"),
                f = n("677099"),
                h = n("15738"),
                C = n("159885"),
                E = n("674644"),
                m = n("363887"),
                p = n("472942"),
                g = n("492950"),
                S = n("829562"),
                _ = n("247539"),
                I = n("782340"),
                N = n("54965"),
                T = n("789978");
            let A = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_ANIMATION_DURATION),
                L = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_SIZE),
                R = (0, C.cssValueToNumber)(d.default.FOLDER_ITEM_GUILD_ICON_MARGIN);

            function x(e) {
                let {
                    folderNode: t,
                    setNodeRef: n,
                    selected: s,
                    expanded: d,
                    mediaState: C,
                    mentionCount: x = 0,
                    unread: v = !1,
                    defaultFolderName: O,
                    useCircleMask: M = !1,
                    draggable: y = !1,
                    sorting: D = !1,
                    onDragStart: b,
                    onDragEnd: G,
                    onExpandCollapse: j,
                    onContextMenu: U,
                    renderChildNode: P,
                    folderIconContent: F
                } = e, {
                    id: B,
                    name: w,
                    children: V
                } = t, [H, k] = a.useState(!1), [Y, K] = a.useState(!1);
                a.useEffect(() => {
                    D && k(!1)
                }, [D]);
                let [{
                    dragging: W
                }, z] = (0, r.useDrag)({
                    type: E.GuildsNodeType.FOLDER,
                    item: () => (null == b || b(), {
                        type: E.GuildsNodeType.FOLDER,
                        nodeId: t.id
                    }),
                    end() {
                        null == G || G(), (0, c.saveGuildFolders)(f.default.getCompatibleGuildFolders())
                    },
                    collect: e => ({
                        dragging: e.isDragging()
                    })
                }), Z = a.useCallback(e => {
                    K(e)
                }, []), Q = a.useCallback(e => {
                    ("ArrowRight" === e.key && !d || "ArrowLeft" === e.key && d) && j()
                }, [j, d]), X = null != w && "" !== w ? w : null != O && "" !== O ? O : I.default.Messages.SERVER_FOLDER_PLACEHOLDER, q = (0, u.useTreeItem)("".concat(B)), J = "folder-items-".concat(B), $ = V.length * (L + R), ee = (0, o.useTransition)(!W && d, {
                    from: {
                        height: 0
                    },
                    enter: {
                        height: 1
                    },
                    leave: {
                        height: 0
                    },
                    config: {
                        duration: A
                    }
                }), et = a.useCallback(e => null == n ? void 0 : n(B, e), [n, B]), en = (0, _.default)((0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(h.default, {
                        disabled: W || d,
                        hovered: H,
                        selected: s,
                        unread: v,
                        className: T.pill
                    }), (0, l.jsx)(S.default, {
                        text: X,
                        disabled: D,
                        selected: s,
                        disableWrapper: !0,
                        children: (0, l.jsx)("div", {
                            ref: y ? z : void 0,
                            className: i({
                                [T.wobble]: !W && Y && !d
                            }),
                            "data-dnd-name": X,
                            children: W ? (0, l.jsx)(g.default, {}) : (0, l.jsx)(m.default, {
                                folderNode: t,
                                expanded: d,
                                forceCircular: M,
                                sorting: D,
                                mediaState: C,
                                mentionCount: x,
                                tooltipName: X,
                                folderGroupId: J,
                                onClick: j,
                                onContextMenu: U,
                                onHoverChange: k,
                                onKeyDown: Q,
                                treeItemProps: q,
                                folderIconContent: F
                            })
                        })
                    }), y ? (0, l.jsx)(p.default, {
                        name: X,
                        targetNode: t,
                        onDragOverChanged: Z
                    }) : null]
                }));
                return (0, l.jsxs)("div", {
                    ref: et,
                    className: N.wrapper,
                    children: [!W && (0, l.jsx)("span", {
                        className: i(N.expandedFolderBackground, {
                            [N.collapsed]: !d,
                            [N.hover]: H || Y
                        })
                    }), en, ee((e, t, n) => {
                        let {
                            key: a
                        } = n;
                        return t && (0, l.jsx)(o.animated.ul, {
                            id: J,
                            style: {
                                height: e.height.to(e => e * $)
                            },
                            className: N.expandedGuilds,
                            role: "group",
                            children: V.map(P)
                        }, a)
                    }), y && d ? (0, l.jsx)(p.FolderEndDropTarget, {
                        name: X,
                        targetNode: t
                    }) : null]
                })
            }
        },
        822485: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("340626"),
                i = n("393414"),
                r = n("627490"),
                o = n("966270"),
                u = n("49111"),
                d = n("447621"),
                c = n("782340");

            function f() {
                let e = window.location.pathname.startsWith(u.Routes.GUILD_DISCOVERY);
                e && ((0, s.clearSearch)(), (0, s.selectCategory)(d.DISCOVERY_ALL_CATEGORIES_ID, !0));
                let t = (0, i.getHistory)(),
                    n = t.location.search;
                (0, i.transitionTo)(u.Routes.GUILD_DISCOVERY, {
                    search: n
                })
            }
            let h = a.forwardRef(function(e, t) {
                let {
                    selected: n,
                    tooltip: a
                } = e;
                return (0, l.jsx)(o.default, {
                    id: "guild-discover-button",
                    ref: t,
                    onClick: f,
                    selected: n,
                    tooltip: null != a ? a : c.default.Messages.GUILD_DISCOVERY_TOOLTIP,
                    icon: r.default
                })
            });
            var C = h
        },
        198442: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("476042"),
                o = n("974667"),
                u = n("65597"),
                d = n("862337"),
                c = n("77078"),
                f = n("450911"),
                h = n("272030"),
                C = n("452804"),
                E = n("208127"),
                m = n("393414"),
                p = n("239380"),
                g = n("26989"),
                S = n("677099"),
                _ = n("15738"),
                I = n("956089"),
                N = n("108189"),
                T = n("674644"),
                A = n("945317"),
                L = n("472942"),
                R = n("423080"),
                x = n("492950"),
                v = n("247539"),
                O = n("255991"),
                M = n("49111"),
                y = n("782340"),
                D = n("789978");
            let b = {
                analyticsSource: {
                    page: M.AnalyticsPages.GUILD_CHANNEL,
                    section: M.AnalyticsSections.CHANNEL_LIST,
                    object: M.AnalyticsObjects.CHANNEL
                }
            };

            function G(e, t) {
                (0, h.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("374705").then(n.bind(n, "374705"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        guild: t
                    })
                })
            }
            var j = a.memo(function(e) {
                var t, n, s, h, j;
                let {
                    guildNode: U,
                    setRef: P,
                    onDragStart: F,
                    onDragEnd: B,
                    route: w,
                    guild: V,
                    animatable: H,
                    selected: k = !1,
                    unread: Y = !1,
                    muted: K = !1,
                    mediaState: W,
                    unavailable: z = !1,
                    badge: Z = 0,
                    contextMenu: Q = G,
                    draggable: X = !1,
                    sorting: q = !1,
                    preloadOnClick: J = !0,
                    guildJoinRequestStatus: $,
                    burstData: ee,
                    handleClearBurstData: et
                } = e, {
                    id: en,
                    parentId: el
                } = U, ea = !1, es = null !== (t = e.upperBadge) && void 0 !== t ? t : z ? (0, O.renderUnavailableBadge)() : null != W ? (0, O.renderMediaBadge)(W) : void 0, ei = null !== (n = e.lowerBadge) && void 0 !== n ? n : void 0;
                null == ei && Z > 0 ? ei = null !== (s = (0, O.renderMentionBadge)(Z)) && void 0 !== s ? s : void 0 : null == ei && null != $ ? ei = null !== (h = (0, O.renderGuildJoinRequestBadge)({
                    guildJoinRequestStatus: $
                })) && void 0 !== h ? h : void 0 : null == ei && void 0 !== ee && (ei = (0, l.jsx)(O.RenderBurstBadge, {
                    ...ee
                }), ea = !0);
                let er = null !== (j = e.lowerBadgeWidth) && void 0 !== j ? j : (0, I.getBadgeWidthForValue)(Z),
                    [{
                        dragging: eo
                    }, eu] = (0, r.useDrag)({
                        type: T.GuildsNodeType.GUILD,
                        item: () => (requestAnimationFrame(() => {
                            null == F || F()
                        }), {
                            type: U.type,
                            nodeId: U.id
                        }),
                        end() {
                            null == B || B(), (0, C.saveGuildFolders)(S.default.getCompatibleGuildFolders())
                        },
                        collect: e => ({
                            dragging: e.isDragging()
                        })
                    }),
                    ed = (0, o.useTreeItem)(null != en ? en : ""),
                    [ec, ef] = a.useState(!1),
                    eh = !q && ec,
                    [eC, eE] = a.useState(!1),
                    [em, ep] = a.useState(!1),
                    [eg] = a.useState(() => new d.DelayedCall(70, () => ep(!0)));
                a.useEffect(() => () => eg.cancel(), [eg]);
                let eS = a.useCallback(() => {
                        if (null != ee && ea) {
                            (0, m.transitionTo)(M.Routes.CHANNEL(en, ee.channelId, ee.messageId), {
                                navigationReplace: !0
                            }), null == et || et();
                            return
                        }
                        if (null != w) {
                            (0, m.transitionTo)(w, {
                                state: b
                            });
                            return
                        }(0, p.transitionToGuild)(en, {
                            state: b
                        })
                    }, [ee, en, et, w, ea]),
                    e_ = a.useCallback(() => {
                        if (null != w || null == V || z || !J) return;
                        let e = (0, p.getChannelIdForGuildTransition)(V.id);
                        null != e && f.default.preload(V.id, e)
                    }, [w, V, z, J]),
                    eI = (0, u.default)([g.default], () => g.default.isCurrentUserGuest(en)),
                    eN = a.useCallback(e => {
                        null != V && !eI && Q(e, V)
                    }, [V, Q, eI]),
                    eT = a.useCallback(e => {
                        if ("ArrowLeft" === e.key && null != el) {
                            var t;
                            null === (t = document.querySelector("[aria-owns=folder-items-".concat(el, "]"))) || void 0 === t || t.focus()
                        }
                    }, [el]),
                    eA = a.useCallback(e => {
                        if (e) {
                            eg.delay();
                            return
                        }
                        eg.cancel(), ep(!1)
                    }, [eg]),
                    eL = a.useCallback(e => {
                        null == P || P(en, e)
                    }, [en, P]);
                if (null == V) return null;
                let eR = em || eC ? (0, l.jsx)(A.default, {
                        guild: V,
                        show: em,
                        active: k,
                        onAnimationStart: function() {
                            eE(em)
                        },
                        onAnimationRest: function() {
                            em || eE(!1)
                        }
                    }) : (0, l.jsx)(N.default, {
                        ariaLabel: y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
                            guildName: V.toString(),
                            mentions: Z
                        }),
                        name: V.toString(),
                        onClick: eS,
                        onMouseEnter: function() {
                            q || ef(!0)
                        },
                        onMouseLeave: function() {
                            q || ef(!1)
                        },
                        onMouseDown: e_,
                        onContextMenu: eN,
                        onKeyDown: eT,
                        icon: V.getIconURL(96, eh && H),
                        selected: k || eh,
                        ...ed,
                        role: "treeitem"
                    }),
                    ex = eo ? (0, l.jsx)(L.PlaceholderDropTarget, {
                        children: (0, l.jsx)(x.default, {})
                    }) : (0, l.jsx)("div", {
                        ref: X ? eu : void 0,
                        "data-dnd-name": V.toString(),
                        className: i(D.blobContainer, {
                            [D.sorting]: q,
                            [D.wobble]: em,
                            [D.selected]: em || k
                        }),
                        children: (0, l.jsx)(c.BlobMask, {
                            selected: em || k || eh,
                            innerClassName: K && (0, E.isReadStateStaffExperimentEnabled)() ? D.muted : void 0,
                            upperBadge: es,
                            lowerBadge: ei,
                            lowerBadgeWidth: er,
                            children: eR
                        })
                    });
                return (0, v.default)((0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(_.default, {
                        hovered: !eo && eh,
                        selected: !eo && k,
                        unread: !eo && Y,
                        className: D.pill
                    }), (0, l.jsx)(R.default, {
                        guild: V,
                        disabled: q,
                        children: ex
                    }), X ? (0, l.jsx)(L.default, {
                        name: V.name,
                        targetNode: U,
                        onDragOverChanged: eA
                    }) : null]
                }), eL)
            })
        },
        798573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomeButton: function() {
                    return Q
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("974667"),
                i = n("446674"),
                r = n("95410"),
                o = n("77078"),
                u = n("823411"),
                d = n("524110"),
                c = n("805199"),
                f = n("951039"),
                h = n("713726"),
                C = n("9759"),
                E = n("194051"),
                m = n("651896"),
                p = n("520480"),
                g = n("813531"),
                S = n("749387"),
                _ = n("45062"),
                I = n("260488"),
                N = n("254358"),
                T = n("12896"),
                A = n("712596"),
                L = n("27618"),
                R = n("18494"),
                x = n("697218"),
                v = n("340412"),
                O = n("330338"),
                M = n("535974"),
                y = n("352326"),
                D = n("153769"),
                b = n("774223"),
                G = n("15738"),
                j = n("956089"),
                U = n("108189"),
                P = n("964889"),
                F = n("709681"),
                B = n("957833"),
                w = n("829562"),
                V = n("247539"),
                H = n("255991"),
                k = n("49111"),
                Y = n("646718"),
                K = n("782340"),
                W = n("973321");
            let z = {
                origin: {
                    x: -16,
                    y: 0
                },
                targetWidth: 48,
                targetHeight: 48,
                offset: {
                    x: 0,
                    y: 0
                }
            };

            function Z(e) {
                let {
                    selected: t,
                    user: n,
                    badge: h,
                    link: E,
                    showProgressBadge: m
                } = e, _ = (0, i.useStateFromStores)([c.default], () => c.default.isEditorOpen), {
                    showIconSetting: I
                } = (0, A.useCanUseDesktopInAppIcons)({
                    location: "HomeButtons"
                }), [N, L] = a.useState(!1), [R, x] = a.useState(!1), [v, O] = a.useState(null), [M, y] = a.useState(0), [P, B] = a.useState(!1), {
                    canViewBroadcasts: Y
                } = C.default.useExperiment({
                    location: "home_button_no_track"
                }, {
                    autoTrackExposure: !1
                }), Z = (0, g.default)(), Q = Z.length > 0 && Y;
                (0, p.useTrackNewBroadcastDetected)(), a.useEffect(() => {
                    Z.length > 0 && u.default.getDetectableGames()
                }, [Z]);
                let X = (0, s.useTreeItem)("home"),
                    q = () => {
                        O(null), y(0), clearTimeout(v)
                    };
                if (null == n) return null;
                let J = K.default.Messages.DIRECT_MESSAGES;
                R && (J = r.default.get(k.DISCODO_STORAGE_KEY) ? K.default.Messages.DISCODO_ENABLED : K.default.Messages.DISCODO_DISABLED), Z.length > 0 && C.default.trackExposure({
                    location: "home_button"
                });
                let $ = null;
                !t && m ? $ = (0, l.jsx)(d.default, {
                    className: W.downloadProgress,
                    determineOwnVisibility: !1
                }) : Q && ($ = (0, l.jsx)(b.default, {
                    className: W.broadcastBadge
                }));
                let ee = t || N || _,
                    et = (0, l.jsx)(o.BlobMask, {
                        highlight: Q,
                        selected: ee,
                        lowerBadge: h > 0 ? (0, H.renderMentionBadge)(h) : null,
                        upperBadge: $,
                        lowerBadgeWidth: (0, j.getBadgeWidthForValue)(h),
                        children: (0, l.jsx)(U.default, {
                            onMouseEnter: () => L(!0),
                            onMouseLeave: () => L(!1),
                            onClick: () => {
                                if (!__OVERLAY__ && (null != v && clearTimeout(v), O(setTimeout(q, 500)), y(M + 1), 15 === M)) {
                                    q();
                                    let e = !r.default.get(k.DISCODO_STORAGE_KEY);
                                    r.default.set(k.DISCODO_STORAGE_KEY, e), e ? (0, F.playSound)("discodo") : (0, F.playSound)("user_leave"), x(!0), setTimeout(() => {
                                        x(!1)
                                    }, 1e3)
                                }
                            },
                            selected: ee,
                            ariaLabel: K.default.Messages.DIRECT_MESSAGES,
                            ...X,
                            to: {
                                pathname: E,
                                state: {
                                    analyticsSource: {
                                        page: k.AnalyticsPages.GUILD_CHANNEL,
                                        section: k.AnalyticsSections.NAVIGATION,
                                        object: k.AnalyticsObjects.BUTTON_HOME
                                    }
                                }
                            },
                            children: I ? (0, l.jsx)(f.default, {
                                isActive: ee
                            }) : (0, l.jsx)(D.default, {
                                className: W.homeIcon
                            })
                        })
                    }),
                    en = Q ? (0, l.jsx)(o.Popout, {
                        position: "right",
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, l.jsx)(S.default, {
                                closePopout: t
                            })
                        },
                        onRequestClose: () => {
                            B(!1)
                        },
                        spacing: 8,
                        shouldShow: P,
                        children: () => et
                    }) : null;
                return (0, l.jsx)("div", {
                    className: W.tutorialContainer,
                    onMouseEnter: () => {
                        B(!0)
                    },
                    onMouseLeave: () => {
                        setTimeout(() => {
                            B(!1)
                        }, 250)
                    },
                    children: (0, l.jsx)(T.default, {
                        inlineSpecs: z,
                        tutorialId: "friends-list",
                        position: "right",
                        children: (0, V.default)((0, l.jsxs)(a.Fragment, {
                            children: [(0, l.jsx)(G.default, {
                                selected: t,
                                hovered: N,
                                className: W.pill
                            }), null != en ? en : (0, l.jsx)(w.default, {
                                color: o.Tooltip.Colors.PRIMARY,
                                hideOnClick: !0,
                                text: J,
                                selected: t,
                                children: et
                            })]
                        }))
                    })
                })
            }

            function Q() {
                let e = (0, B.useIsHomeSelected)(),
                    t = (0, i.useStateFromStores)([y.default, M.default], () => {
                        let e = (0, d.getDispatchApplicationStates)(y.default.activeItems, M.default),
                            {
                                total: t,
                                progress: n
                            } = P.getCombinedProgress(e),
                            l = P.calculateProgressPercentage(n, t);
                        return l > 0 && l < 100
                    }),
                    n = (0, i.useStateFromStores)([E.default], () => E.default.getUserIdsToValidate()),
                    s = (0, i.useStateFromStores)([L.default], () => L.default.getPendingCount()),
                    r = Object.keys(Y.SubscriptionTrials).filter(e => e !== Y.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    {
                        unviewedTrialCount: o,
                        unviewedDiscountCount: u
                    } = (0, i.useStateFromStoresObject)([v.default], () => ({
                        unviewedTrialCount: v.default.getUnacknowledgedOffers(r).length,
                        unviewedDiscountCount: v.default.getUnacknowledgedDiscountOffers().length
                    })),
                    c = o + u,
                    f = (0, i.useStateFromStores)([x.default], () => x.default.getCurrentUser()),
                    C = (0, I.useMessageRequestsCount)(),
                    p = s + c + C,
                    {
                        enabled: g
                    } = (0, N.default)(!0);
                a.useEffect(() => {
                    _.DMListShopButtonExperiment.trackExposure({
                        location: "home"
                    })
                }, []), a.useEffect(() => {
                    n.length > 0 && (0, h.fetchBroadcasterBuckets)()
                }, [n]), (0, m.default)();
                let S = O.default.getHomeLink();
                return g && p === c && c > 0 && s + C === 0 && (S = k.Routes.APPLICATION_STORE), (0, l.jsx)(Z, {
                    selected: e,
                    user: f,
                    selectedChannelId: R.default.getChannelId(k.ME),
                    badge: p,
                    link: S,
                    showProgressBadge: t
                })
            }
        },
        795853: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("803182"),
                s = n("446674"),
                i = n("813006"),
                r = n("337543"),
                o = n("745633"),
                u = n("775755"),
                d = n("966270"),
                c = n("49111"),
                f = n("782340");

            function h(e) {
                var t;
                let {
                    isOnHubVerificationRoute: n
                } = e, h = (0, a.matchPath)(null !== (t = window.location.pathname) && void 0 !== t ? t : "", {
                    path: c.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode")
                }), C = (0, s.useStateFromStores)([r.default], () => {
                    if (null == h) return null;
                    let {
                        inviteCode: e
                    } = h.params;
                    return null != e ? r.default.getInvite(e) : null
                }), E = (null == C ? void 0 : C.guild) != null ? new i.default(null == C ? void 0 : C.guild) : null;
                return n ? null != E && null != C ? (0, l.jsx)(u.default, {
                    guild: E,
                    invite: C
                }) : (0, l.jsx)(d.default, {
                    tooltip: f.default.Messages.HUB_DISCORD_HUBS,
                    id: "guild-hub-button",
                    icon: o.default
                }) : null
            }
        },
        829562: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("603128");

            function u(e) {
                let {
                    children: t,
                    text: n,
                    color: s,
                    disableWrapper: u = !1,
                    disabled: d = !1,
                    hideOnClick: c = !0,
                    shouldShow: f,
                    forceOpen: h,
                    selected: C = !1,
                    tooltipClass: E
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    shouldShow: f,
                    forceOpen: h,
                    spacing: 20,
                    hideOnClick: c,
                    text: d ? null : n,
                    position: "right",
                    color: s,
                    "aria-label": !1,
                    tooltipClassName: i(o.listItemTooltip, E),
                    children: e => u ? a.cloneElement(a.Children.only(t), {
                        ...e
                    }) : (0, l.jsx)("div", {
                        className: i(o.listItemWrapper, {
                            [o.selected]: C
                        }),
                        ...e,
                        children: t
                    })
                })
            }
        },
        357762: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("247539"),
                s = n("915299");

            function i() {
                return (0, a.default)((0, l.jsx)("div", {
                    className: s.guildSeparator
                }))
            }
        },
        504957: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("15649"),
                r = n("341542"),
                o = n("305961"),
                u = n("829562"),
                d = n("247539"),
                c = n("49111"),
                f = n("782340"),
                h = n("258023");

            function C() {
                let e = (0, a.useStateFromStores)([r.default, o.default], () => r.default.unavailableGuilds.filter(e => null == o.default.getGuild(e)).length);
                return e > 0 ? (0, d.default)((0, l.jsx)(u.default, {
                    text: f.default.Messages.PARTIAL_OUTAGE.format({
                        count: e
                    }),
                    color: s.Tooltip.Colors.RED,
                    children: (0, l.jsx)(s.Anchor, {
                        href: (0, i.default)(c.LocalizedLinks.TWITTER),
                        target: "_blank",
                        className: h.guildsError,
                        "aria-label": f.default.Messages.PARTIAL_OUTAGE_A11Y.format({
                            count: e
                        }),
                        children: (0, l.jsx)("span", {
                            "aria-hidden": !0,
                            className: h.errorInner,
                            children: "!"
                        })
                    })
                })) : null
            }
        },
        247539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("823660");

            function s(e, t) {
                return (0, l.jsx)("div", {
                    className: a.listItem,
                    ref: t,
                    children: e
                })
            }
        },
        255991: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RenderBurstBadge: function() {
                    return x
                },
                renderMentionBadge: function() {
                    return v
                },
                renderUnavailableBadge: function() {
                    return O
                },
                renderMediaBadge: function() {
                    return M
                },
                renderGuildJoinRequestBadge: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("430568"),
                o = n("449918"),
                u = n("567054"),
                d = n("512306"),
                c = n("941723"),
                f = n("104359"),
                h = n("943232"),
                C = n("437825"),
                E = n("36694"),
                m = n("945330"),
                p = n("841811"),
                g = n("267675"),
                S = n("987772"),
                _ = n("82636"),
                I = n("368121"),
                N = n("228427"),
                T = n("956089"),
                A = n("402671"),
                L = n("49111"),
                R = n("823660");

            function x(e) {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: s
                } = e, [o, u] = a.useState(!0), [f, h] = a.useState([]), C = a.useMemo(() => {
                    if (null == f || f.length < 1) return;
                    let e = (0, c.buildEffect)(t, f[0], n, {
                        emojiSize: d.BurstReactionSize.NORMAL,
                        messageId: s
                    });
                    return (0, l.jsx)(d.default, {
                        emojiSize: d.BurstReactionSize.NORMAL,
                        className: R.effect,
                        effect: e,
                        onComplete: () => u(!1)
                    })
                }, [f, t, n, s]);
                return a.useEffect(() => {
                    let e = !1;
                    return u(!0), !async function() {
                        let n = await (0, A.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && h(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, l.jsxs)("div", {
                    children: [C, (0, l.jsx)(r.default, {
                        className: i(R.serverEmoji, {
                            [R.hideEmoji]: o
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    })]
                })
            }

            function v(e, t) {
                return (0, l.jsx)(T.NumberBadge, {
                    count: e,
                    color: t
                })
            }

            function O() {
                return (0, l.jsx)(T.IconBadge, {
                    icon: f.default,
                    disableColor: !0,
                    className: R.unavailableBadge
                })
            }

            function M(e) {
                let t, {
                    audio: n,
                    video: l,
                    screenshare: a,
                    isCurrentUserConnected: s,
                    liveStage: i,
                    activeEvent: r,
                    activity: o
                } = e;
                if (r) t = h.default;
                else if (i) t = N.default;
                else if (o) t = _.default;
                else if (a) t = g.default;
                else if (l) t = C.default;
                else {
                    if (!n) return null;
                    t = I.default
                }
                return D({
                    icon: t,
                    isCurrentUserConnected: s
                })
            }

            function y(e) {
                let {
                    guildJoinRequestStatus: t
                } = e, [n, l] = function(e) {
                    switch (e) {
                        case u.GuildJoinRequestApplicationStatuses.SUBMITTED:
                            return [void 0, p.default];
                        case u.GuildJoinRequestApplicationStatuses.REJECTED:
                            return [L.Color.RED_400, m.default];
                        case u.GuildJoinRequestApplicationStatuses.APPROVED:
                            return [L.Color.GREEN_360, E.default];
                        default:
                            return [void 0, S.default]
                    }
                }(t);
                return D({
                    icon: l,
                    color: n
                })
            }

            function D(e) {
                let {
                    icon: t,
                    color: n,
                    isCurrentUserConnected: a
                } = e, s = null == n ? {
                    disableColor: !0
                } : {
                    color: (0, o.getColor)(n)
                };
                return (0, l.jsx)(T.IconBadge, {
                    icon: t,
                    className: i(R.iconBadge, {
                        [R.isCurrentUserConnected]: a
                    }),
                    ...s
                })
            }
        },
        199218: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("272030"),
                r = n("851387"),
                o = n("393027"),
                u = n("383173"),
                d = n("952451"),
                c = n("305961"),
                f = n("449008"),
                h = n("797438"),
                C = n("653357"),
                E = n("49111"),
                m = a.memo(function(e) {
                    let {
                        folderNode: t,
                        ...m
                    } = e, {
                        id: p,
                        name: g,
                        color: S,
                        children: _
                    } = t, I = _.map(e => e.id), N = (0, o.default)(e => e.guildId), T = (0, s.useStateFromStores)([u.default], () => u.default.isFolderExpanded(p)), A = function(e) {
                        let t = e.children.map(e => {
                                let t = e.id,
                                    n = c.default.getGuild(t);
                                return null != n ? n.name : null
                            }).filter(f.isNotNullish),
                            n = 2 * E.MAX_GUILD_FOLDER_NAME_LENGTH,
                            l = [];
                        for (let e of t)(e.length < n || 0 === l.length) && (l.push(e), n -= e.length);
                        return "".concat(l.join(", ")).concat(l.length < t.length ? ", ..." : "")
                    }(t), L = (0, C.default)(t), {
                        mentionCount: R,
                        unread: x
                    } = (0, s.useStateFromStoresObject)([d.default], () => ({
                        mentionCount: I.map(e => d.default.getMentionCount(e)).reduce((e, t) => e + t, 0),
                        unread: I.some(e => d.default.hasUnread(e))
                    })), v = a.useCallback(() => {
                        r.default.toggleGuildFolderExpand(p)
                    }, [p]), O = a.useCallback(e => {
                        (0, i.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("896982").then(n.bind(n, "896982"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                folderId: p,
                                folderName: g,
                                folderColor: S,
                                unread: x || R > 0
                            })
                        })
                    }, [p, g, S, x, R]);
                    return (0, l.jsx)(h.default, {
                        ...m,
                        folderNode: t,
                        expanded: T,
                        selected: null != N && I.includes(N),
                        mentionCount: R,
                        unread: x,
                        mediaState: L,
                        defaultFolderName: A,
                        onExpandCollapse: v,
                        onContextMenu: O
                    })
                })
        },
        624531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("5367"),
                r = n("100835"),
                o = n("692171"),
                u = n("166257"),
                d = n("393027"),
                c = n("341542"),
                f = n("952451"),
                h = n("305961"),
                C = n("282109"),
                E = n("471671"),
                m = n("480381"),
                p = n("21841"),
                g = n("198442"),
                S = n("321308"),
                _ = a.memo(function(e) {
                    let {
                        guildNode: t,
                        lowerBadge: n
                    } = e, _ = t.id, I = (0, s.useStateFromStores)([h.default], () => h.default.getGuild(_)), N = (0, i.useCurrentUserGuildBadgeStatus)(_), T = (0, s.useStateFromStores)([E.default], () => E.default.isFocused()), A = (0, s.useStateFromStores)([c.default], () => c.default.isUnavailable(_)), L = (0, s.useStateFromStores)([C.default], () => C.default.isMuted(_)), R = (0, d.default)(e => e.guildId), {
                        burstPreviewData: x
                    } = (0, s.useStateFromStoresObject)([o.default], () => ({
                        burstPreviewData: o.default.getBurstedPreviewData(_)
                    })), v = (0, p.default)(_), {
                        badge: O,
                        unread: M
                    } = (0, s.useStateFromStoresObject)([f.default], () => ({
                        badge: f.default.getMentionCount(_),
                        unread: f.default.hasUnread(_)
                    })), y = (0, r.useShouldShowInvitesDisabledNotif)(I) && 0 === O, D = a.useMemo(() => null != n ? n : y ? (0, l.jsx)("div", {
                        className: S.pauseBackground,
                        children: (0, l.jsx)(m.default, {
                            className: S.pause,
                            width: 10,
                            height: 10
                        })
                    }) : null, [n, y]);
                    return (0, l.jsx)(g.default, {
                        ...e,
                        guild: I,
                        unavailable: A,
                        animatable: T,
                        selected: R === _,
                        badge: O,
                        burstData: x,
                        handleClearBurstData: () => (0, u.clearGuildBurstPreview)(_),
                        lowerBadge: D,
                        unread: M,
                        muted: L,
                        mediaState: v,
                        guildJoinRequestStatus: N
                    })
                })
        },
        775755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("471671"),
                r = n("674644"),
                o = n("198442"),
                u = n("49111");

            function d(e) {
                let {
                    guild: t,
                    invite: n
                } = e, d = a.useMemo(() => (0, r.createGuildNode)(t.id), [t.id]), c = (0, s.useStateFromStores)([i.default], () => i.default.isFocused());
                return null == t ? null : (0, l.jsx)(o.default, {
                    guildNode: d,
                    guild: t,
                    animatable: c,
                    draggable: !1,
                    contextMenu: () => {},
                    selected: !0,
                    route: u.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
                })
            }
        },
        83751: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("272030"),
                i = n("982527"),
                r = n("5367"),
                o = n("162771"),
                u = n("471671"),
                d = n("198442"),
                c = n("255991"),
                f = n("49111");

            function h(e, t) {
                (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("51707").then(n.bind(n, "51707"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        guild: t
                    })
                })
            }

            function C(e) {
                let {
                    guildNode: t
                } = e, n = t.id, s = (0, r.useCurrentUserGuildBadgeStatus)(n), C = (0, a.useStateFromStores)([i.default], () => i.default.getJoinRequestGuild(n), [n]), E = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), m = (0, a.useStateFromStores)([o.default], () => o.default.getGuildId());
                return null == C ? null : (0, l.jsx)(d.default, {
                    guildNode: t,
                    guild: C,
                    animatable: E,
                    draggable: !1,
                    selected: n === m,
                    preloadOnClick: !1,
                    contextMenu: h,
                    lowerBadge: null != s ? (0, c.renderGuildJoinRequestBadge)({
                        guildJoinRequestStatus: s
                    }) : void 0,
                    route: f.Routes.GUILD_MEMBER_VERIFICATION(n)
                })
            }
        },
        785343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("549103"),
                r = n("982527"),
                o = n("162771"),
                u = n("665382"),
                d = n("509223"),
                c = n("674644"),
                f = n("512812"),
                h = n("797438"),
                C = n("83751"),
                E = n("782340"),
                m = n("573703");

            function p() {
                let [e, t] = a.useState(!1), n = (0, s.useStateFromStores)([o.default], () => o.default.getGuildId()), p = (0, s.useStateFromStores)([r.default], () => r.default.hasFetchedRequestToJoinGuilds), g = (0, f.default)(), S = a.useMemo(() => {
                    let t = (0, c.createFolderNode)({
                        folderId: d.SpecialGuildsNodeIds.PENDING_JOIN_REQUESTS_FOLDER,
                        folderName: E.default.Messages.MEMBER_VERIFICATION_FOLDER_NAME,
                        expanded: e,
                        guildIds: []
                    });
                    for (let e of g) t.children.push((0, c.createGuildNode)(e, t.id));
                    return t
                }, [g, e]);
                if (a.useEffect(() => {
                        e && !p && i.default.fetchRequestToJoinGuilds()
                    }, [e, p]), 0 === g.length) return null;
                let _ = null != n && g.includes(n);
                return (0, l.jsx)(h.default, {
                    folderNode: S,
                    expanded: e,
                    useCircleMask: !e && !_,
                    selected: _,
                    draggable: !1,
                    sorting: !1,
                    onExpandCollapse: () => t(!e),
                    folderIconContent: (0, l.jsx)("div", {
                        className: m.expandedFolderIconWrapper,
                        children: (0, l.jsx)(u.default, {
                            width: 24,
                            height: 24,
                            className: m.pendingIcon
                        })
                    }),
                    renderChildNode: function(e) {
                        return e.type !== c.GuildsNodeType.GUILD ? null : (0, l.jsx)(C.default, {
                            guildNode: e
                        })
                    }
                })
            }
        },
        22567: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("393027"),
                r = n("305961"),
                o = n("471671"),
                u = n("674644"),
                d = n("21841"),
                c = n("198442");

            function f(e) {
                let {
                    guildId: t
                } = e, n = a.useMemo(() => (0, u.createGuildNode)(t), [t]), f = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t)), h = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), C = t === (0, i.default)(e => {
                    let {
                        guildId: t
                    } = e;
                    return t
                }), E = (0, d.default)(t);
                return null == f ? null : (0, l.jsx)(c.default, {
                    guildNode: n,
                    guild: f,
                    animatable: h,
                    selected: C,
                    draggable: !1,
                    mediaState: E
                })
            }
        },
        653357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("130563"),
                i = n("373469"),
                r = n("945956"),
                o = n("800762");

            function u(e) {
                var t;
                let n = (0, a.useStateFromStores)([r.default], () => r.default.getGuildId()),
                    u = e.children.map(e => e.id),
                    d = null != n && u.includes(n),
                    c = !1,
                    f = !1,
                    h = !1,
                    C = (0, a.useStateFromStores)([r.default], () => r.default.getChannelId()),
                    E = null === (t = (0, s.default)()) || void 0 === t ? void 0 : t.guild_id,
                    m = null != E && u.includes(E),
                    p = (0, a.useStateFromStores)([o.default], () => null != C && o.default.hasVideo(C), [C]),
                    g = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUserActiveStream());
                return d && (c = !p, f = p, h = null != g && null != g.guildId && u.includes(g.guildId)), l.useMemo(() => ({
                    audio: c,
                    video: f,
                    screenshare: h,
                    liveStage: m,
                    isCurrentUserConnected: d
                }), [c, f, h, m, d])
            }
        },
        698652: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderMentionBadge: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691"), n("104359");
            var a = n("956089");

            function s(e) {
                return (0, l.jsx)(a.NumberBadge, {
                    count: e
                })
            }
            n("805959")
        },
        64657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHubUnreadCount: function() {
                    return o
                }
            });
            var l = n("249654"),
                a = n("446674"),
                s = n("209397"),
                i = n("513688"),
                r = n("660478");

            function o(e) {
                return (0, a.useStateFromStores)([s.default, r.default], () => {
                    var t;
                    if (null == e) return 0;
                    let n = r.default.ackMessageId(e.id);
                    if (null == n) return 0;
                    let a = Object.values(null !== (t = s.default.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter(e => {
                        let t = l.default.fromTimestamp(new Date(e.createdAt).getTime());
                        return (0, i.hasMinimumMemberCount)(e) && t > n
                    });
                    return Math.min(i.MAX_CATEGORY_SERVERS, a.length)
                }, [e])
            }
        },
        922770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("305961"),
                s = n("49111");

            function i(e) {
                return (0, l.useStateFromStores)([a.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = a.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(s.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }
        },
        240239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("534222"),
                o = n("698652"),
                u = n("393414"),
                d = n("18494"),
                c = n("943232"),
                f = n("627490"),
                h = n("76539"),
                C = n("151185"),
                E = n("11056"),
                m = n("27978"),
                p = n("64657"),
                g = n("49111"),
                S = n("782340"),
                _ = n("909130");
            let I = [{
                icon: (0, l.jsx)(c.default, {
                    className: _.icon
                }),
                key: "EVENTS",
                getName: e => {
                    let {
                        numEvents: t
                    } = e;
                    return t > 0 ? S.default.Messages.GUILD_EVENTS_PLURAL.format({
                        number: t
                    }) : S.default.Messages.GUILD_EVENTS
                },
                handler: e => (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("659707").then(n.bind(n, "659707"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        guildId: e.id
                    })
                })
            }, {
                icon: (0, l.jsx)(f.default, {
                    className: _.icon
                }),
                key: "JOIN_SERVERS",
                getName: () => S.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
                handler: (e, t) => (0, u.transitionToGuild)(e.id, t.id)
            }, {
                icon: (0, l.jsx)(C.default, {
                    className: _.icon
                }),
                key: "ADD_SERVERS",
                getName: () => S.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
                handler: (e, t) => (0, i.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("467085").then(n.bind(n, "467085"));
                    return n => (0, l.jsx)(a, {
                        ...n,
                        directoryGuildName: e.name,
                        directoryGuildId: e.id,
                        directoryChannelId: t.id
                    })
                })
            }, {
                icon: (0, l.jsx)(h.default, {
                    className: _.icon
                }),
                key: "INVITE_MEMBERS",
                getName: () => S.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
                handler: (e, t) => (0, i.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("310688").then(n.bind(n, "310688"));
                    return n => (0, l.jsx)(a, {
                        ...n,
                        guild: e,
                        channel: t,
                        source: g.InstantInviteSources.HUB_SIDEBAR
                    })
                })
            }];
            var N = e => {
                let {
                    guild: t,
                    channel: n
                } = e, i = (0, r.default)(t.id);
                a.useEffect(() => {
                    m.default.trackExposure({
                        guildId: t.id,
                        location: "543af8_1"
                    })
                }, [t.id]);
                let {
                    showHubEventsList: u
                } = m.default.useExperiment({
                    guildId: t.id,
                    location: "543af8_2"
                }, {
                    autoTrackExposure: !1
                }), c = (0, s.useStateFromStores)([d.default], () => null != n && d.default.getChannelId() === n.id), f = a.useMemo(() => ({
                    numEvents: i.length
                }), [i.length]), h = e => {
                    if (null != n) {
                        let l = I.find(t => t.key === e);
                        null == l || l.handler(t, n)
                    }
                }, C = (0, p.useHubUnreadCount)(n);
                return (0, l.jsx)("div", {
                    children: I.map(e => {
                        if (!u && "EVENTS" === e.key) return null;
                        let t = c && "JOIN_SERVERS" === e.key;
                        return (0, l.jsx)(E.default, {
                            avatar: e.icon,
                            name: e.getName(f),
                            focusProps: {
                                offset: {
                                    right: 4,
                                    top: 1,
                                    bottom: 1
                                }
                            },
                            onClick: () => h(e.key),
                            selected: t,
                            className: _.optionItem,
                            selectedClassName: _.selected,
                            innerClassName: _.itemInner,
                            avatarClassName: _.avatar,
                            children: "JOIN_SERVERS" === e.key && C > 0 ? (0, o.renderMentionBadge)(C) : null
                        }, e.key)
                    })
                })
            }
        },
        817252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("627445"),
                d = n.n(u),
                c = n("917351"),
                f = n.n(c),
                h = n("458960"),
                C = n("446674"),
                E = n("266491"),
                m = n("77078"),
                p = n("493765"),
                g = n("175980"),
                S = n("485328"),
                _ = n("206230"),
                I = n("659500"),
                N = n("709681"),
                T = n("828184"),
                A = n("49111"),
                L = n("782340"),
                R = n("812931");
            (l = a || (a = {})).UP = "UP", l.DOWN = "DOWN", l.LEFT = "LEFT", l.RIGHT = "RIGHT";
            let x = {
                    [a.UP]: f.throttle(() => (0, N.playSound)("ddr-up"), 100),
                    [a.DOWN]: f.throttle(() => (0, N.playSound)("ddr-down"), 100),
                    [a.LEFT]: f.throttle(() => (0, N.playSound)("ddr-left"), 100),
                    [a.RIGHT]: f.throttle(() => (0, N.playSound)("ddr-right"), 100)
                },
                v = f((0, p.getDefaultLayoutContent)()).groupBy(e => e.group).value();

            function O(e) {
                switch (e.keyCode) {
                    case A.KeyboardKeys.ARROW_UP:
                        return a.UP;
                    case A.KeyboardKeys.ARROW_DOWN:
                        return a.DOWN;
                    case A.KeyboardKeys.ARROW_LEFT:
                        return a.LEFT;
                    case A.KeyboardKeys.ARROW_RIGHT:
                        return a.RIGHT;
                    default:
                        return null
                }
            }
            let M = 1e3 / 60;

            function y() {
                let e = [p.KeybindGroup.MESSAGE, p.KeybindGroup.NAVIGATION, p.KeybindGroup.VOICE_AND_VIDEO, p.KeybindGroup.CHAT, p.KeybindGroup.MISCELLANEOUS];
                return (0, s.jsx)("div", {
                    className: R.keyboardShortcutList,
                    children: e.map((t, n) => {
                        let l = n === e.length - 1,
                            a = v[t],
                            i = (0, p.getNameForKeybindGroup)(t),
                            r = (0, p.getDescriptionForKeybindGroup)(t);
                        return (0, s.jsxs)("div", {
                            className: o(R.keyboardShortcutListGroup, {
                                [R.firstGroup]: 0 === n
                            }),
                            children: [(0, s.jsxs)("div", {
                                className: o(R.keybindGroup),
                                children: [(0, s.jsx)(m.Heading, {
                                    variant: "heading-md/semibold",
                                    children: i
                                }), null != r && (0, s.jsx)(m.Text, {
                                    className: R.keybindGroupDescription,
                                    variant: "text-sm/normal",
                                    children: r
                                })]
                            }, t), a.map((e, t) => {
                                var n;
                                return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, s.jsxs)("div", {
                                    className: o(R.keybindGroup),
                                    children: [(0, s.jsx)("div", {
                                        className: R.keybindDescription,
                                        children: e.description
                                    }), (0, s.jsx)("div", {
                                        className: "keybind-shortcuts",
                                        children: e.binds.map(e => (0, s.jsx)(m.KeyCombo, {
                                            className: R.keybindKey,
                                            shortcut: e
                                        }, e))
                                    })]
                                }, t)
                            }), !l && (0, s.jsx)(m.FormDivider, {
                                className: R.keybindGroupDivider
                            })]
                        }, t)
                    })
                })
            }
            class D extends i.PureComponent {
                componentDidMount() {
                    this.lastInputedKeys = [], I.ComponentDispatch.subscribe(A.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), I.ComponentDispatch.subscribe(A.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
                        capture: !0
                    }), window.addEventListener("keyup", this.handleKeyUp, {
                        capture: !0
                    })
                }
                componentWillUnmount() {
                    I.ComponentDispatch.unsubscribe(A.ComponentActions.SCROLL_PAGE_UP, this.scrollPageUp), I.ComponentDispatch.unsubscribe(A.ComponentActions.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
                        capture: !0
                    }), window.removeEventListener("keyup", this.handleKeyUp, {
                        capture: !0
                    })
                }
                render() {
                    let {
                        UP: e,
                        DOWN: t,
                        LEFT: n,
                        RIGHT: l
                    } = this.state;
                    return (0, s.jsxs)(h.default.div, {
                        className: R.keyboardShortcutsModal,
                        style: this.getStyles(),
                        children: [(0, s.jsxs)(m.H, {
                            className: R.modalTitle,
                            children: [(0, s.jsx)("div", {
                                className: R.content,
                                children: L.default.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE
                            }), (0, s.jsx)(m.KeyCombo, {
                                shortcut: "mod+/"
                            })]
                        }), (0, s.jsx)("div", {
                            className: R.modalSubtitle,
                            children: L.default.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE
                        }), (0, s.jsxs)("div", {
                            className: R.ddrArrows,
                            children: [(0, s.jsx)(b, {
                                arrow: a.LEFT,
                                isActive: n,
                                className: R.left,
                                children: "left"
                            }), (0, s.jsx)(b, {
                                arrow: a.DOWN,
                                isActive: t,
                                className: R.down,
                                children: "down"
                            }), (0, s.jsx)(b, {
                                arrow: a.UP,
                                isActive: e,
                                className: R.up,
                                children: "up"
                            }), (0, s.jsx)(b, {
                                arrow: a.RIGHT,
                                isActive: l,
                                className: R.right,
                                children: "right"
                            })]
                        }), (0, s.jsx)(m.AdvancedScrollerAuto, {
                            ref: this.scrollerRef,
                            fade: !0,
                            children: (0, s.jsx)(m.HeadingLevel, {
                                children: (0, s.jsx)(y, {})
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        UP: !1,
                        DOWN: !1,
                        LEFT: !1,
                        RIGHT: !1,
                        opacity: new h.default.Value(1),
                        scaleX: new h.default.Value(1),
                        scaleY: new h.default.Value(0),
                        animating: !1
                    }, this.scrollerRef = i.createRef(), this.lastInputedKeys = [], this.scrollPageUp = () => {
                        let e = this.scrollerRef.current;
                        d(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
                            animate: !0
                        })
                    }, this.scrollPageDown = () => {
                        let e = this.scrollerRef.current;
                        d(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
                            animate: !0
                        })
                    }, this.arrowUp = e => {
                        let {
                            direction: t
                        } = e;
                        this.setState({
                            [t]: !1
                        })
                    }, this.arrowDown = e => {
                        let {
                            direction: t
                        } = e;
                        x[t](), this.setState({
                            [t]: !0
                        })
                    }, this.componentWillLeave = e => {
                        this.setState({
                            animating: !0
                        }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), h.default.sequence([h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            delay: 300,
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: .7,
                            duration: 2 * M
                        }), h.default.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 2 * M
                        }), h.default.timing(this.state.scaleY, {
                            delay: 100,
                            toValue: .005,
                            duration: 8 * M,
                            easing: h.default.Easing.in(h.default.Easing.ease)
                        }), h.default.parallel([h.default.timing(this.state.scaleX, {
                            toValue: 1,
                            duration: 10 * M,
                            easing: h.default.Easing.out(h.default.Easing.ease)
                        }), h.default.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 12 * M
                        })])]).start(e)
                    }, this.toggleOpacity = () => {
                        1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
                    }, this.getStyles = () => ({
                        opacity: this.state.opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                        transform: [{
                            scaleX: this.state.scaleX.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 2]
                            })
                        }, {
                            scaleY: this.state.scaleY.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }]
                    }), this.handleKeyDown = e => {
                        if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === A.KeyboardKeys.H && this.lastInputedKeys[1] === A.KeyboardKeys.H && this.lastInputedKeys[2] === A.KeyboardKeys.ARROW_RIGHT && this.lastInputedKeys[3] === A.KeyboardKeys.N && this.lastInputedKeys[4] === A.KeyboardKeys.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
                        let t = O(e);
                        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
                            direction: t
                        }))
                    }, this.handleKeyUp = e => {
                        if (this.props.keyboardModeEnabled) return;
                        let t = O(e);
                        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
                            direction: t
                        }))
                    }, this.onArrowClick = e => {
                        this.arrowDown({
                            direction: e
                        })
                    }
                }
            }

            function b(e) {
                let {
                    isActive: t,
                    arrow: n,
                    className: l,
                    children: a
                } = e, [r, u] = i.useState(t), d = i.useCallback(() => {
                    x[n](), u(!0)
                }, [n]);
                return i.useEffect(() => {
                    if (r) {
                        let e = setTimeout(() => u(!1), 500);
                        return () => clearTimeout(e)
                    }
                }, [r]), (0, s.jsx)(m.Clickable, {
                    onClick: d,
                    className: o(R.arrow, l, {
                        [R.active]: t || r
                    }),
                    children: a
                })
            }

            function G(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, [l, a] = i.useState(!1), r = i.useMemo(() => __OVERLAY__ ? (0, g.getOverlayLayoutContent)() : (0, p.getDefaultLayoutContent)(), []), u = (0, C.useStateFromStores)([_.default], () => _.default.keyboardModeEnabled);
                return (0, s.jsx)(m.ModalRoot, {
                    className: o(R.noBackground, {
                        [R.noShadow]: l
                    }),
                    size: m.ModalSize.DYNAMIC,
                    "aria-label": L.default.Messages.KEYBINDS,
                    transitionState: t,
                    children: (0, s.jsx)(E.default, {
                        component: "div",
                        children: l ? (0, s.jsx)(T.default, {
                            onClose: n
                        }, "raging-demo") : (0, s.jsx)(D, {
                            content: r,
                            keyboardModeEnabled: u,
                            activateRagingDemon: function() {
                                S.default.disable(), a(!0)
                            }
                        }, "modal")
                    })
                })
            }
        },
        831773: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("913144"),
                i = n("316272"),
                r = n("817252"),
                o = n("386867");
            class u extends i.default {
                _initialize() {
                    s.default.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
                }
                _terminate() {
                    s.default.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.default.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
                }
                showKeyboardShortcuts() {
                    (0, a.openModal)(e => (0, l.jsx)(r.default, {
                        ...e
                    }), {
                        modalKey: o.KEYBOARD_SHORTCUT_MODAL_KEY
                    })
                }
                hideKeyboardShortcuts() {
                    (0, a.closeModal)(o.KEYBOARD_SHORTCUT_MODAL_KEY)
                }
            }
            var d = new u
        },
        828184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("485328"),
                d = n("659500"),
                c = n("49111"),
                f = n("189542");
            let h = {
                    PRIMARY: () => !0,
                    SECONDARY: () => !0
                },
                C = () => (0, l.jsxs)("div", {
                    className: f.symbol,
                    children: [(0, l.jsx)("div", {
                        className: f.symbolBackground
                    }), (0, l.jsx)("img", {
                        alt: "",
                        src: n("287112")
                    })]
                }, "symbol");
            class E extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        animating: !0
                    }), this._renderSecondaryTimeout = setTimeout(() => {
                        this.setState({
                            renderSecondary: !0
                        })
                    }, 120), this._doneTimeout = setTimeout(this.done, 1e3), h.PRIMARY()
                }
                componentDidUpdate(e, t) {
                    this.state.renderSecondary && !t.renderSecondary && h.SECONDARY()
                }
                componentWillUnmount() {
                    clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
                }
                renderPrimary() {
                    return (0, l.jsxs)("div", {
                        className: f.primaryExplosion,
                        children: [(0, l.jsx)("img", {
                            alt: "",
                            className: f.circleInner,
                            src: n("672453"),
                            width: 70,
                            height: 69
                        }), (0, l.jsx)("img", {
                            alt: "",
                            className: f.circleOuter,
                            src: n("110209"),
                            width: 96,
                            height: 95
                        }), (0, l.jsx)("img", {
                            alt: "",
                            className: f.linesSecondary,
                            src: n("923699"),
                            width: 183,
                            height: 104
                        }), (0, l.jsx)("img", {
                            alt: "",
                            className: f.linesMain,
                            src: n("210318"),
                            width: 69,
                            height: 180
                        })]
                    }, "primary-explosion")
                }
                renderSecondary(e, t) {
                    return (0, l.jsxs)("div", {
                        className: f.secondaryExplosion,
                        style: {
                            top: t,
                            left: e
                        },
                        children: [(0, l.jsx)("img", {
                            alt: "",
                            className: f.circleInner,
                            src: n("856081"),
                            width: 61,
                            height: 58
                        }, "circle-inner"), (0, l.jsx)("img", {
                            alt: "",
                            className: f.circleOuter,
                            src: n("203450"),
                            width: 85,
                            height: 85
                        }, "circle-outer"), (0, l.jsx)("img", {
                            alt: "",
                            className: f.linesSecondary,
                            src: n("16759"),
                            width: 162,
                            height: 173
                        }, "lines-secondary"), (0, l.jsx)("img", {
                            alt: "",
                            className: f.linesMain,
                            src: n("842397"),
                            width: 156,
                            height: 306
                        }, "lines-main")]
                    }, "secondary-explosion")
                }
                render() {
                    let {
                        renderSecondary: e,
                        offsetX: t,
                        offsetY: n,
                        animating: a,
                        scale: s
                    } = this.state, r = [this.renderPrimary()];
                    return e && r.push(this.renderSecondary(t, n)), (0, l.jsx)("div", {
                        className: i(f.container, {
                            [f.animate]: a
                        }),
                        style: {
                            top: this.props.top,
                            left: this.props.left,
                            transform: "scale(".concat(s, ")")
                        },
                        children: r
                    })
                }
                constructor(...e) {
                    super(...e), this._renderSecondaryTimeout = null, this._doneTimeout = null, this.state = {
                        animating: !1,
                        renderSecondary: !1,
                        scale: o.random(.6, 1, !0),
                        offsetX: o.random(0, 140, !1) - 70,
                        offsetY: o.random(0, 140, !1) - 70
                    }, this.done = () => {
                        this.props.onAnimationComplete(this.props.componentId)
                    }
                }
            }
            let m = 240;
            class p extends a.PureComponent {
                componentDidMount() {
                    this.setTimeout(() => {
                        this.setState({
                            visible: !0
                        }), d.ComponentDispatch.dispatch(c.ComponentActions.SHAKE_APP, {
                            duration: 2400
                        })
                    }, 1800), this.setTimeout(this.createExplosion, 1800)
                }
                componentWillUnmount() {
                    for (let e of (u.default.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
                }
                render() {
                    return (0, l.jsx)("div", {
                        className: i(f.ragingDemon, {
                            [f.visible]: this.state.visible
                        }),
                        children: this.children
                    })
                }
                constructor(...e) {
                    super(...e), this._timeouts = [], this.children = [], this.state = {
                        explosions: 0,
                        visible: !1
                    }, this.setTimeout = (e, t) => {
                        let n = setTimeout(e, t);
                        return this._timeouts.push(n), n
                    }, this.removeExplosion = e => {
                        let t = this.children,
                            n = t.findIndex(t => {
                                if (t.type !== E) return !1;
                                let n = t.props;
                                return null != n.componentId && n.componentId === e
                            });
                        n >= 0 && t.splice(n, 1), this.forceUpdate()
                    }, this.createExplosion = () => {
                        let e = this.children,
                            t = window.innerWidth / 2 >> 0,
                            n = window.innerHeight / 2 >> 0;
                        if (this.state.explosions < 8) {
                            let a = "expl-".concat(this.state.explosions);
                            e.push((0, l.jsx)(E, {
                                componentId: a,
                                top: o.random(n - 100, n + 100, !1),
                                left: o.random(t - 200, t + 200, !1),
                                onAnimationComplete: this.removeExplosion
                            }, a)), this.setTimeout(this.createExplosion, m), this.setState({
                                explosions: this.state.explosions + 1
                            })
                        } else this.setTimeout(this.addSymbol, 750)
                    }, this.addSymbol = () => {
                        this.children = [(0, l.jsx)(C, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
                    }, this.delayedClose = () => {
                        this.props.onClose()
                    }
                }
            }
            var g = p
        },
        260488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestsCount: function() {
                    return s
                }
            });
            var l = n("446674"),
                a = n("288518");

            function s() {
                return (0, l.useStateFromStores)([a.default], () => a.default.getMessageRequestsCount())
            }
        },
        934743: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eI
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("446674"),
                d = n("151426"),
                c = n("669491"),
                f = n("77078"),
                h = n("636974"),
                C = n("255397"),
                E = n("406189"),
                m = n("990766"),
                p = n("832627"),
                g = n("86621"),
                S = n("206230"),
                _ = n("550766"),
                I = n("191225"),
                N = n("871388"),
                T = n("713726"),
                A = n("705565"),
                L = n("858944"),
                R = n("228854"),
                x = n("243632"),
                v = n("180273"),
                O = n("579565"),
                M = n("917973"),
                y = n("48683"),
                D = n("374014"),
                b = n("223913"),
                G = n("479788"),
                j = n("560367"),
                U = n("293383"),
                P = n("375202"),
                F = n("16916"),
                B = n("373469"),
                w = n("271938"),
                V = n("42203"),
                H = n("546463"),
                k = n("923959"),
                Y = n("305961"),
                K = n("42887"),
                W = n("957255"),
                z = n("824563"),
                Z = n("568307"),
                Q = n("18494"),
                X = n("101125"),
                q = n("703370"),
                J = n("953109"),
                $ = n("37785"),
                ee = n("491605"),
                et = n("437825"),
                en = n("893011"),
                el = n("76539"),
                ea = n("985622"),
                es = n("619911"),
                ei = n("962541"),
                er = n("78574"),
                eo = n("329858"),
                eu = n("956089"),
                ed = n("980423"),
                ec = n("599110"),
                ef = n("773336"),
                eh = n("974165"),
                eC = n("733335"),
                eE = n("49111"),
                em = n("411511"),
                ep = n("782340"),
                eg = n("333695");
            let eS = (0, p.default)(function(e) {
                let {
                    message: t
                } = e;
                return (0, l.jsx)(er.default, {
                    children: t
                })
            });
            class e_ extends a.PureComponent {
                componentDidUpdate(e) {
                    !e.dropsActivityPanelExperienceBlocked && this.props.dropsActivityPanelExperienceBlocked && this.setState({
                        isDropsActivityPanelTooltipOpen: !1
                    })
                }
                isJoinableActivity() {
                    let {
                        application: e,
                        activity: t,
                        embeddedActivity: n
                    } = this.props;
                    return null != e && (null != n ? n.application_id === e.id : null != t && t.application_id === e.id && t.type === eE.ActivityTypes.PLAYING && (0, N.default)(t, eE.ActivityFlags.JOIN))
                }
                renderGoLiveButton() {
                    let e, t, n, a;
                    let {
                        canGoLive: s,
                        guildId: i,
                        isStreaming: r,
                        voiceChannel: o,
                        canStream: u,
                        runningGame: d,
                        embeddedActivity: c
                    } = this.props;
                    return (null != d || null == c) && (r || s && null != d) ? (r ? (e = !1, t = this.handleClickStopStreamingButton, n = ea.default, a = ep.default.Messages.STOP_STREAMING) : u ? (e = !1, t = this.handleClickGoLiveButton, n = es.default, a = null != d ? ep.default.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({
                        game: d.name
                    }) : ep.default.Messages.ACTIVITY_PANEL_GO_LIVE) : (e = !0, t = null, n = es.default, a = null != o ? ep.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE : null != i ? ep.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD : ep.default.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD), (0, l.jsx)("div", {
                        className: eg.panelButtonContainer,
                        children: (0, l.jsx)(ei.default, {
                            tooltipText: a,
                            disabled: e,
                            onClick: t,
                            icon: n,
                            iconForeground: eg.actionIcon
                        })
                    })) : null
                }
                renderInviteButton() {
                    let {
                        embeddedActivity: e
                    } = this.props;
                    return this.isJoinableActivity() && null == e ? (0, l.jsx)(ei.default, {
                        tooltipText: ep.default.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                        onClick: this.handleClickInviteButton,
                        icon: el.default,
                        iconForeground: eg.actionIcon
                    }) : null
                }
                renderDropsButton() {
                    let {
                        dropsTooltipAction: e,
                        dropsPartnerGame: t
                    } = this.props;
                    if (null == t) return null;
                    let n = this.state.isDropsActivityPanelTooltipOpen,
                        a = () => this.setState({
                            isDropsActivityPanelTooltipOpen: !1
                        });
                    return (0, l.jsx)(f.Popout, {
                        shouldShow: n,
                        position: "top",
                        align: "center",
                        onRequestClose: a,
                        renderPopout: () => (0, l.jsx)(y.default, {
                            partnerGame: t,
                            tooltipAction: e,
                            onClose: a
                        }),
                        children: () => (0, l.jsxs)(l.Fragment, {
                            children: [this.state.showDropsSparkles && this.renderSparkles(), (0, l.jsx)(ei.default, {
                                "aria-label": ep.default.Messages.DROPS_ENABLED,
                                tooltipText: n ? null : ep.default.Messages.DROPS_ENABLED,
                                onClick: this.handleClickDropsButton,
                                icon: M.default
                            })]
                        })
                    })
                }
                renderLeaveEmbeddedActivityButton() {
                    let {
                        embeddedActivity: e,
                        voiceChannel: t
                    } = this.props;
                    return null == e || null == t ? null : (0, l.jsx)(ei.default, {
                        tooltipText: ep.default.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
                        onClick: this.handleClickLeaveEmbeddedActivityButton(e.application_id, t),
                        icon: en.default,
                        iconForeground: eg.actionIcon
                    })
                }
                renderBroadcastButton() {
                    let {
                        voiceChannel: e
                    } = this.props;
                    return null != e ? null : (0, l.jsx)(eh.default, {})
                }
                renderBroadcastSettingsButton() {
                    let {
                        broadcast: e
                    } = this.props;
                    return null == e ? null : (0, l.jsx)(eC.default, {})
                }
                renderSparkles() {
                    let {
                        useReducedMotion: e
                    } = this.props;
                    async function t() {
                        let {
                            default: e
                        } = await n.el("922510").then(n.t.bind(n, "922510", 19));
                        return e
                    }
                    return (0, l.jsx)("div", {
                        className: eg.sparkleContainer,
                        children: (0, l.jsx)(ee.default, {
                            importData: t,
                            shouldAnimate: !e,
                            className: eg.sparkles
                        })
                    })
                }
                renderActions() {
                    let e = this.renderGoLiveButton(),
                        t = this.renderDropsButton(),
                        n = this.renderInviteButton(),
                        a = this.renderLeaveEmbeddedActivityButton(),
                        s = this.renderClipsButton(),
                        i = this.renderBroadcastButton(),
                        r = this.renderBroadcastSettingsButton();
                    return null == e && null == n && null == a ? null : (0, l.jsxs)("div", {
                        className: eg.actions,
                        children: [i, e, r, n, null == e ? a : s, t]
                    })
                }
                getGameName() {
                    let {
                        runningGame: e,
                        application: t
                    } = this.props;
                    return null != t ? t.name : null != e ? e.name : ep.default.Messages.STATUS_UNKNOWN
                }
                renderGame() {
                    let {
                        isStreaming: e,
                        dropsPartnerGame: t,
                        application: n,
                        runningGame: a
                    } = this.props, s = this.getGameName();
                    return (0, l.jsxs)("div", {
                        className: i(eg.gameWrapper, {
                            [eg.clickableGameWrapper]: null != n
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: eg.gameIconWrapper,
                            children: [(0, l.jsx)(J.default, {
                                className: eg.gameIcon,
                                game: n,
                                pid: null == a ? void 0 : a.pid
                            }), e ? (0, l.jsx)(et.default, {
                                className: eg.liveBadge
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: i(eg.info, {
                                [eg.infoWithDrops]: null != t
                            }),
                            children: null != s ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(eo.default, {
                                    children: s
                                }), null != t && (0, l.jsx)("div", {
                                    className: eg.dropsBadgeWrapper,
                                    children: (0, l.jsx)(eu.TextBadge, {
                                        text: ep.default.Messages.DROPS_AVAILABLE,
                                        color: c.default.unsafe_rawColors.BRAND_500.css,
                                        className: eg.dropsBadge
                                    })
                                })]
                            }) : null
                        })]
                    })
                }
                renderScreenshare() {
                    let {
                        isStreaming: e,
                        dropsPartnerGame: t,
                        streamMetadata: n
                    } = this.props, {
                        title: a,
                        sanitizedTitle: s
                    } = (0, j.default)(n);
                    return (0, l.jsxs)("div", {
                        className: eg.gameWrapper,
                        children: [e ? (0, l.jsx)(U.default, {
                            title: s
                        }) : (0, l.jsx)(ed.default, {
                            look: ed.default.Looks.GRAY,
                            size: ed.default.Sizes.SMALL,
                            className: eg.liveIndicator
                        }), (0, l.jsxs)("div", {
                            className: i(eg.info, {
                                [eg.infoWithDrops]: null != t
                            }),
                            children: [(0, l.jsx)(eo.default, {
                                children: a
                            }), null != t && (0, l.jsx)("div", {
                                className: eg.dropsBadgeWrapper,
                                children: (0, l.jsx)(eu.TextBadge, {
                                    text: ep.default.Messages.DROPS_AVAILABLE,
                                    color: c.default.unsafe_rawColors.BRAND_500.css,
                                    className: eg.dropsBadge
                                })
                            })]
                        })]
                    })
                }
                renderEmbeddedActivity() {
                    let e;
                    let {
                        application: t,
                        embeddedActivity: n,
                        voiceChannel: a
                    } = this.props;
                    if (null == n || null == a) return null;
                    let s = {
                        start: n.connectedSince
                    };
                    return e = null != a.guild_id ? eE.Routes.CHANNEL(a.guild_id, a.id) : eE.Routes.CHANNEL(eE.ME, a.id), (0, l.jsxs)("div", {
                        className: eg.gameWrapper,
                        children: [(0, l.jsx)(J.default, {
                            className: eg.gameIcon,
                            game: t
                        }), (0, l.jsxs)("div", {
                            className: eg.info,
                            children: [(0, l.jsx)($.default, {
                                href: e,
                                onClick: this.handleApplicationLinkClick,
                                children: (0, l.jsx)(eo.default, {
                                    className: eg.activityName,
                                    children: n.name
                                })
                            }), (0, l.jsx)(eS, {
                                timestamps: s
                            })]
                        })]
                    })
                }
                render() {
                    let {
                        canGoLive: e,
                        embeddedActivity: t,
                        runningGame: n,
                        isStreaming: a,
                        streamMetadata: s,
                        className: r
                    } = this.props;
                    return a || (this.isJoinableActivity() || e) && (null != n || null != t) ? (0, l.jsx)("div", {
                        className: i(eg.panel, r),
                        children: (0, l.jsxs)("div", {
                            className: eg.body,
                            children: [(() => null == n || a && (null == s ? void 0 : s.pid) == null ? null != t ? this.renderEmbeddedActivity() : this.renderScreenshare() : this.renderGame())(), this.renderActions()]
                        })
                    }) : null
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isDropsActivityPanelTooltipOpen: !1,
                        showDropsSparkles: this.props.showDropsSparkles
                    }, this.startBroadcast = () => {
                        let {
                            stream: e,
                            voiceChannel: t,
                            runningGame: n
                        } = this.props;
                        null != t && null != n && (null == e ? (0, m.createBroadcastChannelOrStartStream)({
                            channelId: t.id,
                            pid: n.pid
                        }) : (0, T.startBroadcastForStream)((0, D.encodeStreamKey)(e), n.pid))
                    }, this.handleClickGoLiveButton = () => {
                        let {
                            guildId: e,
                            voiceChannel: t,
                            canStartBroadcast: a
                        } = this.props, s = null != t ? t.getGuildId() : e;
                        if ((null == t ? void 0 : t.isBroadcastChannel()) && a) {
                            (0, L.openStartBroadcastConfirmModal)(this.startBroadcast);
                            return
                        }(0, f.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("451863").then(n.bind(n, "451863"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                selectSource: !1,
                                guildId: s,
                                analyticsLocation: eE.AnalyticsLocations.ACTIVITY_PANEL
                            })
                        }).then(e => {
                            null != e && (this.modalKey = e)
                        })
                    }, this.handleClickStopStreamingButton = () => {
                        let {
                            stream: e,
                            voiceChannel: t,
                            userId: n
                        } = this.props;
                        if ((null == t ? void 0 : t.isBroadcastChannel()) && (null == t ? void 0 : t.isOwner(n))) {
                            (0, L.openStopBroadcastConfirmModal)(() => (0, F.default)(e));
                            return
                        }(0, F.default)(e)
                    }, this.handleClickInviteButton = () => {
                        let {
                            activity: e,
                            analyticsContext: t
                        } = this.props;
                        o(null != e, "Received null activity"), ec.default.track(eE.AnalyticEvents.OPEN_MODAL, {
                            type: "Send Join Invite",
                            application_id: e.application_id,
                            location: t.location
                        }), (0, h.openModal)(e, !1)
                    }, this.handleClickDropsButton = () => {
                        let {
                            dropsPartnerGame: e,
                            dropsTooltipAction: t,
                            userId: n
                        } = this.props;
                        if (null == e) return;
                        let l = (0, O.getDrop)(e);
                        null != l && (ec.default.track(eE.AnalyticEvents.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
                            user_id: n,
                            drops_quest_id: l.dropsQuestId,
                            game_id: l.dropsGameId,
                            game_name: l.title.toLowerCase(),
                            show_sparkles: this.state.showDropsSparkles,
                            tooltip_action: t
                        }), this.setState({
                            isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
                            showDropsSparkles: !1
                        }))
                    }, this.handleClickLeaveEmbeddedActivityButton = (e, t) => () => {
                        (0, _.stopEmbeddedActivity)({
                            channelId: t.id,
                            applicationId: e
                        })
                    }, this.renderClipsButton = () => {
                        let {
                            stream: e
                        } = this.props;
                        return null == e ? null : (0, l.jsx)(R.default, {})
                    }, this.handleApplicationLinkClick = () => {
                        var e;
                        let {
                            voiceChannel: t,
                            embeddedActivity: n
                        } = this.props;
                        o(null != t, "Channel is null during navigation click"), o(null != n, "Activity null during navigation click"), C.default.selectParticipant(t.id, n.application_id), E.default.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eE.ME, t.id)
                    }
                }
            }
            var eI = (0, g.default)(function(e) {
                let {
                    guildId: t,
                    ...n
                } = e, a = (0, u.useStateFromStores)([w.default], () => w.default.getId()), s = (0, u.useStateFromStores)([Z.default, q.default], () => (0, P.default)(Z.default, q.default)), i = (0, u.useStateFromStores)([Q.default, V.default], () => V.default.getChannel(Q.default.getVoiceChannelId())), [r, o] = (0, u.useStateFromStoresArray)([B.default], () => [B.default.getCurrentUserActiveStream(), B.default.getStreamerActiveStreamMetadata()]), c = (0, u.useStateFromStores)([S.default], () => S.default.useReducedMotion), f = (0, u.useStateFromStores)([v.default], () => v.default.getActivityPanelTooltipAction()), {
                    partnerGame: h,
                    dropsActivityPanelExperienceBlocked: C,
                    showDropsSparkles: E
                } = (0, x.useActivityPanelDrop)(em.PartnerGame.FORTNITE, s, d.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP, d.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP), [m, p, g] = (0, u.useStateFromStoresArray)([Y.default, W.default, I.default, H.default, k.default], () => {
                    let e = !1,
                        n = null;
                    if (null != i) e = b.canStreamInChannel(i, Y.default, W.default, !1), n = I.default.getSelfEmbeddedActivityForChannel(i.id);
                    else if (null != t) {
                        let n = b.getStreamEligibleChannels(k.default.getChannels(t), Y.default, W.default);
                        e = n.length > 0
                    }
                    let l = null;
                    return null != o && null != o.id ? l = H.default.getGame(o.id) : null != s ? l = H.default.getGameByGameData(s) : null != n && (l = H.default.getGame(n.application_id)), [e, n, l]
                }), _ = (0, u.useStateFromStores)([K.default], () => (0, G.default)(K.default) && (0, ef.isWindows)()), N = (0, u.useStateFromStores)([z.default], () => null != a ? z.default.findActivity(a, e => e.type === eE.ActivityTypes.PLAYING) : null), T = null != r && r.ownerId === a && r.state !== eE.ApplicationStreamStates.ENDED, L = (0, u.useStateFromStores)([X.default], () => X.default.getBroadcast()), R = (0, A.default)() && null != s;
                return (0, l.jsx)(e_, {
                    ...n,
                    guildId: t,
                    canGoLive: _,
                    activity: N,
                    embeddedActivity: p,
                    showDropsSparkles: E,
                    dropsPartnerGame: h,
                    dropsActivityPanelExperienceBlocked: C,
                    userId: a,
                    runningGame: s,
                    application: g,
                    useReducedMotion: c,
                    isStreaming: T,
                    voiceChannel: i,
                    canStream: m,
                    dropsTooltipAction: f,
                    stream: r,
                    streamMetadata: o,
                    broadcast: L,
                    canStartBroadcast: R
                })
            })
        },
        974165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("151426"),
                i = n("77078"),
                r = n("990766"),
                o = n("716241"),
                u = n("713726"),
                d = n("9759"),
                c = n("705565"),
                f = n("44723"),
                h = n("503417"),
                C = n("162236"),
                E = n("509802"),
                m = n("374014"),
                p = n("375202"),
                g = n("373469"),
                S = n("271938"),
                _ = n("568307"),
                I = n("18494"),
                N = n("101125"),
                T = n("703370"),
                A = n("774223"),
                L = n("962541"),
                R = n("49111"),
                x = n("782340");

            function v() {
                let e = (0, a.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()),
                    t = (0, a.useStateFromStores)([S.default], () => S.default.getId()),
                    n = (0, a.useStateFromStores)([_.default, T.default], () => (0, p.default)(_.default, T.default)),
                    {
                        canBroadcast: v
                    } = d.default.useExperiment({
                        location: "broadcast_button_rtc_panel_no_track"
                    }, {
                        autoTrackExposure: !1
                    }),
                    O = (0, c.default)() && null != n,
                    M = (0, a.useStateFromStores)([N.default], () => null != N.default.getBroadcast()),
                    y = (0, a.useStateFromStoresArray)([g.default], () => g.default.getAllActiveStreams());
                if (!O && !M) return null;
                if (d.default.trackExposure({
                        location: "broadcast_button_rtc_panel"
                    }), !v) return null;
                let D = [];
                O && D.push(s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP);
                let b = () => {
                        o.default.trackWithMetadata(R.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED, {
                            game_id: null == n ? void 0 : n.id
                        })
                    },
                    G = () => {
                        if (O) {
                            let l = y.find(e => e.ownerId === t);
                            if (null == l)(0, C.openBroadcastingPrivacySettingsModal)(x.default.Messages.START_BROADCASTING, x.default.Messages.START_BROADCASTING_CTA, () => {
                                (0, r.createBroadcastChannelOrStartStream)({
                                    pid: null == n ? void 0 : n.pid,
                                    channelId: e
                                })
                            });
                            else(0, u.startBroadcastForStream)((0, m.encodeStreamKey)(l), null == n ? void 0 : n.pid)
                        } else(0, u.stopBroadcast)()
                    },
                    j = e => (0, l.jsx)(L.default, {
                        tooltipText: O ? x.default.Messages.START_BROADCASTING : x.default.Messages.STOP_BROADCASTING,
                        onClick: () => {
                            G(), null == e || e()
                        },
                        onMouseEnter: b,
                        icon: O ? A.default : () => (0, l.jsx)(h.default, {
                            width: 20,
                            height: 20
                        })
                    }),
                    U = e => (0, l.jsx)(f.default, {
                        markAsDismissed: e
                    });
                return (0, l.jsx)(E.default, {
                    contentTypes: D,
                    bypassAutoDismiss: !0,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: n
                        } = e;
                        return t === s.DismissibleContent.BROADCASTING_BROADCASTER_TOOLTIP ? (0, l.jsx)(i.Popout, {
                            position: "top",
                            align: "center",
                            renderPopout: () => U(n),
                            shouldShow: !0,
                            children: () => j(n)
                        }) : j()
                    }
                })
            }
        },
        733335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("234755"),
                r = n("101125"),
                o = n("474571"),
                u = n("962541"),
                d = n("782340");

            function c() {
                let e = (0, a.useStateFromStores)([r.default], () => r.default.getBroadcast());
                return null == e ? null : (0, l.jsx)(s.Popout, {
                    position: "top",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(i.default, {
                            onClose: t
                        })
                    },
                    animation: s.Popout.Animation.FADE,
                    children: e => (0, l.jsx)(u.default, {
                        ...e,
                        tooltipText: d.default.Messages.BROADCAST_SETTINGS,
                        icon: o.default
                    })
                })
            }
        },
        254358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-08_trial_notif_to_nitro_home",
                label: "Trial Notification to Nitro Home",
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
            var s = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.useExperiment({
                    location: "1"
                }, {
                    autoTrackExposure: e,
                    disable: t
                })
            }
        },
        567593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("394846"),
                o = n("446674"),
                u = n("77078"),
                d = n("272030"),
                c = n("454286"),
                f = n("485328"),
                h = n("123225"),
                C = n("940365"),
                E = n("42203"),
                m = n("952451"),
                p = n("305961"),
                g = n("660478"),
                S = n("18494"),
                _ = n("316133"),
                I = n("822332"),
                N = n("409082"),
                T = n("476765"),
                A = n("659500"),
                L = n("701909"),
                R = n("104589"),
                x = n("116460"),
                v = n("139038"),
                O = n("49111"),
                M = n("782340"),
                y = n("587572");
            let D = {
                    bottom: 10
                },
                b = () => (0, l.jsxs)("div", {
                    className: y.emptyState,
                    children: [(0, l.jsx)("div", {
                        className: y.emptyStateNote,
                        children: M.default.Messages.QUICKSWITCHER_EMPTY_TEXT
                    }), (0, l.jsx)("div", {
                        className: y.emptyStateCTA,
                        children: (0, l.jsx)(u.Anchor, {
                            href: L.default.getArticleURL(O.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL),
                            children: M.default.Messages.QUICKSWITCHER_EMPTY_CTA
                        })
                    })]
                });
            class G extends a.Component {
                render() {
                    let e = p.default.getGuild(this.props.channel.guild_id);
                    return (0, l.jsx)(N.Channel, {
                        ...this.props,
                        children: (0, l.jsx)("div", {
                            className: y.miscContainer,
                            children: null != e ? e.name : null
                        })
                    })
                }
            }
            G.defaultProps = {
                unread: !1
            };
            let j = o.default.connectStores([g.default, E.default], e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        unread: g.default.hasUnread(t.id),
                        mentions: g.default.getMentionCount(t.id),
                        category: E.default.getChannel(t.parent_id)
                    }
                })(G),
                U = o.default.connectStores([_.default], e => {
                    let {
                        channel: t
                    } = e;
                    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
                    return {
                        voiceStates: _.default.getVoiceStates(t.guild_id)[t.id]
                    }
                })(G),
                P = o.default.connectStores([m.default], e => {
                    let {
                        guild: t
                    } = e;
                    return {
                        unread: m.default.hasUnread(t.id)
                    }
                })(N.Guild),
                F = o.default.connectStores([g.default], e => {
                    let {
                        channel: t
                    } = e;
                    return {
                        mentions: g.default.getMentionCount(t.id)
                    }
                })(N.GroupDM),
                B = o.default.connectStores([E.default, g.default], e => {
                    let {
                        user: t
                    } = e, n = E.default.getDMFromUserId(t.id);
                    return {
                        mentions: null != n ? g.default.getMentionCount(n) : 0
                    }
                })(N.User);

            function w(e, t, n) {
                return (0, l.jsx)(u.Tooltip, {
                    text: n,
                    children: e => (0, l.jsx)("span", {
                        ...e,
                        className: y.autocompleteQuerySymbol,
                        children: t
                    })
                }, e)
            }
            class V extends a.PureComponent {
                componentDidMount() {
                    f.default.disable(), f.default.enableTemp(c.SETTINGS_LAYERS_LAYOUT)
                }
                componentWillUnmount() {
                    f.default.disableTemp(), f.default.enable()
                }
                componentDidUpdate(e, t) {
                    let {
                        mouseFocusDisabled: n,
                        query: l
                    } = this.state, {
                        selectedIndex: a
                    } = this.props, {
                        current: s
                    } = this.scrollerRef;
                    null != s && (l !== t.query ? s.scrollTo({
                        to: 0
                    }) : n && a >= 0 && s.scrollToIndex({
                        section: 0,
                        row: a,
                        padding: 10
                    }))
                }
                close() {
                    (0, R.hide)()
                }
                search(e) {
                    this.setState({
                        query: e
                    }), (0, R.search)(e)
                }
                renderInput() {
                    let {
                        selectedIndex: e,
                        results: t
                    } = this.props, {
                        query: n
                    } = this.state, a = t.length > 0 && "" !== n;
                    return (0, l.jsx)(u.FocusRing, {
                        children: (0, l.jsx)("input", {
                            className: y.input,
                            "aria-label": M.default.Messages.QUICK_SWITCHER,
                            ref: this.inputRef,
                            type: "text",
                            role: "combobox",
                            "aria-controls": this._listId,
                            "aria-expanded": a,
                            "aria-activedescendant": a ? this.getRowId(e) : void 0,
                            "aria-autocomplete": "list",
                            placeholder: M.default.Messages.QUICKSWITCHER_PLACEHOLDER,
                            onChange: this.handleInputChange,
                            onKeyDown: this.handleKeyDown,
                            value: this.state.query,
                            spellCheck: !1,
                            autoFocus: !0
                        })
                    })
                }
                renderSection() {
                    return null
                }
                renderResults() {
                    let {
                        query: e
                    } = this.state, {
                        results: t
                    } = this.props;
                    return 0 === t.length && e.length > 0 ? (0, l.jsx)(b, {}) : 0 === t.length ? null : (0, l.jsx)(u.ListAuto, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": M.default.Messages.QUICK_SWITCHER_RESULTS_LABEL,
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: D.bottom,
                        sections: [t.length],
                        className: y.scroller,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection
                    })
                }
                focusNode(e) {
                    A.ComponentDispatch.dispatch(O.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, {
                        node: e
                    })
                }
                getRowId(e) {
                    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
                }
                renderProtip() {
                    return (0, l.jsx)(I.default, {
                        className: i(y.protip, {
                            [y.hasContent]: this.state.query.length > 0
                        }),
                        type: I.default.Types.INLINE,
                        children: M.default.Messages.QUICKSWITCHER_PROTIP.format({
                            userSymbolHook: (e, t) => w(t, h.AutocompleterQuerySymbols.USER, M.default.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
                            textChannelSymbolHook: (e, t) => w(t, h.AutocompleterQuerySymbols.TEXT_CHANNEL, M.default.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS),
                            voiceChannelSymbolHook: (e, t) => w(t, h.AutocompleterQuerySymbols.VOICE_CHANNEL, M.default.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS),
                            guildSymbolHook: (e, t) => w(t, h.AutocompleterQuerySymbols.GUILD, M.default.Messages.QUICKSWITCHER_PROTIP_GUILDS),
                            helpdeskArticle: L.default.getArticleURL(O.HelpdeskArticles.QUICK_SWITCHER_TUTORIAL)
                        })
                    })
                }
                renderTutorial() {
                    let {
                        query: e
                    } = this.state, {
                        seenTutorial: t,
                        results: n
                    } = this.props;
                    return t ? null : (0, l.jsx)(v.default, {
                        hasQuery: e.length > 0 && n.length > 0
                    })
                }
                render() {
                    return (0, l.jsx)(u.ModalRoot, {
                        "aria-label": M.default.Messages.QUICK_SWITCHER,
                        size: u.ModalSize.DYNAMIC,
                        transitionState: this.props.transitionState,
                        className: i(y.container, r.isMobile && y.mobileContainer),
                        fullscreenOnMobile: !1,
                        children: (0, l.jsxs)("div", {
                            className: i(y.quickswitcher, r.isMobile && y.mobileQuickswitcher),
                            onMouseMove: this.handleMouseMove,
                            children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = a.createRef(), this.inputRef = a.createRef(), this._listId = (0, T.uid)(), this.state = {
                        query: this.props.query,
                        mouseFocusDisabled: !0
                    }, this.handleInputChange = () => {
                        let {
                            current: e
                        } = this.inputRef;
                        null != e && this.search(e.value)
                    }, this.handleMouseMove = () => {
                        let {
                            mouseFocusDisabled: e
                        } = this.state;
                        !1 !== e && this.setState({
                            mouseFocusDisabled: !1
                        })
                    }, this.focusResult = e => {
                        !this.state.mouseFocusDisabled && (0, R.selectResult)(this.props.results.indexOf(e))
                    }, this.selectResult = e => {
                        (0, R.switchToResult)(e)
                    }, this.handleContextMenu = e => {
                        let t = this.props.results[this.props.selectedIndex];
                        switch (t.type) {
                            case h.AutocompleterResultTypes.GUILD:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("374705").then(n.bind(n, "374705"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        guild: t.record,
                                        onSelect: R.hide,
                                        hideSettings: !0
                                    })
                                });
                            case h.AutocompleterResultTypes.TEXT_CHANNEL:
                            case h.AutocompleterResultTypes.VOICE_CHANNEL:
                                let a = t.record,
                                    s = p.default.getGuild(a.getGuildId());
                                if (null == s) return;
                                switch (a.type) {
                                    case O.ChannelTypes.GUILD_TEXT:
                                    case O.ChannelTypes.GUILD_ANNOUNCEMENT:
                                    case O.ChannelTypes.GUILD_FORUM:
                                    case O.ChannelTypes.GUILD_MEDIA:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("327241").then(n.bind(n, "327241"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: R.hide
                                            })
                                        });
                                    case O.ChannelTypes.GUILD_VOICE:
                                    case O.ChannelTypes.GUILD_STAGE_VOICE:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("168003").then(n.bind(n, "168003"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: R.hide
                                            })
                                        });
                                    case O.ChannelTypes.ANNOUNCEMENT_THREAD:
                                    case O.ChannelTypes.PUBLIC_THREAD:
                                    case O.ChannelTypes.PRIVATE_THREAD:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("994827").then(n.bind(n, "994827"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                onSelect: R.hide
                                            })
                                        });
                                    case O.ChannelTypes.GUILD_STORE:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("599943").then(n.bind(n, "599943"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a,
                                                guild: s,
                                                onSelect: R.hide
                                            })
                                        });
                                    case O.ChannelTypes.GUILD_DIRECTORY:
                                        return (0, d.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await n.el("425630").then(n.bind(n, "425630"));
                                            return t => (0, l.jsx)(e, {
                                                ...t,
                                                channel: a
                                            })
                                        })
                                }
                                break;
                            case h.AutocompleterResultTypes.GROUP_DM:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("493015").then(n.bind(n, "493015"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        channel: t.record,
                                        selected: S.default.getChannelId() === t.record.id,
                                        onSelect: R.hide
                                    })
                                });
                            case h.AutocompleterResultTypes.USER:
                                return (0, d.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("406784").then(n.bind(n, "406784"));
                                    return n => (0, l.jsx)(e, {
                                        ...n,
                                        user: t.record,
                                        onSelect: R.hide
                                    })
                                })
                        }
                    }, this.handleKeyDown = e => {
                        let {
                            mouseFocusDisabled: t,
                            query: n
                        } = this.state, {
                            results: l
                        } = this.props;
                        !1 === t && this.setState({
                            mouseFocusDisabled: !0
                        });
                        let a = e.key.toLowerCase(),
                            {
                                selectedIndex: s
                            } = this.props;
                        switch (a) {
                            case "escape":
                                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, R.hide)();
                                return;
                            case "k":
                                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, R.hide)());
                                return;
                            case "enter": {
                                if (-1 === s) return;
                                if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
                                let t = l[s];
                                null != t && this.selectResult(t);
                                return
                            }
                            case "arrowup":
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.UP, s, l);
                                break;
                            case "arrowdown":
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.DOWN, s, l);
                                break;
                            case "n":
                                if (!e.ctrlKey) return;
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.DOWN, s, l);
                                break;
                            case "p":
                                if (!e.ctrlKey) return;
                                s = (0, h.findNextSelectedResult)(h.FindResultDirections.UP, s, l);
                                break;
                            default:
                                return
                        }
                        e.preventDefault(), (0, R.selectResult)(s)
                    }, this.renderRow = e => {
                        let {
                            row: t
                        } = e, n = this.props.results[t], {
                            selectedIndex: a
                        } = this.props, {
                            showScores: s
                        } = C.default.getCurrentConfig({
                            location: "62f4be_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        switch (n.type) {
                            case h.AutocompleterResultTypes.HEADER:
                                return (0, l.jsx)(N.Header, {
                                    children: n.record.text
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.TEXT_CHANNEL:
                                return (0, l.jsx)(j, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.VOICE_CHANNEL:
                                return (0, l.jsx)(U, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.GUILD:
                                return (0, l.jsx)(P, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    guild: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.USER:
                                return (0, l.jsx)(B, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    user: n.record,
                                    comparator: n.comparator,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.GROUP_DM:
                                return (0, l.jsx)(F, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    channel: n.record,
                                    score: s ? n.score : void 0
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.APPLICATION:
                                return (0, l.jsx)(N.Application, {
                                    id: this.getRowId(t),
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    application: n.record
                                }, "".concat(n.type, "-").concat(n.record.id));
                            case h.AutocompleterResultTypes.LINK:
                                return (0, l.jsx)(N.Link, {
                                    focused: a >= 0 && t === a,
                                    onClick: () => this.selectResult(n),
                                    onMouseEnter: () => this.focusResult(n),
                                    onFocus: this.focusNode,
                                    onContextMenu: this.handleContextMenu,
                                    link: n.record,
                                    score: s ? n.score : void 0,
                                    id: this.getRowId(t)
                                }, "".concat(n.type, "-").concat(n.record.id));
                            default:
                                return null
                        }
                    }
                }
            }

            function H(e) {
                let t = (0, o.useStateFromStoresObject)([x.default], () => x.default.getProps());
                return (0, l.jsx)(V, {
                    ...t,
                    ...e
                })
            }
        },
        359477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("913144"),
                i = n("316272"),
                r = n("104589"),
                o = n("116460"),
                u = n("567593");
            let d = "QUICK_SWITCHER_MODAL_KEY";
            class c extends i.default {
                _initialize() {
                    s.default.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
                }
                _terminate() {
                    s.default.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
                }
                handleShow() {
                    o.default.isOpen() && !(0, a.hasModalOpen)(d) && (0, a.openModal)(e => (0, l.jsx)(u.default, {
                        ...e
                    }), {
                        modalKey: d,
                        instant: !0,
                        onCloseCallback: r.hide
                    })
                }
                handleHide() {
                    (0, a.closeModal)(d)
                }
            }
            var f = new c
        },
        139038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("862337"),
                u = n("659500"),
                d = n("49111"),
                c = n("782340"),
                f = n("815815");
            let h = {
                friction: 15,
                tension: 100
            };
            class C extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        shown: !0
                    }), u.ComponentDispatch.subscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
                }
                componentWillUnmount() {
                    this.focusTimeout.stop(), u.ComponentDispatch.unsubscribe(d.ComponentActions.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
                }
                componentDidUpdate() {
                    let {
                        hasQuery: e
                    } = this.props;
                    !e && this.springTo(0)
                }
                springTo(e) {
                    r.default.spring(this.state.translateY, {
                        toValue: Math.min(e, 250),
                        ...h
                    }).start()
                }
                renderArrowGroup(e) {
                    return (0, l.jsxs)("div", {
                        className: i(f.arrowGroup, e),
                        children: [(0, l.jsx)(r.default.div, {
                            className: i(f.arrowContainer, f.horizontal),
                            style: this.getStyle(),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("446963"),
                                className: f.arrowIcon
                            })
                        }), (0, l.jsx)("div", {
                            className: i(f.arrowContainer, f.diag1),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("423739"),
                                className: f.arrowIcon
                            })
                        }), (0, l.jsx)("div", {
                            className: i(f.arrowContainer, f.diag2),
                            children: (0, l.jsx)("img", {
                                alt: "",
                                src: n("22079"),
                                className: f.arrowIcon
                            })
                        })]
                    })
                }
                renderContent() {
                    return (0, l.jsxs)("div", {
                        className: f.tutorialMessages,
                        children: [(0, l.jsx)("div", {
                            className: f.searchMessage,
                            children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SEARCH
                        }), (0, l.jsx)("div", {
                            className: f.selectMessage,
                            children: c.default.Messages.QUICKSWITCHER_TUTORIAL_MESSAGE_SELECT
                        })]
                    })
                }
                render() {
                    let {
                        hasQuery: e
                    } = this.props, {
                        shown: t
                    } = this.state;
                    return (0, l.jsxs)("div", {
                        ref: this.rootRef,
                        className: i(f.tutorial, {
                            [f.shown]: t,
                            [f.hasQuery]: e
                        }),
                        children: [this.renderContent(), this.renderArrowGroup(f.left), this.renderArrowGroup(f.right)]
                    })
                }
                getStyle() {
                    return {
                        transform: [{
                            translateY: this.state.translateY.interpolate({
                                inputRange: [0, 250],
                                outputRange: ["0px", "".concat(250, "px")]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shown: !1,
                        translateY: new r.default.Value(0)
                    }, this.rootRef = a.createRef(), this.focusTimeout = new o.Timeout, this.handleResultFocus = e => {
                        let {
                            node: t
                        } = e;
                        this.focusTimeout.start(1, () => {
                            if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                                let {
                                    top: e
                                } = this.rootRef.current.getBoundingClientRect(), {
                                    top: n
                                } = t.getBoundingClientRect();
                                this.springTo(Math.abs(e - n) - 118 + 9)
                            } else this.springTo(0)
                        })
                    }
                }
            }
            var E = C
        },
        838857: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isValidGuildId: function() {
                    return i
                },
                isValidChannelId: function() {
                    return r
                }
            });
            var l = n("49111"),
                a = n("724210");
            let s = /^\d+$/;

            function i(e) {
                return null != e && (!!(e === l.ME || e === l.FAVORITES || s.test(e)) || !1)
            }

            function r(e) {
                return !!(null == e || s.test(e) || (0, a.isStaticChannelRoute)(e)) || !1
            }
        },
        222871: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("64202"),
                i = n("669491"),
                r = n("77078");

            function o(e) {
                let t = (0, a.useRef)(null),
                    [n, o] = (0, a.useState)(null),
                    [u] = (0, a.useState)(() => new s.TimelineDataSeries),
                    d = (0, r.useToken)(i.default.colors.BACKGROUND_PRIMARY).hsl(),
                    c = (0, r.useToken)(i.default.colors.TEXT_NORMAL).hsl(),
                    f = (0, r.useToken)(i.default.colors.BACKGROUND_ACCENT).hsl(),
                    h = (0, r.useToken)(i.default.unsafe_rawColors.BRAND_500).hsl();
                (0, a.useEffect)(() => {
                    var e;
                    let n = t.current;
                    if (null == n) return;
                    let l = new s.TimelineGraphView(n, null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1);
                    l.backgroundColor = d, l.textColor = c, l.gridColor = f, l.timeOptions = {
                        timeStyle: "short"
                    }, l.fontFamily = "gg sans", l.fontSize = 11, u.setColor(h), l.addDataSeries(u), l.updateEndDate(), o(l)
                }, [t, d, h, f, c, u]), u.setPoints(e.dataPoints), null == n || n.updateEndDate();
                let C = {
                    width: e.width,
                    height: e.height
                };
                return (0, l.jsx)("canvas", {
                    style: C,
                    width: e.width,
                    height: e.height,
                    ref: t
                }, "canvas")
            }
        },
        679864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("77078"),
                o = n("224216"),
                u = n("782340"),
                d = n("153934");

            function c(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsxs)("svg", {
                    className: t,
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 48 48",
                    children: [(0, l.jsx)("g", {
                        filter: "url(#a)",
                        children: (0, l.jsx)("path", {
                            d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                            fill: "currentColor"
                        })
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsxs)("filter", {
                            id: "a",
                            x: "0",
                            y: "0",
                            width: "48",
                            height: "48",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [(0, l.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }), (0, l.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, l.jsx)("feOffset", {
                                dy: "8"
                            }), (0, l.jsx)("feGaussianBlur", {
                                stdDeviation: "8"
                            }), (0, l.jsx)("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            }), (0, l.jsx)("feBlend", {
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_605_72103"
                            }), (0, l.jsx)("feBlend", {
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_605_72103",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
            let f = [{
                    x: .5,
                    y: .05
                }, {
                    x: .95,
                    y: .2
                }, {
                    x: 1,
                    y: .5
                }, {
                    x: .95,
                    y: .8
                }, {
                    x: .5,
                    y: .95
                }, {
                    x: .05,
                    y: .8
                }, {
                    x: 0,
                    y: .5
                }, {
                    x: .05,
                    y: .2
                }],
                h = f.length;

            function C(e, t, n) {
                let l = e * t;
                return e > .5 ? l - n : e < .5 ? l : l - n / 2
            }
            let E = (e, t) => {
                let n = Math.abs(t.x),
                    l = Math.abs(t.y),
                    a = Math.atan2(l, n) * (180 / Math.PI),
                    s = e / 2 - 28.8;
                return {
                    x: Math.max(s * Math.cos(2 * Math.PI * a / 360), 0),
                    y: Math.max(s * Math.sin(2 * Math.PI * a / 360), 0)
                }
            };
            var m = a.memo(function(e) {
                let {
                    wheelWidth: t,
                    wheelHeight: n,
                    itemWidth: m,
                    itemHeight: p,
                    showDeadZoneIndicator: g,
                    activeItem: S,
                    onItemSelect: _,
                    onItemAction: I,
                    interactive: N = !0,
                    children: T
                } = e, A = a.useRef(null), L = a.useRef([]), R = a.useRef(!1), x = a.useRef(null), [v, O] = a.useState(0), [M, y] = a.useState({
                    x: 0,
                    y: 0
                }), D = Math.abs(M.x) + Math.abs(M.y) > 0, b = a.useMemo(() => i.chunk(T, h), [T]), G = a.useCallback((e, t) => {
                    null == L.current[v] ? L.current[v] = [] : L.current[v][t] = e
                }, [v]), j = a.useCallback((e, t) => {
                    x.current = t, _(h * e + t)
                }, [_]), U = a.useCallback(() => {
                    x.current = null, _(null)
                }, [_]), P = a.useCallback(e => {
                    U(), R.current = e
                }, [U]), F = a.useCallback((e, t, n) => {
                    if (R.current) {
                        y({
                            x: 0,
                            y: 0
                        });
                        return
                    }
                    let l = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        },
                        a = l.x < 0,
                        s = l.y < 0,
                        i = E(n, l),
                        r = a ? Math.max(l.x, -i.x) : Math.min(l.x, i.x),
                        o = s ? Math.max(l.y, -i.y) : Math.min(l.y, i.y);
                    y({
                        x: r / 2,
                        y: o / 2
                    })
                }, []), B = a.useCallback(e => {
                    null != x.current && (e.preventDefault(), e.stopPropagation(), null == I || I(h * v + x.current))
                }, [I, v]), w = a.useMemo(() => (0, s.throttle)(e => {
                    if (null == A.current) return;
                    let l = A.current.getBoundingClientRect(),
                        a = l.left + l.width / 2,
                        s = l.top + l.height / 2,
                        i = {
                            x: a,
                            y: s
                        },
                        r = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if (F(r, i, Math.max(t, n)), R.current) {
                        null != S && U();
                        return
                    }
                    let u = (0, o.extendLineSegment)(i, r, Math.max(t, n));
                    for (let e = 0; e < L.current[v].length; e++) {
                        let t = L.current[v][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.doesLineSegmentIntersectRectangle)(i, u, n)) {
                            j(v, e);
                            return
                        }
                    }
                    U()
                }, 16), [S, F, U, j, v, n, t]), V = a.useCallback(e => {
                    if (!N) return;
                    let t = e.deltaY > 0 ? 1 : -1,
                        n = v + t;
                    n >= 0 && n < b.length && (null != x.current && (b[n].length > x.current ? j(n, x.current) : U()), O(n))
                }, [N, v, b, j, U]), H = a.useMemo(() => b[v].map((e, a) => {
                    let s = f[a];
                    if (null == s) throw Error("Too many items supplied ".concat(T.length, " expected max of ").concat(f.length));
                    let i = C(s.x, t, m),
                        r = C(s.y, n, p);
                    return (0, l.jsx)("div", {
                        ref: e => G(e, a),
                        className: d.chatWheelItem,
                        style: {
                            left: i,
                            top: r,
                            width: m,
                            height: p
                        },
                        children: e
                    }, a)
                }), [b, v, t, m, n, p, T.length, G]);
                return (0, l.jsx)(r.Clickable, {
                    className: d.chatWheelMouseInput,
                    onMouseMove: w,
                    onWheel: V,
                    onClick: B,
                    children: (0, l.jsxs)("div", {
                        ref: A,
                        className: d.chatWheel,
                        style: {
                            width: t,
                            height: n
                        },
                        children: [(0, l.jsxs)("svg", {
                            className: d.chatWheelBackground,
                            viewBox: "0 0 288 288",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, l.jsxs)("filter", {
                                id: "soundboard-wheel-background-shadow",
                                x: "0",
                                y: "0",
                                width: "288",
                                height: "288",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha"
                                }), (0, l.jsx)("feOffset", {
                                    dy: "8"
                                }), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "8"
                                }), (0, l.jsx)("feColorMatrix", {
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                                }), (0, l.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382"
                                }), (0, l.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape"
                                })]
                            }), (0, l.jsxs)("g", {
                                filter: "url(#soundboard-wheel-background-shadow)",
                                children: [(0, l.jsx)("circle", {
                                    className: d.chatWheelBackground,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32"
                                }), g && (0, l.jsx)("circle", {
                                    className: d.chatWheelDeadZone,
                                    onMouseEnter: () => P(!0),
                                    onMouseLeave: () => P(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8
                                }), D && (0, l.jsx)("circle", {
                                    className: d.chatWheelCenter,
                                    cx: 144 + M.x,
                                    cy: 144 + M.y,
                                    r: 28.8
                                })]
                            }), g && (0, l.jsx)("circle", {
                                className: d.chatWheelDeadZone,
                                onMouseEnter: () => P(!0),
                                onMouseLeave: () => P(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none"
                            })]
                        }), (0, l.jsxs)("div", {
                            className: d.innerContent,
                            children: [g && (0, l.jsx)(c, {
                                className: d.chatWheelDeadZoneIcon
                            }), N && b.length > 1 ? (0, l.jsx)("div", {
                                className: d.paginationHint,
                                children: u.default.Messages.CHAT_WHEEL_PAGINATION_HINT
                            }) : null]
                        }), H]
                    })
                })
            })
        },
        570413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openSoundboardInOverlay: function() {
                    return r
                },
                closeSoundboardInOverlay: function() {
                    return o
                }
            }), n("37983"), n("884691");
            var l = n("913144");
            n("292508"), n("383294"), n("42203"), n("945956");
            var a = n("860957");
            n("50885"), n("350501");
            var s = n("846325");
            n("49111"), n("782340");
            let i = {
                width: s.SoundboardWheelSize.width,
                height: s.SoundboardWheelSize.height,
                resizable: !1,
                movable: !1,
                alwaysOnTop: !0,
                frame: !1,
                transparent: !0,
                hasShadow: !1,
                skipTaskbar: !0,
                menubar: !0,
                backgroundColor: "#00000000",
                titleBarStyle: null
            };

            function r(e, t) {
                l.default.dispatch({
                    type: "OVERLAY_SET_INPUT_LOCKED",
                    locked: !1,
                    pid: t
                }), l.default.dispatch({
                    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
                    pid: t,
                    enabled: !0,
                    keepOpen: e
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
                    pid: e,
                    enabled: !1
                }), !a.default.isInputLocked(e) && l.default.dispatch({
                    type: "OVERLAY_SET_INPUT_LOCKED",
                    locked: !0,
                    pid: e
                })
            }
            s.SoundboardWheelSize.padding, i.width, i.height
        },
        350501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("759843"),
                i = n("249654"),
                r = n("446674"),
                o = n("812204"),
                u = n("685665"),
                d = n("428958"),
                c = n("872173"),
                f = n("945956"),
                h = n("305122"),
                C = n("235004"),
                E = n("78581"),
                m = n("24156"),
                p = n("774473"),
                g = n("679864"),
                S = n("553372"),
                _ = n("846325"),
                I = n("11099");

            function N(e) {
                let {
                    guildId: t,
                    channel: n,
                    width: N,
                    height: T,
                    keepOpen: A,
                    interactive: L = !0,
                    analyticsSource: R,
                    onClose: x
                } = e, v = (0, p.useSortedGuildIdsForSoundboard)(n, !0), O = function(e) {
                    let [t, n] = (0, r.useStateFromStoresArray)([C.default], () => [C.default.getSounds(), C.default.getFavorites()]);
                    return a.useMemo(() => {
                        let l = [],
                            a = [...e, _.DEFAULT_SOUND_GUILD_ID],
                            s = (e, a) => {
                                var s, r;
                                let o = null !== (r = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => i.default.compare(e.soundId, t.soundId))) && void 0 !== r ? r : [];
                                for (let e of o) {
                                    let t = n.has(e.soundId),
                                        s = t && a || !t && !a;
                                    s && l.push(e)
                                }
                            };
                        return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l
                    }, [t, n, e])
                }(v), M = (0, m.useGuildIdsToFetchSoundsFor)(), y = a.useRef(null), [D, b] = a.useState(void 0), G = (0, r.useStateFromStores)([f.default], () => f.default.getMediaSessionId()), {
                    analyticsLocations: j,
                    AnalyticsLocationProvider: U
                } = (0, u.default)(o.default.SOUNDBOARD_WHEEL), P = a.useCallback(e => {
                    (0, E.playSound)(e, n.id, j), x()
                }, [j, n.id, x]);
                a.useEffect(() => {
                    h.maybeFetchSoundboardSounds(), c.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), a.useEffect(() => {
                    0 === O.length && 0 === M.length && x()
                }, [O.length, M, x]), a.useEffect(() => () => {
                    let e = y.current;
                    !A && null != e && P(e)
                }, [A, P]), (0, d.default)({
                    type: s.ImpressionTypes.POPOUT,
                    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: R,
                        guild_id: t,
                        media_session_id: G
                    }
                }, {
                    disableTrack: !L
                });
                let F = a.useCallback(e => {
                        y.current = e, b(null == e ? void 0 : e.soundId)
                    }, []),
                    B = a.useCallback(e => {
                        if (null == e) {
                            F(null);
                            return
                        }
                        let t = O[e];
                        null != t && F(t)
                    }, [F, O]),
                    w = a.useCallback(e => {
                        if (null == e) return;
                        let t = O[e];
                        null != t && P(t)
                    }, [O, P]),
                    V = a.useMemo(() => O.map(e => (0, l.jsx)(S.default, {
                        interactive: L,
                        className: I.soundButton,
                        sound: e,
                        focused: D === e.soundId,
                        channel: n
                    }, e.soundId)), [D, n, L, O]);
                return 0 === O.length ? null : (0, l.jsx)(U, {
                    children: (0, l.jsx)(g.default, {
                        wheelWidth: N,
                        wheelHeight: T,
                        itemWidth: 96,
                        itemHeight: 52,
                        showDeadZoneIndicator: !A,
                        activeItem: D,
                        onItemSelect: B,
                        onItemAction: w,
                        interactive: L,
                        children: V
                    })
                })
            }
        },
        891415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("271938"),
                s = n("325861");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, l.useStateFromStoresObject)([s.default, a.default], () => {
                    let n = a.default.getId();
                    return s.default.getPermissionsForUser(n, e, t)
                }, [e, t])
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("42203"),
                s = n("18494");

            function i() {
                return (0, l.useStateFromStores)([s.default, a.default], () => {
                    let e = s.default.getVoiceChannelId();
                    if (null != e) {
                        let t = a.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        886776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l, a, s = n("891415"),
                i = n("58763");

            function r(e) {
                let t = (0, i.default)(e),
                    n = (0, s.default)(e, !0).moderator;
                return !t && n ? a.START_EVENT : a.NORMAL
            }(l = a || (a = {}))[l.NORMAL = 0] = "NORMAL", l[l.START_EVENT = 1] = "START_EVENT"
        },
        721264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("446674"),
                a = n("379881"),
                s = n("42203"),
                i = n("316133"),
                r = n("449008"),
                o = n("334572"),
                u = n("488464"),
                d = n("998716"),
                c = n("49111");

            function f(e) {
                let {
                    voiceState: t,
                    userNick: n,
                    user: l
                } = e, a = (0, i.getComparator)(t, n);
                return {
                    user: l,
                    voiceState: t,
                    nick: n,
                    comparator: a
                }
            }

            function h(e) {
                let [t] = (0, l.useStateFromStores)([u.default, s.default, a.default], () => {
                    let t;
                    t = e === c.FAVORITES ? Object.keys(a.default.getFavoriteChannels()).map(e => s.default.getChannel(e)).filter(r.isNotNullish).filter(e => e.isGuildStageVoice()) : u.default.getChannels(e);
                    let n = t.reduce((e, t) => {
                            let n = u.default.getMutableParticipants(t.id, d.StageChannelParticipantNamedIndex.SPEAKER);
                            return e[t.id] = n.filter(e => e.type === d.StageChannelParticipantTypes.VOICE).map(f), e
                        }, {}),
                        l = t.reduce((e, t) => {
                            let {
                                id: n
                            } = t;
                            return e + u.default.getParticipantsVersion(n)
                        }, 0);
                    return [n, l]
                }, [e], o.isVersionEqual);
                return t
            }
        },
        169602: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("913144"),
                u = n("628454");
            let d = Object.freeze({}),
                c = {};

            function f(e) {
                let {
                    lobbyId: t
                } = e;
                delete c[t]
            }
            class h extends r.default.Store {
                getAllVoiceStates() {
                    return c
                }
                getVoiceStates(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : d
                }
                getVoiceState(e, t) {
                    return this.getVoiceStates(e)[t]
                }
                getLobbyIdsForUser(e) {
                    return Object.keys(c).filter(t => null != c[t][e])
                }
            }
            h.displayName = "LobbyVoiceStateStore";
            var C = new h(o.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        user: t,
                        sessionId: n
                    } = e;
                    c = {}, l = t.id, a = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        lobbyVoiceStates: t,
                        user: n,
                        sessionId: s
                    } = e;
                    c = {}, i.each(t, (e, t) => {
                        c[t] = {}, i.each(e, (e, n) => {
                            c[t][n] = new u.default(e)
                        })
                    }), l = n.id, a = s
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {
                    var t;
                    let n, {
                            sessionId: s,
                            userId: i,
                            lobbyId: r,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        } = e,
                        E = i === l && s !== a,
                        m = null !== (t = c[r]) && void 0 !== t ? t : {},
                        p = m[i];
                    if (null != o && !E && (n = null == p ? new u.default({
                            userId: i,
                            sessionId: s,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        }) : p.merge({
                            userId: i,
                            sessionId: s,
                            channelId: o,
                            mute: d,
                            deaf: f,
                            selfMute: h,
                            selfDeaf: C
                        })), p === n) return !1;
                    null == n ? (m = {
                        ...m
                    }, delete m[i]) : m = {
                        ...m,
                        [i]: n
                    }, c[r] = m
                },
                LOBBY_DELETE: f,
                LOBBY_DISCONNECT: f
            })
        },
        336376: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("233069"),
                i = n("117362"),
                r = n("42203"),
                o = n("660478"),
                u = n("18494"),
                d = n("287850");
            let c = [];

            function f() {
                let e = d.default.getPrivateChannelIds().filter(e => o.default.getMentionCount(e) > 0);
                return e.length > 20 && (e.length = 20), !(0, i.areArraysShallowlyEqual)(e, c) && (c = e, !0)
            }

            function h() {
                return f()
            }

            function C(e) {
                let {
                    channelId: t
                } = e, n = r.default.getChannel(t);
                return !!(null != n && (0, s.isPrivate)(n.type)) && f()
            }
            class E extends l.default.Store {
                initialize() {
                    this.waitFor(d.default, r.default, u.default, o.default)
                }
                getUnreadPrivateChannelIds() {
                    return c
                }
            }
            E.displayName = "PrivateChannelReadStateStore";
            var m = new E(a.default, {
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                MESSAGE_CREATE: C,
                MESSAGE_ACK: C,
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = r.default.getChannel(t);
                    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e, n = r.default.getChannel(t);
                    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
                },
                WINDOW_FOCUS: function() {
                    let e = r.default.getChannel(u.default.getChannelId());
                    return !!(null != e && (0, s.isPrivate)(e.type)) && f()
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e, n = r.default.getChannel(t);
                    return !!(null != n && (0, s.isPrivate)(n.type)) && f()
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            id: e
                        }
                        of t) {
                        let t = r.default.getChannel(e);
                        null != t && (0, s.isPrivate)(t.type) && (n = !0)
                    }
                    return !!n && f()
                }
            })
        },
        402088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {};
            class i extends l.default.PersistedStore {
                initialize(e) {
                    null != e && Object.keys(e).forEach(t => {
                        "number" == typeof e[t] && (s[t] = e[t])
                    })
                }
                getState() {
                    return s
                }
                hasViewed(e) {
                    return null != s[e]
                }
            }
            i.displayName = "ViewHistoryStore", i.persistKey = "ViewHistoryStore";
            var r = new i(a.default, {
                VIEW_HISTORY_MARK_VIEW: function(e) {
                    let {
                        key: t
                    } = e;
                    s[t] = Date.now()
                }
            })
        },
        552067: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("913144"),
                o = n("427495"),
                u = n("49111");
            let d = null;

            function c(e) {
                null != l && e ? l() : null != a && a(), l = null, a = null
            }
            var f = {
                init() {
                    r.default.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
                        if (c(!1), d = e.context, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
                            let e;
                            e = !1, (0, i.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("999391").then(n.bind(n, "999391"));
                                return n => {
                                    let {
                                        onClose: l,
                                        ...a
                                    } = n;
                                    return (0, s.jsx)(t, {
                                        ...a,
                                        onClose: t => {
                                            e = t, l()
                                        }
                                    })
                                }
                            }, {
                                onCloseCallback: () => {
                                    (0, o.closeModal)(e)
                                }
                            })
                        }
                    }), r.default.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
                        let {
                            shouldContinue: t
                        } = e;
                        d = null, c(t)
                    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
                        let {
                            locked: t
                        } = e;
                        t && null != d && (d = null, c(!1))
                    })
                }
            }
        },
        866681: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("913144"),
                o = n("73961"),
                u = n("49111");
            let d = null,
                c = null;

            function f(e) {
                null != l && null != d ? l(d) : null != a && a(e), l = null, a = null
            }
            var h = {
                init() {
                    r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_OPEN", e => {
                        if (f(), c = e.context, d = e.entitlements, l = e.resolve, a = e.reject, u.CURRENT_APP_CONTEXT === e.context) {
                            var t, r, h, C;
                            let l;
                            t = e.context, r = e.applicationId, h = e.skuId, C = e.analyticsSource, l = null, (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("380140").then(n.bind(n, "380140"));
                                return n => {
                                    let {
                                        onClose: a,
                                        ...i
                                    } = n;
                                    return (0, s.jsx)(e, {
                                        ...i,
                                        onClose: function() {
                                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                            l = e, a()
                                        },
                                        applicationId: r,
                                        skuId: h,
                                        analyticsSource: C,
                                        isIAP: t === u.AppContext.OVERLAY
                                    })
                                }
                            }, {
                                onCloseCallback: () => {
                                    (0, o.closePurchaseConfirmationModal)(l)
                                }
                            })
                        }
                    }), r.default.subscribe("PURCHASE_CONFIRMATION_MODAL_CLOSE", e => {
                        let {
                            error: t
                        } = e;
                        c = null, f(t)
                    }), r.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
                        let {
                            locked: t
                        } = e;
                        t && null != c && (c = null, f())
                    })
                }
            }
        },
        189857: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_SOUND: function() {
                    return K
                },
                MESSAGE_SOUND_VOLUME: function() {
                    return W
                }
            });
            var l = n("316693"),
                a = n("446674"),
                s = n("95410"),
                i = n("913144"),
                r = n("450911"),
                o = n("255397"),
                u = n("851387"),
                d = n("193990"),
                c = n("987317"),
                f = n("225664"),
                h = n("679653"),
                C = n("680986"),
                E = n("374021"),
                m = n("288518"),
                p = n("166257"),
                g = n("393414"),
                S = n("144491"),
                _ = n("716214"),
                I = n("834052"),
                N = n("967241"),
                T = n("845579"),
                A = n("42203"),
                L = n("305961"),
                R = n("385649"),
                x = n("957255"),
                v = n("27618"),
                O = n("18494"),
                M = n("101125"),
                y = n("102985"),
                D = n("282109"),
                b = n("697218"),
                G = n("800762"),
                j = n("402671"),
                U = n("387111"),
                P = n("189771"),
                F = n("566673"),
                B = n("773336"),
                w = n("709681"),
                V = n("158998"),
                H = n("49111"),
                k = n("745049"),
                Y = n("782340");
            let K = "message1",
                W = .4,
                z = "discord_dismissed_notification_shown",
                Z = document.hasFocus(),
                Q = null,
                X = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
                q = new class {
                    track(e, t) {
                        let n = this._channels[e];
                        for (null == n && (n = [], this._channels[e] = n), n.push(t); n.length > 1;) {
                            let e = n.shift();
                            null != e && null != e.close && e.close()
                        }
                    }
                    clearChannel(e) {
                        let t = this._channels[e];
                        null != t && (delete this._channels[e], t.forEach(e => e.close()))
                    }
                    constructor() {
                        this._channels = {}
                    }
                };

            function J() {
                return R.default.getDesktopType() === H.DesktopNotificationTypes.NEVER || M.default.getStatus() === H.StatusTypes.DND || !1
            }

            function $(e) {
                let t = G.default.getVoiceStateForChannel(e);
                return null != t
            }
            class ee extends a.default.Store {
                initialize() {
                    this.waitFor(b.default, A.default, R.default, L.default, I.default, v.default, x.default, G.default, m.default)
                }
            }
            ee.displayName = "NotificationStore", new ee(i.default, __OVERLAY__ ? {} : {
                NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
                    let {
                        enabled: t
                    } = e;
                    t === H.NotificationPermissionTypes.ENABLED && !B.isPlatformEmbedded && F.default.showNotification(n("348044"), Y.default.Messages.NOTIFICATION_TITLE_DISCORD, Y.default.Messages.BROWSER_NOTIFICATIONS_ENABLED_BODY, {
                        notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
                    }, {
                        omitViewTracking: !0,
                        sound: K,
                        volume: W,
                        tag: "hello",
                        onClick: () => {
                            window.focus()
                        }
                    })
                },
                NOTIFICATION_CREATE: function(e) {
                    let {
                        icon: t,
                        title: n,
                        body: l,
                        trackingProps: a,
                        options: s
                    } = e;
                    return !J() && (F.default.showNotification(t, n, l, a, s), !1)
                },
                WINDOW_FOCUS: function(e) {
                    if (Z = e.focused) {
                        let e = O.default.getChannelId();
                        null != e && q.clearChannel(e)
                    }
                },
                MESSAGE_CREATE: function(e) {
                    var t, l;
                    let {
                        channelId: a,
                        message: s,
                        optimistic: r
                    } = e;
                    if (r) return !1;
                    let u = A.default.getChannel(a),
                        c = b.default.getUser(null === (t = s.author) || void 0 === t ? void 0 : t.id);
                    if (null == u || null == c || u.isBroadcastChannel()) return !1;
                    let f = (0, P.shouldNotify)(s, a, !Z),
                        h = R.default.getNotifyMessagesInSelectedChannel(),
                        C = h && (0, P.shouldNotifyForSelectedChannel)(s, a);
                    if (!f && !C) return !1;
                    let E = !R.default.isSoundDisabled(K);
                    if (C && (E && w.playSound("message3", .4), !Z) || !f) return !1;
                    let m = n("860957").default,
                        p = n("901165").default;
                    if (null != m.getFocusedPID() && p.getTextChatNotificationMode() === H.OverlayNotificationTextChatTypes.ENABLED && !y.default.disableNotifications) return !1;
                    let {
                        icon: g,
                        title: _,
                        body: I
                    } = (0, P.makeTextChatNotification)(u, s, c);
                    if (i.default.dispatch({
                            type: "RPC_NOTIFICATION_CREATE",
                            channelId: u.id,
                            message: s,
                            icon: g,
                            title: _,
                            body: I
                        }), R.default.getDesktopType() === H.DesktopNotificationTypes.NEVER) return E && w.playSound(K, W), !1;
                    let N = F.default.showNotification(g, _, I, {
                        notif_type: "MESSAGE_CREATE",
                        notif_user_id: null === (l = s.author) || void 0 === l ? void 0 : l.id,
                        message_id: s.id,
                        message_type: s.type,
                        channel_id: u.id,
                        channel_type: u.type,
                        guild_id: u.guild_id
                    }, {
                        omitViewTracking: !0,
                        tag: s.id,
                        sound: E ? K : void 0,
                        volume: W,
                        onClick() {
                            (0, S.transitionToChannel)(u.id), (u.type === H.ChannelTypes.GUILD_VOICE || u.type === H.ChannelTypes.GUILD_STAGE_VOICE) && o.default.updateChatOpen(u.id, !0), d.default.clickedNotification()
                        }
                    });
                    null != N && q.track(u.id, N)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && q.clearChannel(t), !1
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return q.clearChannel(t), !1
                },
                MESSAGE_REACTION_ADD: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        userId: l,
                        emoji: a,
                        burst: s,
                        optimistic: i,
                        messageAuthorId: r
                    } = e;
                    if (!s || J() || i || !T.EnableBurstReactionNotifications.getSetting()) return !1;
                    let {
                        hasDesktopNotifications: o
                    } = f.BurstReactionsUserExperiment.getCurrentConfig({
                        location: "a7c2a2_1"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (!o) return !1;
                    let u = b.default.getCurrentUser();
                    if (null == u || l === (null == u ? void 0 : u.id)) return !1;
                    let d = A.default.getChannel(t);
                    if (null == d) return !1;
                    let c = null == d ? void 0 : d.getGuildId(),
                        h = L.default.getGuild(c);
                    if (null == h || D.default.allowNoMessages(d) || r !== u.id) return !1;
                    let C = b.default.getUser(l),
                        E = U.default.getName(c, t, C);
                    t !== O.default.getChannelId() && (0, p.setGuildBurstPreview)(h.id, t, n, a);
                    let m = null != C ? Y.default.Messages.SUPER_REACTION_DESKTOP_NOTIFICATION_BODY.format({
                        name: E,
                        guildName: null == h ? void 0 : h.name,
                        channelName: "#".concat(d.name)
                    }) : Y.default.Messages.SUPER_REACTION_DESKTOP_NOTIFICATION_BODY_NO_USER.format({
                        guildName: null == h ? void 0 : h.name,
                        channelName: "#".concat(d.name)
                    });
                    F.default.showNotification((0, j.getEmojiUrl)(a), Y.default.Messages.SUPER_REACTION_DESKTOP_NOTIFICATION_TITLE, m, {
                        notif_type: "SUPER_REACTION"
                    }, {
                        onClick: () => {
                            (0, p.clearGuildBurstPreview)(h.id), (0, S.transitionToMessage)(t, n)
                        }
                    })
                },
                ACTIVITY_START: function(e) {
                    let {
                        userId: t,
                        activity: n
                    } = e;
                    if (J()) return !1;
                    if (n.type === H.ActivityTypes.PLAYING) {
                        let e = b.default.getUser(t);
                        if (null == e) return !1;
                        let l = V.default.getName(e),
                            a = n.name,
                            s = e.getAvatarURL(void 0, 128),
                            i = Y.default.Messages.NOTIFICATION_TITLE_START_GAME,
                            o = Y.default.Messages.NOTIFICATION_BODY_START_GAME.format({
                                username: l,
                                gameName: a
                            });
                        return F.default.showNotification(s, i, o, {
                            notif_type: "ACTIVITY_START",
                            activity_type: H.ActivityTypes.PLAYING,
                            notif_user_id: t,
                            activity_name: a
                        }, {
                            sound: "message2",
                            playSoundIfDisabled: !1,
                            volume: .4,
                            onClick() {
                                r.default.openPrivateChannel(t)
                            }
                        }), !1
                    }
                    return !1
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    if (J()) return;
                    let n = b.default.getCurrentUser();
                    if (null == n) return;
                    let l = t.find(e => e.userId === n.id);
                    if (null == l) return;
                    let {
                        channelId: a,
                        guildId: s,
                        suppress: i,
                        requestToSpeakTimestamp: r
                    } = l;
                    if (null == a || null == s || !(!i && null != r)) return;
                    let o = L.default.getGuild(s),
                        u = A.default.getChannel(a),
                        d = I.default.getStageInstanceByChannel(a);
                    null != o && null != u && null != d && F.default.showNotification(o.getIconURL(128), u.name, Y.default.Messages.STAGE_SPEAK_INVITE_PUSH_NOTIFICATION.format({
                        channelName: (0, h.computeChannelName)(u, b.default, v.default),
                        channelTopic: null == d ? void 0 : d.topic
                    }), {
                        notif_type: "Stage Speak Invite"
                    }, {})
                },
                STAGE_INSTANCE_UPDATE: function(e) {
                    let {
                        instance: t
                    } = e;
                    if (J() || !t.send_start_notification || $(t.channel_id)) return !1;
                    let n = b.default.getCurrentUser(),
                        a = L.default.getGuild(t.guild_id),
                        s = A.default.getChannel(t.channel_id),
                        i = b.default.getUser(t.host_id);
                    if (null == n || null == s || null == a || null == i || !(0, P.shouldNotifyBase)(n, i, s) || !x.default.can(l.default.combine(H.Permissions.CONNECT, H.Permissions.VIEW_CHANNEL), s)) return !1;
                    F.default.showNotification(a.getIconURL(128), Y.default.Messages.STAGE_START_PUSH_NOTIFICATION_TITLE.format({
                        guildName: a.name
                    }), Y.default.Messages.STAGE_START_PUSH_NOTIFICATION_BODY.format({
                        username: U.default.getName(a.id, s.id, i),
                        topic: t.topic
                    }), {
                        notif_type: "STAGE_INSTANCE_CREATE",
                        guild_id: a.id,
                        channel_id: s.id
                    }, {
                        onClick() {
                            (0, _.connectAndOpen)(s)
                        }
                    })
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    if (J() || null == t.notification_type) return !1;
                    t.notification_type === k.GuildScheduledEventNotificationTypes.EVENT_START && (t.entity_type === k.GuildScheduledEventEntityTypes.STAGE_INSTANCE || t.entity_type === k.GuildScheduledEventEntityTypes.VOICE ? ! function(e) {
                        if (J()) return !1;
                        let t = e.channel_id;
                        if (null == t || $(t)) return !1;
                        let n = b.default.getCurrentUser(),
                            a = L.default.getGuild(e.guild_id),
                            s = A.default.getChannel(e.channel_id),
                            i = b.default.getUser(e.host_id);
                        if (null == n || null == s || null == a || null == i || !x.default.can(l.default.combine(H.Permissions.CONNECT, H.Permissions.VIEW_CHANNEL), s)) return !1;
                        F.default.showNotification(a.getIconURL(128), Y.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
                            guildName: a.name
                        }), Y.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_BODY.format({
                            topic: e.name,
                            username: U.default.getName(a.id, s.id, i)
                        }), {
                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guild_id: a.id,
                            channel_id: s.id
                        }, {
                            onClick() {
                                e.entity_type === k.GuildScheduledEventEntityTypes.STAGE_INSTANCE && (0, _.connectAndOpen)(s), e.entity_type === k.GuildScheduledEventEntityTypes.VOICE && c.default.selectVoiceChannel(s.id)
                            }
                        })
                    }(t) : t.entity_type === k.GuildScheduledEventEntityTypes.EXTERNAL && ! function(e) {
                        if (J()) return !1;
                        let t = b.default.getCurrentUser(),
                            n = L.default.getGuild(e.guild_id);
                        if (null == t || null == n) return !1;
                        F.default.showNotification(n.getIconURL(128), Y.default.Messages.GUILD_SCHEDULED_EVENT_STAGE_START_TITLE.format({
                            guildName: n.name
                        }), Y.default.Messages.GUILD_SCHEDULED_EVENT_EXTERNAL_START_BODY.format({
                            topic: e.name
                        }), {
                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                            guild_id: n.id
                        }, {
                            onClick() {
                                u.default.transitionToGuildSync(e.guild_id), (0, E.openGuildEventDetails)({
                                    eventId: e.id
                                })
                            }
                        })
                    }(t))
                },
                THREAD_CREATE: function(e) {
                    var t;
                    let {
                        channel: n,
                        isNewlyCreated: l
                    } = e;
                    if (J()) return !1;
                    let a = A.default.getChannel(n.parent_id);
                    if (null == a || !H.ChannelTypesSets.GUILD_THREADS_ONLY.has(a.type) || !l || !(0, P.shouldNotifyForForumThreadCreation)(n, a, !Z)) return !1;
                    let {
                        author: s,
                        user: i
                    } = (0, C.getForumPostAuthor)(n);
                    if (null == i) return !1;
                    let r = L.default.getGuild(a.guild_id);
                    if (null == r) return !1;
                    let o = Y.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_TITLE_MOBILE.format({
                            channelName: a.name,
                            guildName: r.name
                        }),
                        u = Y.default.Messages.FORUM_CHANNEL_THREAD_CREATED_PUSH_BODY_MOBILE.format({
                            channelName: n.name,
                            userUsername: null !== (t = null == s ? void 0 : s.nick) && void 0 !== t ? t : null == i ? void 0 : i.username
                        }),
                        d = i.getAvatarURL(void 0, 128);
                    F.default.showNotification(d, o, u, {
                        notif_type: "THREAD_CREATE",
                        notif_user_id: i.id
                    }, {
                        onClick() {
                            (0, N.openThreadSidebarForViewing)(n)
                        }
                    })
                },
                GENERIC_PUSH_NOTIFICATION_SENT: function(e) {
                    let {
                        icon: t,
                        title: n,
                        body: l,
                        route: a,
                        trackingType: s,
                        tag: i
                    } = e;
                    return !J() && null != n && null != l && null != s && (F.default.showNotification(t, n, l, {
                        notif_type: s
                    }, {
                        onClick() {
                            null != a && (0, g.transitionTo)(a)
                        },
                        tag: i
                    }), !1)
                },
                WINDOW_HIDDEN: function() {
                    let e = (0, B.isWindows)(),
                        t = (0, B.isLinux)(),
                        l = s.default.get(z, !1),
                        a = !l && B.isPlatformEmbedded && (e || t);
                    if (!a) return !1;
                    let i = !1;
                    return null != Q && (i = X.includes(Q)), !!i && (F.default.showNotification(n("599964"), Y.default.Messages.NOTIFICATION_TITLE_DISCORD, Y.default.Messages.NOTIFICATION_BODY_DISCORD_HIDDEN, {
                        notif_type: "WINDOW_HIDDEN"
                    }, {
                        overrideStreamerMode: !0,
                        onClick: () => {
                            (0, g.transitionTo)(H.Routes.SETTINGS(e ? "windows" : "linux"))
                        },
                        onShown: () => {
                            s.default.set(z, !0)
                        }
                    }), !1)
                },
                LOGOUT: function() {
                    return s.default.remove(z), !1
                },
                CONNECTION_OPEN: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    Q = t
                }
            })
        },
        230674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                areTypesInSameSection: function() {
                    return r
                },
                getDropData: function() {
                    return c
                },
                getDnDUpdates: function() {
                    return f
                }
            });
            var l = n("320954"),
                a = n("233069"),
                s = n("746574"),
                i = n("49111");

            function r(e, t) {
                return null != e && null != t && (e === t || (0, a.isGuildSelectableChannelType)(e) && (0, a.isGuildSelectableChannelType)(t) || (0, a.isGuildVocalChannelType)(e) && (0, a.isGuildVocalChannelType)(t))
            }

            function o(e, t, n, l) {
                let a = -1;
                if (l.find((e, n) => {
                        let {
                            channel: l
                        } = e;
                        return l.id === t && (a = n, !0)
                    }), a < 0) return null;
                for (let t = a; t >= 0 && t < l.length; t += e) {
                    let e = l[t];
                    if (r(e.channel.type, n)) return e
                }
                return null
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null == e) return 0;
                let l = null;
                return t.filter(t => {
                    let {
                        channel: {
                            type: l
                        }
                    } = t;
                    return null != e && (n || r(e.type, l))
                }).find((t, n) => {
                    let {
                        channel: {
                            id: a
                        }
                    } = t;
                    return null != e && a === e.id && (l = n, !0)
                }), l
            }

            function d(e) {
                return {
                    referenceId: e.id,
                    parentId: e.parent_id
                }
            }

            function c(e, t, n, l, s) {
                if (null == e || null == n) return null;
                let {
                    GUILD_CATEGORY: c
                } = i.ChannelTypes;
                if (e.type === c) return l === t || l < t && e.type === n.type ? d(n) : l > t ? function(e, t, n) {
                    var l;
                    let {
                        GUILD_CATEGORY: a
                    } = i.ChannelTypes, s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1], r = o(-1, t.id, e.type, n);
                    return null == r || r.channel.id === e.id ? null : null == s || s.channel.type === a ? {
                        referenceId: r.channel.id,
                        parentId: null
                    } : null
                }(e, n, s) : null;
                if (r(e.type, n.type)) return d(n);
                if (l < t) return n.type === c ? function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                        i = o(1, t.id, e.type, n);
                    if (null == s) return {
                        referenceId: null,
                        parentId: null
                    };
                    if (null != i) {
                        if (r(s.channel.type, e.type) || e.isGuildVocal() && (0, a.isGuildSelectableChannelType)(s.channel.type)) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.parent_id
                        };
                        if (s.channel.isCategory()) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.id
                        }
                    }
                    return null
                }(e, n, s) : function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
                        i = o(1, t.id, e.type, n);
                    return null != s || e.isGuildVocal() ? (0, a.isGuildSelectableChannelType)(e.type) && null != i && ((0, a.isGuildSelectableChannelType)(s.channel.type) || s.channel.isCategory()) ? {
                        referenceId: i.channel.id,
                        parentId: t.parent_id
                    } : null : {
                        referenceId: null != i ? i.channel.id : null,
                        parentId: null
                    }
                }(e, n, s);
                return n.type === c ? function(e, t, n) {
                    var l;
                    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                        i = o(-1, t.id, e.type, n);
                    if (null != i) {
                        if (null == s) return {
                            referenceId: i.channel.id,
                            parentId: t.id
                        };
                        if (r(s.channel.type, e.type) || (0, a.isGuildSelectableChannelType)(e.type) && s.channel.isGuildVocal()) return {
                            referenceId: i.channel.id,
                            parentId: s.channel.parent_id
                        };
                        if (s.channel.isCategory()) return {
                            referenceId: i.channel.id,
                            parentId: t.id
                        }
                    }
                    return null
                }(e, n, s) : function(e, t, n) {
                    var l;
                    let a = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
                        s = o(-1, t.id, e.type, n);
                    if (null == s) return null;
                    if (e.isGuildVocal()) {
                        if (null == a || a.channel.isCategory()) return {
                            referenceId: s.channel.id,
                            parentId: t.parent_id
                        };
                        if (a.channel.isGuildVocal()) return {
                            referenceId: s.channel.id,
                            parentId: a.channel.parent_id
                        }
                    }
                    return e.isCategory() && (null == a || a.channel.isCategory()) ? {
                        referenceId: s.channel.id,
                        parentId: null
                    } : null
                }(e, n, s)
            }

            function f(e, t, n, i) {
                let r, o, d = [],
                    c = [],
                    f = i._categories,
                    h = t => {
                        var n, l, a, i;
                        let u;
                        if (null == r || null == o || (n = e, l = r, a = o, i = t, null != l && null != a && null != i[l] && i[l].channel === n && null != i[a] ? 0 : 1)) u = [...t];
                        else u = s.default.moveItemFromTo(t, r, o);
                        return d = d.concat(s.default.calculatePositionDeltas({
                            oldOrdering: t,
                            newOrdering: u,
                            idGetter: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.id
                            },
                            existingPositionGetter: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.position
                            }
                        })), u
                    };
                if (e.isCategory()) {
                    let n = [...f].slice(1);
                    r = u(e, n), o = u(t, n), (c = h(n)).unshift(f[0])
                }
                if ((0, a.isGuildSelectableChannelType)(e.type) || e.isCategory()) {
                    let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
                        let {
                            channel: {
                                type: t
                            }
                        } = e;
                        return (0, a.isGuildSelectableChannelType)(t)
                    });
                    r = u(e, n), o = u(t, n), h(n)
                }
                if (e.isGuildVocal() || e.isCategory()) {
                    let n = (0, l.default)(c.length > 0 ? c : f, i, e => {
                        let {
                            channel: t
                        } = e;
                        return t.isGuildVocal()
                    });
                    r = u(e, n), o = u(t, n), h(n)
                }
                if (e.parent_id !== n) {
                    let t = !1;
                    d.find(l => l.id === e.id && (l.parent_id = n, t = !0)), !t && d.push({
                        id: e.id,
                        parent_id: n
                    })
                }
                return d
            }
        },
        224216: function(e, t, n) {
            "use strict";

            function l(e, t, n) {
                return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
            }

            function a(e, t, n, a) {
                return l(e, n, a) !== l(t, n, a) && l(e, t, n) !== l(e, t, a)
            }

            function s(e, t, n) {
                let l = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
                return {
                    x: t.x + (t.x - e.x) / l * n,
                    y: t.y + (t.y - e.y) / l * n
                }
            }

            function i(e, t, n) {
                let l = {
                        x: n.x,
                        y: n.y
                    },
                    s = {
                        x: n.x + n.width,
                        y: n.y
                    },
                    i = {
                        x: n.x,
                        y: n.y + n.height
                    },
                    r = {
                        x: n.x + n.width,
                        y: n.y + n.height
                    };
                return a(e, t, l, s) || a(e, t, s, r) || a(e, t, r, i) || a(e, t, i, l)
            }
            n.r(t), n.d(t, {
                extendLineSegment: function() {
                    return s
                },
                doesLineSegmentIntersectRectangle: function() {
                    return i
                }
            })
        },
        189771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldNotifyBase: function() {
                    return M
                },
                shouldNotify: function() {
                    return y
                },
                shouldNotifyForSelectedChannel: function() {
                    return D
                },
                shouldNotifyForForumThreadCreation: function() {
                    return b
                },
                makeTextChatNotification: function() {
                    return U
                }
            });
            var l = n("679653"),
                a = n("605250"),
                s = n("267567"),
                i = n("288518"),
                r = n("884351"),
                o = n("406297"),
                u = n("913491"),
                d = n("755624"),
                c = n("414833"),
                f = n("233069"),
                h = n("982108"),
                C = n("42203"),
                E = n("305961"),
                m = n("945956"),
                p = n("27618"),
                g = n("18494"),
                S = n("162771"),
                _ = n("101125"),
                I = n("282109"),
                N = n("697218"),
                T = n("568734"),
                A = n("387111"),
                L = n("700097"),
                R = n("158998"),
                x = n("49111"),
                v = n("648564"),
                O = n("782340");

            function M(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (t.hasFlag(x.UserFlags.SPAMMER) || n.isManaged()) return !1;
                let i = n.getGuildId();
                return !(null != i && s.default.isLurking(i) || t.id === e.id || p.default.isBlocked(t.id) || !l && _.default.getStatus() === x.StatusTypes.DND || !a && I.default.allowNoMessages(n)) && !0
            }

            function y(e, t) {
                var n, l;
                let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e.flags && (0, T.hasFlag)(e.flags, x.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
                let r = C.default.getChannel(t);
                e.type === x.MessageTypes.THREAD_STARTER_MESSAGE && (r = C.default.getChannel(null === (l = r) || void 0 === l ? void 0 : l.parent_id));
                let u = N.default.getCurrentUser(),
                    E = N.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
                if (null == r || null == u || null == E || r.type === x.ChannelTypes.GROUP_DM && e.type === x.MessageTypes.RECIPIENT_REMOVE || !M(u, E, r, s) || i.default.isMessageRequest(t)) return !1;
                if (!a) {
                    let e = g.default.getChannelId(S.default.getGuildId());
                    if (e === r.id || h.default.getCurrentSidebarChannelId(e) === r.id) return !1
                }
                if (f.THREAD_CHANNEL_TYPES.has(r.type)) {
                    if (d.default.isMuted(r.id)) return !1;
                    let t = (0, c.computeThreadNotificationSetting)(r);
                    return t !== v.ThreadMemberFlags.NO_MESSAGES && (t === v.ThreadMemberFlags.ALL_MESSAGES || (0, o.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: u.id,
                        suppressEveryone: !1,
                        suppressRoles: !1
                    }))
                } {
                    let t = !f.GUILD_VOCAL_CHANNEL_TYPES.has(r.type) || m.default.getChannelId() === r.id;
                    if (I.default.allowAllMessages(r) && t) return !0;
                    let n = I.default.isSuppressEveryoneEnabled(r.getGuildId()),
                        l = I.default.isSuppressRolesEnabled(r.getGuildId());
                    return (0, o.isRawMessageMentioned)({
                        rawMessage: e,
                        userId: u.id,
                        suppressEveryone: n,
                        suppressRoles: l
                    })
                }
            }

            function D(e, t) {
                var n, l;
                let a = g.default.getChannelId(S.default.getGuildId());
                if (a !== t) return !1;
                let s = C.default.getChannel(t);
                e.type === x.MessageTypes.THREAD_STARTER_MESSAGE && (s = C.default.getChannel(null === (l = s) || void 0 === l ? void 0 : l.parent_id));
                let i = N.default.getCurrentUser(),
                    r = N.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
                return !(null == s || null == i || null == r || s.isManaged() || r.hasFlag(x.UserFlags.SPAMMER) || p.default.isBlocked(r.id) || r.id === i.id || _.default.getStatus() === x.StatusTypes.DND || I.default.allowNoMessages(s)) && !0
            }

            function b(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = N.default.getCurrentUser(),
                    s = N.default.getUser(e.ownerId);
                if (null == t || null == a || null == s || !M(a, s, t, l, !0) || I.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) return !1;
                if (!n) {
                    let e = g.default.getChannelId(S.default.getGuildId());
                    if (e === t.id) return !1
                }
                return I.default.getNewForumThreadsCreated(t)
            }
            let G = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, N.default, p.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, N.default, p.default)) : "", ")");

            function j(e, t, n, l) {
                switch (e.type) {
                    case x.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case x.ChannelTypes.GUILD_TEXT:
                        return t;
                    case x.ChannelTypes.GROUP_DM:
                        return n;
                    case x.ChannelTypes.DM:
                    default:
                        return l
                }
            }

            function U(e, t, n) {
                var s;
                let i;
                let o = A.default.getName(e.getGuildId(), e.id, n),
                    d = o;
                switch (e.type) {
                    case x.ChannelTypes.GUILD_ANNOUNCEMENT:
                    case x.ChannelTypes.GUILD_TEXT:
                    case x.ChannelTypes.GUILD_VOICE:
                    case x.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case x.ChannelTypes.PUBLIC_THREAD:
                    case x.ChannelTypes.PRIVATE_THREAD:
                        let c = C.default.getChannel(e.parent_id);
                        if (t.type === x.MessageTypes.THREAD_STARTER_MESSAGE && null != c) d = G(d, c, C.default.getChannel(c.parent_id));
                        else if ((0, u.default)(t)) {
                            let t = E.default.getGuild(e.getGuildId());
                            null != t && (d = G(d, e, c))
                        } else d = G(d, e, c);
                        break;
                    case x.ChannelTypes.GROUP_DM:
                        let f = e.isManaged() && n.bot && d === (0, l.computeChannelName)(e, N.default, p.default);
                        !f && (d = "".concat(d, " (").concat((0, l.computeChannelName)(e, N.default, p.default, !0), ")"))
                }
                let h = t.content;
                if ((0, u.default)(t) && null == (h = L.default.stringify(t, e))) throw new(0, a.default)("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
                let m = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
                if (null != t.activity && null != t.application) i = t.activity.type === x.ActivityActionTypes.JOIN ? j(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                    user: o,
                    game: t.application.name
                }) : t.activity.type === x.ActivityActionTypes.JOIN_REQUEST ? j(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                    user: o,
                    game: t.application.name
                }) : "";
                else if (null != t.activity && t.activity.type === x.ActivityActionTypes.LISTEN) {
                    let t = j(e, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, O.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN);
                    i = t.format({
                        user: o
                    })
                } else i = null != m && m.length > 0 ? O.default.Messages.STICKER_NOTIFICATION_BODY.format({
                    stickerName: m[0].name
                }) : t.type === x.MessageTypes.PREMIUM_REFERRAL ? O.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
                    username: R.default.getName(n)
                }) : r.default.unparse(h, e.id, !0);
                0 === i.length && (i = function(e) {
                    var t;
                    if (void 0 !== e.embeds && e.embeds.length > 0) {
                        let t = e.embeds[0];
                        if (null != t.description) return null != t.title ? "".concat(t.title, " ").concat(t.description) : t.description;
                        if (null != t.title) return t.title;
                        if (null != t.fields) {
                            let e = t.fields[0];
                            return "".concat(e.name, " ").concat(e.value)
                        }
                    }
                    if ((0, T.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, x.MessageFlags.IS_VOICE_MESSAGE)) return O.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                    if (void 0 !== e.attachments && e.attachments.length > 0) {
                        let t = e.attachments[0].filename;
                        return O.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
                            filename: t
                        })
                    }
                    return ""
                }(t));
                let g = n.getAvatarURL(e.guild_id, 128);
                return {
                    icon: g,
                    title: d,
                    body: i
                }
            }
        },
        566673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("799895");
            var l = n("799895").default
        },
        687609: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("49111"),
                a = n("782340"),
                s = {
                    getStatus: function(e) {
                        let t, n, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        switch (e) {
                            case l.RTCConnectionStates.CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_CONNECTING;
                                break;
                            case l.RTCConnectionStates.AUTHENTICATING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_AUTHENTICATING;
                                break;
                            case l.RTCConnectionStates.AWAITING_ENDPOINT:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_AWAITING_ENDPOINT;
                                break;
                            case l.RTCConnectionStates.RTC_CONNECTED:
                                t = l.ConnectionStatus.CONNECTED, n = s ? a.default.Messages.CONNECTION_STATUS_VIDEO_CONNECTED : a.default.Messages.CONNECTION_STATUS_VOICE_CONNECTED;
                                break;
                            case l.RTCConnectionStates.RTC_CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_RTC_CONNECTING;
                                break;
                            case l.RTCConnectionStates.ICE_CHECKING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_ICE_CHECKING;
                                break;
                            case l.RTCConnectionStates.DTLS_CONNECTING:
                                t = l.ConnectionStatus.CONNECTING, n = a.default.Messages.CONNECTION_STATUS_DTLS_CONNECTING;
                                break;
                            case l.RTCConnectionStates.NO_ROUTE:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_NO_ROUTE;
                                break;
                            case l.RTCConnectionStates.RTC_DISCONNECTED:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_RTC_DISCONNECTED;
                                break;
                            case l.RTCConnectionStates.DISCONNECTED:
                            default:
                                t = l.ConnectionStatus.ERROR, n = a.default.Messages.CONNECTION_STATUS_DISCONNECTED
                        }
                        return {
                            connectionStatus: t,
                            connectionStatusText: n
                        }
                    },
                    getShortHostname: function(e) {
                        return null == e ? "" : e.split(".")[0]
                    }
                }
        },
        360782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("860957");

            function a() {
                let e = l.default.getFocusedPID();
                return null != e && (l.default.isReady(e) || l.default.isCrashed(e)) ? e : null
            }
        }
    }
]);