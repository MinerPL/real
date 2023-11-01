(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13607"], {
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var l = n("446674"),
                a = n("26989"),
                o = n("697218"),
                u = n("509");

            function r(e) {
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function i(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, u.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, l.useStateFromStores)([a.default], () => i(e, t, a.default), [t, e]);
                return s(n)
            }

            function c(e, t) {
                let n = i(e, t, a.default);
                return s(n)
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("446674"),
                o = n("895026"),
                u = n("36402");
            let r = {};

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, a.useStateFromStores)([u.default], () => u.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = r[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (r[e] = Date.now(), o.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        470055: function(e, t, n) {
            "use strict";
            let l, a, o, u, r;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return s
                },
                default: function() {
                    return C
                }
            });
            var i, s, d = n("627445"),
                c = n.n(d),
                f = n("446674"),
                I = n("913144"),
                p = n("819689"),
                E = n("798609"),
                T = n("274800");
            (i = s || (s = {}))[i.IN_FLIGHT = 0] = "IN_FLIGHT", i[i.ERRORED = 1] = "ERRORED", i[i.SUCCEEDED = 2] = "SUCCEEDED";
            class m extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : a
                }
            }
            m.displayName = "InteractionModalStore";
            var C = new m(I.default, {
                LOGOUT: function() {
                    return l = null, a = null, o = null, u = null, r = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === r && (p.default.deleteMessage(u, o, !0), o = null, u = null, r = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === r && (p.default.deleteMessage(u, o, !0), o = null, u = null, r = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: i
                    } = e;
                    switch (i.interactionType) {
                        case E.InteractionTypes.APPLICATION_COMMAND:
                            return o = t, u = i.channelId, r = n, !1;
                        case E.InteractionTypes.MODAL_SUBMIT:
                            return c(null == l || a === s.ERRORED || a === s.SUCCEEDED, "cannot submit multiple modals at once"), l = n, a = s.IN_FLIGHT, setTimeout(() => {
                                l === n && a === s.IN_FLIGHT && (0, T.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = s.SUCCEEDED, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = s.ERRORED, !0)
                }
            })
        },
        732523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return y
                },
                useIframeModalState: function() {
                    return g
                }
            });
            var l = n("884691"),
                a = n("627445"),
                o = n.n(a),
                u = n("446674"),
                r = n("872717"),
                i = n("913144"),
                s = n("798609"),
                d = n("763898"),
                c = n("711562"),
                f = n("274800"),
                I = n("271938"),
                p = n("42203"),
                E = n("26989"),
                T = n("162771"),
                m = n("315102"),
                C = n("299039"),
                N = n("812684"),
                S = n("470055"),
                _ = n("524094"),
                M = n("49111"),
                A = n("782340");
            let D = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function O(e) {
                return l.useMemo(() => {
                    let t = T.default.getGuildId(),
                        n = null != t && null != e.bot ? E.default.getMember(t, e.bot.id) : void 0,
                        l = m.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        a = null != n && null != e.bot ? e.bot.username : e.name,
                        o = (0, c.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: a,
                        applicationBaseUrl: o
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function y(e, t) {
                var n;
                let {
                    application: a,
                    customId: c,
                    components: E,
                    channelId: T
                } = e, m = null === (n = p.default.getChannel(T)) || void 0 === n ? void 0 : n.guild_id, _ = (0, d.default)(), [y, g] = l.useState(null), [h, v] = l.useState(null), b = (0, u.useStateFromStores)([S.default], () => S.default.getModalState(h), [h]), L = l.useMemo(() => (0, N.createComponents)(E, a.id, m), [E, a.id, m]), F = l.useRef(new Set), U = l.useCallback(() => {
                    g(null), v(null), D(F.current) && v(function(e, t) {
                        let n = C.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            a = p.default.getChannel(l);
                        o(null != a, "expected channel");
                        let u = R(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: s.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let i = () => {
                            (null == t || !t.aborted) && r.default.post({
                                url: M.Endpoints.INTERACTIONS,
                                body: {
                                    type: s.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: a.id,
                                    guild_id: a.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: u
                                    },
                                    session_id: I.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(i, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return i(), n
                    }(e, _))
                }, [_, e]);
                l.useEffect(() => {
                    b === S.InteractionModalState.SUCCEEDED && (i.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: c
                    }), t()), b === S.InteractionModalState.ERRORED && g(A.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [h, b, t, c]);
                let {
                    applicationIconURL: x,
                    applicationName: P
                } = O(a);
                return {
                    components: L,
                    applicationIconURL: x,
                    applicationName: P,
                    submissionState: b,
                    error: y,
                    validators: F.current,
                    onSubmit: U
                }
            }

            function g(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: u
                } = O(t), r = p.default.getChannel(e.channelId);
                o(null != r, "channel should not be null");
                let i = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    s = {
                        instance_id: i,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != r.guild_id && "" !== r.guild_id && (s.guild_id = r.guild_id);
                let d = new URL(null != u ? u : "");
                d.pathname = e.iframePath;
                let c = d.toString();
                return {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: u,
                    queryParams: s,
                    iframeUrl: c
                }
            }
            let R = (e, t, n) => t.map((t, l) => {
                var a;
                let u = [...n, l];
                switch (t.type) {
                    case s.ComponentType.ACTION_ROW:
                        return {
                            type: t.type, components: R(e, null !== (a = t.components) && void 0 !== a ? a : [], u)
                        };
                    case s.ComponentType.INPUT_TEXT: {
                        let n = _.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case s.ComponentType.STRING_SELECT: {
                        let n = _.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        o(!1, "unreachable")
                }
            })
        },
        394816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                openInteractionModal: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("555158"),
                u = n("258078"),
                r = n("307311"),
                i = n("470055"),
                s = n("732523"),
                d = n("383247"),
                c = n("782340"),
                f = n("907926");

            function I(e) {
                let {
                    customId: t,
                    title: n,
                    onClose: I,
                    transitionState: p
                } = e, {
                    components: E,
                    applicationIconURL: T,
                    applicationName: m,
                    submissionState: C,
                    error: N,
                    validators: S,
                    onSubmit: _
                } = (0, s.useModalState)(e, I);
                return (0, l.jsx)("form", {
                    onSubmit: e => {
                        e.preventDefault(), _()
                    },
                    children: (0, l.jsxs)(a.ModalRoot, {
                        transitionState: p,
                        children: [(0, l.jsxs)(a.ModalHeader, {
                            separator: !1,
                            children: [(0, l.jsx)(a.Avatar, {
                                src: T,
                                size: a.AvatarSizes.SIZE_24,
                                "aria-label": m,
                                className: f.applicationIcon
                            }), (0, l.jsx)(u.default, {
                                color: u.default.Colors.HEADER_PRIMARY,
                                size: u.default.Sizes.SIZE_24,
                                children: n
                            }), (0, l.jsx)(a.ModalCloseButton, {
                                onClick: I,
                                className: f.closeButton
                            })]
                        }), (0, l.jsxs)(a.ModalContent, {
                            children: [null != N && "" !== N ? (0, l.jsx)(o.default, {
                                messageType: o.HelpMessageTypes.ERROR,
                                className: f.submissionWarning,
                                children: N
                            }) : null, (0, l.jsx)(o.default, {
                                messageType: o.HelpMessageTypes.WARNING,
                                className: f.submissionWarning,
                                children: c.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
                                    applicationName: m
                                })
                            }), (0, l.jsx)(a.FormSection, {
                                children: (0, l.jsx)(r.ComponentStateContextProvider, {
                                    modal: {
                                        customId: t
                                    },
                                    validators: S,
                                    children: (0, d.renderComponents)(E)
                                })
                            })]
                        }), (0, l.jsxs)(a.ModalFooter, {
                            children: [(0, l.jsx)(a.Button, {
                                type: "submit",
                                color: a.Button.Colors.BRAND,
                                size: a.Button.Sizes.MEDIUM,
                                submitting: C === i.InteractionModalState.IN_FLIGHT,
                                children: c.default.Messages.SUBMIT
                            }), (0, l.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                onClick: I,
                                children: c.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }

            function p(e) {
                (0, a.openModal)(t => (0, l.jsx)(I, {
                    ...t,
                    ...e
                }))
            }
        },
        752598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInteractionTimeoutTimestamp: function() {
                    return m
                },
                executeMessageComponentInteraction: function() {
                    return C
                },
                handleInteractionResponse: function() {
                    return S
                },
                InteractionStatusViewState: function() {
                    return a
                },
                getInteractionStatusViewState: function() {
                    return _
                },
                canRetryInteractionData: function() {
                    return M
                }
            });
            var l, a, o = n("249654"),
                u = n("872717"),
                r = n("913144"),
                i = n("819689"),
                s = n("798609"),
                d = n("263024"),
                c = n("271938"),
                f = n("274800"),
                I = n("809810"),
                p = n("3765"),
                E = n("606981"),
                T = n("49111");

            function m(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : o.default.extractTimestamp(e) + 9e5
            }
            let C = async e => {
                let {
                    componentType: t,
                    messageId: n,
                    messageFlags: l,
                    customId: a,
                    indices: r,
                    applicationId: i,
                    channelId: p,
                    guildId: E,
                    localState: m
                } = e, C = o.default.fromTimestamp(Date.now());
                if (!I.default.canQueueInteraction(n, C)) return;
                await d.default.unarchiveThreadIfNecessary(p), (0, f.addQueued)(C, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: a,
                        indices: r
                    },
                    onFailure: (e, t) => N(p, e, t)
                }), null != m && (0, f.queueInteractionComponentState)(n, C, m, r);
                let _ = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: C,
                    guild_id: E,
                    channel_id: p,
                    message_flags: l,
                    message_id: n,
                    application_id: i,
                    session_id: c.default.getSessionId(),
                    data: {
                        component_type: t,
                        custom_id: a,
                        ... function(e) {
                            if (null == e) return null;
                            if (e.type === s.ComponentType.STRING_SELECT || e.type === s.ComponentType.INPUT_TEXT) return e;
                            let t = e.selectedOptions.map(e => e.value);
                            return {
                                type: e.type,
                                values: t
                            }
                        }(m)
                    }
                };
                await u.default.post({
                    url: T.Endpoints.INTERACTIONS,
                    body: _,
                    timeout: 3e3
                }, e => {
                    S(C, p, E, e)
                })
            }, N = (e, t, n) => {
                null == n && null != t && i.default.sendClydeError(e, t)
            }, S = (e, t, n, l) => {
                if (!l.ok) {
                    if (!l.hasErr) {
                        var a;
                        if (l.status >= 400 && l.status < 500 && l.body) {
                            if (l.body.code === T.AbortCodes.INVALID_FORM_BODY && l.body.errors) {
                                let a = (0, E.getFirstSkemaError)(l.body.errors);
                                null != a && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === a.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === a.code) && r.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: t,
                                    guildId: n
                                }), (0, f.setFailed)(e, void 0, null == a ? void 0 : a.message);
                                return
                            }(0, f.setFailed)(e, void 0, l.body.message);
                            return
                        }(0, f.setFailed)(e, null === (a = l.body) || void 0 === a ? void 0 : a.code);
                        return
                    }(0, f.setFailed)(e)
                }
            };
            (l = a || (a = {}))[l.SENDING = 0] = "SENDING", l[l.CREATED = 1] = "CREATED", l[l.FAILED = 2] = "FAILED", l[l.TIMED_OUT = 3] = "TIMED_OUT";
            let _ = (e, t) => {
                var n;
                let l = null == t ? void 0 : t.state,
                    u = e.state === T.MessageStates.SENT && m(e.id) < Date.now();
                let r = e.state === T.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : o.default.extractTimestamp(n) + 3e3) < Date.now(),
                    i = (null == t ? void 0 : t.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    d = e.isCommandType();
                if (i && l === p.InteractionState.QUEUED || d && e.state === T.MessageStates.SENDING && null != t) return a.SENDING;
                if (i && l === p.InteractionState.CREATED || e.hasFlag(T.MessageFlags.LOADING) && !u) return a.CREATED;
                if (null != e.interaction && e.hasFlag(T.MessageFlags.LOADING) && u) return a.TIMED_OUT;
                else if (null != e.interaction && !e.hasFlag(T.MessageFlags.LOADING) && r) return a.TIMED_OUT;
                else if (d && e.state === T.MessageStates.SEND_FAILED) return a.FAILED
            };

            function M(e) {
                var t;
                let n = e.options;
                for (;
                    (null === (t = n) || void 0 === t ? void 0 : t.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let e of null != n ? n : [])
                    if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFirstSkemaError: function() {
                    return a
                }
            });
            let l = "_errors";

            function a(e) {
                return function e(t, n) {
                    let a = t[l];
                    if (null != a && Array.isArray(a)) return a[0];
                    for (let [a, o] of Object.entries(t))
                        if (a !== l && null != o && "object" == typeof o) return e(o, null != n ? n : a);
                    return null
                }(e, void 0)
            }
        }
    }
]);