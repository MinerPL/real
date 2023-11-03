(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["913"], {
        90490: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var a = s("446674"),
                l = s("407846"),
                i = s("913144"),
                n = s("697218"),
                u = s("591023"),
                r = s("567054"),
                o = s("982527");
            let d = {};

            function c(e) {
                var t;
                return null !== (t = d[e]) && void 0 !== t ? t : 0
            }

            function E(e, t) {
                d[e] = t
            }

            function I(e, t, s) {
                if (t !== s && null != t) {
                    var a, l, i, n;
                    if (t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        a = e, l = t + 1, d[a] = l
                    }
                    if (s === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        ;
                        let t = c(e);
                        i = e, n = Math.max(0, t - 1), d[i] = n
                    }
                }
            }
            let S = !1,
                f = {
                    GUILD_JOIN_REQUESTS_BY_ID: e => "guild-join-request=".concat(e),
                    GUILD_JOIN_REQUESTS_BY_STATUS: (e, t) => "guild-".concat(e, "-").concat(t)
                };

            function T(e) {
                let t = [];
                return t.push(f.GUILD_JOIN_REQUESTS_BY_ID(e.id)), t.push(f.GUILD_JOIN_REQUESTS_BY_STATUS(e.guildId, e.applicationStatus)), t
            }
            let _ = new l.default(T, e => "".concat(e.id)),
                R = new l.default(T, e => "".concat(e.id)),
                p = new l.default(T, e => "".concat(e.actionedAt));

            function m(e) {
                return _.get(e)
            }

            function N(e) {
                _.set(e.id, e), (0, u.isSubmittedApplicationStatus)(e.applicationStatus) && (p.delete(e.id), R.set(e.id, e)), (0, u.isActionedApplicationStatus)(e.applicationStatus) && (R.delete(e.id), p.set(e.id, e))
            }

            function A(e) {
                var t, s;
                let {
                    guildId: a,
                    request: l
                } = e, i = (0, o.joinRequestFromServer)(l), u = n.default.getCurrentUser();
                if (null == u || i.userId === u.id) return !1;
                let r = null === (s = i.id, t = _.get(s)) || void 0 === t ? void 0 : t.applicationStatus;
                return I(a, i.applicationStatus, r), N(i), !0
            }
            let M = {},
                h = {},
                g = {};
            class x extends a.default.Store {
                getRequests(e, t) {
                    let s = f.GUILD_JOIN_REQUESTS_BY_STATUS(e, t);
                    return (0, u.isActionedApplicationStatus)(t) ? p.values(s) : (0, u.isSubmittedApplicationStatus)(t) ? R.values(s) : _.values(s)
                }
                getSubmittedGuildJoinRequestTotal(e) {
                    return c(e)
                }
                isFetching() {
                    return S
                }
                getSelectedApplicationStatus(e) {
                    var t;
                    return null !== (t = M[e]) && void 0 !== t ? t : r.GuildJoinRequestApplicationStatuses.SUBMITTED
                }
                getSelectedSortOrder(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : r.GuildJoinRequestSortOrders.TIMESTAMP_DESC
                }
                getSelectedGuildJoinRequest(e) {
                    var t;
                    let s = g[e];
                    return null != s ? (t = s.id, _.get(t)) : null
                }
            }
            x.displayName = "GuildJoinRequestStoreV2";
            var G = new x(i.default, {
                GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function(e) {
                    let {
                        status: t,
                        requests: s,
                        total: a,
                        guildId: l
                    } = e;
                    if (S = !1, t === r.GuildJoinRequestApplicationStatuses.SUBMITTED) {
                        var i, n;
                        i = l, n = a, d[i] = n
                    }
                    s.forEach(e => {
                        N(e)
                    })
                },
                GUILD_JOIN_REQUESTS_FETCH_START: function() {
                    S = !0
                },
                GUILD_JOIN_REQUESTS_FETCH_FAILURE: function() {
                    S = !1
                },
                GUILD_JOIN_REQUESTS_BULK_ACTION: function(e) {
                    let {
                        guildId: t,
                        action: s
                    } = e, a = _.values(f.GUILD_JOIN_REQUESTS_BY_STATUS(t, r.GuildJoinRequestApplicationStatuses.SUBMITTED));
                    a.forEach(e => {
                        N({
                            ...e,
                            applicationStatus: s
                        })
                    }), d[t] = 0
                },
                GUILD_JOIN_REQUEST_CREATE: A,
                GUILD_JOIN_REQUEST_UPDATE: A,
                GUILD_JOIN_REQUEST_DELETE: function(e) {
                    var t, s;
                    let {
                        id: a,
                        guildId: l
                    } = e;
                    let i = (t = a, _.get(t));
                    if (null != i) {
                        ;
                        I(l, null, i.applicationStatus), s = a, _.delete(s), R.delete(s), p.delete(s)
                    }
                },
                GUILD_JOIN_REQUESTS_SET_APPLICATION_STATUS: function(e) {
                    let {
                        guildId: t,
                        applicationStatus: s
                    } = e;
                    s !== M[t] && (M[t] = s)
                },
                GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function(e) {
                    var t;
                    let {
                        guildId: s,
                        sortOrder: a
                    } = e;
                    if (a === h[s]) return;
                    h[s] = a;
                    let l = null !== (t = M[s]) && void 0 !== t ? t : r.GuildJoinRequestApplicationStatuses.SUBMITTED;
                    (0, u.isActionedApplicationStatus)(l) && p.clear(), (0, u.isSubmittedApplicationStatus)(l) && R.clear()
                },
                GUILD_JOIN_REQUESTS_SET_SELECTED: function(e) {
                    let {
                        guildId: t,
                        request: s
                    } = e;
                    g[t] = s
                }
            })
        },
        138219: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                usePaginatedMemberApplications: function() {
                    return c
                }
            });
            var a = s("884691"),
                l = s("866227"),
                i = s.n(l),
                n = s("249654"),
                u = s("448993"),
                r = s("549103"),
                o = s("567054");
            let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;

            function c(e) {
                let {
                    guildId: t,
                    guildJoinRequests: s
                } = e, l = a.useRef(!1), [c, E] = a.useState(null), I = a.useRef(null), S = a.useRef(!1), f = a.useCallback(async (e, a) => {
                    if (l.current) return;
                    let f = "".concat(e, "-").concat(a),
                        T = !1;
                    if (f !== I.current && (I.current = f, S.current = !1, T = !0), S.current) return;
                    null != c && E(null);
                    let _ = function(e, t, s, a) {
                        let l = s === o.GuildJoinRequestApplicationStatuses.SUBMITTED;
                        if (t === o.GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                            if (a) {
                                let e = n.default.fromTimestamp(new Date().getTime());
                                return {
                                    before: e
                                }
                            } {
                                let t = e[e.length - 1],
                                    s = l ? t.id : t.actionedAt;
                                return {
                                    before: s
                                }
                            }
                        }
                        if (a) {
                            let e = n.default.fromTimestamp(i().subtract(180, "days").valueOf());
                            return {
                                after: e
                            }
                        } {
                            let t = e[e.length - 1],
                                s = l ? t.id : t.actionedAt;
                            return {
                                after: s
                            }
                        }
                    }(s, e, a, T);
                    try {
                        l.current = !0;
                        let e = await r.default.fetchGuildJoinRequests({
                            guildId: t,
                            status: a,
                            limit: d,
                            ..._
                        });
                        if (null != e) {
                            let {
                                guild_join_requests: t
                            } = e.body;
                            t.length < d && (S.current = !0)
                        }
                    } catch (t) {
                        let e = new u.APIError(t);
                        E(e.getAnyErrorMessage())
                    } finally {
                        l.current = !1
                    }
                }, [c, t, s]);
                return {
                    fetchNextPage: f,
                    error: c
                }
            }
        },
        419555: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useSelectedApplicationStatus: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("90490");

            function i(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([l.default], () => l.default.getSelectedApplicationStatus(t), [t]);
                return s
            }
        },
        122766: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useSelectedGuildJoinRequest: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("90490");

            function i(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([l.default], () => l.default.getSelectedGuildJoinRequest(t), [t]);
                return s
            }
        },
        268027: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useSelectedSortOrder: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("90490");

            function i(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([l.default], () => l.default.getSelectedSortOrder(t), [t]);
                return s
            }
        },
        533788: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useSortedMemberApplications: function() {
                    return u
                }
            });
            var a = s("884691"),
                l = s("446674"),
                i = s("90490"),
                n = s("567054");

            function u(e) {
                let {
                    guildId: t,
                    applicationStatus: s,
                    sortOrder: u
                } = e, r = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]), o = a.useMemo(() => u === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...r].reverse() : r, [u, r]);
                return {
                    guildJoinRequests: o
                }
            }
        },
        859130: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useSubmittedGuildJoinRequestTotal: function() {
                    return i
                }
            });
            var a = s("446674"),
                l = s("90490");

            function i(e) {
                let {
                    guildId: t
                } = e, s = (0, a.useStateFromStores)([l.default], () => l.default.getSubmittedGuildJoinRequestTotal(t), [t]);
                return s
            }
        },
        597235: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("446674"),
                n = s("69927"),
                u = s("766274"),
                r = s("305961"),
                o = s("549103"),
                d = s("50926"),
                c = s("122766"),
                E = s("117370"),
                I = s("276566"),
                S = s("782340"),
                f = s("130769"),
                T = function(e) {
                    let {
                        guildId: t
                    } = e, s = (0, c.useSelectedGuildJoinRequest)({
                        guildId: t
                    }), {
                        user: T
                    } = null != s ? s : {}, _ = l.useMemo(() => null != T ? new u.default(T) : null, [T]), R = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(t), [t]);
                    return (0, n.usePageTitle)({
                        subsection: S.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
                        location: null == R ? void 0 : R.name
                    }), l.useEffect(() => {
                        d.default.fetchVerificationForm(t)
                    }, [t]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: f.content,
                            children: (0, a.jsx)(E.default, {
                                guildId: t
                            })
                        }), null != s && null != R && null != _ && (0, a.jsx)("section", {
                            className: f.sidebar,
                            children: (0, a.jsx)(I.default, {
                                guild: R,
                                guildJoinRequest: s,
                                guildJoinRequestUser: _,
                                onClose: () => o.default.setSelectedGuildJoinRequest(t, null)
                            })
                        })]
                    })
                }
        },
        946128: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("567054"),
                u = s("782340"),
                r = function(e) {
                    let {
                        className: t,
                        sortOrder: s,
                        onSortChange: r
                    } = e, o = l.useMemo(() => [{
                        value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
                        label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
                    }, {
                        value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
                        label: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
                    }], []);
                    return (0, a.jsx)(i.SingleSelect, {
                        className: t,
                        onChange: r,
                        value: s,
                        options: o
                    })
                }
        },
        117370: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("549103"),
                u = s("138219"),
                r = s("419555"),
                o = s("122766"),
                d = s("268027"),
                c = s("533788"),
                E = s("859130"),
                I = s("946128"),
                S = s("652469"),
                f = s("255941"),
                T = s("782340"),
                _ = s("295952"),
                R = l.memo(function(e) {
                    let {
                        guildId: t
                    } = e, s = l.useRef(null), R = (0, r.useSelectedApplicationStatus)({
                        guildId: t
                    }), p = (0, d.useSelectedSortOrder)({
                        guildId: t
                    }), m = (0, o.useSelectedGuildJoinRequest)({
                        guildId: t
                    }), N = (0, E.useSubmittedGuildJoinRequestTotal)({
                        guildId: t
                    }), {
                        guildJoinRequests: A
                    } = (0, c.useSortedMemberApplications)({
                        guildId: t,
                        applicationStatus: R,
                        sortOrder: p
                    }), {
                        fetchNextPage: M
                    } = (0, u.usePaginatedMemberApplications)({
                        guildId: t,
                        guildJoinRequests: A
                    }), h = l.useRef(!1);
                    !h.current && (h.current = !0, M(p, R));
                    let g = l.useRef(!1);
                    l.useEffect(() => {
                        g.current = !0
                    }, [p, R]), l.useEffect(() => {
                        if (g.current && 0 !== A.length) {
                            var e;
                            g.current = !1, n.default.setSelectedGuildJoinRequest(t, A[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
                        }
                    }, [t, A, m]);
                    let x = l.useCallback(async e => {
                            p !== e && (n.default.setSelectedSortOrder(t, e), await M(e, R))
                        }, [R, p, t, M]),
                        G = l.useCallback(async e => {
                            R !== e && (n.default.setSelectedApplicationStatus(t, e), n.default.setSelectedGuildJoinRequest(t, null), await M(p, e))
                        }, [R, p, t, M]),
                        C = l.useCallback(async () => {
                            var e;
                            let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
                            if (null == t) return;
                            let a = t.scrollHeight - t.scrollTop - t.offsetHeight;
                            a < 200 && await M(p, R)
                        }, [R, p, M]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(S.default, {
                            applicationStatus: R,
                            onTabItemSelect: G,
                            pendingGuildJoinRequestsTotal: N
                        }), (0, a.jsxs)("div", {
                            className: _.content,
                            children: [(0, a.jsx)("div", {
                                className: _.listControls,
                                children: (0, a.jsx)(I.default, {
                                    className: _.sortSelect,
                                    sortOrder: p,
                                    onSortChange: x
                                })
                            }), (0, a.jsx)(i.Text, {
                                className: _.description,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: T.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
                            }), (0, a.jsx)(f.default, {
                                applicationStatus: R,
                                guildJoinRequests: A,
                                guildId: t,
                                onScroll: C,
                                listRef: s
                            })]
                        })]
                    })
                })
        },
        652469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                i = s("539938"),
                n = s("922577"),
                u = s("567054"),
                r = s("782340"),
                o = s("462590"),
                d = function(e) {
                    let {
                        pendingGuildJoinRequestsTotal: t,
                        applicationStatus: s,
                        onTabItemSelect: d
                    } = e;
                    return (0, a.jsxs)(i.default, {
                        className: o.container,
                        hideSearch: !0,
                        toolbar: (0, a.jsx)("div", {}),
                        children: [(0, a.jsx)(i.default.Icon, {
                            icon: n.default,
                            disabled: !0,
                            "aria-label": r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Title, {
                            className: o.title,
                            children: r.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Divider, {
                            className: o.divider
                        }), (0, a.jsxs)(l.TabBar, {
                            "aria-label": r.default.Messages.FRIENDS,
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: d,
                            className: o.tabBar,
                            children: [(0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.SUBMITTED,
                                children: 0 === t ? r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
                                    count: t
                                })
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.APPROVED,
                                children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: u.GuildJoinRequestApplicationStatuses.REJECTED,
                                children: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
                            })]
                        })]
                    })
                }
        },
        255941: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                i = s.n(l),
                n = s("974667"),
                u = s("446674"),
                r = s("77078"),
                o = s("302437"),
                d = s("305961"),
                c = s("36694"),
                E = s("128295"),
                I = s("414868"),
                S = s("549103"),
                f = s("90490"),
                T = s("567054"),
                _ = s("122766"),
                R = s("859130"),
                p = s("667793"),
                m = s("782340"),
                N = s("297298");
            let A = () => null;

            function M(e) {
                let {
                    status: t
                } = e, s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
                switch (t) {
                    case T.GuildJoinRequestApplicationStatuses.REJECTED:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
                        break;
                    case T.GuildJoinRequestApplicationStatuses.APPROVED:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
                        break;
                    default:
                        s = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
                }
                return (0, a.jsxs)("div", {
                    className: N.emptyContainer,
                    children: [(0, a.jsxs)("div", {
                        className: N.emptyIcon,
                        children: [(0, a.jsx)(I.default, {
                            className: N.star
                        }), (0, a.jsx)(c.default, {
                            className: N.checkmark
                        }), (0, a.jsx)(E.default, {
                            className: N.plus
                        })]
                    }), (0, a.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        children: s
                    }), (0, a.jsx)(r.Text, {
                        color: "header-secondary",
                        className: N.emptyBody,
                        variant: "text-sm/normal",
                        children: l
                    })]
                })
            }
            var h = function(e) {
                let {
                    applicationStatus: t,
                    guildJoinRequests: s,
                    guildId: l,
                    onScroll: c,
                    listRef: E
                } = e, I = (0, u.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), h = (0, u.useStateFromStores)([f.default], () => f.default.isFetching()), g = h ? [s.length + 25] : [s.length], x = (0, _.useSelectedGuildJoinRequest)({
                    guildId: l
                }), G = (0, R.useSubmittedGuildJoinRequestTotal)({
                    guildId: l
                }), C = (0, o.default)("guild-join-requests"), v = e => {
                    let {
                        row: n
                    } = e, u = s[n];
                    return null == u ? (0, a.jsx)(p.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(p.MemberApplicationsListRow, {
                        className: i({
                            [N.selected]: x === u,
                            [N.siblingSelected]: x === s[n - 1]
                        }),
                        guild: I,
                        guildJoinRequest: u,
                        onClick: () => S.default.setSelectedGuildJoinRequest(l, u),
                        applicationStatus: t
                    }, "".concat(u.userId, "-").concat(u.applicationStatus, "-").concat(n))
                };
                return h || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
                    children: [0 !== G && t === T.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(r.Text, {
                        className: N.title,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: (function(e, t) {
                            let s = t.toLocaleString();
                            switch (e) {
                                case T.GuildJoinRequestApplicationStatuses.SUBMITTED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case T.GuildJoinRequestApplicationStatuses.REJECTED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case T.GuildJoinRequestApplicationStatuses.APPROVED:
                                    return m.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                default:
                                    return ""
                            }
                        })(t, G).toUpperCase()
                    }), (0, a.jsx)(n.ListNavigatorProvider, {
                        navigator: C,
                        children: (0, a.jsx)(n.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    role: s,
                                    ...l
                                } = e;
                                return (0, a.jsx)(r.List, {
                                    innerRole: s,
                                    innerAriaLabel: m.default.Messages.MEMBERS,
                                    ref: e => {
                                        var s;
                                        E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
                                    },
                                    paddingTop: 0,
                                    paddingBottom: 16,
                                    sectionHeight: 0,
                                    rowHeight: 64,
                                    renderSection: A,
                                    renderRow: v,
                                    sections: g,
                                    onScroll: c,
                                    fade: !0,
                                    ...l
                                }, "guild-application-review")
                            }
                        })
                    })]
                }) : (0, a.jsx)(M, {
                    status: t
                })
            }
        },
        667793: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MemberApplicationsListRow: function() {
                    return N
                },
                MemberApplicationsListRowPlaceholder: function() {
                    return A
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                n = s.n(i),
                u = s("866227"),
                r = s.n(u),
                o = s("77078"),
                d = s("272030"),
                c = s("766274"),
                E = s("36694"),
                I = s("945330"),
                S = s("433487"),
                f = s("315102"),
                T = s("549103"),
                _ = s("567054"),
                R = s("782340"),
                p = s("297298");

            function m(e) {
                let {
                    icon: t,
                    onClick: s,
                    submitting: l,
                    disabled: i
                } = e;
                return (0, a.jsx)(o.Clickable, {
                    className: n(p.actionIconContainer, {
                        [p.disabled]: i || l
                    }),
                    onClick: s,
                    children: l ? (0, a.jsx)(o.Dots, {
                        className: p.icon,
                        dotRadius: 2,
                        themed: !0
                    }) : (0, a.jsx)(t, {
                        className: p.icon,
                        height: 12,
                        width: 12
                    })
                })
            }

            function N(e) {
                let {
                    applicationStatus: t,
                    guild: i,
                    guildJoinRequest: u,
                    className: N,
                    onClick: A
                } = e, [M, h] = l.useState(null), {
                    user: g,
                    createdAt: x
                } = u;
                if (null == g) throw Error("Missing user on this guild join request!");
                let G = l.useMemo(() => new c.default(g), [g]),
                    C = f.default.getUserAvatarURL(G),
                    v = t === _.GuildJoinRequestApplicationStatuses.SUBMITTED,
                    D = l.useCallback(async (e, t) => {
                        let {
                            guildId: s,
                            userId: a
                        } = e;
                        if (null == M) {
                            h(t);
                            try {
                                await T.default.updateGuildJoinRequest(s, a, t)
                            } catch (e) {
                                (0, o.showToast)((0, o.createToast)(R.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), h(null)
                            }
                        }
                    }, [M]),
                    O = async () => {
                        await D(u, _.GuildJoinRequestApplicationStatuses.APPROVED)
                    }, j = async () => {
                        await D(u, _.GuildJoinRequestApplicationStatuses.REJECTED)
                    };
                return (0, a.jsxs)(o.Clickable, {
                    className: n(p.container, N),
                    onClick: A,
                    children: [(0, a.jsx)(o.Avatar, {
                        src: C,
                        size: o.AvatarSizes.SIZE_40,
                        "aria-label": g.username,
                        className: p.spacer
                    }), (0, a.jsxs)("div", {
                        className: p.userDetails,
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: g.username
                        }), (0, a.jsx)(o.Text, {
                            className: p.createdAt,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: r(x).format("lll")
                        })]
                    }), v && (0, a.jsx)(m, {
                        icon: E.default,
                        onClick: O,
                        submitting: M === _.GuildJoinRequestApplicationStatuses.APPROVED,
                        disabled: null != M && M !== _.GuildJoinRequestApplicationStatuses.APPROVED
                    }), v && (0, a.jsx)(m, {
                        icon: I.default,
                        onClick: j,
                        submitting: M === _.GuildJoinRequestApplicationStatuses.REJECTED,
                        disabled: null != M && M !== _.GuildJoinRequestApplicationStatuses.REJECTED
                    }), (0, a.jsx)(o.Clickable, {
                        className: n(p.overflowMenuContainer, {
                            [p.disabled]: null != M
                        }),
                        onClick: e => {
                            (0, d.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await s.el("176032").then(s.bind(s, "176032"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guild: i,
                                    user: G
                                })
                            }, {
                                position: "bottom",
                                align: "right"
                            })
                        },
                        children: (0, a.jsx)(S.default, {
                            className: p.icon,
                            width: 18
                        })
                    })]
                })
            }

            function A() {
                return (0, a.jsxs)("div", {
                    className: p.placeholder,
                    children: [(0, a.jsx)("div", {
                        className: n(p.placeholderAvatar)
                    }), (0, a.jsxs)("div", {
                        className: p.userDetails,
                        children: [(0, a.jsx)("div", {
                            className: p.placeholderUsername,
                            style: {
                                maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
                            }
                        }), (0, a.jsx)("div", {
                            className: p.placeholderCreatedAt,
                            style: {
                                maxWidth: "".concat(Math.floor(25 * Math.random()) + 50, "px")
                            }
                        })]
                    })]
                })
            }
        },
        709863: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("866227"),
                n = s.n(i),
                u = s("249654"),
                r = s("446674"),
                o = s("669491"),
                d = s("77078"),
                c = s("272030"),
                E = s("401642"),
                I = s("26989"),
                S = s("697218"),
                f = s("578706"),
                T = s("381546"),
                _ = s("841811"),
                R = s("433487"),
                p = s("549103"),
                m = s("567054"),
                N = s("49111"),
                A = s("782340"),
                M = s("127953");

            function h(e) {
                var t;
                let {
                    guildJoinRequest: i,
                    guild: h,
                    guildJoinRequestUser: g
                } = e, [x, G] = l.useState(!1), {
                    createdAt: C,
                    actionedAt: v,
                    guildId: D,
                    userId: O
                } = i, j = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id, U = (0, r.useStateFromStores)([S.default], () => S.default.getUser(j)), P = (0, r.useStateFromStores)([I.default], () => null != j ? I.default.getMember(D, j) : null, [j, D]), L = l.useCallback(() => {
                    (0, d.showToast)((0, d.createToast)(A.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
                }, []), J = async () => {
                    if (!x) {
                        G(!0);
                        try {
                            await p.default.updateGuildJoinRequest(D, O, m.GuildJoinRequestApplicationStatuses.APPROVED)
                        } catch {
                            L()
                        } finally {
                            G(!1)
                        }
                    }
                }, b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, F = (0, a.jsx)(_.default, {
                    width: 24,
                    height: 24,
                    className: M.icon
                });
                i.applicationStatus === m.GuildJoinRequestApplicationStatuses.APPROVED ? (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, F = (0, a.jsx)(f.default, {
                    width: 24,
                    height: 24,
                    className: M.iconApproved,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                })) : i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && (b = A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, F = (0, a.jsx)(T.default, {
                    width: 24,
                    height: 24,
                    className: M.iconRejected,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                }));
                let B = null != U && null != v ? A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
                    date: n(u.default.extractTimestamp(v)).format("ll"),
                    usernameHook: function() {
                        var e;
                        return (0, a.jsx)(d.Clickable, {
                            className: M.actionedByUser,
                            onClick: () => (0, E.openUserProfileModal)({
                                userId: U.id,
                                guildId: D,
                                analyticsLocation: {
                                    section: N.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                    object: N.AnalyticsObjects.ACTIONED_BY_USER
                                }
                            }),
                            tag: "div",
                            role: "link",
                            children: (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: null !== (e = null == P ? void 0 : P.nick) && void 0 !== e ? e : U.username
                            })
                        }, "username-hook")
                    }
                }) : n(C).format("lll");
                return (0, a.jsxs)("div", {
                    className: M.container,
                    children: [(0, a.jsxs)("div", {
                        className: M.wrapper,
                        children: [(0, a.jsxs)("div", {
                            className: M.inline,
                            children: [F, (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: b
                                }), (0, a.jsx)(d.Text, {
                                    className: M.headerSubtext,
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: B
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: M.inline,
                            children: [i.applicationStatus === m.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
                                className: M.buttons,
                                children: [(0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.GREEN,
                                    submitting: x,
                                    onClick: () => J(),
                                    children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                                }), (0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.RED,
                                    onClick: () => {
                                        (0, d.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await s.el("155554").then(s.bind(s, "155554"));
                                            return t => (0, a.jsx)(e, {
                                                modalProps: t,
                                                guildId: D,
                                                userId: O,
                                                onError: L
                                            })
                                        })
                                    },
                                    disabled: x,
                                    children: A.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
                                })]
                            }), (0, a.jsx)(d.Clickable, {
                                onClick: e => {
                                    (0, c.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await s.el("176032").then(s.bind(s, "176032"));
                                        return t => (0, a.jsx)(e, {
                                            ...t,
                                            guild: h,
                                            user: g
                                        })
                                    })
                                },
                                className: M.overflow,
                                children: (0, a.jsx)(R.default, {
                                    width: 20,
                                    height: 20,
                                    className: M.iconInteractive
                                })
                            })]
                        })]
                    }), i.applicationStatus === m.GuildJoinRequestApplicationStatuses.REJECTED && null != i.rejectionReason && (0, a.jsx)("div", {
                        className: M.rejectionReason,
                        children: (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: i.rejectionReason
                        })
                    })]
                })
            }
        },
        227457: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                i = s.n(l),
                n = s("77078"),
                u = s("401642"),
                r = s("315102"),
                o = s("49111"),
                d = s("782340"),
                c = s("22727");

            function E(e) {
                let {
                    user: t,
                    className: s
                } = e, {
                    discriminator: l,
                    username: E
                } = t, I = r.default.getUserAvatarURL(t);
                return (0, a.jsxs)("div", {
                    className: i(c.container, s),
                    children: [(0, a.jsx)(n.Avatar, {
                        src: I,
                        size: n.AvatarSizes.SIZE_80,
                        "aria-label": E,
                        className: c.avatar
                    }), (0, a.jsxs)("div", {
                        className: c.username,
                        children: [(0, a.jsx)(n.Heading, {
                            variant: "heading-xl/semibold",
                            children: E
                        }), (0, a.jsxs)(n.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: ["#", l]
                        })]
                    }), (0, a.jsx)(n.Anchor, {
                        onClick: () => {
                            (0, u.openUserProfileModal)({
                                userId: t.id,
                                analyticsLocation: {
                                    section: o.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                    object: o.AnalyticsObjects.JOIN_REQUEST
                                }
                            })
                        },
                        children: d.default.Messages.VIEW_PROFILE
                    })]
                })
            }
        },
        276566: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("945330"),
                u = s("781896"),
                r = s("664336"),
                o = s("158998"),
                d = s("781609"),
                c = s("709863"),
                E = s("227457"),
                I = s("782340"),
                S = s("536043"),
                f = function(e) {
                    var t;
                    let {
                        guild: s,
                        guildJoinRequest: f,
                        guildJoinRequestUser: T,
                        onClose: _
                    } = e, R = l.useMemo(() => null !== (t = f.formResponses) && void 0 !== t ? t : [], [f.formResponses]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(r.default, {
                            toolbar: (0, a.jsx)(r.default.Icon, {
                                icon: n.default,
                                onClick: _,
                                tooltip: I.default.Messages.CLOSE
                            }),
                            children: [(0, a.jsx)(r.default.Icon, {
                                icon: u.default,
                                disabled: !0,
                                "aria-label": I.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: o.default.getName(T)
                            })]
                        }), (0, a.jsx)(c.default, {
                            guildJoinRequest: f,
                            guildJoinRequestUser: T,
                            guild: s
                        }), (0, a.jsxs)(i.Scroller, {
                            children: [(0, a.jsx)(E.default, {
                                user: T,
                                className: S.container
                            }), (0, a.jsx)("div", {
                                className: S.disabledFormRenderer,
                                children: (0, a.jsx)(d.default, {
                                    guildId: s.id,
                                    formFields: R,
                                    user: T
                                })
                            })]
                        })]
                    })
                }
        },
        781609: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                i = s("697218"),
                n = s("975743"),
                u = s("567054"),
                r = s("272460"),
                o = s("472850"),
                d = s("199901"),
                c = s("772970"),
                E = s("621115"),
                I = s("782340"),
                S = function(e) {
                    let {
                        formFields: t,
                        user: s
                    } = e, S = (0, l.useStateFromStores)([i.default], () => null != s ? s : i.default.getCurrentUser());
                    return null == S ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.RequirementRenderer, {
                            icon: n.default,
                            text: I.default.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                            meetsRequirement: !0
                        }), t.map((e, t) => (function(e, t) {
                            switch (e.field_type) {
                                case u.VerificationFormFieldTypes.TERMS:
                                    return (0, a.jsx)(c.DisabledTermsRequirementFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.TEXT_INPUT:
                                    return (0, a.jsx)(E.DisabledTextInputFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.PARAGRAPH:
                                    return (0, a.jsx)(d.DisabledParagraphFormField, {
                                        formField: e
                                    }, t);
                                case u.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                                    return (0, a.jsx)(o.DisabledMultipleChoiceFormField, {
                                        formField: e
                                    }, t)
                            }
                        })(e, t))]
                    })
                }
        },
        975743: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("469563"),
                i = s("877585"),
                n = s("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: i,
                        ...u
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, n.default)(u),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: i,
                            fill: l,
                            d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                        })
                    })
                }, i.ShieldIcon)
        }
    }
]);