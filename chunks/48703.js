            "use strict";

            function s(e) {
                let t = document.createElement("a");
                return t.href = e, t.hostname
            }

            function i(e) {
                let t = document.createElement("a");
                return t.href = e, t.protocol
            }
            n.r(t), n.d(t, {
                getHostname: function() {
                    return s
                },
                getProtocol: function() {
                    return i
                }
            })