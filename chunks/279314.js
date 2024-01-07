            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("781738");
            var n = /[A-Z]/g,
                i = /^ms-/,
                o = {};

            function s(e) {
                return "-" + e.toLowerCase()
            }
            var a = function(e) {
                if (o.hasOwnProperty(e)) return o[e];
                var t = e.replace(n, s);
                return o[e] = i.test(t) ? "-" + t : t
            }