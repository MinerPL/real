            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("446674"),
                o = n("996496"),
                d = n("981913"),
                c = n("660478"),
                f = n("191542"),
                h = n("256170"),
                p = n("378765"),
                m = n("550766"),
                E = n("191225"),
                C = n("272505"),
                g = n("49111"),
                S = n("782340"),
                _ = n("369026");

            function I(e) {
                let {
                    channelId: t,
                    ...n
                } = e, s = l.useRef(null), I = (0, u.useStateFromStores)([E.default], () => E.default.getFocusedLayout() === C.FocusedActivityLayouts.RESIZABLE), T = l.useCallback(() => {
                    let e = I ? C.FocusedActivityLayouts.NO_CHAT : C.FocusedActivityLayouts.RESIZABLE;
                    (0, m.updateFocusedActivityLayout)(e)
                }, [I]), {
                    unreadCount: v,
                    mentionCount: x
                } = function(e) {
                    let t = (0, u.useStateFromStores)([f.default], () => !(0, r.isEmpty)(f.default.getTypingUsers(e)), [e]),
                        {
                            unreadCount: n,
                            mentionCount: a
                        } = (0, u.useStateFromStoresObject)([c.default], () => ({
                            unreadCount: c.default.getUnreadCount(e),
                            mentionCount: c.default.getMentionCount(e)
                        }), [e]);
                    return {
                        unreadCount: n,
                        mentionCount: a,
                        isTyping: t
                    }
                }(t), N = l.useCallback(() => {
                    var e;
                    null === (e = s.current) || void 0 === e || e.focus()
                }, []);
                (0, p.useComponentAction)({
                    event: g.ComponentActions.FOCUS_CHAT_BUTTON,
                    handler: N
                });
                let A = I ? S.default.Messages.HIDE_CHAT : S.default.Messages.SHOW_CHAT,
                    M = [A];
                x > 0 && M.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
                    mentionCount: x
                })), v > 0 && M.push(S.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
                let R = (0, u.useStateFromStores)([E.default], () => E.default.getFocusedLayout()),
                    j = x > 0 ? x : v,
                    L = j > 0;
                return (0, a.jsxs)("div", {
                    className: _.wrapper,
                    children: [(0, a.jsx)(d.default, {
                        buttonRef: s,
                        onClick: T,
                        label: A,
                        "aria-label": M.join(", "),
                        tooltipPosition: "bottom",
                        iconComponent: h.default,
                        themeable: !0,
                        className: i(_.circularButton, R === C.FocusedActivityLayouts.NO_CHAT ? _.upArrow : _.downArrow),
                        ...n
                    }), L ? (0, a.jsx)(o.default, {
                        hasMentions: x > 0,
                        truncatedCount: j > 99 ? "99+" : j,
                        className: _.badge
                    }) : null]
                })
            }