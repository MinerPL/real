            "use strict";
            n.r(t), n.d(t, {
                getGuildProductPurchaseSystemMessageContentMobile: function() {
                    return s
                }
            });
            var a = n("782340");

            function s(e) {
                let {
                    username: t,
                    usernameOnClickHandler: n,
                    productName: s
                } = e;
                return a.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE_MOBILE.astFormat({
                    username: t,
                    usernameHook: n,
                    productName: s
                })
            }