            "use strict";
            n.r(t), n.d(t, {
                SelectIconSize: function() {
                    return l
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var l, a, s = n("37983"),
                u = n("884691"),
                o = n("414456"),
                i = n.n(o),
                r = n("77078"),
                d = n("798609"),
                c = n("602428"),
                m = n("307311"),
                p = n("192112"),
                f = n("782340"),
                E = n("693098"),
                C = n("709965");

            function S(e) {
                let {
                    icon: t,
                    iconSize: n
                } = e;
                return (0, s.jsx)("div", {
                    className: E.iconContainer,
                    style: {
                        height: n,
                        width: n
                    },
                    children: t
                })
            }

            function T(e) {
                let {
                    selectActionComponent: t,
                    queryOptions: n,
                    renderIcon: l,
                    renderOptionLabel: a,
                    defaultValues: o
                } = e, {
                    type: T,
                    placeholder: N,
                    maxValues: v,
                    disabled: h
                } = t, [_, I] = u.useState(!1), [g, O] = u.useState(!1), [x, L] = u.useState(new Map(null == o ? void 0 : o.map(e => [e.value, e]))), [y, j] = u.useState(new Set(x.keys())), [A, M] = u.useState(() => (null != o ? o : []).map(e => e.value)), [R, b] = u.useState(0);
                u.useEffect(() => {
                    let e = (null != o ? o : []).map(e => e.value);
                    if (e.every(e => A.includes(e)) && A.every(t => e.includes(t))) return;
                    M(e);
                    let t = new Map(null == o ? void 0 : o.map(e => [e.value, e]));
                    L(t), j(new Set(t.keys())), b(e => e + 1)
                }, [o, A]);
                let {
                    state: U,
                    executeStateUpdate: P,
                    visualState: G,
                    isDisabled: w,
                    error: D
                } = (0, m.useComponentState)(t, {
                    type: T,
                    selectedOptions: Array.from(x.values())
                }), B = G === p.ActionComponentState.LOADING;
                u.useEffect(() => {
                    if ((null == U ? void 0 : U.type) === d.ComponentType.USER_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.ROLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.MENTIONABLE_SELECT || (null == U ? void 0 : U.type) === d.ComponentType.CHANNEL_SELECT) {
                        let e = new Map(U.selectedOptions.map(e => [e.value, e]));
                        L(e), j(new Set(e.keys()))
                    }
                }, [U]);
                let k = u.useCallback(() => {
                    P({
                        type: T,
                        selectedOptions: Array.from(x.values())
                    }) && j(new Set(x.keys()))
                }, [P, T, x]);
                u.useEffect(() => {
                    if (!_ && !g) !(x.size === y.size && Array.from(x.keys()).every(e => y.has(e))) && k()
                }, [_, g, y, x, k]);
                let z = 0 === x.size || _,
                    F = {
                        isDisabled: h || w,
                        wrapperClassName: E.select,
                        options: e => new Promise(t => {
                            let l = n(e);
                            t(l)
                        }),
                        placeholder: z ? null != N ? N : f.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER : void 0,
                        onClose: () => I(!1),
                        onOpen: () => I(!0),
                        onBlur: () => O(!1),
                        maxVisibleItems: 5,
                        optionClassName: E.selectOption,
                        renderOptionPrefix: (e, t) => {
                            let {
                                inPill: n
                            } = t, a = n ? 16 : 24, u = l(e, a);
                            return null != u ? (0, s.jsx)(S, {
                                icon: u,
                                iconSize: a
                            }) : null
                        },
                        renderOptionLabel: a
                    };
                return (0, s.jsxs)(u.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: E.container,
                        children: [v > 1 ? (0, s.jsx)(r.SearchableSelect, {
                            className: E.badges,
                            value: Array.from(x.values()),
                            onChange: e => {
                                !_ && O(!0), L(new Map(e.map(e => [e.value, e])))
                            },
                            multi: !0,
                            inputClassNames: i({
                                [E.soloInput]: 0 === x.size,
                                [E.inlineInput]: x.size > 0,
                                [E.hidden]: !z
                            }),
                            closeOnSelect: !1,
                            centerCaret: !0,
                            ...F
                        }, R) : (0, s.jsx)(r.SearchableSelect, {
                            className: (E.badges, E.singleSelect),
                            value: [...x.values()][0],
                            onChange: e => L(null != e ? new Map([
                                [e.value, e]
                            ]) : new Map),
                            clearable: !0,
                            centerCaret: !0,
                            ...F
                        }, R), B ? (0, s.jsx)("div", {
                            className: E.loading,
                            children: (0, s.jsx)(r.Dots, {
                                dotRadius: 3.5,
                                themed: !0
                            })
                        }) : null]
                    }), null != D ? (0, s.jsx)(c.InteractionStatusMessage, {
                        ...(0, c.getFailedContent)(D),
                        className: C.error
                    }) : null]
                })
            }(a = l || (l = {}))[a.PILL_ICON_SIZE = 16] = "PILL_ICON_SIZE", a[a.ROW_ICON_SIZE = 24] = "ROW_ICON_SIZE"