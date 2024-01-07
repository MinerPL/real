            "use strict";
            n.r(t), n.d(t, {
                isContentDismissed: function() {
                    return _
                },
                useIsContentDismissed: function() {
                    return h
                },
                markContentAsDismissed: function() {
                    return C
                },
                useIsGuildDismissibleContentChannelNoticeShown: function() {
                    return T
                }
            });
            var a = n("446674"),
                s = n("151426"),
                i = n("343885"),
                l = n("570319"),
                r = n("872173"),
                o = n("374363"),
                u = n("599110"),
                d = n("674268"),
                c = n("49111"),
                E = n("994428"),
                f = n("397336");

            function _(e, t) {
                let n = o.default.getDismissedGuildContent(t);
                return null != n && (0, d.hasBit)(n, e)
            }

            function h(e, t) {
                return (0, a.useStateFromStores)([o.default], () => _(e, t))
            }

            function C(e, t, n, a) {
                (0, r.updateUserGuildSettings)(t, n => {
                    if (_(e, t)) return !1;
                    n.dismissedGuildContent = (0, d.addBit)(n.dismissedGuildContent, e)
                }, f.UserSettingsDelay.INFREQUENT_USER_ACTION), n && u.default.track(c.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                    type: s.DismissibleGuildContent[e],
                    guild_id: t,
                    action: null != a ? a : E.ContentDismissActionType.UNKNOWN
                })
            }

            function T(e) {
                let t = (0, l.default)(e, "guild_dismissible_content_utils");
                return i.default.useExperiment({
                    guildId: e,
                    location: "guild_dismissible_content_utils"
                }), !!t && !_(s.DismissibleGuildContent.CLYDE_GUILD_NOTICE_NUX, e) || !1
            }