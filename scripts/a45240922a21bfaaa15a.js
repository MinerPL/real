(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["913"], {
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
                r = s("448993"),
                u = s("549103"),
                o = s("567054");
            let d = o.MAX_RESULTS_PER_PAGE * o.MAX_VISIBLE_PAGES;

            function c(e) {
                let {
                    guildId: t,
                    guildJoinRequests: s
                } = e, l = a.useRef(!1), [c, E] = a.useState(null), I = a.useRef(null), f = a.useRef(!1), T = a.useCallback(async (e, a) => {
                    if (l.current) return;
                    let T = "".concat(e, "-").concat(a),
                        S = !1;
                    if (T !== I.current && (I.current = T, f.current = !1, S = !0), f.current) return;
                    null != c && E(null);
                    let R = function(e, t, s, a) {
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
                    }(s, e, a, S);
                    try {
                        l.current = !0;
                        let e = await u.default.fetchGuildJoinRequests({
                            guildId: t,
                            status: a,
                            limit: d,
                            ...R
                        });
                        if (null != e) {
                            let {
                                guild_join_requests: t
                            } = e.body;
                            t.length < d && (f.current = !0)
                        }
                    } catch (t) {
                        let e = new r.APIError(t);
                        E(e.getAnyErrorMessage())
                    } finally {
                        l.current = !1
                    }
                }, [c, t, s]);
                return {
                    fetchNextPage: T,
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
                    return r
                }
            });
            var a = s("884691"),
                l = s("446674"),
                i = s("90490"),
                n = s("567054");

            function r(e) {
                let {
                    guildId: t,
                    applicationStatus: s,
                    sortOrder: r
                } = e, u = (0, l.useStateFromStores)([i.default], () => i.default.getRequests(t, s), [s, t]), o = a.useMemo(() => r === n.GuildJoinRequestSortOrders.TIMESTAMP_DESC ? [...u].reverse() : u, [r, u]);
                return {
                    guildJoinRequests: o
                }
            }
        },
        597235: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("446674"),
                n = s("69927"),
                r = s("766274"),
                u = s("305961"),
                o = s("549103"),
                d = s("50926"),
                c = s("122766"),
                E = s("117370"),
                I = s("276566"),
                f = s("782340"),
                T = s("130769"),
                S = function(e) {
                    let {
                        guildId: t
                    } = e, s = (0, c.useSelectedGuildJoinRequest)({
                        guildId: t
                    }), {
                        user: S
                    } = null != s ? s : {}, R = l.useMemo(() => null != S ? new r.default(S) : null, [S]), _ = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]);
                    return (0, n.usePageTitle)({
                        subsection: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
                        location: null == _ ? void 0 : _.name
                    }), l.useEffect(() => {
                        d.default.fetchVerificationForm(t)
                    }, [t]), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: T.content,
                            children: (0, a.jsx)(E.default, {
                                guildId: t
                            })
                        }), null != s && null != _ && null != R && (0, a.jsx)("section", {
                            className: T.sidebar,
                            children: (0, a.jsx)(I.default, {
                                guild: _,
                                guildJoinRequest: s,
                                guildJoinRequestUser: R,
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
                    return u
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("567054"),
                r = s("782340"),
                u = function(e) {
                    let {
                        className: t,
                        sortOrder: s,
                        onSortChange: u
                    } = e, o = l.useMemo(() => [{
                        value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
                        label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
                    }, {
                        value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
                        label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
                    }], []);
                    return (0, a.jsx)(i.SingleSelect, {
                        className: t,
                        onChange: u,
                        value: s,
                        options: o
                    })
                }
        },
        117370: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("549103"),
                r = s("138219"),
                u = s("419555"),
                o = s("122766"),
                d = s("268027"),
                c = s("533788"),
                E = s("859130"),
                I = s("946128"),
                f = s("652469"),
                T = s("255941"),
                S = s("782340"),
                R = s("295952"),
                _ = l.memo(function(e) {
                    let {
                        guildId: t
                    } = e, s = l.useRef(null), _ = (0, u.useSelectedApplicationStatus)({
                        guildId: t
                    }), m = (0, d.useSelectedSortOrder)({
                        guildId: t
                    }), N = (0, o.useSelectedGuildJoinRequest)({
                        guildId: t
                    }), M = (0, E.useSubmittedGuildJoinRequestTotal)({
                        guildId: t
                    }), {
                        guildJoinRequests: p
                    } = (0, c.useSortedMemberApplications)({
                        guildId: t,
                        applicationStatus: _,
                        sortOrder: m
                    }), {
                        fetchNextPage: A
                    } = (0, r.usePaginatedMemberApplications)({
                        guildId: t,
                        guildJoinRequests: p
                    }), h = l.useRef(!1);
                    !h.current && (h.current = !0, A(m, _));
                    let x = l.useRef(!1);
                    l.useEffect(() => {
                        x.current = !0
                    }, [m, _]), l.useEffect(() => {
                        if (x.current && 0 !== p.length) {
                            var e;
                            x.current = !1, n.default.setSelectedGuildJoinRequest(t, p[0]), null === (e = s.current) || void 0 === e || e.scrollToTop()
                        }
                    }, [t, p, N]);
                    let g = l.useCallback(async e => {
                            m !== e && (n.default.setSelectedSortOrder(t, e), await A(e, _))
                        }, [_, m, t, A]),
                        C = l.useCallback(async e => {
                            _ !== e && (n.default.setSelectedApplicationStatus(t, e), n.default.setSelectedGuildJoinRequest(t, null), await A(m, e))
                        }, [_, m, t, A]),
                        j = l.useCallback(async () => {
                            var e;
                            let t = null === (e = s.current) || void 0 === e ? void 0 : e.getScrollerState();
                            if (null == t) return;
                            let a = t.scrollHeight - t.scrollTop - t.offsetHeight;
                            a < 200 && await A(m, _)
                        }, [_, m, A]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(f.default, {
                            applicationStatus: _,
                            onTabItemSelect: C,
                            pendingGuildJoinRequestsTotal: M
                        }), (0, a.jsxs)("div", {
                            className: R.content,
                            children: [(0, a.jsx)("div", {
                                className: R.listControls,
                                children: (0, a.jsx)(I.default, {
                                    className: R.sortSelect,
                                    sortOrder: m,
                                    onSortChange: g
                                })
                            }), (0, a.jsx)(i.Text, {
                                className: R.description,
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: S.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_LIST_DESCRIPTION
                            }), (0, a.jsx)(T.default, {
                                applicationStatus: _,
                                guildJoinRequests: p,
                                guildId: t,
                                onScroll: j,
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
                r = s("567054"),
                u = s("782340"),
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
                            "aria-label": u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Title, {
                            className: o.title,
                            children: u.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                        }), (0, a.jsx)(i.default.Divider, {
                            className: o.divider
                        }), (0, a.jsxs)(l.TabBar, {
                            "aria-label": u.default.Messages.FRIENDS,
                            selectedItem: s,
                            type: "top-pill",
                            onItemSelect: d,
                            className: o.tabBar,
                            children: [(0, a.jsx)(l.TabBar.Item, {
                                id: r.GuildJoinRequestApplicationStatuses.SUBMITTED,
                                children: 0 === t ? u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({
                                    count: t
                                })
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: r.GuildJoinRequestApplicationStatuses.APPROVED,
                                children: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
                            }), (0, a.jsx)(l.TabBar.Item, {
                                id: r.GuildJoinRequestApplicationStatuses.REJECTED,
                                children: u.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
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
                r = s("446674"),
                u = s("77078"),
                o = s("302437"),
                d = s("305961"),
                c = s("36694"),
                E = s("128295"),
                I = s("414868"),
                f = s("549103"),
                T = s("90490"),
                S = s("567054"),
                R = s("122766"),
                _ = s("859130"),
                m = s("667793"),
                N = s("782340"),
                M = s("297298");
            let p = () => null;

            function A(e) {
                let {
                    status: t
                } = e, s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
                switch (t) {
                    case S.GuildJoinRequestApplicationStatuses.REJECTED:
                        s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
                        break;
                    case S.GuildJoinRequestApplicationStatuses.APPROVED:
                        s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
                        break;
                    default:
                        s = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, l = N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
                }
                return (0, a.jsxs)("div", {
                    className: M.emptyContainer,
                    children: [(0, a.jsxs)("div", {
                        className: M.emptyIcon,
                        children: [(0, a.jsx)(I.default, {
                            className: M.star
                        }), (0, a.jsx)(c.default, {
                            className: M.checkmark
                        }), (0, a.jsx)(E.default, {
                            className: M.plus
                        })]
                    }), (0, a.jsx)(u.Heading, {
                        variant: "heading-xl/semibold",
                        children: s
                    }), (0, a.jsx)(u.Text, {
                        color: "header-secondary",
                        className: M.emptyBody,
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
                } = e, I = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(l), [l]), h = (0, r.useStateFromStores)([T.default], () => T.default.isFetching()), x = h ? [s.length + 25] : [s.length], g = (0, R.useSelectedGuildJoinRequest)({
                    guildId: l
                }), C = (0, _.useSubmittedGuildJoinRequestTotal)({
                    guildId: l
                }), j = (0, o.default)("guild-join-requests"), G = e => {
                    let {
                        row: n
                    } = e, r = s[n];
                    return null == r ? (0, a.jsx)(m.MemberApplicationsListRowPlaceholder, {}, n) : (0, a.jsx)(m.MemberApplicationsListRow, {
                        className: i({
                            [M.selected]: g === r,
                            [M.siblingSelected]: g === s[n - 1]
                        }),
                        guild: I,
                        guildJoinRequest: r,
                        onClick: () => f.default.setSelectedGuildJoinRequest(l, r),
                        applicationStatus: t
                    }, "".concat(r.userId, "-").concat(r.applicationStatus, "-").concat(n))
                };
                return h || 0 !== s.length ? (0, a.jsxs)(a.Fragment, {
                    children: [0 !== C && t === S.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsx)(u.Text, {
                        className: M.title,
                        variant: "text-xs/semibold",
                        color: "header-secondary",
                        children: (function(e, t) {
                            let s = t.toLocaleString();
                            switch (e) {
                                case S.GuildJoinRequestApplicationStatuses.SUBMITTED:
                                    return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case S.GuildJoinRequestApplicationStatuses.REJECTED:
                                    return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                case S.GuildJoinRequestApplicationStatuses.APPROVED:
                                    return N.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
                                        count: s
                                    });
                                default:
                                    return ""
                            }
                        })(t, C).toUpperCase()
                    }), (0, a.jsx)(n.ListNavigatorProvider, {
                        navigator: j,
                        children: (0, a.jsx)(n.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    role: s,
                                    ...l
                                } = e;
                                return (0, a.jsx)(u.List, {
                                    innerRole: s,
                                    innerAriaLabel: N.default.Messages.MEMBERS,
                                    ref: e => {
                                        var s;
                                        E.current = e, t.current = null !== (s = null == e ? void 0 : e.getScrollerNode()) && void 0 !== s ? s : null
                                    },
                                    paddingTop: 0,
                                    paddingBottom: 16,
                                    sectionHeight: 0,
                                    rowHeight: 64,
                                    renderSection: p,
                                    renderRow: G,
                                    sections: x,
                                    onScroll: c,
                                    fade: !0,
                                    ...l
                                }, "guild-application-review")
                            }
                        })
                    })]
                }) : (0, a.jsx)(A, {
                    status: t
                })
            }
        },
        667793: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                MemberApplicationsListRow: function() {
                    return M
                },
                MemberApplicationsListRowPlaceholder: function() {
                    return p
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                n = s.n(i),
                r = s("866227"),
                u = s.n(r),
                o = s("77078"),
                d = s("272030"),
                c = s("766274"),
                E = s("36694"),
                I = s("945330"),
                f = s("433487"),
                T = s("315102"),
                S = s("549103"),
                R = s("567054"),
                _ = s("782340"),
                m = s("297298");

            function N(e) {
                let {
                    icon: t,
                    onClick: s,
                    submitting: l,
                    disabled: i
                } = e;
                return (0, a.jsx)(o.Clickable, {
                    className: n(m.actionIconContainer, {
                        [m.disabled]: i || l
                    }),
                    onClick: s,
                    children: l ? (0, a.jsx)(o.Dots, {
                        className: m.icon,
                        dotRadius: 2,
                        themed: !0
                    }) : (0, a.jsx)(t, {
                        className: m.icon,
                        height: 12,
                        width: 12
                    })
                })
            }

            function M(e) {
                let {
                    applicationStatus: t,
                    guild: i,
                    guildJoinRequest: r,
                    className: M,
                    onClick: p
                } = e, [A, h] = l.useState(null), {
                    user: x,
                    createdAt: g
                } = r;
                if (null == x) throw Error("Missing user on this guild join request!");
                let C = l.useMemo(() => new c.default(x), [x]),
                    j = T.default.getUserAvatarURL(C),
                    G = t === R.GuildJoinRequestApplicationStatuses.SUBMITTED,
                    P = l.useCallback(async (e, t) => {
                        let {
                            guildId: s,
                            userId: a
                        } = e;
                        if (null == A) {
                            h(t);
                            try {
                                await S.default.updateGuildJoinRequest(s, a, t)
                            } catch (e) {
                                (0, o.showToast)((0, o.createToast)(_.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), h(null)
                            }
                        }
                    }, [A]),
                    v = async () => {
                        await P(r, R.GuildJoinRequestApplicationStatuses.APPROVED)
                    }, O = async () => {
                        await P(r, R.GuildJoinRequestApplicationStatuses.REJECTED)
                    };
                return (0, a.jsxs)(o.Clickable, {
                    className: n(m.container, M),
                    onClick: p,
                    children: [(0, a.jsx)(o.Avatar, {
                        src: j,
                        size: o.AvatarSizes.SIZE_40,
                        "aria-label": x.username,
                        className: m.spacer
                    }), (0, a.jsxs)("div", {
                        className: m.userDetails,
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: x.username
                        }), (0, a.jsx)(o.Text, {
                            className: m.createdAt,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: u(g).format("lll")
                        })]
                    }), G && (0, a.jsx)(N, {
                        icon: E.default,
                        onClick: v,
                        submitting: A === R.GuildJoinRequestApplicationStatuses.APPROVED,
                        disabled: null != A && A !== R.GuildJoinRequestApplicationStatuses.APPROVED
                    }), G && (0, a.jsx)(N, {
                        icon: I.default,
                        onClick: O,
                        submitting: A === R.GuildJoinRequestApplicationStatuses.REJECTED,
                        disabled: null != A && A !== R.GuildJoinRequestApplicationStatuses.REJECTED
                    }), (0, a.jsx)(o.Clickable, {
                        className: n(m.overflowMenuContainer, {
                            [m.disabled]: null != A
                        }),
                        onClick: e => {
                            (0, d.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await s.el("176032").then(s.bind(s, "176032"));
                                return t => (0, a.jsx)(e, {
                                    ...t,
                                    guild: i,
                                    user: C
                                })
                            }, {
                                position: "bottom",
                                align: "right"
                            })
                        },
                        children: (0, a.jsx)(f.default, {
                            className: m.icon,
                            width: 18
                        })
                    })]
                })
            }

            function p() {
                return (0, a.jsxs)("div", {
                    className: m.placeholder,
                    children: [(0, a.jsx)("div", {
                        className: n(m.placeholderAvatar)
                    }), (0, a.jsxs)("div", {
                        className: m.userDetails,
                        children: [(0, a.jsx)("div", {
                            className: m.placeholderUsername,
                            style: {
                                maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
                            }
                        }), (0, a.jsx)("div", {
                            className: m.placeholderCreatedAt,
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
                r = s("249654"),
                u = s("446674"),
                o = s("669491"),
                d = s("77078"),
                c = s("272030"),
                E = s("401642"),
                I = s("26989"),
                f = s("697218"),
                T = s("578706"),
                S = s("381546"),
                R = s("841811"),
                _ = s("433487"),
                m = s("549103"),
                N = s("567054"),
                M = s("49111"),
                p = s("782340"),
                A = s("127953");

            function h(e) {
                var t;
                let {
                    guildJoinRequest: i,
                    guild: h,
                    guildJoinRequestUser: x
                } = e, [g, C] = l.useState(!1), {
                    createdAt: j,
                    actionedAt: G,
                    guildId: P,
                    userId: v
                } = i, O = null === (t = i.actionedByUser) || void 0 === t ? void 0 : t.id, D = (0, u.useStateFromStores)([f.default], () => f.default.getUser(O)), b = (0, u.useStateFromStores)([I.default], () => null != O ? I.default.getMember(P, O) : null, [O, P]), F = l.useCallback(() => {
                    (0, d.showToast)((0, d.createToast)(p.default.Messages.ERROR_GENERIC_TITLE, d.ToastType.FAILURE))
                }, []), L = async () => {
                    if (!g) {
                        C(!0);
                        try {
                            await m.default.updateGuildJoinRequest(P, v, N.GuildJoinRequestApplicationStatuses.APPROVED)
                        } catch {
                            F()
                        } finally {
                            C(!1)
                        }
                    }
                }, B = p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING, J = (0, a.jsx)(R.default, {
                    width: 24,
                    height: 24,
                    className: A.icon
                });
                i.applicationStatus === N.GuildJoinRequestApplicationStatuses.APPROVED ? (B = p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED, J = (0, a.jsx)(T.default, {
                    width: 24,
                    height: 24,
                    className: A.iconApproved,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                })) : i.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && (B = p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED, J = (0, a.jsx)(S.default, {
                    width: 24,
                    height: 24,
                    className: A.iconRejected,
                    backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                }));
                let U = null != D && null != G ? p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
                    date: n(r.default.extractTimestamp(G)).format("ll"),
                    usernameHook: function() {
                        var e;
                        return (0, a.jsx)(d.Clickable, {
                            className: A.actionedByUser,
                            onClick: () => (0, E.openUserProfileModal)({
                                userId: D.id,
                                guildId: P,
                                analyticsLocation: {
                                    section: M.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                    object: M.AnalyticsObjects.ACTIONED_BY_USER
                                }
                            }),
                            tag: "div",
                            role: "link",
                            children: (0, a.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-primary",
                                children: null !== (e = null == b ? void 0 : b.nick) && void 0 !== e ? e : D.username
                            })
                        }, "username-hook")
                    }
                }) : n(j).format("lll");
                return (0, a.jsxs)("div", {
                    className: A.container,
                    children: [(0, a.jsxs)("div", {
                        className: A.wrapper,
                        children: [(0, a.jsxs)("div", {
                            className: A.inline,
                            children: [J, (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: B
                                }), (0, a.jsx)(d.Text, {
                                    className: A.headerSubtext,
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: U
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: A.inline,
                            children: [i.applicationStatus === N.GuildJoinRequestApplicationStatuses.SUBMITTED && (0, a.jsxs)("div", {
                                className: A.buttons,
                                children: [(0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.GREEN,
                                    submitting: g,
                                    onClick: () => L(),
                                    children: p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                                }), (0, a.jsx)(d.Button, {
                                    color: d.Button.Colors.RED,
                                    onClick: () => {
                                        (0, d.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await s.el("155554").then(s.bind(s, "155554"));
                                            return t => (0, a.jsx)(e, {
                                                modalProps: t,
                                                guildId: P,
                                                userId: v,
                                                onError: F
                                            })
                                        })
                                    },
                                    disabled: g,
                                    children: p.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
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
                                            user: x
                                        })
                                    })
                                },
                                className: A.overflow,
                                children: (0, a.jsx)(_.default, {
                                    width: 20,
                                    height: 20,
                                    className: A.iconInteractive
                                })
                            })]
                        })]
                    }), i.applicationStatus === N.GuildJoinRequestApplicationStatuses.REJECTED && null != i.rejectionReason && (0, a.jsx)("div", {
                        className: A.rejectionReason,
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
                r = s("401642"),
                u = s("315102"),
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
                } = t, I = u.default.getUserAvatarURL(t);
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
                            (0, r.openUserProfileModal)({
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
                    return T
                }
            });
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                n = s("945330"),
                r = s("781896"),
                u = s("664336"),
                o = s("158998"),
                d = s("781609"),
                c = s("709863"),
                E = s("227457"),
                I = s("782340"),
                f = s("536043"),
                T = function(e) {
                    var t;
                    let {
                        guild: s,
                        guildJoinRequest: T,
                        guildJoinRequestUser: S,
                        onClose: R
                    } = e, _ = l.useMemo(() => null !== (t = T.formResponses) && void 0 !== t ? t : [], [T.formResponses]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(u.default, {
                            toolbar: (0, a.jsx)(u.default.Icon, {
                                icon: n.default,
                                onClick: R,
                                tooltip: I.default.Messages.CLOSE
                            }),
                            children: [(0, a.jsx)(u.default.Icon, {
                                icon: r.default,
                                disabled: !0,
                                "aria-label": I.default.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
                            }), (0, a.jsx)(i.Heading, {
                                variant: "heading-md/semibold",
                                children: o.default.getName(S)
                            })]
                        }), (0, a.jsx)(c.default, {
                            guildJoinRequest: T,
                            guildJoinRequestUser: S,
                            guild: s
                        }), (0, a.jsxs)(i.Scroller, {
                            children: [(0, a.jsx)(E.default, {
                                user: S,
                                className: f.container
                            }), (0, a.jsx)("div", {
                                className: f.disabledFormRenderer,
                                children: (0, a.jsx)(d.default, {
                                    guildId: s.id,
                                    formFields: _,
                                    user: S
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
                    return f
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                i = s("697218"),
                n = s("975743"),
                r = s("567054"),
                u = s("272460"),
                o = s("472850"),
                d = s("199901"),
                c = s("772970"),
                E = s("621115"),
                I = s("782340"),
                f = function(e) {
                    let {
                        formFields: t,
                        user: s
                    } = e, f = (0, l.useStateFromStores)([i.default], () => null != s ? s : i.default.getCurrentUser());
                    return null == f ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.RequirementRenderer, {
                            icon: n.default,
                            text: I.default.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
                            meetsRequirement: !0
                        }), t.map((e, t) => (function(e, t) {
                            switch (e.field_type) {
                                case r.VerificationFormFieldTypes.TERMS:
                                    return (0, a.jsx)(c.DisabledTermsRequirementFormField, {
                                        formField: e
                                    }, t);
                                case r.VerificationFormFieldTypes.TEXT_INPUT:
                                    return (0, a.jsx)(E.DisabledTextInputFormField, {
                                        formField: e
                                    }, t);
                                case r.VerificationFormFieldTypes.PARAGRAPH:
                                    return (0, a.jsx)(d.DisabledParagraphFormField, {
                                        formField: e
                                    }, t);
                                case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
                                    return (0, a.jsx)(o.DisabledMultipleChoiceFormField, {
                                        formField: e
                                    }, t)
                            }
                        })(e, t))]
                    })
                }
        }
    }
]);