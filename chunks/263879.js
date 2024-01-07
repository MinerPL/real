            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("404118"),
                u = n("166257"),
                r = n("300322"),
                d = n("957255"),
                o = n("49111"),
                c = n("782340");

            function f(e, t) {
                let n = (0, r.useIsActiveChannelOrUnarchivableThread)(t),
                    f = (0, i.useStateFromStores)([d.default], () => d.default.can(o.Permissions.MANAGE_MESSAGES, t) && n, [t, n]);
                return f && null != e.reactions && 0 !== e.reactions.length ? (0, a.jsx)(l.MenuItem, {
                    id: "remove-reactions",
                    label: c.default.Messages.REMOVE_ALL_REACTIONS,
                    action: function(n) {
                        n.shiftKey ? (0, u.removeAllReactions)(t.id, e.id) : s.default.show({
                            title: c.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_TITLE,
                            body: c.default.Messages.REMOVE_ALL_REACTIONS_CONFIRM_BODY,
                            confirmText: c.default.Messages.YES_TEXT,
                            cancelText: c.default.Messages.NO_TEXT,
                            onConfirm: () => {
                                (0, u.removeAllReactions)(t.id, e.id)
                            }
                        })
                    },
                    color: "danger"
                }) : null
            }