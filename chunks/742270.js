            "use strict";

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function a(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function l() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
            n.r(t), n.d(t, {
                getInviteDynamicLinkTemplate: function() {
                    return i
                },
                getGuildTemplateDynamicLinkTemplate: function() {
                    return a
                },
                getDefaultDynamicLinkTemplate: function() {
                    return l
                }
            })