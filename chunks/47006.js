            "use strict";
            a.r(n), a.d(n, {
                default: function() {
                    return d
                }
            });
            var t = a("37983");
            a("884691");
            var s = a("446674"),
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