            "use strict";
            n.r(t), n.d(t, {
                MARK_CHANNEL_READ: function() {
                    return g
                }
            });
            var i = n("118810"),
                o = n("255397"),
                l = n("819689"),
                a = n("267363"),
                u = n("244201"),
                d = n("191145"),
                s = n("529805"),
                r = n("685841"),
                E = n("208021"),
                _ = n("582713"),
                A = n("328511"),
                c = n("467094"),
                C = n("982108"),
                T = n("42203"),
                S = n("474643"),
                I = n("836417"),
                f = n("377253"),
                N = n("660478"),
                O = n("18494"),
                L = n("162771"),
                p = n("144747"),
                D = n("471671"),
                R = n("659500"),
                h = n("49111");
            let g = {
                binds: ["esc", "shift+pagedown"],
                comboKeysBindGlobal: !0,
                action(e) {
                    if (D.default.isElementFullScreen()) return !1;
                    if (R.ComponentDispatch.hasSubscribers(h.ComponentActions.CALL_DECLINE)) return R.ComponentDispatch.dispatch(h.ComponentActions.CALL_DECLINE), !1;
                    if (p.default.close()) return !1;
                    if (R.ComponentDispatch.hasSubscribers(h.ComponentActions.MEDIA_MODAL_CLOSE)) return R.ComponentDispatch.dispatch(h.ComponentActions.MEDIA_MODAL_CLOSE), !1;
                    if ((0, i.isElement)(e.target)) {
                        let t = (0, u.getWindowDispatchForElement)(e.target);
                        if (null == t ? void 0 : t.hasSubscribers(h.ComponentActions.POPOUT_CLOSE)) return t.dispatch(h.ComponentActions.POPOUT_CLOSE), !1
                    }
                    if (R.ComponentDispatch.hasSubscribers(h.ComponentActions.CLOSE_GIF_PICKER)) return R.ComponentDispatch.dispatch(h.ComponentActions.CLOSE_GIF_PICKER), !1;
                    if (R.ComponentDispatch.hasSubscribers(h.ComponentActions.MODAL_CLOSE)) return R.ComponentDispatch.dispatch(h.ComponentActions.MODAL_CLOSE), !1;
                    if (R.ComponentDispatch.hasSubscribers(h.ComponentActions.SEARCH_RESULTS_CLOSE)) return R.ComponentDispatch.dispatch(h.ComponentActions.SEARCH_RESULTS_CLOSE), !1;
                    let t = L.default.getGuildId(),
                        n = O.default.getChannelId(t),
                        l = T.default.getChannel(n),
                        a = C.default.getSection(n, null == l ? void 0 : l.isDM()),
                        s = a === h.ChannelSections.SIDEBAR_CHAT ? C.default.getSidebarState(n) : null,
                        r = (null == s ? void 0 : s.type) === _.SidebarType.VIEW_THREAD || (null == s ? void 0 : s.type) === _.SidebarType.VIEW_CHANNEL ? s.channelId : null;
                    if (!1 === G(n) || !1 === G(r)) return !1;
                    if (null != n && (null == s ? void 0 : s.type) === _.SidebarType.CREATE_THREAD) return E.default.closeChannelSidebar(n), !1;
                    let A = b(n),
                        c = b(r);
                    return null == n || A || c || null == s ? null != n && !A && d.default.getChatOpen(n) ? (o.default.updateChatOpen(n, !1), !1) : (R.ComponentDispatch.dispatch(h.ComponentActions.SCROLLTO_PRESENT), !1) : (E.default.closeChannelSidebar(n), !1)
                }
            };

            function G(e) {
                if (null != e) {
                    if (I.default.isEditingAny(e)) return l.default.endEditMessage(e), !1;
                    if (null != r.default.getPendingReply(e)) return (0, s.deletePendingReply)(e), !1;
                    if (null != A.default.getStickerPreview(e, S.DraftType.ChannelMessage)) return (0, c.clearStickerPreview)(e, S.DraftType.ChannelMessage), !1
                }
            }

            function b(e) {
                if (null == e) return !1;
                let t = !1,
                    n = f.default.getMessages(e);
                return n.hasMoreAfter && (l.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), t = !0), N.default.hasUnread(e) && ((0, a.ack)(e), t = !0), (0, a.localAck)(e), t
            }