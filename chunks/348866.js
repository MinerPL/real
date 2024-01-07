            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                r = t("272030"),
                a = t("861370"),
                s = t("970755"),
                o = t("782340");

            function u(e) {
                let {
                    channel: n,
                    integration: t,
                    onSelect: u
                } = e, c = (0, a.default)({
                    id: n.id,
                    label: o.default.Messages.COPY_ID_APPLICATION
                });
                return (0, l.jsxs)(i.Menu, {
                    "aria-label": o.default.Messages.MANAGE_INTEGRATION,
                    navId: "manage-integration",
                    onClose: r.closeContextMenu,
                    onSelect: u,
                    children: [(0, l.jsx)(i.MenuGroup, {
                        children: (0, l.jsx)(i.MenuItem, {
                            id: "remove-integration",
                            label: o.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                            action: () => {
                                (0, s.deletePrivateChannelIntegration)(n.id, t.application.id), null != u && u()
                            },
                            color: "danger"
                        })
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: c
                    })]
                })
            }