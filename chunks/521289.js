            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("781738");
            var r = {
                start: "end",
                end: "start"
            };

            function a(e) {
                return e.replace(/start|end/g, function(e) {
                    return r[e]
                })
            }