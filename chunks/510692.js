            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                d = n("817963"),
                i = n("398604"),
                s = n("534222"),
                r = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: E
                } = (0, d.useManageResourcePermissions)(null != o ? o : t), f = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), _ = E(f), S = null != (0, s.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), T = null != f && (0, i.isGuildScheduledEventActive)(f);
                return _ && !T && !S ? (0, l.jsx)(a.MenuItem, {
                    id: r.default.Messages.START_EVENT,
                    label: r.default.Messages.START_EVENT,
                    action: function() {
                        null != f && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: f
                            })
                        })
                    }
                }) : null
            }