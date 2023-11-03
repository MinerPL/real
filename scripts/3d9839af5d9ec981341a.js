(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31669"], {
        827560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                u = n("446674"),
                a = n("77078"),
                o = n("244201"),
                i = n("778588"),
                r = n("144747"),
                s = n("49111");

            function d() {
                let e = (0, a.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, u.useStateFromStores)([r.default], () => r.default.isOpen()),
                    n = (0, u.useStateFromStores)([i.default], () => i.default.hasLayers()),
                    [d, c] = l.useState(!1),
                    f = (0, o.useWindowDispatch)();
                return l.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return f.subscribe(s.ComponentActions.POPOUT_SHOW, e), f.subscribe(s.ComponentActions.POPOUT_HIDE, t), () => {
                        f.unsubscribe(s.ComponentActions.POPOUT_SHOW, e), f.unsubscribe(s.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [f]), e || t || d || n
            }
        },
        292381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            class l extends Map {
                set(e, t) {
                    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
                }
                constructor(e) {
                    super(), this.maxSize = e
                }
            }
            var u = l
        },
        157945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("884691"),
                u = n("917351"),
                a = n("446674"),
                o = n("827560"),
                i = n("244201"),
                r = n("206230"),
                s = n("659500"),
                d = n("49111");
            let c = (0, u.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    u = (0, a.useStateFromStores)([r.default], () => r.default.keyboardModeEnabled),
                    f = (0, o.default)(),
                    [m, E] = l.useState(!1),
                    p = (0, i.useWindowDispatch)();
                return l.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        f && (p.dispatch(d.ComponentActions.POPOUT_CLOSE), s.ComponentDispatch.dispatch(d.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, f, t, p]), l.useEffect(() => {
                    var l, a, o;
                    if (u || !m || !t) return;
                    let i = f;

                    function r(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !i && c(e)
                        }, 100)
                    }
                    return null === (l = e.current) || void 0 === l || l.addEventListener("focusout", r), (null === (a = n.document.activeElement) || void 0 === a ? void 0 : a.tagName) !== "IFRAME" && !i && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", r), i = !0
                    }
                }, [t, m, u, e, n, f]), E
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            let l = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function u(e) {
                let {
                    allowPopups: t
                } = e, n = l;
                return t && (n = [...l, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return h
                }
            });
            var l = n("37983"),
                u = n("884691"),
                a = n("414456"),
                o = n.n(a),
                i = n("841076"),
                r = n("748820"),
                s = n("446674"),
                d = n("292687"),
                c = n("614818"),
                f = n("161778"),
                m = n("659500"),
                E = n("157945"),
                p = n("828466"),
                I = n("954016"),
                T = n("49111"),
                _ = n("165544");

            function S(e) {
                let {
                    url: t,
                    className: n,
                    style: a,
                    onLoad: o,
                    shouldRefocus: _,
                    queryParams: S,
                    allowPopups: h = !1,
                    referrerPolicy: N = "origin"
                } = e, A = (0, s.useStateFromStores)([d.default], () => d.default.getWindow(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), C = (0, i.useMemoOne)(() => (0, r.v4)(), [t]), v = u.useRef(null), O = (0, E.default)(v, _, null == A ? window : A), M = {
                    ...S,
                    frame_id: C,
                    platform: I.ActivityPlatform.DESKTOP
                }, [R, g] = u.useState(!1), L = f.default.theme, D = {
                    ...a
                };
                return L === T.ThemeTypes.LIGHT ? D.colorScheme = "light" : D.colorScheme = "dark", u.useEffect(() => (m.ComponentDispatch.dispatch(T.ComponentActions.IFRAME_MOUNT, {
                    id: C
                }), () => {
                    m.ComponentDispatch.dispatch(T.ComponentActions.IFRAME_UNMOUNT, {
                        id: C
                    })
                }), [C]), m.ComponentDispatch.subscribe(T.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    g(t)
                }), R && (D.pointerEvents = "none"), null != t ? (0, l.jsx)("iframe", {
                    style: D,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: N,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), v.current = e.target, O(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, M], null != t ? t : "")
                    },
                    sandbox: (0, p.default)({
                        allowPopups: h
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(M))
                }) : null
            }

            function h(e) {
                let {
                    onLoad: t
                } = e, [n, a] = u.useState(!1), i = u.useCallback(e => {
                    a(!0), null == t || t(e)
                }, [t]);
                return (0, l.jsxs)("div", {
                    className: _.fillParent,
                    children: [!n && (0, l.jsx)("div", {
                        className: o(_.fillParent, _.iframePlaceholder)
                    }), (0, l.jsx)("div", {
                        className: o(_.fillParent, n ? void 0 : _.hiddenIframeContainer),
                        children: (0, l.jsx)(S, {
                            ...e,
                            onLoad: i
                        })
                    })]
                })
            }
        },
        470055: function(e, t, n) {
            "use strict";
            let l, u, a, o, i;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return s
                },
                default: function() {
                    return _
                }
            });
            var r, s, d = n("627445"),
                c = n.n(d),
                f = n("446674"),
                m = n("913144"),
                E = n("819689"),
                p = n("798609"),
                I = n("274800");
            (r = s || (s = {}))[r.IN_FLIGHT = 0] = "IN_FLIGHT", r[r.ERRORED = 1] = "ERRORED", r[r.SUCCEEDED = 2] = "SUCCEEDED";
            class T extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : u
                }
            }
            T.displayName = "InteractionModalStore";
            var _ = new T(m.default, {
                LOGOUT: function() {
                    return l = null, u = null, a = null, o = null, i = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === i && (E.default.deleteMessage(o, a, !0), a = null, o = null, i = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === i && (E.default.deleteMessage(o, a, !0), a = null, o = null, i = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: r
                    } = e;
                    switch (r.interactionType) {
                        case p.InteractionTypes.APPLICATION_COMMAND:
                            return a = t, o = r.channelId, i = n, !1;
                        case p.InteractionTypes.MODAL_SUBMIT:
                            return c(null == l || u === s.ERRORED || u === s.SUCCEEDED, "cannot submit multiple modals at once"), l = n, u = s.IN_FLIGHT, setTimeout(() => {
                                l === n && u === s.IN_FLIGHT && (0, I.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = s.SUCCEEDED, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = s.ERRORED, !0)
                }
            })
        },
        732523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return M
                },
                useIframeModalState: function() {
                    return R
                }
            });
            var l = n("884691"),
                u = n("627445"),
                a = n.n(u),
                o = n("446674"),
                i = n("872717"),
                r = n("913144"),
                s = n("798609"),
                d = n("763898"),
                c = n("711562"),
                f = n("274800"),
                m = n("271938"),
                E = n("42203"),
                p = n("26989"),
                I = n("162771"),
                T = n("315102"),
                _ = n("299039"),
                S = n("812684"),
                h = n("470055"),
                N = n("524094"),
                A = n("49111"),
                C = n("782340");
            let v = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function O(e) {
                return l.useMemo(() => {
                    let t = I.default.getGuildId(),
                        n = null != t && null != e.bot ? p.default.getMember(t, e.bot.id) : void 0,
                        l = T.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        u = null != n && null != e.bot ? e.bot.username : e.name,
                        a = (0, c.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: u,
                        applicationBaseUrl: a
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function M(e, t) {
                var n;
                let {
                    application: u,
                    customId: c,
                    components: p,
                    channelId: I
                } = e, T = null === (n = E.default.getChannel(I)) || void 0 === n ? void 0 : n.guild_id, N = (0, d.default)(), [M, R] = l.useState(null), [L, D] = l.useState(null), b = (0, o.useStateFromStores)([h.default], () => h.default.getModalState(L), [L]), w = l.useMemo(() => (0, S.createComponents)(p, u.id, T), [p, u.id, T]), y = l.useRef(new Set), U = l.useCallback(() => {
                    R(null), D(null), v(y.current) && D(function(e, t) {
                        let n = _.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            u = E.default.getChannel(l);
                        a(null != u, "expected channel");
                        let o = g(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: s.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let r = () => {
                            (null == t || !t.aborted) && i.default.post({
                                url: A.Endpoints.INTERACTIONS,
                                body: {
                                    type: s.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: u.id,
                                    guild_id: u.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: o
                                    },
                                    session_id: m.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(r, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return r(), n
                    }(e, N))
                }, [N, e]);
                l.useEffect(() => {
                    b === h.InteractionModalState.SUCCEEDED && (r.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: c
                    }), t()), b === h.InteractionModalState.ERRORED && R(C.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [L, b, t, c]);
                let {
                    applicationIconURL: x,
                    applicationName: P
                } = O(u);
                return {
                    components: w,
                    applicationIconURL: x,
                    applicationName: P,
                    submissionState: b,
                    error: M,
                    validators: y.current,
                    onSubmit: U
                }
            }

            function R(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: o
                } = O(t), i = E.default.getChannel(e.channelId);
                a(null != i, "channel should not be null");
                let r = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    s = {
                        instance_id: r,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != i.guild_id && "" !== i.guild_id && (s.guild_id = i.guild_id);
                let d = new URL(null != o ? o : "");
                d.pathname = e.iframePath;
                let c = d.toString();
                return {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: o,
                    queryParams: s,
                    iframeUrl: c
                }
            }
            let g = (e, t, n) => t.map((t, l) => {
                var u;
                let o = [...n, l];
                switch (t.type) {
                    case s.ComponentType.ACTION_ROW:
                        return {
                            type: t.type, components: g(e, null !== (u = t.components) && void 0 !== u ? u : [], o)
                        };
                    case s.ComponentType.INPUT_TEXT: {
                        let n = N.default.getInteractionComponentState(e, o);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case s.ComponentType.STRING_SELECT: {
                        let n = N.default.getInteractionComponentState(e, o);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        a(!1, "unreachable")
                }
            })
        },
        524094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("292381");
            let o = new a.default(196606),
                i = 0,
                r = new a.default(196606),
                s = new a.default(196606);

            function d(e) {
                return e.join("-")
            }

            function c(e, t, n) {
                var l;
                let u = d(t),
                    a = null !== (l = o.get(e)) && void 0 !== l ? l : new Map;
                a.set(u, n), o.set(e, a), i++
            }

            function f(e) {
                let t = r.get(e);
                null != t && s.delete(t), r.delete(e), o.delete(e), i++
            }
            class m extends l.default.Store {
                getInteractionComponentStates() {
                    return o
                }
                getInteractionComponentStateVersion() {
                    return i
                }
                getInteractionComponentState(e, t) {
                    var n;
                    let l = o.get(e);
                    if (null == l) return null;
                    let u = d(t);
                    return null !== (n = l.get(u)) && void 0 !== n ? n : null
                }
            }
            m.displayName = "LocalInteractionComponentStateStore";
            var E = new m(u.default, {
                LOGOUT: function() {
                    o.clear(), r.clear(), s.clear(), i++
                },
                QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        indices: l,
                        state: u
                    } = e;
                    r.set(t, n), s.set(n, {
                        messageId: t,
                        indices: l
                    }), c(t, l, u)
                },
                SET_INTERACTION_COMPONENT_STATE: function(e) {
                    let {
                        id: t,
                        indices: n,
                        state: l
                    } = e;
                    c(t, n, l)
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (!o.has(t)) return !1;
                    f(t)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.id || !o.has(t.id)) return !1;
                    f(t.id)
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = s.get(t);
                    if (null == n) return !1;
                    r.delete(n.messageId), s.delete(t), i++
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = s.get(t);
                    if (null == n) return !1;
                    ! function(e) {
                        let {
                            indices: t,
                            messageId: n
                        } = e, l = d(t), u = o.get(n);
                        if (null == u || !u.has(l)) return;
                        u.delete(l), 0 === u.size && o.delete(n), i++
                    }(n)
                },
                CLEAR_INTERACTION_MODAL_STATE: function(e) {
                    let {
                        id: t
                    } = e;
                    o.delete(t), i++
                }
            })
        },
        168984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                u = n("884691"),
                a = n("769846"),
                o = n("77078"),
                i = n("817477"),
                r = n("944654"),
                s = n("944832"),
                d = n("79798"),
                c = n("945330"),
                f = n("159885"),
                m = n("732523"),
                E = n("988268"),
                p = n("782340"),
                I = n("442605");
            let T = (0, f.cssValueToNumber)(a.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
                _ = (0, f.cssValueToNumber)(a.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
                S = (0, f.cssValueToNumber)(a.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
                h = (0, f.cssValueToNumber)(a.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

            function N(e) {
                var t;
                let {
                    title: n,
                    onClose: a
                } = e, {
                    applicationIconURL: f,
                    applicationName: N,
                    queryParams: A,
                    iframeUrl: C
                } = (0, m.useIframeModalState)(e), {
                    width: v,
                    height: O
                } = (0, r.useScreenDimensions)(), M = u.useMemo(() => {
                    let e = Math.min((O - h - 2 * S) * 16 / 9, _);
                    return Math.max(T, Math.min(v - 2 * S, e))
                }, [v, O]);
                return (0, l.jsx)(o.ModalRoot, {
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    className: I.root,
                    children: (0, l.jsxs)("div", {
                        style: {
                            width: M
                        },
                        children: [(0, l.jsxs)(o.ModalHeader, {
                            separator: !1,
                            className: I.modalHeader,
                            children: [(0, l.jsx)(o.Avatar, {
                                src: f,
                                size: o.AvatarSizes.SIZE_32,
                                "aria-label": N,
                                className: I.applicationIcon
                            }), (0, l.jsxs)("div", {
                                className: I.flexRow,
                                children: [(0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(o.Heading, {
                                        variant: "heading-sm/bold",
                                        children: N
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "interactive-normal",
                                        children: n
                                    })]
                                }), (0, l.jsx)(d.default, {
                                    type: E.BotTagTypes.BOT,
                                    className: I.botTag,
                                    verified: null === (t = e.application.bot) || void 0 === t ? void 0 : t.verified
                                })]
                            }), (0, l.jsx)(o.Button, {
                                onClick: a,
                                innerClassName: I.closeButton,
                                className: I.closeButtonContainer,
                                look: o.Button.Looks.BLANK,
                                size: o.Button.Sizes.NONE,
                                "aria-label": p.default.Messages.DISMISS,
                                children: (0, l.jsx)(c.default, {
                                    className: I.closeIcon
                                })
                            })]
                        }), (0, l.jsx)(s.default, {
                            aspectRatio: 16 / 9,
                            children: (0, l.jsx)(i.EmbedIFrameWithLoadingBackground, {
                                url: C,
                                shouldRefocus: !0,
                                className: I.iframe,
                                queryParams: A
                            })
                        })]
                    })
                })
            }
        },
        614818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = {
                HANDSHAKE: 0,
                FRAME: 1,
                CLOSE: 2,
                HELLO: 3
            }
        },
        944654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useScreenDimensions: function() {
                    return u
                }
            });
            var l = n("884691");

            function u() {
                var e, t;
                let [n, u] = l.useState({
                    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
                    height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
                });
                return l.useLayoutEffect(() => {
                    function e() {
                        let e = window.innerWidth,
                            t = window.innerHeight;
                        u({
                            width: e,
                            height: t
                        })
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), n
            }
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                a = n.n(u),
                o = n("561445"),
                i = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: u,
                        children: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: a(o.outer, u),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, l.jsx)("div", {
                            className: o.inner,
                            children: i
                        })
                    })
                }
        }
    }
]);