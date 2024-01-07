            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return R
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("969176"),
                d = l.n(o),
                C = l("65597"),
                r = l("95410"),
                u = l("77078"),
                c = l("685665"),
                f = l("305961"),
                E = l("957255"),
                m = l("118530"),
                M = l("536999"),
                T = l("466818"),
                h = l("178406"),
                x = l("624663"),
                _ = l("463200"),
                H = l("868967"),
                A = l("512882"),
                N = l("413989"),
                p = l("49111"),
                g = l("782340"),
                S = l("368715"),
                L = l("236807");

            function I(e) {
                let {
                    label: t,
                    onFilter: l,
                    selected: n,
                    className: s,
                    ...o
                } = e;
                return (0, a.jsx)("th", {
                    className: i(S.tableHeaderCellContainer, s),
                    children: (0, a.jsxs)(u.Clickable, {
                        ...o,
                        onClick: l,
                        className: i(S.tableHeaderCell, {
                            [S.tableHeaderCellWithFilter]: null != l
                        }),
                        children: [(0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            color: n ? "text-brand" : "header-secondary",
                            children: t
                        }), null != l && (0, a.jsx)("div", {
                            className: S.filterIconButton,
                            children: (0, a.jsx)(m.default, {
                                className: S.filterIcon,
                                color: n ? u.tokens.colors.CONTROL_BRAND_FOREGROUND.css : u.tokens.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16
                            })
                        })]
                    })
                })
            }
            let v = "member-safety-force-show-signals-tooltip";

            function R(e) {
                var t;
                let {
                    guildId: l,
                    currentPagedMembers: s
                } = e, o = (0, C.default)([h.default], () => h.default.getSearchStateByGuildId(l), [l], d), m = (0, C.default)([E.default, f.default], () => E.default.can(p.Permissions.MANAGE_GUILD, f.default.getGuild(l)), [l]), {
                    selectedUserIds: R,
                    addUsers: j,
                    clearSelection: b
                } = (0, x.default)(l), O = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined, D = o.selectedRoleIds.size > 0, V = null != o.selectedJoinDateOption.afterDate, B = null != o.selectedAccountAgeOption.afterDate, [y, U] = n.useState(null == r.default.get(v, null)), F = n.useCallback(() => {
                    r.default.set(v, Date.now()), U(!1)
                }, []), {
                    analyticsLocations: w
                } = (0, c.default)(), Z = null !== (t = null == w ? void 0 : w[0]) && void 0 !== t ? t : null, P = (0, T.useCanAccessBulkBanningFeature)(l, Z, !0), k = (0, M.isInMembersTablesAdditionalFilteringExperiment)(l), Y = n.useMemo(() => s.filter(e => (0, T.canBulkBanUser)(l, P, e)), [P, s, l]), G = Y.length > 0, J = Y.filter(e => !R.has(e)), q = 0 === J.length, K = n.useCallback(() => {
                    G && (q ? b() : j(Y))
                }, [G, q, b, j, Y]);
                return (0, a.jsx)("thead", {
                    children: (0, a.jsxs)("tr", {
                        className: S.tableHeaderRow,
                        children: [P && (0, a.jsx)("th", {
                            className: i(S.tableHeaderCellContainer, L.xsmallCol),
                            children: (0, a.jsx)(u.Tooltip, {
                                shouldShow: !G,
                                text: g.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
                                children: e => (0, a.jsx)(u.Clickable, {
                                    ...e,
                                    onClick: K,
                                    className: S.tableHeaderCell,
                                    children: (0, a.jsx)(u.Checkbox, {
                                        type: u.Checkbox.Types.INVERTED,
                                        value: q,
                                        disabled: !G
                                    })
                                })
                            })
                        }), (0, a.jsx)(I, {
                            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
                        }), k ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.Popout, {
                                animation: u.Popout.Animation.FADE,
                                position: "bottom",
                                spacing: 4,
                                align: "left",
                                renderPopout: () => (0, a.jsx)(A.default, {
                                    guildId: l,
                                    onClose: p.NOOP
                                }),
                                children: e => {
                                    let {
                                        onClick: t,
                                        ...l
                                    } = e;
                                    return (0, a.jsx)(I, {
                                        label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
                                        onFilter: t,
                                        selected: V,
                                        className: L.smallCol,
                                        ...l
                                    })
                                }
                            }), (0, a.jsx)(u.Popout, {
                                animation: u.Popout.Animation.FADE,
                                position: "bottom",
                                spacing: 4,
                                align: "left",
                                renderPopout: () => (0, a.jsx)(_.default, {
                                    guildId: l,
                                    onClose: p.NOOP
                                }),
                                children: e => {
                                    let {
                                        onClick: t,
                                        ...l
                                    } = e;
                                    return (0, a.jsx)(I, {
                                        label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
                                        onFilter: t,
                                        selected: B,
                                        className: L.smallCol,
                                        ...l
                                    })
                                }
                            })]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(I, {
                                label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
                                className: L.smallCol
                            }), (0, a.jsx)(I, {
                                label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
                                className: L.smallCol
                            })]
                        }), m && (0, a.jsx)(I, {
                            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
                            className: L.smallCol
                        }), (0, a.jsx)(u.Popout, {
                            animation: u.Popout.Animation.FADE,
                            position: "bottom",
                            spacing: 4,
                            align: "left",
                            renderPopout: e => {
                                let {
                                    closePopout: t
                                } = e;
                                return (0, a.jsx)(N.default, {
                                    guildId: l,
                                    onClose: t
                                })
                            },
                            children: e => {
                                let {
                                    onClick: t,
                                    ...l
                                } = e;
                                return (0, a.jsx)(I, {
                                    label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
                                    onFilter: t,
                                    selected: D,
                                    className: i(L.mediumCol),
                                    ...l
                                })
                            }
                        }), (0, a.jsx)(u.Tooltip, {
                            text: g.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
                            position: "top",
                            align: "left",
                            forceOpen: y,
                            shouldShow: !0,
                            color: u.Tooltip.Colors.BRAND,
                            children: e => (0, a.jsx)(u.Popout, {
                                animation: u.Popout.Animation.FADE,
                                position: "bottom",
                                spacing: 4,
                                align: "left",
                                renderPopout: e => {
                                    let {
                                        closePopout: t
                                    } = e;
                                    return (0, a.jsx)(H.default, {
                                        guildId: l,
                                        onClose: t
                                    })
                                },
                                children: t => (0, a.jsx)(I, {
                                    label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
                                    "aria-label": g.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
                                    onFilter: l => {
                                        var a, n;
                                        F(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
                                    },
                                    selected: O,
                                    className: i(L.smallCol),
                                    onMouseEnter: () => {
                                        var l, a;
                                        F(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
                                    },
                                    onMouseDown: t.onMouseDown,
                                    onMouseLeave: e.onMouseLeave,
                                    onBlur: e.onBlur,
                                    onFocus: e.onFocus,
                                    onKeyDown: t.onKeyDown,
                                    "aria-controls": t["aria-controls"],
                                    "aria-expanded": t["aria-expanded"]
                                })
                            })
                        }), (0, a.jsx)(I, {
                            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
                            className: L.smallCol
                        })]
                    })
                })
            }