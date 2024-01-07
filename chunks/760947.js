            "use strict";

            function a(e) {
                return "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
            }

            function n(e) {
                let [t, s] = e.split("@");
                return "".concat("*".repeat(t.length), "@").concat(s)
            }
            s.r(t), s.d(t, {
                censorPhone: function() {
                    return a
                },
                censorEmail: function() {
                    return n
                }
            }), s("222007")