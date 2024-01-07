            "use strict";
            n.r(t), n.d(t, {
                useMergedExperimentConfigs: function() {
                    return a
                },
                getMergedExperimentConfigs: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("917351");

            function s(e, t) {
                return (0, r.mergeWith)({}, e, t, (e, t) => e || t)
            }

            function a(e, t, n, r) {
                let a = e.useExperiment(n, r),
                    o = t.useExperiment(n, r);
                return i.useMemo(() => s(a, o), [a, o])
            }

            function o(e, t, n, i) {
                let r = e.getCurrentConfig(n, i),
                    a = t.getCurrentConfig(n, i);
                return s(r, a)
            }