(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11209"], {
        315025: function(e, t, s) {
            "use strict";
            e.exports = s.p + "73e10d7b642efec0fe24.svg"
        },
        92882: function(e, t, s) {
            "use strict";
            e.exports = s.p + "8d1438d2eaf2795dc7e6.svg"
        },
        482563: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1246f861d8aeee1e85a8.svg"
        },
        154442: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6d28f7661b620cdfab26.svg"
        },
        135713: function(e, t, s) {
            "use strict";
            e.exports = s.p + "82f441e4f49e9006c565.svg"
        },
        821809: function(e, t, s) {
            "use strict";
            e.exports = s.p + "89d8bc2c681742561531.svg"
        },
        535910: function(e, t, s) {
            "use strict";
            e.exports = s.p + "063e4561fe6d167bca65.svg"
        },
        504935: function(e, t, s) {
            "use strict";
            e.exports = s.p + "14bf64abfa233414038b.svg"
        },
        970293: function(e, t, s) {
            "use strict";
            e.exports = s.p + "64b69804d8bc22d3b09e.svg"
        },
        559154: function(e, t, s) {
            "use strict";
            e.exports = s.p + "7258babc2ae473e95a4d.svg"
        },
        459991: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f6b723db9e3e036cda63.svg"
        },
        495826: function(e, t, s) {
            "use strict";
            e.exports = s.p + "0fd896f78677ce6048db.svg"
        },
        731109: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                submitDateOfBirth: function() {
                    return u
                },
                preventUnderageRegistration: function() {
                    return d
                },
                logoutUnderageNewUser: function() {
                    return c
                }
            });
            var a = s("872717"),
                l = s("913144"),
                n = s("395724"),
                i = s("599110"),
                r = s("586391"),
                o = s("49111");

            function u(e, t) {
                return (0, n.default)(e, t), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: r.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), a.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let s = e.body;
                    l.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: s
                    }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: r.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: r.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), i.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: r.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        208266: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("866227"),
                o = s.n(r),
                u = s("77078"),
                d = s("954419"),
                c = s("782340"),
                f = s("512427");
            let E = o().localeData().months(),
                N = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                m = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: E[e]
                })),
                _ = /[a-zA-Z0-9]/;

            function T(e) {
                let {
                    options: t,
                    selectOption: s,
                    children: n
                } = e, [i, r] = l.useState("");
                l.useEffect(() => {
                    if ("" !== i) {
                        let e = setTimeout(() => r(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [i, r]);
                let o = l.useCallback(e => {
                    if (_.test(e.key)) {
                        let a = "".concat(i).concat(e.key.toLowerCase()),
                            l = t.find(e => e.label.toLowerCase().startsWith(a));
                        null != l && s(l.value), r(a)
                    }
                }, [s, r, i, t]);
                return (0, a.jsx)("div", {
                    onKeyDown: o,
                    children: n
                })
            }

            function A() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    s = e.indexOf("M"),
                    a = e.indexOf("Y");
                return (-1 === t || -1 === s || -1 === a) && (t = 0, s = 1, a = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: s,
                    type: "month"
                }, {
                    index: a,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let p = l.forwardRef(function(e, t) {
                let {
                    value: s,
                    wrapperClassName: n,
                    onChange: r,
                    onPopulated: E,
                    error: _,
                    autoFocus: p,
                    required: h
                } = e, {
                    day: I,
                    setDay: S,
                    month: x,
                    setMonth: C,
                    year: U,
                    setYear: v
                } = function(e) {
                    let t = null,
                        s = null,
                        a = null;
                    null != e && (t = e.date(), s = e.month() + 1, a = e.year());
                    let [n, i] = l.useState(t), [r, o] = l.useState(s), [u, d] = l.useState(a);
                    return {
                        day: n,
                        setDay: i,
                        month: r,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(s), G = l.useMemo(() => null != I && null != x && null != U ? o("".concat(I, "/").concat(x, "/").concat(U), "DD/MM/YYYY") : null, [I, x, U]);
                l.useEffect(() => {
                    r((null == G ? void 0 : G.isValid()) ? G : null)
                }, [G, r]);
                let O = _;
                null != G && !G.isValid() && (O = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let M = function() {
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
                    [g, R] = l.useState(p ? 0 : -1),
                    j = l.useRef(null),
                    D = l.useRef(null),
                    y = l.useRef(null),
                    L = l.useMemo(A, []),
                    b = l.useCallback(() => {
                        var e, t, s, a;
                        switch (null === (e = L[g]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = j.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (s = D.current) || void 0 === s || s.focus();
                                break;
                            case "year":
                                null === (a = y.current) || void 0 === a || a.focus()
                        }
                    }, [g, j, D, y, L]);
                l.useEffect(() => {
                    setTimeout(b, 500)
                }, []), l.useEffect(() => {
                    if (g >= L.length) {
                        null == E || E();
                        return
                    }
                    b()
                }, [g, b]);
                let F = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = L[e];
                    switch (t) {
                        case "day":
                            F.push({
                                key: "day",
                                input: (0, a.jsx)(T, {
                                    options: N,
                                    selectOption: S,
                                    children: (0, a.jsx)(d.default, {
                                        ref: j,
                                        className: f.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: N,
                                        value: I,
                                        onChange: t => {
                                            let {
                                                value: s
                                            } = t;
                                            S(s), R(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            F.push({
                                key: "month",
                                input: (0, a.jsx)(T, {
                                    options: m,
                                    selectOption: C,
                                    children: (0, a.jsx)(d.default, {
                                        ref: D,
                                        className: f.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: m,
                                        value: x,
                                        onChange: t => {
                                            let {
                                                value: s
                                            } = t;
                                            C(s), R(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            F.push({
                                key: "year",
                                input: (0, a.jsx)(T, {
                                    options: M,
                                    selectOption: v,
                                    children: (0, a.jsx)(d.default, {
                                        ref: y,
                                        className: f.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: M,
                                        value: U,
                                        onChange: t => {
                                            let {
                                                value: s
                                            } = t;
                                            v(s), R(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, a.jsxs)("fieldset", {
                    className: i(f.container, n),
                    children: [(0, a.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: h,
                        error: O,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, a.jsx)("div", {
                        className: f.inputs,
                        children: F.map((e, t) => {
                            let {
                                key: s,
                                input: l
                            } = e;
                            return (0, a.jsx)("div", {
                                tabIndex: t + 1,
                                className: f[s],
                                children: l
                            }, s)
                        })
                    })]
                })
            });
            var h = p
        },
        395724: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("866227"),
                l = s.n(a),
                n = s("599110"),
                i = s("49111");

            function r(e, t) {
                n.default.track(i.AnalyticEvents.AGE_GATE_SUBMITTED, {
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
        207354: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("627445"),
                i = s.n(n),
                r = s("446674"),
                o = s("669491"),
                u = s("77078"),
                d = s("731109"),
                c = s("208266"),
                f = s("697218"),
                E = s("153769"),
                N = s("701909"),
                m = s("49111"),
                _ = s("586391"),
                T = s("782340"),
                A = s("456652");

            function p(e) {
                let {
                    onComplete: t,
                    onClose: s
                } = e, [n, p] = l.useState(null), [h, I] = l.useState(null), [S, x] = l.useState(!1), C = (0, r.useStateFromStores)([f.default], () => f.default.getCurrentUser()), U = l.createRef();
                async function v(e) {
                    e.preventDefault(), i(null != n, "Cannot submit null birthday."), x(!0);
                    try {
                        await d.submitDateOfBirth(n, _.AgeGateSource.NEW_USER_FLOW), t()
                    } catch (e) {
                        if (null != e.body && null != e.body.date_of_birth) d.preventUnderageRegistration(_.AgeGateSource.NEW_USER_FLOW), d.logoutUnderageNewUser(_.AgeGateSource.NEW_USER_FLOW), s();
                        else {
                            var a;
                            (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.username) != null ? I(T.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : I(null == e ? void 0 : e.body.message)
                        }
                    }
                    x(!1)
                }
                l.useEffect(() => {
                    null != C && null != C.nsfwAllowed && t()
                }, [C, t]);
                let G = l.useCallback(e => {
                        p(e)
                    }, [p]),
                    O = l.useCallback(() => {
                        var e;
                        null === (e = U.current) || void 0 === e || e.focus()
                    }, [U]);
                return null == C ? null : (0, a.jsxs)("form", {
                    className: A.content,
                    onSubmit: v,
                    children: [(0, a.jsx)(E.default, {
                        width: 56,
                        height: 40,
                        className: A.logo,
                        color: o.default.unsafe_rawColors.BRAND_500.css
                    }), (0, a.jsx)(u.Heading, {
                        className: A.title,
                        variant: "heading-xl/semibold",
                        children: T.default.Messages.NUF_JOIN_SERVER_TITLE_2
                    }), (0, a.jsx)(u.Text, {
                        color: "text-normal",
                        className: A.description,
                        variant: "text-md/normal",
                        children: T.default.Messages.NUF_AGE_GATE_BODY.format({
                            helpURL: N.default.getArticleURL(m.HelpdeskArticles.AGE_GATE)
                        })
                    }), (0, a.jsx)(u.ThemeContextProvider, {
                        theme: m.ThemeTypes.LIGHT,
                        children: (0, a.jsx)(c.default, {
                            required: !0,
                            autoFocus: !0,
                            wrapperClassName: A.formItem,
                            label: T.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            name: "birthday",
                            onChange: G,
                            onPopulated: O,
                            error: h,
                            value: n
                        })
                    }), (0, a.jsx)("div", {
                        className: A.footer,
                        children: (0, a.jsx)("div", {
                            className: A.buttonWrapper,
                            children: (0, a.jsx)(u.Button, {
                                buttonRef: U,
                                type: "submit",
                                size: u.Button.Sizes.LARGE,
                                submitting: S,
                                disabled: null == n,
                                fullWidth: !0,
                                children: T.default.Messages.NEXT
                            })
                        })
                    })]
                })
            }
        },
        377052: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                n = s.n(l),
                i = s("77078"),
                r = s("258078"),
                o = s("782340"),
                u = s("63126");

            function d(e) {
                let {
                    onComplete: t
                } = e;
                return (0, a.jsxs)(i.Clickable, {
                    className: u.container,
                    onClick: t,
                    children: [(0, a.jsx)(r.default, {
                        size: r.default.Sizes.SIZE_24,
                        className: u.title,
                        children: o.default.Messages.NUF_COMPLETE_TITLE
                    }), (0, a.jsx)(r.default, {
                        size: r.default.Sizes.SIZE_24,
                        className: n(u.title, u.subtitle),
                        children: o.default.Messages.NUF_COMPLETE_SUBTITLE
                    }), (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.WHITE,
                        onClick: t,
                        children: o.default.Messages.NUF_COMPLETE_CTA
                    })]
                })
            }
        },
        344491: function(e, t, s) {
            "use strict";
            let a, l;
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var n = s("37983"),
                i = s("884691"),
                r = s("414456"),
                o = s.n(r),
                u = s("77078"),
                d = s("970728"),
                c = s("79112"),
                f = s("448993"),
                E = s("145131"),
                N = s("258078"),
                m = s("883029"),
                _ = s("49111"),
                T = s("782340"),
                A = s("937596");
            let p = (a = window.GLOBAL_ENV.INVITE_HOST, l = "", null == a && (a = location.host, l = _.Routes.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(l, "/"));

            function h(e) {
                let {
                    onBack: t,
                    onComplete: s,
                    onConnect: a,
                    isSlideReady: l
                } = e, [r, h] = i.useState(""), [I, S] = i.useState(!1), [x, C] = i.useState(null), U = i.useRef(null);
                i.useEffect(() => {
                    var e;
                    l && (null === (e = U.current) || void 0 === e || e.focus())
                }, [l]);
                let v = i.useCallback(e => {
                        e.preventDefault();
                        let t = r.trim();
                        if ("" === t) {
                            C(T.default.Messages.INVALID_INVITE_LINK_ERROR);
                            return
                        }
                        C(null), S(!0);
                        let a = t.split("/"),
                            l = a[a.length - 1];
                        d.default.resolveInvite(l, "Join Guild", {
                            inputValue: t
                        }).then(e => {
                            let {
                                invite: t
                            } = e;
                            if (S(!1), null == t) {
                                C(T.default.Messages.INSTANT_INVITE_EXPIRED);
                                return
                            }
                            if (null != t.channel) {
                                let e = d.default.getInviteContext("Join Guild", t);
                                d.default.acceptInvite({
                                    inviteKey: t.code,
                                    context: e,
                                    callback: e => {
                                        s(), d.default.transitionToInvite(e)
                                    }
                                }).catch(e => {
                                    if (e instanceof f.V6OrEarlierAPIError || e instanceof f.APIError) {
                                        let t = (0, m.getInviteError)(e.code);
                                        C(t)
                                    } else C(T.default.Messages.INVITE_MODAL_ERROR_DEFAULT)
                                })
                            }
                        }, e => {
                            S(!1);
                            let t = new f.V6OrEarlierAPIError(e),
                                s = (0, m.getInviteError)(t.code);
                            C(s)
                        })
                    }, [r, S, C, s]),
                    G = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(u.ModalHeader, {
                            className: A.header,
                            direction: E.default.Direction.VERTICAL,
                            separator: !1,
                            children: [(0, n.jsx)(N.default, {
                                className: A.title,
                                size: N.default.Sizes.SIZE_24,
                                color: N.default.Colors.HEADER_PRIMARY,
                                children: T.default.Messages.JOIN_SERVER_TITLE
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: T.default.Messages.JOIN_SERVER_DESCRIPTION_NUF
                            })]
                        }), (0, n.jsxs)(u.ModalContent, {
                            children: [(0, n.jsx)("form", {
                                onSubmit: v,
                                className: A.inputForm,
                                children: (0, n.jsx)(u.FormItem, {
                                    title: T.default.Messages.FORM_LABEL_INVITE_LINK,
                                    error: x,
                                    titleClassName: o(A.formTitle, {
                                        [A.error]: null != x
                                    }),
                                    children: (0, n.jsx)(u.TextInput, {
                                        value: r,
                                        onChange: h,
                                        className: A.input,
                                        inputClassName: A.inputInner,
                                        inputRef: U
                                    })
                                })
                            }), (0, n.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: T.default.Messages.JOIN_SERVER_EXAMPLES.format({
                                    examples: "".concat(p).concat("cool-people", ", ").concat("hTKzmak")
                                })
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: A.connectCTA,
                                children: T.default.Messages.JOIN_GUILD_CONNECT.format({
                                    onClick: () => {
                                        a(), c.default.open(_.UserSettingsSections.CONNECTIONS)
                                    }
                                })
                            })]
                        })]
                    }),
                    O = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.Button, {
                            color: u.Button.Colors.BRAND,
                            onClick: v,
                            disabled: 0 === r.length,
                            submitting: I,
                            children: T.default.Messages.JOIN
                        }), (0, n.jsx)(u.Button, {
                            className: A.skipButton,
                            look: u.Button.Looks.BLANK,
                            size: u.Button.Sizes.MIN,
                            onClick: t,
                            children: T.default.Messages.BACK
                        })]
                    });
                return {
                    content: G,
                    footer: O
                }
            }
        },
        439431: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("759843"),
                o = s("446674"),
                u = s("77078"),
                d = s("731898"),
                c = s("818351"),
                f = s("21214"),
                E = s("622210"),
                N = s("72405"),
                m = s("697218"),
                _ = s("145131"),
                T = s("476765"),
                A = s("599110"),
                p = s("439932"),
                h = s("527441"),
                I = s("207354"),
                S = s("377052"),
                x = s("344491"),
                C = s("134760"),
                U = s("56235"),
                v = s("218971"),
                G = s("49111"),
                O = s("47212"),
                M = s("782340"),
                g = s("650067");

            function R(e) {
                let t;
                let s = (0, T.useUID)(),
                    {
                        onSlideChange: n,
                        ...R
                    } = e,
                    {
                        onClose: j
                    } = R,
                    [D, y] = l.useState(!1),
                    L = (0, o.useStateFromStores)([m.default], () => m.default.getCurrentUser()),
                    b = null != L && null == L.nsfwAllowed,
                    [F, P] = l.useState(b ? v.NUFSlides.AGE_GATE : v.NUFSlides.CHOOSE_TEMPLATE),
                    [k, B] = l.useState(null);
                l.useEffect(() => {
                    n(D ? v.NUFSlides.COMPLETE : F)
                }, [n, F, D]);
                let [w, H] = l.useState(null), [V, Y] = l.useState(null), [z, J] = l.useState(!1), W = (0, o.useStateFromStores)([h.default], () => h.default.getType() === U.NewUserTypes.INVITE_UNCLAIMED), Z = l.useCallback(e => {
                    Y(e), P(v.NUFSlides.CREATION_INTENT), A.default.track(G.AnalyticEvents.GUILD_TEMPLATE_SELECTED, {
                        template_name: e.label,
                        template_code: e.code
                    })
                }, [Y, P]), {
                    content: K,
                    footer: X
                } = (0, f.useCreationIntentSlide)({
                    hasFooter: !1,
                    onBack: () => {
                        Y(null), P(v.NUFSlides.CHOOSE_TEMPLATE)
                    },
                    onCreationIntentChosen: e => {
                        J(e), P(v.NUFSlides.CUSTOMIZE_GUILD)
                    }
                }), {
                    content: q,
                    footer: Q
                } = (0, E.useCustomizeGuildSlide)({
                    guildTemplate: V,
                    titleClassName: g.customizeGuildTitle,
                    hasFooter: !1,
                    onGuildCreated: e => {
                        H(e), (null == V ? void 0 : V.id) === O.GuildTemplateId.CREATE ? P(v.NUFSlides.CHANNEL_PROMPT) : y(!0)
                    },
                    onBack: () => {
                        P(v.NUFSlides.CREATION_INTENT)
                    },
                    isSlideReady: k === v.NUFSlides.CUSTOMIZE_GUILD,
                    isCommunity: z
                }), {
                    content: $,
                    footer: ee
                } = (0, c.useChannelPromptSlide)({
                    createdGuildId: w,
                    hasFooter: !1,
                    onChannelPromptCompleted: () => {
                        y(!0)
                    },
                    isSlideReady: k === v.NUFSlides.CHANNEL_PROMPT
                }), {
                    content: et,
                    footer: es
                } = (0, x.default)({
                    onBack: () => P(v.NUFSlides.CHOOSE_TEMPLATE),
                    onComplete: () => {
                        j()
                    },
                    onConnect: j,
                    isSlideReady: k === v.NUFSlides.JOIN_GUILD
                });
                switch (F) {
                    case v.NUFSlides.CUSTOMIZE_GUILD:
                        t = Q;
                        break;
                    case v.NUFSlides.CHANNEL_PROMPT:
                        t = ee;
                        break;
                    case v.NUFSlides.JOIN_GUILD:
                        t = es;
                        break;
                    case v.NUFSlides.CREATION_INTENT:
                        t = X
                }
                let {
                    ref: ea,
                    width: el
                } = (0, d.default)();
                if (D) return (0, a.jsx)(u.ModalRoot, {
                    ...R,
                    size: u.ModalSize.MEDIUM,
                    className: i(g.modal, g.completed),
                    "aria-labelledby": s,
                    children: (0, a.jsx)(S.default, {
                        onComplete: j
                    })
                });
                let en = {
                    impression_group: r.ImpressionGroups.GUILD_ADD_NUF
                };
                return (0, a.jsxs)(u.ModalRoot, {
                    ...R,
                    size: u.ModalSize.MEDIUM,
                    className: g.modal,
                    "aria-labelledby": s,
                    children: [(0, a.jsx)("div", {
                        className: g.sidebar,
                        children: (0, a.jsx)(C.default, {
                            step: F
                        })
                    }), (0, a.jsxs)("div", {
                        className: i(g.content, (0, p.getThemeClass)(G.ThemeTypes.LIGHT)),
                        ref: ea,
                        children: [(0, a.jsx)("div", {
                            className: g.slidesContainer,
                            children: (0, a.jsxs)(u.Slides, {
                                activeSlide: F,
                                onSlideReady: e => B(e),
                                centered: !1,
                                width: el,
                                children: [(0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.AGE_GATE,
                                    children: (0, a.jsx)("div", {
                                        className: g.container,
                                        children: (0, a.jsx)(I.default, {
                                            onComplete: () => {
                                                W ? j() : P(v.NUFSlides.CHOOSE_TEMPLATE)
                                            },
                                            onClose: j
                                        })
                                    })
                                }), (0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.CHOOSE_TEMPLATE,
                                    impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: i(g.container, g.shortFooter),
                                        children: (0, a.jsx)(N.default, {
                                            className: g.templates,
                                            onChooseTemplate: Z,
                                            isNewUser: !0
                                        })
                                    })
                                }), (0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.CREATION_INTENT,
                                    impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: i(g.container, g.standardFooter),
                                        children: K
                                    })
                                }), (0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.CUSTOMIZE_GUILD,
                                    impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: i(g.container, g.standardFooter),
                                        children: q
                                    })
                                }), (0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.CHANNEL_PROMPT,
                                    impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: i(g.container, g.standardFooter),
                                        children: $
                                    })
                                }), (0, a.jsx)(u.Slide, {
                                    id: v.NUFSlides.JOIN_GUILD,
                                    impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                                    impressionProperties: en,
                                    children: (0, a.jsx)("div", {
                                        className: i(g.container, g.standardFooter),
                                        children: et
                                    })
                                })]
                            })
                        }), F !== v.NUFSlides.AGE_GATE ? (0, a.jsx)(u.ModalCloseButton, {
                            onClick: j,
                            className: g.closeButton
                        }) : null, F === v.NUFSlides.CHOOSE_TEMPLATE ? (0, a.jsx)(u.ModalFooter, {
                            justify: _.default.Justify.BETWEEN,
                            className: i(g.footer, g.join),
                            children: (0, a.jsx)(u.Anchor, {
                                className: g.joinCTA,
                                onClick: () => {
                                    P(v.NUFSlides.JOIN_GUILD)
                                },
                                children: (0, a.jsxs)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: g.joinCTA,
                                    children: [M.default.Messages.NUF_HAVE_AN_INVITE_ALREADY, " ", M.default.Messages.JOIN_SERVER_BUTTON_CTA]
                                })
                            })
                        }) : null, null != t ? (0, a.jsx)(u.ModalFooter, {
                            justify: _.default.Justify.BETWEEN,
                            className: g.footer,
                            children: t
                        }) : null]
                    })]
                })
            }
        },
        134760: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                n = s.n(l),
                i = s("218971"),
                r = s("171599");

            function o(e) {
                let {
                    step: t
                } = e, s = t === i.NUFSlides.AGE_GATE, l = t === i.NUFSlides.CHOOSE_TEMPLATE || t === i.NUFSlides.CREATION_INTENT, o = t === i.NUFSlides.CUSTOMIZE_GUILD, u = t === i.NUFSlides.CHANNEL_PROMPT || t === i.NUFSlides.JOIN_GUILD, d = o || u, c = l || d;
                return (0, a.jsxs)("div", {
                    className: r.sidebar,
                    children: [(0, a.jsx)("div", {
                        className: n(r.step1, {
                            [r.show]: s
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step24Clouds, {
                            [r.show]: c
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step34Flag, {
                            [r.show]: d
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step24Base, {
                            [r.show]: c
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step24Ground, {
                            [r.show]: c
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step2Base, {
                            [r.show]: l
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step2Character, {
                            [r.show]: l
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step34Base, {
                            [r.show]: d
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step3Character, {
                            [r.show]: o
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step4Character, {
                            [r.show]: u
                        })
                    }), (0, a.jsx)("div", {
                        className: n(r.step24Foreground, {
                            [r.show]: c
                        })
                    })]
                })
            }
        }
    }
]);