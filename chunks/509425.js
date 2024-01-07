            "use strict";
            n.r(t), n.d(t, {
                getApplicationSubscriptionSystemMessageContent: function() {
                    return l
                }
            });
            var a = n("49111"),
                s = n("782340");

            function l(e) {
                let {
                    application: t,
                    username: n,
                    usernameHook: l = a.NOOP
                } = e;
                return null != t ? s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE.format({
                    username: n,
                    applicationName: t.name,
                    usernameHook: l
                }) : s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION.format({
                    username: n,
                    usernameHook: l
                })
            }