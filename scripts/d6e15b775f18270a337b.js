(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92683"], {
        45299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("301165"),
                u = n("669491"),
                i = n("77078"),
                s = n("659500"),
                o = n("49111"),
                d = n("782340"),
                c = n("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: n,
                        errorMessage: f,
                        submitting: E,
                        onReset: S,
                        onSave: _,
                        onSaveText: C,
                        onResetText: h,
                        onSaveButtonColor: m,
                        disabled: g,
                        saveButtonTooltip: I
                    } = e, N = r.useRef(null), [{
                        spring: R
                    }, A] = (0, a.useSpring)(() => ({
                        spring: 0
                    }));
                    r.useEffect(() => {
                        function e() {
                            A({
                                spring: 1,
                                config: a.config.gentle
                            }), A({
                                spring: 0,
                                config: a.config.gentle,
                                delay: 1e3
                            })
                        }
                        return s.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            s.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [A]);
                    let T = R.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(u.default.colors.TEXT_NORMAL).hex(), (0, i.useToken)(u.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        p = R.to({
                            range: [0, 1],
                            output: [(0, i.useToken)(u.default.colors.BACKGROUND_FLOATING).hex(), (0, i.useToken)(u.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, i.useToken)(u.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(a.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: p
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: N,
                            children: (0, l.jsxs)(i.FocusRingScope, {
                                containerRef: N,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(a.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? M : T
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != S && (0, l.jsx)(i.Button, {
                                        className: c.resetButton,
                                        size: i.Button.Sizes.SMALL,
                                        color: i.Button.Colors.PRIMARY,
                                        look: i.Button.Looks.LINK,
                                        onClick: S,
                                        children: (0, l.jsx)(a.animated.span, {
                                            style: {
                                                color: T
                                            },
                                            children: null != h ? h : d.default.Messages.RESET
                                        })
                                    }), null != _ ? (0, l.jsx)(i.Tooltip, {
                                        text: I,
                                        children: e => (0, l.jsx)(i.Button, {
                                            size: i.Button.Sizes.SMALL,
                                            color: null != m ? m : i.Button.Colors.GREEN,
                                            submitting: E,
                                            disabled: g,
                                            onClick: _,
                                            ...e,
                                            children: null != C ? C : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        99637: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WebhookIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "m7.705 16.954 3.674-6.768a1 1 0 0 0-.504-1.404A3.001 3.001 0 0 1 12 3a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 1 0-7.853 4.106l-3.2 5.895A2 2 0 1 0 7.732 19h8.536A2 2 0 0 0 20 18a2 2 0 0 0-3.732-1H7.732a1.95 1.95 0 0 0-.027-.046Z",
                        className: i
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M13.806 6.861a2 2 0 1 0-1.648 1.133l4.518 6.572A1 1 0 0 0 17.5 15h.5a3 3 0 1 1-1.984 5.25.996.996 0 0 0-.657-.25h-.01a1 1 0 0 0-.657 1.75A5 5 0 1 0 18.026 13l-4.22-6.139ZM5.968 13.877a1 1 0 0 1-.719 1.217A3.002 3.002 0 0 0 6 21c.761 0 1.455-.282 1.984-.75a1 1 0 1 1 1.323 1.5 5 5 0 1 1-4.557-8.592 1 1 0 0 1 1.218.719Z",
                        className: i
                    })]
                })
            }
        },
        994906: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildMemberModViewSidebar: function() {
                    return u
                }
            });
            var l = n("208021"),
                r = n("582713"),
                a = n("459824");

            function u(e, t, n) {
                (0, a.canAccessGuildMemberModViewWithExperiment)(e) && l.default.openGuildSidebar({
                    guildId: e,
                    baseChannelId: n,
                    sidebarType: r.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
                    details: {
                        type: r.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e
                    }
                })
            }
        },
        127421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            });
            var l = n("811022"),
                r = n("872717"),
                a = n("913144"),
                u = n("448993"),
                i = n("828434"),
                s = n("49111");
            let o = new l.default("MemberSafetyElasticSearch");
            async function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (l > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: f
                } = n;
                try {
                    var E;
                    let u = await r.default.post({
                        url: s.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: f
                    });
                    if (o.info("JANK searchAllGuildMembers", {
                            response: u
                        }), u.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == u.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * u.body.retry_after)), d(e, t, n, l + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (E = u.body).guild_id,
                            members: E.members,
                            page_result_count: E.page_result_count,
                            total_result_count: E.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new u.APIError(t);
                    return o.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, n) {
            "use strict";
            var l, r;
            n.r(t), n.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return a
                },
                GuildMemberSearchResponseType: function() {
                    return l
                }
            });
            let a = 202;
            (r = l || (l = {}))[r.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", r[r.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchGuildMembers: function() {
                    return s
                }
            });
            var l = n("811022"),
                r = n("913144"),
                a = n("127421"),
                u = n("828434");
            let i = new l.default("MemberSafetyGuildMemberSearchActionCreators");
            async function s(e, t, n) {
                let l = await (0, a.searchAllGuildMembers)(e, t, n);
                if (l.type === u.GuildMemberSearchResponseType.ERROR) throw l.body;
                let {
                    body: s
                } = l;
                i.info("JANK searchGuildMembers success", {
                    body: s
                }), r.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: s.members,
                    page_result_count: s.page_result_count,
                    total_result_count: s.total_result_count
                })
            }
        },
        219115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsMakingRequestV2: function() {
                    return U
                },
                useIsStillIndexingV2: function() {
                    return x
                },
                handleInitializeV2: function() {
                    return y
                },
                handleGuildDeleteV2: function() {
                    return H
                },
                handleSearchStateUpdateV2: function() {
                    return G
                },
                handlePaginationUpdateV2: function() {
                    return L
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return D
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return j
                }
            });
            var l, r, a, u, i = n("714617"),
                s = n.n(i),
                o = n("917351"),
                d = n("308503"),
                c = n("811022"),
                f = n("249654"),
                E = n("449008"),
                S = n("691386"),
                _ = n("770115"),
                C = n("490931"),
                h = n("225982"),
                m = n("178406");
            let g = new c.default("MemberSafetySearchManagerV2");

            function I(e) {
                return "guild_".concat(e)
            }

            function N(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(l = a || (a = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.STILL_INDEXING = 4] = "STILL_INDEXING";
            let R = (0, d.default)(e => ({}));

            function A(e, t) {
                let n = R.getState()[e];
                return null == n && (n = N(a.UNFETCHED)), n = {
                    ...n,
                    ...t
                }, R.setState(t => ({
                    ...t,
                    [e]: n
                })), n
            }

            function T(e) {
                return R.getState()[e]
            }

            function p(e) {
                let t = T(e);
                return null == t && A(e, t = N(a.UNFETCHED)), t
            }

            function M(e) {
                let t = T(e);
                null != t && A(e, {
                    requestState: a.SUCCEEDED,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function v(e) {
                var t;
                let n = I(e);
                t = n, R.setState(e => {
                    let n = {
                        ...e
                    };
                    return delete n[t], n
                })
            }(r = u || (u = {}))[r.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", r[r.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", r[r.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", r[r.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function b(e) {
                var t, n, l, r;
                let i = m.default.getSearchStateByGuildId(e),
                    d = m.default.getPaginationStateByGuildId(e),
                    c = I(e),
                    N = p(c),
                    [R, v] = function(e, t, n) {
                        var l, r, a, i, s, o;
                        let d = function(e, t) {
                                var n;
                                let {
                                    currentPageChunkNumber: l,
                                    previousPageChunkNumber: r,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        n = Math.floor(t / S.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        l = Math.floor(e.pageSize * (e.currentPage - 1) / S.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        r = Math.floor(e.pageSize * (e.currentPage + 1) / S.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: n,
                                        previousPageChunkNumber: l,
                                        nextPageChunkNumber: r
                                    }
                                }(t), {
                                    previousPagination: i
                                } = p(I(e)), s = t.currentPage, o = null !== (n = null == i ? void 0 : i.currentPage) && void 0 !== n ? n : 0, d = m.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == d:
                                    case l === a && 0 === l:
                                        return u.FIRST_PAGE_CHUNK;
                                    case l === a && l === r:
                                        return u.CURRENT_SEARCH_CHUNK;
                                    case o < s && l < a:
                                        return u.NEXT_SEARCH_CHUNK;
                                    case o > s && l >= r:
                                        if (0 < l) return u.PREVIOUS_SEARCH_CHUNK;
                                        return u.FIRST_PAGE_CHUNK;
                                    default:
                                        return u.CURRENT_SEARCH_CHUNK
                                }
                            }(e, n),
                            c = m.default.getElasticSearchPaginationByGuildId(e);
                        switch (d) {
                            case u.FIRST_PAGE_CHUNK: {
                                let t = m.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: S.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: f.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case u.CURRENT_SEARCH_CHUNK:
                                return [null !== (l = t.cursor) && void 0 !== l ? l : null, {
                                    limit: S.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (r = t.cursor) && void 0 !== r ? r : void 0
                                }];
                            case u.NEXT_SEARCH_CHUNK:
                                return [null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null, {
                                    limit: S.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (i = null == c ? void 0 : c.after) && void 0 !== i ? i : void 0
                                }];
                            case u.PREVIOUS_SEARCH_CHUNK:
                                return [null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : null, {
                                    limit: S.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : void 0
                                }];
                            default:
                                (0, E.assertNever)(d)
                        }
                    }(e, N, d);
                let b = (t = function(e) {
                    var t;
                    let n = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: l
                        } = e;
                    if (null != (t = l) && t.length > 1) {
                        let [e, t] = (0, _.splitQuery)(l);
                        e.length > 0 && (n.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (n.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: a
                    } = e, u = {};
                    r && (u.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - C.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (u.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(u).length > 0 && (n.or_query.safety_signals = u);
                    let {
                        selectedRoleIds: i
                    } = e;
                    return i.size > 0 && (n.and_query.role_ids = {
                        and_query: Array.from(i)
                    }), n
                }(i), null == (n = v) ? t : {
                    ...t,
                    ...n
                });
                if (function(e, t) {
                        let n = p(e);
                        return s(n.query, t)
                    }(c, b) && (0, o.isEqual)(R, N.cursor)) return;
                let U = function(e, t, n, l) {
                    var r;
                    let u = T(e);
                    return (null == u ? void 0 : u.requestState) === a.PENDING && (null === (r = u.abortController) || void 0 === r || r.abort()), A(e, {
                        requestState: a.PENDING,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: n,
                        previousPagination: l
                    })
                }(c, b, R, d);
                try {
                    ;
                    if (g.info("Making member search request", {
                            query: U.query,
                            guildId: e
                        }), null == U.query) throw Error("Query is null");
                    await (0, h.searchGuildMembers)(e, U.query, {
                        signal: null !== (r = null === (l = U.abortController) || void 0 === l ? void 0 : l.signal) && void 0 !== r ? r : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = T(e);
                        null != t && A(e, {
                            requestState: a.FAILED,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(c);
                    return
                }
                M(c)
            }

            function U(e) {
                return R(t => {
                    var n;
                    let l = I(e);
                    return (null === (n = t[l]) || void 0 === n ? void 0 : n.requestState) === a.PENDING
                })
            }

            function x(e) {
                return R(t => {
                    var n;
                    let l = I(e);
                    return (null === (n = t[l]) || void 0 === n ? void 0 : n.requestState) === a.STILL_INDEXING
                })
            }

            function y(e) {
                let {
                    guildId: t
                } = e;
                v(t), b(t)
            }

            function H(e) {
                let {
                    guild: t
                } = e;
                v(t.id)
            }

            function G(e) {
                let {
                    guildId: t
                } = e;
                b(t)
            }

            function L(e) {
                let {
                    guildId: t
                } = e;
                b(t)
            }

            function D(e) {
                let {
                    guildId: t
                } = e, n = I(t);
                M(n)
            }

            function j(e) {
                let {
                    guildId: t
                } = e, n = I(t);
                A(n, {
                    requestState: a.STILL_INDEXING,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        },
        714247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("446674"),
                u = n("812204"),
                i = n("685665"),
                s = n("744568"),
                o = n("208021"),
                d = n("982108"),
                c = n("305961"),
                f = n("49111"),
                E = n("973033");

            function S(e) {
                let {
                    guildId: t
                } = e, n = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: S
                } = (0, i.default)(u.default.MEMBER_SAFETY_PAGE), _ = (0, a.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(t), [t]), C = r.useCallback(() => {
                    o.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != _ && null != _ ? (0, l.jsx)(S, {
                    children: (0, l.jsx)("div", {
                        className: E.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(s.default, {
                            userId: _.details.userId,
                            guildId: _.details.guildId,
                            onClose: C
                        })
                    })
                }) : null
            }
        },
        112265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("446674"),
                s = n("77078"),
                o = n("812204"),
                d = n("685665"),
                c = n("69927"),
                f = n("994906"),
                E = n("459824"),
                S = n("41594"),
                _ = n("539938"),
                C = n("393414"),
                h = n("401642"),
                m = n("982108"),
                g = n("42203"),
                I = n("923959"),
                N = n("305961"),
                R = n("18494"),
                A = n("98292"),
                T = n("155207"),
                p = n("466818"),
                M = n("914985"),
                v = n("714247"),
                b = n("565556"),
                U = n("891222"),
                x = n("49111"),
                y = n("724210"),
                H = n("782340"),
                G = n("973033"),
                L = n("305794");

            function D(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, a = H.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, u = H.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: a
                }), (0, l.jsxs)(_.default, {
                    className: G.header,
                    innerClassname: G.innerHeader,
                    channelId: y.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(s.Button, {
                        className: G.returnButton,
                        size: s.Button.Sizes.SMALL,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, C.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(s.Text, {
                            className: G.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: H.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(r.Fragment, {
                                    children: [(0, l.jsx)(S.ChannelItemIcon, {
                                        className: G.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(A.default, {
                                        children: (0, l.jsx)(s.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(_.default.Icon, {
                        icon: T.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(_.default.Title, {
                        children: u
                    })]
                })
            }

            function j(e) {
                let {
                    guildId: t
                } = e, n = (0, i.useStateFromStores)([N.default], () => N.default.getGuild(t)), {
                    AnalyticsLocationProvider: a
                } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, p.useCanAccessMemberSafetyPage)(t), S = (0, E.useCanAccessGuildMemberModView)(t), _ = (0, i.useStateFromStores)([R.default], () => R.default.getLastSelectedChannelId(t)), A = (0, i.useStateFromStores)([g.default], () => g.default.getChannel(_)), T = r.useRef(null);
                r.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = I.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, C.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let H = (0, i.useStateFromStores)([m.default], () => null != m.default.getGuildSidebarState(t), [t]),
                    j = r.useCallback(e => {
                        S ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, y.StaticChannelRoute.MEMBER_SAFETY) : (0, h.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: x.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [S]);
                return null != n && c ? (0, l.jsxs)(a, {
                    children: [(0, l.jsxs)("div", {
                        className: u(L.chat, G.page, {
                            [L.threadSidebarOpen]: H
                        }),
                        children: [(0, l.jsx)(D, {
                            guild: n,
                            previousChannel: A
                        }), (0, l.jsx)(s.AdvancedScroller, {
                            className: u(G.scroller),
                            ref: T,
                            children: (0, l.jsxs)("div", {
                                className: u(L.content, G.container),
                                children: [(0, l.jsx)(M.default, {
                                    guild: n
                                }), (0, l.jsx)(U.default, {
                                    guild: n,
                                    onMemberSelect: j
                                })]
                            })
                        }), (0, l.jsx)(b.default, {
                            guildId: n.id
                        })]
                    }), S && (0, l.jsx)(v.default, {
                        guildId: n.id
                    })]
                }) : null
            }
        },
        891222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("301165"),
                s = n("65597"),
                o = n("219115"),
                d = n("178406"),
                c = n("553275"),
                f = n("691307"),
                E = n("314143"),
                S = n("721302"),
                _ = n("888940");

            function C(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequestV2)(t.id), r = (0, i.useSpring)({
                    height: n ? 3 : 0,
                    config: i.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: _.loaderContainer,
                    children: (0, l.jsx)(i.animated.div, {
                        className: _.loaderBar,
                        style: r
                    })
                })
            }

            function h(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: a,
                    onMemberSelect: i
                } = e, h = (0, s.default)([d.default], () => d.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), m = (0, o.useIsMakingRequestV2)(t.id), g = (0, o.useIsStillIndexingV2)(t.id), I = r.useCallback(e => {
                    null != e && (null == i || i(e))
                }, [i]), N = (0, c.getSearchState)(g, m, h);
                return (0, l.jsxs)("div", {
                    className: u(_.mainTableContainer, n),
                    children: [(0, l.jsx)(S.default, {
                        guild: t
                    }), (0, l.jsx)(C, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: I,
                        searchState: N
                    }), N !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(E.default, {
                        guildId: t.id,
                        onPageChange: a
                    })]
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                r = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("458960"),
                s = n("77078"),
                o = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends r.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : i.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return i.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return i.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, l.jsx)(i.default.div, {
                        className: u(e, o.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new i.default.Value(0)
                }
            }
            c.contextType = s.AccessibilityPreferencesContext;
            var f = c
        },
        741919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                a = n("99637"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: a,
                        foreground: u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: a,
                        children: [(0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        }), (0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        }), (0, l.jsx)("path", {
                            fill: r,
                            className: u,
                            d: "M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        })]
                    })
                }, a.WebhookIcon)
        }
    }
]);