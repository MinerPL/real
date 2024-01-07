            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
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
                E = s("851387"),
                _ = s("206230"),
                T = s("339023"),
                I = s("957255"),
                S = s("730988"),
                N = s("246053"),
                g = s("151185"),
                f = s("531493"),
                A = s("476324"),
                L = s("983521"),
                m = s("91816"),
                C = s("53948"),
                O = s("49111"),
                h = s("782340"),
                R = s("450057");
            let D = "DRAGGABLE_ROLE";

            function M(e) {
                var t, n;
                let l, {
                        guild: d,
                        role: E,
                        highestRole: _,
                        selectedItem: I,
                        onClick: S,
                        currentPosition: N,
                        onDragStart: g,
                        onDragReset: f,
                        onDragComplete: L,
                        roleStyle: m
                    } = e,
                    C = (0, A.useLockTooltip)(d, _, E),
                    h = (null == d ? void 0 : d.id) === E.id,
                    M = null == C && !h,
                    G = (null === (t = E.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
                    [, x] = (0, r.useDrag)({
                        type: D,
                        item: () => (g(E.id), {
                            id: E.id,
                            position: N
                        }),
                        canDrag: () => M,
                        end: (e, t) => {
                            let s = t.getDropResult();
                            if (null == s) {
                                f();
                                return
                            }
                            L(s.roleId)
                        }
                    }),
                    [{
                        dragSourcePosition: p
                    }, U] = (0, r.useDrop)({
                        accept: D,
                        canDrop: () => M,
                        collect: e => {
                            let t = e.getItem();
                            return null != t && e.isOver() && e.canDrop() ? {
                                dragSourcePosition: t.position
                            } : {
                                dragSourcePosition: null
                            }
                        },
                        drop: () => ({
                            roleId: E.id
                        })
                    }),
                    v = null !== (n = E.colorString) && void 0 !== n ? n : (0, o.int2hex)(O.DEFAULT_ROLE_COLOR);
                return l = G ? (0, a.jsx)(T.default, {
                    size: 12,
                    color: E.colorString,
                    className: R.verifiedRoleIcon
                }) : "dot" === m ? (0, a.jsx)(u.RoleDot, {
                    color: v,
                    background: !1,
                    tooltip: !1
                }) : (0, a.jsx)(u.RoleCircle, {
                    color: v
                }), (0, a.jsxs)(u.TabBar.Item, {
                    className: i(R.row, {
                        [R.dragBefore]: null !== p && N < p,
                        [R.dragAfter]: null !== p && N > p
                    }),
                    id: E.id,
                    selectedItem: I,
                    itemType: "side",
                    onClick: S,
                    onContextMenu: function(e) {
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await s.el("726527").then(s.bind(s, "726527"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                role: E,
                                guild: d
                            })
                        })
                    },
                    "aria-label": E.name,
                    clickableRef: e => {
                        var t;
                        return x(U(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null))
                    },
                    children: [l, null != C ? (0, a.jsx)(A.default, {
                        className: R.lock,
                        tooltipText: C
                    }) : null, (0, a.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        color: h ? "header-primary" : "interactive-active",
                        lineClamp: 1,
                        children: E.name
                    })]
                })
            }

            function G(e) {
                let {
                    guild: t,
                    currentRoleId: s,
                    setCurrentRoleId: l,
                    setSelectedSection: r
                } = e, o = (0, d.useStateFromStores)([f.default], () => f.default.roles), c = (0, d.useStateFromStores)([I.default], () => I.default.getHighestRole(t)), T = (0, d.useStateFromStores)([_.default], () => _.default.roleStyle), [A, O] = n.useState(o.length), {
                    scrolledToTop: D,
                    handleScroll: G
                } = (0, m.useScrolledToTop)(), {
                    handleDragStart: x,
                    handleDragReset: p,
                    handleDragComplete: U
                } = (0, L.default)(o), v = n.useRef(null), j = n.useCallback(e => {
                    var t, s;
                    let a = o.findIndex(t => t.id === e);
                    null === (s = v.current) || void 0 === s || null === (t = s.getScrollerNode()) || void 0 === t || t.scrollTo({
                        top: Math.max((a - 2) * 34, 0)
                    })
                }, [o]);
                n.useEffect(() => {
                    j(s)
                }, []), n.useEffect(() => {
                    o.length > A && j(s), o.length !== A && O(o.length)
                }, [o.length, A, O, j, s]);
                let P = () => {
                    E.default.createRole(t.id), r(C.GuildSettingsRoleEditSections.DISPLAY)
                };
                return (0, a.jsx)(S.default.Sidebar, {
                    className: R.sidebar,
                    children: (0, a.jsxs)("div", {
                        className: R.container,
                        children: [(0, a.jsxs)("div", {
                            className: i(R.titleContainer, {
                                [R.titleElevated]: !D
                            }),
                            children: [(0, a.jsxs)(u.Clickable, {
                                className: R.title,
                                onClick: () => l(null),
                                children: [(0, a.jsx)(N.default, {
                                    direction: N.default.Directions.LEFT
                                }), (0, a.jsx)(u.Text, {
                                    className: R.titleText,
                                    variant: "text-md/semibold",
                                    color: "none",
                                    children: h.default.Messages.BACK
                                })]
                            }), (0, a.jsx)(u.Tooltip, {
                                position: "top",
                                "aria-label": h.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
                                text: (0, a.jsx)(u.Text, {
                                    className: R.tooltip,
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
                                }),
                                children: e => (0, a.jsx)(u.Clickable, {
                                    className: R.addRole,
                                    ...e,
                                    onClick: P,
                                    children: (0, a.jsx)(g.default, {
                                        width: 20,
                                        height: 20
                                    })
                                })
                            })]
                        }), (0, a.jsx)(u.AdvancedScroller, {
                            className: R.list,
                            ref: v,
                            onScroll: G,
                            children: (0, a.jsx)(u.TabBar, {
                                selectedItem: s,
                                onItemSelect: e => l(e),
                                orientation: "vertical",
                                children: o.map((e, n) => (0, a.jsx)(M, {
                                    guild: t,
                                    role: e,
                                    highestRole: c,
                                    selectedItem: s,
                                    onClick: () => l(e.id),
                                    currentPosition: n,
                                    onDragStart: x,
                                    onDragReset: p,
                                    onDragComplete: U,
                                    roleStyle: T
                                }, e.id))
                            })
                        })]
                    })
                })
            }