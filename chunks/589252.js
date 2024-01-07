            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("77078"),
                o = n("476765"),
                u = n("345327"),
                d = n("467413"),
                c = n("713186"),
                f = n("905518");

            function E(e) {
                let {
                    alpha2: t,
                    countryCode: n,
                    forceMode: l,
                    label: E,
                    error: h,
                    className: _,
                    required: m,
                    value: g,
                    setRef: p,
                    placeholder: A,
                    autoFocus: T,
                    maxLength: R,
                    spellCheck: I,
                    autoComplete: N,
                    autoCapitalize: S,
                    autoCorrect: C,
                    onChange: L,
                    inputClassName: M
                } = e, O = (0, o.useUID)(), [x, v] = a.useState(!1), D = (0, u.shouldShowCountryCodeSelector)(l, g);
                return (0, s.jsx)(i.FormItem, {
                    title: E,
                    error: h,
                    className: _,
                    required: m,
                    tag: "label",
                    htmlFor: O,
                    children: (0, s.jsxs)("div", {
                        className: r(f.input, c.input, M, {
                            [f.error]: null != h,
                            [f.focused]: x
                        }),
                        children: [(0, s.jsx)(d.default, {
                            show: D,
                            alpha2: t,
                            countryCode: n
                        }), (0, s.jsx)(i.TextInput, {
                            id: O,
                            name: "email",
                            type: l === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: g,
                            inputRef: p,
                            placeholder: A,
                            "aria-label": E,
                            required: m,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(l, e) ? n : "";
                                L(e, t)
                            },
                            autoComplete: N,
                            autoCapitalize: S,
                            autoCorrect: C,
                            autoFocus: T,
                            maxLength: R,
                            spellCheck: I,
                            className: c.inputWrapper,
                            inputClassName: c.inputField,
                            onFocus: () => v(!0),
                            onBlur: () => v(!1)
                        })]
                    })
                })
            }