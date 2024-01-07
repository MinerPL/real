            "use strict";
            n.r(t), n.d(t, {
                MoreButton: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("211248"),
                r = n("433487"),
                o = n("228220"),
                u = n("352273"),
                d = n("782340");
            let c = e => {
                    let {
                        item: t,
                        closePopout: n
                    } = e;
                    return (0, l.jsx)(s.Menu, {
                        navId: "notification-actions",
                        onClose: n,
                        onSelect: n,
                        "aria-label": d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        children: (0, l.jsx)(s.MenuItem, {
                            id: "delete",
                            label: d.default.Messages.DELETE,
                            icon: o.default,
                            action: async () => {
                                await (0, u.deleteNotificationCenterItem)(t)
                            }
                        })
                    })
                },
                f = a.memo(function(e) {
                    let {
                        item: t
                    } = e;
                    return (0, l.jsx)(s.Popout, {
                        renderPopout: e => (0, l.jsx)(c, {
                            ...e,
                            item: t
                        }),
                        position: "bottom",
                        align: "right",
                        animation: s.Popout.Animation.NONE,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, l.jsx)(i.default, {
                                tooltip: d.default.Messages.MORE,
                                color: i.CircleIconButtonColors.TERTIARY,
                                icon: (0, l.jsx)(r.default, {
                                    height: 16,
                                    width: 16
                                }),
                                onClick: e => {
                                    e.stopPropagation(), t(e)
                                },
                                "aria-haspopup": "menu"
                            })
                        }
                    })
                })