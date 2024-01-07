            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("446674"),
                r = a("913144");
            let s = null,
                l = null;
            class o extends n.default.Store {
                get client() {
                    return s
                }
                get cashAppPayComponent() {
                    return l
                }
            }
            o.displayName = "AdyenStore";
            let i = new o(r.default, {
                ADYEN_CREATE_CLIENT_SUCCESS: function(e) {
                    let {
                        client: t
                    } = e;
                    s = t
                },
                ADYEN_TEARDOWN_CLIENT: function() {
                    s = null
                },
                ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function(e) {
                    let {
                        component: t
                    } = e;
                    l = t
                }
            });
            var u = i