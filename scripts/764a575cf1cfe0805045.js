(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11137"], {
        158534: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return u
                }
            });
            var t = a("920040");
            a("773670");
            var s = a("685665");

            function u(e, n) {
                return function(a) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, s.default)(n);
                    return (0, t.jsx)(u, {
                        children: (0, t.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        887127: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return _
                }
            });
            var t = a("920040");
            a("773670");
            var s = a("77078"),
                u = a("272030"),
                l = a("54239"),
                i = a("158534"),
                r = a("812204"),
                c = a("861370"),
                d = a("393414"),
                o = a("47006"),
                f = a("782340"),
                _ = (0, i.default)(function(e) {
                    let {
                        channel: n,
                        onSelect: a
                    } = e, i = (0, o.default)(n), r = (0, c.default)({
                        id: n.id,
                        label: f.default.Messages.COPY_ID_CHANNEL
                    });
                    return (0, t.jsxs)(s.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": f.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [(0, t.jsxs)(s.MenuGroup, {
                            children: [i, n.isCategory() ? null : (0, t.jsx)(s.MenuItem, {
                                id: "jump-to-channel",
                                label: f.default.Messages.JUMP_TO_CHANNEL,
                                action: () => {
                                    (0, d.transitionToGuild)(n.guild_id, n.id), (0, l.popLayer)()
                                }
                            })]
                        }), (0, t.jsx)(s.MenuGroup, {
                            children: r
                        })]
                    })
                }, [r.default.CONTEXT_MENU, r.default.CHANNEL_AUDIT_LOG_MENU])
        },
        47006: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return d
                }
            });
            var t = a("920040");
            a("773670");
            var s = a("498225"),
                u = a("77078"),
                l = a("18054"),
                i = a("957255"),
                r = a("49111"),
                c = a("782340");

            function d(e) {
                let {
                    canManageChannels: n,
                    canManageRoles: a,
                    canManageWebhooks: d,
                    canAccessChannel: o
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    canManageChannels: i.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: i.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: i.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: i.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && o && (n || a || d) ? (0, t.jsx)(u.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? c.default.Messages.EDIT_CATEGORY : c.default.Messages.EDIT_CHANNEL,
                    action: () => l.default.open(e.id)
                }) : null
            }
        }
    }
]);