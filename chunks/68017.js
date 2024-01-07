            "use strict";
            e._reverse = function(t) {
                let e = {};
                return Object.keys(t).forEach(function(r) {
                    (0 | r) == r && (r |= 0);
                    let i = t[r];
                    e[i] = r
                }), e
            }, e.der = r("335036")