            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return h
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("627445"),
                n = A.n(l),
                r = A("509043"),
                s = A("77078"),
                o = A("973262"),
                i = A("191814"),
                d = A("476765"),
                u = A("422403"),
                c = A("49111"),
                f = A("782340"),
                C = A("513706");
            let g = (0, d.uid)();

            function h(e) {
                let {
                    newRoleParams: t,
                    setNewRoleParams: A
                } = e, {
                    name: l,
                    color: d
                } = t, h = e => A(t => (n(null != t, "newRoleParams should be defined"), {
                    ...t,
                    color: e
                }));
                return (0, a.jsxs)("div", {
                    className: C.roleInputContainer,
                    children: [(0, a.jsx)(s.TextInput, {
                        autoFocus: !0,
                        value: l,
                        onChange: e => A(t => (n(null != t, "newRoleParams should be defined"), {
                            ...t,
                            name: e
                        })),
                        id: g,
                        placeholder: f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_NAME_PLACEHOLDER,
                        maxLength: c.ROLE_NAME_MAX_LENGTH,
                        inputClassName: C.input
                    }), (0, a.jsxs)("div", {
                        className: C.roleColorContainer,
                        children: [(0, a.jsx)(s.HiddenVisually, {
                            children: f.default.Messages.GUILD_PRODUCT_SETTINGS_SELECT_ROLE_COLOR_ARIA.format({
                                color: (0, r.int2hex)(d)
                            })
                        }), (0, a.jsx)("div", {
                            className: C.roleColorPreview,
                            style: {
                                backgroundColor: (0, r.int2hex)(d)
                            }
                        }), (0, a.jsx)(i.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, a.jsx)(s.Popout, {
                            renderPopout: e => (0, a.jsx)(o.CustomColorPicker, {
                                ...e,
                                value: d,
                                onChange: h
                            }),
                            children: e => (0, a.jsx)(s.Clickable, {
                                ...e,
                                tag: "span",
                                "aria-label": f.default.Messages.GUILD_PRODUCT_SETTINGS_CREATE_ROLE_SELECT_COLOR_ARIA,
                                className: C.dropperIconContainer,
                                children: (0, a.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: C.dropperIcon
                                })
                            })
                        })]
                    })]
                })
            }