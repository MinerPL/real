            "use strict";

            function r(e) {
                var t;
                return function() {
                    return !t && (t = new Promise(function(n) {
                        Promise.resolve().then(function() {
                            t = void 0, n(e())
                        })
                    })), t
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })