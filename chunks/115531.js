            "use strict";
            n.r(t), n.d(t, {
                TOAST_LINGER_MS: function() {
                    return R
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("907002"),
                o = n("446674"),
                d = n("77078"),
                c = n("913144"),
                f = n("255397"),
                h = n("819689"),
                p = n("390236"),
                m = n("95045"),
                E = n("574073"),
                C = n("24373"),
                S = n("41170"),
                g = n("377253"),
                _ = n("27618"),
                I = n("93427"),
                T = n("315102"),
                v = n("449008"),
                x = n("439932"),
                N = n("49111"),
                A = n("719347"),
                M = n("858327");
            let R = 1e4;

            function j(e) {
                var t;
                let {
                    message: n
                } = e, s = (0, o.useStateFromStores)([_.default], () => _.default.isBlocked(n.author.id)), r = (0, E.useNullableMessageAuthor)(n), u = l.useContext(p.default), [c, g] = l.useState(!1), v = l.useCallback(e => {
                    "A" !== e.target.nodeName && (f.default.updateChatOpen(n.channel_id, !0), h.default.jumpToMessage({
                        channelId: n.channel_id,
                        messageId: n.id,
                        flash: !0
                    }))
                }, [n.channel_id, n.id]), x = null != n.content && "" !== n.content ? (0, m.default)(n, {
                    isInteracting: c
                }).content : null, {
                    contentPlaceholder: N,
                    renderedContent: R,
                    icon: j
                } = (0, I.renderSingleLineMessage)(n, x, s, M.messageContent, {
                    iconClass: M.messageContentIcon,
                    iconSize: A.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                }), L = (0, C.getMessageStickers)(n), O = L.length > 0, y = O ? L.map(e => (0, a.jsx)(S.default, {
                    className: M.sticker,
                    size: 128,
                    sticker: e,
                    isInteracting: c
                }, e.id)) : null;
                return (0, a.jsxs)(d.Clickable, {
                    className: M.toast,
                    onMouseEnter: () => {
                        g(!0)
                    },
                    onMouseLeave: () => {
                        g(!1)
                    },
                    onClick: v,
                    children: [(0, a.jsxs)("div", {
                        className: i(M.messageContentWrapper, {
                            [M.mentioned]: n.mentioned
                        }),
                        children: [null !== (t = null != R ? R : y) && void 0 !== t ? t : (0, a.jsx)("span", {
                            children: N
                        }), null != y ? null : j]
                    }), (0, a.jsx)("img", {
                        alt: "",
                        src: (null == r ? void 0 : r.guildMemberAvatar) != null && null != u ? (0, T.getGuildMemberAvatarURLSimple)({
                            guildId: u,
                            userId: n.author.id,
                            avatar: r.guildMemberAvatar
                        }) : n.author.getAvatarURL(u, 32),
                        className: M.avatar
                    })]
                })
            }

            function L(e) {
                let {
                    channelId: t,
                    className: n
                } = e, [s, d] = l.useState(!1), {
                    toastsHidden: f,
                    toastMessages: h
                } = function(e) {
                    var t;
                    let {
                        channelId: n,
                        isFrozen: a,
                        count: s,
                        lingerMs: i
                    } = e, [r, u] = l.useState([]), [d, f] = l.useState(!1), h = l.useRef(null), p = l.useRef(), m = l.useCallback(() => {
                        u([]), f(!0)
                    }, []);
                    l.useEffect(() => {
                        function e(e) {
                            let {
                                channelId: t,
                                message: a
                            } = e;
                            t === n && a.type !== N.MessageTypes.STAGE_START && a.type !== N.MessageTypes.STAGE_END && a.type !== N.MessageTypes.STAGE_TOPIC && a.type !== N.MessageTypes.STAGE_SPEAKER && a.type !== N.MessageTypes.STAGE_RAISE_HAND && (clearTimeout(p.current), p.current = setTimeout(m, i), u(e => [...e, a.id]))
                        }
                        return c.default.subscribe("MESSAGE_CREATE", e), () => {
                            c.default.unsubscribe("MESSAGE_CREATE", e)
                        }
                    }, [n, m, s, i]), l.useEffect(() => () => {
                        clearTimeout(p.current)
                    }, []), l.useEffect(() => {
                        r.length > 3 && u(e => {
                            let t = e.length - 3;
                            return [...e.slice(t)]
                        })
                    }, [r]), a && null == h.current ? h.current = r : !a && null != h.current && (h.current = null);
                    let E = null !== (t = h.current) && void 0 !== t ? t : r,
                        C = (0, o.useStateFromStoresArray)([g.default], () => E.map(e => g.default.getMessage(n, e)), [n, E]);
                    return {
                        toastsHidden: d,
                        toastMessages: C.filter(v.isNotNullish)
                    }
                }({
                    channelId: t,
                    isFrozen: s,
                    count: 3,
                    lingerMs: R
                }), p = l.useRef({}), [m, E] = l.useState({}), C = l.useCallback((e, t) => {
                    null == t ? delete p.current[e] : p.current[e] = t
                }, []);
                l.useLayoutEffect(() => {
                    let e = {},
                        t = 0;
                    for (let a of h) {
                        var n;
                        let l = null !== (n = p.current[a.id]) && void 0 !== n ? n : 0;
                        e[a.id] = t, t += l + 8
                    }!(0, r.isEqual)(e, m) && E(e)
                }, [h]);
                let S = h.map(e => ({
                        message: e,
                        height: p.current[e.id],
                        y: m[e.id]
                    })),
                    _ = (0, u.useTransition)(S, {
                        keys: e => e.message.id,
                        from: () => ({
                            opacity: 0
                        }),
                        enter: e => {
                            let {
                                y: t
                            } = e;
                            return {
                                opacity: 1,
                                translateY: t
                            }
                        },
                        update: e => {
                            let {
                                y: t
                            } = e;
                            return {
                                translateY: t
                            }
                        },
                        leave: e => {
                            let {
                                height: t,
                                y: n
                            } = e;
                            return {
                                opacity: 0,
                                translateY: f ? n : -(null != t ? t : 0) - 8,
                                pointerEvents: "none"
                            }
                        }
                    });
                return (0, a.jsx)("div", {
                    className: i(n, (0, x.getThemeClass)(N.ThemeTypes.DARK)),
                    onMouseEnter: () => {
                        d(!0)
                    },
                    onMouseLeave: () => {
                        d(!1)
                    },
                    children: _((e, t) => (0, a.jsx)(u.animated.div, {
                        ref: e => C(t.message.id, null != e ? e.offsetHeight : null),
                        className: M.toastWrapper,
                        style: e,
                        children: (0, a.jsx)(j, {
                            message: t.message
                        })
                    }))
                })
            }