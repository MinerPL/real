            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("509043"),
                o = s("77078"),
                d = s("731898"),
                u = s("449918"),
                c = s("269936"),
                E = s("973262"),
                _ = s("36694"),
                T = s("422403"),
                I = s("49111"),
                S = s("782340"),
                N = s("153893");
            let g = (0, c.makeLazy)({
                createPromise: () => s.el("282585").then(s.bind(s, "282585")),
                webpackId: "282585"
            });

            function f(e) {
                let t = (0, r.getDarkness)(e) > .25;
                return (0, u.getColor)(t ? I.Color.WHITE_500 : I.Color.PRIMARY_530)
            }

            function A(e) {
                let {
                    value: t,
                    onChange: s,
                    disabled: l = !1
                } = e, [d, u] = n.useState(t);

                function c() {
                    s(d)
                }

                function g(e) {
                    s(e), u(e)
                }
                let A = t === I.DEFAULT_ROLE_COLOR,
                    L = A ? d : t,
                    m = (0, a.jsx)(_.default, {
                        width: 32,
                        height: 24,
                        color: f(t)
                    }),
                    C = (0, o.useRadioGroup)({
                        orientation: "horizontal",
                        isDisabled: l
                    }),
                    O = (0, o.useRadioItem)({
                        isSelected: A,
                        label: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT_BUTTON.format({
                            colorHex: (0, r.int2hex)(I.DEFAULT_ROLE_COLOR)
                        })
                    }),
                    h = (0, o.useRadioItem)({
                        isSelected: !A,
                        label: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM_BUTTON.format({
                            colorHex: (0, r.int2hex)(t)
                        })
                    });
                return (0, a.jsxs)("div", {
                    className: N.buttonsContainer,
                    "aria-label": S.default.Messages.USER_SETTINGS_PROFILE_COLOR,
                    ...C,
                    children: [(0, a.jsx)("div", {
                        className: i(N.colorSwatch, {
                            [N.disabled]: l
                        }),
                        children: (0, a.jsxs)(o.Clickable, {
                            onClick: l ? void 0 : function() {
                                s(I.DEFAULT_ROLE_COLOR)
                            },
                            "aria-disabled": l,
                            ...O,
                            children: [(0, a.jsx)("div", {
                                className: N.swatch,
                                style: {
                                    backgroundColor: (0, r.int2hex)(I.DEFAULT_ROLE_COLOR)
                                },
                                children: A ? m : null
                            }), (0, a.jsx)(o.Text, {
                                className: N.swatchDescription,
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                "aria-hidden": !0,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_DEFAULT
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: i(N.colorSwatch, {
                            [N.disabled]: l
                        }),
                        children: [(0, a.jsxs)(o.Clickable, {
                            onClick: l ? void 0 : c,
                            "aria-disabled": l,
                            ...h,
                            children: [(0, a.jsx)("div", {
                                className: i(N.customSwatch, {
                                    [N.defaultSwatch]: L === I.DEFAULT_ROLE_COLOR
                                }),
                                style: {
                                    "--custom-color": (0, r.int2hex)(L)
                                },
                                children: A ? null : m
                            }), (0, a.jsx)(o.Text, {
                                className: N.swatchDescription,
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                "aria-hidden": !0,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_COLOR_CUSTOM
                            })]
                        }), !l && (0, a.jsx)(o.Popout, {
                            onRequestOpen: c,
                            renderPopout: e => (0, a.jsx)(E.CustomColorPicker, {
                                ...e,
                                value: t,
                                onChange: g
                            }),
                            children: e => (0, a.jsx)(o.Clickable, {
                                ...e,
                                className: N.dropperIconButton,
                                "aria-label": S.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                children: (0, a.jsx)(T.default, {
                                    className: N.dropperIcon,
                                    width: 14,
                                    height: 14,
                                    color: f(L)
                                })
                            })
                        })]
                    })]
                })
            }

            function L(e) {
                let t, {
                        value: s,
                        onChange: n,
                        disabled: l = !1
                    } = e,
                    {
                        ref: i,
                        width: r
                    } = (0, d.default)();
                return t = null == r || r < 440 ? (0, a.jsx)(A, {
                    value: s,
                    onChange: n,
                    disabled: l
                }) : (0, a.jsx)(g, {
                    defaultColor: I.DEFAULT_ROLE_COLOR,
                    colors: I.ROLE_COLORS,
                    value: s,
                    onChange: n,
                    disabled: l
                }), (0, a.jsx)("div", {
                    ref: i,
                    children: t
                })
            }