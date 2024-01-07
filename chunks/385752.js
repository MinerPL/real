            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("299039"),
                s = n("398604"),
                r = n("322224"),
                o = n("397680"),
                c = n("466148"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: f,
                    channel: _
                } = e, S = null != n, {
                    canManageGuildEvent: T
                } = (0, d.useManageResourcePermissions)(null != _ ? _ : f), [v, I] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isActive(t), s.default.getGuildScheduledEvent(t)]), N = (0, o.default)(n, null == I ? void 0 : I.id), g = null != I && T(I), m = (null == I ? void 0 : I.recurrence_rule) != null && !S, {
                    startTime: h
                } = (0, c.default)(t, n);
                if (!g || v && !m && !S || S && !S || null == I) return null;
                if (v && S) {
                    var R;
                    if (null == h) return null;
                    let e = new Date(null !== (R = null == N ? void 0 : N.scheduled_start_time) && void 0 !== R ? R : h);
                    if (new Date > e) return null
                }
                let p = () => {
                        if (null != n) {
                            if (null != N) r.default.updateGuildEventException({
                                scheduled_start_time: N.scheduled_start_time,
                                scheduled_end_time: N.scheduled_end_time,
                                is_canceled: !0
                            }, f.id, t, n);
                            else {
                                let e = i.default.extractTimestamp(n);
                                r.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, f.id, t)
                            }
                        }
                    },
                    M = e => {
                        (0, a.openModal)(n => (0, l.jsxs)(a.ConfirmModal, {
                            ...n,
                            header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: m || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
                            cancelText: E.default.Messages.NEVERMIND,
                            onConfirm: () => S && !e ? p() : r.default.deleteGuildEvent(t, f.id),
                            children: [(0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (m || e) && (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: E.default.Messages.DELETE_EVENT,
                    label: E.default.Messages.DELETE_EVENT,
                    action: S ? void 0 : () => M(),
                    color: "danger",
                    children: S && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_THIS_EVENT,
                            label: E.default.Messages.DELETE_THIS_EVENT,
                            action: () => M(),
                            disabled: null == N ? void 0 : N.is_canceled,
                            color: "danger"
                        }), (0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => M(!0),
                            color: "danger"
                        })]
                    })
                })
            }