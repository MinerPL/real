            "use strict";
            n.r(t), n.d(t, {
                useIsContentDismissed: function() {
                    return f
                },
                markContentAsDismissed: function() {
                    return _
                }
            });
            var a = n("446674"),
                s = n("151426"),
                i = n("872173"),
                l = n("374363"),
                r = n("599110"),
                o = n("674268"),
                u = n("49111"),
                d = n("994428"),
                c = n("397336");

            function E(e, t) {
                let n = l.default.getDismissedGuildContent(t);
                return null != n && (0, o.hasBit)(n, e)
            }

            function f(e, t) {
                return (0, a.useStateFromStores)([l.default], () => E(e, t))
            }

            function _(e, t, n, a) {
                (0, i.updateUserGuildSettings)(t, n => {
                    if (E(e, t)) return !1;
                    n.dismissedGuildContent = (0, o.addBit)(n.dismissedGuildContent, e)
                }, c.UserSettingsDelay.INFREQUENT_USER_ACTION), n && r.default.track(u.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                    type: s.DismissibleGuildContent[e],
                    guild_id: t,
                    action: null != a ? a : d.ContentDismissActionType.UNKNOWN
                })
            }