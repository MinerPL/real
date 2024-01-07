            "use strict";
            var e = n("522552");
            t.exports = !e(function() {
                function t() {}
                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            })