            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("249654"),
                r = l("77078"),
                d = l("686904"),
                u = l("322224"),
                i = l("397680"),
                c = l("822516"),
                o = l("953143"),
                E = l("782340"),
                _ = l("297506");

            function g(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: g,
                    onClose: f
                } = e, h = (0, i.default)(l, t.id), R = (0, c.getBaseScheduleForRecurrence)(l, t), T = (0, c.getScheduleForRecurrenceWithException)(R, h), [A, N] = n.useState(T), [x, {
                    loading: m,
                    error: D
                }] = (0, d.default)(async () => {
                    let e = (0, c.areDatesIdentical)(R.startDate, A.startDate) ? null : A.startDate,
                        a = (0, c.areDatesIdentical)(R.endDate, A.endDate) ? null : A.endDate;
                    if (null != h)(0, c.areSchedulesIdentical)(A, R) ? await u.default.deleteGuildEventException(t.guild_id, t.id, h.event_exception_id) : await u.default.updateGuildEventException({
                        scheduled_start_time: null == e ? void 0 : e.toISOString(),
                        scheduled_end_time: null == a ? void 0 : a.toISOString(),
                        is_canceled: h.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let n = s.default.extractTimestamp(l);
                        await u.default.createGuildEventException({
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: null == e ? void 0 : e.toISOString(),
                            scheduled_end_time: null == a ? void 0 : a.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == D && f()
                });
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: g,
                    children: [(0, a.jsx)(r.ModalHeader, {
                        children: (0, a.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: E.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: _.content,
                        children: [(0, a.jsx)(o.default, {
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e;
                                null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), N({
                                    startDate: t,
                                    endDate: l
                                })
                            },
                            schedule: A,
                            showEndDate: null != A.endDate,
                            requireEndDate: null != A.endDate,
                            guildId: t.guild_id,
                            recurrenceRule: t.recurrence_rule
                        }), null != D ? (0, a.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: _.warning,
                            children: D.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: _.footer,
                        children: [(0, a.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: x,
                            className: _.button,
                            submitting: m,
                            disabled: (0, c.areSchedulesIdentical)(A, T),
                            children: E.default.Messages.SAVE_EVENT
                        }), (0, a.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            onClick: f,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }