            "use strict";
            s.r(t), s.d(t, {
                getErrorMessageFromErrorCode: function() {
                    return l
                },
                canSeeVanityUrlSettings: function() {
                    return i
                }
            });
            var a = s("49111"),
                n = s("782340");

            function l(e) {
                switch (e) {
                    case a.AbortCodes.UNKNOWN_CHANNEL:
                        return n.default.Messages.SET_VANITY_URL_ERROR_MESSAGE_UNKNOWN_CHANNEL;
                    case a.AbortCodes.INVALID_PERMISSIONS:
                        return n.default.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_PERMISSIONS;
                    case a.AbortCodes.INVALID_ACCESS:
                        return n.default.Messages.SET_VANITY_URL_ERROR_MESSAGE_INVALID_ACCESS;
                    case a.AbortCodes.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
                        return n.default.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIRED_FOR_PUBLISHED_GUILDS;
                    case a.AbortCodes.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
                        return n.default.Messages.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED;
                    case a.AbortCodes.VANITY_URL_REQUIREMENTS_NOT_MET:
                        return n.default.Messages.SET_VANITY_URL_ERROR_MESSAGE_REQUIREMENTS_NOT_MET;
                    default:
                        return n.default.Messages.CHANGE_VANITY_URL_ERROR
                }
            }

            function i(e) {
                return e.hasFeature(a.GuildFeatures.VANITY_URL) || e.hasFeature(a.GuildFeatures.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode
            }