            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("736964"),
                u = a("27618"),
                s = a("697218"),
                o = a("49111"),
                r = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: a
                    } = e,
                    c = (0, n.useStateFromStores)([s.default], () => {
                        var e;
                        return (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
                    }, [a]),
                    f = (0, n.useStateFromStores)([u.default], () => u.default.isBlocked(a), [a]);
                if (c) return null;

                function I() {
                    d.default.addRelationship({
                        userId: a,
                        context: {
                            location: t
                        },
                        type: o.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(l.MenuItem, {
                    id: "block",
                    label: f ? r.default.Messages.UNBLOCK : r.default.Messages.BLOCK,
                    action: () => f ? d.default.unblockUser(a, {
                        location: t
                    }) : (0, l.openModal)(t => (0, i.jsx)(l.ConfirmModal, {
                        header: r.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: r.default.Messages.BLOCK,
                        cancelText: r.default.Messages.CANCEL,
                        onConfirm: I,
                        ...t,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: r.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }