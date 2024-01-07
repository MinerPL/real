            "use strict";
            var e = n("485863").forEach,
                o = n("119500")("forEach");
            t.exports = o ? [].forEach : function(t) {
                return e(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }