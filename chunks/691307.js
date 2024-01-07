            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return O
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
                u = l("750560"),
                c = l("206230"),
                f = l("685665"),
                E = l("334572"),
                m = l("866190"),
                M = l("130037"),
                T = l("178406"),
                h = l("645266"),
                x = l("913132"),
                _ = l("553275"),
                H = l("151123"),
                A = l("337092"),
                N = l("850646"),
                p = l("894282"),
                g = l("474507");
            let S = {
                    transform: "translate3d(15%, 0, 0)",
                    opacity: .3
                },
                L = {
                    transform: "translate3d(5%, 0, 0)",
                    opacity: .5
                },
                I = {
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                },
                v = {
                    mass: 1.1,
                    friction: 24,
                    tension: 260
                },
                R = e => e.shiftKey || e.key === p.KeyboardKeysUpdated.SHIFT,
                j = e => e.metaKey || e.ctrlKey,
                b = n.memo(function(e) {
                    let {
                        members: t,
                        guild: l,
                        className: s,
                        searchState: o,
                        compact: d,
                        onSelectRow: f,
                        onResetForNewMembers: E
                    } = e, M = (0, r.default)([c.default], () => c.default.useReducedMotion), p = (0, m.useIsWindowFocused)(), [b, O] = n.useState(!1), [D, V] = n.useState(!1);
                    n.useEffect(() => {
                        !p && (O(!1), V(!1))
                    }, [p]), n.useLayoutEffect(() => {
                        let e = e => {
                                R(e) && O(!0), j(e) && V(!0)
                            },
                            t = e => {
                                R(e) && O(!1), j(e) && V(!1)
                            };
                        return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
                        }
                    }, []), (0, u.useSubscribeGuildMembers)({
                        [l.id]: t
                    }), n.useEffect(() => {
                        (0, h.getMemberSupplemental)(l.id, t)
                    }, [l.id, t]);
                    let B = t.length > 30,
                        y = (0, C.useTransition)(t, {
                            key: e => e,
                            trail: B ? 5 : 15,
                            immediate: M,
                            from(e) {
                                let t = T.default.getEnhancedMember(l.id, e),
                                    a = T.default.getLastRefreshTimestamp(l.id),
                                    n = null != t && t.refreshTimestamp === a;
                                return null != t && 0 !== a && n ? B ? L : S : I
                            },
                            enter: I,
                            config: v
                        });
                    return (0, a.jsxs)("table", {
                        className: i(g.table, s),
                        children: [(0, a.jsx)(H.default, {
                            guildId: l.id,
                            currentPagedMembers: t
                        }), (0, a.jsx)("tbody", {
                            children: o === _.SearchState.SUCCESS_FULL || o === _.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(N.default, {
                                    guild: l,
                                    onSubmit: E
                                }), y((e, t) => (0, a.jsx)(A.default, {
                                    userId: t,
                                    guildId: l.id,
                                    style: e,
                                    onSelect: f,
                                    isHoldingAdvancedInfoKey: b && D,
                                    compact: d
                                }, t))]
                            }) : (0, a.jsx)("td", {
                                colSpan: 7,
                                children: (0, a.jsx)(x.default, {
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
            var O = function(e) {
                var t, l;
                let {
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                } = e, c = (0, r.useStateFromStoresObject)([T.default], () => T.default.getPaginationStateByGuildId(s.id), [s.id]), [m] = (0, r.default)([T.default], () => T.default.getPagedMembersByGuildId(s.id), [s.id], E.isVersionEqual);
                n.useEffect(() => {
                    (0, h.initializeMemberSafetyStore)(s.id)
                }, [s.id]);
                let x = n.useDeferredValue(null !== (t = m[c.currentPage]) && void 0 !== t ? t : []),
                    {
                        analyticsLocations: _
                    } = (0, f.default)(),
                    H = null !== (l = null == _ ? void 0 : _[0]) && void 0 !== l ? l : null;
                return n.useEffect(() => {
                    (0, M.trackMembersPageViewed)(s.id, H)
                }, [s.id, H]), (0, a.jsx)(b, {
                    members: x,
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                })
            }