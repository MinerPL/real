            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("77078"),
                o = n("272091"),
                u = n("577617"),
                d = n("255070"),
                c = n("354023"),
                f = n("849366"),
                h = n("782340"),
                g = n("911011"),
                p = n("926622");
            let m = c.default.getMaxAgeOptions;

            function v(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: i
                } = e;
                return n ? (0, l.jsx)("div", {
                    className: p.marginTop20
                }) : (0, l.jsx)(s.FormItem, {
                    className: a(p.marginTop20, g.switch),
                    children: (0, l.jsx)(s.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: h.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: h.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let I = c.default.getMaxUsesOptions;

            function E(e) {
                var t;
                let {
                    guildId: n,
                    shouldHideTemporaryInviteToggle: r,
                    maxAge: c,
                    maxUses: E,
                    temporary: _,
                    onGenerateNewLink: T,
                    onToggleTemporary: N,
                    onSelectMaxAge: C,
                    onSelectMaxUses: S
                } = e, x = (0, o.default)(n, 0 === c), w = (0, o.default)(n, !0), A = (0, f.default)(n), M = A.find(e => e.value === c), R = I.find(e => e.value === E), [y, L] = i.useState(!1), b = (0, o.useIsNewCommunity)(n, y);
                return (0, l.jsx)("div", {
                    className: g.settingsContent,
                    children: (0, l.jsxs)("form", {
                        onSubmit: T,
                        children: [(0, l.jsx)(s.FormItem, {
                            title: h.default.Messages.EXPIRE_AFTER,
                            className: p.marginTop20,
                            children: (0, l.jsx)(s.SingleSelect, {
                                value: null !== (t = null == M ? void 0 : M.value) && void 0 !== t ? t : m[0].value,
                                options: A,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, u.renderOption)(e, t && w, t && b)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, u.renderOption)(t, n && w, n && b)
                                },
                                onChange: C,
                                optionClassName: g.option,
                                className: g.option,
                                maxVisibleItems: 8
                            })
                        }), x ? (0, l.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => L(!0)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(s.FormItem, {
                                title: h.default.Messages.MAX_NUMBER_OF_USES,
                                className: a(p.marginTop20, p.marginBottom4),
                                children: (0, l.jsx)(s.SingleSelect, {
                                    value: null == R ? void 0 : R.value,
                                    options: I,
                                    onChange: S
                                })
                            }), (0, l.jsx)(v, {
                                temporary: _,
                                shouldHide: x || r,
                                onToggleTemporary: N
                            })]
                        })]
                    })
                })
            }