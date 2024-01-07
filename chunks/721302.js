            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("483366"),
                d = l.n(o),
                C = l("969176"),
                r = l.n(C),
                u = l("65597"),
                c = l("77078"),
                f = l("957255"),
                E = l("810567"),
                m = l("130037"),
                M = l("178406"),
                T = l("645266"),
                h = l("843455"),
                x = l("782340"),
                _ = l("863879");
            let H = n.forwardRef(function(e, t) {
                let {
                    guild: s
                } = e, o = (0, u.default)([M.default], () => M.default.hasDefaultSearchStateByGuildId(s.id), [s.id]), C = (0, u.default)([f.default], () => f.default.can(h.Permissions.KICK_MEMBERS, s)), H = n.useCallback(() => {
                    null != s && C && (0, c.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("494440").then(l.bind(l, "494440"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            guild: s
                        })
                    })
                }, [s, C]), A = (0, u.default)([M.default], () => M.default.getSearchStateByGuildId(s.id), [s.id], r), N = (0, m.useTrackMemberSearchUsed)(s.id), [p, g] = n.useState(A.query), S = n.useCallback(e => {
                    let t = e.trim();
                    t.length > 0 && N(), (0, T.updateSearchState)(s.id, {
                        query: t
                    })
                }, [s.id, N]), L = n.useCallback(d(S, 300), [S]), I = n.useCallback(e => {
                    g(e), L(e)
                }, [L]), v = n.useCallback(() => {
                    g(""), S("")
                }, [S]);
                return n.useImperativeHandle(t, () => ({
                    resetSearchText() {
                        g("")
                    }
                })), (0, a.jsxs)("div", {
                    className: i(_.searchHeaderContainer),
                    children: [(0, a.jsx)("div", {
                        className: i(_.searchHeader),
                        children: o ? (0, a.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE
                        }) : (0, a.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: x.default.Messages.MEMBER_SAFETY_TABLE_TITLE_SEARCH
                        })
                    }), (0, a.jsx)("div", {
                        className: i(_.searchInput),
                        children: (0, a.jsx)("div", {
                            className: i(_.searchHeader),
                            children: (0, a.jsx)(E.default, {
                                className: _.searchBar,
                                query: p,
                                placeholder: x.default.Messages.MEMBER_SAFETY_TABLE_SEARCH_PLACEHOLDER,
                                onChange: I,
                                onClear: v,
                                autoComplete: "off",
                                inputProps: {
                                    autoCapitalize: "none",
                                    autoCorrect: "off",
                                    spellCheck: "false"
                                }
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: i(_.tableOptions),
                        children: C && (0, a.jsx)(c.Button, {
                            className: i(_.pruneButton),
                            onClick: H,
                            "aria-label": x.default.Messages.PRUNE_MEMBERS,
                            color: c.Button.Colors.RED,
                            look: c.Button.Looks.OUTLINED,
                            size: c.Button.Sizes.SMALL,
                            children: x.default.Messages.PRUNE
                        })
                    })]
                })
            });
            var A = H