            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("714617"),
                d = l.n(o),
                C = l("907002"),
                r = l("65597"),
                u = l("206230"),
                c = l("685665"),
                f = l("334572"),
                m = l("866190"),
                E = l("130037"),
                M = l("178406"),
                h = l("645266"),
                T = l("913132"),
                x = l("553275"),
                H = l("151123"),
                _ = l("337092"),
                A = l("850646"),
                L = l("894282"),
                g = l("474507");
            let N = {
                    transform: "translate3d(15%, 0, 0)",
                    opacity: .3
                },
                p = {
                    transform: "translate3d(5%, 0, 0)",
                    opacity: .5
                },
                S = {
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                },
                v = {
                    mass: 1.1,
                    friction: 24,
                    tension: 260
                },
                R = e => e.shiftKey || e.key === L.KeyboardKeysUpdated.SHIFT,
                I = e => e.metaKey || e.ctrlKey,
                j = n.memo(function(e) {
                    let {
                        members: t,
                        guild: l,
                        className: s,
                        searchState: o,
                        compact: d,
                        onSelectRow: c,
                        onResetForNewMembers: f
                    } = e, E = (0, r.default)([u.default], () => u.default.useReducedMotion), L = (0, m.useIsWindowFocused)(), [j, b] = n.useState(!1), [D, O] = n.useState(!1);
                    n.useEffect(() => {
                        !L && (b(!1), O(!1))
                    }, [L]), n.useLayoutEffect(() => {
                        let e = e => {
                                R(e) && b(!0), I(e) && O(!0)
                            },
                            t = e => {
                                R(e) && b(!1), I(e) && O(!1)
                            };
                        return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
                        }
                    }, []), n.useEffect(() => {
                        (0, h.getMemberSupplemental)(l.id, t)
                    }, [l.id, t]);
                    let V = t.length > 30,
                        B = (0, C.useTransition)(t, {
                            key: e => e,
                            trail: V ? 5 : 15,
                            immediate: E,
                            from(e) {
                                let t = M.default.getEnhancedMember(l.id, e),
                                    a = M.default.getLastRefreshTimestamp(l.id),
                                    n = null != t && t.refreshTimestamp === a;
                                return null != t && 0 !== a && n ? V ? p : N : S
                            },
                            enter: S,
                            config: v
                        });
                    return (0, a.jsxs)("table", {
                        className: i(g.table, s),
                        children: [(0, a.jsx)(H.default, {
                            guildId: l.id,
                            currentPagedMembers: t
                        }), (0, a.jsx)("tbody", {
                            children: o === x.SearchState.SUCCESS_FULL || o === x.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(A.default, {
                                    guild: l,
                                    onSubmit: f
                                }), B((e, t) => (0, a.jsx)(_.default, {
                                    userId: t,
                                    guildId: l.id,
                                    style: e,
                                    onSelect: c,
                                    isHoldingAdvancedInfoKey: j && D,
                                    compact: d
                                }, t))]
                            }) : (0, a.jsx)("td", {
                                colSpan: 7,
                                children: (0, a.jsx)(T.default, {
                                    searchState: o
                                })
                            })
                        })]
                    })
                }, function(e, t) {
                    let l = d(e.members, t.members),
                        a = e.guild.id === t.guild.id,
                        n = e.searchState === t.searchState,
                        s = e.compact === t.compact;
                    return l && a && n && s
                });
            var b = function(e) {
                var t, l;
                let {
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                } = e, m = (0, r.useStateFromStoresObject)([M.default], () => M.default.getPaginationStateByGuildId(s.id), [s.id]), [T] = (0, r.default)([M.default], () => M.default.getPagedMembersByGuildId(s.id), [s.id], f.isVersionEqual);
                n.useEffect(() => {
                    (0, h.initializeMemberSafetyStore)(s.id)
                }, [s.id]);
                let x = n.useDeferredValue(null !== (t = T[m.currentPage]) && void 0 !== t ? t : []),
                    {
                        analyticsLocations: H
                    } = (0, c.default)(),
                    _ = null !== (l = null == H ? void 0 : H[0]) && void 0 !== l ? l : null;
                return n.useEffect(() => {
                    (0, E.trackMembersPageViewed)(s.id, _)
                }, [s.id, _]), (0, a.jsx)(j, {
                    members: x,
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                })
            }