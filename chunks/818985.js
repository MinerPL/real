            "use strict";

            function r(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[n] || e.formats[e.defaultWidth]
                }
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })