            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("151426"),
                i = n("255397"),
                r = n("264732"),
                o = n("176347"),
                u = n("665182"),
                d = n("850391"),
                c = n("10641"),
                f = n("474643"),
                h = n("109264"),
                p = n("945330"),
                m = n("664336"),
                E = n("659500"),
                C = n("412090"),
                g = n("49111"),
                S = n("994428"),
                _ = n("782340"),
                I = n("176692"),
                T = function(e) {
                    let {
                        channel: t,
                        guild: n,
                        maxWidth: T
                    } = e;
                    l.useEffect(() => {
                        (0, c.markDismissibleContentAsDismissed)(s.DismissibleContent.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
                            dismissAction: S.ContentDismissActionType.AUTO
                        })
                    }, []);
                    let v = l.useCallback(() => {
                            i.default.updateChatOpen(t.id, !1), E.ComponentDispatch.safeDispatch(g.ComponentActions.FOCUS_CHAT_BUTTON)
                        }, [t.id]),
                        x = (0, a.jsx)(m.default.Icon, {
                            icon: p.default,
                            tooltip: _.default.Messages.CLOSE,
                            onClick: v
                        });
                    return (0, a.jsxs)(u.default, {
                        sidebarType: u.ChatSidebarType.CallChatSidebar,
                        maxWidth: T,
                        floatingLayer: C.default,
                        children: [(0, a.jsx)(r.default, {
                            channel: t,
                            draftType: f.DraftType.ChannelMessage
                        }), (0, a.jsxs)(m.default, {
                            toolbar: x,
                            "aria-label": _.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
                            children: [(0, a.jsx)(m.default.Icon, {
                                icon: h.default,
                                disabled: !0,
                                "aria-label": _.default.Messages.VOICE_CHAT_TEXT_CHANNEL
                            }), (0, a.jsx)(m.default.Title, {
                                children: t.name
                            })]
                        }), (0, a.jsx)("div", {
                            className: I.chat,
                            children: (0, a.jsx)(o.default, {
                                channel: t,
                                guild: n,
                                chatInputType: d.ChatInputTypes.SIDEBAR
                            }, t.id)
                        })]
                    })
                }