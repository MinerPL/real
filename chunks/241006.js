            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
            var u = n("884691");

            function i() {
                let [t, e] = u.useState(null), n = u.useRef(null);
                return u.useEffect(() => {
                    null != t && null != n.current && n.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [t]), {
                    purchaseError: t,
                    setPurchaseError: e,
                    purchaseErrorBlockRef: n
                }
            }