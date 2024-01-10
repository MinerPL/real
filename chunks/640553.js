            "use strict";
            n.r(t), n.d(t, {
                ChatButton: function() {
                    return T
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("446674"),
                o = n("255397"),
                d = n("191145"),
                c = n("660478"),
                f = n("18494"),
                h = n("191542"),
                p = n("378765"),
                m = n("115531"),
                E = n("585513"),
                C = n("981913"),
                S = n("49111"),
                g = n("782340");

            function _(e) {
                let t = (0, u.useStateFromStores)([h.default], () => !(0, r.isEmpty)(h.default.getTypingUsers(e)), [e]),
                    n = (0, u.useStateFromStores)([f.default], () => f.default.getVoiceChannelId() === e, [e]),
                    {
                        unreadCount: a,
                        mentionCount: l
                    } = (0, u.useStateFromStoresObject)([c.default], () => ({
                        unreadCount: c.default.getUnreadCount(e),
                        mentionCount: c.default.getMentionCount(e)
                    }), [e]);
                return {
                    unreadCount: a,
                    mentionCount: l,
                    voiceChannelIsSelected: n,
                    isTyping: t
                }
            }

            function I(e) {
                let {
                    className: t,
                    channelId: n
                } = e, {
                    unreadCount: l,
                    mentionCount: s,
                    isTyping: i,
                    voiceChannelIsSelected: r
                } = _(n);
                return (0, a.jsx)(E.default, {
                    className: t,
                    unreadCount: l,
                    mentionCount: s,
                    isTyping: i,
                    canBadge: r
                })
            }

            function T(e) {
                let t, {
                        channelId: n,
                        className: s,
                        showingClassName: r,
                        onClick: c,
                        inPopout: f,
                        showRequestToSpeakSidebar: h,
                        toggleRequestToSpeakSidebar: E,
                        ...T
                    } = e,
                    {
                        disabled: v
                    } = T,
                    x = l.useRef(null),
                    N = (0, u.useStateFromStores)([d.default], () => d.default.getChatOpen(n), [n]),
                    {
                        isShowing: A,
                        unreadCount: M,
                        mentionCount: R
                    } = function(e) {
                        let {
                            unreadCount: t,
                            mentionCount: n,
                            isTyping: a
                        } = _(e), [s, i] = l.useState(!1);
                        return l.useEffect(() => {
                            i(t > 0);
                            let e = setTimeout(() => {
                                i(!1)
                            }, m.TOAST_LINGER_MS);
                            return () => {
                                clearTimeout(e), i(!1)
                            }
                        }, [t]), {
                            isShowing: s || n > 0 || a,
                            unreadCount: t,
                            mentionCount: n
                        }
                    }(n),
                    j = l.useCallback(() => {
                        null == c || c(), !N && h && (null == E || E()), o.default.updateChatOpen(n, !N)
                    }, [n, N, c, h, E]),
                    L = l.useCallback(e => {
                        let {
                            className: t
                        } = e;
                        return (0, a.jsx)(I, {
                            className: t,
                            channelId: n
                        })
                    }, [n]),
                    O = l.useCallback(() => {
                        var e;
                        null === (e = x.current) || void 0 === e || e.focus()
                    }, []);
                (0, p.useComponentAction)({
                    event: S.ComponentActions.FOCUS_CHAT_BUTTON,
                    handler: v ? null : O
                });
                let [y, b] = l.useState(!1), P = l.useCallback(() => {
                    f && b(!0)
                }, [f]);
                (0, p.useComponentAction)({
                    event: S.ComponentActions.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
                    handler: P
                }), l.useEffect(() => {
                    let e;
                    return y && (e = setTimeout(() => {
                        b(!1)
                    }, 3e3)), () => {
                        clearTimeout(e)
                    }
                }, [y]), t = f && v ? g.default.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : N ? g.default.Messages.VIDEO_CALL_HIDE_CHAT : g.default.Messages.VIDEO_CALL_SHOW_CHAT;
                let D = [t];
                return R > 0 && D.push(g.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
                    mentionCount: R
                })), M > 0 && D.push(g.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), (0, a.jsx)(C.default, {
                    buttonRef: x,
                    onClick: j,
                    label: t,
                    "aria-label": D.join(", "),
                    iconComponent: L,
                    tooltipPosition: "bottom",
                    wrapperClassName: i(s, null != r && {
                        [r]: A
                    }),
                    forceTooltipOpen: y,
                    ...T
                })
            }