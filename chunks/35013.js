            "use strict";
            n.r(t), n.d(t, {
                insert: function() {
                    return i
                }
            });

            function i(e, t, n) {
                let i = function(e, t, n) {
                    let i = 0,
                        a = e.length;
                    for (; i < a;) {
                        let l = i + a >>> 1;
                        0 > n(e[l], t) ? i = l + 1 : a = l
                    }
                    return i
                }(e, t, n);
                e.splice(i, 0, t)
            }