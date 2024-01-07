            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            }), a("222007");
            var n, r, s, l, o = a("37983"),
                u = a("884691"),
                c = a("41092"),
                i = a("414456"),
                d = a.n(i),
                E = a("77078"),
                p = a("712218"),
                f = a("782340"),
                m = a("448565"),
                _ = a("905518");
            (s = n || (n = {})).CardNumber = "cardNumber", s.CardExpiry = "cardExpiry", s.CardCvc = "cardCvc", (l = r || (r = {})).Change = "change", l.Focus = "focus", l.Blur = "blur";
            var A = function(e) {
                let t = u.useRef(null),
                    {
                        stripeType: a,
                        flipped: n,
                        updateCompleted: r,
                        onFocus: s,
                        onBlur: l
                    } = e,
                    [i, A] = u.useState(p.IconTypes.UNKNOWN),
                    [N, T] = u.useState(!1),
                    [S, y] = u.useState(!1),
                    [C, P] = u.useState(null),
                    [R, I] = u.useState({}),
                    L = (0, c.useElements)(),
                    h = u.useCallback(() => {
                        if (null != L) switch (a) {
                            case "cardNumber": {
                                let e = L.getElement(c.CardNumberElement);
                                if (null == e) return;
                                e.off("change"), e.off("focus"), e.off("blur");
                                break
                            }
                            case "cardExpiry": {
                                let e = L.getElement(c.CardExpiryElement);
                                if (null == e) return;
                                e.off("change"), e.off("focus"), e.off("blur");
                                break
                            }
                            case "cardCvc": {
                                let e = L.getElement(c.CardCvcElement);
                                if (null == e) return;
                                e.off("change"), e.off("focus"), e.off("blur")
                            }
                        }
                    }, [L, a]),
                    g = u.useCallback(e => {
                        !S && !e.empty && y(!0), null != r && r(e.complete), null != e.error && T(!1)
                    }, [S, r]),
                    O = u.useCallback(() => {
                        T(!0), null == s || s()
                    }, [s]),
                    M = u.useCallback(() => {
                        T(!1), null == l || l()
                    }, [l]),
                    D = u.useCallback(() => {
                        if (null != L) switch (a) {
                            case "cardNumber": {
                                let e = L.getElement(c.CardNumberElement);
                                if (null == e) return;
                                e.on("change", e => {
                                    i !== e.brand && A(e.brand), e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? P(f.default.Messages.CREDIT_CARD_ERROR_NUMBER) : P(null), g(e)
                                }), e.on("focus", O), e.on("blur", M);
                                break
                            }
                            case "cardExpiry": {
                                let e = L.getElement(c.CardExpiryElement);
                                if (null == e) return;
                                e.on("change", e => {
                                    null != e.error || e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_EXPIRATION) : P(null), g(e)
                                }), e.on("focus", O), e.on("blur", M);
                                break
                            }
                            case "cardCvc": {
                                let e = L.getElement(c.CardCvcElement);
                                if (null == e) return;
                                e.on("change", e => {
                                    null != e.error || e.empty && S ? P(f.default.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : P(null), g(e)
                                }), e.on("focus", O), e.on("blur", M)
                            }
                        }
                    }, [M, g, O, i, L, S, a]);

                function x() {
                    return d(m.cardInput, {
                        [m.cardInputError]: null !== C,
                        [m.cardInputFocused]: N,
                        [m.cardNumberInput]: "cardNumber" === a
                    })
                }
                return u.useEffect(() => (D(), () => {
                    h()
                }), [D, h]), u.useLayoutEffect(() => {
                    let {
                        current: e
                    } = t;
                    if (null == e) return;
                    let a = window.getComputedStyle(e),
                        n = window.getComputedStyle(e, "::placeholder"),
                        r = a.getPropertyValue("font-family"),
                        s = a.getPropertyValue("font-weight"),
                        l = a.getPropertyValue("color"),
                        o = a.getPropertyValue("font-size");
                    I({
                        base: {
                            fontFamily: r,
                            fontWeight: s,
                            color: l,
                            fontSize: o,
                            "::placeholder": {
                                color: n.getPropertyValue("color")
                            }
                        }
                    })
                }, [t]), (0, o.jsxs)("div", {
                    className: d(m.cardNumberWrapper),
                    "data-stripe-type": a,
                    children: [(0, o.jsx)("div", {
                        ref: t,
                        className: d(m.hiddenDiv, _.input)
                    }), function() {
                        switch (a) {
                            case "cardNumber":
                                return (0, o.jsxs)("div", {
                                    children: [(0, o.jsx)(p.default, {
                                        className: m.cardIcon,
                                        type: i,
                                        flipped: n
                                    }), (0, o.jsx)(c.CardNumberElement, {
                                        options: {
                                            style: R,
                                            placeholder: f.default.Messages.PAYMENT_SOURCE_CARD_NUMBER
                                        },
                                        className: x()
                                    })]
                                });
                            case "cardExpiry":
                                return (0, o.jsx)(c.CardExpiryElement, {
                                    options: {
                                        style: R,
                                        placeholder: f.default.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
                                    },
                                    className: x()
                                });
                            case "cardCvc":
                                return (0, o.jsx)(c.CardCvcElement, {
                                    options: {
                                        style: R,
                                        placeholder: f.default.Messages.CREDIT_CARD_SECURITY_CODE
                                    },
                                    className: x()
                                })
                        }
                    }(), (0, o.jsx)(E.InputError, {
                        error: C
                    })]
                })
            }