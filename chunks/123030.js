            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                u = n.n(s),
                i = n("446674"),
                a = n("77078"),
                o = n("272030"),
                r = n("42203"),
                d = n("305961"),
                c = n("433487"),
                f = n("398604"),
                E = n("397680"),
                h = n("393745"),
                C = n("745049"),
                v = n("782340"),
                N = n("157624");

            function g(e) {
                let {
                    recurrenceId: t,
                    originalScheduledStartTime: s,
                    guildEventId: g,
                    onClick: S,
                    isActive: L
                } = e, I = (0, i.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(g)), _ = (0, E.default)(t, null == I ? void 0 : I.id), m = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == I ? void 0 : I.guild_id)), x = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == I ? void 0 : I.channel_id));
                if (null == I) return null;
                let {
                    is_canceled: T = !1
                } = null != _ ? _ : {}, p = (null == _ ? void 0 : _.scheduled_start_time) != null ? new Date(null == _ ? void 0 : _.scheduled_start_time) : s, R = e => {
                    e.stopPropagation(), null != m && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("110374").then(n.bind(n, "110374"));
                        return n => (0, l.jsx)(e, {
                            guildEventId: I.id,
                            recurrenceId: t,
                            channel: x,
                            guild: m,
                            isRecurrenceItem: !0,
                            ...n
                        })
                    })
                };
                return (0, l.jsxs)(a.ClickableContainer, {
                    className: u(N.container, {
                        [N.canceled]: T,
                        [N.clickable]: null != S,
                        [N.active]: L
                    }),
                    onClick: e => {
                        e.stopPropagation(), !T && (null == S || S(t))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, l.jsx)(h.GuildEventTimeStatus, {
                        startTime: p.toISOString(),
                        status: T ? C.GuildScheduledEventStatus.CANCELED : C.GuildScheduledEventStatus.SCHEDULED,
                        eventType: I.entity_type,
                        guildEventId: I.id,
                        recurrenceId: t,
                        className: N.timeStatus
                    }), T && (0, l.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: N.canceledStatus,
                        children: v.default.Messages.EVENT_CANCELED
                    }), (0, l.jsx)(a.Tooltip, {
                        text: v.default.Messages.MORE,
                        position: "top",
                        "aria-label": v.default.Messages.EDIT,
                        children: e => (0, l.jsx)(a.Clickable, {
                            ...e,
                            onClick: R,
                            className: N.iconButton,
                            children: (0, l.jsx)(c.default, {
                                width: 20,
                                height: 20,
                                className: N.icon
                            })
                        })
                    })]
                })
            }