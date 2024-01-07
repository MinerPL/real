            "use strict";
            n.r(t), n.d(t, {
                useClickMessageAuthorUsername: function() {
                    return v
                },
                useClickReferencedMessageAuthorUsername: function() {
                    return x
                },
                useClickInteractionUserUsername: function() {
                    return O
                },
                useClickMessageAuthorAvatar: function() {
                    return R
                },
                useClickReferencedMessageAuthorAvatar: function() {
                    return y
                },
                useClickInteractionUserAvatar: function() {
                    return P
                },
                useContextMenuMessage: function() {
                    return D
                },
                useContextMenuUser: function() {
                    return j
                },
                useContextMenuModerateUser: function() {
                    return U
                },
                useContextMenuRaidAlert: function() {
                    return b
                },
                useClickMessage: function() {
                    return G
                },
                useHoveredMessage: function() {
                    return B
                },
                useFocusInside: function() {
                    return k
                },
                useClickReply: function() {
                    return w
                },
                useClickInteractionCommandName: function() {
                    return H
                }
            }), n("702976"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("404118"),
                i = n("272030"),
                r = n("819689"),
                o = n("352674"),
                u = n("244201"),
                d = n("42203"),
                c = n("836417"),
                f = n("377253"),
                m = n("697218"),
                E = n("659500"),
                _ = n("791776"),
                h = n("568734"),
                p = n("773336"),
                I = n("158998"),
                T = n("441823"),
                g = n("913491"),
                C = n("456936"),
                S = n("49111"),
                A = n("782340");

            function N(e, t, n) {
                return s.useCallback(() => {
                    n({
                        [e]: !t
                    })
                }, [e, n, t])
            }

            function M(e, t, n) {
                return s.useCallback(a => {
                    let s = m.default.getUser(e);
                    if (null == s) return;
                    if (a.preventDefault(), a.stopPropagation(), !a.shiftKey) {
                        n();
                        return
                    }
                    let l = "@".concat(I.default.getUserTag(s, {
                            decoration: "never"
                        })),
                        i = "<@".concat(e, ">");
                    E.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.INSERT_TEXT, {
                        plainText: l,
                        rawText: i
                    }), o.default.startTyping(t)
                }, [e, t, n])
            }

            function v(e, t, n, a) {
                let s = N("usernameProfile", n, a);
                return M(e.author.id, t.id, s)
            }

            function x(e, t, n, a) {
                let s = N("referencedUsernameProfile", n, a);
                return M(null == e ? void 0 : e.author.id, t.id, s)
            }

            function O(e, t, n, a) {
                let s = N("interactionUsernameProfile", n, a);
                return M(null == e ? void 0 : e.user.id, t.id, s)
            }

            function L(e) {
                return s.useCallback(t => {
                    t.preventDefault(), t.stopPropagation(), e()
                }, [e])
            }

            function R(e, t) {
                let n = N("avatarProfile", e, t);
                return L(n)
            }

            function y(e, t) {
                let n = N("referencedAvatarProfile", e, t);
                return L(n)
            }

            function P(e, t) {
                let n = N("interactionAvatarProfile", e, t);
                return L(n)
            }

            function D(e, t, l, r) {
                let {
                    id: o
                } = t, {
                    id: m,
                    flags: E
                } = e, _ = (0, h.hasFlag)(E, S.MessageFlags.EPHEMERAL), I = (0, g.default)(e), T = (0, u.useAppContext)();
                return s.useCallback((e, t) => {
                    if (_) return;
                    if (!p.isPlatformEmbedded) {
                        let t = e.target;
                        if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
                        let n = window.getSelection();
                        if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
                    }
                    let s = d.default.getChannel(o),
                        u = f.default.getMessage(o, m),
                        E = c.default.isEditing(o, m);
                    null != s && null != u && !E && (l({
                        contextMenu: !0
                    }), (0, i.openContextMenuLazy)(e, async () => {
                        if (I) {
                            let {
                                default: e
                            } = await n.el("385065").then(n.bind(n, "385065"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                message: u,
                                channel: s,
                                attachment: t
                            })
                        } {
                            let {
                                default: e
                            } = await n.el("261649").then(n.bind(n, "261649"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                message: u,
                                channel: s,
                                attachment: t,
                                shouldHideMediaOptions: r
                            })
                        }
                    }, {
                        onClose: () => l({
                            contextMenu: !1
                        }),
                        context: T
                    }))
                }, [_, o, m, l, T, I, r])
            }

            function j(e, t) {
                return s.useCallback(n => {
                    let a = m.default.getUser(e),
                        s = d.default.getChannel(t);
                    null != a && null != s && (n.stopPropagation(), (0, T.openUserContextMenu)(n, a, s))
                }, [e, t])
            }

            function U(e, t, n) {
                return s.useCallback(a => {
                    let s = m.default.getUser(e),
                        l = d.default.getChannel(t);
                    null != s && null != l && (a.stopPropagation(), (0, T.openModerateUserContextMenu)(a, {
                        user: s,
                        channel: l,
                        moderationAlertId: n
                    }))
                }, [e, t, n])
            }

            function b(e, t) {
                return s.useCallback(n => {
                    let a = m.default.getUser(e),
                        s = d.default.getChannel(t);
                    null != a && null != s && (n.stopPropagation(), (0, T.openModerationRaidContextMenu)(n, a, s.guild_id))
                }, [e, t])
            }

            function G(e, t) {
                let {
                    id: n
                } = e, {
                    id: a
                } = t;
                return s.useCallback(e => {
                    e.altKey && (e.preventDefault(), (0, C.default)(a, n))
                }, [a, n])
            }

            function B(e, t, n) {
                let a = "".concat(e, ":").concat(t),
                    l = s.useRef(n),
                    [i, r] = s.useState(n);
                l.current = i || l.current;
                let o = s.useCallback(() => {
                        !i && (E.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, a, !0), r(!0))
                    }, [i, a]),
                    u = s.useCallback(() => {
                        E.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, a, !1), r(!1)
                    }, [a]);
                return {
                    hasHovered: l.current,
                    isHovered: i,
                    handleMouseEnter: o,
                    handleMouseLeave: u
                }
            }

            function k(e, t) {
                let [n, a] = s.useState(!1), [l, i] = s.useState(!1), r = s.useCallback(t => {
                    var n, s;
                    let l = null !== (s = null === (n = (0, _.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
                    (t.target === t.currentTarget || t.currentTarget.contains(l)) && (i(!0), a(!0)), null != e && e(t)
                }, [e]), o = s.useCallback(e => {
                    var n, s;
                    let l = null !== (s = null === (n = (0, _.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== s ? s : null;
                    (e.target === e.currentTarget || !e.currentTarget.contains(l)) && a(!1), null != t && t(e)
                }, [t]);
                return {
                    handleFocus: r,
                    handleBlur: o,
                    isFocused: n,
                    hasFocused: l
                }
            }

            function w(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return s.useCallback(() => {
                    null != t && (n ? l.default.show({
                        title: A.default.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: A.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                            name: t.author.username
                        }),
                        confirmText: A.default.Messages.OKAY
                    }) : r.default.jumpToMessage({
                        channelId: t.channel_id,
                        messageId: t.id,
                        flash: !0,
                        returnMessageId: e.id
                    }))
                }, [n, e.id, t])
            }

            function H(e, t) {
                let n = N("interactionData", e, t);
                return s.useCallback(e => {
                    e.preventDefault(), e.stopPropagation(), n()
                }, [n])
            }