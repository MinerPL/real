(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66473"], {
        648529: function(e, t, n) {
            "use strict";
            e.exports = n.p + "575be5cb28925216b2fb.svg"
        },
        522874: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowFraudMenuVariant: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_iar_fraud_impersonation",
                label: "In App Reports Fruad & Impersonation",
                defaultConfig: {
                    showFraudMenuVariant: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        showFraudMenuVariant: !0
                    }
                }]
            });

            function r() {
                let {
                    showFraudMenuVariant: e
                } = l.getCurrentConfig({
                    location: "159afe_2"
                }, {
                    autoTrackExposure: !0
                });
                return e
            }
        },
        821003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                REMEDIATION_ELEMENT_TYPES: function() {
                    return a
                }
            });
            let a = ["block_users", "leave_guild", "delete_message"]
        },
        143618: function(e, t, n) {
            "use strict";
            var a, l, r, s;
            n.r(t), n.d(t, {
                ReportNames: function() {
                    return a
                },
                UnauthenticatedReportNames: function() {
                    return l
                }
            }), (r = a || (a = {})).GUILD = "guild", r.GUILD_DISCOVERY = "guild_discovery", r.GUILD_DIRECTORY_ENTRY = "guild_directory_entry", r.MESSAGE = "message", r.STAGE_CHANNEL = "stage_channel", r.GUILD_SCHEDULED_EVENT = "guild_scheduled_event", r.FIRST_DM = "first_dm", r.USER = "user", (s = l || (l = {})).MESSAGE = "message_urf", s.USER = "user_urf"
        },
        377114: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                showReportModalForDiscoverableGuild: function() {
                    return m
                },
                showReportModalForGuildDirectoryEntry: function() {
                    return _
                },
                showReportModalForMessage: function() {
                    return f
                },
                showReportModalForStageChannel: function() {
                    return h
                },
                showReportModalForGuildScheduledEvent: function() {
                    return v
                },
                showReportModalForFirstDM: function() {
                    return E
                },
                submitHamReportForFirstDM: function() {
                    return x
                },
                showReportModalForUser: function() {
                    return g
                },
                showUnauthenticatedReportModalForUser: function() {
                    return R
                },
                showUnauthenticatedReportModalForMessage: function() {
                    return N
                }
            });
            var l = n("716241"),
                r = n("834052"),
                s = n("719926"),
                i = n("766274"),
                d = n("522874"),
                u = n("143618"),
                o = n("965153"),
                c = n("49111");

            function m(e, t) {
                p(u.ReportNames.GUILD_DISCOVERY, {
                    guild_id: e.id
                }), a({
                    name: u.ReportNames.GUILD_DISCOVERY,
                    record: e
                }, {}, t)
            }

            function _(e, t) {
                p(u.ReportNames.GUILD_DIRECTORY_ENTRY, {
                    channel_id: e.channelId,
                    guild_id: e.guildId
                }), a({
                    name: u.ReportNames.GUILD_DIRECTORY_ENTRY,
                    record: e
                }, {}, t)
            }

            function f(e, t) {
                p(u.ReportNames.MESSAGE, {
                    message_id: e.id,
                    channel_id: e.channel_id
                });
                let n = (0, d.shouldShowFraudMenuVariant)();
                a({
                    name: u.ReportNames.MESSAGE,
                    record: e
                }, {
                    variant: n ? "4" : void 0
                }, t)
            }

            function h(e, t) {
                let n = r.default.getStageInstanceByChannel(e.id);
                null != n && (p(u.ReportNames.STAGE_CHANNEL, {
                    stage_instance_id: n.id,
                    channel_id: n.channel_id,
                    guild_id: n.guild_id
                }), a({
                    name: u.ReportNames.STAGE_CHANNEL,
                    record: n
                }, {}, t))
            }

            function v(e, t) {
                var n;
                p(u.ReportNames.GUILD_SCHEDULED_EVENT, {
                    guild_scheduled_event_id: e.id,
                    guild_id: e.guild_id,
                    channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
                }), a({
                    name: u.ReportNames.GUILD_SCHEDULED_EVENT,
                    record: e
                }, {}, t)
            }

            function E(e, t) {
                p(u.ReportNames.FIRST_DM, {
                    message_id: e.id,
                    channel_id: e.channel_id
                }), a({
                    name: u.ReportNames.FIRST_DM,
                    record: e
                }, {}, t, void 0, !1)
            }
            async function x(e, t) {
                try {
                    await (0, o.submitHeadlessReport)({
                        name: u.ReportNames.FIRST_DM,
                        record: e
                    }, {
                        variant: "_first_dm_ham_v1"
                    }), null == t || t()
                } catch {}
            }

            function g(e, t, n) {
                p(u.ReportNames.USER, {
                    reported_user_id: e.id
                }), a({
                    name: u.ReportNames.USER,
                    record: e,
                    contextualGuildId: t
                }, {}, n, void 0, !1)
            }

            function R(e) {
                let t = new i.default({});
                p(u.UnauthenticatedReportNames.USER, {
                    reported_user_id: t.id
                }), a({
                    name: u.UnauthenticatedReportNames.USER,
                    record: t
                }, {}, e, void 0, !1, !1)
            }

            function N(e) {
                let t = new s.default({});
                p(u.UnauthenticatedReportNames.MESSAGE, {
                    message_id: void 0,
                    channel_id: void 0
                }), a({
                    name: u.UnauthenticatedReportNames.MESSAGE,
                    record: t
                }, {}, e, void 0, !1, !1)
            }

            function p(e, t) {
                l.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
                    report_type: e,
                    ...t
                })
            }
            a = n("878102").default
        },
        965153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getReportMenu: function() {
                    return d
                },
                getUnauthenticatedReportMenu: function() {
                    return u
                },
                submitHeadlessReport: function() {
                    return o
                },
                submitReport: function() {
                    return c
                },
                submitUnauthenticatedReport: function() {
                    return m
                },
                trackCloseReportModalAnalytics: function() {
                    return v
                },
                showInAppReportsFeedbackModal: function() {
                    return E
                }
            });
            var a = n("990746"),
                l = n("913144"),
                r = n("716241"),
                s = n("143618"),
                i = n("49111");
            async function d(e, t) {
                var n;
                let l = f(e),
                    r = await a.default.get({
                        url: i.Endpoints.GET_REPORT_MENU(l),
                        query: (null == t ? void 0 : t.variant) != null ? {
                            variant: t.variant
                        } : void 0
                    }),
                    s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
                return s
            }
            async function u(e, t) {
                var n;
                let l = _(e),
                    r = await a.default.get({
                        url: i.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(l),
                        query: (null == t ? void 0 : t.variant) != null ? {
                            variant: t.variant
                        } : void 0
                    }),
                    s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
                return s
            }
            async function o(e, t) {
                let n = f(e),
                    l = await d(e, t);
                await a.default.post({
                    url: i.Endpoints.SUBMIT_REPORT_MENU(n),
                    body: h(l, e, [{
                        nodeRef: l.root_node_id,
                        destination: ["", l.success_node_id]
                    }])
                })
            }

            function c(e, t, n) {
                return a.default.post({
                    url: i.Endpoints.SUBMIT_REPORT_MENU(f(t)),
                    body: h(e, t, n)
                })
            }

            function m(e, t, n) {
                let l = _(t);
                return a.default.post({
                    url: i.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(l),
                    body: h(e, t, n)
                })
            }

            function _(e) {
                let t = e.name;
                if (!Object.values(s.UnauthenticatedReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
                return t
            }

            function f(e) {
                let t = e.name;
                if (!Object.values(s.ReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
                return t
            }
            let h = (e, t, n) => {
                let {
                    version: a,
                    variant: l,
                    language: r
                } = e, i = {
                    version: a,
                    variant: l,
                    language: null != r ? r : "en",
                    breadcrumbs: n.map(e => e.nodeRef),
                    elements: n.reduce((e, t) => {
                        let {
                            multiSelect: n
                        } = t;
                        return null == n ? e : {
                            ...e,
                            [n.name]: Object.keys(n.state)
                        }
                    }, {})
                };
                if (t.name === s.ReportNames.MESSAGE || t.name === s.ReportNames.FIRST_DM) {
                    let {
                        channel_id: e,
                        id: n
                    } = t.record;
                    return {
                        ...i,
                        name: t.name,
                        channel_id: e,
                        message_id: n,
                        guild_id: void 0,
                        stage_instance_id: void 0,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    }
                }
                if (t.name === s.ReportNames.GUILD || t.name === s.ReportNames.GUILD_DISCOVERY) {
                    let {
                        id: e
                    } = t.record;
                    return {
                        ...i,
                        name: t.name,
                        channel_id: void 0,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: e,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    }
                }
                if (t.name === s.ReportNames.GUILD_DIRECTORY_ENTRY) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.record;
                    return {
                        ...i,
                        name: t.name,
                        channel_id: n,
                        message_id: void 0,
                        stage_instance_id: void 0,
                        guild_id: e,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    }
                } else if (t.name === s.ReportNames.STAGE_CHANNEL) {
                    let {
                        id: e,
                        guild_id: n,
                        channel_id: a
                    } = t.record;
                    return {
                        ...i,
                        name: t.name,
                        channel_id: a,
                        message_id: void 0,
                        guild_id: n,
                        stage_instance_id: e,
                        guild_scheduled_event_id: void 0,
                        user_id: void 0
                    }
                } else if (t.name === s.ReportNames.GUILD_SCHEDULED_EVENT) {
                    let {
                        id: e,
                        guild_id: n
                    } = t.record;
                    return {
                        ...i,
                        name: t.name,
                        channel_id: void 0,
                        message_id: void 0,
                        guild_id: n,
                        stage_instance_id: void 0,
                        guild_scheduled_event_id: e,
                        user_id: void 0
                    }
                } else if (t.name === s.ReportNames.USER) return {
                    ...i,
                    name: t.name,
                    user_id: t.record.id,
                    channel_id: void 0,
                    message_id: void 0,
                    guild_id: t.contextualGuildId,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                };
                else if (t.name === s.UnauthenticatedReportNames.USER) return {
                    ...i,
                    name: t.name,
                    user_id: t.record.id,
                    channel_id: void 0,
                    message_id: void 0,
                    guild_id: t.contextualGuildId,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                };
                else if (t.name === s.UnauthenticatedReportNames.MESSAGE) return {
                    ...i,
                    name: t.name,
                    user_id: void 0,
                    channel_id: void 0,
                    message_id: t.record.id,
                    guild_id: void 0,
                    stage_instance_id: void 0,
                    guild_scheduled_event_id: void 0
                };
                return null
            };

            function v(e, t, n) {
                r.default.trackWithMetadata(i.AnalyticEvents.IAR_MODAL_CLOSE, {
                    report_type: e.name,
                    report_id: n,
                    navigation_history: t,
                    message_id: e.name === s.ReportNames.MESSAGE || e.name === s.ReportNames.FIRST_DM ? e.record.id : void 0,
                    stage_instance_id: e.name === s.ReportNames.STAGE_CHANNEL ? e.record.id : void 0,
                    guild_scheduled_event_id: e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
                    guild_id: e.name === s.ReportNames.GUILD || e.name === s.ReportNames.GUILD_DISCOVERY ? e.record.id : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
                    channel_id: e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
                })
            }

            function E(e, t) {
                l.default.dispatch({
                    type: "IN_APP_REPORTS_SHOW_FEEDBACK",
                    reportId: t,
                    reportType: e.name
                })
            }
        },
        399515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("716241"),
                i = n("476765"),
                d = n("143618"),
                u = n("965153"),
                o = n("463138"),
                c = n("49111"),
                m = n("662394"),
                _ = e => {
                    let {
                        reportType: t,
                        menu: n,
                        modalProps: _,
                        onSubmit: f,
                        onNavigate: h,
                        isAuthenticated: v = !0
                    } = e, E = (0, i.useUID)(), {
                        nodes: x,
                        root_node_id: g,
                        success_node_id: R,
                        fail_node_id: N
                    } = n, [p, S] = l.useState(g), [I, T] = l.useState(void 0), [M, j] = l.useState(void 0), [C, b] = l.useState([]), [L, y] = l.useState(void 0), D = e => {
                        var n;
                        let {
                            destination: a
                        } = e, [, l] = a, r = x[l];
                        if (r.elements.some(e => "skip" === e.type) && (null === (n = r.button) || void 0 === n ? void 0 : n.type) === "next") return D({
                            ...e,
                            destination: ["", r.button.target]
                        });
                        if (b([...C, e]), null != r.key && (null == h || h(r.key)), T(void 0), j(void 0), t.name === d.ReportNames.MESSAGE || t.name === d.ReportNames.FIRST_DM) {
                            let e = t.record.id;
                            s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                                message_id: e,
                                content_type: t.name,
                                report_sub_type: r.report_type,
                                current_node: x[p].id,
                                next_node: r.id
                            })
                        }
                        S(l)
                    }, A = async e => {
                        var a;
                        let l = v ? await (0, u.submitReport)(n, t, [...C, e]) : await (0, u.submitUnauthenticatedReport)(n, t, [...C, e]),
                            r = null == l ? void 0 : null === (a = l.body) || void 0 === a ? void 0 : a.report_id;
                        null != r && y(r), null == f || f(r)
                    }, O = () => {
                        var e, n;
                        if (C.length < 1) return;
                        let a = [...C],
                            l = a.pop(),
                            r = null !== (n = null == l ? void 0 : l.nodeRef) && void 0 !== n ? n : g;
                        if (t.name === d.ReportNames.MESSAGE || t.name === d.ReportNames.FIRST_DM) {
                            let e = t.record.id;
                            s.default.trackWithMetadata(c.AnalyticEvents.IAR_NAVIGATE, {
                                message_id: e,
                                content_type: t.name,
                                report_sub_type: x[r].report_type,
                                current_node: x[p].id,
                                next_node: x[r].id
                            })
                        }
                        T(null == l ? void 0 : null === (e = l.multiSelect) || void 0 === e ? void 0 : e.state), j(null == l ? void 0 : l.textInput), S(r), b(a), null == h || h("..")
                    }, U = [];
                    for (let e in x) {
                        var k, B;
                        let t = x[e];
                        if (t.id !== R && t.id !== N && t.id !== g && (U.push(t), (null === (k = t.button) || void 0 === k ? void 0 : k.type) === "next")) {
                            let e = null === (B = t.button) || void 0 === B ? void 0 : B.target,
                                n = U.indexOf(x[e]); - 1 !== n && (U.splice(n, 1), U.push(x[e]))
                        }
                    }
                    let G = [x[g], ...U, x[R], x[N]];
                    return (0, a.jsx)(r.ModalRoot, {
                        transitionState: _.transitionState,
                        "aria-labelledby": E,
                        children: (0, a.jsx)(r.Slides, {
                            width: 440,
                            activeSlide: p,
                            centered: !1,
                            children: G.map(e => (0, a.jsx)(r.Slide, {
                                id: e.id,
                                children: (0, a.jsx)("div", {
                                    className: m.slideContainer,
                                    children: (0, a.jsx)(o.default, {
                                        node: e,
                                        reportType: t,
                                        history: C,
                                        onModalClose: _.onClose,
                                        onSelectChild: D,
                                        onNavigateBack: O,
                                        multiSelect: I,
                                        textInput: M,
                                        successNodeId: R,
                                        failNodeId: N,
                                        onSubmit: A,
                                        reportId: L
                                    })
                                })
                            }, e.id))
                        })
                    })
                }
        },
        64573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("145131"),
                i = n("782340"),
                d = n("315033"),
                u = e => {
                    let t, {
                            button: n,
                            submitting: u,
                            disableNext: o,
                            onClick: c,
                            canNavigateBack: m,
                            onBackClicked: _
                        } = e,
                        f = l.useRef(null),
                        h = null != n && "cancel" !== n.type,
                        v = m && (null == n ? void 0 : n.type) !== "done";
                    if (l.useEffect(() => {
                            var e;
                            ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") && (null === (e = f.current) || void 0 === e || e.focus())
                        }, [null == n ? void 0 : n.type]), !(h || v)) return null;
                    let E = i.default.Messages.DONE;
                    return (null == n ? void 0 : n.type) === "submit" ? (E = i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = r.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? E = i.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (E = i.default.Messages.CANCEL, t = r.Button.Colors.TRANSPARENT), (0, a.jsxs)(r.ModalFooter, {
                        direction: s.default.Direction.HORIZONTAL,
                        children: [v && (0, a.jsx)(r.Button, {
                            onClick: _,
                            color: r.Button.Colors.TRANSPARENT,
                            disabled: u,
                            children: i.default.Messages.BACK
                        }), h && (0, a.jsx)(r.Button, {
                            onClick: () => {
                                null != n && c(n)
                            },
                            color: t,
                            className: d.actionButton,
                            disabled: u || o,
                            buttonRef: f,
                            children: E
                        })]
                    })
                }
        },
        463138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("145131"),
                i = n("64573"),
                d = n("191732"),
                u = n("284787"),
                o = n("859043"),
                c = n("540227"),
                m = n("755575"),
                _ = n("552190"),
                f = n("798016"),
                h = n("918418"),
                v = n("947319"),
                E = n("420938"),
                x = n("111181"),
                g = n("677734"),
                R = n("538418"),
                N = n("584866"),
                p = n("41877"),
                S = n("71514"),
                I = n("265104"),
                T = n("345516"),
                M = n("244599"),
                j = n("291028"),
                C = n("821003"),
                b = n("782340"),
                L = n("887491");

            function y(e, t) {
                let {
                    elements: n
                } = e;
                return n.find(e => {
                    let {
                        type: n
                    } = e;
                    return n === t
                })
            }

            function D(e, t) {
                let {
                    elements: n
                } = e;
                return n.filter(e => {
                    let {
                        type: n
                    } = e;
                    return n === t
                })
            }
            var A = e => {
                let {
                    node: t,
                    reportType: n,
                    history: A,
                    onSelectChild: O,
                    onModalClose: U,
                    multiSelect: k,
                    reportId: B,
                    textInput: G
                } = e, [P, w] = l.useState(!1), [F, V] = l.useState(!1), [H, z] = l.useState(() => ({})), [Y, W] = l.useState(() => ({})), K = y(t, "checkbox"), Z = y(t, "text_line_resource"), q = D(t, "external_link"), X = D(t, "free_text"), J = D(t, "dropdown"), Q = (e, t) => {
                    let n = {
                        ...Y
                    };
                    n[e] = t, W(n)
                }, $ = l.useMemo(() => e => {
                    O({
                        nodeRef: t.id,
                        destination: e,
                        textInput: null != X || null != J ? Y : void 0,
                        multiSelect: null != K ? {
                            name: K.name,
                            state: H
                        } : void 0
                    })
                }, [t, O, K, H, Y, X, J]);
                l.useEffect(() => {
                    null != k && z(k), null != G && W(G)
                }, [k, G]);
                let ee = () => e.onSubmit({
                    nodeRef: t.id,
                    destination: ["", e.successNodeId]
                }).then(() => {
                    V(!1), $(["", e.successNodeId])
                }).catch(() => {
                    V(!0)
                }).finally(() => {
                    w(!1)
                });
                return (0, a.jsxs)("div", {
                    className: L.container,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        separator: !1,
                        direction: s.default.Direction.VERTICAL,
                        className: L.header,
                        children: [(0, a.jsx)(T.default, {
                            element: y(t, "success")
                        }), (0, a.jsx)(g.default, {
                            node: t
                        }), (0, a.jsx)(R.default, {
                            node: t
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: L.body,
                        children: [null != Z ? (0, a.jsx)(M.default, {
                            element: Z
                        }) : null, null != y(t, "breadcrumbs") && (0, a.jsx)(u.default, {
                            history: A
                        }), null != y(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, a.jsx)(p.default, {
                            message: n.record
                        }), null != y(t, "user_preview") && "user" === n.name ? (0, a.jsx)(j.default, {
                            user: n.record
                        }) : null, function(e) {
                            let {
                                elements: t
                            } = e;
                            return t.some(e => {
                                let {
                                    type: t
                                } = e;
                                return C.REMEDIATION_ELEMENT_TYPES.includes(t)
                            })
                        }(t) && (0, a.jsx)(r.Heading, {
                            className: L.remediationElementsHeader,
                            variant: "heading-sm/semibold",
                            children: b.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                        }), null != y(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, a.jsx)(d.default, {
                            userId: "user" === n.name ? n.record.id : n.record.author.id,
                            reportId: B,
                            reportName: n.name
                        }), null != y(t, "delete_message") && "message" === n.name && (0, a.jsx)(c.default, {
                            message: n.record,
                            reportId: B
                        }), null != y(t, "leave_guild") && "guild" === n.name && (0, a.jsx)(N.default, {
                            guildId: n.record.id,
                            reportId: B
                        }), null != y(t, "channel_preview") && "stage_channel" === n.name && (0, a.jsx)(I.default, {
                            stageInstance: n.record
                        }), null != y(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, a.jsx)(x.default, {
                            event: n.record
                        }), null != y(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, a.jsx)(v.default, {
                            entry: n.record
                        }), null != y(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, a.jsx)(E.default, {
                            entry: n.record
                        }), null != K && (0, a.jsx)(S.default, {
                            element: K,
                            onChange: (e, t) => {
                                let n = {
                                    ...H
                                };
                                e in H ? delete n[e] : n[e] = t, z(n)
                            },
                            state: H
                        }), ("user_urf" === n.name || "message_urf" === n.name) && null != J && J.length > 0 && (0, a.jsx)(m.default, {
                            elements: J,
                            onChange: Q
                        }), ("user_urf" === n.name || "message_urf" === n.name) && null != X && X.length > 0 && (0, a.jsx)(h.default, {
                            elements: X,
                            onChange: Q,
                            state: Y
                        }), (0, a.jsx)(o.default, {
                            node: t,
                            onSelectChild: $
                        }), null != q && q.length > 0 ? (0, a.jsx)(f.default, {
                            elements: q
                        }) : null, (0, a.jsx)(_.default, {
                            hasError: F,
                            onClose: () => {
                                V(!1)
                            }
                        })]
                    }), (0, a.jsx)(i.default, {
                        button: t.button,
                        submitting: P,
                        disableNext: !0 === t.is_multi_select_required && 0 === Object.keys(H).length,
                        onClick: e => {
                            switch (e.type) {
                                case "done":
                                case "cancel":
                                    U();
                                    break;
                                case "next":
                                    $(["", e.target]);
                                    break;
                                case "submit":
                                    w(!0), ee()
                            }
                        },
                        onBackClicked: e.onNavigateBack,
                        canNavigateBack: A.length > 0
                    }), (0, a.jsx)(r.ModalCloseButton, {
                        className: L.closeButton,
                        onClick: U
                    })]
                })
            }
        },
        191732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("498225"),
                s = n("77078"),
                i = n("736964"),
                d = n("716241"),
                u = n("27618"),
                o = n("697218"),
                c = n("143618"),
                m = n("49111"),
                _ = n("782340"),
                f = n("236683"),
                h = e => {
                    let {
                        userId: t,
                        reportId: n,
                        reportName: h
                    } = e, [v, E] = l.useState(!1), x = (0, r.useStateFromStores)([o.default], () => o.default.getUser(t), [t]), g = (0, r.useStateFromStores)([u.default], () => u.default.getRelationshipType(t), [t]) === m.RelationshipTypes.BLOCKED;
                    l.useEffect(() => {
                        E(g)
                    }, [g]);
                    let R = l.useCallback(() => {
                        E(!0), d.default.trackWithMetadata(m.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, {
                            other_user_id: t,
                            report_id: n
                        }), i.default.addRelationship({
                            userId: t,
                            context: {
                                location: "ReportMenuBlockUser-iOS"
                            },
                            type: m.RelationshipTypes.BLOCKED
                        })
                    }, [t, n]);
                    return null == x ? null : (0, a.jsxs)("div", {
                        className: f.container,
                        children: [(0, a.jsx)(s.Text, {
                            className: f.description,
                            variant: "text-sm/normal",
                            children: h === c.ReportNames.USER ? _.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : _.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION
                        }), (0, a.jsxs)("div", {
                            className: f.userContainer,
                            children: [(0, a.jsxs)("div", {
                                className: f.userInfo,
                                children: [(0, a.jsx)(s.Avatar, {
                                    size: s.AvatarSizes.SIZE_32,
                                    src: x.getAvatarURL(void 0, 32),
                                    className: f.avatar,
                                    "aria-label": x.username
                                }), (0, a.jsx)(s.Text, {
                                    className: f.userName,
                                    variant: "text-sm/semibold",
                                    children: x.username
                                }), !x.isPomelo() && (0, a.jsxs)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: ["#", x.discriminator]
                                })]
                            }), (0, a.jsx)(s.Button, {
                                onClick: () => R(),
                                disabled: v,
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.RED,
                                children: v ? _.default.Messages.BLOCKED : _.default.Messages.BLOCK
                            })]
                        })]
                    })
                }
        },
        284787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("427964"),
                r = n("77078"),
                s = n("782340"),
                i = n("302479"),
                d = e => {
                    let t = (0, l.flatMap)(e.history, e => {
                        var t;
                        let {
                            destination: [n],
                            multiSelect: a,
                            textInput: l
                        } = e, r = [null, null], s = Object.values(null !== (t = null == a ? void 0 : a.state) && void 0 !== t ? t : {});
                        s.length > 0 && (r[0] = s.join(", "));
                        let i = Object.entries(null != l ? l : {});
                        return i.length > 0 && (r[0] = i.map(e => {
                            let [t, n] = e;
                            return "".concat(t, "=").concat(n)
                        }).join(", ")), "" !== n && (r[1] = n), r
                    }).filter(e => null != e);
                    return 0 === t.length ? null : (0, a.jsxs)("div", {
                        className: i.container,
                        children: [(0, a.jsx)(r.Heading, {
                            className: i.breadcrumbsHeader,
                            color: "header-secondary",
                            variant: "heading-sm/semibold",
                            children: s.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
                        }), t.map((e, t) => (0, a.jsxs)("div", {
                            className: i.breadcrumbContainer,
                            children: [(0, a.jsx)("div", {
                                className: i.breadcrumbDot
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: i.breadcrumbText,
                                children: e
                            })]
                        }, "".concat(e, "+").concat(t)))]
                    })
                }
        },
        859043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("461380"),
                s = n("209082");
            let i = e => {
                let {
                    child: t,
                    onClick: n
                } = e, [i] = t;
                return (0, a.jsxs)(l.Clickable, {
                    className: s.childButton,
                    onClick: () => n(t),
                    children: [(0, a.jsx)(l.Text, {
                        className: s.childText,
                        variant: "text-md/semibold",
                        children: i
                    }), (0, a.jsx)(r.default, {
                        className: s.childIcon,
                        direction: r.default.Directions.RIGHT
                    })]
                })
            };
            var d = e => {
                let {
                    node: {
                        children: t
                    },
                    onSelectChild: n
                } = e;
                if (null == t || 0 === t.length) return null;
                let l = t.map(e => {
                    let [t, l] = e;
                    return (0, a.jsx)(i, {
                        child: e,
                        onClick: n
                    }, "".concat(t, "+").concat(l))
                });
                return (0, a.jsx)("div", {
                    className: s.childrenContainer,
                    children: l
                })
            }
        },
        540227: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("819689"),
                i = n("716241"),
                d = n("42203"),
                u = n("957255"),
                o = n("49111"),
                c = n("782340"),
                m = n("121474"),
                _ = e => {
                    let {
                        message: t,
                        reportId: n
                    } = e, [_, f] = l.useState(!1), h = l.useCallback(() => {
                        f(!0), i.default.trackWithMetadata(o.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                            report_id: n
                        }), s.default.deleteMessage(t.getChannelId(), t.id)
                    }, [t, n]), v = l.useMemo(() => {
                        let e = d.default.getChannel(t.getChannelId());
                        return null != e && e.type !== o.ChannelTypes.DM && e.type !== o.ChannelTypes.GROUP_DM && u.default.canWithPartialContext(o.Permissions.MANAGE_MESSAGES, {
                            channelId: e.id
                        })
                    }, [t]);
                    return null != t && v ? (0, a.jsx)("div", {
                        className: m.container,
                        children: (0, a.jsxs)("div", {
                            className: m.messageContainer,
                            children: [(0, a.jsx)("div", {
                                className: m.description,
                                children: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    children: c.default.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION
                                })
                            }), (0, a.jsx)(r.Button, {
                                onClick: () => h(),
                                disabled: _,
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.RED,
                                children: _ ? c.default.Messages.DELETED : c.default.Messages.DELETE
                            })]
                        })
                    }) : null
                }
        },
        755575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("84811");
            let i = e => {
                let {
                    element: t,
                    onChange: n
                } = e, [i, d] = l.useState(""), u = t.name, {
                    title: o,
                    options: c
                } = t.data, m = l.useCallback(e => {
                    null != e && (d(e), n(e))
                }, [n]);
                return (0, a.jsxs)("div", {
                    className: s.marginBottom8,
                    children: [null != o && (0, a.jsx)("div", {
                        className: s.marginBottom8,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/bold",
                            children: o
                        })
                    }), (0, a.jsx)(r.SingleSelect, {
                        value: i,
                        onChange: m,
                        options: c
                    })]
                }, u)
            };
            var d = e => {
                let {
                    elements: t,
                    onChange: n
                } = e, l = t.map(e => {
                    let t = e.name;
                    return (0, a.jsx)(i, {
                        element: e,
                        onChange: e => n(t, e)
                    }, t)
                });
                return (0, a.jsx)("div", {
                    children: l
                })
            }
        },
        552190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("423487"),
                s = n("782340"),
                i = n("956596"),
                d = e => {
                    let {
                        hasError: t,
                        onClose: n
                    } = e;
                    return t ? (0, a.jsxs)("div", {
                        className: i.errorContainer,
                        children: [(0, a.jsx)(r.default, {
                            width: 20,
                            height: 20,
                            className: i.errorIcon
                        }), (0, a.jsx)(l.Text, {
                            className: i.errorText,
                            variant: "text-sm/normal",
                            children: s.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED
                        }), (0, a.jsx)(l.Clickable, {
                            onClick: () => {
                                n()
                            },
                            "aria-label": s.default.Messages.DISMISS,
                            className: i.closeIcon
                        })]
                    }) : null
                }
        },
        798016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("545158"),
                s = n("758710"),
                i = n("782340"),
                d = n("636124");
            let u = e => {
                let {
                    data: {
                        url: t,
                        link_text: n,
                        link_description: i,
                        is_localized: u
                    }
                } = e;
                return u ? (0, a.jsxs)(l.Clickable, {
                    role: "link",
                    className: d.linkButton,
                    onClick: () => {
                        (0, r.default)(t)
                    },
                    children: [(0, a.jsxs)("div", {
                        className: d.linkTextContainer,
                        children: [(0, a.jsx)(l.Text, {
                            className: d.linkText,
                            variant: "text-md/semibold",
                            children: n
                        }), null != i && "" !== i && (0, a.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: i
                        })]
                    }), (0, a.jsx)(s.default, {
                        className: d.linkIcon
                    })]
                }) : null
            };

            function o(e) {
                let {
                    elements: t
                } = e;
                if (null == t || 0 === t.length || null == t.find(e => {
                        let {
                            data: t
                        } = e;
                        return t.is_localized
                    })) return null;
                let n = t.map((e, t) => {
                        let {
                            data: n
                        } = e;
                        return (0, a.jsx)(u, {
                            data: n
                        }, "external-link+".concat(t))
                    }),
                    r = t.some(e => {
                        let {
                            data: t
                        } = e;
                        return t.is_header_hidden
                    });
                return (0, a.jsxs)("div", {
                    className: d.linksContainer,
                    children: [!r && (0, a.jsx)(l.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: d.header,
                        children: i.default.Messages.LEARN_MORE
                    }), n]
                })
            }
        },
        918418: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("782340"),
                i = n("84811");
            let d = e => {
                let {
                    data: {
                        title: t,
                        subtitle: n,
                        placeholder: d,
                        rows: u,
                        character_limit: o,
                        pattern: c
                    },
                    onChange: m,
                    initialText: _
                } = e, [f, h] = l.useState(""), [v, E] = l.useState("");
                l.useEffect(() => {
                    h(null != _ ? _ : "")
                }, [_]);
                let x = l.useCallback(e => {
                    let t = null != c ? new RegExp(c) : null;
                    null != t && null == t.exec(e) ? E(s.default.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR) : E(""), null != e && (h(e), m(e))
                }, [m, c]);
                return (0, a.jsxs)("div", {
                    className: i.marginBottom8,
                    children: [null != t && (0, a.jsx)("div", {
                        className: i.marginBottom8,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/bold",
                            children: t
                        })
                    }), (0, a.jsx)(r.TextArea, {
                        maxLength: o,
                        onChange: x,
                        value: f,
                        error: v,
                        rows: u,
                        placeholder: d,
                        autoFocus: !0
                    }), null != n && (0, a.jsx)("div", {
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: n
                        })
                    })]
                })
            };
            var u = e => {
                let {
                    elements: t,
                    onChange: n,
                    state: l
                } = e, r = t.map(e => {
                    var t;
                    let r = e.name;
                    return (0, a.jsx)(d, {
                        data: e.data,
                        onChange: e => n(r, e),
                        initialText: null !== (t = null == l ? void 0 : l[r]) && void 0 !== t ? t : void 0
                    }, r)
                });
                return (0, a.jsx)("div", {
                    children: r
                })
            }
        },
        947319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("42203"),
                s = n("305961"),
                i = n("109024"),
                d = n("782340"),
                u = n("471543"),
                o = e => {
                    let {
                        entry: t
                    } = e, n = r.default.getChannel(t.channelId);
                    if (null == n) return null;
                    let o = s.default.getGuild(n.guild_id);
                    return null == o ? null : (0, a.jsxs)("div", {
                        className: u.container,
                        children: [(0, a.jsx)(l.Heading, {
                            className: u.header,
                            variant: "heading-sm/semibold",
                            children: d.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                        }), (0, a.jsxs)("div", {
                            className: u.guildContainer,
                            children: [(0, a.jsxs)("div", {
                                className: u.hubInfo,
                                children: [(0, a.jsx)(i.default, {
                                    guild: o,
                                    size: i.default.Sizes.MINI,
                                    className: u.hubIcon
                                }), (0, a.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: o.name
                                })]
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t.name
                            })]
                        })]
                    })
                }
        },
        420938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("587974"),
                s = n("315102"),
                i = n("782340"),
                d = n("752260"),
                u = e => {
                    var t;
                    let {
                        entry: n
                    } = e, {
                        id: u,
                        icon: o,
                        name: c
                    } = n, m = null !== (t = s.default.getGuildIconURL({
                        id: u,
                        icon: o,
                        size: 32
                    })) && void 0 !== t ? t : void 0;
                    return (0, a.jsxs)("div", {
                        className: d.container,
                        children: [(0, a.jsx)(l.Heading, {
                            className: d.header,
                            variant: "heading-sm/semibold",
                            children: i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                        }), (0, a.jsx)("div", {
                            className: d.guildContainer,
                            children: (0, a.jsxs)("div", {
                                className: d.guildInfo,
                                children: [(0, a.jsx)(r.default, {
                                    mask: r.default.Masks.SQUIRCLE,
                                    width: 32,
                                    height: 32,
                                    className: d.guildIconMask,
                                    children: (0, a.jsx)("img", {
                                        src: m,
                                        alt: "",
                                        className: d.guildIcon
                                    })
                                }), (0, a.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: c
                                })]
                            })
                        })]
                    })
                }
        },
        111181: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                s = n("305961"),
                i = n("109024"),
                d = n("782340"),
                u = n("36059"),
                o = e => {
                    let {
                        event: t
                    } = e, n = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id));
                    return null == n ? null : (0, a.jsxs)("div", {
                        className: u.container,
                        children: [(0, a.jsx)(r.Heading, {
                            className: u.header,
                            variant: "heading-sm/semibold",
                            children: d.default.Messages.MOBILE_REPORTS_EVENT_PREVIEW_TITLE
                        }), (0, a.jsxs)("div", {
                            className: u.guildContainer,
                            children: [(0, a.jsxs)("div", {
                                className: u.guildInfo,
                                children: [(0, a.jsx)(i.default, {
                                    guild: n,
                                    size: i.default.Sizes.MINI,
                                    className: u.guildIcon
                                }), (0, a.jsx)(r.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: n.name
                                })]
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t.name
                            })]
                        })]
                    })
                }
        },
        677734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("367376"),
                i = n("442791"),
                d = n("782340"),
                u = n("338070"),
                o = e => {
                    let {
                        node: {
                            header: t,
                            subheader: n,
                            button: o
                        }
                    } = e, c = (null == o ? void 0 : o.type) === "submit", m = l.useRef(s.default.reactParserFor({
                        ...s.default.defaultRules,
                        link: i.LinkMarkupRule
                    }));
                    return (0, a.jsxs)("div", {
                        className: u.headerContainer,
                        children: [null != t && "" !== t ? (0, a.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: t
                        }) : null, null != n && "" !== t ? (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: m.current(n)
                        }) : null, c && (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            children: d.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
                        })]
                    })
                }
        },
        538418: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("367376"),
                s = n("555158"),
                i = n("442791"),
                d = n("955782"),
                u = e => {
                    let {
                        node: {
                            info: t
                        }
                    } = e, n = l.useRef(r.default.reactParserFor({
                        ...r.default.defaultRules,
                        link: i.LinkMarkupRule
                    }));
                    return null == t ? null : (0, a.jsx)(s.default, {
                        className: d.infoBox,
                        messageType: s.HelpMessageTypes.INFO,
                        children: n.current(t)
                    })
                }
        },
        584866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("77078"),
                s = n("716241"),
                i = n("592407"),
                d = n("305961"),
                u = n("109024"),
                o = n("49111"),
                c = n("782340"),
                m = n("369628"),
                _ = e => {
                    let {
                        guildId: t,
                        reportId: n
                    } = e, [_, f] = l.useState(!1), h = d.default.getGuild(t), v = null != h;
                    l.useEffect(() => {
                        f(!v)
                    }, [v]);
                    let E = l.useCallback(() => {
                        f(!0), s.default.trackWithMetadata(o.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                            guild_id: t,
                            report_id: n
                        }), i.default.leaveGuild(t)
                    }, [t, n]);
                    if (null == h) return null;
                    let x = () => {
                        (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
                            header: c.default.Messages.LEAVE_SERVER_TITLE.format({
                                name: h.name
                            }),
                            confirmText: c.default.Messages.LEAVE_SERVER,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: E,
                            ...e,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.LEAVE_SERVER_BODY.format({
                                    name: h.name
                                })
                            })
                        }))
                    };
                    return (0, a.jsxs)("div", {
                        className: m.container,
                        children: [(0, a.jsx)(r.Text, {
                            className: m.description,
                            variant: "text-sm/normal",
                            children: c.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION
                        }), (0, a.jsxs)("div", {
                            className: m.guildContainer,
                            children: [(0, a.jsxs)("div", {
                                className: m.guildInfo,
                                children: [(0, a.jsx)(u.default, {
                                    guild: h,
                                    showBadge: !1,
                                    animate: !1,
                                    size: u.default.Sizes.SMALL,
                                    "aria-label": h.name,
                                    className: m.icon,
                                    active: !0
                                }), (0, a.jsx)(r.Text, {
                                    className: m.guildName,
                                    variant: "text-sm/semibold",
                                    children: h.name
                                })]
                            }), (0, a.jsx)(r.Button, {
                                onClick: () => x(),
                                disabled: _,
                                size: r.Button.Sizes.SMALL,
                                color: r.Button.Colors.RED,
                                children: _ ? c.default.Messages.MOBILE_REPORTS_LEFT_SERVER : c.default.Messages.LEAVE_SERVER
                            })]
                        })]
                    })
                }
        },
        442791: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkMarkupRule: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("870647"),
                r = n.n(l),
                s = n("77078");
            let i = {
                ...r.defaultRules.link,
                react: function(e, t, n) {
                    return (0, a.jsx)(s.Anchor, {
                        href: e.target,
                        target: "_blank",
                        children: t(e.content, n)
                    })
                }
            }
        },
        41877: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("498225"),
                r = n("77078"),
                s = n("574073"),
                i = n("39331"),
                d = n("42203"),
                u = n("780571"),
                o = n("497880"),
                c = n("93332"),
                m = n("708062"),
                _ = n("719347"),
                f = n("782340"),
                h = n("715201"),
                v = e => {
                    let {
                        message: t
                    } = e, n = (0, s.default)(t), v = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t.channel_id)), {
                        content: E
                    } = (0, i.default)(t, {
                        hideSimpleEmbedContent: !1
                    });
                    return null == v ? null : (0, a.jsxs)("div", {
                        className: h.container,
                        children: [(0, a.jsx)(r.Heading, {
                            className: h.header,
                            variant: "heading-sm/semibold",
                            children: f.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                        }), (0, a.jsx)(r.Scroller, {
                            className: h.messagePreviewContainer,
                            children: (0, a.jsx)(u.default, {
                                childrenMessageContent: (() => {
                                    let e = null == E || "" === E || Array.isArray(E) && 0 === E.length;
                                    if (e) {
                                        let {
                                            icon: e
                                        } = (0, m.renderSingleLineMessage)(t, E, !1, "", {
                                            iconClass: h.attachmentIcon,
                                            iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                                        });
                                        return e
                                    }
                                    return (0, a.jsx)(o.default, {
                                        message: t,
                                        content: E
                                    })
                                })(),
                                childrenHeader: (0, a.jsx)(c.default, {
                                    message: t,
                                    channel: v,
                                    author: n,
                                    guildId: v.guild_id
                                }),
                                disableInteraction: !0
                            })
                        })]
                    })
                }
        },
        71514: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("998988");
            let s = e => {
                let {
                    onChange: t,
                    label: n,
                    subtitle: s,
                    selected: i
                } = e;
                return (0, a.jsx)("div", {
                    className: r.checkboxRow,
                    children: (0, a.jsxs)(l.Checkbox, {
                        type: l.Checkbox.Types.INVERTED,
                        onChange: () => t(),
                        value: i,
                        children: [(0, a.jsx)(l.Text, {
                            color: "interactive-active",
                            variant: "text-md/semibold",
                            children: n
                        }), (0, a.jsx)(l.Text, {
                            color: "interactive-active",
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })
                })
            };
            var i = e => {
                let {
                    element: t,
                    state: n,
                    onChange: l
                } = e;
                if ((null == t ? void 0 : t.type) !== "checkbox") return null;
                let {
                    data: r
                } = t;
                return (0, a.jsx)("div", {
                    children: r.map((e, t) => {
                        let [r, i, d] = e;
                        return (0, a.jsx)(s, {
                            onChange: () => l(r, i),
                            selected: r in n,
                            label: i,
                            subtitle: d
                        }, "".concat(t, "+button"))
                    })
                })
            }
        },
        265104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("305961"),
                s = n("109024"),
                i = n("782340"),
                d = n("292757"),
                u = e => {
                    let {
                        stageInstance: t
                    } = e, n = r.default.getGuild(t.guild_id);
                    return null == n ? null : (0, a.jsxs)("div", {
                        className: d.container,
                        children: [(0, a.jsx)(l.Heading, {
                            className: d.header,
                            variant: "heading-sm/semibold",
                            children: i.default.Messages.MOBILE_REPORTS_STAGE_CHANNEL_PREVIEW_TITLE
                        }), (0, a.jsxs)("div", {
                            className: d.guildContainer,
                            children: [(0, a.jsxs)("div", {
                                className: d.guildInfo,
                                children: [(0, a.jsx)(s.default, {
                                    guild: n,
                                    size: s.default.Sizes.MINI,
                                    className: d.guildIcon
                                }), (0, a.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: n.name
                                })]
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t.topic
                            })]
                        })]
                    })
                }
        },
        345516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("243723");
            let r = n("648529");
            var s = e => {
                let {
                    element: t
                } = e;
                return (null == t ? void 0 : t.type) !== "success" ? null : (0, a.jsx)("img", {
                    alt: "",
                    src: r,
                    className: l.successImg
                })
            }
        },
        244599: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("920040"),
                l = n("773670"),
                r = n("575482"),
                s = n.n(r),
                i = n("77078"),
                d = n("367376"),
                u = n("306160"),
                o = n("782340"),
                c = n("571752");

            function m(e) {
                let {
                    element: {
                        data: {
                            title: t,
                            body: n,
                            sms: r,
                            is_localized: m
                        }
                    }
                } = e, [_, f] = l.useState(!1), h = l.useRef(d.default.reactParserFor(d.default.defaultRules));
                return m ? (0, a.jsxs)("div", {
                    className: c.container,
                    children: [(0, a.jsx)(i.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-secondary",
                        className: c.header,
                        children: t
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        className: c.bodyText,
                        children: h.current(n)
                    }), (0, a.jsx)("div", {
                        className: c.smsInfoContainer,
                        children: (0, a.jsxs)("div", {
                            className: s(c.smsNumberContainer, {
                                [c.copied]: _
                            }),
                            children: [(0, a.jsx)(i.Text, {
                                variant: "text-md/normal",
                                selectable: !0,
                                className: c.smsNumberText,
                                children: r
                            }), (0, a.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                className: c.trailingButton,
                                onClick: () => {
                                    (0, u.copy)(r) && f(!0)
                                },
                                color: i.Button.Colors.PRIMARY,
                                children: _ ? o.default.Messages.COPIED : o.default.Messages.COPY
                            })]
                        })
                    })]
                }) : null
            }
        },
        291028: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("308289"),
                s = n("782340"),
                i = n("539280"),
                d = e => {
                    let {
                        user: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: i.container,
                        children: [(0, a.jsx)(l.Heading, {
                            className: i.header,
                            variant: "heading-sm/semibold",
                            children: s.default.Messages.REPORTS_USER_PREVIEW_TITLE
                        }), (0, a.jsx)("div", {
                            className: i.userContainer,
                            children: (0, a.jsxs)("div", {
                                className: i.userInfo,
                                children: [(0, a.jsx)(r.default, {
                                    className: i.userIcon,
                                    user: t,
                                    size: l.AvatarSizes.SIZE_40
                                }), (0, a.jsxs)("div", {
                                    children: [null != t.globalName && (0, a.jsx)(l.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: t.globalName
                                    }), (0, a.jsx)(l.Text, {
                                        color: "header-secondary",
                                        variant: "text-sm/normal",
                                        children: t.username
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        878102: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var l = n("77078"),
                r = n("965153"),
                s = n("399515");
            async function i(e, t, n, i) {
                let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                    u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
                    o = (0, l.getInteractingModalContext)();
                try {
                    let c, m = u ? await (0, r.getReportMenu)(e, t) : await (0, r.getUnauthenticatedReportMenu)(e, t),
                        _ = [];
                    let f = e => {
                            _.push(e)
                        },
                        h = e => {
                            c = e, null == n || n()
                        };
                    (0, l.openModal)(t => (0, a.jsx)(s.default, {
                        menu: m,
                        reportType: e,
                        modalProps: t,
                        onNavigate: f,
                        onSubmit: h,
                        isAuthenticated: u
                    }), {
                        onCloseCallback: () => {
                            (0, r.trackCloseReportModalAnalytics)(e, _, c), null == i || i(), d && (0, r.showInAppReportsFeedbackModal)(e, null != c ? c : null)
                        }
                    }, o)
                } catch {}
            }
        }
    }
]);