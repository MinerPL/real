            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return i
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("525065"),
                r = n("957255"),
                s = n("843455");

            function i(e) {
                let t = (0, l.useStateFromStores)([r.default], () => null != e && r.default.can(s.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function u(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }