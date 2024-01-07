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
                r = n("65597"),
                o = n("804160"),
                d = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                C = n("721302"),
                m = n("888940");

            function g(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequest)(t.id), a = (0, u.useSpring)({
                    height: n ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: m.loaderContainer,
                    children: (0, l.jsx)(u.animated.div, {
                        className: m.loaderBar,
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
                } = e, x = (0, r.default)([d.default], () => d.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), S = (0, o.useIsMakingRequest)(t.id), E = (0, o.useIsStillIndexing)(t.id), T = a.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), p = (0, c.getSearchState)(E, S, x), N = a.useRef(null), I = a.useCallback(() => {
                    var e;
                    null === (e = N.current) || void 0 === e || e.resetSearchText()
                }, []);
                return (0, l.jsxs)("div", {
                    className: i(m.mainTableContainer, n),
                    children: [(0, l.jsx)(C.default, {
                        guild: t,
                        ref: N
                    }), (0, l.jsx)(g, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: T,
                        searchState: p,
                        onResetForNewMembers: I
                    }), p !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: s
                    })]
                })
            }