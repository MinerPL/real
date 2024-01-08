            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                },
                useCanCreateOrAddGuildInDirectory: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("42203"),
                s = n("305961"),
                i = n("957255"),
                r = n("49111");

            function u(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(e.guildId)),
                    n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e.channelId)),
                    u = (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.ADMINISTRATOR, t)),
                    o = (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.MANAGE_MESSAGES, n));
                return {
                    isEntryAdmin: u,
                    canEdit: u || o,
                    canRemove: u || o
                }
            }

            function o(e) {
                return (0, a.useStateFromStores)([i.default], () => i.default.can(r.Permissions.SEND_MESSAGES, e))
            }