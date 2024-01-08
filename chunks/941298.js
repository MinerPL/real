            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("664336"),
                i = n("466148"),
                r = n("393745"),
                u = n("782340"),
                o = n("223209");

            function d(e) {
                let {
                    guildEvent: t,
                    recurrenceId: n
                } = e, d = (0, i.default)(t.id, n);
                return null == t ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default.Divider, {
                        className: o.divider
                    }), (0, a.jsx)(r.GuildEventTimeStatus, {
                        startTime: d.startTime.toISOString(),
                        status: t.status,
                        liveText: u.default.Messages.LIVE_EVENT,
                        className: o.eventSchedule,
                        textVariant: "text-lg/semibold",
                        eventType: t.entity_type,
                        guildEventId: null == t ? void 0 : t.id,
                        recurrenceId: n
                    }), (0, a.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: o.eventName,
                        children: t.name
                    })]
                })
            }