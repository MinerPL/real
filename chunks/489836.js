            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("736964"),
                r = n("27618"),
                a = n("697218"),
                s = n("49111"),
                d = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    c = (0, l.useStateFromStores)([a.default], () => {
                        var e;
                        return (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    E = (0, l.useStateFromStores)([r.default], () => r.default.isBlocked(n), [n]);
                if (c) return null;

                function f() {
                    o.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: s.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(u.MenuItem, {
                    id: "block",
                    label: E ? d.default.Messages.UNBLOCK : d.default.Messages.BLOCK,
                    action: () => E ? o.default.unblockUser(n, {
                        location: t
                    }) : (0, u.openModal)(t => (0, i.jsx)(u.ConfirmModal, {
                        header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: d.default.Messages.BLOCK,
                        cancelText: d.default.Messages.CANCEL,
                        onConfirm: f,
                        ...t,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }