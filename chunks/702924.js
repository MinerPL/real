            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            }), n("222007");
            var u = n("446674"),
                i = n("877261"),
                r = n("926223"),
                l = n("758764");

            function a() {
                let t = (0, u.useStateFromStores)([r.default], () => r.default.error),
                    [e, n] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.error, l.default.isAwaitingAuthentication]);
                return {
                    paymentError: null != e ? e : t,
                    paymentAuthenticationState: n ? i.PaymentAuthenticationState.PENDING : null != e ? i.PaymentAuthenticationState.ERROR : i.PaymentAuthenticationState.NONE
                }
            }