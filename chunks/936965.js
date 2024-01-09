            "use strict";
            n.r(t), n.d(t, {
                updateRsvp: function() {
                    return T
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var l, u, a = n("37983"),
                d = n("884691"),
                i = n("77078"),
                r = n("271938"),
                s = n("398604"),
                o = n("322224"),
                c = n("822516"),
                E = n("745049"),
                f = n("782340"),
                _ = n("616762");

            function S(e, t) {
                let n = r.default.getId();
                return s.default.getRsvp(e, t, n)
            }

            function T(e, t, n, l) {
                let u = S(e, t);
                null != u || l === E.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE";

            function v(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...r
                } = e, [s, o] = d.useState(0), c = S(t.id, null), v = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, I = v ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, N = I === E.GuildScheduledEventUserResponses.INTERESTED ? f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, a.jsx)(i.ConfirmModal, {
                    ...r,
                    header: N,
                    confirmText: f.default.Messages.OK,
                    cancelText: f.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === s ? T(t.id, null, l, I) : T(t.id, n, l, I), null == u || u(), r.onClose()
                    },
                    confirmButtonColor: i.Button.Colors.BRAND,
                    children: (0, a.jsx)(i.RadioGroup, {
                        className: _.responseOptions,
                        value: s,
                        options: [{
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: f.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function I(e, t, n, l) {
                let u = s.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let d = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u),
                    r = S(u.id, d);
                null == d ? (T(e, null, n, E.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != r ? (T(e, d, n, E.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, i.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(v, {
                    ...e,
                    event: u,
                    recurrenceId: d,
                    guildId: n,
                    onRsvp: l
                })))
            }