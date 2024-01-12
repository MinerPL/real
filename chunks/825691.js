            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                u = n("272091"),
                o = n("577617"),
                d = n("255070"),
                c = n("354023"),
                f = n("849366"),
                h = n("782340"),
                g = n("911011"),
                m = n("926622");
            let p = c.default.getMaxAgeOptions;

            function I(e) {
                let {
                    temporary: t,
                    shouldHide: n,
                    onToggleTemporary: i
                } = e;
                return n ? (0, l.jsx)("div", {
                    className: m.marginTop20
                }) : (0, l.jsx)(a.FormItem, {
                    className: s(m.marginTop20, g.switch),
                    children: (0, l.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: e => i(e),
                        note: h.default.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: h.default.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            let v = c.default.getMaxUsesOptions;

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
                    onSelectMaxAge: S,
                    onSelectMaxUses: C
                } = e, w = (0, u.default)(n, 0 === c), x = (0, u.default)(n, !0), A = (0, f.default)(n), M = A.find(e => e.value === c), L = v.find(e => e.value === E), [y, R] = i.useState(!1), b = (0, u.useIsNewCommunity)(n, y);
                return (0, l.jsx)("div", {
                    className: g.settingsContent,
                    children: (0, l.jsxs)("form", {
                        onSubmit: T,
                        children: [(0, l.jsx)(a.FormItem, {
                            title: h.default.Messages.EXPIRE_AFTER,
                            className: m.marginTop20,
                            children: (0, l.jsx)(a.SingleSelect, {
                                value: null !== (t = null == M ? void 0 : M.value) && void 0 !== t ? t : p[0].value,
                                options: A,
                                renderOptionLabel: e => {
                                    let t = 0 === e.value;
                                    return (0, o.renderOption)(e, t && x, t && b)
                                },
                                renderOptionValue: e => {
                                    let [t] = e, n = 0 === t.value;
                                    return (0, o.renderOption)(t, n && x, n && b)
                                },
                                onChange: S,
                                optionClassName: g.option,
                                className: g.option,
                                maxVisibleItems: 8
                            })
                        }), w ? (0, l.jsx)(d.default, {
                            guildId: n,
                            permanentInviteSelected: 0 === c,
                            onClick: () => R(!0)
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(a.FormItem, {
                                title: h.default.Messages.MAX_NUMBER_OF_USES,
                                className: s(m.marginTop20, m.marginBottom4),
                                children: (0, l.jsx)(a.SingleSelect, {
                                    value: null == L ? void 0 : L.value,
                                    options: v,
                                    onChange: C
                                })
                            }), (0, l.jsx)(I, {
                                temporary: _,
                                shouldHide: w || r,
                                onToggleTemporary: N
                            })]
                        })]
                    })
                })
            }