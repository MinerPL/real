            "use strict";
            l.r(t), l.d(t, {
                GuildEventShareButton: function() {
                    return N
                },
                GuildEventInterestedButton: function() {
                    return v
                },
                GuildEventLurkerInterestedButton: function() {
                    return g
                },
                default: function() {
                    return I
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("862337"),
                i = l("77078"),
                a = l("660279"),
                o = l("36694"),
                r = l("83900"),
                d = l("433487"),
                c = l("491920"),
                E = l("745049"),
                f = l("782340"),
                h = l("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: l,
                    onJoinClick: s
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: h.button,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.GREEN,
                    disabled: l,
                    children: t
                })
            }

            function N(e) {
                let {
                    onInviteClick: t,
                    canInvite: l,
                    isChannelPublic: a
                } = e, d = new u.Timeout, [E, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let N = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, n.jsx)(i.Tooltip, {
                    text: L(l, a),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: e => l && a ? (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), f.default.Messages.SHARE]
                    }) : (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        disabled: E,
                        look: E ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                        onClick: N,
                        children: [E ? (0, n.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, n.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), E ? f.default.Messages.COPIED : f.default.Messages.SHARE]
                    })
                })
            }

            function v(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: l,
                    onRsvpClick: s,
                    ...u
                } = e, r = t && !l;
                return (0, n.jsxs)(i.Button, {
                    ...u,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.PRIMARY,
                    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                    disabled: l,
                    children: [r ? (0, n.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, n.jsx)(a.default, {
                        width: 16,
                        height: 16
                    }), f.default.Messages.INDICATE_RSVP]
                })
            }

            function g(e) {
                return (0, n.jsx)(i.Tooltip, {
                    text: f.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": f.default.Messages.SHARE_LINK,
                    children: t => (0, n.jsx)(v, {
                        ...t,
                        ...e
                    })
                })
            }
            let S = e => null == e || e,
                L = (e, t) => S(e) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : f.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function I(e) {
                let {
                    isActive: t,
                    isUserLurking: l,
                    rsvped: s,
                    canInvite: u,
                    isChannelPublic: a = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: S,
                    onStartClick: L,
                    onInviteClick: I,
                    onEndClick: _,
                    isJoined: m = !1
                } = e, x = void 0 !== c;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [null != r ? (0, n.jsx)(i.Tooltip, {
                        text: f.default.Messages.MORE,
                        position: "top",
                        "aria-label": f.default.Messages.EDIT,
                        children: e => (0, n.jsx)(i.Clickable, {
                            ...e,
                            onClick: r,
                            className: h.iconButton,
                            children: (0, n.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, n.jsx)(N, {
                        onInviteClick: I,
                        canInvite: u,
                        isChannelPublic: a
                    }), t && o !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, n.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: l,
                                isVoiceChannel: n
                            } = e;
                            return l ? t ? f.default.Messages.GO_TO_CHANNEL : n ? f.default.Messages.GUILD_EVENT_JOIN : f.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : f.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: m,
                            canJoin: x,
                            isVoiceChannel: o === E.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !x,
                        onJoinClick: c
                    }) : null, l && !t && (0, n.jsx)(g, {
                        isUserRsvped: s,
                        isUserLurking: l
                    }), !l && !t && null != S && (0, n.jsx)(v, {
                        isUserRsvped: s,
                        isUserLurking: l,
                        onRsvpClick: S
                    }), t || null == L ? null : (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: L,
                        color: i.Button.Colors.GREEN,
                        children: f.default.Messages.START
                    }), t && null != _ ? (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: _,
                        color: i.Button.Colors.PRIMARY,
                        children: f.default.Messages.END_EVENT
                    }) : null]
                })
            }