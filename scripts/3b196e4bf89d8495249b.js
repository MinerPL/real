(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["36891"], {
        346577: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bd30e564dd0d308bae97.svg"
        },
        731109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                submitDateOfBirth: function() {
                    return o
                },
                preventUnderageRegistration: function() {
                    return c
                },
                logoutUnderageNewUser: function() {
                    return d
                }
            });
            var a = n("872717"),
                l = n("913144"),
                r = n("395724"),
                u = n("599110"),
                s = n("586391"),
                i = n("49111");

            function o(e, t) {
                return (0, r.default)(e, t), u.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: s.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), a.default.patch({
                    url: i.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let n = e.body;
                    l.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    }), u.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: s.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function c(e) {
                l.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), u.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function d(e) {
                l.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), u.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: s.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        208266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                u = n.n(r),
                s = n("866227"),
                i = n.n(s),
                o = n("77078"),
                c = n("954419"),
                d = n("782340"),
                f = n("512427");
            let A = i().localeData().months(),
                _ = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                E = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: A[e]
                })),
                p = /[a-zA-Z0-9]/;

            function m(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: r
                } = e, [u, s] = l.useState("");
                l.useEffect(() => {
                    if ("" !== u) {
                        let e = setTimeout(() => s(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [u, s]);
                let i = l.useCallback(e => {
                    if (p.test(e.key)) {
                        let a = "".concat(u).concat(e.key.toLowerCase()),
                            l = t.find(e => e.label.toLowerCase().startsWith(a));
                        null != l && n(l.value), s(a)
                    }
                }, [n, s, u, t]);
                return (0, a.jsx)("div", {
                    onKeyDown: i,
                    children: r
                })
            }

            function T() {
                let e = i().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    a = e.indexOf("Y");
                return (-1 === t || -1 === n || -1 === a) && (t = 0, n = 1, a = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: a,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let G = l.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: r,
                    onChange: s,
                    onPopulated: A,
                    error: p,
                    autoFocus: G,
                    required: y
                } = e, {
                    day: g,
                    setDay: N,
                    month: S,
                    setMonth: h,
                    year: v,
                    setYear: O
                } = function(e) {
                    let t = null,
                        n = null,
                        a = null;
                    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
                    let [r, u] = l.useState(t), [s, i] = l.useState(n), [o, c] = l.useState(a);
                    return {
                        day: r,
                        setDay: u,
                        month: s,
                        setMonth: i,
                        year: o,
                        setYear: c
                    }
                }(n), C = l.useMemo(() => null != g && null != S && null != v ? i("".concat(g, "/").concat(S, "/").concat(v), "DD/MM/YYYY") : null, [g, S, v]);
                l.useEffect(() => {
                    s((null == C ? void 0 : C.isValid()) ? C : null)
                }, [C, s]);
                let D = p;
                null != C && !C.isValid() && (D = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let R = function() {
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
                    [U, w] = l.useState(G ? 0 : -1),
                    M = l.useRef(null),
                    b = l.useRef(null),
                    I = l.useRef(null),
                    x = l.useMemo(T, []),
                    k = l.useCallback(() => {
                        var e, t, n, a;
                        switch (null === (e = x[U]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = M.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = b.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (a = I.current) || void 0 === a || a.focus()
                        }
                    }, [U, M, b, I, x]);
                l.useEffect(() => {
                    setTimeout(k, 500)
                }, []), l.useEffect(() => {
                    if (U >= x.length) {
                        null == A || A();
                        return
                    }
                    k()
                }, [U, k]);
                let F = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = x[e];
                    switch (t) {
                        case "day":
                            F.push({
                                key: "day",
                                input: (0, a.jsx)(m, {
                                    options: _,
                                    selectOption: N,
                                    children: (0, a.jsx)(c.default, {
                                        ref: M,
                                        className: f.inputDay,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: _,
                                        value: g,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            N(n), w(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            F.push({
                                key: "month",
                                input: (0, a.jsx)(m, {
                                    options: E,
                                    selectOption: h,
                                    children: (0, a.jsx)(c.default, {
                                        ref: b,
                                        className: f.inputMonth,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: E,
                                        value: S,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            h(n), w(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            F.push({
                                key: "year",
                                input: (0, a.jsx)(m, {
                                    options: R,
                                    selectOption: O,
                                    children: (0, a.jsx)(c.default, {
                                        ref: I,
                                        className: f.inputYear,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: R,
                                        value: v,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            O(n), w(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, a.jsxs)("fieldset", {
                    className: u(f.container, r),
                    children: [(0, a.jsx)(o.FormTitle, {
                        tag: "legend",
                        required: y,
                        error: D,
                        children: d.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, a.jsx)("div", {
                        className: f.inputs,
                        children: F.map((e, t) => {
                            let {
                                key: n,
                                input: l
                            } = e;
                            return (0, a.jsx)("div", {
                                tabIndex: t + 1,
                                className: f[n],
                                children: l
                            }, n)
                        })
                    })]
                })
            });
            var y = G
        },
        377531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("759843"),
                u = n("446674"),
                s = n("77078"),
                i = n("42963"),
                o = n("697218"),
                c = n("599110"),
                d = n("701909"),
                f = n("731109"),
                A = n("208266"),
                _ = n("586391"),
                E = n("49111"),
                p = n("149806"),
                m = n("782340"),
                T = n("355616");

            function G(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, [G, y] = l.useState(null), [g, N] = l.useState(null), [S, h] = l.useState(!1), v = l.createRef(), O = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser()), C = l.createRef();
                l.useEffect(() => {
                    i.default.flowStep(p.FlowType.ANY, p.AgeGateSteps.AGE_GATE), c.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Claim Age Gate"
                    })
                }, []), l.useEffect(() => {
                    (null == O ? void 0 : O.nsfwAllowed) != null && n()
                }, [O, n]);
                let D = async e => {
                    if (e.preventDefault(), null != G) {
                        h(!0);
                        try {
                            await f.submitDateOfBirth(G, E.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
                        } catch (e) {
                            if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(p.FlowType.ANY, p.AgeGateSteps.AGE_GATE_UNDERAGE), f.preventUnderageRegistration(_.AgeGateSource.CLAIM_ACCOUNT), f.logoutUnderageNewUser(_.AgeGateSource.CLAIM_ACCOUNT), n();
                            else {
                                var t;
                                (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? N(m.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : N(null == e ? void 0 : e.body.message)
                            }
                        }
                        h(!1)
                    }
                }, R = l.useCallback(() => {
                    var e;
                    null === (e = C.current) || void 0 === e || e.focus()
                }, [C]);
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": m.default.Messages.AGE_GATE_HEADER,
                    className: T.modal,
                    impression: {
                        impressionName: r.ImpressionNames.USER_AGE_GATE,
                        impressionProperties: {
                            existing_user: !1
                        }
                    },
                    children: (0, a.jsxs)(s.ModalContent, {
                        className: T.content,
                        children: [(0, a.jsx)("div", {
                            className: T.image
                        }), (0, a.jsxs)("form", {
                            onSubmit: D,
                            children: [(0, a.jsx)(s.Heading, {
                                className: T.title,
                                variant: "heading-xl/semibold",
                                children: m.default.Messages.AGE_GATE_HEADER
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                className: T.description,
                                variant: "text-md/normal",
                                children: m.default.Messages.AGE_GATE_BODY.format({
                                    helpURL: d.default.getArticleURL(E.HelpdeskArticles.AGE_GATE)
                                })
                            }), (0, a.jsx)(A.default, {
                                required: !0,
                                autoFocus: !0,
                                wrapperClassName: T.formItem,
                                label: m.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                name: "birthday",
                                onChange: e => y(e),
                                onPopulated: R,
                                error: g,
                                value: G,
                                ref: v
                            }), (0, a.jsx)(s.Button, {
                                buttonRef: C,
                                type: "submit",
                                size: s.Button.Sizes.LARGE,
                                submitting: S,
                                disabled: null == G,
                                fullWidth: !0,
                                children: m.default.Messages.DONE
                            })]
                        })]
                    })
                })
            }
        },
        395724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("866227"),
                l = n.n(a),
                r = n("599110"),
                u = n("49111");

            function s(e, t) {
                r.default.track(u.AnalyticEvents.AGE_GATE_SUBMITTED, {
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
        149806: function(e, t, n) {
            "use strict";
            var a, l, r, u, s, i, o, c, d, f;
            n.r(t), n.d(t, {
                FlowType: function() {
                    return a
                },
                AgeGateSteps: function() {
                    return l
                },
                ClaimAccountSteps: function() {
                    return r
                },
                CreateGuildSteps: function() {
                    return u
                },
                RegistrationSteps: function() {
                    return s
                }
            }), (i = a || (a = {})).UNKNOWN = "unknown", i.ANY = "any", i.INVITE = "invite", i.ORGANIC = "organic_registration", i.ORGANIC_MARKETING = "organic_marketing", i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", i.CREATE_GUILD = "create_guild", (o = l || (l = {})).AGE_GATE = "age_gate", o.AGE_GATE_UNDERAGE = "age_gate_underage", (c = r || (r = {})).CLAIM_ACCOUNT = "claim_account", c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (d = u || (u = {})).GUILD_TEMPLATES = "guild_templates", d.GUILD_CREATE = "guild_create", d.CREATION_INTENT = "creation_intent", d.CHANNEL_PROMPT = "channel_prompt", d.JOIN_GUILD = "join_guild", d.SUCCESS = "create_success", (f = s || (s = {})).NUF_STARTED = "nuf_started", f.AGE_GATE = "age_gate", f.NUF_COMPLETE = "nuf_complete", f.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("308503"),
                l = n("95410"),
                r = n("605250"),
                u = n("599110"),
                s = n("149806"),
                i = n("49111");
            let o = "UserFlowAnalyticsStore_current",
                c = "UserFlowAnalyticsStore";

            function d(e) {
                if (e === s.FlowType.UNKNOWN) return null;
                let t = l.default.get("".concat(c, "-").concat(e));
                if (null == t) return null;
                let {
                    version: n,
                    ...a
                } = t;
                return 1 !== n ? null : a
            }
            new r.default("UserFlowAnalytics");
            let f = (0, a.default)((e, t) => ({
                flows: {},
                currentFlow: null,
                activeFlow: () => {
                    var e;
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : l.default.get(o);
                    if (null == n) return null;
                    let {
                        [n]: a
                    } = t().flows, r = null != a ? a : d(n);
                    return (null == r ? void 0 : r.currentStep) != null ? n : null
                }
            }));

            function A(e, t) {
                let {
                    [e]: n, ...a
                } = f.getState().flows, l = null != n ? n : d(e);
                if ((null == l ? void 0 : l.currentStep) == null || l.currentStep !== t) f.setState({
                    flows: {
                        ...a,
                        [e]: {
                            type: e,
                            lastStep: null,
                            lastTimestamp: null,
                            currentStep: t,
                            currentTimestamp: new Date,
                            skipped: !1
                        }
                    },
                    currentFlow: e
                })
            }

            function _(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = e;
                if (e === s.FlowType.ANY) {
                    var l;
                    a = null !== (l = f.getState().activeFlow()) && void 0 !== l ? l : s.FlowType.UNKNOWN
                }
                let {
                    [a]: r, ...u
                } = f.getState().flows, i = null != r ? r : d(a);
                if (null != i && null != i.currentStep) i.currentStep !== t && f.setState({
                    flows: {
                        ...u,
                        [a]: {
                            ...i,
                            lastStep: i.currentStep,
                            lastTimestamp: i.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date,
                            ended: n
                        }
                    },
                    currentFlow: a
                })
            }
            f.subscribe(e => {
                var t;
                if (null != e && (! function(e) {
                        if (e.type === s.FlowType.UNKNOWN) return;
                        let t = "".concat(c, "-").concat(e.type);
                        e.ended ? (l.default.remove(t), l.default.remove(o)) : (l.default.set("".concat(c, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), l.default.set(o, e.type))
                    }(e), u.default.track(i.AnalyticEvents.NUO_TRANSITION, {
                        flow_type: e.type,
                        from_step: e.lastStep,
                        to_step: e.currentStep,
                        seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
                    }, {
                        flush: !0
                    }), e.ended)) {
                    let t = {
                        ...f.getState().flows
                    };
                    delete t[e.type], f.setState({
                        flows: t,
                        currentFlow: null
                    })
                }
            }, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

            function E() {
                return null != f.getState().activeFlow()
            }
            var p = {
                flowStart: A,
                flowStepOrStart: function(e, t) {
                    E() ? _(e, t) : A(e, t)
                },
                flowStep: _,
                hasActiveFlow: E
            }
        }
    }
]);