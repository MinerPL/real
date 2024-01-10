            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007"), l("808653"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                s = l("414456"),
                i = l.n(s),
                o = l("448105"),
                d = l.n(o),
                C = l("483366"),
                r = l.n(C),
                u = l("969176"),
                c = l.n(u),
                f = l("65597"),
                m = l("77078"),
                E = l("571067"),
                M = l("130037"),
                h = l("178406"),
                T = l("645266"),
                x = l("412013"),
                H = l("782340"),
                _ = l("554490"),
                A = l("236807");
            let L = new Set;

            function g(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, s = (0, M.useTrackMemberFilterRolesUsed)(t), o = (0, f.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], c), [C, u] = n.useState(o.selectedRoleIds), g = (0, E.useRoleRows)(t, L, !0), N = (e, l) => {
                    let {
                        record: n
                    } = e;
                    return (0, a.jsx)(m.ComboboxItem, {
                        value: n.id,
                        children: (0, a.jsxs)("div", {
                            className: i(_.roleNameContainer),
                            children: [(0, a.jsxs)("div", {
                                className: i(_.roleLabel),
                                children: [(0, a.jsx)("div", {
                                    className: i(_.labelBackground, l && _.selected)
                                }), (0, a.jsx)(m.ComboboxItem.Label, {
                                    children: (0, a.jsx)(x.default, {
                                        className: i(A.roleTooltipItem),
                                        role: n,
                                        guildId: t
                                    }, n.id)
                                })]
                            }), (0, a.jsx)("div", {
                                className: _.spacer
                            }), (0, a.jsx)("div", {
                                className: _.checkboxContainer,
                                children: (0, a.jsx)(m.ComboboxItem.Checkbox, {
                                    checked: l
                                })
                            })]
                        })
                    }, n.id)
                }, p = (e, t) => g.reduce((l, a) => {
                    let {
                        record: n
                    } = a, s = e.has(n.id);
                    return d(t.toLowerCase(), n.name.toLowerCase()) ? l.push(N(a, s)) : s && l.push(N(a, s)), l
                }, []), S = n.useCallback(e => {
                    (0, T.updateSearchState)(t, {
                        selectedRoleIds: e
                    }), s(e)
                }, [t, s]), v = n.useCallback(r(S, 300), [S]), R = n.useCallback(e => {
                    let t;
                    u(t = C.has(e) ? new Set([...C].filter(t => t !== e)) : new Set([...C, e])), v(t)
                }, [C, v]);
                return (0, a.jsx)(m.ComboboxPopout, {
                    className: i(_.rolePopout),
                    placeholder: H.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
                    value: C,
                    onChange: R,
                    onClose: () => {
                        l()
                    },
                    multiSelect: !0,
                    showScrollbar: !0,
                    autoFocus: !0,
                    children: e => p(C, e)
                })
            }