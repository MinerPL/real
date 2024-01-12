            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                s = n("957255"),
                a = n("49111");

            function l(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: l,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: o,
                    canManageWebhooks: r,
                    canViewAuditLog: c
                } = (0, i.useStateFromStoresObject)([s.default], () => ({
                    canManageGuild: s.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: s.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: s.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: s.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: s.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: s.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: s.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: s.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || l || u || d || o || r || c
            }