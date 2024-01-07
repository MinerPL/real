            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = Function.prototype.toString,
                o = function(e) {
                    if (null != e) {
                        try {
                            return n.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }