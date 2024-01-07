            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("450911"),
                l = a("42203"),
                s = a("697218"),
                i = a("782340");

            function o(e, t) {
                let a = (0, u.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
                    o = (0, u.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == a || !o.isOwner(a.id) ? null : (0, n.jsx)(r.MenuItem, {
                    id: "remove",
                    label: i.default.Messages.REMOVE_FROM_GROUP,
                    action: () => d.default.removeRecipient(t, e),
                    color: "danger"
                })
            }