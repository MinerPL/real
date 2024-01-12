            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("446674"),
                i = n("957255"),
                a = n("49111");

            function l(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: l,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: r,
                    canManageEmojisAndStickers: o,
                    canManageWebhooks: d,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    canManageGuild: i.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: i.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: i.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: i.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: i.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: i.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: i.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: i.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || l || u || r || o || d || c
            }