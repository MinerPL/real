            "use strict";

            function a(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            r.r(t), r.d(t, {
                _: function() {
                    return a
                }
            })