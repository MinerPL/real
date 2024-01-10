            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
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
                m = l("334572"),
                E = l("866190"),
                M = l("130037"),
                h = l("178406"),
                T = l("645266"),
                x = l("913132"),
                H = l("553275"),
                _ = l("151123"),
                A = l("337092"),
                L = l("850646"),
                g = l("894282"),
                N = l("474507");
            let p = {
                    transform: "translate3d(15%, 0, 0)",
                    opacity: .3
                },
                S = {
                    transform: "translate3d(5%, 0, 0)",
                    opacity: .5
                },
                v = {
                    transform: "translate3d(0, 0, 0)",
                    opacity: 1
                },
                R = {
                    mass: 1.1,
                    friction: 24,
                    tension: 260
                },
                I = e => e.shiftKey || e.key === g.KeyboardKeysUpdated.SHIFT,
                j = e => e.metaKey || e.ctrlKey,
                b = n.memo(function(e) {
                    let {
                        members: t,
                        guild: l,
                        className: s,
                        searchState: o,
                        compact: d,
                        onSelectRow: f,
                        onResetForNewMembers: m
                    } = e, M = (0, r.default)([c.default], () => c.default.useReducedMotion), g = (0, E.useIsWindowFocused)(), [b, D] = n.useState(!1), [O, V] = n.useState(!1);
                    n.useEffect(() => {
                        !g && (D(!1), V(!1))
                    }, [g]), n.useLayoutEffect(() => {
                        let e = e => {
                                I(e) && D(!0), j(e) && V(!0)
                            },
                            t = e => {
                                I(e) && D(!1), j(e) && V(!1)
                            };
                        return window.addEventListener("keydown", e), window.addEventListener("keyup", t), () => {
                            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
                        }
                    }, []), (0, u.useSubscribeGuildMembers)({
                        [l.id]: t
                    }), n.useEffect(() => {
                        (0, T.getMemberSupplemental)(l.id, t)
                    }, [l.id, t]);
                    let B = t.length > 30,
                        F = (0, C.useTransition)(t, {
                            key: e => e,
                            trail: B ? 5 : 15,
                            immediate: M,
                            from(e) {
                                let t = h.default.getEnhancedMember(l.id, e),
                                    a = h.default.getLastRefreshTimestamp(l.id),
                                    n = null != t && t.refreshTimestamp === a;
                                return null != t && 0 !== a && n ? B ? S : p : v
                            },
                            enter: v,
                            config: R
                        });
                    return (0, a.jsxs)("table", {
                        className: i(N.table, s),
                        children: [(0, a.jsx)(_.default, {
                            guildId: l.id,
                            currentPagedMembers: t
                        }), (0, a.jsx)("tbody", {
                            children: o === H.SearchState.SUCCESS_FULL || o === H.SearchState.LOADING ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(L.default, {
                                    guild: l,
                                    onSubmit: m
                                }), F((e, t) => (0, a.jsx)(A.default, {
                                    userId: t,
                                    guildId: l.id,
                                    style: e,
                                    onSelect: f,
                                    isHoldingAdvancedInfoKey: b && O,
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
            var D = function(e) {
                var t, l;
                let {
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                } = e, c = (0, r.useStateFromStoresObject)([h.default], () => h.default.getPaginationStateByGuildId(s.id), [s.id]), [E] = (0, r.default)([h.default], () => h.default.getPagedMembersByGuildId(s.id), [s.id], m.isVersionEqual);
                n.useEffect(() => {
                    (0, T.initializeMemberSafetyStore)(s.id)
                }, [s.id]);
                let x = n.useDeferredValue(null !== (t = E[c.currentPage]) && void 0 !== t ? t : []),
                    {
                        analyticsLocations: H
                    } = (0, f.default)(),
                    _ = null !== (l = null == H ? void 0 : H[0]) && void 0 !== l ? l : null;
                return n.useEffect(() => {
                    (0, M.trackMembersPageViewed)(s.id, _)
                }, [s.id, _]), (0, a.jsx)(b, {
                    members: x,
                    guild: s,
                    className: i,
                    searchState: o,
                    compact: d,
                    onSelectRow: C,
                    onResetForNewMembers: u
                })
            }