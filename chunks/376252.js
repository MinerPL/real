            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("70102"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("316693"),
                o = s("446674"),
                d = s("77078"),
                u = s("900676"),
                c = s("957255"),
                E = s("697218"),
                _ = s("810567"),
                T = s("599110"),
                I = s("465305"),
                S = s("991170"),
                N = s("766419"),
                g = s("507453"),
                f = s("50693"),
                A = s("91816"),
                L = s("449804"),
                m = s("53948"),
                C = s("49111"),
                O = s("782340"),
                h = s("715273"),
                R = s("219638");

            function D(e) {
                let {
                    guild: t,
                    role: s,
                    locked: l
                } = e, i = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), u = n.useMemo(() => S.default.computePermissions({
                    user: i,
                    context: t
                }), [i, t]), c = n.useMemo(() => ({
                    [s.id]: {
                        ...s,
                        permissions: S.default.NONE
                    }
                }), [s]), _ = n.useMemo(() => S.default.computePermissions({
                    user: i,
                    context: t,
                    roles: c
                }), [i, t, c]), T = !r.default.equals(u, _);
                return (0, a.jsx)("div", {
                    className: h.clearButtonWrapper,
                    children: (0, a.jsx)(d.Tooltip, {
                        text: T ? O.default.Messages.HELP_CLEAR_PERMISSIONS : null,
                        position: "top",
                        color: d.Tooltip.Colors.RED,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: n
                            } = e;
                            return (0, a.jsx)(d.Button, {
                                className: h.clearButton,
                                size: d.Button.Sizes.TINY,
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.LINK,
                                onClick: () => (0, N.clearRolePermissions)(s.id),
                                onMouseEnter: t,
                                onMouseLeave: n,
                                disabled: r.default.equals(s.permissions, S.default.NONE) || T || l,
                                children: O.default.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
                            })
                        }
                    })
                })
            }

            function M(e) {
                let {
                    guild: t,
                    role: s,
                    specs: n,
                    locked: l
                } = e;
                if (0 === n.length) return (0, a.jsxs)("div", {
                    className: h.noResultsContainer,
                    children: [(0, a.jsx)(g.default, {
                        className: h.noResults
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        children: O.default.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
                    })]
                });

                function i(e) {
                    return c.default.can(e, t) ? !c.default.can(e, t, null, {
                        [s.id]: {
                            ...s,
                            permissions: r.default.remove(s.permissions, e)
                        }
                    }) && O.default.Messages.HELP_SINGULAR_PERMISSION : O.default.Messages.HELP_MISSING_PERMISSION
                }
                return (0, a.jsxs)("div", {
                    className: h.permissionsWrapper,
                    children: [(0, a.jsx)(D, {
                        guild: t,
                        role: s,
                        locked: l
                    }), n.map((e, t) => (0, a.jsx)(u.default, {
                        className: h.permissionsForm,
                        spec: e,
                        permissions: s.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ("string" == typeof t) throw Error("Unexpected string `allow`");
                            (0, N.updateRolePermissions)(s.id, e, t)
                        },
                        permissionRender: i
                    }, t))]
                })
            }

            function G(e) {
                let {
                    guild: t,
                    role: s,
                    locked: l,
                    setSelectedSection: r,
                    initialSearchQuery: o
                } = e, [u, c] = n.useState(null != o ? o : ""), E = n.useMemo(() => I.default.generateGuildPermissionSpec(t), [t]), S = E.map(e => ({
                    ...e,
                    permissions: e.permissions.filter(e => {
                        let t = u.trimStart().toLowerCase();
                        return e.title.toLowerCase().includes(t) || null != e.description && e.description.toString().toLowerCase().includes(t)
                    })
                })).filter(e => e.permissions.length > 0), {
                    headerHeight: N,
                    headerRef: g
                } = (0, f.default)(0), {
                    scrolledToTop: D,
                    handleScroll: G
                } = (0, A.useScrolledToTop)(), x = n.useRef(!1);
                return n.useEffect(() => {
                    !x.current && "" !== u.trimStart() && (T.default.track(C.AnalyticEvents.SEARCH_STARTED, {
                        search_type: "Permissions"
                    }), x.current = !0)
                }, [u]), (0, a.jsx)(d.AdvancedScrollerAuto, {
                    className: h.scroller,
                    style: {
                        scrollPaddingTop: N
                    },
                    onScroll: G,
                    children: (0, a.jsxs)("div", {
                        className: R.contentWidth,
                        children: [(0, a.jsxs)("div", {
                            className: i(R.header, R.stickyHeader, {
                                [R.stickyHeaderElevated]: !D
                            }),
                            ref: g,
                            children: [(0, a.jsx)(A.default, {
                                guild: t,
                                role: s,
                                selectedSection: m.GuildSettingsRoleEditSections.PERMISSIONS,
                                setSelectedSection: r
                            }), (0, a.jsx)("div", {
                                className: h.noticeContainer,
                                children: (0, a.jsx)(L.default, {
                                    role: s
                                })
                            }), (0, a.jsx)("div", {
                                className: h.searchContainer,
                                children: (0, a.jsx)(_.default, {
                                    size: _.default.Sizes.MEDIUM,
                                    query: u,
                                    onChange: c,
                                    onClear: () => c(""),
                                    placeholder: O.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
                                    "aria-label": O.default.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
                                })
                            })]
                        }), (0, a.jsx)(M, {
                            guild: t,
                            role: s,
                            specs: S,
                            locked: l
                        })]
                    })
                })
            }