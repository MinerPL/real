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
                    return u
                },
                preventUnderageRegistration: function() {
                    return c
                },
                logoutUnderageNewUser: function() {
                    return d
                }
            });
            var n = a("872717"),
                l = a("913144"),
                r = a("395724"),
                o = a("599110"),
                s = a("586391"),
                i = a("49111");

            function u(e, t) {
                return (0, r.default)(e, t), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: s.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), n.default.patch({
                    url: i.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let a = e.body;
                    l.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: a
                    }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: s.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        208266: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return v
                }
            });
            var n = a("37983"),
                l = a("884691"),
                r = a("414456"),
                o = a.n(r),
                s = a("866227"),
                i = a.n(s),
                u = a("77078"),
                c = a("954419"),
                d = a("782340"),
                f = a("512427");
            let E = i().localeData().months(),
                A = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                h = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: E[e]
                })),
                _ = /[a-zA-Z0-9]/;

            function p(e) {
                let {
                    options: t,
                    selectOption: a,
                    children: r
                } = e, [o, s] = l.useState("");
                l.useEffect(() => {
                    if ("" !== o) {
                        let e = setTimeout(() => s(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [o, s]);
                let i = l.useCallback(e => {
                    if (_.test(e.key)) {
                        let n = "".concat(o).concat(e.key.toLowerCase()),
                            l = t.find(e => e.label.toLowerCase().startsWith(n));
                        null != l && a(l.value), s(n)
                    }
                }, [a, s, o, t]);
                return (0, n.jsx)("div", {
                    onKeyDown: i,
                    children: r
                })
            }

            function m() {
                let e = i().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    a = e.indexOf("M"),
                    n = e.indexOf("Y");
                return (-1 === t || -1 === a || -1 === n) && (t = 0, a = 1, n = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: a,
                    type: "month"
                }, {
                    index: n,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let g = l.forwardRef(function(e, t) {
                let {
                    value: a,
                    wrapperClassName: r,
                    onChange: s,
                    onPopulated: E,
                    error: _,
                    autoFocus: g,
                    required: v
                } = e, {
                    day: G,
                    setDay: T,
                    month: b,
                    setMonth: M,
                    year: y,
                    setYear: R
                } = function(e) {
                    let t = null,
                        a = null,
                        n = null;
                    null != e && (t = e.date(), a = e.month() + 1, n = e.year());
                    let [r, o] = l.useState(t), [s, i] = l.useState(a), [u, c] = l.useState(n);
                    return {
                        day: r,
                        setDay: o,
                        month: s,
                        setMonth: i,
                        year: u,
                        setYear: c
                    }
                }(a), x = l.useMemo(() => null != G && null != b && null != y ? i("".concat(G, "/").concat(b, "/").concat(y), "DD/MM/YYYY") : null, [G, b, y]);
                l.useEffect(() => {
                    s((null == x ? void 0 : x.isValid()) ? x : null)
                }, [x, s]);
                let O = _;
                null != x && !x.isValid() && (O = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let C = function() {
                        let e = new Date().getFullYear(),
                            t = l.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return l.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [S, N] = l.useState(g ? 0 : -1),
                    k = l.useRef(null),
                    D = l.useRef(null),
                    I = l.useRef(null),
                    F = l.useMemo(m, []),
                    B = l.useCallback(() => {
                        var e, t, a, n;
                        switch (null === (e = F[S]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = k.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (a = D.current) || void 0 === a || a.focus();
                                break;
                            case "year":
                                null === (n = I.current) || void 0 === n || n.focus()
                        }
                    }, [S, k, D, I, F]);
                l.useEffect(() => {
                    setTimeout(B, 500)
                }, []), l.useEffect(() => {
                    if (S >= F.length) {
                        null == E || E();
                        return
                    }
                    B()
                }, [S, B]);
                let j = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = F[e];
                    switch (t) {
                        case "day":
                            j.push({
                                key: "day",
                                input: (0, n.jsx)(p, {
                                    options: A,
                                    selectOption: T,
                                    children: (0, n.jsx)(c.default, {
                                        ref: k,
                                        className: f.inputDay,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, n.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: A,
                                        value: G,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            T(a), N(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            j.push({
                                key: "month",
                                input: (0, n.jsx)(p, {
                                    options: h,
                                    selectOption: M,
                                    children: (0, n.jsx)(c.default, {
                                        ref: D,
                                        className: f.inputMonth,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, n.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: h,
                                        value: b,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            M(a), N(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            j.push({
                                key: "year",
                                input: (0, n.jsx)(p, {
                                    options: C,
                                    selectOption: R,
                                    children: (0, n.jsx)(c.default, {
                                        ref: I,
                                        className: f.inputYear,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, n.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: C,
                                        value: y,
                                        onChange: t => {
                                            let {
                                                value: a
                                            } = t;
                                            R(a), N(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, n.jsxs)("fieldset", {
                    className: o(f.container, r),
                    children: [(0, n.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: v,
                        error: O,
                        children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, n.jsx)("div", {
                        className: f.inputs,
                        children: j.map((e, t) => {
                            let {
                                key: a,
                                input: l
                            } = e;
                            return (0, n.jsx)("div", {
                                tabIndex: t + 1,
                                className: f[a],
                                children: l
                            }, a)
                        })
                    })]
                })
            });
            var v = g
        },
        673187: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var n, l, r = a("37983"),
                o = a("884691"),
                s = a("627445"),
                i = a.n(s),
                u = a("866227"),
                c = a.n(u),
                d = a("446674"),
                f = a("77078"),
                E = a("851387"),
                A = a("42203"),
                h = a("18494"),
                _ = a("697218"),
                p = a("145131"),
                m = a("476765"),
                g = a("599110"),
                v = a("701909"),
                G = a("731109"),
                T = a("669499"),
                b = a("208266"),
                M = a("586391"),
                y = a("49111"),
                R = a("782340"),
                x = a("917044");

            function O(e) {
                let {
                    transitionState: t,
                    source: n
                } = e, s = (0, d.useStateFromStores)([_.default], () => _.default.getCurrentUser()), u = (0, d.useStateFromStores)([h.default, A.default], () => A.default.getChannel(h.default.getChannelId())), [O, C] = o.useState(null), [S, N] = o.useState(null), [k, D] = o.useState(!1), [I, F] = o.useState(l.AGE_GATE_FORM), B = o.createRef(), j = o.createRef(), L = (0, m.useUID)(), U = null != O ? c().diff(O, "years") : null;

                function w() {
                    let e = null == u ? void 0 : u.getGuildId();
                    E.default.nsfwReturnToSafety(e), (0, T.closeAgeGateModal)(n)
                }
                async function Y() {
                    i(null != O, "Cannot submit null birthday.");
                    try {
                        return N(null), D(!0), await (0, G.submitDateOfBirth)(O, n)
                    } catch (t) {
                        if (null != t.body && null != t.body.date_of_birth)(0, T.openFailureAgeGateModal)(n, t.body.date_of_birth);
                        else {
                            var e;
                            (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? N(R.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : N(null == t ? void 0 : t.body.message), D(!1)
                        }
                    }
                }
                async function P() {
                    if (i(null != U, "Cannot submit if we haven't been able to calculate age."), U < 18) {
                        F(l.CONFIRM);
                        return
                    }
                    await Y()
                }
                async function H(e) {
                    e.preventDefault(), !k && null != O && await P()
                }
                async function z() {
                    let e = await Y();
                    null == e && F(l.AGE_GATE_FORM)
                }
                o.useEffect(() => {
                    null != s && null != s.nsfwAllowed && (0, T.openSuccessAgeGateModal)(n)
                }), o.useEffect(() => {
                    g.default.track(y.AnalyticEvents.AGE_GATE_ACTION, {
                        source: n,
                        action: M.AgeGateAnalyticAction.AGE_GATE_OPEN
                    })
                }, [n]);
                let K = o.useCallback(e => {
                        C(e)
                    }, [C]),
                    V = o.useCallback(() => {
                        var e;
                        null === (e = j.current) || void 0 === e || e.focus()
                    }, [j]);
                return I === l.AGE_GATE_FORM ? function() {
                    let e = (() => {
                            if (n === M.AgeGateSource.FAMILY_CENTER) return R.default.Messages.AGE_GATE_FAMILY_CENTER_HEADER;
                            return R.default.Messages.AGE_GATE_EXISTING_HEADER
                        })(),
                        l = (() => {
                            switch (n) {
                                case M.AgeGateSource.FAMILY_CENTER:
                                    return R.default.Messages.AGE_GATE_FAMILY_CENTER_BODY;
                                case M.AgeGateSource.DEEP_LINK_PROMPT:
                                    return R.default.Messages.AGE_GATE_DEEP_LINK_BODY.format({
                                        helpURL: v.default.getArticleURL(y.HelpdeskArticles.AGE_GATE)
                                    });
                                default:
                                    return R.default.Messages.AGE_GATE_NSFW_BODY.format({
                                        helpURL: v.default.getArticleURL(y.HelpdeskArticles.AGE_GATE)
                                    })
                            }
                        })();
                    return (0, r.jsxs)(f.ModalRoot, {
                        transitionState: t,
                        size: f.ModalSize.SMALL,
                        "aria-labelledby": L,
                        children: [(0, r.jsxs)(f.ModalContent, {
                            children: [(0, r.jsxs)("div", {
                                className: x.container,
                                children: [(0, r.jsx)("img", {
                                    alt: "",
                                    src: a("986686"),
                                    className: x.img
                                }), (0, r.jsx)(f.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: x.title,
                                    id: L,
                                    children: e
                                }), (0, r.jsx)(f.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: l
                                })]
                            }), (0, r.jsx)("form", {
                                onSubmit: H,
                                children: (0, r.jsx)(b.default, {
                                    label: R.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                    wrapperClassName: x.birthday,
                                    name: "date_of_birth",
                                    onChange: K,
                                    onPopulated: V,
                                    error: S,
                                    value: O,
                                    ref: B,
                                    autoFocus: !0
                                })
                            })]
                        }), (0, r.jsxs)(f.ModalFooter, {
                            justify: p.default.Justify.BETWEEN,
                            children: [(0, r.jsx)(f.Button, {
                                buttonRef: j,
                                submitting: k,
                                disabled: null == O,
                                size: f.ButtonSizes.SMALL,
                                onClick: P,
                                children: R.default.Messages.AGE_GATE_SUBMIT
                            }), (0, r.jsx)(f.Button, {
                                look: f.Button.Looks.LINK,
                                size: f.Button.Sizes.NONE,
                                color: f.Button.Colors.PRIMARY,
                                onClick: w,
                                children: R.default.Messages.AGE_GATE_GO_BACK
                            })]
                        })]
                    })
                }() : (0, r.jsxs)(f.ModalRoot, {
                    transitionState: f.ModalTransitionState.ENTERED,
                    size: f.ModalSize.SMALL,
                    "aria-labelledby": L,
                    children: [(0, r.jsx)(f.ModalContent, {
                        children: (0, r.jsxs)("div", {
                            className: x.confirmContainer,
                            children: [(0, r.jsx)(f.Heading, {
                                variant: "heading-xl/semibold",
                                className: x.confirmTitle,
                                id: L,
                                children: R.default.Messages.AGE_GATE_CONFIRM_HEADER.format({
                                    age: U
                                })
                            }), (0, r.jsx)(f.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: R.default.Messages.AGE_GATE_NSFW_BODY.format({
                                    helpURL: v.default.getArticleURL(y.HelpdeskArticles.AGE_GATE)
                                })
                            })]
                        })
                    }), (0, r.jsxs)(f.ModalFooter, {
                        className: x.confirmFooter,
                        children: [(0, r.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            size: f.Button.Sizes.NONE,
                            color: f.Button.Colors.PRIMARY,
                            onClick: () => F(l.AGE_GATE_FORM),
                            children: R.default.Messages.AGE_GATE_CONFIRM_GO_BACK
                        }), (0, r.jsx)(f.Button, {
                            color: f.Button.Colors.BRAND,
                            onClick: z,
                            children: R.default.Messages.AGE_GATE_CONFIRM_BUTTON
                        })]
                    })]
                })
            }(n = l || (l = {}))[n.AGE_GATE_FORM = 0] = "AGE_GATE_FORM", n[n.CONFIRM = 1] = "CONFIRM"
        },
        395724: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("866227"),
                l = a.n(n),
                r = a("599110"),
                o = a("49111");

            function s(e, t) {
                r.default.track(o.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > l().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        954419: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_SELECT_STYLES: function() {
                    return A
                },
                default: function() {
                    return h
                }
            });
            var n, l, r = a("37983"),
                o = a("884691"),
                s = a("414456"),
                i = a.n(s),
                u = a("773392"),
                c = a("77078"),
                d = a("49111"),
                f = a("782340"),
                E = a("599619");
            (n = l || (l = {})).TOP = "top", n.BOTTOM = "bottom";
            let A = {
                container: (e, t) => {
                    let {
                        isDisabled: a
                    } = t;
                    return {
                        ...e,
                        cursor: a ? "not-allowed" : void 0,
                        pointerEvents: void 0,
                        fontSize: 16,
                        fontWeight: 500,
                        width: "100%"
                    }
                },
                control: (e, t) => {
                    let {
                        isDisabled: a,
                        menuIsOpen: n
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: a ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: n ? "4px 4px 0 0" : "4px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: a ? "not-allowed" : void 0,
                        pointerEvents: a ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                singleValue: (e, t) => {
                    let {
                        isDisabled: a
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        opacity: a ? .5 : 1
                    }
                },
                input: e => ({
                    ...e,
                    color: "var(--interactive-normal)"
                }),
                menu: e => ({
                    ...e,
                    backgroundColor: "var(--background-secondary)",
                    border: "1px solid var(--background-tertiary)",
                    borderRadius: "0 0 4px 4px",
                    color: "var(--interactive-normal)",
                    marginTop: -1,
                    marginBottom: -1
                }),
                clearIndicator: (e, t) => {
                    let {
                        isDisabled: a
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: a ? void 0 : "pointer",
                        opacity: .3,
                        padding: "8px 0",
                        transform: "scale(0.8)",
                        ":hover": {
                            color: "var(--text-danger)",
                            opacity: 1
                        }
                    }
                },
                indicatorsContainer: e => ({
                    ...e,
                    alignItems: "flex-start"
                }),
                dropdownIndicator: (e, t) => {
                    let {
                        isDisabled: a
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: a ? void 0 : "pointer",
                        opacity: a ? .3 : 1,
                        padding: "8px 8px 8px 0",
                        ":hover": {
                            color: "var(--interactive-hover)",
                            opacity: a ? .3 : 1
                        }
                    }
                },
                menuList: e => ({
                    ...e,
                    padding: 0,
                    "&::-webkit-scrollbar": {
                        width: 8,
                        padding: "0px 2px"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "var(--scrollbar-thin-thumb)",
                        border: "2px solid transparent",
                        backgroundClip: "padding-box",
                        borderRadius: 4
                    },
                    "&::-webkit-scrollbar-track-piece": {
                        backgroundColor: "transparent",
                        borderColor: "transparent"
                    }
                }),
                option: (e, t) => {
                    let {
                        isSelected: a,
                        isFocused: n
                    } = t;
                    return {
                        ...e,
                        ...a ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : n ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        },
                        cursor: "pointer",
                        display: "flex",
                        padding: 12,
                        alignItems: "center",
                        minHeight: 40,
                        "&:active": {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        }
                    }
                },
                placeholder: e => ({
                    ...e,
                    color: "var(--text-muted)"
                })
            };
            class h extends o.Component {
                focus() {
                    var e;
                    null === (e = this._selectRef.current) || void 0 === e || e.focus()
                }
                render() {
                    let e;
                    let {
                        className: t,
                        selectClassName: a,
                        error: n,
                        valueRenderer: l,
                        optionRenderer: o,
                        multiValueRenderer: s,
                        options: d,
                        value: h,
                        autofocus: _,
                        disabled: p,
                        clearable: m,
                        searchable: g,
                        styleOverrides: v,
                        isMulti: G,
                        placeholder: T,
                        filterOption: b,
                        closeMenuOnSelect: M = !0,
                        ...y
                    } = this.props, R = {
                        ...y
                    };
                    null != _ && (R.autoFocus = _), null != p && (R.isDisabled = p), null != m && (R.isClearable = m), null != g && (R.isSearchable = g);
                    let x = {
                        IndicatorSeparator: () => null
                    };
                    null != o && (x.Option = e => (0, r.jsx)(u.components.Option, {
                        ...e,
                        children: o(e.data)
                    })), null != l && (x.SingleValue = e => (0, r.jsx)(u.components.SingleValue, {
                        ...e,
                        children: l(e.data)
                    })), null != s && (x.MultiValue = e => s(e.data));
                    if (G && Array.isArray(h)) {
                        let t = {};
                        d.forEach(e => {
                            t[String(e.value)] = e
                        }), e = h.map(e => t[String(e)])
                    } else e = null != h ? d.find(e => e.value === h) : null;
                    return (0, r.jsx)(c.FocusRing, {
                        focused: this.state.isFocused && !this.state.isOpen,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: i(E.select, t, {
                                [E.error]: null != n
                            }),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(u.default, {
                                ...R,
                                className: a,
                                ref: this._selectRef,
                                isMulti: G,
                                components: x,
                                options: d,
                                styles: null != v ? v : A,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onMenuOpen: this.handleMenuOpen,
                                onMenuClose: this.handleMenuClose,
                                closeMenuOnSelect: M,
                                value: e,
                                onKeyDown: this.handleKeyDown,
                                placeholder: null != T ? T : f.default.Messages.SELECT,
                                noOptionsMessage: () => f.default.Messages.NO_RESULTS_FOUND,
                                filterOption: b
                            }), null != n ? (0, r.jsx)("div", {
                                className: E.errorMessage,
                                children: n
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._selectRef = o.createRef(), this._containerRef = o.createRef(), this.state = {
                        isFocused: !1,
                        isOpen: !1
                    }, this.handleFocus = e => {
                        var t, a;
                        this.setState({
                            isFocused: !0
                        }), null === (t = (a = this.props).onFocus) || void 0 === t || t.call(a, e)
                    }, this.handleBlur = e => {
                        var t, a;
                        this.setState({
                            isFocused: !1
                        }), null === (t = (a = this.props).onBlur) || void 0 === t || t.call(a, e)
                    }, this.handleKeyDown = e => {
                        e.which === d.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
                    }, this.handleMenuOpen = () => {
                        this.setState({
                            isOpen: !0
                        })
                    }, this.handleMenuClose = () => {
                        this.setState({
                            isOpen: !1
                        })
                    }
                }
            }
            h.MenuPlacements = l
        }
    }
]);