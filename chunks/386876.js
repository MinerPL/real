            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("424973"), s("222007");
            var a = s("446674"),
                n = s("913144"),
                i = s("8966");
            let r = [];

            function l(e) {
                let {
                    payment: t
                } = e, s = i.default.createFromServer(t), a = r.findIndex(e => e.id === t.id); - 1 === a ? (r.push(s), r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : r[a] = s, r = [...r]
            }
            class u extends a.default.Store {
                getPayment(e) {
                    return r.find(t => t.id === e)
                }
                getPayments() {
                    return r
                }
            }
            u.displayName = "PaymentStore";
            var o = new u(n.default, {
                BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
                    let {
                        payments: t
                    } = e;
                    for (let e of t) {
                        let t = i.default.createFromServer(e),
                            s = r.findIndex(t => t.id === e.id); - 1 !== s ? r[s] = t : r.push(t)
                    }
                    r.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), r = [...r]
                },
                PAYMENT_UPDATE: l,
                BILLING_PAYMENT_FETCH_SUCCESS: l,
                LOGOUT: function() {
                    r = []
                }
            })