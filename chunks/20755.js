            "use strict";

            function n(t) {
                return function() {
                    return t
                }
            }
            var i = function() {};
            i.thatReturns = n, i.thatReturnsFalse = n(!1), i.thatReturnsTrue = n(!0), i.thatReturnsNull = n(null), i.thatReturnsThis = function() {
                return this
            }, i.thatReturnsArgument = function(t) {
                return t
            }, t.exports = i