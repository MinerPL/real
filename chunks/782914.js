            "use strict";
            s.r(t), s.d(t, {
                getCreatorMonetizationAcceptTermsCheckboxText: function() {
                    return i
                }
            });
            var a = s("701909"),
                n = s("49111"),
                l = s("782340");

            function i() {
                return l.default.Messages.GUILD_ROLE_SUBSCRIPTION_WELCOME_V2_ACCEPT_TERMS_CHECKBOX.format({
                    fullTermsUrl: a.default.getArticleURL(n.HelpdeskArticles.CREATOR_TERMS),
                    creatorRevenuePolicyUrl: a.default.getArticleURL(n.HelpdeskArticles.CREATOR_POLICY)
                })
            }