(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48836"], {
        986686: function(e, t, a) {
            "use strict";
            e.exports = a.p + "26421523fdfaf469e28e.svg"
        },
        731109: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                submitDateOfBirth: function() {
                    return i
                },
                preventUnderageRegistration: function() {
                    return c
                },
                logoutUnderageNewUser: function() {
                    return d
                }
            });
            var l = a("990746"),
                n = a("913144"),
                s = a("395724"),
                u = a("599110"),
                r = a("586391"),
                o = a("49111");

            function i(e, t) {
                return (0, s.default)(e, t), u.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: r.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), l.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let a = e.body;
                    n.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: a
                    }), u.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: r.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function c(e) {
                n.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), u.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: r.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function d(e) {
                n.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), u.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: r.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        208266: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var l = a("920040"),
                n = a("773670"),
                s = a("575482"),
                u = a.n(s),
                r = a("377849"),
                o = a.n(r),
                i = a("77078"),
                c = a("954419"),
                d = a("782340"),
                A = a("733317");
            let E = o().localeData().months(),
                f = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                _ = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: E[e]
                })),
                G = /[a-zA-Z0-9]/;

            function T(e) {
                let {
                    options: t,
                    selectOption: a,
                    children: s
                } = e, [u, r] = n.useState("");
                n.useEffect(() => {
                    if ("" !== u) {
                        let e = setTimeout(() => r(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [u, r]);
                let o = n.useCallback(e => {
                    if (G.test(e.key)) {
                        let l = "".concat(u).concat(e.key.toLowerCase()),
                            n = t.find(e => e.label.toLowerCase().startsWith(l));
                        null != n && a(n.value), r(l)
                    }
                }, [a, r, u, t]);
                return (0, l.jsx)("div", {
                    onKeyDown: o,
                    children: s
                })
            }

            function h() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    a = e.indexOf("M"),
                    l = e.indexOf("Y");
                return (-1 === t || -1 === a || -1 === l) && (t = 0, a = 1, l = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: a,
                    type: "month"
                }, {
                    index: l,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let m = n.forwardRef(function(e, t) {
                let {
                    value: a,
                    wrapperClassName: s,
                    onChange: r,
                    onPopulated: E,
                    error: G,
                    autoFocus: m,
                    required: M
                } = e, {
                    day: y,
                    setDay: R,
                    month: g,
                    setMonth: p,
                    year: N,
                    setYear: O
                } = function(e) {
                    let t = null,
                        a = null,
                        l = null;
                    null != e && (t = e.date(), a = e.month() + 1, l = e.year());
                    let [s, u] = n.useState(t), [r, o] = n.useState(a), [i, c] = n.useState(l);
                    return {
                        day: s,
                        setDay: u,
                        month: r,
                        setMonth: o,
                        year: i,
                        setYear: c
                    }
                }(a), b = n.useMemo(() => null != y && null != g && null != N ? o("".concat(y, "/").concat(g, "/").concat(N), "DD/MM/YYYY") : null, [y, g, N]);
                n.useEffect(() => {
                    r((null == b ? void 0 : b.isValid()) ? b : null)
                }, [b, r]);
                let x = G;
                null != b && !b.isValid() && (x = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let v = function() {
                        let e = new Date().getFullYear(),
                            t = n.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return n.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [C, D] = n.useState(m ? 0 : -1),
                    S = n.useRef(null),
                    I = n.useRef(null),
                    k = n.useRef(null),
                    B = n.useMemo(h, []),
                    j = n.useCallback(() => {
                        var e, t, a, l;
                        switch (null === (e = B[C]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = S.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (a = I.current) || void 0 === a || a.focus();
                                break;
                            case "year":
                                null === (l = k.current) || void 0 === l || l.focus()
                        }
                    }, [C, S, I, k, B]);
                n.useEffect(() => {
                    setTimeout(j, 500)
                }, []), n.useEffect(() => {
                    if (C >= B.length) {
                        null == E || E();
                        return
                    }
                    j()
                }, [C, j]);
                let Y = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = B[e];
                    switch (t) {
                        case "day":
                            Y.push({
                                key: "day",
                                input: (0, l.jsx)(T, {
                                    options: f,
                                    selectOption: R,
                                    children: (0, l.jsx)(c.default, {
                                        ref: S,
                                        className: A.inputDay,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, l.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: f,
                                        value: y,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            R(a), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            Y.push({
                                key: "month",
                                input: (0, l.jsx)(T, {
                                    options: _,
                                    selectOption: p,
                                    children: (0, l.jsx)(c.default, {
                                        ref: I,
                                        className: A.inputMonth,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, l.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: _,
                                        value: g,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            p(a), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            Y.push({
                                key: "year",
                                input: (0, l.jsx)(T, {
                                    options: v,
                                    selectOption: O,
                                    children: (0, l.jsx)(c.default, {
                                        ref: k,
                                        className: A.inputYear,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, l.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: v,
                                        value: N,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            O(a), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, l.jsxs)("fieldset", {
                    className: u(A.container, s),
                    children: [(0, l.jsx)(i.FormTitle, {
                        tag: "legend",
                        required: M,
                        error: x,
                        children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, l.jsx)("div", {
                        className: A.inputs,
                        children: Y.map((e, t) => {
                            let {
                                key: a,
                                input: n
                            } = e;
                            return (0, l.jsx)("div", {
                                tabIndex: t + 1,
                                className: A[a],
                                children: n
                            }, a)
                        })
                    })]
                })
            });
            var M = m
        },
        441152: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var l, n, s = a("920040"),
                u = a("773670"),
                r = a("161179"),
                o = a.n(r),
                i = a("377849"),
                c = a.n(i),
                d = a("498225"),
                A = a("77078"),
                E = a("851387"),
                f = a("42203"),
                _ = a("18494"),
                G = a("697218"),
                T = a("145131"),
                h = a("476765"),
                m = a("599110"),
                M = a("701909"),
                y = a("731109"),
                R = a("669499"),
                g = a("208266"),
                p = a("586391"),
                N = a("49111"),
                O = a("782340"),
                b = a("857329");

            function x(e) {
                let {
                    transitionState: t,
                    source: l
                } = e, r = (0, d.useStateFromStores)([G.default], () => G.default.getCurrentUser()), i = (0, d.useStateFromStores)([_.default, f.default], () => f.default.getChannel(_.default.getChannelId())), [x, v] = u.useState(null), [C, D] = u.useState(null), [S, I] = u.useState(!1), [k, B] = u.useState(n.AGE_GATE_FORM), j = u.createRef(), Y = u.createRef(), F = (0, h.useUID)(), U = null != x ? c().diff(x, "years") : null;

                function L() {
                    let e = null == i ? void 0 : i.getGuildId();
                    E.default.nsfwReturnToSafety(e), (0, R.closeAgeGateModal)(l)
                }
                async function P() {
                    o(null != x, "Cannot submit null birthday.");
                    try {
                        return D(null), I(!0), await (0, y.submitDateOfBirth)(x, l)
                    } catch (t) {
                        if (null != t.body && null != t.body.date_of_birth)(0, R.openFailureAgeGateModal)(l, t.body.date_of_birth);
                        else {
                            var e;
                            (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? D(O.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : D(null == t ? void 0 : t.body.message), I(!1)
                        }
                    }
                }
                async function w() {
                    if (o(null != U, "Cannot submit if we haven't been able to calculate age."), U < 18) {
                        B(n.CONFIRM);
                        return
                    }
                    await P()
                }
                async function H(e) {
                    e.preventDefault(), !S && null != x && await w()
                }
                async function z() {
                    let e = await P();
                    null == e && B(n.AGE_GATE_FORM)
                }
                u.useEffect(() => {
                    null != r && null != r.nsfwAllowed && (0, R.openSuccessAgeGateModal)(l)
                }), u.useEffect(() => {
                    m.default.track(N.AnalyticEvents.AGE_GATE_ACTION, {
                        source: l,
                        action: p.AgeGateAnalyticAction.AGE_GATE_OPEN
                    })
                }, [l]);
                let K = u.useCallback(e => {
                        v(e)
                    }, [v]),
                    W = u.useCallback(() => {
                        var e;
                        null === (e = Y.current) || void 0 === e || e.focus()
                    }, [Y]);
                return k === n.AGE_GATE_FORM ? function() {
                    let e = (() => {
                            if (l === p.AgeGateSource.FAMILY_CENTER) return O.default.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                            return O.default.Messages.AGE_GATE_EXISTING_HEADER
                        })(),
                        n = (() => {
                            switch (l) {
                                case p.AgeGateSource.FAMILY_CENTER:
                                    return O.default.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                                case p.AgeGateSource.DEEP_LINK_PROMPT:
                                    return O.default.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                                        helpURL: M.default.getArticleURL(N.HelpdeskArticles.AGE_GATE)
                                    });
                                default:
                                    return O.default.Messages.AGE_GATE_NSFW_BODY.format({
                                        helpURL: M.default.getArticleURL(N.HelpdeskArticles.AGE_GATE)
                                    })
                            }
                        })();
                    return (0, s.jsxs)(A.ModalRoot, {
                        transitionState: t,
                        size: A.ModalSize.SMALL,
                        "aria-labelledby": F,
                        children: [(0, s.jsxs)(A.ModalContent, {
                            children: [(0, s.jsxs)("div", {
                                className: b.container,
                                children: [(0, s.jsx)("img", {
                                    alt: "",
                                    src: a("986686"),
                                    className: b.img
                                }), (0, s.jsx)(A.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: b.title,
                                    id: F,
                                    children: e
                                }), (0, s.jsx)(A.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: n
                                })]
                            }), (0, s.jsx)("form", {
                                onSubmit: H,
                                children: (0, s.jsx)(g.default, {
                                    label: O.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                    wrapperClassName: b.birthday,
                                    name: "date_of_birth",
                                    onChange: K,
                                    onPopulated: W,
                                    error: C,
                                    value: x,
                                    ref: j,
                                    autoFocus: !0
                                })
                            })]
                        }), (0, s.jsxs)(A.ModalFooter, {
                            justify: T.default.Justify.BETWEEN,
                            children: [(0, s.jsx)(A.Button, {
                                buttonRef: Y,
                                submitting: S,
                                disabled: null == x,
                                size: A.ButtonSizes.SMALL,
                                onClick: w,
                                children: O.default.Messages.AGE_GATE_SUBMIT
                            }), (0, s.jsx)(A.Button, {
                                look: A.Button.Looks.LINK,
                                size: A.Button.Sizes.NONE,
                                color: A.Button.Colors.PRIMARY,
                                onClick: L,
                                children: O.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })]
                    })
                }() : (0, s.jsxs)(A.ModalRoot, {
                    transitionState: A.ModalTransitionState.ENTERED,
                    size: A.ModalSize.SMALL,
                    "aria-labelledby": F,
                    children: [(0, s.jsx)(A.ModalContent, {
                        children: (0, s.jsxs)("div", {
                            className: b.confirmContainer,
                            children: [(0, s.jsx)(A.Heading, {
                                variant: "heading-xl/semibold",
                                className: b.confirmTitle,
                                id: F,
                                children: O.default.Messages.AGE_GATE_CONFIRM_HEADER.format({
                                    age: U
                                })
                            }), (0, s.jsx)(A.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: O.default.Messages.AGE_GATE_NSFW_BODY.format({
                                    helpURL: M.default.getArticleURL(N.HelpdeskArticles.AGE_GATE)
                                })
                            })]
                        })
                    }), (0, s.jsxs)(A.ModalFooter, {
                        className: b.confirmFooter,
                        children: [(0, s.jsx)(A.Button, {
                            look: A.Button.Looks.LINK,
                            size: A.Button.Sizes.NONE,
                            color: A.Button.Colors.PRIMARY,
                            onClick: () => B(n.AGE_GATE_FORM),
                            children: O.default.Messages.AGE_GATE_CONFIRM_GO_BACK
                        }), (0, s.jsx)(A.Button, {
                            color: A.Button.Colors.BRAND,
                            onClick: z,
                            children: O.default.Messages.AGE_GATE_CONFIRM_BUTTON
                        })]
                    })]
                })
            }(l = n || (n = {}))[l.AGE_GATE_FORM = 0] = "AGE_GATE_FORM", l[l.CONFIRM = 1] = "CONFIRM"
        },
        395724: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("377849"),
                n = a.n(l),
                s = a("599110"),
                u = a("49111");

            function r(e, t) {
                s.default.track(u.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > n().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        }
    }
]);