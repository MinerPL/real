            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("828986"),
                i = n("249561"),
                l = n("957255"),
                c = n("566998"),
                d = n("327054"),
                o = n("49111"),
                f = n("782340");

            function h(e, t) {
                let n = (0, a.useStateFromStores)([l.default], () => l.default.can(o.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== o.MessageStates.SEND_FAILED && (0, d.default)(e, t, n) ? !1 === e.pinned ? (0, u.jsx)(s.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? r.default.pinMessage(t, e.id) : i.default.confirmPin(t, e)
                    },
                    label: f.default.Messages.PIN_MESSAGE,
                    icon: c.default
                }) : (0, u.jsx)(s.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? r.default.unpinMessage(t, e.id) : i.default.confirmUnpin(t, e)
                    },
                    label: f.default.Messages.UNPIN_MESSAGE,
                    icon: c.default
                }) : null
            }