            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("907002"),
                d = n("65597"),
                o = n("804160"),
                r = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                m = n("721302"),
                S = n("888940");

            function g(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequest)(t.id), a = (0, u.useSpring)({
                    height: n ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: S.loaderContainer,
                    children: (0, l.jsx)(u.animated.div, {
                        className: S.loaderBar,
                        style: a
                    })
                })
            }

            function x(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: s,
                    onMemberSelect: u
                } = e, x = (0, d.default)([r.default], () => r.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), E = (0, o.useIsMakingRequest)(t.id), T = (0, o.useIsStillIndexing)(t.id), C = a.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), I = (0, c.getSearchState)(T, E, x), p = a.useRef(null), A = a.useCallback(() => {
                    var e;
                    null === (e = p.current) || void 0 === e || e.resetSearchText()
                }, []);
                return (0, l.jsxs)("div", {
                    className: i(S.mainTableContainer, n),
                    children: [(0, l.jsx)(m.default, {
                        guild: t,
                        ref: p
                    }), (0, l.jsx)(g, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: C,
                        searchState: I,
                        onResetForNewMembers: A
                    }), I !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: s
                    })]
                })
            }