            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("642906");

            function u() {
                let {
                    step: e,
                    stepConfigs: t
                } = (0, l.usePaymentContext)(), n = t.find(t => t.key === e);
                return null == n ? void 0 : n.options
            }