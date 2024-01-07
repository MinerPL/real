            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("77078"),
                o = s("945330"),
                d = s("49111"),
                u = s("89466"),
                c = e => {
                    let {
                        className: t,
                        tags: s,
                        value: l,
                        onRemoveTag: c,
                        onAddTag: E,
                        maxTaxLength: _,
                        maxTags: T,
                        disabled: I,
                        placeholder: S,
                        ...N
                    } = e, [g, f] = n.useState(null != l ? l : ""), A = s.map((e, t) => (0, a.jsxs)("span", {
                        className: i(u.tag, {
                            [u.disabledTag]: I
                        }),
                        children: [e, !I && (0, a.jsx)(r.Clickable, {
                            className: u.closeWrapper,
                            onClick: () => c(t),
                            children: (0, a.jsx)(o.default, {
                                width: 16,
                                height: 16,
                                className: u.close
                            })
                        })]
                    }, t)), L = n.useCallback(() => {
                        let e = g.trim();
                        if (0 !== e.length)(null == T || !(s.length >= T)) && (E(e), f(""))
                    }, [g, T, E, s.length]), m = n.useCallback(e => {
                        switch (e.keyCode) {
                            case d.KeyboardKeys.BACKSPACE:
                                0 === g.length && s.length > 0 && (e.preventDefault(), e.stopPropagation(), c(s.length - 1));
                                break;
                            case d.KeyboardKeys.ENTER:
                            case d.KeyboardKeys.TAB:
                            case d.KeyboardKeys.COMMA:
                                e.preventDefault(), e.stopPropagation(), L()
                        }
                    }, [L, g.length, c, s.length]);
                    return (0, a.jsxs)("div", {
                        className: i(t, u.inputWrapper, {
                            [u.disabled]: I
                        }),
                        children: [A, (0, a.jsx)(r.TextInput, {
                            className: u.inputOuter,
                            inputClassName: u.inputInner,
                            ...N,
                            value: g,
                            onKeyDown: m,
                            onChange: f,
                            maxLength: _,
                            disabled: I,
                            onBlur: L,
                            placeholder: S
                        })]
                    })
                }