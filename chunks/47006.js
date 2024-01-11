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
                s = n("957255"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    canManageChannels: s.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: s.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: s.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: s.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(i.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }