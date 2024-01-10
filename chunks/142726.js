            "use strict";
            var i = Object.prototype.toString;
            t.exports = function(t) {
                var e = i.call(t),
                    r = "[object Arguments]" === e;
                return !r && (r = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === i.call(t.callee)), r
            }