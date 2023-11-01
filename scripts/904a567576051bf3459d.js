(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43151"], {
        861370: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var i = t("37983");
            t("884691");
            var a = t("77078"),
                l = t("845579"),
                u = t("662255"),
                r = t("306160");

            function o(e) {
                let {
                    id: n,
                    label: t,
                    onSuccess: o,
                    shiftId: s,
                    showIconFirst: d
                } = e, c = l.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !r.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(n);
                return (0, i.jsx)(a.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        let t = null != s && e.shiftKey ? s : n;
                        (0, r.copy)(t), null == o || o()
                    },
                    icon: u.default,
                    showIconFirst: d
                }, f)
            }
        },
        348866: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var i = t("37983");
            t("884691");
            var a = t("77078"),
                l = t("272030"),
                u = t("861370"),
                r = t("970755"),
                o = t("782340");

            function s(e) {
                let {
                    channel: n,
                    integration: t,
                    onSelect: s
                } = e, d = (0, u.default)({
                    id: n.id,
                    label: o.default.Messages.COPY_ID_APPLICATION
                });
                return (0, i.jsxs)(a.Menu, {
                    "aria-label": o.default.Messages.MANAGE_INTEGRATION,
                    navId: "manage-integration",
                    onClose: l.closeContextMenu,
                    onSelect: s,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: (0, i.jsx)(a.MenuItem, {
                            id: "remove-integration",
                            label: o.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                            action: () => {
                                (0, r.deletePrivateChannelIntegration)(n.id, t.application.id), null != s && s()
                            },
                            color: "danger"
                        })
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: d
                    })]
                })
            }
        }
    }
]);