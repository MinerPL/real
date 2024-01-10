            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("884691"),
                s = n("819689"),
                l = n("267567"),
                i = n("625149"),
                r = n("300322"),
                o = n("967241"),
                u = n("845579"),
                d = n("271938"),
                c = n("42203"),
                f = n("836417"),
                h = n("26989"),
                C = n("88093"),
                p = n("377253"),
                m = n("957255"),
                E = n("306160"),
                g = n("659500"),
                S = n("773336"),
                _ = n("61400"),
                A = n("913491"),
                T = n("583022"),
                M = n("363396"),
                N = n("49111");

            function I(e) {
                return m.default.can(N.Permissions.MANAGE_MESSAGES, e)
            }
            var v = function(e, t, n) {
                let v = a.useRef(n);
                return v.current = n, a.useCallback(n => {
                    var a, L, R, x, y;
                    if (!v.current || n.target !== n.currentTarget) return;
                    let O = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                        D = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                        j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                        b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                        P = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                        F = p.default.getMessage(t, e),
                        U = c.default.getChannel(t);
                    if (null == F || null == U) return;
                    let H = d.default.getId(),
                        k = F.author.id === H;
                    switch (n.key.toLowerCase()) {
                        case "backspace":
                            O && (I(U) || k) && (n.preventDefault(), (0, M.deleteMessage)(U, F, n));
                            break;
                        case "c":
                            ((0, S.isMac)() ? b : j) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(F.content));
                            break;
                        case "e":
                            if (O) {
                                ;
                                if (a = H, L = U, R = F, !L.isSystemDM() && (0, _.default)(R, a)) n.preventDefault(), (0, M.editMessage)(U, F)
                            }
                            break;
                        case "p":
                            if (O || P) {
                                ;
                                if (x = U, y = F, !x.isSystemDM() && !(0, A.default)(y) && (I(x) || x.isPrivate())) n.preventDefault(), (0, M.pinMessage)(U, F, n)
                            }
                            break;
                        case "+":
                            (O || P) && function(e) {
                                let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
                                    n = u.RenderReactions.getSetting(),
                                    {
                                        disableReactionCreates: a
                                    } = (0, T.default)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && m.default.can(N.Permissions.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
                                    });
                                return !a && n
                            }(U) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
                                emojiPicker: !0
                            }));
                            break;
                        case "r":
                            (O || P) && (0, i.canReplyToMessage)(U, F) && (n.preventDefault(), (0, M.replyToMessage)(U, F, n));
                            break;
                        case "t":
                            if (O && (0, r.computeCanStartPublicThread)(U, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(U, F, "Message Shortcut");
                            else if (F.hasFlag(N.MessageFlags.HAS_THREAD)) {
                                let e = c.default.getChannel(F.id);
                                null != e && (O || P) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, P))
                            }
                            break;
                        case "enter":
                            D && (n.preventDefault(), (0, M.markMessageUnread)(U, F));
                            break;
                        case "escape":
                            f.default.isEditing(U.id, F.id) ? s.default.endEditMessage(U.id) : g.ComponentDispatch.dispatch(N.ComponentActions.TEXTAREA_FOCUS)
                    }
                }, [e, t])
            }