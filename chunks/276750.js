            "use strict";
            n.r(t), n.d(t, {
                useMeter: function() {
                    return o
                }
            });
            var r = n("890830");

            function o(e) {
                let {
                    progressBarProps: t,
                    labelProps: n
                } = (0, r.useProgressBar)(e);
                return {
                    meterProps: {
                        ...t,
                        role: "meter progressbar"
                    },
                    labelProps: n
                }
            }