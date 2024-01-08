            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                o = n("272091"),
                u = n("577617"),
                d = n("255070"),
                c = n("354023"),
                f = n("849366"),
                E = n("782340"),
                _ = n("911011"),
                I = n("926622");
            let h = c.default.getMaxAgeOptions;

            function g(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: i
                } = e;
                return n ? (0, l.jsx)("div", {
                    className: I.marginTop20
                }) : (0, l.jsx)(a.FormItem, {
                    className: s(I.marginTop20, _.switch),
                    children: (0, l.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: E.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: E.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let p = c.default.getMaxUsesOptions;

            function m(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: c,
                    maxUses: m,
                    temporary: N,
                    onGenerateNewLink: S,
                    onToggleTemporary: T,
                    onSelectMaxAge: v,
                    onSelectMaxUses: A
                } = e, R = (0, o.default)(n, 0 === c), C = (0, o.default)(n, !0), L = (0, f.default)(n), M = L.find(e => e.value === c), O = p.find(e => e.value === m), [D, U] = i.useState(!1), y = (0, o.useIsNewCommunity)(n, D);
                return (0, l.jsx)("div", {
                    className: _.settingsContent,
                    children: (0, l.jsxs)("form", {
                        onSubmit: S,
                        children: [(0, l.jsx)(a.FormItem, {
                            title: E.default.Messages.EXPIRE_AFTER,
                            className: I.marginTop20,
                            children: (0, l.jsx)(a.SingleSelect, {
                                value: null !== (t = null == M ? void 0 : M.value) && void 0 !== t ? t : h[0].value,
                                options: L,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, u.renderOption)(e, t && C, t && y)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, u.renderOption)(t, n && C, n && y)
                                },
                                onChange: v,
                                optionClassName: _.option,
                                className: _.option,
                                maxVisibleItems: 8
                            })
                        }), R ? (0, l.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => U(!0)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(a.FormItem, {
                                title: E.default.Messages.MAX_NUMBER_OF_USES,
                                className: s(I.marginTop20, I.marginBottom4),
                                children: (0, l.jsx)(a.SingleSelect, {
                                    value: null == O ? void 0 : O.value,
                                    options: p,
                                    onChange: A
                                })
                            }), (0, l.jsx)(g, {
                                temporary: N,
                                shouldHide: R || r,
                                onToggleTemporary: T
                            })]
                        })]
                    })
                })
            }