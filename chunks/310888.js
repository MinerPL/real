            "use strict";
            a.r(e), a.d(e, {
                useIsNewClassification: function() {
                    return s
                }
            });
            var n = a("249654");
            let s = t => {
                let e = n.default.extractTimestamp(t.id);
                return 864e5 > Math.abs(e - new Date().getTime())
            }