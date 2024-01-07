            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(i.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }