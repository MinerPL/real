            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                FolderEndDropTarget: function() {
                    return N
                },
                PlaceholderDropTarget: function() {
                    return T
                }
            }), n("222007");
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
                p = n("782340"),
                m = n("191072");

            function E(e) {
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

            function I(e) {
                let {
                    name: t,
                    targetNode: n,
                    combine: s,
                    below: r
                } = e, o = a.useMemo(() => g([f.GuildsNodeType.GUILD, f.GuildsNodeType.FOLDER], n, r, s), [n, r, s]), [{
                    canDrop: d,
                    isOver: c
                }, h] = (0, u.useDrop)(o), C = E([
                    [d, m.autoPointerEvents],
                    [c, m.dragOver]
                ]);
                return (0, l.jsx)("div", {
                    ref: e => {
                        C.current = e, h(e)
                    },
                    "data-dnd-name": p.default.Messages.DND_DROP_ABOVE.format({
                        itemName: t
                    }),
                    className: i(m.target)
                })
            }

            function S(e) {
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
                let c = E([
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
                        "data-dnd-name": p.default.Messages.DND_DROP_COMBINE.format({
                            itemName: t
                        }),
                        className: i(m.centerTarget, {})
                    })
                })
            }
            var _ = a.memo(function(e) {
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
                    children: [(0, l.jsx)(I, {
                        name: t,
                        targetNode: n,
                        below: s
                    }), r ? (0, l.jsx)(S, {
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
                }, r] = (0, u.useDrop)(() => g([f.GuildsNodeType.GUILD], n, !0, !0)), o = E([
                    [s, m.wrapperOver]
                ]), d = E([
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