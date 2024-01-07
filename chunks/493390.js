            "use strict";
            l.r(t), l.d(t, {
                openProfileEffectModal: function() {
                    return r
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("77078");
            let r = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedEffectId: r
                } = e;
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await l.el("889793").then(l.bind(l, "889793"));
                    return l => (0, a.jsx)(e, {
                        ...l,
                        initialSelectedEffectId: r,
                        analyticsLocations: t
                    })
                }, {})
            }