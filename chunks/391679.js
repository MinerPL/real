            "use strict";

            function i(e) {
                return e.split(".")[0]
            }

            function r(e) {
                return null == e ? null : i(e)
            }
            n.r(t), n.d(t, {
                extractId: function() {
                    return i
                },
                maybeExtractId: function() {
                    return r
                }
            })