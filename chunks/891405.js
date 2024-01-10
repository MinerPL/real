            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("394846"),
                l = n("77078"),
                i = n("913144"),
                r = n("79945"),
                o = n("149279"),
                u = n("958706"),
                d = n("782340"),
                c = n("868689");

            function f(e) {
                let {
                    channel: t,
                    message: n,
                    togglePopout: f,
                    renderEmojiPicker: h,
                    shouldShow: C
                } = e;
                return (0, a.jsx)(l.Popout, {
                    renderPopout: e => {
                        let {
                            closePopout: a
                        } = e;
                        return h(t, n, a, !1)
                    },
                    shouldShow: C,
                    onRequestClose: f,
                    position: s.isMobile ? "top" : "left",
                    align: s.isMobile ? "center" : "top",
                    children: (e, t) => {
                        let {
                            onClick: n,
                            ...s
                        } = e, {
                            isShown: h
                        } = t;
                        return (0, a.jsx)(l.Tooltip, {
                            disableTooltipPointerEvents: !1,
                            text: d.default.Messages.ADD_REACTION,
                            color: l.TooltipColors.PRIMARY,
                            "aria-label": d.default.Messages.ADD_REACTION,
                            hideOnClick: !0,
                            tooltipClassName: c.tooltip,
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: l
                                } = e;
                                return (0, a.jsx)(o.Button, {
                                    onMouseEnter: () => {
                                        null == t || t(), i.default.dispatch({
                                            type: "EMOJI_INTERACTION_INITIATED",
                                            interaction: u.EmojiInteractionPoint.MessageContextMenuMouseEntered
                                        })
                                    },
                                    onMouseLeave: n,
                                    onClick: () => {
                                        f(), null == l || l()
                                    },
                                    "aria-label": d.default.Messages.ADD_REACTION,
                                    selected: h,
                                    ...s,
                                    children: (0, a.jsx)(r.default, {
                                        className: c.icon
                                    })
                                })
                            }
                        }, "add-reaction")
                    }
                })
            }