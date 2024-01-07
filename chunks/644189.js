            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                u = l("433487"),
                i = l("707916"),
                a = l("782340"),
                o = l("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: l,
                    rsvped: r,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: E,
                    isDetailsView: f = !1,
                    isMember: h,
                    onJoinGuildClick: C,
                    guildName: N,
                    onInviteClick: v,
                    canInvite: g,
                    isChannelPublic: S
                } = e;
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [null != d ? (0, n.jsx)(s.Tooltip, {
                        text: a.default.Messages.MORE,
                        position: "top",
                        "aria-label": a.default.Messages.EDIT,
                        children: e => (0, n.jsx)(s.Clickable, {
                            ...e,
                            onClick: d,
                            className: o.iconButton,
                            children: (0, n.jsx)(u.default, {
                                width: 20,
                                height: 20,
                                className: o.icon
                            })
                        })
                    }) : null, h && (0, n.jsx)(i.GuildEventShareButton, {
                        onInviteClick: v,
                        canInvite: g,
                        isChannelPublic: S
                    }), l && !t && (0, n.jsx)(i.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l
                    }), h && !l && !t && null != c && (0, n.jsx)(i.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l,
                        onRsvpClick: c
                    }), h && !l && (!f || t) ? (0, n.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: E,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, n.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: N
                        })
                    })]
                })
            }