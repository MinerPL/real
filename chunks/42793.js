            "use strict";
            n.r(t), n.d(t, {
                InviteTypes: function() {
                    return l.InviteTypes
                },
                isGuildScheduledEventInviteEmbed: function() {
                    return s
                },
                isRoleSubscriptionInvite: function() {
                    return r
                },
                isStageInviteEmbed: function() {
                    return u
                },
                isStreamInvite: function() {
                    return o
                },
                isEmbeddedApplicationInvite: function() {
                    return d
                },
                getInviteType: function() {
                    return c
                }
            });
            var i = n("398604"),
                a = n("233069"),
                l = n("91366");

            function s(e) {
                let t = e.guild_scheduled_event;
                return null != t && (0, i.isEventUpcoming)(t)
            }

            function r(e) {
                return e.target_type === l.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE
            }

            function u(e) {
                return null != e.channel && null != e.stage_instance
            }

            function o(e) {
                return e.target_type === l.InviteTargetTypes.STREAM && null != e.target_user
            }

            function d(e) {
                return e.target_type === l.InviteTargetTypes.EMBEDDED_APPLICATION
            }

            function c(e) {
                var t, n;
                if ("number" == typeof e.type) return e.type;
                if ((t = e).type === l.InviteTypes.GROUP_DM || null != t.channel && (0, a.isMultiUserDM)(t.channel.type)) return l.InviteTypes.GROUP_DM;
                return (n = e).type === l.InviteTypes.FRIEND || null == n.guild && null != n.inviter ? l.InviteTypes.FRIEND : l.InviteTypes.GUILD
            }