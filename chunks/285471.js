            "use strict";
            s.r(t), s.d(t, {
                updateClientPremiumTypeOverride: function() {
                    return n
                }
            });
            var a = s("913144");
            let n = (e, t) => {
                a.default.dispatch({
                    type: "SET_PREMIUM_TYPE_OVERRIDE",
                    premiumType: e
                }), a.default.dispatch({
                    type: "UPDATE_CLIENT_PREMIUM_TYPE",
                    user: t
                })
            }