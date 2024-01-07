            "use strict";
            n.r(t), n.d(t, {
                isMidjourneyOnboardingFlow: function() {
                    return s
                },
                shouldRedirectToMidjourneyDM: function() {
                    return r
                }
            }), n("446674");
            var i = n("305961"),
                a = n("256896"),
                l = n("760797");

            function s(e) {
                let {
                    guildStore: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t ? t : i.default;
                return 1 === n.getGuildCount() && null != n.getGuild(l.MIDJOURNEY_GUILD_ID) && (0, a.isEligibleForMidjourneyOnboarding)(e)
            }

            function r(e) {
                return e.isDM() && 1 === e.rawRecipients.length && e.rawRecipients[0].id === l.MIDJOURNEY_BOT_ID && s("app")
            }