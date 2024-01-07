            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
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
                E = n("849366"),
                _ = n("782340"),
                f = n("911011"),
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
                    className: s(I.marginTop20, f.switch),
                    children: (0, l.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: _.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: _.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let N = c.default.getMaxUsesOptions;

            function T(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: c,
                    maxUses: T,
                    temporary: A,
                    onGenerateNewLink: p,
                    onToggleTemporary: S,
                    onSelectMaxAge: m,
                    onSelectMaxUses: v
                } = e, C = (0, o.default)(n, 0 === c), R = (0, o.default)(n, !0), L = (0, E.default)(n), O = L.find(e => e.value === c), D = N.find(e => e.value === T), [M, U] = i.useState(!1), y = (0, o.useIsNewCommunity)(n, M);
                return (0, l.jsx)("div", {
                    className: f.settingsContent,
                    children: (0, l.jsxs)("form", {
                        onSubmit: p,
                        children: [(0, l.jsx)(a.FormItem, {
                            title: _.default.Messages.EXPIRE_AFTER,
                            className: I.marginTop20,
                            children: (0, l.jsx)(a.SingleSelect, {
                                value: null !== (t = null == O ? void 0 : O.value) && void 0 !== t ? t : h[0].value,
                                options: L,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, u.renderOption)(e, t && R, t && y)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, u.renderOption)(t, n && R, n && y)
                                },
                                onChange: m,
                                optionClassName: f.option,
                                className: f.option,
                                maxVisibleItems: 8
                            })
                        }), C ? (0, l.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => U(!0)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(a.FormItem, {
                                title: _.default.Messages.MAX_NUMBER_OF_USES,
                                className: s(I.marginTop20, I.marginBottom4),
                                children: (0, l.jsx)(a.SingleSelect, {
                                    value: null == D ? void 0 : D.value,
                                    options: N,
                                    onChange: v
                                })
                            }), (0, l.jsx)(g, {
                                temporary: A,
                                shouldHide: C || r,
                                onToggleTemporary: S
                            })]
                        })]
                    })
                })
            }