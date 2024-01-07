            "use strict";
            a.r(t), a.d(t, {
                acceptPurchaseTerms: function() {
                    return l
                },
                acceptEULA: function() {
                    return n
                }
            });
            var s = a("913144");

            function l() {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function n(e) {
                s.default.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }