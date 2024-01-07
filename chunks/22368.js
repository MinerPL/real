            "use strict";
            n.r(t), n.d(t, {
                usePaymentModalAnimationScene: function() {
                    return i
                }
            }), n("222007");
            var a = n("884691"),
                r = n("85336"),
                s = n("286350");

            function i(e) {
                let {
                    purchaseState: t,
                    currentStep: n,
                    initialScene: i,
                    purchaseScene: o,
                    errorScene: l,
                    successScene: u
                } = e, [d, c] = (0, a.useState)(i);
                return (0, a.useEffect)(() => {
                    t === s.PurchaseState.PURCHASING ? c(o) : t === s.PurchaseState.FAIL && c(l)
                }, [t, o, l]), (0, a.useEffect)(() => {
                    n === r.Step.CONFIRM && c(u)
                }, [n, u]), [d, c]
            }