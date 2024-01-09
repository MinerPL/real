            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                u = n("817963"),
                l = n("244480"),
                o = n("398604"),
                r = n("322224"),
                d = n("745049"),
                c = n("782340");

            function f(e, t, n) {
                let {
                    canManageGuildEvent: f
                } = (0, u.useManageResourcePermissions)(null != n ? n : t), _ = (0, i.useStateFromStores)([o.default], () => o.default.isActive(e)), p = (0, i.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(e), [e]), E = f(p);
                if (null == e || !E || !_ || (null == p ? void 0 : p.entity_type) === d.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let S = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, l.endStage)(n);
                        return
                    }
                    null != e && r.default.endEvent(e, t.id), (0, s.closeAllModals)()
                };
                return (0, a.jsx)(s.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: S,
                            children: (0, a.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }