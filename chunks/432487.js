            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                s = n("450911"),
                l = n("42203"),
                d = n("697218"),
                i = n("782340");

            function o(e, t) {
                let n = (0, u.useStateFromStores)([d.default], () => d.default.getCurrentUser(), []),
                    o = (0, u.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(r.MenuItem, {
                    id: "remove",
                    label: i.default.Messages.REMOVE_FROM_GROUP,
                    action: () => s.default.removeRecipient(t, e),
                    color: "danger"
                })
            }