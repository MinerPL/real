            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var s = n("884691"),
                a = n("819689"),
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
                I = n("49111");

            function N(e) {
                return m.default.can(I.Permissions.MANAGE_MESSAGES, e)
            }
            var L = function(e, t, n) {
                let L = s.useRef(n);
                return L.current = n, s.useCallback(n => {
                    var s, v, x, R, y;
                    if (!L.current || n.target !== n.currentTarget) return;
                    let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
                        O = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
                        j = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
                        b = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
                        P = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
                        F = p.default.getMessage(t, e),
                        H = c.default.getChannel(t);
                    if (null == F || null == H) return;
                    let U = d.default.getId(),
                        k = F.author.id === U;
                    switch (n.key.toLowerCase()) {
                        case "backspace":
                            D && (N(H) || k) && (n.preventDefault(), (0, M.deleteMessage)(H, F, n));
                            break;
                        case "c":
                            ((0, S.isMac)() ? b : j) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(F.content));
                            break;
                        case "e":
                            if (D) {
                                ;
                                if (s = U, v = H, x = F, !v.isSystemDM() && (0, _.default)(x, s)) n.preventDefault(), (0, M.editMessage)(H, F)
                            }
                            break;
                        case "p":
                            if (D || P) {
                                ;
                                if (R = H, y = F, !R.isSystemDM() && !(0, A.default)(y) && (N(R) || R.isPrivate())) n.preventDefault(), (0, M.pinMessage)(H, F, n)
                            }
                            break;
                        case "+":
                            (D || P) && function(e) {
                                let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
                                    n = u.RenderReactions.getSetting(),
                                    {
                                        disableReactionCreates: s
                                    } = (0, T.default)({
                                        channel: e,
                                        canChat: t,
                                        renderReactions: n,
                                        canAddNewReactions: t && m.default.can(I.Permissions.ADD_REACTIONS, e),
                                        isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
                                        isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
                                        isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
                                    });
                                return !s && n
                            }(H) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(I.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
                                emojiPicker: !0
                            }));
                            break;
                        case "r":
                            (D || P) && (0, i.canReplyToMessage)(H, F) && (n.preventDefault(), (0, M.replyToMessage)(H, F, n));
                            break;
                        case "t":
                            if (D && (0, r.computeCanStartPublicThread)(H, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(H, F, "Message Shortcut");
                            else if (F.hasFlag(I.MessageFlags.HAS_THREAD)) {
                                let e = c.default.getChannel(F.id);
                                null != e && (D || P) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, P))
                            }
                            break;
                        case "enter":
                            O && (n.preventDefault(), (0, M.markMessageUnread)(H, F));
                            break;
                        case "escape":
                            f.default.isEditing(H.id, F.id) ? a.default.endEditMessage(H.id) : g.ComponentDispatch.dispatch(I.ComponentActions.TEXTAREA_FOCUS)
                    }
                }, [e, t])
            }