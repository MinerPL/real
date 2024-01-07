            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = /\s/,
                o = function(e) {
                    for (var t = e.length; t-- && n.test(e.charAt(t)););
                    return t
                }