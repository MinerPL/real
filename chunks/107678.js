            "use strict";

            function r(e) {
                let t = typeof e;
                if ("object" == t) {
                    if (Array.isArray(e)) return "array";
                    if (null === e) return "null"
                }
                return t
            }

            function a(e) {
                return null !== e && "object" == typeof e && !Array.isArray(e)
            }
            n.r(t), n.d(t, {
                typeofJsonValue: function() {
                    return r
                },
                isJsonObject: function() {
                    return a
                }
            })