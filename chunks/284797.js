            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            }), n("222007");
            var u = n("884691"),
                i = n("85336"),
                r = n("286350");

            function l(t) {
                let [e, n] = u.useState(r.PurchaseState.WAITING);
                return u.useEffect(() => {
                    null != t && t !== i.Step.REVIEW && e !== r.PurchaseState.WAITING && e !== r.PurchaseState.COMPLETED && n(r.PurchaseState.WAITING)
                }, [t, e, n]), [e, n]
            }