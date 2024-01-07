            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("686130"), n("781738");
            let i = /[<>:"/\\|?*\.]/g;
            var a = function(e) {
                return e.replaceAll(i, "").trim().replaceAll(" ", "_")
            }