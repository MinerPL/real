            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("808653");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("669491"),
                i = n("77078"),
                r = n("817963"),
                o = n("42203"),
                u = n("943232"),
                d = n("374021"),
                c = n("398604"),
                f = n("534222"),
                h = n("822516"),
                p = n("888237"),
                m = n("782340"),
                E = n("571835");

            function C(e) {
                let {
                    channelId: t
                } = e, C = (0, l.useStateFromStores)([o.default], () => o.default.getChannel(t), [t]), g = (0, f.useImminentUpcomingGuildEvents)(t), S = null != (0, f.useActiveEvent)(t), {
                    canManageGuildEvent: _
                } = (0, r.useManageResourcePermissions)(C), I = (0, l.useStateFromStoresObject)([c.default], () => g.reduce((e, t) => (e[t.id] = c.default.getUserCount(t.id, (0, h.getNextRecurrenceIdInEvent)(t)), e), {}));
                return g.length < 1 || S ? null : (0, a.jsx)(a.Fragment, {
                    children: g.map(e => (0, a.jsx)(p.default, {
                        icon: (0, a.jsx)(u.default, {
                            height: 20,
                            width: 20
                        }),
                        color: s.default.unsafe_rawColors.GREEN_360.css,
                        title: (_(e) ? m.default.Messages.GUILD_EVENT_START_PROMPT : m.default.Messages.GUILD_EVENT_UPCOMING_PROMPT).format({
                            eventName: e.name
                        }),
                        description: m.default.Messages.GUILD_EVENT_START_PROMPT_DESCRIPTION.format({
                            startTime: (0, h.getEventTimeData)(e.scheduled_start_time).startDateTimeString
                        }),
                        onClick: () => {
                            var t;
                            _(t = e) ? (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("298843").then(n.bind(n, "298843"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    event: t
                                })
                            }) : (0, d.openGuildEventDetails)({
                                eventId: t.id,
                                parentGuildId: t.guild_id
                            })
                        },
                        userCount: I[e.id],
                        className: E.eventPrompt
                    }, e.id))
                })
            }