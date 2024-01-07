            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var i = a("37983"),
                n = a("884691"),
                l = a("446674"),
                d = a("77078"),
                u = a("736964"),
                s = a("27618"),
                o = a("697218"),
                r = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: a,
                        username: c,
                        bot: f
                    } = e,
                    I = (0, l.useStateFromStores)([o.default], () => {
                        var e;
                        return (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
                    }, [a]),
                    [p, S] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.isFriend(a), s.default.isBlocked(a)], [a]),
                    [_, T] = n.useState(!1);
                return f || I ? null : p ? (0, i.jsx)(d.MenuItem, {
                    id: "remove-friend",
                    label: r.default.Messages.REMOVE_FRIEND,
                    action: function() {
                        (0, d.openModal)(e => (0, i.jsx)(d.ConfirmModal, {
                            header: r.default.Messages.REMOVE_FRIEND_TITLE.format({
                                name: c
                            }),
                            confirmText: r.default.Messages.REMOVE_FRIEND,
                            cancelText: r.default.Messages.CANCEL,
                            onConfirm: () => {
                                u.default.removeFriend(a, {
                                    location: t
                                }), T(!1)
                            },
                            ...e,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: r.default.Messages.REMOVE_FRIEND_BODY.format({
                                    name: c
                                })
                            })
                        }))
                    }
                }) : (0, i.jsx)(d.MenuItem, {
                    id: "add-friend",
                    label: _ ? r.default.Messages.ADD_FRIEND_BUTTON_AFTER : r.default.Messages.ADD_FRIEND,
                    action: () => {
                        !_ && (u.default.addRelationship({
                            userId: a,
                            context: {
                                location: t
                            }
                        }), T(!0))
                    },
                    disabled: S || _ && !p
                })
            }