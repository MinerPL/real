            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return b
                }
            }), l("222007");
            var n, a, s = l("37983"),
                r = l("884691"),
                i = l("917351"),
                u = l("446674"),
                d = l("77078"),
                o = l("970728"),
                c = l("206230"),
                E = l("526887"),
                f = l("960757"),
                _ = l("923959"),
                I = l("305961"),
                T = l("683911"),
                N = l("476765"),
                h = l("354023"),
                v = l("686904"),
                m = l("398604"),
                S = l("322224"),
                g = l("152475"),
                C = l("799547"),
                x = l("189443"),
                p = l("841363"),
                A = l("558286"),
                O = l("560309"),
                R = l("151859"),
                M = l("299342"),
                L = l("499950"),
                D = l("27754"),
                y = l("745049"),
                j = l("49111"),
                V = l("782340"),
                U = l("738021");
            let {
                INVITE_OPTIONS_7_DAYS: G,
                INVITE_OPTIONS_UNLIMITED: P
            } = h.default;

            function H(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: l
                } = r.useContext(E.ConfettiCannonContext);
                return r.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let n = e.getBoundingClientRect();
                    l({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.left - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.left + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), l({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.right - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.right + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [l, t]), null
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    guildEventId: a,
                    editBroadcastInfoData: o,
                    isEdit: E,
                    formErrors: f,
                    transitionState: _,
                    loading: I,
                    error: h,
                    onChange: v,
                    onSave: S,
                    onClose: g,
                    createdEvent: C
                } = e, x = (0, N.useUID)(), p = r.useRef(l), D = !(0, i.isEqual)(p.current, l), y = r.useMemo(() => [{
                    slideId: 0,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == f.entity,
                    userErrorMessage: f.entity
                }, {
                    slideId: 1,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == f.schedule && null == f.topic && (!E || D),
                    userErrorMessage: f.schedule
                }, {
                    slideId: 2,
                    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [f, E, D]), j = Object.keys(n).length, G = (0, m.isGuildScheduledEventActive)(l), P = e => Math.max(0, Math.min(e, j - 1)), [B, b] = r.useState(G ? 1 : 0), [F, w] = r.useState(!1), k = r.useMemo(() => y.slice(0, B + 1).map(e => e.valid).every(Boolean), [y, B]), Y = B >= y.length ? 3 : y[P(B)].slideId, z = 3 === Y, Z = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                Z(z);
                let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                    W = r.useRef(null),
                    K = e => {
                        w(!1), b(P(e))
                    };
                r.useEffect(() => {
                    null != C && K(3)
                }, [null == C ? void 0 : C.id, K]);
                let q = () => {
                        if (!k) return;
                        let e = 2 === Y;
                        e ? S() : z ? g() : K(B + 1)
                    },
                    J = () => {
                        K(B - 1)
                    },
                    Q = V.default.Messages.NEXT;
                return 2 === Y && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: _,
                        "aria-labelledby": x,
                        size: d.ModalSize.DYNAMIC,
                        children: [!X && z ? (0, s.jsx)(H, {
                            modal: W.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: U.content,
                            scrollerRef: W,
                            children: [!z && (0, s.jsx)(T.default, {
                                steps: y.map(e => e.label),
                                stepIndex: B,
                                onClick: e => {
                                    e < B ? J() : e > B && q()
                                }
                            }), (0, s.jsxs)(d.Slides, {
                                activeSlide: Y,
                                width: 440,
                                onSlideReady: e => {
                                    w(e === Y)
                                },
                                children: [(0, s.jsx)(d.Slide, {
                                    id: 0,
                                    children: (0, s.jsx)(O.default, {
                                        guildId: t,
                                        guildEvent: l,
                                        validationErrorMessage: f.entity,
                                        isSlideReady: F,
                                        onChange: v
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 1,
                                    children: (0, s.jsx)(M.default, {
                                        guildEvent: l,
                                        guildEventId: a,
                                        guildId: t,
                                        editBroadcastInfoData: o,
                                        onChange: v,
                                        error: h,
                                        validationErrorMessage: f.schedule,
                                        isSlideReady: F
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 2,
                                    children: (0, s.jsx)(R.default, {
                                        guildId: t,
                                        guildEvent: l,
                                        guildEventId: a,
                                        error: h
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: 3,
                                    children: (0, s.jsx)(L.default, {
                                        onClose: g,
                                        event: C
                                    })
                                })]
                            })]
                        }), !z && (0, s.jsxs)(d.ModalFooter, {
                            className: U.footer,
                            children: [(0, s.jsxs)("div", {
                                className: U.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: g,
                                    children: V.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: q,
                                    disabled: !k,
                                    className: U.button,
                                    submitting: I,
                                    children: Q
                                })]
                            }), 0 !== Y && (0, s.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: J,
                                color: d.Button.Colors.LINK,
                                children: V.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: n,
                    transitionState: a,
                    onClose: c
                } = e, E = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), T = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(n), [n]), N = (0, u.useStateFromStores)([_.default], () => _.default.getDefaultChannel(t), [t]), h = (0, x.getInitialGuildEventData)(T, N), [A, O] = r.useState(h), [R] = r.useState((0, x.isEditingEvent)(T)), [M, L] = r.useState(null), U = e => {
                    var t;
                    let l = (0, g.isGuildEventInvitable)(e),
                        n = null !== (t = e.channel_id) && void 0 !== t ? t : null == N ? void 0 : N.id;
                    null != n && o.default.createInvite(n, {
                        max_age: G.value,
                        max_uses: P.value
                    }, j.InstantInviteSources.GUILD_EVENTS), l ? L(e) : c()
                }, H = (0, f.default)(E, null == T ? void 0 : T.id, A), [b, {
                    loading: F,
                    error: w
                }] = (0, v.default)(async () => {
                    if (null != M) return;
                    let e = {
                        broadcastToDirectoryChannels: H.broadcastToDirectoryChannels
                    };
                    if (R && null != n) return await S.default.saveEvent(n, A, t, e), c();
                    let l = await S.default.createGuildEvent(A, t, e);
                    return U(l.body), l
                }), k = r.useMemo(() => (0, D.default)(A, R), [A, R]);
                return (0, s.jsx)(B, {
                    guildId: t,
                    guildEvent: A,
                    guildEventId: n,
                    editBroadcastInfoData: H,
                    isEdit: R,
                    formErrors: k,
                    transitionState: a,
                    loading: F,
                    error: w,
                    onChange: e => {
                        if (null != e.entityType) {
                            var l;
                            let n = (0, p.getChannelTypeFromEntity)(e.entityType),
                                [a] = (0, C.getEventChannelsByType)(t, n);
                            e.channelId = null !== (l = null == a ? void 0 : a.id) && void 0 !== l ? l : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        O(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        let e = (null == T ? void 0 : T.scheduled_start_time) !== A.scheduledStartTime || T.scheduled_end_time !== A.scheduledEndTime || !(0, i.isEqual)(T.recurrence_rule, A.recurrenceRule);
                        null != A.recurrenceRule && R && e ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await l.el("77078").then(l.bind(l, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: V.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: V.default.Messages.SAVE_EVENT,
                                cancelText: V.default.Messages.NEVERMIND,
                                onConfirm: b,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : b()
                    },
                    onClose: c,
                    createdEvent: M
                })
            }(a = n || (n = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"