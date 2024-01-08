            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return H
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("476042"),
                o = s("509043"),
                d = s("446674"),
                u = s("77078"),
                c = s("272030"),
                E = s("534291"),
                _ = s("339023"),
                T = s("180243"),
                I = s("726527"),
                S = s("405645"),
                N = s("915675"),
                g = s("957255"),
                f = s("211248"),
                A = s("673220"),
                L = s("462579"),
                m = s("433487"),
                C = s("987772"),
                O = s("155207"),
                h = s("781896"),
                R = s("682344"),
                D = s("483093"),
                M = s("599110"),
                G = s("895026"),
                x = s("36402"),
                p = s("986654"),
                U = s("476324"),
                v = s("983521"),
                j = s("53948"),
                P = s("49111"),
                y = s("782340"),
                b = s("898952"),
                B = s("273899");
            let F = "DRAGGABLE_ROLE";

            function H(e) {
                let {
                    setEditRoleId: t,
                    guild: s,
                    everyoneRole: l,
                    otherRoles: i,
                    setSelectedSection: r,
                    renderHeader: o,
                    headerHeight: u,
                    query: c
                } = e, _ = (0, d.useStateFromStores)([x.default], () => x.default.getRoleMemberCount(s.id), [s.id]), T = (0, d.useStateFromStores)([g.default], () => g.default.getHighestRole(s), [s]), I = c.trim();
                n.useEffect(() => {
                    (0, G.fetchMemberCounts)(s.id)
                }, [s.id]);
                let S = n.useRef(!1);
                n.useEffect(() => {
                    !S.current && "" !== c.trimStart() && (M.default.track(P.AnalyticEvents.SEARCH_STARTED, {
                        search_type: "Roles"
                    }), S.current = !0)
                }, [c]);
                let N = n.useMemo(() => i.filter(e => (0, p.filterRole)(e, I)), [i, I]),
                    f = n.useMemo(() => [...i, l], [i, l]),
                    {
                        draggingId: A,
                        handleDragStart: L,
                        handleDragReset: m,
                        handleDragComplete: C
                    } = (0, v.default)(f),
                    O = n.useCallback(e => {
                        var n;
                        let {
                            row: l
                        } = e;
                        if (0 === N.length) return (0, a.jsx)(V, {}, "empty-role");
                        let o = N[l];
                        return (0, a.jsx)(w, {
                            role: o,
                            guild: s,
                            highestRole: T,
                            currentPosition: l,
                            memberCount: null !== (n = null == _ ? void 0 : _[o.id]) && void 0 !== n ? n : 0,
                            onDragStart: L,
                            onDragReset: m,
                            onDragComplete: C,
                            disableHover: null != A,
                            disableDrag: i.length !== N.length,
                            setEditRoleId: t,
                            setSelectedSection: r
                        }, o.id)
                    }, [N, s, T, _, L, m, C, A, i, t, r]);
                return (0, a.jsx)(E.ListContentScroller, {
                    sections: [Math.max(N.length, 1)],
                    sectionHeight: u,
                    renderSection: o,
                    rowHeight: 61,
                    renderRow: O
                })
            }

            function V() {
                return (0, a.jsxs)("div", {
                    className: b.emptyRoles,
                    children: [(0, a.jsx)("div", {
                        className: B.dragSpacing
                    }), (0, a.jsx)(O.default, {}), (0, a.jsx)(u.Text, {
                        className: b.emptyRolesText,
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: y.default.Messages.ROLE_LIST_EMPTY
                    })]
                })
            }

            function w(e) {
                var t, l, o;
                let {
                    role: d,
                    guild: E,
                    highestRole: S,
                    currentPosition: g,
                    memberCount: O,
                    onDragStart: R,
                    onDragReset: D,
                    onDragComplete: M,
                    disableHover: G,
                    disableDrag: x,
                    setEditRoleId: p,
                    setSelectedSection: v
                } = e, P = (0, U.useLockTooltip)(E, S, d), H = null != P, [V, w] = n.useState(!1), Y = n.useMemo(() => ({
                    type: F,
                    item: () => (R(d.id), {
                        id: d.id,
                        position: g
                    }),
                    canDrag: () => V && !H,
                    collect: e => ({
                        isDragging: e.isDragging()
                    }),
                    end: (e, t) => {
                        let s = t.getDropResult();
                        if (null == s) {
                            D();
                            return
                        }
                        M(s.roleId)
                    }
                }), [d, R, D, M, H, V]), [{
                    isDragging: K
                }, W] = (0, r.useDrag)(Y), z = n.useMemo(() => ({
                    accept: F,
                    canDrop: () => !H,
                    collect: e => {
                        let t = e.getItem();
                        return null != t && e.isOver() && e.canDrop() ? {
                            dragSourcePosition: t.position
                        } : {
                            dragSourcePosition: null
                        }
                    },
                    drop: () => ({
                        roleId: d.id
                    })
                }), [H, d]), [{
                    dragSourcePosition: X
                }, Z] = (0, r.useDrop)(z), J = n.useCallback(e => {
                    (0, c.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await s.el("726527").then(s.bind(s, "726527"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            role: d,
                            guild: E
                        })
                    })
                }, [E, d]), Q = (0, I.useHasGuildRoleItems)(E, d);
                if (K) return (0, a.jsx)("div", {
                    ref: W,
                    className: i(b.roleRow, b.roleRowDragging)
                });

                function q() {
                    p(d.id)
                }

                function $() {
                    q(), v(j.GuildSettingsRoleEditSections.MEMBERS)
                }
                return (0, a.jsxs)(u.Clickable, {
                    className: i(b.roleRow, {
                        [b.roleRowDisableHover]: G,
                        [b.containerDragBefore]: null != X && g < X,
                        [b.containerDragAfter]: null != X && g > X
                    }),
                    onClick: q,
                    onContextMenu: J,
                    innerRef: e => W(Z(e)),
                    "data-dnd-name": d.name,
                    "aria-label": y.default.Messages.ROLE_ROW_DESCRIPTION.format({
                        name: d.name,
                        count: "".concat(O)
                    }),
                    children: [(0, a.jsx)("div", {
                        className: i(b.dragIcon, B.dragSpacing, {
                            [b.dragIconHidden]: H || x
                        }),
                        onMouseEnter: () => w(!0),
                        onMouseLeave: () => w(!1),
                        children: (0, a.jsx)(A.default, {})
                    }), (0, a.jsxs)("div", {
                        className: i(b.roleNameContainer, B.roleNameSpacing),
                        children: [(null === (t = d.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? (0, a.jsx)(_.default, {
                            className: b.roleFlowerStar,
                            color: d.colorString,
                            size: 24
                        }) : (0, a.jsx)(k, {
                            guildId: E.id,
                            role: d,
                            size: 24,
                            className: b.roleIcon,
                            defaultIconClassName: b.shield
                        }), null != P ? (0, a.jsx)(U.default, {
                            className: b.lock,
                            tooltipText: P
                        }) : null, (0, a.jsx)(u.Text, {
                            className: b.roleName,
                            color: "header-primary",
                            variant: "text-md/medium",
                            children: d.name
                        }), (null === (l = d.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null && (0, a.jsx)(N.default, {
                            className: b.subscriptionRoleIcon,
                            "aria-label": y.default.Messages.GUILD_ROLE_SUBSCRIPTION_PREMIUM_ROLE_ICON_LABEL
                        }), (null === (o = d.tags) || void 0 === o ? void 0 : o.is_guild_product_role) === !0 && (0, a.jsx)(T.default, {})]
                    }), (0, a.jsx)(u.Tooltip, {
                        text: y.default.Messages.ROLE_OVERVIEW_VIEW_MEMBERS,
                        "aria-label": y.default.Messages.ROLE_ROW_VIEW_MEMBERS.format({
                            count: "".concat(O)
                        }),
                        position: "right",
                        children: e => (0, a.jsxs)(u.Clickable, {
                            ...e,
                            className: i(b.memberCountContainer, B.memberSpacing),
                            onClick: $,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "none",
                                children: O
                            }), (0, a.jsx)(h.default, {
                                className: b.person,
                                width: 20,
                                height: 20
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: i(b.buttonsContainer, B.buttonsSpacing),
                        children: [(0, a.jsx)(f.default, {
                            className: i(b.circleButton, b.editButton),
                            tooltip: H ? y.default.Messages.VIEW : y.default.Messages.EDIT,
                            color: f.CircleIconButtonColors.SECONDARY,
                            size: f.CircleIconButtonSizes.SIZE_36,
                            icon: H ? (0, a.jsx)(L.default, {
                                width: 20,
                                height: 20
                            }) : (0, a.jsx)(C.default, {
                                width: 20,
                                height: 20
                            }),
                            onClick: q
                        }), (0, a.jsx)(f.default, {
                            className: b.circleButton,
                            tooltip: y.default.Messages.MORE,
                            color: f.CircleIconButtonColors.SECONDARY,
                            size: f.CircleIconButtonSizes.SIZE_36,
                            icon: (0, a.jsx)(m.default, {
                                width: 20,
                                height: 20
                            }),
                            onClick: J,
                            disabled: !Q
                        })]
                    })]
                })
            }

            function k(e) {
                var t;
                let {
                    guildId: s,
                    role: n,
                    size: l,
                    enableTooltip: r,
                    className: d,
                    defaultIconClassName: u
                } = e, c = (0, S.useRoleIcon)({
                    guildId: s,
                    roleId: n.id,
                    size: l
                });
                return null != c ? (0, a.jsx)(D.default, {
                    ...c,
                    className: d,
                    enableTooltip: r
                }) : (0, a.jsx)(R.default, {
                    className: i(d, u),
                    color: null !== (t = n.colorString) && void 0 !== t ? t : (0, o.int2hex)(P.DEFAULT_ROLE_COLOR),
                    width: l,
                    height: l
                })
            }