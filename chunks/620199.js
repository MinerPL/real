            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var a = s("884691"),
                n = s("782340");

            function l(e) {
                let [t, s] = a.useState(n.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMAGE_CTA_DEFAULT_FILENAME), l = null == e ? n.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : n.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT, i = null == e ? n.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_UPLOAD : n.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INFO_COVER_IMAGE_CTA_EDIT_A11Y.format({
                    filename: t
                });
                return {
                    imageCTA: l,
                    imageAriaLabel: i,
                    setFilename: s
                }
            }