            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                u = l.n(s),
                i = l("446674"),
                a = l("77078"),
                o = l("272030"),
                r = l("42203"),
                d = l("305961"),
                c = l("433487"),
                E = l("398604"),
                f = l("397680"),
                h = l("393745"),
                C = l("745049"),
                v = l("782340"),
                N = l("157624");

            function g(e) {
                let {
                    recurrenceId: t,
                    originalScheduledStartTime: s,
                    guildEventId: g,
                    onClick: S,
                    isActive: L
                } = e, I = (0, i.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(g)), _ = (0, f.default)(t, null == I ? void 0 : I.id), m = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == I ? void 0 : I.guild_id)), x = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == I ? void 0 : I.channel_id));
                if (null == I) return null;
                let {
                    is_canceled: T = !1
                } = null != _ ? _ : {}, p = (null == _ ? void 0 : _.scheduled_start_time) != null ? new Date(null == _ ? void 0 : _.scheduled_start_time) : s, R = e => {
                    e.stopPropagation(), null != m && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return l => (0, n.jsx)(e, {
                            guildEventId: I.id,
                            recurrenceId: t,
                            channel: x,
                            guild: m,
                            isRecurrenceItem: !0,
                            ...l
                        })
                    })
                };
                return (0, n.jsxs)(a.ClickableContainer, {
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
                    children: [(0, n.jsx)(h.GuildEventTimeStatus, {
                        startTime: p.toISOString(),
                        status: T ? C.GuildScheduledEventStatus.CANCELED : C.GuildScheduledEventStatus.SCHEDULED,
                        eventType: I.entity_type,
                        guildEventId: I.id,
                        recurrenceId: t,
                        className: N.timeStatus
                    }), T && (0, n.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: N.canceledStatus,
                        children: v.default.Messages.EVENT_CANCELED
                    }), (0, n.jsx)(a.Tooltip, {
                        text: v.default.Messages.MORE,
                        position: "top",
                        "aria-label": v.default.Messages.EDIT,
                        children: e => (0, n.jsx)(a.Clickable, {
                            ...e,
                            onClick: R,
                            className: N.iconButton,
                            children: (0, n.jsx)(c.default, {
                                width: 20,
                                height: 20,
                                className: N.icon
                            })
                        })
                    })]
                })
            }