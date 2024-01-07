            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("322224"),
                r = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: E
                } = e, f = null != n, {
                    canManageGuildEvent: _
                } = (0, d.useManageResourcePermissions)(null != E ? E : c), [S, T] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isActive(t), i.default.getGuildScheduledEvent(t)]), v = (0, r.default)(n, null == T ? void 0 : T.id), I = null != T && _(T), N = f && (null == v ? void 0 : v.is_canceled) && I;
                return N && (!S || f) ? (0, l.jsx)(a.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == v) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = v;
                        null == e && null == l ? s.default.deleteGuildEventException(c.id, t, n) : s.default.updateGuildEventException({
                            scheduled_start_time: e,
                            scheduled_end_time: l,
                            is_canceled: !1
                        }, c.id, t, n)
                    }
                }) : null
            }