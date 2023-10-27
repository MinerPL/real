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
                    return u
                },
                preventUnderageRegistration: function() {
                    return c
                },
                logoutUnderageNewUser: function() {
                    return d
                }
            });
            var a = n("990746"),
                l = n("913144"),
                r = n("395724"),
                o = n("599110"),
                s = n("586391"),
                i = n("49111");

            function u(e, t) {
                return (0, r.default)(e, t), o.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
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
        208266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                o = n.n(r),
                s = n("377849"),
                i = n.n(s),
                u = n("77078"),
                c = n("954419"),
                d = n("782340"),
                f = n("733317");
            let p = i().localeData().months(),
                A = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                E = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: p[e]
                })),
                _ = /[a-zA-Z0-9]/;

            function m(e) {
                let {
                    options: t,
                    selectOption: n,
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
                        let a = "".concat(o).concat(e.key.toLowerCase()),
                            l = t.find(e => e.label.toLowerCase().startsWith(a));
                        null != l && n(l.value), s(a)
                    }
                }, [n, s, o, t]);
                return (0, a.jsx)("div", {
                    onKeyDown: i,
                    children: r
                })
            }

            function h() {
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
            let v = l.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: r,
                    onChange: s,
                    onPopulated: p,
                    error: _,
                    autoFocus: v,
                    required: g
                } = e, {
                    day: T,
                    setDay: y,
                    month: S,
                    setMonth: G,
                    year: b,
                    setYear: N
                } = function(e) {
                    let t = null,
                        n = null,
                        a = null;
                    null != e && (t = e.date(), n = e.month() + 1, a = e.year());
                    let [r, o] = l.useState(t), [s, i] = l.useState(n), [u, c] = l.useState(a);
                    return {
                        day: r,
                        setDay: o,
                        month: s,
                        setMonth: i,
                        year: u,
                        setYear: c
                    }
                }(n), C = l.useMemo(() => null != T && null != S && null != b ? i("".concat(T, "/").concat(S, "/").concat(b), "DD/MM/YYYY") : null, [T, S, b]);
                l.useEffect(() => {
                    s((null == C ? void 0 : C.isValid()) ? C : null)
                }, [C, s]);
                let O = _;
                null != C && !C.isValid() && (O = d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
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
                    [R, x] = l.useState(v ? 0 : -1),
                    w = l.useRef(null),
                    D = l.useRef(null),
                    U = l.useRef(null),
                    k = l.useMemo(h, []),
                    I = l.useCallback(() => {
                        var e, t, n, a;
                        switch (null === (e = k[R]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = w.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = D.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (a = U.current) || void 0 === a || a.focus()
                        }
                    }, [R, w, D, U, k]);
                l.useEffect(() => {
                    setTimeout(I, 500)
                }, []), l.useEffect(() => {
                    if (R >= k.length) {
                        null == p || p();
                        return
                    }
                    I()
                }, [R, I]);
                let F = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = k[e];
                    switch (t) {
                        case "day":
                            F.push({
                                key: "day",
                                input: (0, a.jsx)(m, {
                                    options: A,
                                    selectOption: y,
                                    children: (0, a.jsx)(c.default, {
                                        ref: w,
                                        className: f.inputDay,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: A,
                                        value: T,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            y(n), x(e + 1)
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
                                    selectOption: G,
                                    children: (0, a.jsx)(c.default, {
                                        ref: D,
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
                                            G(n), x(e + 1)
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
                                    options: M,
                                    selectOption: N,
                                    children: (0, a.jsx)(c.default, {
                                        ref: U,
                                        className: f.inputYear,
                                        "aria-label": d.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: c.default.MenuPlacements.TOP,
                                        placeholder: (0, a.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: d.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: M,
                                        value: b,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            N(n), x(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, a.jsxs)("fieldset", {
                    className: o(f.container, r),
                    children: [(0, a.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: g,
                        error: O,
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
            var g = v
        },
        377531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("64379"),
                o = n("498225"),
                s = n("77078"),
                i = n("42963"),
                u = n("697218"),
                c = n("599110"),
                d = n("701909"),
                f = n("731109"),
                p = n("208266"),
                A = n("586391"),
                E = n("49111"),
                _ = n("149806"),
                m = n("782340"),
                h = n("264839");

            function v(e) {
                let {
                    transitionState: t,
                    onClose: n
                } = e, [v, g] = l.useState(null), [T, y] = l.useState(null), [S, G] = l.useState(!1), b = l.createRef(), N = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = l.createRef();
                l.useEffect(() => {
                    i.default.flowStep(_.FlowType.ANY, _.AgeGateSteps.AGE_GATE), c.default.track(E.AnalyticEvents.OPEN_MODAL, {
                        type: "Claim Age Gate"
                    })
                }, []), l.useEffect(() => {
                    (null == N ? void 0 : N.nsfwAllowed) != null && n()
                }, [N, n]);
                let O = async e => {
                    if (e.preventDefault(), null != v) {
                        G(!0);
                        try {
                            await f.submitDateOfBirth(v, E.AnalyticsSections.CLAIM_ACCOUNT_MODAL)
                        } catch (e) {
                            if (null != e.body && null != e.body.date_of_birth) i.default.flowStep(_.FlowType.ANY, _.AgeGateSteps.AGE_GATE_UNDERAGE), f.preventUnderageRegistration(A.AgeGateSource.CLAIM_ACCOUNT), f.logoutUnderageNewUser(A.AgeGateSource.CLAIM_ACCOUNT), n();
                            else {
                                var t;
                                (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? y(m.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : y(null == e ? void 0 : e.body.message)
                            }
                        }
                        G(!1)
                    }
                }, M = l.useCallback(() => {
                    var e;
                    null === (e = C.current) || void 0 === e || e.focus()
                }, [C]);
                return (0, a.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": m.default.Messages.AGE_GATE_HEADER,
                    className: h.modal,
                    impression: {
                        impressionName: r.ImpressionNames.USER_AGE_GATE,
                        impressionProperties: {
                            existing_user: !1
                        }
                    },
                    children: (0, a.jsxs)(s.ModalContent, {
                        className: h.content,
                        children: [(0, a.jsx)("div", {
                            className: h.image
                        }), (0, a.jsxs)("form", {
                            onSubmit: O,
                            children: [(0, a.jsx)(s.Heading, {
                                className: h.title,
                                variant: "heading-xl/semibold",
                                children: m.default.Messages.AGE_GATE_HEADER
                            }), (0, a.jsx)(s.Text, {
                                color: "header-secondary",
                                className: h.description,
                                variant: "text-md/normal",
                                children: m.default.Messages.AGE_GATE_BODY.format({
                                    helpURL: d.default.getArticleURL(E.HelpdeskArticles.AGE_GATE)
                                })
                            }), (0, a.jsx)(p.default, {
                                required: !0,
                                autoFocus: !0,
                                wrapperClassName: h.formItem,
                                label: m.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                                name: "birthday",
                                onChange: e => g(e),
                                onPopulated: M,
                                error: T,
                                value: v,
                                ref: b
                            }), (0, a.jsx)(s.Button, {
                                buttonRef: C,
                                type: "submit",
                                size: s.Button.Sizes.LARGE,
                                submitting: S,
                                disabled: null == v,
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
            var a = n("377849"),
                l = n.n(a),
                r = n("599110"),
                o = n("49111");

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
        149806: function(e, t, n) {
            "use strict";
            var a, l, r, o, s, i, u, c, d, f;
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
                    return o
                },
                RegistrationSteps: function() {
                    return s
                }
            }), (i = a || (a = {})).UNKNOWN = "unknown", i.ANY = "any", i.INVITE = "invite", i.ORGANIC = "organic_registration", i.ORGANIC_MARKETING = "organic_marketing", i.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", i.CREATE_GUILD = "create_guild", (u = l || (l = {})).AGE_GATE = "age_gate", u.AGE_GATE_UNDERAGE = "age_gate_underage", (c = r || (r = {})).CLAIM_ACCOUNT = "claim_account", c.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", (d = o || (o = {})).GUILD_TEMPLATES = "guild_templates", d.GUILD_CREATE = "guild_create", d.CREATION_INTENT = "creation_intent", d.CHANNEL_PROMPT = "channel_prompt", d.JOIN_GUILD = "join_guild", d.SUCCESS = "create_success", (f = s || (s = {})).NUF_STARTED = "nuf_started", f.AGE_GATE = "age_gate", f.NUF_COMPLETE = "nuf_complete", f.HUB_CONNECTION = "hub_connection"
        },
        42963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("710835"),
                l = n("173333"),
                r = n("605250"),
                o = n("599110"),
                s = n("149806"),
                i = n("49111");
            let u = "UserFlowAnalyticsStore_current",
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
                    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : l.default.get(u);
                    if (null == n) return null;
                    let {
                        [n]: a
                    } = t().flows, r = null != a ? a : d(n);
                    return (null == r ? void 0 : r.currentStep) != null ? n : null
                }
            }));

            function p(e, t) {
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

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = e;
                if (e === s.FlowType.ANY) {
                    var l;
                    a = null !== (l = f.getState().activeFlow()) && void 0 !== l ? l : s.FlowType.UNKNOWN
                }
                let {
                    [a]: r, ...o
                } = f.getState().flows, i = null != r ? r : d(a);
                if (null != i && null != i.currentStep) i.currentStep !== t && f.setState({
                    flows: {
                        ...o,
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
                        e.ended ? (l.default.remove(t), l.default.remove(u)) : (l.default.set("".concat(c, "-").concat(e.type), {
                            ...e,
                            version: 1
                        }), l.default.set(u, e.type))
                    }(e), o.default.track(i.AnalyticEvents.NUO_TRANSITION, {
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
            var _ = {
                flowStart: p,
                flowStepOrStart: function(e, t) {
                    E() ? A(e, t) : p(e, t)
                },
                flowStep: A,
                hasActiveFlow: E
            }
        },
        954419: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEFAULT_SELECT_STYLES: function() {
                    return A
                },
                default: function() {
                    return E
                }
            });
            var a, l, r = n("920040"),
                o = n("773670"),
                s = n("575482"),
                i = n.n(s),
                u = n("895758"),
                c = n("77078"),
                d = n("49111"),
                f = n("782340"),
                p = n("179541");
            (a = l || (l = {})).TOP = "top", a.BOTTOM = "bottom";
            let A = {
                container: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        cursor: n ? "not-allowed" : void 0,
                        pointerEvents: void 0,
                        fontSize: 16,
                        fontWeight: 500,
                        width: "100%"
                    }
                },
                control: (e, t) => {
                    let {
                        isDisabled: n,
                        menuIsOpen: a
                    } = t;
                    return {
                        ...e,
                        backgroundColor: "var(--input-background)",
                        borderColor: "var(--input-background)",
                        opacity: n ? .6 : 1,
                        boxShadow: void 0,
                        borderRadius: a ? "4px 4px 0 0" : "4px",
                        minHeight: 40,
                        transition: "border 0.15s ease",
                        cursor: n ? "not-allowed" : void 0,
                        pointerEvents: n ? "none" : void 0,
                        "&:hover": {
                            borderColor: "var(--input-background)"
                        }
                    }
                },
                singleValue: (e, t) => {
                    let {
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        opacity: n ? .5 : 1
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
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: n ? void 0 : "pointer",
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
                        isDisabled: n
                    } = t;
                    return {
                        ...e,
                        color: "var(--interactive-normal)",
                        cursor: n ? void 0 : "pointer",
                        opacity: n ? .3 : 1,
                        padding: "8px 8px 8px 0",
                        ":hover": {
                            color: "var(--interactive-hover)",
                            opacity: n ? .3 : 1
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
                        isSelected: n,
                        isFocused: a
                    } = t;
                    return {
                        ...e,
                        ...n ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : a ? {
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
            class E extends o.Component {
                focus() {
                    var e;
                    null === (e = this._selectRef.current) || void 0 === e || e.focus()
                }
                render() {
                    let e;
                    let {
                        className: t,
                        selectClassName: n,
                        error: a,
                        valueRenderer: l,
                        optionRenderer: o,
                        multiValueRenderer: s,
                        options: d,
                        value: E,
                        autofocus: _,
                        disabled: m,
                        clearable: h,
                        searchable: v,
                        styleOverrides: g,
                        isMulti: T,
                        placeholder: y,
                        filterOption: S,
                        closeMenuOnSelect: G = !0,
                        ...b
                    } = this.props, N = {
                        ...b
                    };
                    null != _ && (N.autoFocus = _), null != m && (N.isDisabled = m), null != h && (N.isClearable = h), null != v && (N.isSearchable = v);
                    let C = {
                        IndicatorSeparator: () => null
                    };
                    null != o && (C.Option = e => (0, r.jsx)(u.components.Option, {
                        ...e,
                        children: o(e.data)
                    })), null != l && (C.SingleValue = e => (0, r.jsx)(u.components.SingleValue, {
                        ...e,
                        children: l(e.data)
                    })), null != s && (C.MultiValue = e => s(e.data));
                    if (T && Array.isArray(E)) {
                        let t = {};
                        d.forEach(e => {
                            t[String(e.value)] = e
                        }), e = E.map(e => t[String(e)])
                    } else e = null != E ? d.find(e => e.value === E) : null;
                    return (0, r.jsx)(c.FocusRing, {
                        focused: this.state.isFocused && !this.state.isOpen,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: i(p.select, t, {
                                [p.error]: null != a
                            }),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(u.default, {
                                ...N,
                                className: n,
                                ref: this._selectRef,
                                isMulti: T,
                                components: C,
                                options: d,
                                styles: null != g ? g : A,
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onMenuOpen: this.handleMenuOpen,
                                onMenuClose: this.handleMenuClose,
                                closeMenuOnSelect: G,
                                value: e,
                                onKeyDown: this.handleKeyDown,
                                placeholder: null != y ? y : f.default.Messages.SELECT,
                                noOptionsMessage: () => f.default.Messages.NO_RESULTS_FOUND,
                                filterOption: S
                            }), null != a ? (0, r.jsx)("div", {
                                className: p.errorMessage,
                                children: a
                            }) : null]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._selectRef = o.createRef(), this._containerRef = o.createRef(), this.state = {
                        isFocused: !1,
                        isOpen: !1
                    }, this.handleFocus = e => {
                        var t, n;
                        this.setState({
                            isFocused: !0
                        }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e)
                    }, this.handleBlur = e => {
                        var t, n;
                        this.setState({
                            isFocused: !1
                        }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e)
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
            E.MenuPlacements = l
        }
    }
]);