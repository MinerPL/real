            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
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
                E = l("77078"),
                m = l("571067"),
                M = l("130037"),
                T = l("178406"),
                h = l("645266"),
                x = l("412013"),
                _ = l("782340"),
                H = l("554490"),
                A = l("236807");
            let N = new Set;

            function p(e) {
                let {
                    guildId: t,
                    onClose: l
                } = e, s = (0, M.useTrackMemberFilterRolesUsed)(t), o = (0, f.default)([T.default], () => T.default.getSearchStateByGuildId(t), [t], c), [C, u] = n.useState(o.selectedRoleIds), p = (0, m.useRoleRows)(t, N, !0), g = (e, l) => {
                    let {
                        record: n
                    } = e;
                    return (0, a.jsx)(E.ComboboxItem, {
                        value: n.id,
                        children: (0, a.jsxs)("div", {
                            className: i(H.roleNameContainer),
                            children: [(0, a.jsxs)("div", {
                                className: i(H.roleLabel),
                                children: [(0, a.jsx)("div", {
                                    className: i(H.labelBackground, l && H.selected)
                                }), (0, a.jsx)(E.ComboboxItem.Label, {
                                    children: (0, a.jsx)(x.default, {
                                        className: i(A.roleTooltipItem),
                                        role: n,
                                        guildId: t
                                    }, n.id)
                                })]
                            }), (0, a.jsx)("div", {
                                className: H.spacer
                            }), (0, a.jsx)("div", {
                                className: H.checkboxContainer,
                                children: (0, a.jsx)(E.ComboboxItem.Checkbox, {
                                    checked: l
                                })
                            })]
                        })
                    }, n.id)
                }, S = (e, t) => p.reduce((l, a) => {
                    let {
                        record: n
                    } = a, s = e.has(n.id);
                    return d(t.toLowerCase(), n.name.toLowerCase()) ? l.push(g(a, s)) : s && l.push(g(a, s)), l
                }, []), L = n.useCallback(e => {
                    (0, h.updateSearchState)(t, {
                        selectedRoleIds: e
                    }), s(e)
                }, [t, s]), I = n.useCallback(r(L, 300), [L]), v = n.useCallback(e => {
                    let t;
                    u(t = C.has(e) ? new Set([...C].filter(t => t !== e)) : new Set([...C, e])), I(t)
                }, [C, I]);
                return (0, a.jsx)(E.ComboboxPopout, {
                    className: i(H.rolePopout),
                    placeholder: _.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
                    value: C,
                    onChange: v,
                    onClose: () => {
                        l()
                    },
                    multiSelect: !0,
                    showScrollbar: !0,
                    autoFocus: !0,
                    children: e => S(C, e)
                })
            }